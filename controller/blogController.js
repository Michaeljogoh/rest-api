const blogPost = require('../model/Blogpost');


// Post blog post

const blogpost =  async (req , res) =>{
        const postBlog = new blogPost({
            title:req.body.title,
            content: req.body.content,
            author: req.body.author 
            });
        await postBlog.save();
        res.json(200);
        res.json("Blog Posted")
    }