const router = require("express").Router();
let announcement = require("../models/announcement");


router.route("/view_announcements_stu").get((req,res)=>{
    announcement.find().then((announcement)=>{
        res.json(announcement)
    }).catch((err)=>{
        console.log(err)
    })
})


module.exports = router;