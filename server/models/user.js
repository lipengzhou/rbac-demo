const { Schema } = require('mongoose')

const userSchema = new Schema({
  /**
   * 用户名
   */
  username: {
    type: String,
    unique: true,
    required: true
  },

  /**
   * 密码
   */
  password: {
    type: String,
    required: true,
    select: false
  },

  /**
   * 姓名
   */
  name: {
    type: String,
    default: ''
  },

  /**
   * 角色
   */
  roles: {
    type: [Schema.Types.ObjectId],
    ref: 'Role'
  },

  /**
   * 状态
   * 0：未启用
   * 1：启用
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

module.exports = userSchema
