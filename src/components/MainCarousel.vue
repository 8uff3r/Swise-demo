<template>
  <div>
    <Carousel class="max-w-full carousel max-h-48 sm:max-h-96">
      <Slide id="item1" class="object-top carousel-item" v-for="i in 4" :key="i">
        <img :src="getImageUrl(`banners/${i}.jpg`)" class="w-full carousel__item" />
      </Slide>
    </Carousel>
  </div>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const getImageUrl = (name) => {
  return new URL(`../assets/${name}`, import.meta.url).href;
}
</script>

<style lang="scss" scoped>

</style>
