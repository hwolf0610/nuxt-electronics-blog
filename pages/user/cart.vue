<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow">
      <div class="main-contents">
        <div class="shadow-md bg-white">
          <CartStepper />
          <nuxt-child></nuxt-child>
          <!-- <div
            v-if="cartStep < 6"
            class="py-10 lg:px-20 flex flex-col lg:flex-row justify-between relative"
            :class="{'w-half': cartStep === 1}"
          >
            <button
              @click="moveBack"
              v-if="cartStep > 0"
              class="order-2 lg:order-1 my-4 lg:my-0 btn pill-button px-8 py-1"
            >
              <font-awesome-icon
                class="mr-2 h-4 cursor-pointer"
                :icon="['fas', 'long-arrow-alt-left']"
              />Back
            </button>
            <nuxt-link
              to="/user/dashboard"
              v-if="cartStep !== 5"
              class="order-1 lg:order-2 my-4 lg:my-0 btn pill-button px-8 py-1"
            >Continue shopping</nuxt-link>
            <div v-if="cartStep === 5" class="order-1 lg:order-2 items-center content-center">
              <span class="text-gray-500 font-semibold">Total Price:</span>
              <span class="text-gray-800 text-xl font-semibold ml-10">$1000,000</span>
            </div>
            <button
              v-if="cartStep <= 4 && cartStep !== 1"
              @click="moveNext"
              class="order-3 btn pill-button pill-button--ideeza px-8 py-1"
            >
              Next Step
              <font-awesome-icon
                class="ml-2 h-4 cursor-pointer"
                :icon="['fas', 'long-arrow-alt-right']"
              />
            </button> -->
            <!-- <nuxt-link
              v-if="cartStep === 5"
              to="/user/cart/thankyou"
              class="order-3 btn pill-button pill-button--ideeza px-8 py-1"
            >Confirm order</nuxt-link> -->
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftMenu from "~/components/user/common-left-side-menu.vue";
import CartStepper from "~/components/user/cart/stepper.vue";
import { mapMutations } from "vuex";

export default {
  middleware: "auth",
  layout: "user",
  name: "cart-index",
  components: {
    LeftMenu,
    CartStepper
  },
  data: function() {
    return {
      routeTo: [
        "/user/cart/overview",
        "/user/cart/options",
        "/user/cart/cart",
        "/user/cart/delivery",
        "/user/cart/payment",
        "/user/cart/confirmation"
      ]
    };
  },
  computed: {
    leftMenu() {
      return this.$store.state.usermenu.openLeftMenu;
    },
    cartStep() {
      return this.$store.state.cartstepper.cartStep;
    }
  },
  mounted() {},
  methods: {
    moveNext() {
      this.next();
      this.$router.push({
        path: this.routeTo[this.$store.state.cartstepper.cartStep]
      });
    },
    moveBack() {
      this.back();
      this.$router.push({
        path: this.routeTo[this.$store.state.cartstepper.cartStep]
      });
    },
    moveThankyou() {
      this.$router.push({
        path: this.routeTo["/user/cart/thankyou"]
      });
    },
    ...mapMutations({
      next: "cartstepper/incrementStep",
      back: "cartstepper/decrementStep"
    })
  }
};
</script>

<style scoped>
.cart-container {
  width: 100%;
  max-width: 1530px;
  padding: 20px 5px;
}
.w-half {
  width: 100%;
}
@screen lg {
  .cart-container {
    padding: 60px 50px;
  }
  .w-half {
    width: 66%;
  }
}
</style>
