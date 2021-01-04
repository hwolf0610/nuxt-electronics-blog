<template>
  <div class="search-container flex w-fit-content justify-center items-center content-center" :class="bg">
    <div class="h-6 relative w-6">
      <font-awesome-icon class="ml-1 h-3 text-gray-400 absolute-center-h-v" :icon="['fas', 'search']"/>
    </div>
    <input :placeholder="placeholder" class="outline-none h-6 text-gray-800 pr-3 text-xs" :class="bg">
  </div>
</template>

<script>
    export default {
        name: "search",
      props: ['placeholder', 'bg']
    }
</script>

<style scoped>
  .search-container{
    height: fit-content;
  }
</style>
