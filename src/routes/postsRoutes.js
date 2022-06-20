const express = require("express")
const postRouter = express.Router()

const {Posts} = require('../models/post')


postRouter.get('/posts', async (req, res)=>{
  const posts = await Posts.find();
  return res.status(200).json({posts});
})







module.exports = {postRouter}