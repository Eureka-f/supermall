import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import eventBus from 'vue3-eventbus'
import store from './store'

import toast from 'components/common/toast'
import Lazyload from 'vue3-lazy'

// Vue.prototype.$bus = new Vue()//$bus需要发出事件，所以要new 一个vue实例,vue2写法

// vue3自动生成的代码如下
// createApp(App).mount('#app')  
// 调整为如下
const app=createApp(App);
app.use(router,eventBus) ; //挂载路由和eventbus（事件总线）
app.use(store);
app.use(toast);
app.use(Lazyload,{
  loading: require('./assets/img/common/placeholder.png')
  // loading: 'assets/img/common/placeholder.png'
})
app.mount('#app');