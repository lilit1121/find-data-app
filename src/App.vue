
<template>
  <TheHeader />
  <div style="height: 330px">
    <img
      class="w-full absolute top-0 left-0 z-0"
      src="@/assets/images/bg-image.jpg"
      alt="background"
    />
  </div>
  <router-view></router-view>
  <TheFooter />
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<style scoped>
</style>
