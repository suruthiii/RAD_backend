const router = require("express").Router();
let instructor = require("../models/instructor");

http://localhost:8070/instructor/add_instructor

router.route("/add_instructor").post((req,res)=>{

    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const instructor_course = req.body.instructor_course;

    const newinstructor = new instructor({
        name,
        age,
        gender,
        instructor_course
    })

    newinstructor.save().then(()=>{
        res.json("instructor Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/view_instructors").get((req,res)=>{
    instructor.find().then((instructor)=>{
        res.json(instructor)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update_instructor/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const{name,age,gender,instructor_course} = req.body;

    const updateinstructor = {
        name,
        age,
        gender,
        instructor_course
    }
    
    const update = await instructor.findByIdAndUpdate(userId,updateinstructor).then((instructor)=>{
        res.json(instructor)
    }).catch((err)=>{
        console.log(err)
    });
  
})

router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;
    
    await instructor.findByIdAndDelete(userId).then((instructor)=>{
        res.json(instructor)
    }).catch((err)=>{
        console.log(err)
    });
  
})

module.exports = router;