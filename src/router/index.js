import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Teams from '../views/Teams.vue'
import Profile from '../views/Profile.vue'
import i18n from '../i18n'

Vue.use(VueRouter)


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
        },
        {
          path: 'profile',
          name: 'Profile',
          component: Profile,
          beforeEnter(to, from, next){
            if(localStorage.getItem('token')){
              next()
            }
            else{
              next(`/${i18n.locale}/login`)
            }
          }
        },
        {
          path: 'teams/:game',
          name: 'Teams',
          component: Teams,
          beforeEnter(to, from, next){
            if(localStorage.getItem('token')){
              next()
            }
            else{
              next(`/${i18n.locale}/login`)
            }
          }
        },
      ]
    }
],
scrollBehavior (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}
})

export default router