const { Schema } = require('mongoose')

const roleSchema = new Schema({
  /**
   * 资源名称
   */
  name: {
    type: String,
    required: true
  },

  /**
   * 资源描述
   */
  description: {
    type: String,
    default: ''
  },

  /**
   * 资源路径
   */
  path: {
    type: String,
    required: true
  },

  /**
   * 请求方法
   */
  method: {
    type: String,
    enum: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    required: true
  },

  /**
   * 是否启用
   */
  status: {
    type: Number,
    default: 0
  },

  /**
   * 创建时间
   */
   createdAt: {
    type: Date,
    default: Date.now
  },

  /**
   * 更新时间
   */
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = roleSchema
