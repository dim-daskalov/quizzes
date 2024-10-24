<script setup lang="ts">
import BackButton from '@/components/BackButton.vue'

const props = defineProps({
  quizResults: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section class="results">
    <p>Results:</p>
    <h1>{{ props.quizResults }}</h1>

    <BackButton />
  </section>
</template>

<style scoped>
.results {
  text-align: center;
  padding: 100px 0;
}

p {
  margin-bottom: 20px;
  font-size: larger;
  font-weight: bold;
}

h1 {
  margin: 20px;
  font-size: 6rem;
  font-weight: bold;
}
</style>
