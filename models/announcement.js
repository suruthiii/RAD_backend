const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const announcementschema = new Schema({

    name : {
        type : String,
        required: true
    },
    role : {
        type : String,
        required: true
    },
    message : {
        type : String,
        required:true
    },
    date : {
        type : String,
        required:true
    }
})

const announcement = mongoose.model("announcement",announcementschema);
module.exports = announcement;
