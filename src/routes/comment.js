
const express = require("express")
const router = express.Router()
const Comment = require("../models/comment")
const authMiddleware = require("../middlewares/authMiddleware")


// 댓글 조회
router.get('/post/:postId/comment', authMiddleware, async (req, res)=> {
    try {
        const { postId } = req.params
        const comments = await Comment.find({ postId })
        res.status(200).json({
            success: true,
            comments: comments,
            message: "댓글을 불러왔습니다."
        })
    } catch (error) {
        console.log(error)
        res.status(400).send({
            success: false,
            errorMessage: "댓글 조회 오류"
        })
    }
    

})

// 댓글 작성
router.post('/post/:postId/comment', authMiddleware, async (req, res)=>{
    try {
        const { user } = req.locals
        const { postId } = req.params
        const { comment } = req.body

        if (!comment) {
            res.status(400).send({
                success: false,
                errorMessage: "댓글을 작성해주세요"
            })
            return;
        }
        const maxCommentId = await Comment.findOne().sort("-commentId").exec()
        let commentId = 1
        if (maxCommentId) {
            commentId = maxCommentId.commentId + 1
        }

        const createComment = await Comment.create({
            postId: Number(postId),
            commentId: Number(commentId),
            nickname: user.nickname,
            comment: comment
        })
        res.status(201).json({
            success: true,
            comment: createComment,
            message: "댓글을 작성했습니다."
        })
    } catch (error) {
        console.log(error)
        res.status(400).send({
            success: false,
            errorMessage: "댓글 작성 오류"
        })
    }
    
})

// 댓글 수정
router.post('/post/:postId/comment/:commentId', authMiddleware, async (req, res)=> {
    try {
        const { postId, commentId } = req.params
        const { user } = req.locals
        const comment = req.body

        const existComment = await Comment.findOne({ commentId })

        if (!user.nickname === existComment.nickname) {
            res.status(400).send({
                errorMessage: "본인만 수정 가능합니다."
            })
            return;

        } else {
            await Comment.updateOne(
                { commentId },
                { $set: { comment }}
            )
            res.status(200).json({
                success: true,
                postId: Number(postId),
                commentId: Number(commentId),
                comment: comment,
                message: "댓글을 수정했습니다."
            })
        }
    } catch (error) {
        console.log(error)
        res.status(400).send({
            success: false,
            errorMessage: "댓글 수정 오류"
        })
    }
})


// 댓글 삭제
router.post('/post/:postId/comment/:commentId', authMiddleware, async (req, res)=> {
    try {
        const { commentId } = req.params
        const user = req.locals
        const deleteComment = await Comment.findOne({ commentId })

        if (!user.name === deleteComment.name) {
            res.status(400).send({
                success: false,
                errorMessage: "본인만 삭제 가능합니다."
            })
            return;

        } else {
            await Comment.deleteOne({ commentId })
        }
        res.status(200).send({
            success: true,
            message: "댓글을 삭제했습니다."
        })
    } catch (error) {
        console.log(error)
        res.status(400).send({
            success: false,
            errorMessage: "댓글 삭제 오류"
        })
    }
    
})


module.exports = router