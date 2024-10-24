<template>
  <button @click="$router.replace({ name: 'quizzes' })">Back to quizzes</button>
</template>

<style scoped>
button {
  border-radius: 5px;
  font-weight: bold;
  font-size: larger;
  padding: 10px 20px;
  background-color: bisque;
}
</style>
