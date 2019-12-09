import Vue from 'vue'
import VueRouter from 'vue-router'
import Hospital from '../views/Hospital'
import UTIList from '@/components/UTIList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/hospitals'
  },
  {
    path: '/hospitals',
    name: 'hospitals',
    component: Hospital
  }, {
    path: '/hospital/:hospitalId/',
    name: 'hospital-utis',
    component: UTIList
  }
]

const router = new VueRouter({
  routes
})

export default router
