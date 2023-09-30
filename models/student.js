const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: String,
    rollno: Number,
    branch: String,
    hosteller: Boolean
});

const Student = mongoose.model("Student", studentSchema)

module.exports = Student;