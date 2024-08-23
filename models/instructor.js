const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const instructorschema = new Schema({

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
    instructor_course : {
        type : String,
        required:true
    }
})

const instructor = mongoose.model("instructor",instructorschema);
module.exports = instructor;
