const { Schema, model } = require("mongoose")
// https://mongoosejs.com/docs/validation.html

//https://runebook.dev/ko/docs/mongoose/schematypes
const userschema = new Schema({
    useremail: {
        type: String,
        required: [true, 'email을 입력하세요'],
        unique: true,
        trim: true,
        match: [/^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/, '이메일 형식이어야합니다.']
        
    },
    nickname: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        required: [true, 'nickname을 입력하세요'],
        minlength: [3, '3글자 이상이어야 합니다.'],
        maxlength: [18, '18글자 이하여야 합니다.'],
        match: [/^[A-Za-z0-9]+$/, '특수문자가 포함되면 안됩니다.']

    },
    password: {
        type: String,
        required: true,
        // enum: { values: [this.checkPassword], message: '비밀번호가 일치하지 않습니다.' }
    },  
    refreshToken : {
        type : String,
    }
},
{
  timestamps: true
});

const Users = model('user', userschema);
module.exports = { Users, userschema }