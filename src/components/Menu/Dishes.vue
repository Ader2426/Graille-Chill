div<script setup>
import { inject, ref, computed, provide } from "vue";
import BiggerDisheDisplay from "./BiggerDisheDisplay.vue";
import ShoppinCart from "../ShoppingCart/ShoppinCart.vue";
import Dishe from "./Dishe.vue";

const plateList = inject("plateList");

const selectedPlate = ref();

const filteredPlateList = ref([...plateList.value]);

const shoppingList = ref([]);

const currentIndex = ref();

provide("shoppingList", shoppingList);

const comment = ref("");

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
  currentIndex.value = plateList.value.indexOf(plate);
  console.log(currentIndex.value);
};

const goToNextPlate = () => {
  if (currentIndex.value === plateList.value.length - 1) {
    currentIndex.value = 0;
  } else {
    currentIndex.value++;
  }
  selectedPlate.value = plateList.value[currentIndex.value];
};

const goToPreviousPlate = () => {
  if (currentIndex.value === 0) {
    currentIndex.value = plateList.value.length - 1;
  } else {
    currentIndex.value--;
  }
  selectedPlate.value = plateList.value[currentIndex.value];
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

const totalPrice = computed(() => {
  return shoppingList.value.reduce((total, item) => {
    return total + item.quantity * item.prix;
  }, 0);
});

const totalDisheQuantity = computed(() => {
  return shoppingList.value.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
});
</script>
<template>
  <ShoppinCart
    :shoppingList="shoppingList"
    :addToCart="addToCart"
    :removeFromCart="removeFromCart"
    :plate="plate"
    :totalPrice="totalPrice"
    :totalDisheQuantity="totalDisheQuantity"
  />

  <div class="flex justify-center m-12 p-2 col-span-4">
    <button
      class="border-4 border-orange-700 py-1 px-4 rounded-md mx-2 text-lg myBtn hover:bg-orange-600 hover:text-white hover:border-white"
      @click="filterMenu('all')"
    >
      All
    </button>
    <button
      class="btn primary text-white mx-2"
      @click="filterMenu('végétarien')"
    >
      Vegetarien
    </button>
    <button class="btn primary mx-2" @click="filterMenu('poisson')">
      Poisson
    </button>
    <button
      class="btn primary mx-2 menuBtn text-white"
      @click="filterMenu('vegan')"
    >
      Vegan
    </button>
    <button class="btn primary mx-2 button-81" @click="filterMenu('viande')">
      Viande
    </button>
    <button class="btn primary mx-2" @click="filterMenu('boisson')">
      Boisson
    </button>
  </div>
  <div class="grid grid-cols-3 justify-items-center m-4 h-screen w-[85%]">
    <Dishe
      v-for="plate in filteredPlateList"
      :key="plate.id"
      :plate="plate"
      :addToCart="addToCart"
      :showPlate="showPlate"
      :shoppingList="shoppingList"
      :removeFromCart="removeFromCart"
      :quantity="
        shoppingList.find((item) => item.id === plate.id)?.quantity || 0
      "
    />
  </div>

  <BiggerDisheDisplay
    :addToCart="addToCart"
    :exitFunction="exitDisheDisplay"
    :plate="selectedPlate"
    :currentIndex="currentIndex"
    :next="goToNextPlate"
    :prev="goToPreviousPlate"
    v-if="selectedPlate"
  />
</template>




