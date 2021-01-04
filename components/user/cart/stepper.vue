<template>
  <div class="py-10 mb-16 hidden lg:block">
    <div class="stepper-container mx-auto px-10">
      <div class="stepper-bar bg-gray-200 relative mx-auto">
        <div class="hidden stepper-bar-overlay bg-ideeza-dark" :style="`width: ${overlayWidth}%` "></div>
        <div class="absolute top-0 left-0 h-full w-full z-50 flex justify-between">
          <!--1-->
          <div
            class="stepper-icon-wrapper relative"
            :class="{'active': cartStep === 0 || cartStep === 6}"
          >
            <check-list-icon class="fill-current absolute-center-h-v" />
            <div
              class="stepper-text stepper-text--overview"
              :class="{'active': cartStep === 0 || cartStep === 6}"
            >Overview</div>
          </div>
          <!--2-->
          <div
            class="stepper-icon-wrapper relative"
            :class="{'active': cartStep === 1 || cartStep === 6}"
          >
            <tap-icon class="fill-current absolute-center-h-v" />
            <div
              class="stepper-text stepper-text--options"
              :class="{'active': cartStep === 1 || cartStep === 6}"
            >Options</div>
          </div>
          <!--3-->
          <div
            class="stepper-icon-wrapper relative"
            :class="{'active': cartStep === 2 || cartStep === 6}"
          >
            <cart-icon class="fill-current absolute-center-h-v" />
            <div
              class="stepper-text stepper-text--cart"
              :class="{'active': cartStep === 2 || cartStep === 6}"
            >Cart</div>
          </div>

          <!--4-->
          <div
            class="stepper-icon-wrapper relative"
            :class="{'active': cartStep === 3 || cartStep === 6}"
          >
            <font-awesome-icon
              class="w-8 h-8 text-xl absolute-center-h-v"
              :icon="['fas', 'truck-loading']"
            />
            <div
              class="stepper-text stepper-text--delivery"
              :class="{'active': cartStep === 3 || cartStep === 6}"
            >Delivery</div>
          </div>
          <!--5-->
          <div
            class="stepper-icon-wrapper relative"
            :class="{'active': cartStep === 4 || cartStep === 6}"
          >
            <font-awesome-icon
              class="w-8 h-8 text-xl absolute-center-h-v"
              :icon="['fas', 'money-check-alt']"
            />
            <div
              class="stepper-text stepper-text--payment"
              :class="{'active': cartStep === 4 || cartStep === 6}"
            >Payment</div>
          </div>
          <!--6-->
          <div
            class="stepper-icon-wrapper relative"
            :class="{'active': cartStep === 5 || cartStep === 6}"
          >
            <font-awesome-icon
              class="w-8 h-8 text-xl absolute-center-h-v"
              :icon="['fas', 'clipboard-check']"
            />
            <div
              class="stepper-text stepper-text--confirmation"
              :class="{'active': cartStep === 5 || cartStep === 6}"
            >Confirmation</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckListIcon from "~/components/partials/icons/checklist-icon.vue";
import TapIcon from "~/components/partials/icons/tap-icon.vue";
import CartIcon from "~/components/partials/icons/cart-icon.vue";
import ServicesIcon from "~/components/partials/icons/services-icon.vue";
export default {
  name: "cart-stepper",
  components: {
    CheckListIcon,
    TapIcon,
    CartIcon,
    ServicesIcon
  },
  computed: {
    overlayWidth() {
      return this.$store.state.cartstepper.cartStep * 20;
    },
    cartStep() {
      console.log(this.$store.state.cartstepper.cartStep);
      return this.$store.state.cartstepper.cartStep;
    }
  }
};
</script>

<style scoped>
.stepper-container {
  width: 100%;
  max-width: 1000px;
}
.stepper-bar {
  width: 100%;
  max-width: 945px;
  height: 15px;
}
.stepper-bar-overlay {
  @apply rounded-r-lg;
  transition: all 0.3s ease-in;
  height: 100%;
  width: 96%;
  margin-left: 2px;
}
.stepper-icon-wrapper {
  @apply rounded-full bg-gray-200;
  width: 50px;
  height: 50px;
  margin-top: -20px;
  transition: all 0.3s ease-in;
}
.stepper-icon-wrapper svg {
  @apply text-gray-800;
}
.stepper-icon-wrapper.active {
  @apply bg-ideeza-dark;
}
.stepper-icon-wrapper.active svg {
  @apply text-white;
}
.stepper-text {
  @apply absolute font-semibold text-gray-600;
  margin-top: 60px;
}
.stepper-text--overview {
  margin-left: -10px;
}
.stepper-text--options {
  margin-left: -8px;
}
.stepper-text--cart {
  margin-left: 8px;
}
.stepper-text--services {
  margin-left: -5px;
}
.stepper-text--delivery {
  margin-left: -5px;
}
.stepper-text--payment {
  margin-left: -5px;
}
.stepper-text--confirmation {
  margin-left: -20px;
}
.stepper-text.active {
  @apply text-gray-800;
}
</style>
