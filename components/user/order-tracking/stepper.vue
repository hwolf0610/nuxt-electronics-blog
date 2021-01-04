<template>
  <div class="py-10 mb-16 hidden md:block mx-auto">
    <div class="stepper-container mx-auto">
      <div class="stepper-bar bg-gray-500 relative mx-auto">
        <div class="stepper-bar-overlay bg-ideeza" :style="`width: ${overlayWidth}%` "></div>
        <div class="absolute top-0 left-0 h-full w-full z-50 flex justify-between">

          <!--1-->
          <div class="stepper-icon-wrapper relative active" :class="{'active': trackStep === 0, 'done': trackStep > 0}">
            <StepOne class="fill-current absolute-center-h-v" />
            <div class="stepper-text stepper-text--step1" >Making Product</div>
          </div>
          <!--2-->
          <div class="stepper-icon-wrapper relative" :class="{'active': trackStep === 1, 'done': trackStep > 1}">
            <StepTwo class="fill-current absolute-center-h-v" />
            <div class="stepper-text stepper-text--step2" >Delivery</div>
          </div>
          <!--3-->
          <div class="stepper-icon-wrapper relative" :class="{'active': trackStep === 2, 'done': trackStep > 2}">
            <StepThree class="fill-current absolute-center-h-v" />
            <div class="stepper-text stepper-text--step3" >Pick up</div>
          </div>
          <!--4-->
          <div class="stepper-icon-wrapper relative" :class="{'active': trackStep === 3}">
            <StepFour class="fill-current absolute-center-h-v" />
            <div class="stepper-text stepper-text--step4" >Finish</div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import StepOne from '~/components/partials/icons/track-icon-1.vue'
  import StepTwo from '~/components/partials/icons/track-truck-icon.vue'
  import StepThree from '~/components/partials/icons/box-icon.vue'
  import StepFour from '~/components/partials/icons/finish-icon.vue'
  export default {
    name: "cart-stepper",
    components: {
      StepOne,
      StepTwo,
      StepThree,
      StepFour
    },
    computed: {
      overlayWidth () {
        if(this.$store.state.trackstepper.trackStep <= 0)
          return 0;

        return this.$store.state.trackstepper.trackStep * 33;
      },
      trackStep () {
        return this.$store.state.trackstepper.trackStep;
      }
    }
  }
</script>

<style scoped>
  .stepper-container{
    width: 100%;
    max-width: 1000px;
  }
  .stepper-bar{
    width: 100%;
    max-width: 530px;
    height: 3px;
  }
  .stepper-bar-overlay{
    @apply rounded-r-lg;
    transition: all 0.3s ease-in;
    height: 100%;
    margin-left: 2px;
  }
  .stepper-icon-wrapper{
    @apply bg-gray-100 rounded-full border-solid border-gray-500;
    border-width: 3px;
    width: 70px;
    height: 70px;
    margin-top: -35px;
    transition: all 0.3s ease-in;
  }
  .stepper-icon-wrapper svg{
    @apply text-gray-500;
  }
  .stepper-icon-wrapper.active{
    @apply border-ideeza;
  }
  .stepper-icon-wrapper.active svg{
    @apply text-ideeza;
  }
  .stepper-icon-wrapper.done{
    @apply border-ideeza bg-ideeza;
  }
  .stepper-icon-wrapper.done svg{
    @apply text-white;
  }
  .stepper-text{
    @apply absolute font-semibold text-gray-500;
    margin-top: 70px;
  }
  .stepper-icon-wrapper.done .stepper-text,
  .stepper-icon-wrapper.active .stepper-text{
    @apply text-gray-800;
  }
  .stepper-icon-wrapper.done .stepper-text{
    @apply text-ideeza;
  }
  .stepper-text--step1{
    margin-left: -30px;
    width: 135px;
    text-align: center;
  }
  .stepper-text--step2{
    /*margin-left: 3px;*/
  }
  .stepper-text--step3{
    margin-left: 3px;
    width: 60px;
  }
  .stepper-text--step4{
    margin-left: 10px;
  }

  .stepper-text.active{
    @apply text-gray-800;
  }

  @screen lg{
    .stepper-bar{
      max-width: 720px;
    }
  }

  @screen xl{
    .stepper-bar{
      max-width: 945px;
    }
  }
</style>
