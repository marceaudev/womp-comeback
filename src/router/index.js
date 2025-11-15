import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import FilmDetail from '../views/FilmDetail.vue'
import { GlobalStore } from '../store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/film/:id',
      name: 'FilmDetail',
      component: FilmDetail,
    },
  ],
})

router.beforeEach((to) => {
  const token = GlobalStore.userToken.value

  if (!token && to.path !== '/login') {
    return '/login'
  }

  if (token && to.path === '/login') {
    return '/'
  }
})

export default router
