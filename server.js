const express = require('express')
const cors = require('cors')
const router = require('./routes')
const globalErrorHandler = require('./controllers/errorController')
const app = express()
const db = require('./config/db')
const AppError = require('./utils/appError')

app.use(express.json())
app.use(cors())

db.connection
  .once('open', () => {
    console.log('db connected')
  })
  .on('error', () => {
    console.log('error in connecting db', err)
  })

// ROUTE
app.use('/api/v1', router)

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`), 404)
})

app.use(globalErrorHandler)

const port = process.env.PORT || '5000'

app.listen(port, () => console.log(`listening to port ${port}`))
