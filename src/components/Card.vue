<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { PropType } from 'vue'

import type { Quiz } from '@/interfaces'

const props = defineProps({
  quiz: {
    type: Object as PropType<Quiz>,
    required: true,
  },
})
</script>

<template>
  <div
    @click="
      $router.push({ name: 'quiz-details', params: { id: props.quiz.id } })
    "
    class="card"
  >
    <img :src="props.quiz.imageSrc" alt="card image" />
    <div class="card-text">
      <h2>{{ props.quiz.name }}</h2>
      <p>{{ props.quiz.questions.length }} questions</p>
    </div>
  </div>
</template>

<style>
.card {
  width: 20rem;
  overflow: hidden;
  border-radius: 5px;
  background-color: var(--color-text);
  box-shadow: 1px 1px 10px rgba(1, 1, 1, 0.1);
  margin-bottom: 30px;
  cursor: pointer;
  color: var(--color-background);
}

.card img {
  width: 100%;
  height: 12rem;
  margin: 0;
}

.card .card-text {
  padding: 10px;
}

.card .card-text h2 {
  font-weight: bold;
}
</style>
