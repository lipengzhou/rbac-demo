const mongoose = require('mongoose')

main().catch((err) => console.log(err))

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test')
}

module.exports = {
  User: mongoose.model('User', require('./user')),
  Role: mongoose.model('Role', require('./role')),
  Menu: mongoose.model('Menu', require('./menu')),
  Resource: mongoose.model('Resource', require('./resource'))
}
