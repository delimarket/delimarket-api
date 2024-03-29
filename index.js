const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const FileStore = require('session-file-store')(session)

const router = require('./main.router.js')

const app = express()
const port = process.env.PORT || 8080

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(
  session({
    secret: 'ebb0f0d74f6ba67aa1061375dd219456286b17e10f2ed0816e814bc320a858a7',
    resave: true,
    store: new FileStore({
      secret:
        'ebb0f0d74f6ba67aa1061375dd219456286b17e10f2ed0816e814bc320a858a7',
      logFn: args => {
        return args
      }
    }),
    saveUninitialized: true
  })
)

app.use('/', router)

app.listen(port)
console.log(`Listening on port: ${port}`)
