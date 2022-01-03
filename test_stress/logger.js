fs = require('fs');

module.exports = {
    logRequestInfo: logRequestInfo,
}

const timeStamp = Math.floor(Date.now() / 1000);

function logRequestInfo(request, context, next) {
    fs.appendFile(`./log/request-info${timeStamp}.txt`, `${JSON.stringify(request.url)}\n${JSON.stringify(context.body)}\n`, function (err) {
        if (err) return console.log(err);})
    return next;
}