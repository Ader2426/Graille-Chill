<template>
  <div class="flex items-center flex-col mt-10">
    <h1 class="text-center font-bold mt-3 text-3xl">Contactez nous :</h1>
    <form class="mt-10" @submit.prevent="submitForm">
      <div class="flex">
        <div class="w-1/2 mr-7">
          <label for="nom">Votre nom:*</label>
          <br />
          <input type="text" v-model="nom" class="border-input" required />
        </div>
        <div>
          <label for="prenom">Votre prénom:*</label>
          <br />
          <input type="text" v-model="prenom" class="border-input" required />
        </div>
      </div>

      <div class="pt-2">
        <label for="email">Votre adresse mail*</label> <br />
        <input type="email" v-model="email" class="border-input" required />
      </div>
      <div class="pt-2">
        <label for="telephone"
          >Votre numéro de téléphone fixe ou mobile :*</label
        >
        <br />
        <input type="tel" v-model="telephone" class="border-input" required />
      </div>
      <div class="pt-2">
        <label for="message">Message :*</label>
        <div class="relative">
          <textarea
            name="message"
            id="message"
            v-model="message"
            class="text-area-default"
            :maxlength="maxMessageLength"
            required
          >
          </textarea>
          <span class="text-xs absolute bottom-2 right-1"
            >{{ message.length }} / {{ maxMessageLength }}</span
          >
        </div>
        <div class="flex justify-center">
          <button type="submit" class="button-style-default">Envoyer</button>
        </div>
        <h2 class="text-center font-bold text-xl mt-10">Ou</h2>
        <div class="flex justify-between">
          <div class="flex flex-col items-center justify-center mt-8 w-40">
            <a href="mailto:GrailleAndChill@food.be"
              ><img
                src="../Assets/Img/emaillogo.png"
                alt="emaillogo"
                class="h-20 w-20"
            /></a>
            <p class="text-sm pt-2">
              <a href="mailto:GrailleAndChill@food.be"
                >GrailleAndChill@food.be</a
              >
            </p>
          </div>
          <div class="flex flex-col items-center justify-center mt-8 w-40">
            <a href="tel:+33711223344"
              ><img
                src="../Assets/Img/phone.png"
                alt="phonelogo"
                class="h-20 w-20"
            /></a>
            <p class="text-sm pt-2">
              <a href="tel:+33711223344">0400/00-00-00</a>
            </p>
          </div>
          <div class="flex flex-col items-center justify-center mt-8 w-40">
            <a href="https://www.facebook.com/"
              ><img
                src="../Assets/Img/facebooklogo.png"
                alt="facebooklogo"
                class="h-20 w-20"
            /></a>
            <p class="text-sm pt-2">
              <a href="https://www.facebook.com/">GrailleAndChill</a>
            </p>
          </div>
        </div>
      </div>
    </form>

    <!-- <p>{{ nom }}</p>
    <p>{{ prenom }}</p>
    <p>{{ telephone }}</p>
    <p>{{ email }}</p>
    <p>{{ message }}</p> -->
    <p v-if="messageError">{{ messageError }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nom: "",
      prenom: "",
      telephone: "",
      email: "",
      message: "",
      messageError: "",
      maxMessageLength: 250, // maximum length for the message
    };
  },

  computed: {
    // calculate the remaining characters in the message
    remainingChars() {
      return this.maxMessageLength - this.message.length;
    },
  },

  methods: {
    submitForm() {
      if (
        this.nom &&
        this.prenom &&
        this.telephone &&
        this.email &&
        this.message
      ) {
        const emailAdress = `mailto:GrailleAndChill@food.be?subject=Formulaire de contact&body=Nom: ${this.nom}%0D%0APrénom: ${this.prenom}%0D%0ANuméro de téléphone: ${this.telephone}%0D%0AEmail: ${this.email}%0D%0AMessage: ${this.message}`;
        window.location.href = emailAdress;
      } else {
        this.messageError =
          "Les champs ne sont pas tous remplis, il faut qu'ils le soient avant de pouvoir envoyer le formulaire.";
      }
    },
  },
};
</script>
<style></style>
