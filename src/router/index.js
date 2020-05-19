import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '@/store'

import Landing from '@/views/landing/landing'
import Home from '@/views/landing/home/home'
import Timetables from '@/views/landing/timetables/timetables'
import Tariffs from '@/views/landing/tariffs/tariffs'
import Contacts from '@/views/landing/contacts/contacts'
import Legals from '@/views/landing/legals/legals'
import Login from '@/views/landing/login/login'
import SignUp from '@/views/landing/signup/signup'

import Back from '@/views/back/back'
import AdminDashboard from '@/views/admin/dashboard/dashboard'
import CustomerDashboard from '@/views/customer/dashboard/dashboard'
import CustomerWallet from '@/views/customer/wallet/wallet'

import PageNotFound from '@/views/PageNotFound/PageNotFound'

Vue.use(VueRouter)

// const auth = (to, from, next) => {

//   if (!store.getters.isAuthenticated) {
//     return next('/login')
//   }
//   next()
// }

const routes = [{
  path: '/',
  component: Landing,
  children: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/timetables',
    name: 'timetables',
    component: Timetables
  }, {
    path: '/tariffs',
    name: 'tariffs',
    component: Tariffs
  }, {
    path: '/contacts',
    name: 'contacts',
    component: Contacts
  }, {
    path: '/legals',
    name: 'legals',
    component: Legals
  }, {
    path: '/signup',
    name: 'signup',
    component: SignUp
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }]
}, {
  path: '/admin',
  component: Back,
  children: [{
    path: '/',
    name: 'adminDashboard',
    component: AdminDashboard
  }]
}, {
  path: '/customer',
  component: Back,
  children: [{
    path: '/customer',
    name: 'customerDashboard',
    component: CustomerDashboard
  }, {
    path: '/customer/wallet',
    name: 'customerWallet',
    component: CustomerWallet
  }]
}, {
  path: '*',
  name: 'PageNotFound',
  component: PageNotFound
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
