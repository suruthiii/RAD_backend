const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lecturerschema = new Schema({

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
    lecture_course : {
        type : String,
        required:true
    }
})

const lecturer = mongoose.model("lecturer",lecturerschema);
module.exports = lecturer;
