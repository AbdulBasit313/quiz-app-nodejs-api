const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })

const mongoURI = process.env.MONGODB_URL

mongoose.connect(mongoURI)

module.exports = mongoose
