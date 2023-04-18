<script setup>
import Carousel from "./Carousel.vue";
</script>

<template>
  <div class="flex-col justify-center items-center w-[95vw] mx-auto">
    <header class="flex h-screen">
      <section class="w-1/2 ml-12 flex-col flex justify-center items-center">
        <img src="../Assets/Img/logo.png" alt="logo" class="mt-20" />
        <p class="text-xl">Ici la phrase d'accroche</p>
      </section>
      <section class="w-1/2 flex-col flex justify-center items-center">
        <img src="../Assets/Img/plateHome.png" alt="platepic" class="mt-20" />
      </section>
    </header>
    <div class="">
      <h1 class="text-center font-bold mt-3 text-3xl">
        Choisissez, commandez et on s'occupe du reste !
      </h1>
      <div class="flex justify-between items-center mt-12">
        <img src="../Assets/Img/chefHome2.jpeg" alt="chefcook" class="w-1/2" />

        <div>
          <p class="text-center px-12">
            Le chef prépare chaque plat avec le même soin et l'attention que
            pour lui-même. Les ingrédients les plus frais et les techniques
            culinaires les plus raffinées sont utilisés pour offrir une
            expérience gastronomique inoubliable à nos clients.
          </p>
        </div>
      </div>
    </div>
    <h2 class="text-center font-bold text-xl mt-32">Quelques photos...</h2>
    <Carousel />
    <div class="flex justify-between items-center mt-12"></div>
    <h2 class="text-center font-bold text-xl mt-32">
      Des choses marquantes sur l'entreprise.
    </h2>
    <div class="flex justify-between items-center mt-16">
      <article class="w-1/3 flex-1">
        <div class="flex flex-col justify-center items-center">
          <img src="../Assets/Img/local.png" alt="firstpic" class="h-24" />
          <p class="pt-2 text-l text-bold text-center w-52">
            Des matières premières en provenance de producteurs locaux dans un
            rayon de 30 km.
          </p>
        </div>
      </article>
      <article class="w-1/3 flex-1">
        <div class="flex flex-col justify-center items-center">
          <img src="../Assets/Img/power.png" alt="firstpic" class="h-24" />
          <p class="pt-2 text-l text-bold text-center w-52">
            Nos véhicules électriques sont rechargés dans nos entrepôts équipés
            de panneaux solaires.
          </p>
        </div>
      </article>
      <article class="w-1/3 flex-1">
        <div class="flex flex-col justify-center items-center">
          <img src="../Assets/Img/10yrs.png" alt="firstpic" class="h-24" />
          <p class="pt-2 text-l text-bold text-center w-52">
            Une expérience de 10 ans dans le milieu fait de nous un acteur
            important dans la restauration.
          </p>
        </div>
      </article>
    </div>
    <div class="mt-20 h-40 bg-orange-500 flex items-center justify-center">
      <button class="bg-white h-16 w-1/3">
        <a href="">Commandez ! </a>
      </button>
    </div>
  </div>
</template>

<style></style>
