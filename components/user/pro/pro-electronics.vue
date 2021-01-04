<template>
  <div >

    <!--Stepper-->
    <div class="hidden lg:block stepper-bar bg-gray-200 relative mx-auto mb-20">
      <div class="stepper-bar-overlay bg-ideeza-dark" :style="`width: ${overlayWidth}%` "></div>
      <div class="absolute top-0 left-0 h-full w-full z-50 flex justify-between">

        <!--1-->
        <div class="stepper-icon-wrapper relative" :class="{'active': step >= 0}">
          <span class="absolute-center-h-v" >1</span>
          <div class="stepper-text stepper-text--ask" :class="{'active': step >=0 }">Schematic</div>
        </div>
        <!--2-->
        <div class="stepper-icon-wrapper relative" :class="{'active': step >= 1}">
          <span  class="absolute-center-h-v" >2</span>
          <div class="stepper-text stepper-text--review" :class="{'active': step >= 1}">Design</div>
        </div>

      </div>
    </div>

      <div v-if="step === 0" class="engine-container schematic">
        <SchematicEngine />
      </div>

    <div v-if="step === 1" class="engine-container design">
      <DesignEngine />
    </div>

    <!--Bot Buttons-->
    <div class="mt-10 w-full flex items-center" :class="{'justify-end': step === 0, 'justify-between': step === 1}">
      <button v-if="step > 0 " @click="step=0" class="self-start btn pill-button px-16 py-0">Back</button>
      <button v-if="step === 0" @click="step=1" class="self-end btn pill-button pill-button--ideeza px-16 py-0">Next</button>
    </div>


  </div>
</template>

<script>
  import SchematicEngine from '~/components/user/pro/schematic-engine.vue'
  import DesignEngine from '~/components/user/pro/design-engine.vue'
    export default {
        name: "pro-electronics",

      data() {
        return {
          step: 0,

        }
      },
      components: {
        SchematicEngine,
        DesignEngine
      },
      computed: {
        overlayWidth () {
          if(this.step === 0)
            return 0;
          else {
            return 99;
          }
        },
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
