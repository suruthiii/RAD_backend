const router = require("express").Router();
let announcement = require("../models/announcement");

http://localhost:8070/announcement/add_announcement

router.route("/add_announcement").post((req,res)=>{

    const name = req.body.name;
    const role = req.body.role;
    const message = req.body.message;
    const date = req.body.date;

    const newannouncement = new announcement({
        name,
        role,
        message,
        date
    })

    newannouncement.save().then(()=>{
        res.json("announcement Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/view_announcements").get((req,res)=>{
    announcement.find().then((announcement)=>{
        res.json(announcement)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update_announcement/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const{name,role,message,date} = req.body;

    const updateannouncement = {
        name,
        role,
        message,
        date
    }
    
    const update = await announcement.findByIdAndUpdate(userId,updateannouncement).then((announcement)=>{
        res.json(announcement)
    }).catch((err)=>{
        console.log(err)
    });
  
})

router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;
    
    await announcement.findByIdAndDelete(userId).then((announcement)=>{
        res.json(announcement)
    }).catch((err)=>{
        console.log(err)
    });
  
})

module.exports = router;