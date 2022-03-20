
import Toast from './Toast.vue'
import {createApp} from 'vue'

const obj = {}

obj.install = function(app) {

// 1.实例化并绑定组件
  const toastConstructor =createApp(Toast);
  const instance =toastConstructor.mount(document.createElement('div'))
  //2.将挂载的Node添加到body中
  document.body.appendChild(instance.$el)
  //3.定义全局（$toast为此插件的名称）
  app.config.globalProperties.$toast = instance;

}   
export default obj

