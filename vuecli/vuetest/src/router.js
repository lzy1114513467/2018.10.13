import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Conut from './views/Count.vue'


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
    {
      path:'*',
      component:() => import("./views/Error404.vue")
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
       beforeEnter (to, from, next) {
         next()
       }

    },
    {
      path:"/mine",
      name:"mine",
      component:() =>import("./views/Mine.vue")
    },
    {
      path:"/test",
      name:"test",
      component:() =>import("./views/Test.vue"),
      children:[
        {path:"/test/test1",
        name:"test1",
        alias:'/niubi',
        component:() =>import("./views/Test1.vue")

        },
        {path:"/test2/:name/",
        name:"test2",
        component:() =>import("./views/Test2.vue")

        }
    ]
    },{
      path:'/count',
      component: Conut
    }
  ]
})
