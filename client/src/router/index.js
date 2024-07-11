import {  createWebHistory, createRouter } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Shop from '../pages/Shop.vue'
import Blog from '../pages/Blog.vue'
import Contact from '../pages/Contact.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/shop',
        name: 'shop',
        component: Shop,
      },
      {
        path: '/blog',
        name: 'blog',
        component: Blog,
      },
      {
        path: '/about',
        name: 'about',
        component: About,
      },
      {
        path: '/contact',
        name: 'contact',
        component: Contact,
      },
    ],
  });
  
  export default router;