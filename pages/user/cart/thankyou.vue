<template>
  <div class="py-10 flex flex-col lg:justify-center justify-center items-center">
    <div class="options-container flex flex-col items-center mb-10">
      <img src="~/static/images/order-confirm.png" alt />
    </div>

    <div class="text-xl lg:text-4xl text-semibold text-center mb-10">
      Congratulations!
      <br />Your order is accepted.
    </div>

    <div class="text-center">
      <nuxt-link
        to="/user/order-tracking/making-product"
        class="btn pill-button pill-button--ideeza px-8 py-2"
      >Track your order</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  name: "cart-thankyou",
  mounted() {
    this.$store.commit("cartstepper/set", { position: 6 });
  }
};
</script>

<style scoped>
</style>
