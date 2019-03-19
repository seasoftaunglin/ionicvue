import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Contact from '@/views/Contact'
import Geo from '@/views/Geo'
import Shake from '@/views/Shake'
import Camera from '@/views/Camera'
import Login from '@/views/Login'
import Signup from '@/views/Signup'
import App from '@/App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children : [
        {
          path: '/',
          redirect: 'home'
        },
        {
          path: 'home',
          components: {
            home : Home,
            contact : Contact,
            geo : Geo,
            shake : Shake,
            camera : Camera
          }
        },
      ]
    },
    {
      path: '/login',
      component: Login,
      name: 'login'
    },
    {
      path: '/signup',
      component: Signup,
      name: 'signup'
    },
  ],
  mode : 'history'
})
