

<script setup>
</script>

<template>
  <header>
    <nav class="flex justify-center h-24 items-center lato text-lg">
      <ul class="flex justify-around w-[50%]">
        <router-link to="/">Accueil</router-link>
        <router-link to="/menu">Menu</router-link>
        <router-link to="/livraison">Livraison</router-link>
        <router-link to="/contact">Contact</router-link>
      </ul>
      <div class="">
        <button class="bg-orange-700 p-2 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 fill-white stroke-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </button>
      </div>
    </nav>
  </header>
  <RouterView />
</template>