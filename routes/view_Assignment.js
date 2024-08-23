const router = require("express").Router();
let assignment = require("../models/assignment");

router.route("/View_Assignment_stu").get((req,res)=>{
    assignment.find().then((assignment)=>{
        res.json(assignment)
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports = router;