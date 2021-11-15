const validate = require('../middlewares/validate')
const { body } = require('express-validator')
const { User } = require('../models')
const jwt = require('jsonwebtoken')
const { tokenSecret } = require('../config')

exports.login = [
  validate([
    body('username').notEmpty().withMessage('不能为空'),
    body('password').notEmpty().withMessage('不能为空')
  ]),
  validate([
    body('username').custom(async (value, { req }) => {
      const user = await User.findOne({ username: value }).select('+password')
      if (!user) {
        return Promise.reject('用户不存在')
      }
      if (req.body.password !== user.password) {
        return Promise.reject('密码错误')
      }
      req.user = user.toJSON()
    }),
  ]),
  async (req, res, next) => {
    try {
      // res.send('auth login')
      const token = jwt.sign({
        userId: req.user._id
      }, tokenSecret)

      delete req.user.password

      res.status(200).json({
        token,
        ...req.user
      })
    } catch (err) {
      next(err)
    }
  }
]

exports.permissions = async (req, res, next) => {
  try {
    const ret = await req.user
      .populate({
        path: 'roles',
        populate: {
          path: 'menus'
        },
      })
    // ret = await ret
    //   .populate({
    //     path: 'roles',
    //     populate: {
    //       path: 'resources'
    //     },
    //   })
    res.status(200).json(ret)
  } catch (err) {
    next(err)
  }
}
