<template>
  <div class="py-10 lg:px-20">
    <div class="py-10 lg:px-20 lg:flex">
      <div class="lg:w-1/3">
        <div class="w-full border-b border-gray-500 flex pb-3">
          <span class="font-semibold text-xl text-gray-500">Delivery</span>
        </div>

        <div class="my-5">
          <div class="flex justify-between items-center">
            <div>
              <font-awesome-icon class="mr-3 h-4 text-gray-500" :icon="['fas', 'truck']" />
              <span class="font-semibold">{{delivery_service}} Delivery</span>
            </div>
            <div>
              <span class="text-gray-500">Price:</span>
              <span class="font-semibold">${{delivery_price}}</span>
            </div>
          </div>
          <div class="flex mt-6">
            <div>
              <font-awesome-icon class="mr-6 h-4 text-gray-500" :icon="['fas', 'map-marker-alt']" />
            </div>
            <div class="font-semibold">
              {{delivery_address}}
              <br />{{delivery_city}},
              <br />{{delivery_country}}
            </div>
          </div>
        </div>

        <div class="w-full mt-10 border-b border-gray-500 flex pb-3">
          <span class="font-semibold text-xl text-gray-500">Payment</span>
        </div>
        <div class="mt-5 flex items-center">
          <div>
            <font-awesome-icon class="mr-5 h-4 text-gray-500" :icon="['fas', 'credit-card']" />
          </div>
          <div class="font-semibold">VISA XXXX XXXX XXXX 3734</div>
        </div>
      </div>

      <div class="lg:w-2/3 lg:pl-20">
        <table>
          <thead>
            <tr class="border-b border-solid border-gray-500">
              <th class="text-left font-semibold text-xl text-gray-500 pb-3">Cart</th>
              <th class="text-left font-semibold text-xl text-gray-500 pb-3">Manufacturer</th>
              <th class="pb-3"></th>
            </tr>
          </thead>
          <tbody class="mt-5">
            <tr v-for="cart in carts">
              <td class="product">
                <div class="lg:flex">
                  <div class="mr-2">
                    <img class="w-20" :src="cart.image_url" />
                  </div>
                  <div class="my-auto px-5">
                    <span class="block font-semibold">
                      {{cart.name}}
                      <br />Project
                    </span>
                    <span class="block text-sm text-gray-500">{{cart.description}}</span>
                  </div>
                </div>
              </td>
              <td>
                <span class="text-gray-500 text-sm block">Electronics:</span>
                <span class="font-semibold block">{{cart.eletronics_description}}</span>
                <span class="text-gray-400 text-sm block mt-2">Cover:</span>
                <span class="font-semibold block">{{cart.cover_description}}</span>
              </td>
              <td class="lg:text-right">{{cart.price}}</td>
            </tr>
          </tbody>
        </table>

        <div class="text-right text-gray-500">
          Total:
          <span class="font-semibold text-gray-800 text-lg ml-10 inline-block">$30,000</span>
        </div>
      </div>
    </div>
    <div class="py-10 lg:px-20 flex flex-col lg:flex-row justify-between relative">
      <button @click="moveBack" class="order-2 lg:order-1 my-4 lg:my-0 btn pill-button px-8 py-1">
        <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'long-arrow-alt-left']" />Back
      </button>
      <div class="order-1 lg:order-2 items-center content-center">
        <span class="text-gray-500 font-semibold">Total Price:</span>
        <span class="text-gray-800 text-xl font-semibold ml-10">$1000,000</span>
      </div>
      <nuxt-link
        to="/user/cart/thankyou"
        class="order-3 btn pill-button pill-button--ideeza px-8 py-1"
      >Confirm order</nuxt-link>
    </div>
  </div>
</template>

<script>
import carts from "~/json/cart.json";
import apiServiceWithToken from "~/apiService/have_token.js";
export default {
  middleware: "auth",
  name: "payment",

  data: function() {
    return {
      carts: carts,
      delivery_address: null,
      delivery_city: null,
      delivery_country: null,
      delivery_price: null,
      delivery_service: 'Experss'
    };
  },
  mounted() {
    this.$store.commit("cartstepper/set", { position: 5 });

    window.$nuxt.$cookies.get("d_firstname");
    window.$nuxt.$cookies.get("d_lastname");
    window.$nuxt.$cookies.get("d_phonenumber");
    this.delivery_address = window.$nuxt.$cookies.get("d_address");
    window.$nuxt.$cookies.get("d_zip");
    window.$nuxt.$cookies.get("d_email");
    this.delivery_country = window.$nuxt.$cookies.get("d_country");
    this.delivery_city = window.$nuxt.$cookies.get("d_city");
    this.delivery_service = window.$nuxt.$cookies.get("d_shipping_service");

  },

  methods: {
    moveBack() {
      this.$router.push("/user/cart/payment");
    }
  }
};
</script>

<style scoped>
/*Table*/
@screen lg {
  table {
    @apply mb-5 w-full table-auto border-collapse text-gray-600 mx-auto;
  }

  td.product img {
    width: 100px;
  }
  tbody td {
    @apply border-b border-solid border-gray-400 py-3;
  }
}

@media only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px) {
  /* Force table to not be like tables anymore */
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  /* Hide table headers (but not display: none;, for accessibility) */
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    border: 1px solid #ccc;
    margin-bottom: 10px;
  }

  td {
    /* Behave  like a "row" */
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 50%;
  }

  td:before {
    /* Now like a table header */
    position: absolute;
    /* Top/left values mimic padding */
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
    font-weight: 600;
  }

  /*
      Label the data
      */
  td:nth-of-type(1):before {
    content: "Cart";
  }
  td:nth-of-type(2):before {
    content: "Manufacturer";
  }
  td:nth-of-type(3):before {
    content: "Price";
  }
}
</style>
