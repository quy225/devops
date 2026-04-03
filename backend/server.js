require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

// DB
mongoose.connect(process.env.DB_URL)
    .then(() => console.log("DB connected"))
    .catch(err => console.log(err))

// Schema
const Task = mongoose.model('Task', {
    name: String
})

// API
app.get('/health', (req, res) => {
    res.json({ status: "ok" })
})

app.get('/about', (req, res) => {
    res.json({
        name: "Văn Quý",
        studentId: "xxxx",
        class: "xxxx"
    })
})

app.get('/tasks', async (req, res) => {
    const tasks = await Task.find()
    res.json(tasks)
})

app.post('/tasks', async (req, res) => {
    const task = await Task.create(req.body)
    res.json(task)
})

// run
app.listen(process.env.PORT, () => {
    console.log("Server running")
})
