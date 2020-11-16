const verifyToken = require("../../auth/VerifyToken")

const express = require("express"),
    router = express.Router(),
    Comment =  require("../../models/Comment.js"),
    User = require("../../models/users"),
    Item = require("../../models/items"),
    mongoose = require("mongoose")


    router.get("/:id", function(req, res){
        // console.log(req.params.id)
        var id = req.params.id
        Item.findById(id).populate("comments").exec(function(err, comments){
            if(err){
                console.log(err)
                res.send(err)
            } 
            else res.json(comments)
        })
    })

    router.post("/:id", verifyToken , function(req, res){
            // console.log(req.body);
            // console.log(req.params.id)
            // console.log(req.userId)
        User.findById(req.userId, function(err, user){
            if (err){
                console.log(err);
                res.send(err)
            }
                
            else {
                var newComment = new Comment({
                    name : user.name,
                    review: req.body.text
                });
                newComment.save(function(err, createdComment){
                    if(err)
                        console.log(err)
                })

                user.comments.push(newComment)

                user.save(function(err, updatedUser){
                    if(err)
                        console.log(err)
                })

                Item.findById(req.params.id, function(err, item){
                    if(err)
                        console.log(err);

                    item.comments.push(newComment)
                    item.save(function(err, item){
                        if(err)
                            console.log(err)
                    })
                })

                res.status(200)
                }
        })
    })

    router.delete("/:id", (req, res)=>{
        Comment.findById(req.params.id).remove().then(success => res.send("deleted Sccessfully")).catch(err => {
            res.status(404)
            res.json({success: false})
        })
       
    })

    module.exports = router