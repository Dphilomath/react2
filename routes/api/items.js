const express = require("express"),
    router = express.Router(),
    Item =  require("../../models/items")

    router.get("/", (req, res)=>{
        Item.find().catch(err=>console.log(err)).then(items=>res.json(items))
    })
    router.get("/:id", (req, res)=>{
        Item.findById(req.params.id).catch(err=>console.log(err)).then(items=>res.json(items))
    })

    // router.post("/", (req, res)=>{
    //     const newComment = new Comment({
    //         name : req.body.name,
    //         review: req.body.review
    //     })
    //     newComment.save().catch(err=>console.log(err)).then(item=>res.json(item));
    // })

    // router.delete("/:id", (req, res)=>{
    //     Comment.findById(req.params.id).remove().then(success => res.send("deleted Sccessfully")).catch(err => {
    //         res.status(404)
    //         res.json({success: false})
    //     })
       
    // })

    module.exports= router;