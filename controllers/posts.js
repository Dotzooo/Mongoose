const handleSuccess = require('../service/handleSuccess')
const handleError = require('../service/handleError')

const Posts = require('../models/post')

const post = {
    async getPosts({ req, res }) {
        const allPosts = await Posts.find()
        handleSuccess(res, allPosts)
        res.end
    },
    async createPosts({ req, res, body }) {
        try {
            const data = JSON.parse(body)
            if (data.content) {
                const newPost = await Posts.create({
                    name: data.name,
                    content: data.content,
                    tags: data.tags,
                    type: data.type
                })
                handleSuccess(res, newPost)
            } else {
                handleError(res)
            }
        } catch (error) {
            handleError(res, error)
        }
    }
}

module.exports = post