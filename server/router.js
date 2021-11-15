const router = require('express').Router()
const userControl = require('./controllers/user')
const roleControl = require('./controllers/role')
const menuControl = require('./controllers/menu')
const resourceControl = require('./controllers/resource')
const commonControl = require('./controllers/common')

router.post('/login', commonControl.login)
  .get('/permissions', commonControl.permissions)

router
  .get('/users', userControl.list)
  .get('/users/:id', userControl.one)
  // .post('/users', userControl.create)
  .put('/users/:id', userControl.update)
  .delete('/users/:id', userControl.delete)
  .patch('/users/:id/roles', userControl.updateRoles)

router
  .get('/roles', roleControl.list)
  .get('/roles/:id', roleControl.one)
  .post('/roles', roleControl.create)
  .put('/roles/:id', roleControl.update)
  .delete('/roles/:id', roleControl.delete)
  .patch('/roles/:roleId/menus', roleControl.updateMenus) // 给角色分配菜单权限
  .patch('/roles/:roleId/resources', roleControl.updateResources) // 给角色分配资源权限

router
  .get('/menus', menuControl.list)
  .get('/menus/:id', menuControl.one)
  .post('/menus', menuControl.create)
  .put('/menus/:id', menuControl.update)
  .delete('/menus/:id', menuControl.delete)

router
  .get('/resources', resourceControl.list)
  .get('/resources/:id', resourceControl.one)
  .post('/resources', resourceControl.create)
  .put('/resources/:id', resourceControl.update)
  .delete('/resources/:id', resourceControl.delete)

module.exports = router
