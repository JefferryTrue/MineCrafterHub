
const express = require("express");
const router  = express.Router();

const Blog = require("../models/BLOG");

function CSL(_message){
    console.log(_message);
}

router.get("/test",(req,res) => {
    res.json({msg:"blog works!"});
})

// @route POST api/blogs/addBlog
// @ desc 创建信息接口
// @access private
router.post("/addBlog",(req,res)=> {
    console.log(req.body);

    const _now = new Date();
    const date = _now.toLocaleString();

    const newBlog = new Blog({
        title:req.body.title,
        tag:req.body.tag,
        preview:req.body.preview,
        author:req.body.author,
        content:req.body.content,
        previewImg:req.body.previewImg,
        date:date
    });

    newBlog.save()
            .then(blog => res.json(blog))
            .catch(err => console.log(err));
})
// @route GET api/blogs
// @ desc 获取所有信息
// @access private
router.get("/",(req,res)=>{
    Blog.find()
    .then(blogs => {
        if(!blogs){
            return res.status.apply(404).json("没有博客");
        }
        res.json(blogs);
    })
    .catch(err => res.status(404).json(err));
})

// @route GET api/blogs/:id
// @ desc 获取单个信息
// @access private
router.get("/:id",(req,res) => {
    Blog.findOne({_id:req.params.id})
    .then(blog => {
        if(!blog){
            return res.status(404).json("没有任何内容");
        }
        res.json(blog);
    })
    .catch(err => res.status(404).json(err));
})

router.get('/getbytag/:tag',(req,res) => {
    Blog.find({tag:req.params.tag})
    .then(blogs => {
        if(!blogs){
            return res.status(404).json("没有任何内容");
        }
        res.json(blogs)
    })
})

// @route POST api/blogs/editBlog
// @ desc 创建信息接口
// @access private
router.post("/editBlog/:id",(req,res)=> {

    const blogFields = {};

    if(req.body.title){
        blogFields.title = req.body.title;
    }
    if(req.body.tag){
        blogFields.tag = req.body.tag;
    }
    if(req.body.preview){
        blogFields.preview = req.body.preview;
    }
    if(req.body.author){
        blogFields.author = req.body.author;
    }
    if(req.body.content){
        blogFields.content = req.body.content;
    }
    const _now = new Date();
    //CSL(_now.toLocaleString());
    blogFields.date = _now.toLocaleString();
    
    Blog.findOneAndUpdate(
        {_id:req.params.id},
        {$set:blogFields},
        {new:true}
    ).then(blog => res.json(blog));
     
})

// @route POST api/blogs/delBlog/:id
// @ desc 删除信息接口
// @access private
router.post("/delBlog/:id",(req,res)=>{
    Blog.findOneAndRemove({_id:req.params.id})
        .then(blog => {
            res.json(blog);
        })
        .catch(err => res.status(404).json('删除失败！'));
})


module.exports = router;