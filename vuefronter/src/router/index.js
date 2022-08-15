import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Index from '../views/Index'
import Download from '../views/Download'
import Resource from '../views/Resource'
import Community from '../views/Community'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'home',
    redirect:'/index'
  },
  {
    path: '/index',
    name: 'index',
    component: Index
  },
  {
    path: '/download',
    name: 'download',
    component: Download
  },
  {
    path: '/resource',
    name: 'resource',
    component: Resource
  },
  {
    path: '/community',
    name: '/community',
    component: Community,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
