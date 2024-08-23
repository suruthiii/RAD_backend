const router = require("express").Router();
let course = require("../models/course");


router.route("/View_course_stu").get((req,res)=>{
    course.find().then((course)=>{
        res.json(course)
    }).catch((err)=>{
        console.log(err)
    })
})


module.exports = router;