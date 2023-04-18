<script setup >
import { onMounted, ref, computed, provide } from "vue";
import Dishes from "./components/Menu/Dishes.vue";
import Navbar from "./components/NavBar/Navbar.vue";
import Footer from "./components/Footer.vue";

const plateList = ref([]);
provide("plateList", plateList);

onMounted(async () => {
  const res = await fetch("http://localhost:8000/plats");
  plateList.value = await res.json();
});
</script>


<template >
  <Navbar />
  <Footer />
</template>


