<script setup lang="ts">
const props = defineProps({
  barPercentage: {
    type: String,
    required: true,
  },
  questionsStatus: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <header>
    <h2>Question {{ props.questionsStatus }}</h2>
    <div class="bar">
      <div class="completion" :style="{ width: barPercentage }" />
    </div>
  </header>
</template>

<style scoped>
header {
  margin-top: 20px;
}

h2 {
  font-weight: bold;
}

.bar {
  width: 19rem;
  height: 3rem;
  border: 3px solid bisque;
  border-radius: 5px;
  margin-top: 10px;
}

.completion {
  height: 100%;
  width: 0%;
  background-color: bisque;
}
</style>
