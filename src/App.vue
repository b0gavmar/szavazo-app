<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="container">
        <nav class="text-center">
        <RouterLink class="btn btn-primary m-3" to="/">szavazok</RouterLink>
        <RouterLink class="btn btn-primary" to="/eredmeny">Eredmeny</RouterLink>
      </nav>
    </div>

  </header>

  <RouterView />
</template>

<style scoped>

</style>
