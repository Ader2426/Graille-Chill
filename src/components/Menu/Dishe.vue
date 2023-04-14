<script setup>
import { defineProps, ref } from "vue";

defineProps([
  "addToCart",
  "plate",
  "showPlate",
  "quantity",
  "shoppingList",
  "removeFromCart",
]);
const isVisible = ref(false);
</script>
<template>
  <ul class="p-4 m-2">
    <button @click="showPlate(plate)">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>
    <img :src="plate.src" alt="" class="w-56 h-56 object-cover" />
    <li>{{ plate.nom }}</li>
    <li>Prix: {{ plate.prix }}</li>
    <div class="flex">
      <p>Allergenes :</p>
      <p v-for="(item, index) in plate.allergenes" :key="index" class="mx-1">
        {{ item }}
      </p>
    </div>

    <div v-if="quantity">
      <button class="btn primary" @click="addToCart(plate)">+</button>
      <p>{{ quantity }}</p>
      <button class="btn primary" @click="removeFromCart(plate)">-</button>
    </div>
    <div v-else>
      <button @click="addToCart(plate)" class="btn primary">Ajouter</button>
    </div>
  </ul>
</template>