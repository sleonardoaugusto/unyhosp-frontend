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
      name: 'hospital-register',
      props: true,
      component: () => import('@/components/hospitals/HospitalRegister')
    }]
  }, {
    path: '/hospital/:hospitalId/uti/',
    name: 'utis',
    component: UTIs,
    children: [{
      path: 'register',
      name: 'uti-register',
      props: true,
      component: () => import('@/components/UTIs/UTIRegister')
    }]
  }, {
    path: '/hospital/:hospitalId/uti/:utiId/beds/',
    name: 'beds',
    component: Beds,
    children: [{
      path: '/hospital/:hospitalId/uti/:utiId/beds/:bedId',
      name: 'bed-detail',
      component: () => import('@/components/beds/BedDetail')
    }]
  }, {
    path: '/attendance',
    name: 'attendance',
    component: Attendance,
    children: [{
      path: 'register/:hospitalId',
      name: 'attendance-register',
      props: true,
      component: () => import('@/components/attendance/AttendanceRegister')
    }, {
      path: 'edit/:attendanceId',
      name: 'attendance-edit',
      props: true,
      component: () => import('@/components/attendance/AttendanceEdit')
    }]
  }, {
    path: '/pacient',
    name: 'pacient',
    component: Pacient,
    children: [{
      path: 'register',
      name: 'pacient-register',
      component: () => import ('@/components/pacient/PacientRegister')
    }]
  }
]

const router = new VueRouter({
  mode: 'history', // remove # from url
  routes
})

export default router
