<template>
  <div class="py-10 lg:px-20">
    <div
      class="w-full border-b border-gray-500 flex pb-3 flex-col lg:flex-row justify-between items-center"
    >
      <div class="flex items-center">
        <span class="font-semibold text-xl text-gray-500 mr-2">Shipping Services</span>
        <drop-down
          style-height="mini"
          :data="shippingServices"
          class="services-dropdown"
          v-model="shipping_service"
        />
      </div>
      <div>
        <span class="text-gray-500 mr-2">Delivery time:</span>
        <span class="text-gray-800 font-semibold">2 to 5 business days</span>
      </div>
    </div>

    <!--Shipping form-->
    <div class="cart-scroll-area">
      <!-- <smooth-scrollbar :options="{alwaysShowTracks: true}"> -->
      <div style="overflow: scroll; height: 480px">
        <div class="my-5 lg:flex flex-wrap">
          <div class="lg:w-1/2 lg:pr-5">
            <div class="field-container mt-10">
              <div class="text-lg text-gray-800 mb-2">First name</div>
              <text-field placeholder v-model="firstname" />
            </div>
          </div>
          <div class="lg:w-1/2 lg:pl-5">
            <div class="field-container mt-10">
              <div class="text-lg text-gray-800 mb-2">Last name</div>
              <text-field placeholder v-model="lastname" />
            </div>
          </div>
          <div class="lg:w-1/2 lg:pr-5">
            <div class="field-container mt-10">
              <div class="text-lg text-gray-800 mb-2">Phone number</div>
              <text-field placeholder v-model="phonenumber" />
            </div>
          </div>
          <div class="lg:w-1/2 lg:pl-5">
            <div class="field-container mt-10">
              <div class="text-lg text-gray-800 mb-2">Email</div>
              <text-field placeholder v-model="email" />
            </div>
          </div>
          <div class="lg:w-1/2 lg:pr-5">
            <div class="field-container mt-10">
              <div class="text-lg text-gray-800 mb-2">Country</div>
              <drop-down :data="countries" v-model="country" />
            </div>
          </div>
          <div class="lg:w-1/2 lg:pl-5">
            <div class="field-container mt-10">
              <div class="text-lg text-gray-800 mb-2">City</div>
              <drop-down :data="cities" v-model="city" />
            </div>
          </div>
          <div class="lg:w-1/2 lg:pr-5">
            <div class="field-container mt-10">
              <div class="text-lg text-gray-800 mb-2">Address</div>
              <text-field placeholder v-model="address" />
            </div>
          </div>
          <div class="lg:w-1/6 lg:pl-5">
            <div class="field-container mt-10">
              <div class="text-lg text-gray-800 mb-2">Zip code</div>
              <text-field placeholder v-model="zip" />
            </div>
          </div>
        </div>
      </div>
      <!-- </smooth-scrollbar> -->
    </div>

    <div class="py-10 lg:px-20 flex flex-col lg:flex-row justify-between relative">
      <button @click="moveBack" class="order-2 lg:order-1 my-4 lg:my-0 btn pill-button px-8 py-1">
        <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'long-arrow-alt-left']" />Back
      </button>
      <nuxt-link
        to="/user/dashboard"
        class="order-1 lg:order-2 my-4 lg:my-0 btn pill-button px-8 py-1"
      >Continue shopping</nuxt-link>
      <button @click="moveNext" class="order-3 btn pill-button pill-button--ideeza px-8 py-1">
        Next Step
        <font-awesome-icon class="ml-2 h-4 cursor-pointer" :icon="['fas', 'long-arrow-alt-right']" />
      </button>
    </div>
  </div>
</template>

<script>
import DropDown from "~/components/form/dropdown-field.vue";
import TextField from "~/components/form/text-field.vue";
import apiServiceWithToken from "~/apiService/have_token.js";
export default {
  middleware: "auth",
  name: "delivery",

  data: function() {
    return {
      shippingServices: ["DHL", "FEDEX", "UPS", "USPS"],
      countries: ["United States", "United Kingdom", "Canada"],
      cities: ["New York", "London", "Otawa"],
      firstname: "",
      lastname: "",
      phonenumber: "",
      address: "",
      zip: "",
      email: "",
      country: "",
      city: "",
      shipping_service: ""
    };
  },
  mounted() {
    this.$store.commit("cartstepper/set", { position: 3 });
  },
  components: {
    "text-field": TextField,
    "drop-down": DropDown
  },
  methods: {
    moveNext() {
      window.$nuxt.$cookies.set("d_firstname", this.firstname);
      window.$nuxt.$cookies.set("d_lastname", this.lastname);
      window.$nuxt.$cookies.set("d_phonenumber", this.phonenumber);
      window.$nuxt.$cookies.set("d_address", this.address);
      window.$nuxt.$cookies.set("d_zip", this.zip);
      window.$nuxt.$cookies.set("d_email", this.email);
      window.$nuxt.$cookies.set("d_country", this.country);
      window.$nuxt.$cookies.set("d_city", this.city);
      window.$nuxt.$cookies.set("d_shipping_service", this.shipping_service);

      this.$router.push("/user/cart/payment");
    },
    moveBack() {
      this.$router.push("/user/cart/cart");
    }
  }
};
</script>

<style scoped>
/deep/ .smooth-scrollbar {
  padding-right: 20px;
  margin-top: 15px;
}
.services-dropdown {
  width: 270px;
}
</style>
