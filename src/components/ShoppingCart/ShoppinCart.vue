<script setup>
import { defineProps } from "vue";
defineProps(["addToCart", "shoppinList", "removeFromCart", "plate"]);
</script>

<template>
  <div class="w-screen mx-auto">
    <div v-if="shoppinList.length > 0" class="bg-red-300 mx-auto p-2 w-96">
      <h2>{{ shoppinList.length }} plats</h2>
      <div v-for="item in shoppinList" :key="item.id" class="border-2 m-2 p-2">
        <h2>{{ item.nom }}</h2>
        <h4>{{ item.prix }} €</h4>
        <div>
          <button class="btn primary" @click="addToCart(item)">+</button>
          <p>{{ item.quantity }}</p>
          <button class="btn primary" @click="removeFromCart(item)">-</button>
        </div>
        <p>quantite :{{ item.quantity }}</p>
      </div>
    </div>
  </div>
</template>