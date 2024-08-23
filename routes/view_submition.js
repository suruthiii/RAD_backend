const router = require("express").Router();
let submition = require("../models/submition");


router.route("/view_submition_lec").get((req,res)=>{
    submition.find().then((submition)=>{
        res.json(submition)
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports = router;