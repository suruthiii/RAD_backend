const router = require("express").Router();
let assignment = require("../models/assignment");

http://localhost:8070/assignment/add_assignment

router.route("/add_assignment").post((req,res)=>{

    const coursename = req.body.coursename;
    const aname = req.body.aname;
    const task = req.body.task;
    const duedate = req.body.duedate;

    const newassignment = new assignment({
        coursename,
        aname,
        task,
        duedate
    })

    newassignment.save().then(()=>{
        res.json("assignment Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/view_assignments").get((req,res)=>{
    assignment.find().then((assignment)=>{
        res.json(assignment)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update_assignment/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const{coursename,aname,task,duedate} = req.body;

    const updateassignment = {
        coursename,
        aname,
        task,
        duedate
    }
    
    const update = await assignment.findByIdAndUpdate(userId,updateassignment).then((assignment)=>{
        res.json(assignment)
    }).catch((err)=>{
        console.log(err)
    });
  
})

router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;
    
    await assignment.findByIdAndDelete(userId).then((assignment)=>{
        res.json(assignment)
    }).catch((err)=>{
        console.log(err)
    });
  
})

module.exports = router;