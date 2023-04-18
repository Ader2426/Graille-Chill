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
const price = ref(2.99);
</script>

<template>
  <div class="w-screen">
    <div
      class="primary mx-auto p-4 w-96 fixed right-6 mt-28 rounded-md h-96 overflow-y-auto test"
    >
      <h2 class="text-lg font-semibold text-emerald-100 my-4">
        Total des plats : {{ totalDisheQuantity }} Pcs
      </h2>
      <div
        v-for="item in shoppingList"
        :key="item.id"
        class="border-2 py-4 px-2 flex justify-between items-center rounded-md bgNew my-2"
      >
        <div class="">
          <h2 class="text-md font-md">{{ item.nom }}</h2>
          <h4 class="font-semibold">Prix :{{ item.prix }} €</h4>
        </div>

        <div class="flex">
          <button class="primary mx-4 p-1 rounded-md" @click="addToCart(item)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-3 h-3 stroke-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
          </button>
          <p class="font-bold text-lg w-3">{{ item.quantity }}</p>
          <button
            class="primary mx-4 p-1 rounded-md"
            @click="removeFromCart(item)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-3 h-3 stroke-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        v-if="totalPrice"
        class="mt-8 broder-2 bgNew rounded-md font-medium text-test text-lg p-3"
      >
        <p class="">Total : {{ totalPrice }} €</p>
        <p class="">
          Frais de livraison : {{ totalPrice > 35 ? "Gratuit" : `${price} €` }}
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.test {
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.13) 0px 6px 6px;
}
</style>