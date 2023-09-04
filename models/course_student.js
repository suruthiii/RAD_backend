const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseStudentSchema = new Schema({
  studentName: {
    type: String,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  progress: {
    type: Number,
    required: true,
  },
  credit: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
});

const course_student = mongoose.model("course_student", courseStudentSchema);
module.exports = course_student;
