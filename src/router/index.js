import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import lists from '../views/lists.vue'
import nav from '../views/nav.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/index", //重指向路由器
  },
  {
    path: '/index',
    name: 'index',
    component: index,
    children:[
      {
        path: '',
        name: '',
        component: nav
      },
      {
        path: 'nav:id',
        name: 'nav',
        component: nav
      },
     
    ]
    
  },
  {
    path: 'lists',
    name: 'lists',
    component: lists
  },
 
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
