<template>
  <div>
    <nav-bar />
    <router-view class="md:mt-8" />
    <footer-comp />
  </div>
</template>

<script setup>
import NavBar from "../components/NavBar.vue";
import footerComp from "../components/FooterComp.vue";
</script>

<style lang="scss" scoped>

</style>
