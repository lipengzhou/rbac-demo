const express = require('express')
const cors = require('cors')
const router = require('./router')
const checkLogin = require('./middlewares/check-login')
const morgan = require('morgan')

const app = express()

app.use(morgan('tiny'))

app.use(cors())

app.use(express.json())

// 校验非登录接口的登录状态
app.use('/api', (req, res, next) => {
  if (req.path === '/login') {
    return next()
  }
  checkLogin()(req, res, next)
})

app.use('/api', router)

app.use((err, req, res, next) => {
  res.status(500).json(err)
})

app.listen(3001, () => {
  console.log('http://localhost:3001/')
})
