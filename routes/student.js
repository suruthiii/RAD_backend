const router = require("express").Router();
let student = require("../models/student");

http://localhost:8070/student/add_student

router.route("/add_student").post((req,res)=>{

    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const course = req.body.course;

    const newstudent = new student({
        name,
        age,
        gender,
        course
    })

    newstudent.save().then(()=>{
        res.json("student Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/view_students").get((req,res)=>{
    student.find().then((student)=>{
        res.json(student)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update_student/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const{name,age,gender,course} = req.body;

    const updatestudent = {
        name,
        age,
        gender,
        course
    }
    
    const update = await student.findByIdAndUpdate(userId,updatestudent).then((student)=>{
        res.json(student)
    }).catch((err)=>{
        console.log(err)
    });
  
})

router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;
    
    await student.findByIdAndDelete(userId).then((student)=>{
        res.json(student)
    }).catch((err)=>{
        console.log(err)
    });
  
})

module.exports = router;