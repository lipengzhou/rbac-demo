const validate = require('../middlewares/validate')
const { body } = require('express-validator')
const { Role } = require('../models')

exports.list = async (req, res, next) => {
  try {
    const ret = await Role.find()
    res.status(200).json(ret)
  } catch (err) {
    next(err)
  }
}

exports.one = async (req, res, next) => {
  try {
    const ret = await Role.findById(req.params.id)
    res.status(200).json(ret)
  } catch (err) {
    next(err)
  }
}

exports.create = [validate([
  body('name').notEmpty().withMessage('不能为空')
]), async (req, res, next) => {
  try {
    const ret = await new Role(req.body).save()
    res.status(201).json(ret)
  } catch (err) {
    next(err)
  }
}]

exports.update = async (req, res, next) => {
  try {
    const ret = await Role.findById(req.params.id)
    Object.assign(ret, req.body)
    await ret.save()
    res.status(201).json(ret)
  } catch (err) {
    next(err)
  }
}

exports.delete = async (req, res, next) => {
  try {
    await Role.findByIdAndRemove(req.params.id)
    res.status(204).end()
  } catch (err) {
    next(err)
  }
}

/**
 * 给角色分配菜单
 */
exports.updateMenus = async (req, res, next) => {
  try {
    // 1. 获取角色
    const role = await Role.findById(req.params.roleId)
    // 2. 修改角色的菜单
    role.menus = req.body.menus
    // 3. 更新到数据库
    await role.save()
    res.status(201).json(role)
  } catch (err) {
    next(err)
  }
}

/**
 * 给角色分配资源
 */
exports.updateResources = async (req, res, next) => {
  try {
    // 1. 获取角色
    const role = await Role.findById(req.params.roleId)
    // 2. 修改角色的资源
    role.resources = req.body.resources
    // 3. 更新到数据库
    await role.save()
    res.status(204).end()
  } catch (err) {
    next(err)
  }
}
