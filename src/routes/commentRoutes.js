const express = require("express")
const commentRouter = express.Router()
const{ Comments, Users} = require("../models/")
const authMiddleware = require("../middlewares/authMiddleware")
const moment = require('moment')


// 댓글 조회
commentRouter.get('/posts/:postId/comment', authMiddleware, async (req, res)=> {
    // #swagger.tags = ["Comment"]
    // #swagger.summary = "코멘트 조회 페이지"
    // #swagger.description = "코멘트 조회 페이지"
    try {
        const { postId } = req.params
        const comments = await Comments.find({ postId }).sort(-1)

        if (!comments) {return res.status(400).send({success: false, errorMeesage: "게시글에 댓글이 없습니다."})}
        res.status(200).json({
            success: true,
            comments: comments,
            message: "댓글을 불러왔습니다."
        })
    } catch (error) {
        return res.status(400).send({ errorMeesage: error.message }) 
    }
    

})

// 댓글 작성
commentRouter.post('/posts/:postId/comment', authMiddleware, async (req, res)=>{
    // #swagger.tags = ["Comment"]
    // #swagger.summary = "코멘트 작성 페이지"
    // #swagger.description = "코멘트 작성 페이지"
    try {
        const { user } = req.locals
        const { postId } = req.params
        const { comment } = req.body
        const date = moment().add('9','h').format('YYYY-MM-DD HH:mm:ss')
        if (!comment) {return res.status(400).send({success: false, errorMessage: "댓글을 작성해주세요"})}

        const createComment = await Comments.create({
            postId: Number(postId),
            useremail: user.email,
            nickname: user.nickname,
            comment: comment,
            date: date.split(' ')[0]
        })
        res.status(201).json({
            success: true,
            createComment,
            message: "댓글을 작성했습니다."
        })
    } catch (error) {
        return res.status(400).send({ errorMeesage: error.message }) 
    }
    
})

// 댓글 수정
commentRouter.put('/posts/:postId/comment/:commentId', authMiddleware, async (req, res)=> {
    // #swagger.tags = ["Comment"]
    // #swagger.summary = "코멘트 수정 페이지"
    // #swagger.description = "코멘트 수정 페이지"
    try {
        const { postId, commentId } = req.params
        const { user } = req.locals
        const comment = req.body

        const existComment = await Comments.findOne({ commentId })

        if (!existComment) {return res.status(400).send({success: false, errorMeesage: "수정 가능한 댓글이 없습니다."})}
        if (!user.nickname === existComment.nickname) {return res.status(400).send({errorMessage: "본인만 수정 가능합니다."})}

        const changeComment = await Comments.findOneAndUpdate({ commentId },{comment },{new : true})
        res.status(200).json({
            success: true,
            message: "댓글을 수정했습니다.",
            changeComment,
        })
        
    } catch (error) {
        return res.status(400).send({ errorMeesage: error.message }) 
    }
})


// 댓글 삭제
commentRouter.delete('/posts/:postId/comment/:commentId', authMiddleware, async (req, res)=> {
    // #swagger.tags = ["Comment"]
    // #swagger.summary = "코멘트 삭제 페이지"
    // #swagger.description = "코멘트 삭제 페이지"
    try {
        const { commentId } = req.params
        const user = req.locals
        const deleteComment = await Comments.findOne({ commentId })

        if (!deleteComment) {return res.status(400).send({success: false, errorMeesage: "삭제 가능한 댓글이 없습니다."})}
        if (!user.name === deleteComment.name) {return res.status(400).send({success: false, errorMessage: "본인만 삭제 가능합니다." })} 

        await Comments.deleteOne({ commentId })
        res.status(200).send({
            success: true,
            message: "댓글을 삭제했습니다."
        })
    } catch (error) {
        return res.status(400).send({ errorMeesage: error.message }) 
    }
    
})


module.exports = {commentRouter}