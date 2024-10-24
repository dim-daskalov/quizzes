import { defineStore } from 'pinia'

import type { Quiz } from '@/interfaces'
import qs from '@/data/quizzes.json'

export const useQuizzesStore = defineStore({
  id: 'quizzes',
  state: () => ({
    quizzes: qs as Quiz[],
    currentQuestionIndex: 0,
    numberOfCorrectAnswers: 0,
  }),
  actions: {
    incrementQuestionIndex() {
      this.currentQuestionIndex += 1
    },
    incrementCorrectAnswers() {
      this.numberOfCorrectAnswers += 1
    },
    resetQuiz() {
      this.currentQuestionIndex = 0
      this.numberOfCorrectAnswers = 0
    },
  },
  getters: {
    getFilteredQuizzes: state => (search: string) => {
      if (!search.length) {
        return state.quizzes
      }
      return state.quizzes.filter(quiz =>
        quiz.name.toLowerCase().includes(search.toLowerCase()),
      )
    },
    getQuizById: state => (id: number) => {
      return state.quizzes.find(quiz => quiz.id === id)
    },
    questionsStatus: state => (quizId: number) => {
      const quiz = state.quizzes.find(quiz => quiz.id === quizId)
      return quiz
        ? `${state.currentQuestionIndex + 1}/${quiz.questions.length}`
        : '0/0'
    },
    barPercentage: state => (quizId: number) => {
      const quiz = state.quizzes.find(quiz => quiz.id === quizId)
      return quiz
        ? `${(state.currentQuestionIndex / quiz.questions.length) * 100}%`
        : '0%'
    },
    isLastQuestion: state => (quizId: number) => {
      const quiz = state.quizzes.find(quiz => quiz.id === quizId)
      return quiz ? state.currentQuestionIndex === quiz.questions.length : false
    },
    quizResults: state => (quizId: number) => {
      const quiz = state.quizzes.find(quiz => quiz.id === quizId)
      return quiz
        ? `${state.numberOfCorrectAnswers}/${quiz.questions.length}`
        : '0/0'
    },
  },
})
