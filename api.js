require('dotenv').config()
const express = require('express')
const studentRouter = require('./router/student')

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

// middlewares
app.use(logger)
app.use(express.json())
app.use(studentRouter)



