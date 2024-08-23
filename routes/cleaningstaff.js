const router = require("express").Router();
let cleaningstaff = require("../models/cleaningstaff");

http://localhost:8070/cleaningstaff/add_cleaningstaff

router.route("/add_cleaningstaff").post((req,res)=>{

    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const working_hours = Number(req.body.working_hours);

    const newcleaningstaff = new cleaningstaff({
        name,
        age,
        gender,
        working_hours
    })

    newcleaningstaff.save().then(()=>{
        res.json("cleaningstaff Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/view_cleaningstaff").get((req,res)=>{
    cleaningstaff.find().then((cleaningstaff)=>{
        res.json(cleaningstaff)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update_cleaningstaff/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const{name,age,gender,working_hours} = req.body;

    const updatecleaningstaff = {
        name,
        age,
        gender,
        working_hours
    }
    
    const update = await cleaningstaff.findByIdAndUpdate(userId,updatecleaningstaff).then((cleaningstaff)=>{
        res.json(cleaningstaff)
    }).catch((err)=>{
        console.log(err)
    });
  
})

router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;
    
    await cleaningstaff.findByIdAndDelete(userId).then((cleaningstaff)=>{
        res.json(cleaningstaff)
    }).catch((err)=>{
        console.log(err)
    });
  
})

module.exports = router;