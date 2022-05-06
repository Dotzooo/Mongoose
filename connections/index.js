const mongoose = require('mongoose');
const dotenv = require('dotenv')

// 環境變數
dotenv.config({ path: './config.env' })
const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD)

console.log(DB)

// 連接資料庫( 本機端 => mongodb://localhost:27017/hotel) 
mongoose.connect(DB)
    .then(() => {
        console.log('資料庫連接成功')
    })
    .catch((err) => {
        console.log('連不上', err)
    })