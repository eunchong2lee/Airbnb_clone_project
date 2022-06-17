// dotenv
const dotenv = require('dotenv');
dotenv.config();

const jwtSecret = process.env.JWTACCESSKEY;
const refreshjwtSecret = process.env.JWTREFRESHKEY;

const express = require("express")
const userRouter = express.Router();

const Bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { Users } = require("../models/");
const authMiddleware = require("../middlewares/authMiddleware");

// passport config
// var passport = require('passport');
// var LocalStrategy = require('passport-local');


userRouter.post("/user", async (req, res) => {
    try {
        // 미들웨어에서 유저 정보 넣기 ( user_name, userId, password, checkPassword )
        const { useremail, password, checkPassword, nickname} = req.body;
        const checkUser = await Users.findOne().or([{ useremail }, { nickname }]);

        if (password !== checkPassword) return res.status(400).json({ success: false, errorMessage: "비밀번호가 비밀번호 확인란과 동일하지 않습니다." });
        if (checkUser) return res.status(400).json({ success: false, errorMessage: "이미 존재하는 아이디 또는 닉네임입니다." });

        //hash 비밀번호
        // 비밀 번호  hash / bcrypt

        const salt = await Bcrypt.genSalt(Number(process.env.SALTKEY));
        const hashPassword = await Bcrypt.hash(password, salt);

        const user = new Users({ useremail, password: hashPassword,nickname, refreshToken: null, });
        await user.save();

        return res.status(200).json({ success: true, message: "회원가입 했습니다.", user });
  
    } catch (err) {
        const [errormessage] = Object
            .values(err.errors)
            .map((error) => error.message);
        return res.status(400).json({ success: false, errorMessage: err.message });

    }


})

userRouter.post("/login", async (req, res) => {
    try {
        const { useremail, password } = req.body;

        // https://www.npmjs.com/package/bcrypt
        const checkUser = await Users.findOne({ useremail });
        const validPassword = await Bcrypt.compare(password, checkUser.password);
        // true false

        if (!checkUser) return res.status(400).json({ success: false, errorMessage: "아이디 또는 비밀번호가 틀렸습니다." });
        if (!validPassword) return res.status(400).json({ success: false, errorMessage: " 아이디 또는 비밀번호가 틀렸습니다." });


        // return res.status(400).json({ success: false, errorMessage: " 아이디 또는 비밀번호가 틀렸습니다." });
        // 1시간 짜리 Token 만들기
        const accesstoken = jwt.sign({ useremail }, jwtSecret, { expiresIn: '15s' });
        const refreshToken = jwt.sign({}, refreshjwtSecret , {expiresIn: '7d'});
        const user = await Users.findOneAndUpdate({useremail},{refreshToken}, {new:true});
        //https://www.npmjs.com/package/jsonwebtoken 
        console.log(accesstoken);
        // dotenv 적용

        res.status(200).json({ Message: "로그인 되었습니다.", accessToken, user });

    } catch (err) {
        return res.status(400).send({ errorMeesage: err.message }) 
    }


});

// 로컬 변수 데이터 들어오는 지 확인
userRouter.get('/user/me', authMiddleware, async (req, res) => {
    const { localuser } = res.locals;
    res.json({
        localuser,
    });
});



module.exports = {userRouter};    
