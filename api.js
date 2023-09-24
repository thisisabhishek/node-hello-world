const express = require('express')

const PORT = 5002
const app = express()
app.listen(PORT, () => console.log(`Server started on Port: ${PORT}`))

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

const logger = (req, res, next) => {
    console.log("Request received...")
    console.log({
        url: req.url,
        body: req.body,
        method: req.method
    })
    next() 
}

app.use(logger)
app.use(express.json())

app.get('/api/students', (req, res) => {
    res.send(students)
})

app.get('/api/students/:rollno', (req, res) => {
    res.send(students[req.params.rollno - 1])
})

app.post("/api/students", (req, res) => {
    const body = req.body;
    students.push(body)
    res.send({success: true})
})

