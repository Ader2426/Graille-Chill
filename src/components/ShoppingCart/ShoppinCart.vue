<script setup>
import { defineProps, ref, inject } from "vue";
defineProps([
  "addToCart",
  "shoppingList",
  "removeFromCart",
  "plate",
  "totalPrice",
  "totalDisheQuantity",
]);
</script>

<template>
  <div class="w-screen mx-auto">
    <div class="bg-red-300 mx-auto p-2 w-96">
      <h2>{{ totalDisheQuantity }} plats</h2>
      <div v-for="item in shoppingList" :key="item.id" class="border-2 m-2 p-2">
        <h2>{{ item.nom }}</h2>
        <h4>{{ item.prix }} €</h4>
        <div>
          <button class="btn primary" @click="addToCart(item)">+</button>
          <p>{{ item.quantity }}</p>
          <button class="btn primary" @click="removeFromCart(item)">-</button>
        </div>
        <p>quantite :{{ item.quantity }}</p>
      </div>
      <p>total: {{ totalPrice }} €</p>
      <p>Frais de livraison : {{ totalPrice > 35 ? "free" : 5 }} €</p>
    </div>
  </div>
</template>