<script setup >
import { onMounted, ref, computed, provide } from "vue";
import Dishes from "./components/Menu/Dishes.vue";

const plateList = ref([]);
provide("plateList", plateList);

onMounted(async () => {
  const res = await fetch("http://localhost:8000/plats");
  plateList.value = await res.json();
});
</script>


<template>
  <div class="w-[80%]">
    <Dishes :plateList="plateList" />
  </div>
</template>


