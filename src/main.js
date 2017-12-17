import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui' // UI库
import 'element-ui/lib/theme-chalk/index.css' // 默认样式
import './assets/iconfont' // 引入图标字体
import './components' // 引入自封装组建

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
