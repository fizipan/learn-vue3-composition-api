import AddJob from '@/views/AddJob.vue'
import EditJob from '@/views/EditJob.vue'
import HomePage from '@/views/HomePage.vue'
import JobsView from '@/views/JobsView.vue'
import JobView from '@/views/JobView.vue'
import NotFound from '@/views/NotFound.vue'
import { createWebHistory } from 'vue-router'
import { createRouter } from 'vue-router'

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView
    },
    {
      path: '/jobs/:jobId',
      name: 'job',
      component: JobView
    },
    {
      path: '/jobs/add',
      name: 'add-job',
      component: AddJob
    },
    {
      path: '/jobs/edit/:jobId',
      name: 'edit-job',
      component: EditJob
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFound
    }
  ]
})

export default router
