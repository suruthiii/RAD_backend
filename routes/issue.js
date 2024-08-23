const router = require("express").Router();
let issue = require("../models/issue");

http://localhost:8070/issue/add_issue

router.route("/add_issue").post((req,res)=>{

    const name = req.body.name;
    const subject = req.body.subject;
    const problem = req.body.problem;
    const date = req.body.date;

    const newissue = new issue({
        name,
        subject,
        problem,
        date
    })

    newissue.save().then(()=>{
        res.json("issue Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/view_issues").get((req,res)=>{
    issue.find().then((issue)=>{
        res.json(issue)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update_issue/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const{name,subject,problem,date} = req.body;

    const updateissue = {
        name,
        subject,
        problem,
        date
    }
    
    const update = await issue.findByIdAndUpdate(userId,updateissue).then((issue)=>{
        res.json(issue)
    }).catch((err)=>{
        console.log(err)
    });
  
})

router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;
    
    await issue.findByIdAndDelete(userId).then((issue)=>{
        res.json(issue)
    }).catch((err)=>{
        console.log(err)
    });
  
})

module.exports = router;