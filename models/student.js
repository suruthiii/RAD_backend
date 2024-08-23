const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentschema = new Schema({

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
    course : {
        type : String,
        required:true
    }
})

const student = mongoose.model("student",studentschema);
module.exports = student;
