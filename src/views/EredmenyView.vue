<template>
  <h1>Szavazás állás</h1>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useSzavazatokStore } from '@/stores/szavazatok';
const store = useSzavazatokStore()

onMounted(()=>{
  store.loadSzavazatok();
})
</script>

<style>

</style>
