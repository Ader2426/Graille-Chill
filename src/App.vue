<script setup >
import { onMounted, ref, computed } from "vue";

const plateList = ref([]);
const isVisible = ref(false);

onMounted(async () => {
  const res = await fetch("http://localhost:8000/plats");
  plateList.value = await res.json();
});

const showIngredients = async (plateId) => {
  const plate = plateList.value.find((plat) => plat.id === plateId);
  const res = await fetch(
    `http://localhost:8000/plats/${plate.id}/ingredients`
  );
  console.log(plate.id);
  plate.ingredients = await res.json();
};
</script>
<template>
  <div class="grid grid-cols-3 grid-rows-2 items-center justify-items-center">
    <ul v-for="plate in plateList" :key="plate.id" class="p-4 m-2">
      <img :src="plate.src" alt="" class="w-56 h-56 object-cover" />
      <li>{{ plate.nom }}</li>
      <li>Prix: {{ plate.prix }}</li>
      <div class="flex">
        <p>Allergenes :</p>
        <p v-for="(item, index) in plate.allergenes" :key="index" class="mx-1">
          {{ item }}
        </p>
      </div>

      <button class="btn primary" @click="showIngredients(plate.id)">
        Ingredients
      </button>
      <ul v-if="!plate.ingredients">
        <li v-for="(ingredient, index) in plate.ingredients" :key="index">
          {{ ingredient }}
        </li>
      </ul>
    </ul>
  </div>
</template>


