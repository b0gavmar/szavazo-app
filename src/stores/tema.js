import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useTemaStore = defineStore('tema', () => {
  const temak = ref([])

  const temaFeltoltes = async () => {
    const resp = await axios.get("http://localhost:3000/temak")
    temak.value = resp.data
  }


  return { temak, temaFeltoltes }
})
