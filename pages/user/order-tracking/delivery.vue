<template>
  <div class>
    <div class="track-heading">Delivering your order</div>
    <div class="lg:flex">
      <div class="progress-bar bg-gray-100 w-full lg:w-1/2">
        <div
          class="h-full bg-ideeza flex justify-end items-center relative"
          :style="`width: ${width}%`"
        >
          <img class="mr-5" src="~/static/icons/truck-icon.svg" alt />
          <div class="percent-container">{{`${width}%`}}</div>
        </div>
      </div>

      <div class="md:flex justify-center lg:ml-10 mt-10 w-full lg:w-1/2">
        <div>
          <span class="text-base lg:text-xl text-gray-500 font-semibold block">FROM</span>
          <span class="text-lg lg:text-2xl text-gray-800 font-semibold block">Oklahoma, Ohio</span>
        </div>
        <div class="mx-5">
          <span class="text-base lg:text-xl text-gray-500 font-semibold block">TO</span>
          <span class="text-lg lg:text-2xl text-gray-800 font-semibold block">Toronto, Canada</span>
        </div>
        <div class>
          <span class="text-base lg:text-xl text-gray-500 font-semibold block">Estimated time</span>
          <span class="text-lg lg:text-2xl text-gray-800 font-semibold block">~ 44 minutes left</span>
        </div>
      </div>
    </div>

    <div class="mt-10 mb-20">
      <img src="~/static/images/track-map.png" class="w-full object-cover object-center" alt />
    </div>
    <div class="text-right absolute left-0 bottom-0">
      <nuxt-link to="/user/order-tracking/making-product"> 
        <button class="btn btn-normal btn--ideeza-dark btn-text-bold btn--rounded px-8 py-4 text-lg m-3">Back</button>
      </nuxt-link>
    </div>
    <div class="text-right absolute right-0 bottom-0">
      <nuxt-link to="/user/order-tracking/pick-up" >
        <button class="btn btn-normal btn--ideeza btn-text-bold btn--rounded px-8 py-4 text-lg m-3">Next</button>
      </nuxt-link>
    </div>
    <!-- <div class="mt-10">
       <nuxt-link to="/user/order-tracking/making-product"> 
        <button class="btn btn-normal btn--ideeza-dark btn-text-bold btn--rounded px-8 py-4 text-lg">Back</button>
      </nuxt-link>
      <nuxt-link to="/user/order-tracking/pick-up" >
        <button class="btn btn-normal btn--ideeza btn-text-bold btn--rounded px-8 py-4 text-lg">Next</button>
      </nuxt-link>
    </div> -->
  </div>
</template>

<script>
import Truck from "~/components/partials/icons/track-truck-icon.vue";
export default {
  middleware: "auth",
  name: "making-product",
  components: {
    Truck
  },
  data: function() {
    return {
      width: 80
    };
  },
  mounted() {
    this.$store.commit("trackstepper/set", { position: 1 });
  }
};
</script>

<style scoped>
.rightbutton{
  margin-right: 10px;
}
.track-heading {
  @apply text-2xl font-semibold relative;
  width: fit-content;
}
.track-heading:before {
  @apply border-b-4 border-solid border-ideeza left-0;
  content: "";
  position: absolute;
  width: 80px;
  bottom: -10px;
}
.progress-bar {
  @apply my-10 border border-solid border-ideeza relative;
  height: 100px;
}
.percent-container {
  @apply flex items-center h-full pl-16 font-semibold text-ideeza text-xl bg-gray-100;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 60% 100%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 60% 100%);
}
</style>
