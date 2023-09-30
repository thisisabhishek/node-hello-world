const express = require('express')

const router = express.Router()

let students = [
    {
        name: "Abhishek",
        branch: "CSE",
        rollno: 1
    },
    {
        name: "Aparna",
        branch: "CSE",
        rollno: 2
    },
    {
        name: "Pritesh",
        branch: "IT",
        rollno: 3
    },
    {
        name: "Pranay",
        branch: "Mechanical",
        rollno: 4
    }
]

router.get('/api/students', (req, res) => {
    res.send(students)
})

router.get('/api/students/:rollno', (req, res) => {
    res.send(students[req.params.rollno - 1])
})

router.post("/api/students", (req, res) => {
    const body = req.body;
    students.push(body)
    res.send({success: true})
})

router.delete("/api/students", (req, res) => {
    // handle delete
})

router.put("/api/students/:rollno", (req, res) => {
    // update the data
})

module.exports = router;