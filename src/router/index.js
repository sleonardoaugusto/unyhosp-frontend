import Vue from 'vue'
import VueRouter from 'vue-router'
import Hospitals from '@/views/Hospitals'
import UTIs from '@/views/UTIs'
import Beds from '@/views/Beds'
import Attendance from '@/views/Attendance'
import Pacient from '@/views/Pacient'

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
    path: '/attendance',
    name: 'attendance',
    component: Attendance,
    children: [
      {
        path: 'register/:hospitalId',
        name: 'attendanceRegister',
        props: true,
        component: () => import('@/components/attendance/Register')
      }, {
        path: 'edit/:attendanceId',
        name: 'attendanceEdit',
        props: true,
        component: () => import('@/components/attendance/Edit')
      }
    ]
  }, {
    path: '/pacient',
    name: 'pacient',
    component: Pacient,
    children: [{
      path: 'register',
      name: 'pacientRegister',
      component: () => import ('@/components/pacient/Register')
    }]
  }
]

const router = new VueRouter({
  mode: 'history', // remove # from url
  routes
})

export default router
