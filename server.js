const http = require('http')
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const Headers = require('./Header/index')
const Room = require('./models/room')

// 環境變數
dotenv.config({ path: './config.env' })
const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD)

// 連接資料庫( 本機端 => mongodb://localhost:27017/hotel)
mongoose.connect(DB)
    .then(() => {
        console.log('資料庫連接成功')
    })
    .catch((err) => {
        console.log(err)
    })


const requestListener = async(req, res) => {
    let body = ''
    req.on('data', chunk => {
        body += chunk
    })
    if (req.url == '/rooms' && req.method == 'GET') {
        const rooms = await Room.find()
        res.writeHead(200, Headers)
        res.write(JSON.stringify({
            'status': 'success',
            rooms
        }))
        res.end()
    } else if (req.url == '/rooms' && req.method == 'POST') {
        req.on('end', async() => {
            try {
                const { name, price, rating } = JSON.parse(body)
                const newRoom = await Room.create({
                    name,
                    price,
                    rating
                })

                res.writeHead(200, Headers)
                res.write(JSON.stringify({
                    'status': 'success',
                    rooms: newRoom
                }))
                res.end()

            } catch (err) {
                res.writeHead(400, Headers)
                res.write(JSON.stringify({
                    'status': 'false',
                    'message': '欄位未填寫正確',
                    'error': err
                }))
                res.end()
            }
        })
    } else if (req.url == '/rooms' && req.method == 'PATCH') {
        req.on('end', async() => {
            try {
                const { id, name, price, rating } = JSON.parse(body)

                await Room.findByIdAndUpdate(id, {
                    name
                })

                res.writeHead(200, Headers)
                res.write(JSON.stringify({
                    'status': 'success',
                    'message': '更新成功',
                }))
                res.end()

            } catch (err) {
                res.writeHead(400, Headers)
                res.write(JSON.stringify({
                    'status': 'false',
                    'message': '欄位未填寫正確',
                    'error': err
                }))
                res.end()
            }
        })
    } else if (req.url == '/rooms' && req.method == 'DELETE') {
        req.on('end', async() => {
            try {
                const { id } = JSON.parse(body)
                if (id) {
                    await Room.findByIdAndDelete(id)
                } else {
                    await Room.deleteMany({})
                }
                res.writeHead(200, Headers)
                res.write(JSON.stringify({
                    'status': 'success',
                    rooms: []
                }))
                res.end()
            } catch (err) {
                res.writeHead(400, Headers)
                res.write(JSON.stringify({
                    'status': 'false',
                    'message': '欄位未填寫正確',
                    'error': err
                }))
                res.end()
            }
        })
    } else if (req.method == 'OPTIONS') {
        res.writeHead(200, Headers)
        res.end()
    } else {
        res.writeHead(404, Headers)
        res.write(JSON.stringify({
            'status': 'false',
            'message': '無此網站路由'
        }))
        res.end()
    }
}

// Node.js Server 連接 Mongoose 環境建立

const server = http.createServer(requestListener)
server.listen(process.env.PORT)