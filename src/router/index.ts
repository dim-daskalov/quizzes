import { createRouter, createWebHistory } from 'vue-router'

import QuizzesView from '../views/QuizzesView.vue'
import QuizView from '../views/QuizView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'quizzes',
      component: QuizzesView,
    },
    {
      path: '/quizzes/:id',
      name: 'quiz-details',
      component: QuizView,
    },
  ],
})

export default router
