// src/models/UserformResponse.js

export class UserformResponse {
    constructor(status, message, isSuccess, success, code, detail) {
      this.status = status;
      this.message = message;
      this.isSuccess = isSuccess;
      this.success = success;
      this.code = code;
      this.detail = detail;
    }
  }
  