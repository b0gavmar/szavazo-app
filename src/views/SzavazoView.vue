<script setup>
import { onMounted, ref } from 'vue';
import { useSzavazatokStore} from '@/stores/szavazatok';
const szavazatokStore = useSzavazatokStore();
const temaId = ref(null);

onMounted(async ()=>{
  await szavazatokStore.loadTemak();
})

</script>

<template>
  <h1>Itt szavazhatsz!</h1>
  <p> Válassz témát
  <select v-model="temaId" @change="storeToRefs.loadOpciok(temaId)">
    <option v-for="tema in szavazatokStore.temak" :value="tema.id">{{ tema.tema }}</option>
  </select>
  </p>
  <div v-if="temaId">
    <h3></h3>
  </div>
</template>
