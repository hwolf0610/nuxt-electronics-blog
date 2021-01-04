<template>
  <div>
    <div
      class="py-10 lg:px-20 flex flex-col lg:flex-row lg:justify-center justify-center items-center"
    >
      <div class="cart-scroll-area">
        <!-- <div style="overflow: scroll; height: 480px"> -->
        <div class="my-5 lg:flex flex-wrap">
          <div class="lg:w-1/2 lg:pr-5">
            <div class="options-container flex flex-col items-center lg:mr-32">
              <BluePrintIcon class="fill-current" />
              <span>Download the blueprint</span>
            </div>
          </div>
          <div class="lg:w-1/2 lg:pr-5">
            <div @click="moveNext" class="options-container flex flex-col items-center">
              <ShoppingBasketIcon class="fill-current" />
              <span>Go to checkout</span>
            </div>
          </div>
        </div>
        <!-- </div> -->
      </div>
    </div>
    <div class="py-10 lg:px-20 flex flex-col lg:flex-row justify-between relative">
      <button @click="moveBack" class="order-2 lg:order-1 my-4 lg:my-0 btn pill-button px-8 py-1">
        <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'long-arrow-alt-left']" />Back
      </button>
      <nuxt-link
        to="/user/dashboard"
        class="order-1 lg:order-2 my-4 lg:my-0 btn pill-button px-8 py-1"
      >Continue shopping</nuxt-link>
    </div>
  </div>
</template>

<script>
import BluePrintIcon from "~/components/partials/icons/blueprint-icon.vue";
import ShoppingBasketIcon from "~/components/partials/icons/shopping-basket-icon.vue";
import { mapMutations } from "vuex";
export default {
  middleware: "auth",
  name: "cart-options",
  mounted() {
    this.$store.commit("cartstepper/set", { position: 1 });
  },
  components: {
    BluePrintIcon,
    ShoppingBasketIcon
  },
  methods: {
    moveNext() {
      this.next();
      this.$router.push({
        path: "/user/cart/cart"
      });
    },
    moveBack() {
      this.$router.push("/user/cart/overview");
    },
    ...mapMutations({
      next: "cartstepper/incrementStep",
      back: "cartstepper/decrementStep"
    })
  }
};
</script>

<style scoped>
.options-container {
  @apply text-xl text-gray-300 cursor-pointer font-semibold;
}
.options-container svg {
  max-width: 230px;
}
.options-container:hover {
  @apply text-ideeza-dark;
}

@screen lg {
  .options-container {
    @apply text-2xl;
  }
}
</style>
