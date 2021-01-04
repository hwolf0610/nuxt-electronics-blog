<template>
    <div>
        <div class="flex my-2">
        <nuxt-link to="/service-provider/settings/cost-of-service/electronics/fabrication" class="mr-8 font-semibold">
          Fabrication
        </nuxt-link >
        <nuxt-link to="/service-provider/settings/cost-of-service/electronics/assembly-service" class="font-semibold mr-8 text-ideeza-gray-700">
          Assembly Service
        </nuxt-link >
        <nuxt-link to="/service-provider/settings/cost-of-service/electronics/dealer" class="font-semibold text-ideeza-gray-700">
          Dealer
        </nuxt-link>
      </div>
      <hr class="mt-2 mb-5">
      <nuxt-child />
    </div>
</template>
<style scoped>
.active-link{
  @apply text-ideeza;
}
</style>
