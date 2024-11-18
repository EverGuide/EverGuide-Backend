import React from "react";
import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import styles from "../styles/Headers.module.css";

import logo from "../img/logo.png";
import menu from "../img/menu.png";
import search from "../img/search.png";
import alarm from "../img/alarm.png";
import smalllogo from "../img/smalllogo.png";


function Headers() {
    const [isAlarmClicked, setIsAlarmClicked] = useState(true);
    const [open, setOpen] = useState(false);

    // const [cookies, setCookie, removeCookie] = useCookies([
    // 	"token",
    // 	"socialToken",
    // ]);
    const [isuser, setIsuser] = useState(true);
    //dd
    function handleHomeClick() {
        window.location.href = "/";
    }

    // 페이지가 처음 로드될 때만 토큰을 설정하도록 수정
    // useEffect(() => {
    // 	const storedSocialToken = cookies.socialToken;
    // 	if (storedSocialToken && !cookies.token) {
    // 		setCookie("token", storedSocialToken, {
    // 			path: "/",
    // 			domain: "www.vivi-o.site",
    // 		});
    // 		console.log("설정 후 토큰 쿠키:", cookies.token);
    // 	}
    // }, []);

    // 토큰 상태를 체크하여 사용자 상태 업데이트
    // useEffect(() => {
    // 	if (
    // 		!cookies.token ||
    // 		cookies.token === undefined ||
    // 		cookies.token === "undefined"
    // 	) {
    // 		setIsuser(false);
    // 	} else {
    // 		setIsuser(true);
    // 	}
    // }, [cookies.token]);

    // 로그아웃 함수
    function handleLogoutClick() {
        // window.location.href = "/";
        // if (cookies.socialToken) {
        // 	removeCookie("socialToken", { path: "/", domain: "vivi-o.site" });
        // 	removeCookie("token", { path: "/", domain: "www.vivi-o.site" });
        // } else {
        // 	removeCookie("token", { path: "/", domain: "vivi-o.site" });
        // }
        // // 쿠키에서 토큰을 제거하고 사용자 상태를 업데이트합니다.
    }

    function handleLoginClick() {
        window.location.href = "/Login";
    }
    function handleSearchClick() {
        window.location.href = "/Search";
    }

    return (
        <div className={styles.headercontainer}>
            <div className={styles.left}>
                <div className={styles.menuleft}>
                    <img
                        onClick={handleHomeClick}
                        style={{ width: "28px", height: "28px" }}
                        src={menu}
                        alt="menuimg"
                    />
                </div>

                <div className={styles.logoleft}>
                    <img
                        onClick={handleHomeClick}
                        style={{ width: "110px", height: "20px" }}
                        src={logo}
                        alt="everguide-logo"
                    />
                </div>
            </div>
            <div className={styles.navelement} style={{ color: "#f1f1f1" }}>
                <div style={{ marginRight: "6vw" }} onClick={handleHomeClick}>
                    <p>Home</p>
                </div>
                <div
                    style={{ marginRight: "6vw" }}
                >
                    <p>Service</p>
                </div>
                <div
                    style={{ marginRight: "1vw" }}
                    onClick={() => {
                        setOpen(true);
                        setIsAlarmClicked(!isAlarmClicked);
                    }}
                >
                </div>
                <img
                    onClick={handleHomeClick}
                    style={{ width: "28px", height: "28px" }}
                    src={search}
                    alt="searchimg"
                />       
                <img
                    onClick={handleHomeClick}
                    style={{ width: "28px", height: "28px" }}
                    src={alarm}
                    alt="alarmimg"
                />       
                <img
                    onClick={handleHomeClick}
                    style={{ width: "30px", height: "30px" }}
                    src={smalllogo}
                    alt="smalllogoimg"
                />       
            </div>
        </div>
    );
}

export default Headers;

const menuleft = styled.div`
    background: #a8d9be;
    position: absolute;
    top: 100%;
    width: 250px;
    text-align: center;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    z-index: 9;

    font-family: "NanumSquareRoundOTF";
    font-style: normal;
    font-weight: 800;
    font-size: 22px;
    line-height: 140%;
    letter-spacing: 0.02em;
    text-transform: capitalize;

    color: #ffffff;


    &:after {
        content: "";
        height: 0;
        width: 0;
        position: absolute;
        top: -3px;
        transform: translateY(-50%);
        border: 20px solid transparent;
        border-top-width: 0;
        border-bottom-color: #a8d9be;
    }

    ${({ isDropped }) =>
        isDropped &&
        css`
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        `};
`;

const Ul = styled.ul`
    & > li {
        margin-bottom: 10px;
    }

    & > li:first-of-type {
        margin-top: 10px;
    }

    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Li = styled.li``;

const LinkWrapper = styled.a`
    font-size: 22px;
    text-decoration: none;
    color: white;
`;