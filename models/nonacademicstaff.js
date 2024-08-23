const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const nonacademicstaffschema = new Schema({

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
    working_field : {
        type : String,
        required:true
    }
})

const nonacademicstaff = mongoose.model("nonacademicstaff",nonacademicstaffschema);
module.exports = nonacademicstaff;
