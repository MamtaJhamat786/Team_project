import Vue from 'vue'

import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Signup from '@/components/Signup'
import Signin from '@/components/Signin'
import firebase from 'firebase'

import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import i18n from '../i18n'


Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: 'signin'
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: { requiresAuth: true }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
        path: '/about',
        name: 'About',
        component: function () {
          return import(/* webpackChunkName: "about" */ '../views/About.vue')
        }
    },
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        next()
      } else {
        next({
          path: '/signin',
          query: { redirect: to.fullPath }
        })
      }
    })
  } else {
    next()
  }
})

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes :[
    {
      path: '/',
      redirect: `/${i18n.locale}`,
      name: "main"

    },
    {
      path: "/:lang",
      name: "",
      component: {
        render(c) { return c("router-view") }
      },
      children: [
        {
          path: '',
          name: 'Home',
          component: Home
        },
        {
          path: 'signup',
          name: 'Signup',
          component: Signup
          
        },
        {
          path: 'about',
          name: 'About',
          component: About
          
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
          
        }
      ]
    }
]
})

export default router
