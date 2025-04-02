import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useSzavazatokStore = defineStore('szavazatok', () => {
  const temak = ref([])

  const loadTemak = async () => {
    const resp = await axios.get("http://localhost:3000/temak")
    temak.value = resp.data
  }


  return { temak, loadTemak }
})
