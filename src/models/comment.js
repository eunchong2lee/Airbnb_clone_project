const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
    postId: {
        type: Number,
        required: true
    },
    commentId: {
        type: Number,
        required: true
    },
    nickname: {
        type: String,
        required: true,
        unique: true
    },
    comment: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Comment", commentSchema)