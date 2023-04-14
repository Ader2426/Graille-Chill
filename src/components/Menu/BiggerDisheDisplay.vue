<script setup>
import { reactive } from "vue";

defineProps(["plate", "exitFunction", "addToCart"]);
</script>
<template>
  <div
    class="h-[600px] w-[900px] bg-red-300 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  >
    <button @click="exitFunction()">
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
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
    <div class="flex items-center justify-center">
      <img class="w-80 object-contains m-8" :src="plate.src" alt="" />
      <div class="flex flex-col h-[300px] justify-around">
        <h2 class="text-4xl">{{ plate.nom }}</h2>
        <div>
          <h2>Ingredients :</h2>
          <p
            class="text-2xl"
            v-for="(item, index) in plate.ingredients"
            :key="index"
          >
            {{ item }}
          </p>
        </div>
        <p class="text-2xl">Prix : {{ plate.prix }}€</p>
      </div>
    </div>

    <div v-for="(item, index) in plate.allergenes" :key="index">
      <p>{{ item }}</p>
    </div>
    <button class="btn primary m-2" @click="addToCart(plate), exitFunction()">
      Ajouter
    </button>
  </div>
</template>