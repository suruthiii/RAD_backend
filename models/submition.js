const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const submitionschema = new Schema({

    name : {
        type : String,
        required: true
    },
    aname : {
        type : String,
        required: true
    },
    link : {
        type : String,
        required:true
    },
    date : {
        type : String,
        required:true
    }
})

const submition = mongoose.model("submition",submitionschema);
module.exports = submition;
