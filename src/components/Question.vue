<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { PropType } from 'vue'
import type { Question } from '@/interfaces'

const props = defineProps({
  question: {
    type: Object as PropType<Question>,
    required: true,
  },
})

const emit = defineEmits(['selectOption'])

const emitSelectedOption = (isCorrect: boolean) => {
  emit('selectOption', isCorrect)
}
</script>

<template>
  <div class="question-container">
    <h2 class="question">{{ props.question.text }}</h2>
  </div>
  <div class="options-container">
    <div
      v-for="option in props.question.options"
      :key="option.id"
      @click="emitSelectedOption(option.isCorrect)"
      class="option"
    >
      <p class="option-label">{{ option.label }}</p>
      <p class="option-value">{{ option.text }}</p>
    </div>
  </div>
</template>

<style scoped>
.question-container {
  margin-top: 20px;
}

.question {
  margin-bottom: 20px;
  font-weight: bold;
}

.option {
  display: flex;
  margin-bottom: 20px;
  border: 3px solid bisque;
  border-radius: 5px;
  cursor: pointer;
}

.option-label {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: x-large;
  width: 3rem;
  height: 3rem;
  background-color: bisque;
  color: var(--color-background);
}

.option-value {
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: x-large;
  width: 100%;
  padding: 0 20px;
  background-color: rgb(244, 239, 239);
  color: var(--color-background);
}
</style>
