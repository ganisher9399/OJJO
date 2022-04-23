import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog/index.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/contact/index.vue'),
  }, 
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login/index.vue'),
  },   
  {
    path: '/post/:postId',
    name: 'Post',
    component: () => import('../views/Blog/components/BlogPost.vue'),
  },  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
