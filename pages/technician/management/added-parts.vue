<template>
  <div>
    <h1 class="text-2xl border-b-4 border-solid border-ideeza pb-5 mt-8">Manage Electronics, Code & Cover Parts</h1>

    <div class="flex mt-10 text-xl sub-menu">
      <nuxt-link class="mr-10" to="/technician/management/added-parts/electronics">Added Electronics</nuxt-link>
      <nuxt-link class="mr-10" to="/technician/management/added-parts/code">Added Code</nuxt-link>
      <nuxt-link class="mr-10" to="/technician/management/added-parts/cover">Added Cover</nuxt-link>
    </div>

    <nuxt-child></nuxt-child>

  </div>
</template>

<script>

    export default {
        name: "user-service-providers",

    }
</script>

<style scoped>
  .active-link{
    @apply text-ideeza;
  }
</style>
