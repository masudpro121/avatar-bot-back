const express = require('express')
const avatarVoiceController = require('../controllers/botController/avatarVoiceController')
const botRoute = express.Router()

botRoute.post('/avatar-voice', avatarVoiceController)

module.exports = botRoute