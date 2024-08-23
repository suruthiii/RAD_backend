const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const signupschema = new Schema({

    first_name : {
        type : String,
        required: true
    },
    last_name : {
        type : String,
        required: true
    },
    role: {
        type : String,
        required: true
    },
    Username : {
        type : String,
        required: true
    },
    Mobile_NO : {
        type : Number,
        required: true
    },
    Temporary_Password : {
        type : String,
        required: true
    },
},
{
    collection: "signup"
   }

)

const signup = mongoose.model("signup",signupschema);
module.exports = signup;
