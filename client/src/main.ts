import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import router from './router/index'
import './styles/index.css'
import { createPinia } from 'pinia'
import persistedstatePiniaPlugin from './store/plugins/persistedstate'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn
})

const pinia = createPinia()

pinia.use(persistedstatePiniaPlugin())

app.use(pinia)

app.use(router)

app.mount('#app')
