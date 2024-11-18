import React, { useState } from 'react'
import styles from '../styles/SelfIntroduce.module.css';
import wait from '../sad Yong.png';
import start from '../intromascot.png';


function SelfIntroduce() {
  const [isClick, setisClick] = useState(false);
  const [isLoding, setisLoding] = useState("end");
  
  function handleClick(){
    setisClick(true);
  }
  function handleCheckClick(){
    setisLoding("loding");
    setTimeout(() => {
      setisLoding("end");
  }, 5000);
  }
  
  return (
    <div>
      {isClick && <div>
      {isLoding === "start" ?(
        <div className={styles.Back2}>
          <div className={styles.insertCt}>
            <div className={styles.ques1}>Q. 질문을 입력해주세요</div>
            <input className={styles.text1}></input>
            <div className={styles.ques2}>Q. 글자 제한 수를<br/>입력해주세요</div>
            <input className={styles.text2}></input>
            <div className={styles.ques3}>Q. 자기소개서 내용을 입력해주세요</div>
            <textarea className={styles.text3}></textarea>
            <div className={styles.btn2} onClick={handleCheckClick}> 검사하기</div>
          </div>
          <div className={styles.resultCt}></div>
        </div>
      ) : isLoding ==="loding" ? (
        <div className={styles.Back2}>
          <div className={styles.insertCt}>
            <div className={styles.ques1}>Q. 질문을 입력해주세요</div>
            <input className={styles.text1}></input>
            <div className={styles.ques2}>Q. 글자 제한 수를<br/>입력해주세요</div>
            <input className={styles.text2}></input>
            <div className={styles.ques3}>Q. 자기소개서 내용을 입력해주세요</div>
            <textarea className={styles.text3}></textarea>
            <div className={styles.btn2} onClick={handleCheckClick}> 다시 검사하기</div>
          </div>
          <div className={styles.resultCt}>
            <img
            className={styles.wait}
            src={wait}
            alt='waiting'/>
          </div>
          <div className={styles.waittxt}>잠시만 기다려주세요 용복이가 수정 중 이에요~</div>
        </div>
      ) : (
        <div className={styles.Back2}>
          <div className={styles.insertCt}>
            <div className={styles.ques1}>Q. 질문을 입력해주세요</div>
            <input className={styles.text1}></input>
            <div className={styles.ques2}>Q. 글자 제한 수를<br/>입력해주세요</div>
            <input className={styles.text2}></input>
            <div className={styles.ques3}>Q. 자기소개서 내용을 입력해주세요</div>
            <textarea className={styles.text3}></textarea>
            <div className={styles.btn2} onClick={handleCheckClick}> 다시 검사하기</div>
          </div>
          <div className={styles.resultCt}>
            <div className={styles.res}></div>
          </div>
        </div>
      )
    }</div>}
      
      {!isClick && (
      <div className={styles.Back}>
        <img
        className={styles.mascot}
        src={start}
        alt='mascot'/>
        <div className={styles.Container}>
          <div className={styles.title}>자기소개서 첨삭</div>
          <div className={styles.content}>자기소개서 쓰기 많이 어렵지 않나요?<br/> 용복이가 도와줄거에요 걱정마세요</div>
          <div className={styles.btn} onClick={handleClick}>시작하기</div>
        </div>
      </div>
      )}
    </div>
  )
}

export default SelfIntroduce