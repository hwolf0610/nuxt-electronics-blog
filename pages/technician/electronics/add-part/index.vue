<template>
  <div>
    <div class="email-support-container mx-auto mt-16">
      <div class="block stepper-bar bg-gray-200 relative mx-auto mb-20">
        <div class="stepper-bar-overlay bg-ideeza-dark" :style="`width: ${overlayWidth}%` "></div>
        <div class="absolute top-0 left-0 h-full w-full z-50 flex justify-between">

          <!--1-->
          <div class="stepper-icon-wrapper relative" :class="{'active': step >= 0}">
            <span class="absolute-center-h-v">1</span>
            <div class="stepper-text stepper-text--ask" :class="{'active': step >=0 }">Add Part</div>
          </div>
          <!--2-->
          <div class="stepper-icon-wrapper relative" :class="{'active': step >= 1}">
            <span class="absolute-center-h-v">2</span>
            <div class="stepper-text stepper-text--review" :class="{'active': step >= 1}">Configure</div>
          </div>
          <!--3-->
          <div class="stepper-icon-wrapper relative" :class="{'active': step >= 2 }">
            <span class="absolute-center-h-v">3</span>
            <div class="stepper-text stepper-text--complete" :class="{'active': step >= 2 }">Electronics</div>
          </div>
          <!--4-->
          <div class="stepper-icon-wrapper relative" :class="{'active': step >= 3 }">
            <span class="absolute-center-h-v">4</span>
            <div class="stepper-text stepper-text--code" :class="{'active': step >= 3 }">General</div>
          </div>



        </div>
        <!--2-->
        <div class="stepper-icon-wrapper relative" :class="{'active': step >= 1}">
          <span class="absolute-center-h-v">2</span>
          <div class="stepper-text stepper-text--review" :class="{'active': step >= 1}">Configure</div>
        </div>
        <!--3-->
        <div class="stepper-icon-wrapper relative" :class="{'active': step >= 2 }">
          <span class="absolute-center-h-v">3</span>
          <div class="stepper-text stepper-text--complete" :class="{'active': step >= 2 }">Electronics</div>
        </div>
        <!--4-->
        <div class="stepper-icon-wrapper relative" :class="{'active': step >= 3 }">
          <span class="absolute-center-h-v">4</span>
          <div class="stepper-text stepper-text--code" :class="{'active': step >= 3 }">General</div>
        </div>
      </div>

      <AddPartSearch @select="addPartSelect=true" class="mt-10"
        v-if="step === 0 && !addPartSelect && !addPartSelectType" />
      <AddPart @onSelectType="addPartSelectType=true" @close="addPartSelect=false" class="mt-10"
        v-if="step === 0 && addPartSelect && !addPartSelectType" />
      <AddSelectPart @selectType="next" class="mt-10" v-if="step === 0 && addPartSelectType" />
      <AddConfigure @back="step=0" @next="step = 2" class="mt-32" v-if="step === 1" />
      <AddElectronics @back="step=1" @next="step = 3" class="mt-32" v-if="step === 2" />

      <AddGeneral @back="step=2" @next="step = 4" class="mt-32" v-if="step === 3" />
      <general-review class="mt-32" v-if="step === 4" />
      <AddFinish class="mt-32" v-if="step === 5" />

      <!--Bot Buttons-->
      <div v-if="step === 0 || (step >= 3 && step !== 5)" class="mt-10 w-full flex">

        <div class="w-1/2 text-left">
          <button v-if="step > 0" @click="onBack" class="btn pill-button px-16 py-0">Back</button>
        </div>

        <div class="w-1/2 text-right">
          <button v-if="step <= 3" @click="onNext" class="btn pill-button px-16 py-0">Next</button>
          <button v-if="step === 4" @click="next" class="btn pill-button pill-button--ideeza px-16 py-1">Finish</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import TextField from "~/components/form/text-field.vue";
  import TextArea from "~/components/form/text-area.vue";
  import DropDownField from "~/components/form/dropdown-field.vue";
  import AddPartSearch from "~/components/technician/electronics/add-part/add-part-search.vue";
  import AddPart from "~/components/technician/electronics/add-part/add-part.vue";
  import AddSelectPart from "~/components/technician/electronics/add-part/addSelectType.vue";
  import AddConfigure from "~/components/technician/electronics/add-part/add-configure.vue";
  import AddElectronics from "~/components/technician/electronics/add-part/add-electronics.vue";
  import AddCode from "~/components/technician/electronics/add-part/add-code.vue";
  import AddGeneral from "~/components/technician/electronics/add-part/add-general.vue";
  import GeneralReview from "~/components/technician/electronics/add-part/general-review.vue";
  import AddFinish from "~/components/technician/electronics/add-part/add-finish.vue";
  export default {
    name: "index",
    data: function () {
      return {
        activeDrawer: null,
        step: 0,
        addPartSearch: null,
        addPartSelect: false,
        addPartSelectType: false
      };
    },
    components: {
      TextField,
      TextArea,
      DropDownField,
      AddPartSearch,
      AddPart,
      AddSelectPart,
      AddConfigure,
      AddElectronics,
      AddCode,
      AddGeneral,
      "general-review": GeneralReview,
      AddFinish
    },
    computed: {
      overlayWidth() {
        if (this.step < 4) return this.step * 33;
        else {
          return 99;
        }
      }
    },
    methods: {
      onBack() {
        if (this.step > 0) this.step -= 1;
      },
      onNext() {
        alert(this.step);
        // if (this.step < 6) this.step += 1;
      }
    }
  };

</script>

<style scoped>
  .components-container {
    height: 400px;
  }

  .email-support-container {
    width: 100%;
    max-width: 1100px;
  }

  .stepper-bar {
    max-width: 600px;
    width: 95vw;
    height: 15px;
  }

  .stepper-bar-overlay {
    @apply rounded-r-lg;
    transition: all 0.3s ease-in;
    height: 100%;
    width: 97%;
    margin-left: 2px;
  }

  .stepper-icon-wrapper {
    @apply rounded-full bg-gray-200 font-semibold;
    width: 50px;
    height: 50px;
    margin-top: -20px;
    transition: all 0.3s ease-in;
  }

  .stepper-icon-wrapper.active {
    @apply bg-ideeza-dark;
  }

  .stepper-icon-wrapper.active {
    @apply text-white;
  }

  .stepper-text {
    @apply absolute font-semibold text-gray-600;
    margin-top: 60px;
  }

  .stepper-text--ask {
    margin-left: -7px;
    width: 70px;
  }

  .stepper-text--review {
    margin-left: -11px;
  }

  .stepper-text--complete {
    margin-left: -13px;
  }

  .stepper-text--code {
    margin-left: 6px;
  }

  .stepper-text--general {
    margin-left: -3px;
  }

  .handle {
    @apply bg-white shadow-md px-6 py-4 rounded-l-lg cursor-pointer;
    height: fit-content;
    margin-left: -86px;
  }

  .handle-margin {
    margin-top: -50px;
  }

  .handle-margin-2 {
    margin-top: 50px;
  }

  .right-drawer {
    @apply bg-white rounded-bl-lg;
    width: 450px;
    margin-right: -450px;
  }

  .right-drawer--cart {
    width: 650px;
    margin-right: -650px;
    z-index: 100;
  }

  .right-drawer--link {
    z-index: 99;
  }

  .right-drawer--options {
    z-index: 98;
  }

  .right-drawer.active {
    margin-right: 0px;
  }

  .choice-on-code {
    height: 250px;
  }

  .handle-contents {
    @apply bg-white p-4 rounded-bl-lg;
    height: 300px;
    transition: all 0.3s ease-in;
  }

  .handle-contents--cart {}

  .button-bar {
    width: 100%;
    max-width: 950px;
  }

  td {
    @apply p-2 border-b border-solid border-gray-200;
  }

  @screen lg {
    .thankyou-email {
      height: 500px;
    }
  }

</style>
