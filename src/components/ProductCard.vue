<template>
  <div class="w-56 mx-2 shadow-xl card card-compact bg-base-100 flex-grow flex-shrink-1">
    <img :src="src" alt="Shoes" class="relative object-cover h-[100px]" />
    <div class="card-body !pb-0">
      <div class="flex justify-around flex-grow">
        <h1>{{ product.name || "Product Name" }}</h1>
      </div>
      <p>{{ product.desc || "Product Description" }}</p>
      <div class="justify-end card-actions"></div>
    </div>
    <button class="btn border-0 hover:border-0 bg-[#FF4141] hover:!bg-[#ff5c5c] w-full">
      <font-awesome-icon color="white " icon="fa-solid fa-cart-plus" />
    </button>
  </div>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps(["src", "product"]);
const src = ref(props.src);
const product = ref(props.product);
</script>
