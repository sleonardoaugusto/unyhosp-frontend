import Vue from 'vue'
import VueRouter from 'vue-router'
import Hospitals from '@/views/Hospitals'
import UTIs from '@/views/UTIs'
import Beds from '@/views/Beds'
import Pacient from '@/views/Pacient'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/hospitals'
  }, {
    path: '/hospitals',
    name: 'hospitals',
    component: Hospitals
  }, {
    path: '/hospital/:hospitalId/uti/',
    name: 'hospital-utis',
    component: UTIs
  }, {
    path: '/hospital/:hospitalId/uti/:utiId/beds/',
    name: 'uti-beds',
    component: Beds
  }, {
    path: '/pacient/:pacientId/',
    name: 'pacient',
    component: Pacient
  }
]

const router = new VueRouter({
  mode: 'history', // remove # from url
  routes
})

export default router
