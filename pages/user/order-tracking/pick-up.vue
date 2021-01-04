<template>
  <div class="">
    <div class="track-heading">Pick up your order</div>
    <div class="mt-20 flex flex-col justify-between items-center">
      <div class="circle"></div>
      <div class="mt-10 message font-semibold text-3xl text-center mx-auto">
        Order is delivered. We are waiting for you
        to pick up the product
      </div>
      
    </div>
  </div>
</template>

<script>
  export default {
    middleware: "auth",
    name: "pick-up",

    mounted() {
      this.$store.commit('trackstepper/set', {position: 2})
    }
  }
</script>

<style scoped>
  .track-heading{
    @apply text-2xl font-semibold relative;
    width: fit-content;
  }
  .track-heading:before{
    @apply border-b-4 border-solid border-ideeza left-0;
    content: "";
    position: absolute;
    width: 80px;
    bottom: -10px;
  }
  .circle{
    @apply border-4 rounded-full border-dashed border-ideeza;
    width: 130px;
    height: 130px;
  }
  .message{
    width: 100%;
    max-width: 720px;
  }
</style>
