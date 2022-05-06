const Headers = require('../Header/index')
const handleError = (res, err) => {
    res.writeHead(400, Headers);
    let message = '';
    if (err) {
        message = err.message;
    } else {
        message = "欄位未填寫正確或無此 id";
    }
    res.write(JSON.stringify({
        "status": "false",
        message
    }))
    res.end();
}
module.exports = handleError;