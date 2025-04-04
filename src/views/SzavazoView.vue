<script setup>
import { onMounted, ref } from "vue";
import { useSzavazatokStore } from "@/stores/szavazatok";
const szavazatokStore = useSzavazatokStore();
const temaId = ref(null);
const szavazat = ref()

onMounted(async () => {
  await szavazatokStore.loadTemak();
  await szavazatokStore.loadOpciok();
});
</script>

<template>
  <h1>Itt szavazhatsz!</h1>
  <p>
    Válassz témát
    <select v-model="temaId" @change="szavazatokStore.loadOpciok(temaId)">
      <option v-for="tema in szavazatokStore.temak" :value="tema.id">
        {{ tema.tema }}
      </option>
    </select>
  </p>
  <div v-if="temaId">
    <h3>Szavazati lehetőségek:</h3>
    <p v-for="o in szavazatokStore.opciok">
      <input type="radio" v-model="szavazat" :value="o.id" >{{ o.opcio }}<input>
    </p>
    <button @click="szavazatokStore.szavazok(szavazat)" class="btn btn-danger">Szavazok</button>
  </div>
</template>
