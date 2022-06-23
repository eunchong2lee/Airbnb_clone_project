const express = require("express");
const postRouter = express.Router();

const { Posts } = require('../models/post');



postRouter.get('/posts', async (req, res) => {
  // #swagger.tags = ["Post"]
  // #swagger.summary = "게시글 조회 페이지"
  // #swagger.description = "게시글 조회 페이지"
  try {
    let {category, page} = req.query;
    console.log(category, page)
    if(!page) page = 0;
    const scrollpage = parseInt(page);
    const nextscroll = scrollpage +1;
    let isnext = true;
    if (!category) {
      // const posts = await Posts.find({category: '섬'}).skip(scrollpage*15).limit(15);
      // const nextposts = await Posts.find({category: '섬'}).skip(nextscroll*15).limit(15);
      const posts = await Posts.find({category: '섬'}).limit(scrollpage*15);
      const nextposts = await Posts.find({category: '섬'}).limit(nextscroll*15);
      console.log(nextposts.length);
      if(nextposts.length){
        return res.status(200).json({ success: true, message: "게시글들을 불러왔습니다.",isnext : true, posts })
      }
      return res.status(200).json({ success: true, message: "게시글들을 불러왔습니다.", isnext : false ,posts   })

    }
    // const posts = await Posts.find({ category }).skip(scrollpage*15).limit(15);
    // const nextposts = await Posts.find({ category }).skip(nextscroll*15).limit(15);
    const posts = await Posts.find({ category }).limit(scrollpage*15);
    const nextposts = await Posts.find({ category }).limit(nextscroll*15);
    if(nextposts.length){
      return res.status(200).json({ success: true, message: "카테고리에 게시글들을 불러왔습니다.", isnext: true, posts });
    }
    return res.status(200).json({ success: true, message: "카테고리에 게시글들을 불러왔습니다.", isnext: false , posts});


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
