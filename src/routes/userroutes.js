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


userRouter.post("/signUp", async (req, res) => {
    // #swagger.tags = ["User"]
    // #swagger.summary = "회원가입 페이지"
    // #swagger.description = "회원가입 페이지"
    try {
        const { useremail, password, checkpassword, nickname} = req.body;
        const checkUser = await Users.findOne().or([{ useremail }, { nickname }]);

        const [emailValue, email] = useremail.split('@');
        const regExpPassword = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{4,20}$/;

        if (password !== checkpassword) return res.status(400).json({ success: false, errorMessage: "비밀번호가 비밀번호 확인란과 동일하지 않습니다." });

        if (checkUser) return res.status(400).json({ success: false, errorMessage: "이미 존재하는 아이디 또는 닉네임입니다." });

        if (!regExpPassword.test(password)) return res.status(400).send({ sucess: false, errorMessage: "비밀번호의 형식을 확인해주세요. 영문과 숫자 필수 포함, 특수문자(!@#$%^&*) 사용 가능 4-20자",});

        if (password.match(nickname)) return res.status(400).send({ sucess: false, errorMessage: "비밀번호에 닉네임을 포함할 수 없습니다.", });
        
        if (password.match(emailValue)) return res.status(400).send({sucess: false,errorMessage: "비밀번호에 이메일을 포함할 수 없습니다.",});
       

        const salt = await Bcrypt.genSalt(Number(process.env.SALTKEY));
        const hashPassword = await Bcrypt.hash(password, salt);

        const user = new Users({ useremail, password: hashPassword,nickname, refreshToken: null, });
        await user.save();

        return res.status(200).json({ success: true, message: "회원가입 했습니다.", user });
  
    } catch (err) {
        const [errormessage] = Object
            .values(err.errors)
            .map((error) => error.message);
        return res.status(400).json({ success: false, errorMessage: errormessage });

    }


})

userRouter.post("/signIn", async (req, res) => {
    // #swagger.tags = ["User"]
    // #swagger.summary = "로그인 페이지"
    // #swagger.description = "로그인 페이지"
    try {
        const { useremail, password } = req.body;

        const checkUser = await Users.findOne({ useremail });
        const validPassword = await Bcrypt.compare(password, checkUser.password);

        if (!checkUser) return res.status(400).json({ success: false, errorMessage: "아이디 또는 비밀번호가 틀렸습니다." });
        if (!validPassword) return res.status(400).json({ success: false, errorMessage: " 아이디 또는 비밀번호가 틀렸습니다." });


        const accessToken = jwt.sign({ useremail }, jwtSecret, { expiresIn: '15s' });
        const refreshToken = jwt.sign({}, refreshjwtSecret , {expiresIn: '7d'});

        const user = await Users.findOneAndUpdate({useremail},{refreshToken}, {new:true});

        res.status(200).json({ Message: "로그인 되었습니다.", accessToken, user });

    } catch (err) {
        return res.status(400).send({ errorMeesage: err.message }) 
    }


});

// 로컬 변수 데이터 들어오는 지 확인
userRouter.get('/user', authMiddleware, async (req, res) => {
    // #swagger.tags = ["User"]
    // #swagger.summary = "로컬변수 확인 페이지"
    // #swagger.description = "로컬변수 확인 페이지"
    try{
      const { localuser } = res.locals;
      res.status(200).json({
        succees:true,
        message: "로컬변수를 불러왔습니다.",
        localuser,
      });
      
    }catch(err){
      res.status(400).json({errorMessage: err.message});
    }

});



module.exports = {userRouter};    
