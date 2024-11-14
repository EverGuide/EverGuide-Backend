from fastapi import FastAPI, HTTPException, Query, Depends
from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import date
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

#CORS 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React 앱의 주소
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



# 샘플 데이터베이스 대체
user_detailed_data_db = {}

# 사용자 상세 정보 요청 모델
class UserDetailedInfo(BaseModel):
    name: str
    birthdate: date
    gender: str = Field(..., pattern="^(여성|남성)$")
    region: str = Field(..., pattern="^(서울|인천|부산|경기|충청북도|충청남도|전라북도|전라남도|경상북도|경상남도|강원도|제주도)$")
    single_household: bool
    has_chronic_disease: bool
    is_disabled_or_single_parent_or_grandparent: bool
    housing_type: str = Field(..., pattern="^(자가 거주|임대 주택 거주|농어촌 지역 거주)$")
    is_low_income: bool
    is_basic_living_recipient: bool
    needs_medical_support: bool
    

# 성공 응답 모델
class SuccessResponse(BaseModel):
    status: str = "success"
    message: str

# 오류 응답 모델
class ErrorResponse(BaseModel):
    status: str = "error"
    message: str

# 사용자 상세 정보 입력 API
@app.post("/Userform", response_model=SuccessResponse, responses={400: {"model": ErrorResponse}})
async def save_user_detailed_info(user_info: UserDetailedInfo):
    # 사용자 상세 정보 저장
    user_detailed_data_db[user_info.name] = user_info.dict()

    # 성공 응답 반환
    return {
        "status": "success",
        "message": "User detailed information saved successfully."
    }
    
#샘플 db
recommendations_db = {
    "user123": [
        {
            "정책_이름": "저소득 1인가구 주거안정 지원사업",
            "정책_종류": "주거복지",
            "신청방법": "주민센터 방문 신청 또는 복지로 온라인 신청",
            "지원_주기": "월별 지원",
            "정책_개요": "저소득 1인 가구의 주거비 부담 완화를 위해 월 최대 20만원의 주거급여를 지원하는 제도입니다. 소득인정액이 기준중위소득 45% 이하인 가구가 대상입니다.",
            "정책_담당_부서": "충청남도 주거복지과",
            "정책_세부_링크": "https://sample.chungnam.go.kr/housing/support"
        },
        {
            "정책_이름": "1인가구 건강관리 지원사업",
            "정책_종류": "건강복지",
            "신청방법": "보건소 방문 신청",
            "지원_주기": "연 1회",
            "정책_개요": "1인가구의 건강증진을 위한 정기 건강검진과 맞춤형 건강상담을 제공하는 프로그램입니다. 기초생활수급자 및 차상위계층 우선 지원됩니다.",
            "정책_담당_부서": "충청남도 건강정책과",
            "정책_세부_링크": "https://sample.chungnam.go.kr/health/checkup"
        },
        {
            "정책_이름": "저소득층 생계비 지원사업",
            "정책_종류": "생활복지",
            "신청방법": "복지로 웹사이트 온라인 신청",
            "지원_주기": "분기별 지원",
            "정책_개요": "저소득 가구의 생활안정을 위해 분기별 생계비를 지원하는 제도입니다. 기초생활수급자를 대상으로 하며, 가구당 최대 분기별 50만원을 지원합니다.",
            "정책_담당_부서": "충청남도 사회복지과",
            "정책_세부_링크": "https://sample.chungnam.go.kr/welfare/living"
        }
    ]
}

# 추천 정보 모델
class Recommendation(BaseModel):
    정책_이름: str
    정책_종류: str
    신청방법: str
    지원_주기: str
    정책_개요: str
    정책_담당_부서: str
    정책_세부_링크: str

# 성공 응답 모델
class SuccessResponse(BaseModel):
    status: str = "success"
    message: str

# 오류 응답 모델
class ErrorResponse(BaseModel):
    status: str = "error"
    message: str

# 맞춤 정보 조회 API
@app.get("/SearchRes", response_model=List[Recommendation], responses={404: {"model": ErrorResponse}})
async def get_recommendations(user_id: str = Query(...)):
    # 사용자 추천 정보 조회
    recommendations = recommendations_db.get(user_id)
    if not recommendations:
        raise HTTPException(status_code=404, detail="User not found or no recommendations available.")

    # 추천 정보 반환
    return recommendations

# Uvicorn을 사용하여 애플리케이션 실행
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)


