<script>
import CheckPostCode from "./CheckPostCode.vue";
export default {
  data() {
    return {
      selectedHoraire: "",
      horaires: [],
      selectedDate: null,
      minDate: null,
    };
  },
  mounted() {
    for (let h = 7; h <= 22; h++) {
      for (let m = 0; m < 60; m += 30) {
        this.horaires.push(
          `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`
        );
      }
    }
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    this.minDate = `${year}-${month}-${day}`;
  },
  methods: {
    formatDate(dateString) {
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const date = new Date(dateString);
      return date.toLocaleDateString("fr-FR", options);
    },
  },
  components: { CheckPostCode },
};
</script>
<style></style>

<template>
  <div class="flex-col justify-center items-center w-[95vw] mx-auto">
    <header class="flex items-center h-[450px]">
      <p class="text-xl font-bold w-1/2 ml-5 min-w-32">
        Nous vous livrons dans
        <span class="text-orange-400 underline underline-offset-4"
          >Tout Charleroi</span
        >
        et ce même en dehors des heures de bureau !
      </p>
      <section class="w-1/2 flex-col flex justify-center items-center">
        <img
          src="../Assets/Img/scooterguy.png"
          alt="scooterguy"
          class="mt-20 w-80 h-2/3 min-w-80 min-h-60"
        />
      </section>
    </header>
    <div class="pt-10">
      <h1 class="text-center font-bold mt-3 text-3xl">
        Planifie ta livraison :
      </h1>
      <CheckPostCode />
      <div class="flex">
        <div class="w-1/2 pt-10">
          <div class="flex flex-col items-center justify-center">
            <label for="horaire" class="pb-4"
              >Choisissez une tranche horaire :</label
            >

            <select
              v-model="selectedHoraire"
              class="bg-orange-500 text-white border-black"
            >
              <option value="" disabled>Heure</option>
              <option
                v-for="horaire in horaires"
                :value="horaire"
                class="text-center"
              >
                {{ horaire }}
              </option>
            </select>
          </div>
        </div>
        <div class="w-1/2 pt-10">
          <div class="flex flex-col items-center justify-center">
            <label for="date" class="pb-4">Choisissez une date :</label>

            <input
              type="date"
              class="bg-orange-500 text-white border-black"
              v-model="selectedDate"
              :min="minDate"
            />
          </div>
        </div>
      </div>
      <div
        v-if="selectedDate && selectedHoraire"
        class="pt-10 flex flex-col justify-center items-center"
      >
        <p>
          Vous avez choisi le {{ formatDate(selectedDate) }} à
          {{ selectedHoraire }}
        </p>
      </div>
    </div>
  </div>
</template>
