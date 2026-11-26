
const express = require("express");

const app = express();

const PORT = 3000;


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Set EJS as template engine
app.set("view engine", "ejs");


// Static files
app.use(express.static("public"));


// Student data
let students = [
    { id: 1, name: "Rahul", course: "MERN Stack" },
    { id: 2, name: "Priya", course: "Java" },
    { id: 3, name: "Amit", course: "Python" }
];


// ROUTE 1: GET Home
app.get("/", (req, res) => {
    res.render("home");
});


// ROUTE 2: GET Students
app.get("/students", (req, res) => {
    res.render("students", {
        students: students
    });
});


// ROUTE 3: GET Add Student Form
app.get("/add-student", (req, res) => {
    res.render("addStudent");
});


// ROUTE 4: POST Add Student
app.post("/add-student", (req, res) => {

    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        course: req.body.course
    };

    students.push(newStudent);

    res.redirect("/students");
});


// ROUTE 5: GET About
app.get("/about", (req, res) => {
    res.render("about");
});


// ROUTE 6: GET Contact
app.get("/contact", (req, res) => {
    res.render("contact");
});


// ROUTE 7: POST Contact
app.post("/contact", (req, res) => {

    const name = req.body.name;
    const message = req.body.message;

    res.send(
        `Thank you ${name}! Your message has been received: ${message}`
    );
});


// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
