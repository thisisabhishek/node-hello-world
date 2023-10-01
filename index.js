require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');

const pm = mongoose.connect(process.env.MONGODB_URL)

pm.then(() => {
    console.log("Connection to MongoDB setup successfully...")
})

const studentRouter = require('./router/student')
const userRouter = require('./router/user')

const app = express()

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Server started on Port: ${PORT}`))

const logger = (req, res, next) => {
    console.log("Request received...")
    console.log({
        url: req.url,
        body: req.body,
        method: req.method
    })
    next()
}

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if(token) {
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decodedToken
    }
    next()
}

// middlewares
app.use(logger)
app.use(express.json())
app.use(verifyToken)
// routes supported - API
app.use(studentRouter)
app.use(userRouter)



