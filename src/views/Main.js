import React from "react";
import styles from "../styles/Main.module.css";
import mascot1 from "../img/mascot1.png";

function Main() {

    function handleStartBtnClick() {
        window.location.href = "/Search";
    }

    return (
        <div className={styles.Wrapper}>
            <div className={styles.MainSection}>
                <div className={styles.Intro}>
                    <div className={styles.Title1}>나의 숨겨진 복지 혜택 찾기</div>
                    <div className={styles.Title2}>
                    EverGuide가 
                    <br />
                    정부나 복지시설에서 내가 받을 수 있는 
                    <br />
                    복지가 있는지 찾아줍니다!         
                    </div>
                    <div className={styles.ButtonSection}>
                        <button
                            className={styles.StartBtn}
                            onClick={handleStartBtnClick}
                        >
                        찾아보기
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.LogoSection}>
                <img className={styles.mascot} src={mascot1} alt=""/>
            </div>
        </div>
    );
}

export default Main;