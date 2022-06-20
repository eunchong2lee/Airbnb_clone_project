const express = require("express")
const postRouter = express.Router()

const {Posts} = require('../models/post')


postRouter.get('/posts', async (req, res)=>{
      // #swagger.tags = ["Post"]
    // #swagger.summary = "게시글 조회 페이지"
    // #swagger.description = "게시글 조회 페이지"
  try {
    const posts = await Posts.find();
    return res.status(200).json({
      success:true,
      message: "게시글들을 물러왔습니다.",
      posts
    });

  } catch (error) {
    return res.status(400).send({ errorMeesage: error.message }) 
}
})




module.exports = {postRouter}