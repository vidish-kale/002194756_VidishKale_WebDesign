const express = require('express');
const errorController = require('../controllers/errorController');
const User = require('../models/user')

const router = express.Router();

const userView = (user) => {
    const { _id, fullName, email, password, created } = user
    return { _id, fullName, email, password, created }
}

router.get('/getAll', (req, res) => {
    User.find({}, (err, users) => {
        if (err) next(err)
        else {
            res.status(200).json(users.map(user => userView(user)))
        }
    })
})

router.put('/edit', async (req, res, next) => {
    try {
        const { email, fullName, password } = req.body;

        if (!email) {
            return res.status(401).json({ error: "email is required for updating." })
        }

        if (!fullName && !password) {
            return res.status(401).json({ error: "Either fullName or password fields are required for the update" })
        }

        let user = await User.findOne({ email }).exec()

        if (!user) {
            return res.status(401).json({ error: "No user found with e-mail " + email })
        }

        if (fullName)
            await User.findOneAndUpdate({email}, {fullName}).exec()

        if (password) {
            user.password = password
            await user.save()
        }


        res.json(userView(await User.findOne({ email }).exec()))

    } catch (error) {
        next(error)
    }
})

router.post('/create', async (req, res, next) => {
    console.log(req.body)

    const { fullName, email, password } = req.body;

    const user = new User({ fullName, email, password })

    try {
        let validations = user.validateSync()
        if (validations) {
            res.status(401).json(validations.errors)
            return
        }
        res.status(201).json(userView(await user.save()))
    } catch (err) {
        next(err)
    }
})

router.delete('/delete', async (req, res, next) => {
    try {
        const { email } = req.body;

        const user = await User.findOneAndDelete({ email }).exec()

        if (user) {
            res.json({ deleted: userView(user) })
        } else {
            res.status(401).json({ error: "user with email " + email + " not found." })
        }


    } catch (error) {
        next(error)
    }
})

router.use(errorController)

module.exports = router