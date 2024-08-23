const router = require("express").Router();
let submition = require("../models/submition");

http://localhost:8070/submition/add_submition

router.route("/add_submition").post((req,res)=>{

    const name = req.body.name;
    const aname = req.body.aname;
    const link = req.body.link;
    const date = req.body.date;

    const newsubmition = new submition({
        name,
        aname,
        link,
        date
    })

    newsubmition.save().then(()=>{
        res.json("submition Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/view_submitions").get((req,res)=>{
    submition.find().then((submition)=>{
        res.json(submition)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update_submition/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const{name,aname,link,date} = req.body;

    const updatesubmition = {
        name,
        aname,
        link,
        date
    }
    
    const update = await submition.findByIdAndUpdate(userId,updatesubmition).then((submition)=>{
        res.json(submition)
    }).catch((err)=>{
        console.log(err)
    });
  
})

router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;
    
    await submition.findByIdAndDelete(userId).then((submition)=>{
        res.json(submition)
    }).catch((err)=>{
        console.log(err)
    });
  
})

module.exports = router;