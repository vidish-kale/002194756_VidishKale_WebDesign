const express = require('express');
const errorController = require('../controllers/errorController');
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const router = express.Router();

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).exec()

    if (!user) {
        return res.status(401).json({ "error": "User not found Credentials" })
    }

    if (!bcrypt.compareSync(password.toString(), user.password)) {
        return res.status(401).json({ "error": "Invalid Password" })

    }

    const token = jwt.sign({ id: user._id, email: user.email }, "mysecret")

    res.json({ message: "Login Success", token, user: { fullName: user.fullName, email: user.email } })

})

router.use(errorController)

module.exports = router