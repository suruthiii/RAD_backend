const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
require('dotenv').config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGO_URL;

mongoose.connect(URL, {
 // useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
 // useFindAndModify: false
});

const connection = mongoose.connection
connection.once("open", () => {
  console.log('MongoDB Connection Success!!!')
});

const studentRouter = require("./routes/student.js");
app.use("/student",studentRouter);

const lecturerRouter = require("./routes/lecturer.js");
app.use("/lecturer",lecturerRouter);

const instructorRouter = require("./routes/instructor.js");
app.use("/instructor",instructorRouter);

const nonacademicstaffRouter = require("./routes/nonacademicstaff.js");
app.use("/nonacademicstaff",nonacademicstaffRouter);

const cleaningstaffRouter = require("./routes/cleaningstaff.js");
app.use("/cleaningstaff",cleaningstaffRouter);

const signupRouter = require("./routes/signup.js");
app.use("/signup",signupRouter);

const courseRouter = require("./routes/course.js");
app.use("/course",courseRouter);

const announcementRouter = require("./routes/announcement.js");
app.use("/announcement",announcementRouter);

const issueRouter = require("./routes/issue.js");
app.use("/issue",issueRouter);

const submitionRouter = require("./routes/submition.js");
app.use("/submition",submitionRouter);

const view_annoounceRouter = require("./routes/view_annoounce.js");
app.use("/view_annoounce",view_annoounceRouter);

const view_submitionRouter = require("./routes/view_submition.js");
app.use("/view_submition",view_submitionRouter);

const assignmentRouter = require("./routes/assignment.js");
app.use("/assignment",assignmentRouter);

const view_courseRouter = require("./routes/view_course.js");
app.use("/view_course",view_courseRouter);

const view_AssignmentRouter = require("./routes/view_Assignment.js");
app.use("/view_Assignment",view_AssignmentRouter);

app.use(
  cors({
    origin: "http://localhost:8070",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server is up and running at port ${PORT}`)
});
