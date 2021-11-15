const validate = require('../middlewares/validate')
const { body } = require('express-validator')
const { Resource } = require('../models')

exports.list = async (req, res, next) => {
  try {
    const ret = await Resource.find()
    res.status(200).json(ret)
  } catch (err) {
    next(err)
  }
}

exports.one = async (req, res, next) => {
  try {
    const ret = await Resource.findById(req.params.id)
    res.status(200).json(ret)
  } catch (err) {
    next(err)
  }
}

exports.create = [validate([
  body('name').notEmpty().withMessage('不能为空'),
  body('path').notEmpty().withMessage('不能为空')
]), async (req, res, next) => {
  try {
    const ret = await new Resource(req.body).save()
    res.status(201).json(ret)
  } catch (err) {
    next(err)
  }
}]

exports.update = async (req, res, next) => {
  try {
    const ret = await Resource.findById(req.params.id)
    Object.assign(ret, req.body)
    await ret.save()
    res.status(201).json(ret)
  } catch (err) {
    next(err)
  }
}

exports.delete = async (req, res, next) => {
  try {
    await Resource.findByIdAndRemove(req.params.id)
    res.status(204).end()
  } catch (err) {
    next(err)
  }
}
