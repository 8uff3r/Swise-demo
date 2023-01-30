<template>
  <main class="relative">
    <main-carousel class="max-w-6xl mx-auto 2xl:max-w-7xl sm:px-16 mb-0" />
    <p class="text-xl font-bold my-8 ml-4">Popular Products</p>
    <carousel :breakpoints="breakpoints" :settings="settings" class="pb-4 mx-auto mt-8 relative w-[90%] select-none">
      <slide v-for="(product, i) in products" :key="i">
        <product-card :product="product" v-if="products" :src="getImageUrl(`products/${product.img}`)" />
      </slide>
      <template #addons>
        <navigation class="mx-4 sm:block hidden" />
        <!-- <pagination /> -->
      </template>
    </carousel>
    <CollectionComp />
    <SectionComp />
    <TestimonialsComp />
  </main>
</template>
<script setup>
import axios from "redaxios";
import "vue3-carousel/dist/carousel.css";
import TestimonialsComp from "../components/TestimonialsComp.vue";
import SectionComp from "../components/SectionComp.vue";
import CollectionComp from "../components/CollectionComp.vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import MainCarousel from "../components/MainCarousel.vue";
import { ref } from "vue";
import ProductCard from "../components/ProductCard.vue";
const products = ref(null);


const getImageUrl = (name) => {
  return new URL(`../assets/${name}`, import.meta.url).href;
}
function productLoad() {
  axios
    .get(getImageUrl("mockData/products.json"))
    .then((res) => (products.value = res.data));
}
productLoad();

const settings = {
  snapAlign: "center",
  itemsToShow: 1.5,
  wrapAround: "true",
};
const breakpoints = {
  400: {
    itemsToShow: 2,
    snapAlign: "center",
  },
  500: {
    itemsToShow: 3,
    snapAlign: "center",
  },
  // 700px and up
  700: {
    itemsToShow: 3.5,
    snapAlign: "center",
  },
  800: {
    itemsToShow: 4,
    snapAlign: "center",
  },
  // 1024 and up
  1024: {
    itemsToShow: 5,
    snapAlign: "start",
  },
  1200: {
    itemsToShow: 6,
    snapAlign: "start",
  },
  1600: {
    itemsToShow: 7,
    snapAlign: "start",
  },
  // 1920 and up
  1920: {
    itemsToShow: 8,
    snapAlign: "start",
  },
  2020: {
    itemsToShow: 9,
    snapAlign: "start",
  },
  2400: {
    itemsToShow: 10,
    snapAlign: "start",
  },
};
</script>
<style>
.carousel__viewport {
  width: 100%;
}
</style>
