<template>
  <div class="email-support-container mx-auto my-32">

    <div class="hidden lg:block stepper-bar bg-gray-200 relative mx-auto mb-20">
      <div class="stepper-bar-overlay bg-ideeza-dark" :style="`width: ${overlayWidth}%` "></div>
      <div class="absolute top-0 left-0 h-full w-full z-50 flex justify-between">

        <!--1-->
        <div class="stepper-icon-wrapper relative" :class="{'active': step >= 0}">
          <span v-if="step!==3" class="absolute-center-h-v" >1</span>
          <font-awesome-icon v-if="step===3" class="w-8 h-8 text-xl absolute-center-h-v" :icon="['fas', 'check']"/>
          <div class="stepper-text stepper-text--ask" :class="{'active': step >=0 }">Ask</div>
        </div>
        <!--2-->
        <div class="stepper-icon-wrapper relative" :class="{'active': step >= 1}">
          <span v-if="step!==3" class="absolute-center-h-v" >2</span>
          <font-awesome-icon v-if="step===3" class="w-8 h-8 text-xl absolute-center-h-v" :icon="['fas', 'check']"/>
          <div class="stepper-text stepper-text--review" :class="{'active': step >= 1}">Review</div>
        </div>
        <!--3-->
        <div class="stepper-icon-wrapper relative" :class="{'active': step >= 2 }">
          <span v-if="step!==3" class="absolute-center-h-v" >3</span>
          <font-awesome-icon v-if="step===3" class="w-8 h-8 text-xl absolute-center-h-v" :icon="['fas', 'check']"/>
          <div class="stepper-text stepper-text--complete" :class="{'active': step >= 2 }">Complete</div>
        </div>


      </div>
    </div>

    <div v-if="step === 0" class="shadow-md w-full p-2 lg:p-10 bg-white">
      <h1 class="text-4xl font-semibold">How can we help?</h1>
      <p class="py-5">
        We're committed to finding the answers you need as quickly as possible.
        Please tell us a little about what you need help with.
      </p>
      <TextAreaField :rows="10" placeholder="Type your question or a description of the problem you’re trying to
resolve here (minimum of 10 characters)..." />

      <div class="mt-10 text-center">
        <button @click="step=1" class="btn pill-button px-16 py-1">continue</button>
      </div>
    </div>

    <div v-if="step === 1" class="shadow-md w-full p-2 lg:p-10 bg-white">
      <h1 class="text-4xl font-semibold mb-2">Select your question category</h1>

     <DropDownField />

      <div class="mt-10 text-center">
        <button @click="step=2" class="btn pill-button px-16 py-1">continue</button>
      </div>
    </div>

    <div v-if="step === 2" class="shadow-md w-full p-2 lg:p-10 bg-white">
      <h1 class="text-4xl font-semibold mb-2">Subject</h1>
      <TextField />

      <h1 class="text-4xl font-semibold mb-2">Attachment</h1>
      <FileField />

      <div class="mt-10 text-center flex justify-between">
        <button @click="step=1" class="btn pill-button px-16 py-1">Back</button>
        <button @click="step=3" class="btn pill-button pill-button--ideeza px-16 py-1">Send</button>
      </div>
    </div>

    <div v-if="step === 3" class="thankyou-email shadow-md w-full p-2 lg:p-10 bg-white flex flex-col justify-end">
      <h1 class="text-2xl lg:text-3xl font-semibold text-center">Your email is sent!</h1>
      <p class="text-center text-xl block mt-3 mb-10 lg:mb-16">
        We will be in touch as soon as possible.
      </p>
    </div>

  </div>
</template>

<script>
  import TextAreaField from "~/components/form/text-area.vue"
  import DropDownField from "~/components/form/dropdown-field.vue"
  import TextField from "~/components/form/text-field.vue"
  import FileField from "~/components/form/file-field.vue"
    export default {
        name: "email",
      components: {
        TextAreaField,
        DropDownField,
        TextField,
        FileField
      },
      data: function () {
        return {
          step: 0
        }
      },
      computed: {
        overlayWidth () {
          if(this.step === 0)
            return 0;
          else if(this.step === 1)
            return 50;
          else if(this.step === 2)
            return 99;
          else if(this.step === 3)
            return 99;
        }
      }
    }
</script>

<style scoped>
  .email-support-container{
    width: 100%;
    max-width: 950px;
  }
  .stepper-bar{
    width: 450px;
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
    margin-left: 10px;
  }
  .stepper-text--review{
    margin-left: -2px;
  }
  .stepper-text--complete{
    margin-left: -12px;
  }

  @screen lg{
    .thankyou-email{
      height: 500px;
    }
  }
</style>
