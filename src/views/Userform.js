import { AxiosError } from 'axios';
import React, { useState } from 'react';
import styles from '../styles/Userform.module.css';
import Calendar from '../components/Calendar';
import { UserformAPI } from '../apis/user.js';

function Userform() {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [date, setDate] = useState('');
  const [selectedSex, setSelectedSex] = useState('');
  const [selectedLocal, setSelectedLocal] = useState('');
  const [selectedHold, setSelectedHold] = useState('');
  const [selectedDisease, setSelectedDisease] = useState('');
  const [selectedDisper, setSelectedDisper] = useState('');
  const [selectedLive, setSelectedLive] = useState('');
  const [selectedLow, setSelectedLow] = useState('');
  const [selectedBasic, setSelectedBasic] = useState('');
  const [selectedMedic, setSelectedMedic] = useState('');
  
  const onChangeName = (e) => {
    setName(e.target.value);
    console.log(`이름 작성: ${e.target.value}`);
  };

  const handleSexSelect =  (e) => {
    e.preventDefault();
    setSelectedSex(e.target.value);
    console.log(`성별 선택됨: ${e.target.value}`);
  };

  const handleLocalSelect =  (e) => {
    e.preventDefault();
    setSelectedLocal(e.target.value);
    console.log(`거주 지역 선택됨: ${e.target.value}`);
  };

  const handleHoldSelect = (e) => {
    e.preventDefault();
    setSelectedHold(e.target.value);
    console.log(`1인 가구 여부 선택됨: ${e.target.value}`);
  };
  
  const handleDisperSelect = (e) => {
    e.preventDefault();
    setSelectedDisper(e.target.value);
    console.log(`장애인/한부모/조손 여부 선택됨: ${e.target.value}`);
  };

  const handleLowSelect = (e) => {
    e.preventDefault();
    setSelectedLow(e.target.value);
    console.log(`저소득 여부 선택됨: ${e.target.value}`);
  };

  const handleLiveSelect = (e) => {
    e.preventDefault();
    setSelectedLive(e.target.value);
    console.log(`주거 형태 선택됨: ${e.target.value}`);
  };

  const handleBasicSelect = (e) => {
    e.preventDefault();
    setSelectedBasic(e.target.value);
    console.log(`기초 생활 수급자 여부 선택됨: ${e.target.value}`);
  };

  const handleDiseaseSelect = (e) => {
    e.preventDefault();
    setSelectedDisease(e.target.value);
    console.log(`기저 질환 여부 선택됨: ${e.target.value}`);
  };

  const handleMedicSelect = (e) => {
    e.preventDefault();
    setSelectedMedic(e.target.value);
    console.log(`의료 지원 필요 여부 선택됨: ${e.target.value}`);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('폼이 제출되었습니다.');
  };

  const onApply = () => {
    if (
      name &&
      year &&
      month &&
      date &&
      selectedLocal && 
      selectedHold && 
      selectedDisease && 
      selectedDisper && 
      selectedLive && 
      selectedLow && 
      selectedBasic && 
      selectedMedic
    ) {
      // 서버에 데이터 전송
      onRegisterUserInfo();
      window.location.href = "/SearchRes";
    } else {
      // createToast('입력값을 확인해주세요.');
    }
  };

  const onRegisterUserInfo = async () => {
    try {
      // 'O'를 true로, 'X'를 false로 변환
      const response = await UserformAPI({
        name: name,
        birthdate: `${year}-${month}-${date}`, // YYYY-MM-DD 형식으로 변환
        gender: selectedSex,
        region: selectedLocal,
        single_household: selectedHold === 'O', // 'O'를 true로 변환
        has_chronic_disease: selectedDisease === 'O', // 'O'를 true로 변환
        is_disabled_or_single_parent_or_grandparent: selectedDisper === 'O', // 'O'를 true로 변환
        housing_type: selectedLive,
        is_low_income: selectedLow === 'O', // 'O'를 true로 변환
        is_basic_living_recipient: selectedBasic === 'O', // 'O'를 true로 변환
        needs_medical_support: selectedMedic === 'O' // 'O'를 true로 변환
      });
      console.log('서버 응답:', response.data);
    } catch (err) {
      if (err instanceof AxiosError) {
        console.error('Axios 에러:', err.response?.data);
      } else {
        console.error('다른 에러:', err.message);
      }
    }
  };
  
  

  return (
    <div>
      <div className={styles.Wrapper}>
        <div className={styles.MainSection}>
          <div className={styles.InputSection}>
            <div className={styles.Intro}>
              <div className={styles.Title1}>
                개인 정보 입력
              </div>
              <div className={styles.Title2}>
                정보를 입력하고 나에게 딱맞는 복지혜택과 정책을 챙겨가요               
              </div>
            </div>
            <form 
              className={styles.Form}
              onSubmit={onSubmit}
            >
              <label className={styles.Label}>
              <span>이름</span>
              <input
                className={styles.NameInputBox}
                type="text"
                id="name"
                name="name"
                value={name}
                placeholder='이름을 작성해주세요.' 
                onChange={onChangeName}
                required
              />
              </label>
            
              <label className={styles.Label}>
              <span>생년월일</span>
                <div className={styles.BirthInputSection}>
                  <input
                    className={styles.BirthInputBox}
                    type="text"
                    id="year"
                    name="year"
                    value={year}
                    placeholder="YYYY"
                    readOnly={true}
                  />
                  <input
                    className={styles.BirthInputBox}
                    type="text"
                    id="month"
                    name="month"
                    value={month}
                    placeholder="MM"
                    readOnly={true}
                  />
                  <input
                    className={styles.BirthInputBox}
                    type="text"
                    id="date"
                    name="date"
                    value={date}
                    placeholder="DD"
                    readOnly={true}
                  />
                  <Calendar
                    setYear={setYear}
                    setMonth={setMonth}
                    setDate={setDate}
                  />
                </div>
              </label>

              <label className={styles.Label}>
              <span>성별</span>
                <div className={styles.SexSelectBox}>
                  <button
                    className={`${styles.SexButton} ${selectedSex === '남자' ? styles.active : ''}`}
                    value="남자"
                    onClick={handleSexSelect}
                    aria-pressed={selectedSex === '남자'}
                  >
                    남자
                  </button>
                  <button
                    className={`${styles.SexButton} ${selectedSex === '여자' ? styles.active : ''}`}
                    value="여자"
                    onClick={handleSexSelect}
                    aria-pressed={selectedSex === '여자'}
                  >
                    여자
                  </button>
                </div>
              </label>

              <label className={styles.Label}>
              <span>거주 지역</span>
                <div className={styles.LocalSelectBox}>
                  <button
                    className={`${styles.LocalButton} ${selectedLocal === '서울' ? styles.active : ''}`}
                    value="서울"
                    onClick={handleLocalSelect}
                    aria-pressed={selectedLocal === '서울'}
                  >
                    서울
                  </button>
                  <button
                    className={`${styles.LocalButton} ${selectedLocal === '인천' ? styles.active : ''}`}
                    value="인천"
                    onClick={handleLocalSelect}
                    aria-pressed={selectedLocal === '인천'}
                  >
                    인천
                  </button>
                  <button
                    className={`${styles.LocalButton} ${selectedLocal === '부산' ? styles.active : ''}`}
                    value="부산"
                    onClick={handleLocalSelect}
                    aria-pressed={selectedLocal === '부산'}
                  >
                    부산
                  </button>
                  <button
                    className={`${styles.LocalButton} ${selectedLocal === '경기' ? styles.active : ''}`}
                    value="경기"
                    onClick={handleLocalSelect}
                    aria-pressed={selectedLocal === '경기'}
                  >
                    경기
                  </button>
                </div>
                <div className={styles.LocalSelectBox}>
                  <button
                    className={`${styles.LocalButton} ${selectedLocal === '충청북도' ? styles.active : ''}`}
                    value="충청북도"
                    onClick={handleLocalSelect}
                    aria-pressed={selectedLocal === '충청북도'}
                  >
                    충청북도
                  </button>
                  <button
                    className={`${styles.LocalButton} ${selectedLocal === '충청남도' ? styles.active : ''}`}
                    value="충청남도"
                    onClick={handleLocalSelect}
                    aria-pressed={selectedLocal === '충청남도'}
                  >
                    충청남도
                  </button>
                  <button
                    className={`${styles.LocalButton} ${selectedLocal === '전라북도' ? styles.active : ''}`}
                    value="전라북도"
                    onClick={handleLocalSelect}
                    aria-pressed={selectedLocal === '전라북도'}
                  >
                    전라북도
                  </button>
                  <button
                    className={`${styles.LocalButton} ${selectedLocal === '전라남도' ? styles.active : ''}`}
                    value="전라남도"
                    onClick={handleLocalSelect}
                    aria-pressed={selectedLocal === '전라남도'}
                  >
                    전라남도
                  </button>
                </div>
                <div className={styles.LocalSelectBox}>
                  <button
                    className={`${styles.LocalButton} ${selectedLocal === '경상북도' ? styles.active : ''}`}
                    value="경상북도"
                    onClick={handleLocalSelect}
                    aria-pressed={selectedLocal === '경상북도'}
                  >
                    경상북도
                  </button>
                  <button
                    className={`${styles.LocalButton} ${selectedLocal === '경상남도' ? styles.active : ''}`}
                    value="경상남도"
                    onClick={handleLocalSelect}
                    aria-pressed={selectedLocal === '경상남도'}
                  >
                    경상남도
                  </button>
                  <button
                    className={`${styles.LocalButton} ${selectedLocal === '강원도' ? styles.active : ''}`}
                    value="강원도"
                    onClick={handleLocalSelect}
                    aria-pressed={selectedLocal === '강원도'}
                  >
                    강원도
                  </button>
                  <button
                    className={`${styles.LocalButton} ${selectedLocal === '제주도' ? styles.active : ''}`}
                    value="제주도"
                    onClick={handleLocalSelect}
                    aria-pressed={selectedLocal === '제주도'}
                  >
                    제주도
                  </button>
                </div>
              </label>     

              <label className={styles.Label}>
              <span>1인 가구 여부</span>
                <div className={styles.HoldSelectBox}>
                  <button
                    className={`${styles.HoldButton} ${selectedHold === 'O' ? styles.active : ''}`}
                    value="O"
                    onClick={handleHoldSelect}
                    aria-pressed={selectedHold === 'O'}
                  >
                    O
                  </button>
                  <button
                    className={`${styles.HoldButton} ${selectedHold === 'X' ? styles.active : ''}`}
                    value="X"
                    onClick={handleHoldSelect}
                    aria-pressed={selectedHold === 'X'}
                  >
                    X
                  </button>
                </div>
              </label>  

              <label className={styles.Label}>
              <span>기저 질환 여부</span>
                <div className={styles.DiseaseSelectBox}>
                  <button
                    className={`${styles.DiseaseButton} ${selectedDisease === 'O' ? styles.active : ''}`}
                    value="O"
                    onClick={handleDiseaseSelect}
                    aria-pressed={selectedDisease === 'O'}
                  >
                    O
                  </button>
                  <button
                    className={`${styles.DiseaseButton} ${selectedDisease === 'X' ? styles.active : ''}`}
                    value="X"
                    onClick={handleDiseaseSelect}
                    aria-pressed={selectedDisease === 'X'}
                  >
                    X
                  </button>
                </div>
              </label>  

              <label className={styles.Label}>
              <span>장애인, 한부모·조손 여부</span>
                <div className={styles.DisperSelectBox}>
                  <button
                    className={`${styles.DisperButton} ${selectedDisper === 'O' ? styles.active : ''}`}
                    value="O"
                    onClick={handleDisperSelect}
                    aria-pressed={selectedDisper === 'O'}
                  >
                    O
                  </button>
                  <button
                    className={`${styles.DisperButton} ${selectedDisper === 'X' ? styles.active : ''}`}
                    value="X"
                    onClick={handleDisperSelect}
                    aria-pressed={selectedDisper === 'X'}
                  >
                    X
                  </button>
                </div>
              </label>  

              <label className={styles.Label}>
              <span>주거 형태</span>
                <div className={styles.LiveSelectBox}>
                  <button
                    className={`${styles.LiveButton} ${selectedLive === '자가 거주' ? styles.active : ''}`}
                    value="자가 거주"
                    onClick={handleLiveSelect}
                    aria-pressed={selectedLive === '자가 거주'}
                  >
                    자가 거주
                  </button>
                  <button
                    className={`${styles.LiveButton} ${selectedLive === '임대 주택 거주' ? styles.active : ''}`}
                    value="임대 주택 거주"
                    onClick={handleLiveSelect}
                    aria-pressed={selectedLive === '임대 주택 거주'}
                  >
                    임대 주택 거주
                  </button>
                  <button
                    className={`${styles.LiveButton} ${selectedLive === '농어촌 지역 거주' ? styles.active : ''}`}
                    value="농어촌 지역 거주"
                    onClick={handleLiveSelect}
                    aria-pressed={selectedLive === '농어촌 지역 거주'}
                  >
                    농어촌 지역 거주
                  </button>
                </div>
              </label>  

              <label className={styles.Label}>
              <span>저소득자 대상 여부</span>
                <div className={styles.LowSelectBox}>
                  <button
                    className={`${styles.LowButton} ${selectedLow === 'O' ? styles.active : ''}`}
                    value="O"
                    onClick={handleLowSelect}
                    aria-pressed={selectedLow === 'O'}
                  >
                    O
                  </button>
                  <button
                    className={`${styles.LowButton} ${selectedLow === 'X' ? styles.active : ''}`}
                    value="X"
                    onClick={handleLowSelect}
                    aria-pressed={selectedLow === 'X'}
                  >
                    X
                  </button>
                </div>
              </label>  

              <label className={styles.Label}>
              <span>기초 생활 수급자 및 차상위 계층 여부 </span>
                <div className={styles.BasicSelectBox}>
                  <button
                    className={`${styles.BasicButton} ${selectedBasic === 'O' ? styles.active : ''}`}
                    value="O"
                    onClick={handleBasicSelect}
                    aria-pressed={selectedBasic === 'O'}
                  >
                    O
                  </button>
                  <button
                    className={`${styles.BasicButton} ${selectedBasic === 'X' ? styles.active : ''}`}
                    value="X"
                    onClick={handleBasicSelect}
                    aria-pressed={selectedBasic === 'X'}
                  >
                    X
                  </button>
                </div>
              </label>  

              <label className={styles.Label}>
              <span>의료 지원 필요 여부 </span>
                <div className={styles.MedicSelectBox}>
                  <button
                    className={`${styles.MedicButton} ${selectedMedic === 'O' ? styles.active : ''}`}
                    value="O"
                    onClick={handleMedicSelect}
                    aria-pressed={selectedMedic === 'O'}
                  >
                    O
                  </button>
                  <button
                    className={`${styles.MedicButton} ${selectedMedic === 'X' ? styles.active : ''}`}
                    value="X"
                    onClick={handleMedicSelect}
                    aria-pressed={selectedMedic === 'X'}
                  >
                    X
                  </button>
                </div>
              </label>  
              </form>
              </div>
              <div className={styles.ButtonSection}>
              {
                name &&
                year &&
                month &&
                date &&
                selectedLocal && 
                selectedHold && 
                selectedDisease && 
                selectedDisper && 
                selectedLive && 
                selectedLow && 
                selectedBasic && 
                selectedMedic ? 
                (
                <button type="submit" className={styles.SucButton} onClick={onApply}>
                  제출하기
                </button>
                ) : (
                <button className={styles.Button}>
                  제출하기
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
  );
}

export default Userform;