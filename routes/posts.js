const express = require('express');
const Posts = require('../models/posts');


const router = express.Router();

//save posts

router.post('/post/save', (req,res)=>{

    let newPost = new Posts(req.body);

   
    newPost.save()
    .then(() => {
        return res.status(200).json({
            success: "Post saved successfully"
        });
    })
    .catch(err => {
        return res.status(400).json({
            error: err
        });
    });
});

//get post

router.get('./posts', (req,res) =>{
    Posts.find().exec((err,posts) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});

//update posts

router.put('/post/update/:id', (req,res) =>{
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post) =>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success : "updated successfully"
            });
        }
    );
});

//delete post

router.delete('/post/delete/:id',(req,res) =>{
    
})

module.exports = router;
