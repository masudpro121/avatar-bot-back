require('dotenv').config()
const cors = require('cors')
const express = require('express')
const botRoute = require('./routes/botRoute')

const app = express()
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

app.use("/bot", botRoute)
app.listen(PORT, ()=>{
    console.log('Server is  running with port: ', PORT);
})