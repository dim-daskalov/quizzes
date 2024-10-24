<script setup lang="ts">
import Search from '@/components/Search.vue'
import Card from '@/components/Card.vue'
</script>

<template>
  <Search>
    <template #search-content="{ quizzes }">
      <section v-if="quizzes.length" class="options-container">
        <Card v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz" />
      </section>
      <h2 v-else>No results!</h2>
    </template>
  </Search>
</template>

<style scoped>
.options-container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 40px;
}

h2 {
  font-weight: bold;
  text-align: center;
  margin-top: 40px;
}
</style>
