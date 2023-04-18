<template>
  <div class="relative h-screen flex justify-center items-center">
    <div class="carousel-container">
      <div
        class="carousel-slide"
        :style="{ transform: 'translateX(' + translate + '%)' }"
      >
        <div
          v-for="(image, index) in carouselImages"
          :key="index"
          class="carousel-image"
        >
          <img :src="image.src" alt="Carousel Image" class="h-350" />
        </div>
      </div>
      <div
        class="carousel-buttons absolute bottom-0 left-1/2 transform -translate-x-1/2"
      >
        <button class="button-of-carousel" @click="prevSlide">
          &lt Précédent
        </button>
        <button class="button-of-carousel" @click="nextSlide">Suivant ></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselImages: [
        { src: "/Carousel/carousel4.png" },
        { src: "/Carousel/carousel1.png" },
        { src: "/Carousel/carousel2.png" },
        { src: "/Carousel/carousel3.png" },
        { src: "/Carousel/carousel7.png" },
        { src: "/Carousel/carousel8.png" },
      ],
      currentIndex: 0,
      translate: 0,
    };
  },
  methods: {
    prevSlide() {
      if (this.currentIndex === 0) {
        this.currentIndex = this.carouselImages.length - 1;
        this.translate = -100 * this.currentIndex - 50;
      } else {
        this.currentIndex--;
        this.translate += 100;
      }
    },
    nextSlide() {
      if (this.currentIndex === this.carouselImages.length - 1) {
        this.currentIndex = 0;
        this.translate = 0;
      } else {
        this.currentIndex++;
        this.translate -= 100;
      }
    },
  },
  mounted() {
    setInterval(() => {
      this.nextSlide();
    }, 3000);
  },
};
</script>

<style scoped>
.carousel-container {
  position: relative;
  height: 450px;
  min-width: 500px;
  overflow: hidden;
}

.carousel-slide {
  display: flex;
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

.carousel-image {
  flex: 1 0 100%;
}

.carousel-image img {
  width: auto;
  height: 350px;
  margin: auto;
}
</style>
