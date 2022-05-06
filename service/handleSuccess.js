const Headers = require('../Header/index')

function handleSuccess(res, data) {
    res.writeHead(200, Headers);
    res.write(JSON.stringify({
        "status": "success",
        "data": data
    }))
    res.end();
}
module.exports = handleSuccess;