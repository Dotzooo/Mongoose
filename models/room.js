const mongoose = require('mongoose');

// 建立 Schema
// const roomSchema = {
//     name: String,
//     price: {
//         type: Number,
//         required: [true, '價格必填']
//     },
//     rating: Number
// }

const roomSchema = new mongoose.Schema({
    name: String,
    price: {
        type: Number,
        required: [true, '價格必填']
    },
    rating: Number,
    createdAt: {
        type: Date,
        default: Date.now,
        select: false
    }
}, {
    // 移除 versionKey
    versionKey: false,
    // timestamps: true
})

const Room = mongoose.model('Room', roomSchema)

// 實例 實體 instance
// const testRoom = new Room({
//     name: '總統超級套房',
//     price: 2000,
//     rating: 4.5
// })

// testRoom.save()
//     .then(() => {
//         console.log('新增資料成功')
//     })
//     .catch((err) => {
//         console.log(err)
//     })

//  testRoom.create({
//     name: '總統超級套房',
//     price: 2000,
//     rating: 4.5
// })

module.exports = Room