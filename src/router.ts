import { createRouter, createWebHashHistory } from 'vue-router'
import helloworld from './views/helloworld.vue'
import About from './views/about.vue'
import Home from './views/home.vue'


export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/helloworld'
    },
    {
      path: '/helloworld',
      // You could also have named views at tho top
      component:helloworld,
      children: [
        {
          path: '/home',
          component: Home,
        },
        {
          path: '/about',
          component: About           
          },       
      ],
    },
  ],
})