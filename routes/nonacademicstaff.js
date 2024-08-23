const router = require("express").Router();
let nonacademicstaff = require("../models/nonacademicstaff");

http://localhost:8070/nonacademicstaff/add_nonacademicstaff

router.route("/add_nonacademicstaff").post((req,res)=>{

    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const working_field = req.body.working_field;
    const newnonacademicstaff = new nonacademicstaff({
        name,
        age,
        gender,
        working_field
    })

    newnonacademicstaff.save().then(()=>{
        res.json("nonacademicstaff Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/view_nonacademicstaff").get((req,res)=>{
    nonacademicstaff.find().then((nonacademicstaff)=>{
        res.json(nonacademicstaff)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update_nonacademicstaff/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const{name,age,gender,working_field} = req.body;

    const updatenonacademicstaff = {
        name,
        age,
        gender,
        working_field
    }
    
    const update = await nonacademicstaff.findByIdAndUpdate(userId,updatenonacademicstaff).then((nonacademicstaff)=>{
        res.json(nonacademicstaff)
    }).catch((err)=>{
        console.log(err)
    });
  
})

router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;
    
    await nonacademicstaff.findByIdAndDelete(userId).then((nonacademicstaff)=>{
        res.json(nonacademicstaff)
    }).catch((err)=>{
        console.log(err)
    });
  
})

module.exports = router;