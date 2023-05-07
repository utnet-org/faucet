import { createApp } from 'vue'
import App from './App.vue'
// 导入 normalize.css
import 'normalize.css'
// 导入自定义的公共样式
import '@/assets/styles/common.less'
// 导入 icon 图标
import '@/assets/icons/iconfont.css'
// 导入黑色主题
import '@/assets/styles/theme.less'
// 导入路由
import router from './router/index'
// 导入 pinia
import { createPinia } from 'pinia'
// 导入全局组件
import plugin from './components/index'

let pinia = createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .use(plugin)
  .mount('#app')