const express = require('express')
const router = express.Router()
const questions = require('./questions')

router.use('/questions', questions)

module.exports = router
