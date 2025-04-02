<script setup>

</script>

<template>
  <h1>Itt szavazhatsz!</h1>
  <select v-model="temak">
    <option v-for="n in 6" value="">{{ n }}</option>
  </select>
</template>
