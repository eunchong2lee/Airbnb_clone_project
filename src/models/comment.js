const mongoose = require("mongoose")
const autoIncrement = require("mongoose-sequence")(mongoose);

const commentSchema = new mongoose.Schema({
    postId: {
        type: Number,
    },
    commentId: {
        type: Number,
        unique: true,
    },
    useremail: {
        type: String,
    },
    nickname: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true
    },
    date: {
        type: String
    }
},
{
        timestamps: true
});
commentSchema.plugin(autoIncrement, {
    inc_field: "commentId",
});

const Comments = mongoose.model('comment', commentSchema);
module.exports ={Comments, commentSchema};