import React, { useState, useEffect } from 'react';
import axios from 'axios';
import running from '../img/mascot1.png';
import styles from '../styles/SearchRes.module.css';

function SearchRes() {
  const [filterText, setFilterText] = useState("");  // 필터 텍스트 상태
  const [policyList, setPolicyList] = useState([]);  // 정책 목록 상태
  const [loading, setLoading] = useState(true);  // 로딩 상태

  // 컴포넌트 마운트 시 정책 데이터 가져오기
  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        // 사용자의 정보 (예시로 birthdate, residence 등)
        const userId = "user123";  // 예시로 설정된 사용자 ID

        // GET 요청을 사용하여 복지 정책 목록을 받아옵니다.
        const response = await axios.get(`http://localhost:8000/SearchRes?user_id=${userId}`);
        
        // 받아온 데이터에서 정책 목록을 상태로 설정
        if (response.data && Array.isArray(response.data)) {
          setPolicyList(response.data);
        } else {
          console.log("No policies found.");
        }
      } catch (error) {
        console.error("Error fetching policies:", error);
      } finally {
        // 로딩 상태 종료
        setLoading(false);
      }
    };

    fetchPolicies();  // 정책 데이터를 가져옵니다.
  }, []);  // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 실행

  // 필터링된 정책 목록
  const filteredPolicies = filterText === ""
    ? policyList  // 필터 텍스트가 없을 때 모든 정책을 보여줍니다.
    : policyList.filter(policy =>
        policy.정책_종류.includes(filterText)  // 필터 텍스트가 있을 때 정책 종류에 맞는 정책만 보여줍니다.
      );

  return (
    <div className={styles.back}>
      <div style={{ 
        marginTop: "80px", 
        width: "1600px", 
        height: "200px" 
        
        }}>{!loading && (
          <div>
            <div className={styles.title1}>한승우님에게 해당하는 정책은 다음과 같아요!</div>
            <div className={styles.title2}>지원 정책을 클릭하면 지원 사이트로 바로 이동해요. </div>
              <div className={styles.filter}>필터
                <input
                  className={styles.box}
                  type="text"
                  value={filterText}
                  onChange={(e) => setFilterText(e.target.value)}>
                </input>
              </div>
          </div>
        )}

        {loading && (
          <div>
            <div className={styles.title}>정보를 열심히 찾는 중이에요.</div>
          </div>
        )}

        <div className={styles.contentwrap}>
          {loading ? (
            <div style={{ justifyContent: "center", display: "flex" }}>
              <img className={styles.loding} src={running} alt="loding" />
            </div>
          ) : (
            filteredPolicies.map((policy, index) => (
              <div key={index} className={styles.content}>
                <div>{policy.정책_이름}</div>
                <span>종류 : {policy.정책_종류}<br /></span>
                <span>기간 : {policy.지원_주기}<br /></span>
                <span>대상 : {policy.정책_담당_부서}<br /></span>
                <span>내용 : {policy.정책_개요}<br /></span>
                <span>신청 방법 : {policy.신청방법}<br /></span>
                <a href={policy.정책_세부_링크} target="_blank" rel="noopener noreferrer">지원 사이트</a>
              </div>
            ))
          )}<div className={styles.Title1}></div>
        </div>
      </div>
    </div>
  );
}

export default SearchRes;