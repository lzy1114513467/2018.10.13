import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '../components/Navagator.vue',
    //   name: 'navgator',
    //   component:()=>import('@/views/movie/Movie.vue')
    // },
    {
      path: '/movie',
      name: 'movie',
      component:()=>import('@/views/movie/Movie.vue')
      
    },
    {
      path: '/book',
      name: 'book',
      component:()=>import('@/views/book/Book.vue')
      
    },
    {
      path: '/music',
      name: 'music',
      component:()=>import('@/views/music/Music.vue')
      
    },
    {
      path: '/talk',
      name: 'talk',
      component:()=>import('@/views/talk/Talk.vue')
      
    }, 

   {
      path:'*',
      component:()=>import('@/views/Error.vue')
      
    }
  ]
})
