<template>
  <div >

      <CoverEngine />

  </div>
</template>

<script>
  import CoverEngine from '~/components/user/pro/cover-engine.vue'
    export default {
        name: "pro-cover",

      data() {
        return {

        }
      },
      components: {
        CoverEngine
      },

      methods: {

      }
    }
</script>

<style scoped>
  .engine-container{
    @apply relative bg-gray-200;
  }
  .stepper-bar{
    margin-top: 100px;
    width: 300px;
    height: 15px;
  }
  .stepper-bar-overlay{
    @apply rounded-r-lg;
    transition: all 0.3s ease-in;
    height: 100%;
    width: 97%;
    margin-left: 2px;
  }
  .stepper-icon-wrapper{
    @apply rounded-full bg-gray-200 font-semibold;
    width: 50px;
    height: 50px;
    margin-top: -20px;
    transition: all 0.3s ease-in;
  }

  .stepper-icon-wrapper.active{
    @apply bg-ideeza-dark;
  }
  .stepper-icon-wrapper.active {
    @apply text-white;
  }
  .stepper-text{
    @apply absolute font-semibold text-gray-600;
    margin-top: 60px;
  }
  .stepper-text--ask{
    margin-left: -15px;
    width: 70px;
  }
  .stepper-text--review{
    margin-left: 0px;
  }


</style>
