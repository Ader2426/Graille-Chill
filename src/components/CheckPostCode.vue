<template>
  <div class="flex flex-col items-center">
    <label for="postalcode"
      >Vérifiez si la livraison est possible chez vous, entrez votre code
      postale (4 chiffres)</label
    >
    <input type="number" id="postalcode" v-model="postalcode" class="my-2" />
    <button
      @click="checkPostalCode"
      class="bg-orange-500 text-white px-4 py-2 rounded"
    >
      Vérifier
    </button>
    <p class="mt-2">{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postalcode: null,
      message: "",
      Villes: [
        { postcode: 6061, city: "Montignies-sur-Sambre" },
        { postcode: 6060, city: "Gilly" },
        { postcode: 6044, city: "Roux" },
        { postcode: 6043, city: "Ransart" },
        { postcode: 6042, city: "Lodelinsart" },
        { postcode: 6041, city: "Gosselies" },
        { postcode: 6040, city: "Jumet" },
        { postcode: 6032, city: "Mont-sur-Marchienne" },
        { postcode: 6031, city: "Monceau-sur-Sambre" },
        { postcode: 6030, city: "Goutroux" },
        { postcode: 6030, city: "Marchienne-au-Pont" },
        { postcode: 6020, city: "Dampremy" },
        { postcode: 6010, city: "Couillet" },
        { postcode: 6001, city: "Marcinelle" },
        { postcode: 6000, city: "Charleroi" },
      ],
    };
  },
  methods: {
    checkPostalCode() {
      if (!this.postalcode) {
        this.message = "Aucun code postal n'a été écrit.";
      } else if (this.postalcode.toString().length > 4) {
        this.message = "Le code postal doit comporter 4 chiffres maximum.";
      } else {
        const ville = this.Villes.find(
          (v) => v.postcode === Number(this.postalcode)
        );
        if (ville) {
          this.message = `La livraison à ${ville.city} est possible.`;
        } else {
          this.message =
            "Désolé, la livraison dans votre ville n'est pas possible car elle dépasse notre périmètre de livraison.";
        }
      }
    },
  },
};
</script>
