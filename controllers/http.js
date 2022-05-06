const Headers = require('../Header/index')

const http = {
    cors(req, res) {
        res.writeHead(200, Headers)
        res.end()
    },
    notFound(req, res) {
        res.writeHead(404, Headers)
        res.write(JSON.stringify({
            'status': 'false',
            'message': '無此網站路由'
        }))
        res.end()
    }
}

module.exports = http