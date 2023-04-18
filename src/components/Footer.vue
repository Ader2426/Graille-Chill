<template>
  <div class="flex flex-row pt-20 w-[90%] mx-auto">
    <div class="w-[200px] min-w-[200px]">
      <img class="w-3/4" src="../Assets/Img/logo.png" alt="" />
    </div>
    <div class="w-1/3 items-center flex flex-col">
      <h2 class="footerListTitle">Notre société</h2>
      <nav class="pt-2 flex flex-col">
        <router-link to="" class="footerListItem">À propos</router-link>
        <router-link to="" class="footerListItem">Gallerie</router-link>
      </nav>
    </div>
    <div class="line"></div>

    <div class="w-1/3 flex items-center flex-col">
      <h2 class="footerListTitle">Services</h2>
      <nav class="pt-2 flex flex-col">
        <router-link to="" class="footerListItem">Passer commande</router-link>
        <router-link to="" class="footerListItem"
          >Choix de livraison</router-link
        >
        <router-link to="" class="footerListItem"
          >Choix de paiement</router-link
        >
      </nav>
    </div>
    <div class="line"></div>
    <div class="w-1/3 flex items-center flex-col">
      <h2 class="footerListTitle">Autres</h2>
      <nav class="pt-2 flex flex-col">
        <router-link to="" class="footerListItem">C.G.V</router-link>
        <router-link to="" class="footerListItem">Contact</router-link>
        <router-link to="" class="footerListItem">Nos réseaux</router-link>
      </nav>
    </div>
  </div>
</template>
<script></script>
<style>
.line {
  border-right: #e94e1b 2px solid;
  height: 50px;
  margin: auto;
}
</style>
