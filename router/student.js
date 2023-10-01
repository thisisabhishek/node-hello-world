const express = require('express')
const Student = require('../models/student')

const router = express.Router()

router.get('/api/students', async (req, res) => {
    const students = await Student.find();
    res.send(students)
})

router.get('/api/students/:rollno', async (req, res) => {
    const id = req.params.rollno;
    const student = await Student.findOne({"rollno": id})
    res.send(student)
})

router.post("/api/students", async (req, res) => {
    const dToken = req.user;
    if(dToken.role === "ADMIN") {
        const body = req.body;
        const dbStudent = await Student.create(body);
        res.send({success: true})
    } else {
        res.status = 401
        res.send({msg: "You are not allowed to perform this operation."})
    }
    
})

router.delete("/api/students", (req, res) => {
    // handle delete
})

router.put("/api/students/:rollno", (req, res) => {
    // update the data
})

module.exports = router;