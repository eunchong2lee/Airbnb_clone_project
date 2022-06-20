const mongoose = require("mongoose")
const autoIncrement = require("mongoose-sequence")(mongoose);

const postSchema = new mongoose.Schema({
    postId: {
        type: Number,
    },
    name: {
        type: String
    },
    location: {
        type: String,
    },
    url: {
        type: String,
    },
    length :{
        type: String,
    },
    date : {
        type: String,
    },
    image1 :{
      type: String,
    },
    star: {
      type: String,
    }
},
{
        timestamps: true
});
postSchema.plugin(autoIncrement, {
    inc_field: "postId",
});

const Posts = mongoose.model('post', postSchema);
module.exports ={Posts, postSchema};