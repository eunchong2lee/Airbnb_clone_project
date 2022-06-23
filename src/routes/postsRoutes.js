const express = require("express");
const postRouter = express.Router();

const { Posts } = require('../models/post');



postRouter.get('/posts', async (req, res) => {
  // #swagger.tags = ["Post"]
  // #swagger.summary = "게시글 조회 페이지"
  // #swagger.description = "게시글 조회 페이지"
  try {
    let {category, page} = req.query;
    if(!page) page = 0;
    const scrollpage = parseInt(page);
    if (!category) {
      const posts = await Posts.find({category: '섬'}).skip(scrollpage*15).limit(15);
      return res.status(200).json({ success: true, message: "게시글들을 불러왔습니다.", posts })
    }
    const posts = await Posts.find({ category }).skip(scrollpage*15).limit(15);
    return res.status(200).json({ success: true, message: "카테고리에 게시글들을 불러왔습니다.", posts });

  } catch (error) {
    return res.status(500).send({ errorMeesage: error.message })
  }
});

postRouter.get('/posts/:postId', async (req, res) => {
  // #swagger.tags = ["Post"]
  // #swagger.summary = "게시글 상세 조회 페이지"
  // #swagger.description = "게시글 상세 조회 페이지"
  try {
    const { postId } = req.params
    const posts = await Posts.find({ postId })
    return res.status(200).json({ success: true, message: "게시글을 불러왔습니다.", posts });

  } catch (error) {
    return res.status(500).send({ errorMeesage: error.message })
  }
})


module.exports = { postRouter }
