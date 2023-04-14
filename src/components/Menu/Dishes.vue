<script setup>
import { inject, ref, computed } from "vue";
import BiggerDisheDisplay from "./BiggerDisheDisplay.vue";
import ShoppinCart from "../ShoppingCart/ShoppinCart.vue";
import Dishe from "./Dishe.vue";

const plateList = inject("plateList");

const selectedPlate = ref();

const filteredPlateList = ref([...plateList.value]);

const shoppingList = ref([]);

const addToCart = (plate) => {
  const index = shoppingList.value.findIndex((item) => item.id === plate.id);
  if (index !== -1) {
    shoppingList.value[index].quantity += 1;
  } else {
    shoppingList.value.push({ ...plate, quantity: 1 });
  }
};

const removeFromCart = (plate) => {
  const index = shoppingList.value.findIndex((item) => item.id === plate.id);
  if (index !== -1) {
    if (shoppingList.value[index].quantity > 1) {
      shoppingList.value[index].quantity -= 1;
    } else {
      shoppingList.value.splice(index, 1);
    }
  }
};

const showPlate = (plate) => {
  selectedPlate.value = plate;
  console.log(selectedPlate.value);
};

const exitDisheDisplay = () => {
  selectedPlate.value = "";
};

const init = () => {
  setTimeout(function () {
    console.log("ok");
    filteredPlateList.value = [...plateList.value];
  }, 40);
};
init();

const filterMenu = (categorie) => {
  if (categorie === "all") {
    filteredPlateList.value = [...plateList.value];
  } else {
    const filtredItem = plateList.value.filter(
      (item) => item.categorie === categorie
    );
    if (filtredItem.length === 0) {
      filteredPlateList.value = plateList.value;
    } else {
      filteredPlateList.value = filtredItem;
    }
  }
};
</script>
<template>
  <ShoppinCart
    :shoppinList="shoppingList"
    :addToCart="addToCart"
    :removeFromCart="removeFromCart"
    :plate="plate"
  />
  <div class="flex justify-center m-2 p-2 col-span-4">
    <button class="btn primary mx-2" @click="filterMenu('all')">All</button>
    <button class="btn primary mx-2" @click="filterMenu('végétarien')">
      Vegetarien
    </button>
    <button class="btn primary mx-2" @click="filterMenu('poisson')">
      Poisson
    </button>
    <button class="btn primary mx-2" @click="filterMenu('vegan')">Vegan</button>
    <button class="btn primary mx-2" @click="filterMenu('viande')">
      Viande
    </button>
    <button class="btn primary mx-2" @click="filterMenu('boisson')">
      Boisson
    </button>
  </div>
  <Dishe
    v-for="plate in filteredPlateList"
    :key="plate.id"
    :plate="plate"
    :addToCart="addToCart"
    :showPlate="showPlate"
    :shoppingList="shoppingList"
    :removeFromCart="removeFromCart"
    :quantity="shoppingList.find((item) => item.id === plate.id)?.quantity || 0"
  />

  <BiggerDisheDisplay
    :addToCart="addToCart"
    :exitFunction="exitDisheDisplay"
    :plate="selectedPlate"
    v-if="selectedPlate"
  />
</template>