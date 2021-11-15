import { createRouter, createWebHashHistory, RouteRecordRaw, RouterView } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../layout/index.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/home/index.vue')
      },
      {
        path: 'product',
        name: 'product',
        component: () => import('../views/product/index.vue')
      },
      {
        path: 'order',
        name: 'order',
        component: () => import('../views/home/index.vue')
      },
      {
        path: 'marketing',
        name: 'marketing',
        component: () => import('../views/marketing/index.vue')
      },
      {
        name: 'permission',
        path: 'permission',
        component: RouterView,
        children: [
          {
            name: 'permission-user',
            path: 'user',
            component: () => import('../views/permission/user/index.vue')
          },
          {
            name: 'permission-role',
            path: 'role',
            component: () => import('../views/permission/role/index.vue')
          },
          {
            name: 'permission-menu',
            path: 'menu',
            component: () => import('../views/permission/menu/index.vue')
          },
          {
            name: 'permission-resource',
            path: 'resource',
            component: () => import('../views/permission/resource/index.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  }
]

const router = createRouter({
  routes: routes,
  history: createWebHashHistory()
})

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
