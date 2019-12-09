import Vue from 'vue'
import VueRouter from 'vue-router'
import Hospital from '../views/Hospital'
import UTI from '@/views/UTI'
import Bed from '@/views/Bed'

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
    path: '/hospital/:hospitalId/uti/',
    name: 'hospital-utis',
    component: UTI
  }, {
    path: '/hospital/:hospitalId/uti/:utiId/beds',
    name: 'uti-beds',
    component: Bed
  }
]

const router = new VueRouter({
  routes
})

export default router
