<script setup lang="ts">
import BackButton from '@/components/BackButton.vue'
</script>

<template>
  <section class="quiz-not-found">
    <h1>No quiz found!</h1>

    <BackButton />
  </section>
</template>

<style scoped>
.quiz-not-found {
  margin-top: 40px;
  text-align: center;
}

.quiz-not-found h1 {
  font-weight: bold;
  margin: 40px;
}
</style>
