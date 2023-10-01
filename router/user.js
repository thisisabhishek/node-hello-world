const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


const router = express.Router()

router.post("/register", async (req, res) => {
    const body = req.body;
    const password = bcrypt.hashSync(body.password, 10)
    body.password = password
    const dbUser = await User.create(body)
    res.send({success: true})
})

router.post('/login', async (req, res) => {
    const user = req.body;
    const dbUser = await User.findOne({email: user.email})
    if(dbUser) {
        const isVerified = bcrypt.compareSync(user.password, dbUser.password);
        if(isVerified) {
            // Generate a JWT token
            const token = jwt.sign({id: dbUser._id, role: dbUser.role}, process.env.SECRET_KEY)
            res.status(200)
            res.send({success: true, msg:"Login successful", token: token})
        } else {
            res.status(401)
            res.send({success: false, msg:"Password Mismatch"})
        }
    }
    else {
        res.status(401)
        res.send({success: false, msg:"user not found"})
    }
    
})

module.exports = router;