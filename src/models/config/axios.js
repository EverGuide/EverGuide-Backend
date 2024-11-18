function APIBaseResponse(isSuccess, success, message, code, status) {
    this.isSuccess = isSuccess;
    this.success = success;
    this.message = message;
    this.code = code;
    this.status = status;
}

function APIResponse(result, isSuccess, success, message, code, status) {
    APIBasesResponse.call(this, isSuccess, success, message, code, status);
    this.result = result;
}