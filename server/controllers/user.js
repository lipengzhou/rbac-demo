const validate = require('../middlewares/validate')
const { body } = require('express-validator')
const { User } = require('../models')

exports.list = async (req, res, next) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (err) {
    next(err)
  }
}

exports.one = async (req, res, next) => {
  try {
    const users = await User.findById(req.params.id)
    res.status(200).json(users)
  } catch (err) {
    next(err)
  }
}

exports.create = [validate([
  body('username').notEmpty().withMessage('不能为空'),
  body('password').notEmpty().withMessage('不能为空'),
  body('username').custom(async value => {
    if (await User.findOne({ username: value })) {
      return Promise.reject('已被使用')
    }
  })
]), async (req, res, next) => {
  try {
    const user = await new User(req.body).save()
    res.status(201).json(user)
  } catch (err) {
    next(err)
  }
}]

exports.update = async (req, res, next) => {
  try {
    const ret = await User.findById(req.params.id)
    Object.assign(ret, req.body)
    await ret.save()
    res.status(200).json(ret)
  } catch (err) {
    next(err)
  }
}

exports.delete = async (req, res, next) => {
  try {
    await User.findByIdAndRemove(req.params.id)
    res.status(200).end()
  } catch (err) {
    next(err)
  }
}

exports.updateRoles = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    user.roles = req.body.roles
    await user.save()
    res.status(201).end()
  } catch (err) {
    next(err)
  }
}
