<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useQuizzesStore } from '@/stores/quizzes'

import Question from '@/components/Question.vue'
import QuizBar from '@/components/QuizBar.vue'
import QuizNotFound from '@/components/QuizNotFound.vue'
import QuizResult from '@/components/QuizResult.vue'

const route = useRoute()
const quizzesStore = useQuizzesStore()

const quizId = Number(route.params.id)

const currentQuiz = quizzesStore.getQuizById(quizId)

const onOptionSelected = (isCorrect: boolean) => {
  if (isCorrect) {
    quizzesStore.incrementCorrectAnswers()
  }
  quizzesStore.incrementQuestionIndex()
}

onMounted(() => quizzesStore.resetQuiz())
</script>

<template>
  <main v-if="currentQuiz?.id">
    <section v-if="!quizzesStore.isLastQuestion(quizId)">
      <QuizBar
        :barPercentage="quizzesStore.barPercentage(quizId)"
        :questionsStatus="quizzesStore.questionsStatus(quizId)"
      />
      <Question
        :question="currentQuiz.questions[quizzesStore.currentQuestionIndex]"
        @selectOption="onOptionSelected"
      />
    </section>
    <QuizResult v-else :quizResults="quizzesStore.quizResults(quizId)" />
  </main>
  <QuizNotFound v-else />
</template>
