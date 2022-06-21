const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const chatSchema = new Schema({
    nickname: {
        type: String,
        required: true,
    },
    chat: String,
},
{
  timestamps: true
});

const Chat = model('chat', chatSchema);
module.exports = { Chat, chatSchema }