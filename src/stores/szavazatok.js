import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useSzavazatokStore = defineStore("szavazatok", () => {
  const temak = ref([]);
  const opciok = ref([]);
  const szavazatok = ref([]);

  const loadTemak = async () => {
    const resp = await axios.get("http://localhost:3000/temak");
    temak.value = resp.data;
  };

  const loadOpciok = async (id) => {
    const resp = await axios.get("http://localhost:3000/opciok");
    opciok.value = resp.data.filter((o) => o.temId == id);
  };

  const szavazok = async (id) => {
    //console.log(id);
    axios.post("http://localhost:3000/szavazatok", { opcioId: id });
  };

  const loadSzavazatok = () => {
    const resp = axios.get("http://localhost:3000/szavazatok");
    szavazatok = resp.data;
  };

  return {
    temak,
    opciok,
    szavazatok,
    loadTemak,
    loadOpciok,
    loadSzavazatok,
    szavazok,
  };
});
