const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const assignmentschema = new Schema({

    coursename : {
        type : String,
        required: true
    },
    aname : {
        type : String,
        required: true
    },
    task : {
        type : String,
        required:true
    },
    duedate : {
        type : String,
        required:true
    }
})

const assignment = mongoose.model("assignment",assignmentschema);
module.exports = assignment;
