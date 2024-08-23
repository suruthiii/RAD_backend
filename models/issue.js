const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const issueschema = new Schema({

    name : {
        type : String,
        required: true
    },
    subject : {
        type : String,
        required: true
    },
    problem : {
        type : String,
        required:true
    },
    date : {
        type : String,
        required:true
    }
})

const issue = mongoose.model("issue",issueschema);
module.exports = issue;
