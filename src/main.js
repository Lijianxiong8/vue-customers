import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Headers from './components/Header'
import Customers from './components/Customers'
import About from './components/About'
import Add from './components/Add'
import CustomerDetails from './components/CustomerDetails'
import Edit from './components/Edit.vue'
import "bootstrap3/dist/css/bootstrap.css"
import "bootstrap3/dist/js/bootstrap.js"

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueResource)

const router = new VueRouter({
  mode:"history",
  base:__dirname,
  routes:[
    {path:'/',component:Customers},
    {path:'/about',component:About},
    {path:'/add',component:Add},
    //path一定要写好，不然报错就麻烦，path不能重复
    {path:'/customer/:id',component:CustomerDetails},
    {path:'/edit/:id',component:Edit}
  ]
})

new Vue({
  template:'',
  render: h => h(App),
  component: {
    Headers
  },
  router,
}).$mount('#app')

