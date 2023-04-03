const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(bodyParser.json())

const userRouter = require('./routes/users')
const loginRouter = require('./routes/login')

app.use("/user", userRouter)
app.use("/login", loginRouter)

//mongoose.connect("mongodb+srv://kalevidish:Fcbarcelona@08@cluster5.27wjncq.mongodb.net/?retryWrites=true&w=majority",
mongoose.connect("mongodb://127.0.0.1:27017/Assignment9", { family: 4 },
    () => {
        console.log("connected to db, starting app")
        app.listen(3000)
        console.log("app started")
    })



