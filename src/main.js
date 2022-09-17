import Vue from 'vue'
import App from './App.vue'
//按需引入饿么了UI
import { Input,Button,TableColumn,Table,MenuItem,Submenu,Menu,carousel,carouselItem } from 'element-ui';
//引入API
import * as API from '@/api'
//引入axios  by zhengkai.blog.csdn.net
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'  //自动附加在所有axios请求前面，则可以省略/api，直接写'/xxxx/xxx'。否则需要设置'/api/xxxx/xxx'

//引入路由器
import VueRouter from 'vue-router'
import router from '@/router'

Vue.component(Input.name, Input)
Vue.component(Button.name,Button)
Vue.component(Table.name,Table)
Vue.component(TableColumn.name,TableColumn)
Vue.component(MenuItem.name,MenuItem)
Vue.component(Submenu.name,Submenu)
Vue.component(Menu.name,Menu)
Vue.component(carousel.name,carousel)
Vue.component(carouselItem.name,carouselItem)

//使用路由
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  el:'#app',
  beforeCreate(){
    Vue.prototype.$API = API
  },
  render: h => h(App),
  router:router,
})
