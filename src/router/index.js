import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Project from '../views/Project.vue';
import Photography from '../views/Photography.vue';
import About from '../views/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/project/:project_id',
    name: 'Project',
    component: Project
  },
  {
    path: '/photography',
    name: 'Photography',
    component: Photography
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
