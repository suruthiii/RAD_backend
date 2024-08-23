const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cleaningstaffschema = new Schema({

    name : {
        type : String,
        required: true
    },
    age : {
        type : Number,
        required: true
    },
    gender : {
        type : String,
        required:true
    },
    working_hours : {
        type : Number,
        required: true
    },
})

const cleaningstaff = mongoose.model("cleaningstaff",cleaningstaffschema);
module.exports = cleaningstaff;
