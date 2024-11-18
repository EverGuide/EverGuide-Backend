import React, { useState } from "react";
import styles from "../styles/Search.module.css";
import mascot2 from "../img/mascot2.png";

const Search = () => {
    function handleStartBtnClick() {
        window.location.href = "/Userform";
    }

    return (
        <div>
            <div className={styles.Wrapper}>
                <div className={styles.LogoSection}>
                    <img className={styles.mascot} src={mascot2} alt=""/>
                </div>
                <div className={styles.MainSection}>
                    <div className={styles.Intro}>
                        <div className={styles.Title1}>
                            숨겨진 
                            <br />
                            복지 혜택 찾기
                        </div>
                        <div className={styles.Title2}>
                            다양한 복지혜택과 정책이 있지만,
                            <br />
                            복잡해서, 몰라서, 불친절해서 
                            <br />
                            놓친 경험이 있으신가요?
                            <br />
                            저희 Everguide가 한번에 찾아드릴게요!
                        </div>
                    </div>
                    <div className={styles.ButtonSection}>
                        <button
                            className={styles.startBtn}
                            onClick={handleStartBtnClick}
                        >
                        찾아보기
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Search;