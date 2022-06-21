const express = require("express");
const chatRouter = express.Router();
const{ Users, Chat} = require("../models/");
const authMiddleware = require("../middlewares/authMiddleware");

//채팅 조회
chatRouter.get('/chats', authMiddleware, async (req, res) => {
    try {
        const { nickname } = req.locals.user;
        const chat = await Chat.find({ nickname });
        const checkUser = await Users.findOne({ nickname });

        if(!checkUser) {
            return res.status(400).json({ success: false, errorMeesage: '로그인 후 사용하세요.' });
        }
        res.status(200).json({
            success: true,
            message: "댓글을 불러왔습니다.",
            chat,

        });
    } catch (error) {
        return res.status(400).send({ errorMeesage: error.message });
    }

});


// 채팅 생성
chatRouter.post('/chats', authMiddleware, async (req, res) => {
    try{
        const { nickname } = req.locals.user;
        const { chat } = res.body;
        const createCaht = await Chat.create({ nickname, chat });
    
        res.status(200).json({ success: true, message: "채팅전달완료", createCaht });

    } catch (error) {
        return res.status(500).json({ success:false, errorMessage: error.message });
    };
});