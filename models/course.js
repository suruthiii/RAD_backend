const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseschema = new Schema({

    coursename : {
        type : String,
        required: true
    },
    year : {
        type : Number,
        required: true
    },
    duration : {
        type : String,
        required:true
    },
    credit : {
        type : String,
        required:true
    }
})

const course = mongoose.model("course",courseschema);
module.exports = course;
