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
    component: Hospitals,
    children: [{
      path: 'register',
      name: 'hospitalRegister',
      props: true,
      component: () => import('@/components/hospitals/HospitalRegister')
    }]
  }, {
    path: '/hospital/:hospitalId/uti/',
    name: 'UTIs',
    component: UTIs,
    children: [{
      path: 'register',
      name: 'UTIRegister',
      props: true,
      component: () => import('@/components/UTIs/UTIRegister')
    }]
  }, {
    path: '/hospital/:hospitalId/uti/:utiId/beds/',
    name: 'beds',
    component: Beds
  }, {
    path: '/attendance',
    name: 'attendance',
    component: Attendance,
    children: [{
      path: 'register/:hospitalId',
      name: 'attendanceRegister',
      props: true,
      component: () => import('@/components/attendance/AttendanceRegister')
    }, {
      path: 'edit/:attendanceId',
      name: 'attendanceEdit',
      props: true,
      component: () => import('@/components/attendance/AttendanceEdit')
    }]
  }, {
    path: '/pacient',
    name: 'pacient',
    component: Pacient,
    children: [{
      path: 'register',
      name: 'pacientRegister',
      component: () => import ('@/components/pacient/PacientRegister')
    }]
  }
]

const router = new VueRouter({
  mode: 'history', // remove # from url
  routes
})

export default router
