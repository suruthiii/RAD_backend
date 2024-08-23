const router = require("express").Router();
let lecturer = require("../models/lecturer");

http://localhost:8070/lecturer/add_lecturer

router.route("/add_lecturer").post((req,res)=>{

    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const lecture_course = req.body.lecture_course;

    const newlecturer = new lecturer({
        name,
        age,
        gender,
        lecture_course
    })

    newlecturer.save().then(()=>{
        res.json("lecturer Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/view_lecturers").get((req,res)=>{
    lecturer.find().then((lecturer)=>{
        res.json(lecturer)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update_lecturer/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const{name,age,gender,lecture_course} = req.body;

    const updatelecturer = {
        name,
        age,
        gender,
        lecture_course
    }
    
    const update = await lecturer.findByIdAndUpdate(userId,updatelecturer).then((lecturer)=>{
        res.json(lecturer)
    }).catch((err)=>{
        console.log(err)
    });
  
})

router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;
    
    await lecturer.findByIdAndDelete(userId).then((lecturer)=>{
        res.json(lecturer)
    }).catch((err)=>{
        console.log(err)
    });
  
})

module.exports = router;