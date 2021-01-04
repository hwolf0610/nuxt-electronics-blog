<template>
  <div>
    <h1 class="text-2xl border-b-4 border-solid border-ideeza pb-5 mt-8">Manage Categories</h1>

    <div class="flex flex-wrap mt-10 text-xl sub-menu">
      <nuxt-link class="mr-10" to="/technician/management/categories/electronics">Electronics</nuxt-link>
      <nuxt-link class="mr-10" to="/technician/management/categories/code">Code</nuxt-link>
      <nuxt-link class="mr-10" to="/technician/management/categories/cover">Cover</nuxt-link>
      <nuxt-link class="mr-10" to="/technician/management/categories/app">App</nuxt-link>
      <nuxt-link class="mr-10" to="/technician/management/categories/network">Network</nuxt-link>
      <nuxt-link class="mr-10" to="/technician/management/categories/blog">Blog</nuxt-link>
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
