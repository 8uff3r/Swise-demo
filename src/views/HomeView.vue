<template>
  <main class="relative">
    <main-carousel class="mx-auto mb-0 max-w-6xl sm:px-16 2xl:max-w-7xl" />
    <p class="my-8 ml-4 mt-96 text-xl font-bold">Popular Products</p>
    <carousel :breakpoints="breakpoints" :settings="settings" class="relative mx-auto mt-8 w-[90%] select-none pb-4">
      <slide v-for="(product, i) in products" :key="i">
        <product-card :product="product" v-if="products" :src="getImageUrl(`products/${product.img}`)" />
      </slide>
      <template #addons>
        <navigation class="mx-4 hidden sm:block" />
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
import { Carousel, Slide, Navigation } from "vue3-carousel";
import <script>
import MainCarousel from "../components/MainCarousel.vue";
import { ref } from "vue";
import ProductCard from "../components/ProductCard.vue";
const products = ref(null);

const getImageUrl = (name) => {
  return new URL(`../assets/${name}`, import.meta.url).href;
};
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
