const router = require("express").Router();
let course = require("../models/course");

// Add a new course
router.route("/add_course").post((req, res) => {
    const coursename = req.body.coursename;
    const year = Number(req.body.year);
    const duration = req.body.duration;
    const credit = req.body.credit;
    const instructor = req.body.instructor;

    const newcourse = new course({
        coursename,
        year,
        duration,
        credit,
        instructor
    });

    newcourse.save()
        .then(() => {
            res.json("Course Added");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Failed to add course" });
        });
});

// View all courses
router.route("/view_courses").get((req, res) => {
    course.find()
        .then((courses) => {
            res.json(courses);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Failed to retrieve courses" });
        });
});

// View a specific course by ID
router.route("/viewCourse/:id").get((req, res) => {
    let courseId = req.params.id;

    course.findById(courseId)
        .then((course) => {
            if (course) {
                res.json(course);
            } else {
                res.status(404).json({ error: "Course not found" });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Failed to retrieve course" });
        });
});

// Update a course by ID
router.route("/update_course/:id").put(async (req, res) => {
    let courseId = req.params.id;
    const { coursename, year, duration, credit } = req.body;

    const updatecourse = {
        coursename,
        year,
        duration,
        credit,
        instructor,
    };

    try {
        const updatedCourse = await course.findByIdAndUpdate(courseId, updatecourse, { new: true });
        if (updatedCourse) {
            res.json(updatedCourse);
        } else {
            res.status(404).json({ error: "Course not found" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to update course" });
    }
});

// Delete a course by ID
router.route("/delete/:id").delete(async (req, res) => {
    let courseId = req.params.id;

    try {
        const deletedCourse = await course.findByIdAndDelete(courseId);
        if (deletedCourse) {
            res.json(deletedCourse);
        } else {
            res.status(404).json({ error: "Course not found" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to delete course" });
    }
});

module.exports = router;
