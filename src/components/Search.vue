<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue'

import { useQuizzesStore } from '@/stores/quizzes'

import logoImg from '@/assets/quiz-logo.png'

const quizzesStore = useQuizzesStore()

const search = ref('')
</script>

<template>
  <header>
    <div class="search-group">
      <div class="search-logo">
        <img :src="logoImg" alt="logo" />
        <h1>Quizzes</h1>
      </div>

      <input
        v-model.trim="search"
        type="text"
        placeholder="Search quizzes..."
      />
    </div>
  </header>
  <main>
    <slot
      name="search-content"
      :quizzes="quizzesStore.getFilteredQuizzes(search)"
    />
  </main>
</template>

<style scoped>
header {
  width: 100%;
  margin-bottom: 10px;
  margin-top: 30px;
}

.search-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.search-logo {
  display: flex;
  align-items: center;
}

.search-logo img {
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 5px;
}

h1 {
  font-weight: bold;
  margin: 10px 0;
}

header input {
  border: 2px solid;
  color: var(--color-text);
  background-color: rgba(128, 128, 128, 0.1);
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
  min-width: 15rem;
}
</style>
