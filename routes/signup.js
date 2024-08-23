const router = require("express").Router();
let signup = require("../models/signup");

http://localhost:8070/signup

router.route("/").post((req,res)=>{

    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const role = req.body.role;
    const Username = req.body.Username;
    const Mobile_NO = Number(req.body.Mobile_NO);
    const Temporary_Password = req.body.Temporary_Password;

    const newsignup = new signup({
        first_name,
        last_name,
        role,
        Username,
        Mobile_NO,
        Temporary_Password
    })

    newsignup.save().then(()=>{
        res.json("Successful Registration")
    }).catch((err)=>{
        console.log(err);
    })
})


router.route("/view_signup").get((req,res)=>{
    signup.find().then((signup)=>{
        res.json(signup)
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports = router;