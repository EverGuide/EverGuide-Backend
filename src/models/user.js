// ../models/user.js
export { UserformRequest } from './UserformRequest'; // UserformRequest를 내보내기
export { UserformResponse } from './UserformResponse'; // 이미 내보내고 있는 UserformResponse

// UserformRequest 클래스 정의
class UserformRequest {
    constructor(
      name, 
      birthdate, 
      region,
      single_household,
      has_chronic_disease, 
      is_disabled_or_single_parent_or_grandparent, 
      housing_type,
      is_low_income,
      is_basic_living_recipient,
      needs_medical_support
    ) {
      this.name = name;
      this.birthdate = birthdate;
      this.region = region;
      this.single_household = single_household;
      this.has_chronic_disease = has_chronic_disease;
      this.is_disabled_or_single_parent_or_grandparent = is_disabled_or_single_parent_or_grandparent;
      this.housing_type = housing_type;
      this.is_low_income = is_low_income;
      this.is_basic_living_recipient = is_basic_living_recipient;
      this.needs_medical_support = needs_medical_support;
    }
  }
  
  // UserformResponse 클래스 정의
  class UserformResponse {
    constructor(status, message, isSuccess, success, code, detail) {
      this.status = status;
      this.message = message;
      this.isSuccess = isSuccess;
      this.success = success;
      this.code = code;
      this.detail = detail;
    }
  }
  
  export { UserformRequest, UserformResponse };
  