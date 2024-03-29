// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 按需导入 Mint-UI 中的组件
import { Header } from 'mint-ui'
// 导入MUI的样式
import '../public/cdn/mui/css/mui.min.css'

Vue.component(Header.name, Header)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
