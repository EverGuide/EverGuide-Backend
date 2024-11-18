// src/apis/UserformAPI.js
import axios from 'axios';
import { UserformRequest } from '../models/UserformRequest'; // UserformRequest 경로 확인
import { UserformResponse } from '../models/UserformResponse'; // UserformResponse 경로 확인

const PREFIX = 'http://localhost:8000/Userform'; // 서버 URL

export const UserformAPI = async (userInfo) => {
  // UserformRequest 객체로 변환
  const requestData = new UserformRequest(
    userInfo.name,
    userInfo.birthdate,
    userInfo.region,
    userInfo.single_household,
    userInfo.has_chronic_disease,
    userInfo.is_disabled_or_single_parent_or_grandparent,
    userInfo.housing_type,
    userInfo.is_low_income,
    userInfo.is_basic_living_recipient,
    userInfo.needs_medical_support
  );

  try {
    // POST 요청을 보내고 응답 처리
    const response = await axios.post(PREFIX, requestData);

    // UserformResponse 객체로 변환하여 반환
    return new UserformResponse(
      response.data.status,
      response.data.message,
      response.data.isSuccess,
      response.data.success,
      response.data.code,
      response.data.detail
    );
  } catch (error) {
    // 에러 처리
    console.error('API 호출 중 오류 발생:', error);
    throw error; // 에러를 다시 던져 호출자에게 전달
  }
};
