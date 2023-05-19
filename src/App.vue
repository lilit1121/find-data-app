
<template>
  <TheHeader />
  <div class="bg-[url('@/assets/images/bg-image.jpg')] w-full absolute top-0 left-0 z-0 bg-cover bg-no-repeat h-330"></div>
  <div class="mt-238">  
    <router-view ></router-view>
  </div>
  <TheFooter />
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<style scoped>
</style>
