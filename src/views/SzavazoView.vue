<script setup>
import { onMounted } from 'vue';
import { useTemaStore} from '@/stores/tema';
const temaStore = useTemaStore();

onMounted(async ()=>{
  await temaStore.temaFeltoltes();
})

</script>

<template>
  <h1>Itt szavazhatsz!</h1>
  <select v-model="temak">
    <option v-for="tema in temaStore.temak" value="">{{ tema.tema }}</option>
  </select>
</template>
