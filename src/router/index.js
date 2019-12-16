import Vue from 'vue'
import VueRouter from 'vue-router'
import Hospitals from '@/views/Hospitals'
import UTIs from '@/views/UTIs'
import Beds from '@/views/Beds'
import Attendance from '@/views/Attendance'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/hospitais'
  }, {
    path: '/hospitais',
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
    path: '/attendance/:pacientId/',
    name: 'attendance',
    component: Attendance
  }
]

const router = new VueRouter({
  mode: 'history', // remove # from url
  routes
})

export default router
