<template>
  <div class="">
    <div class="track-heading">Finish</div>
    <div class="mt-20 flex flex-col justify-between items-center">
      <img src="~/static/icons/finish-icon.svg" alt="">
      <div class="mt-10 font-semibold text-3xl text-center mx-auto">
        Congratulations!<br>
        you have successfully made the product with Ideeza
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    middleware: "auth",
    name: "finish",

    mounted() {
      this.$store.commit('trackstepper/set', {position: 3})
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
