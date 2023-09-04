const router = require("express").Router();
let course = require("../models/course_student");

// Register a student for a course
router.route("/register").post((req, res) => {
  const studentName = req.body.studentName;
  const courseName = req.body.courseName;
  const instructor = req.body.instructor;
  const progress = req.body.progress;
  const credit = req.body.credit;
  const duration = req.body.duration;

  const newCourseStudent = new course({
    studentName,
    courseName,
    instructor,
    progress,
    credit,
    duration,
  });

  newCourseStudent
    .save()
    .then(() => {
      res.json("Student registered for course");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to register student for course" });
    });
});

// View all students registered for a course
router.route("/view_students/:courseName").get((req, res) => {
  let courseName = req.params.courseName;

  course
    .find({ courseName: courseName })
    .then((students) => {
      res.json(students);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to retrieve students" });
    });
});

// View a specific student registered for a course
router.route("/view_student/:id").get((req, res) => {
  let studentId = req.params.id;

  course
    .findById(studentId)
    .then((student) => {
      if (student) {
        res.json(student);
      } else {
        res.status(404).json({ error: "Student not found" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to retrieve student" });
    });
});

// View all courses by studentName
router.route("/view_courses/:studentName").get((req, res) => {
  let studentName = req.params.studentName;

  course
    .find({ studentName: studentName })
    .then((courses) => {
      res.json(courses);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to retrieve courses" });
    });
});

// Update a student registered for a course
router.route("/update_student/:id").put(async (req, res) => {
  let studentId = req.params.id;
  const { studentName, courseName, instructor, progress, credit, duration } =
    req.body;

  const updateStudent = {
    studentName,
    courseName,
    instructor,
    progress,
    credit,
    duration,
  };

  try {
    const updatedStudent = await course.findByIdAndUpdate(
      studentId,
      updateStudent,
      { new: true }
    );
    if (updatedStudent) {
      res.json(updatedStudent);
    } else {
      res.status(404).json({ error: "Student not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to update student" });
  }
});

// Delete a student registered for a course
router.route("/delete_student/:id").delete(async (req, res) => {
  let studentId = req.params.id;

  try {
    const deletedStudent = await course.findByIdAndDelete(studentId);
    if (deletedStudent) {
      res.json(deletedStudent);
    } else {
      res.status(404).json({ error: "Student not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to delete student" });
  }
});

// View all rows
router.route("/").get((req, res) => {
  course
    .find()
    .then((students) => {
      res.json(students);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to retrieve students" });
    });
});

module.exports = router;
