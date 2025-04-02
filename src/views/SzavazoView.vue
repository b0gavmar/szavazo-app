<script setup>
import { onMounted } from 'vue';
import { useSzavazatokStore} from '@/stores/szavazatok';
const szavazatokStore = useSzavazatokStore();

onMounted(async ()=>{
  await szavazatokStore.loadTemak();
})

</script>

<template>
  <h1>Itt szavazhatsz!</h1>
  <p> Válassz témát
  <select v-model="temak">
    <option v-for="tema in szavazatokStore.temak" :value="tema.id">{{ tema.tema }}</option>
  </select>
  </p>
</template>
