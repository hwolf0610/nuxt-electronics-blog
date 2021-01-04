<template>
  <div class="main-contents">
    <!---->
    <!--Payment Methods-->
    <!---->
    <div
      class="md:flex justify-between items-center pb-3 border-b border-solid border-gray-400 p-5 lg:p-0"
    >
      <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Payment Methods</h1>
    </div>

    <!--Container-->
    <div class="my-5 p-5 bg-white shadow-md flex flex-wrap">
      <div
        class="payment-box mb-5 lg:m-5 p-5 border border-solid border-gray-700 flex flex-col justify-between"
      >
        <div>
          <h1 class="text-lg text-gray-800 font-semibold">VISA xxxxxxxxxxxx6829</h1>
          <h1 class="text-lg text-gray-800 font-semibold">09/19</h1>
        </div>
        <div class="flex justify-between items-end">
          <div>
            <span class="text-lg text-gray-600 font-semibold block">Default</span>
            <span class="text-lg text-ideeza cursor-pointer font-semibold block">Remove</span>
          </div>
          <div>
            <img class src="~/static/images/visa_logo.png" alt />
          </div>
        </div>
      </div>
      <div
        class="payment-box mb-5 lg:m-5 p-5 border border-solid border-gray-700 flex flex-col justify-between"
      >
        <div>
          <h1 class="text-lg text-gray-800 font-semibold">VISA xxxxxxxxxxxx6829</h1>
          <h1 class="text-lg text-gray-800 font-semibold">09/19</h1>
        </div>
        <div class="flex justify-between items-end">
          <div>
            <span class="text-lg text-gray-600 font-semibold block cursor-pointer">Set Default</span>
            <span class="text-lg text-ideeza cursor-pointer font-semibold block">Remove</span>
          </div>
          <div>
            <img class src="~/static/images/visa_logo.png" alt />
          </div>
        </div>
      </div>

      <!--Add Method-->
      <div
        class="cursor-pointer hover:shadow-md payment-box lg:m-5 p-5 border border-solid border-gray-700 flex flex-col justify-center items-center content-center"
      >
        <font-awesome-icon class="mb-5 h-20 text-6xl" :icon="['fas', 'plus']" />
        <span class="text-lg text-gray-800 font-semibold">Add Payment Method</span>
      </div>
    </div>

    <!---->
    <!--Ideeza Coupans-->
    <!---->
    <div
      class="md:flex justify-between items-center pb-3 border-b border-solid border-gray-400 mt-16 p-5 lg:p-0"
    >
      <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Ideeza Coupans</h1>
    </div>

    <!--Container-->
    <div class="my-5 p-10 bg-white shadow-md">
      <!--Head-->
      <div class="pb-3 border-b border-solid border-gray-400">
        <h1 class="text-lg lg:text-2xl mb-5 text-gray-600 font-semibold">
          Ideeza coupon balance:
          <span class="text-gray-800">$0</span>
        </h1>
        <span
          class="text-gray-500"
        >The credit balance from coupons will be automatically applied when you buy a product.</span>
      </div>

      <!--Coupan Form-->
      <div class="mt-16">
        <span class="block mb-3 text-gray-600 font-semibold">Enter Ideeza coupon code</span>
        <div class="lg:flex">
          <div class="lg:mr-5 lg:mb-0 mb-3 w-full coupon-input">
            <input class="w-full rounded-full bg-gray-300 px-5 py-2 text-xl outline-none" />
          </div>
          <button
            class="btn pill-button pill-button--ideeza w-full lg:w-auto px-20"
          >apply to account</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: "auth",
  name: "payment-methods"
};
</script>

<style scoped>
.payment-box {
  width: 330px;
  height: 330px;
}
.coupon-input {
  max-width: 380px;
}
</style>
