let resBody = {
    code: 0,  // 0 fail, 1 success
    msg: '', //default empty
    data: null // default null
}

function resResult(code, msg, data) {
    //default
    const res = Object.create(resBody);

    code ? res.code = code : res.code = resBody.code;
    msg ? res.msg = msg : res.msg = resBody.msg;
    data ? res.data = data : res.data = resBody.data;

    return res;
}

function sendError(msg) {
    throw new Error(msg);
}


module.exports = {resResult, sendError};