<template>
    <div class="md:m-8 lg:m-8 my-2">
      <div class="flex">
        <div class="mr-4">
          <nuxt-link to="/service-provider/settings/cost-of-service/electronics" class="px-5 border border-gray-300 md:px-20 py-2 font-semibold">
             <img src="~/static/images/light-bolt.png" class="inline"> Electronics</nuxt-link>
        </div>
        <div>
          <nuxt-link to="/service-provider/settings/cost-of-service/cover" class="px-5 border border-gray-300 md:px-20 py-2 bg-white font-semibold">
           <img src="~/static/images/face.png" class="inline">
            Cover</nuxt-link>
        </div>
      </div>
      <nuxt-child class="xl:max-w-5xl mt-5"/>


    </div>
</template>
<script>
export default {
  layout:'service-provider-setting'
}
</script>
<style scoped>
.field-input select {
  max-width: 100%;
  min-width: 100%;
}
</style>
