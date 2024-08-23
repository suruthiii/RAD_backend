const router = require("express").Router();
let course = require("../models/course");

http://localhost:8070/course/add_course

router.route("/add_course").post((req,res)=>{

    const coursename = req.body.coursename;
    const year = Number(req.body.year);
    const duration = req.body.duration;
    const credit = req.body.credit;

    const newcourse = new course({
        coursename,
        year,
        duration,
        credit
    })

    newcourse.save().then(()=>{
        res.json("course Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/view_courses").get((req,res)=>{
    course.find().then((course)=>{
        res.json(course)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update_course/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const{coursename,year,duration,credit} = req.body;

    const updatecourse = {
        coursename,
        year,
        duration,
        credit
    }
    
    const update = await course.findByIdAndUpdate(userId,updatecourse).then((course)=>{
        res.json(course)
    }).catch((err)=>{
        console.log(err)
    });
  
})

router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;
    
    await course.findByIdAndDelete(userId).then((course)=>{
        res.json(course)
    }).catch((err)=>{
        console.log(err)
    });
  
})

module.exports = router;