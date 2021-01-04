<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow">
      <div class="main-contents">
        <div class="bg-white shadow-md border-solid border-gray-400 overflow-y-auto p-10">
          <div
            class="flex items-center justify-between pb-3 border-b-2 border-solid border-ideeza-dark"
          >
            <div class="flex items-center">
              <span class="font-semibold text-xl inline-block">Manufacturers</span>
            </div>

            <Search placeholder="search manufacturers..." />
          </div>

          <div class="my-3 lg:flex justify-between text-sm">
            <div class="flex">
              <div class="flex items-center p-1 border border-solid border-ideeza-gray-700 mr-5">
                <span class="mr-3">Type:</span>
                <select class="border-0">
                  <option>Patents</option>
                  <option>Clouds</option>
                  <option>Freelancers</option>
                </select>
              </div>
              <div class="flex items-center p-1 border border-solid border-ideeza-gray-700">
                <span class="mr-3">Sort By:</span>
                <select class="border-0">
                  <option>Cost</option>
                  <option>Rating</option>
                  <option>Work time</option>
                  <option>Address</option>
                </select>
              </div>
            </div>
            <div>
              <button
                @click="showOptimize = true"
                class="btn btn-normal btn--ideeza px-8 py-2"
              >Optimize</button>
              <button
                @click="$router.back()"
                class="ml-5 btn btn-normal btn--ideeza-dark px-8 py-2"
              >< Go Back</button>
            </div>
          </div>

          <!--Results-->
          <h1 class="my-3 font-semibold">Results (58)</h1>

          <div class="services-container mx-auto mt-10">
            <div class="mb-32 lg:mb-20 lg:flex" v-for="manufacturer in manufacturers">
              <div class="lg:flex lg:mr-20">
                <div class="mb-5 lg:mb-0 lg:mr-5">
                  <img
                    class="avatar rounded-full mx-auto"
                    :src="avata_img_url + manufacturer.manufacturer.avatar"
                  />
                </div>
                <div>
                  <div class="flex justify-between items-center">
                    <div class="flex items-center">
                      <h1 class="text-lg font-semibold inline-block mr-5">{{manufacturer.manufacturer.name}}</h1>
                      <button class="btn btn-normal btn--ideeza px-5 py-2">Available</button>
                    </div>

                    <div class="flex items-center">
                      <div class="py-1 px-2 border border-solid border-light-gray mr-3">{{manufacturer.manufacturer.worktime}} Days</div>
                      <div class="py-1 px-2 border border-solid border-light-gray mr-3">${{manufacturer.manufacturer.cost}}</div>
                    </div>
                  </div>
                  <div class="my-5 flex items-center">
                    <h2 class="inline-block mr-5 font-semibold text-lg">Code</h2>
                    <span>
                      <font-awesome-icon class="h-3 text-ideeza-gold" :icon="['fas', 'star']" />
                      <font-awesome-icon class="h-3 text-ideeza-gold" :icon="['fas', 'star']" />
                      <font-awesome-icon class="h-3 text-ideeza-gold" :icon="['fas', 'star']" />
                      <font-awesome-icon class="h-3 text-ideeza-gold" :icon="['fas', 'star']" />
                      <font-awesome-icon class="h-3 text-ideeza-gold" :icon="['fas', 'star']" />
                    </span>
                    <span class="ml-3">({{manufacturer.manufacturer.rating}})</span>
                  </div>
                  <div
                    class="text-ideeza-black"
                  >{{manufacturer.manufacturer.description}}</div>

                  <div class="flex mt-5">
                    <button class="btn btn--ideeza-dark px-3 py-1 mr-3" v-for="skill in manufacturer.manufacturer.skill">{{skill}}</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="mb-32 lg:mb-20 lg:flex">
              <div class="lg:flex lg:mr-20">
                <div class="mb-5 lg:mb-0 lg:mr-5">
                  <img
                    class="avatar rounded-full mx-auto"
                    src="https://picsum.photos/id/870/150/150?grayscale&blur=2"
                  />
                </div>
                <div>
                  <div class="flex justify-between items-center">
                    <div class="flex items-center">
                      <h1 class="text-lg font-semibold inline-block mr-5">Electric</h1>
                      <button class="btn btn-normal btn--ideeza px-5 py-2">Available</button>
                    </div>

                    <div class="flex items-center">
                      <button
                        @click="requestQuote = !requestQuote"
                        class="btn btn-normal px-3 py-2"
                        :class="{'btn-green': quoteSend}"
                      >Request Quote</button>
                    </div>
                  </div>
                  <div class="my-5 flex items-center">
                    <h2 class="inline-block mr-5 font-semibold text-lg">Electric</h2>
                    <span>
                      <font-awesome-icon class="h-3 text-ideeza-gold" :icon="['fas', 'star']" />
                      <font-awesome-icon class="h-3 text-ideeza-gold" :icon="['fas', 'star']" />
                      <font-awesome-icon class="h-3 text-ideeza-gold" :icon="['fas', 'star']" />
                      <font-awesome-icon class="h-3 text-ideeza-gold" :icon="['fas', 'star']" />
                      <font-awesome-icon class="h-3 text-ideeza-gold" :icon="['fas', 'star']" />
                    </span>
                    <span class="ml-3">(5.0)</span>
                  </div>
                  <div
                    class="text-ideeza-black"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat orci magna, vel mollis purus consequat et. Proin consectetur odio nec varius placerat.</div>

                  <div class="flex mt-5">
                    <button class="btn btn--ideeza-dark px-3 py-1 mr-3">PHP</button>
                    <button class="btn btn--ideeza-dark px-3 py-1 mr-3">Java</button>
                    <button class="btn btn--ideeza-dark px-3 py-1 mr-3">Python</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-32 lg:mb-20 lg:flex">
              <div class="lg:flex lg:mr-20">
                <div class="mb-5 lg:mb-0 lg:mr-5">
                  <img
                    class="avatar rounded-full mx-auto"
                    src="https://randomuser.me/api/portraits/men/18.jpg"
                  />
                </div>
                <div>
                  <div class="flex justify-between items-center">
                    <div class="flex items-center">
                      <h1 class="text-lg font-semibold inline-block mr-5">Apple</h1>
                      <div class="bg-ideeza-gray-100 text-ideeza px-3 py-1 text-sm">Not Available</div>
                    </div>

                    <div class="flex items-center">
                      <button class="btn btn-normal btn-green px-3 py-2">Request sent</button>
                    </div>
                  </div>
                  <div class="my-5 flex items-center">
                    <h2 class="inline-block mr-5 font-semibold text-lg">Cover</h2>
                    <span>
                      <font-awesome-icon class="h-3 text-ideeza-gold" :icon="['fas', 'star']" />
                      <font-awesome-icon class="h-3 text-ideeza-gold" :icon="['fas', 'star']" />
                      <font-awesome-icon class="h-3 text-ideeza-gold" :icon="['fas', 'star']" />
                      <font-awesome-icon class="h-3 text-ideeza-gold" :icon="['fas', 'star']" />
                      <font-awesome-icon class="h-3 text-ideeza-gold" :icon="['fas', 'star']" />
                    </span>
                    <span class="ml-3">(5.0)</span>
                  </div>
                  <div
                    class="text-ideeza-black"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat orci magna, vel mollis purus consequat et. Proin consectetur odio nec varius placerat.</div>

                  <div class="flex mt-5">
                    <button class="btn btn--ideeza-dark px-3 py-1 mr-3">PHP</button>
                    <button class="btn btn--ideeza-dark px-3 py-1 mr-3">Java</button>
                    <button class="btn btn--ideeza-dark px-3 py-1 mr-3">Python</button>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <!--Request popup-->
    <div
      v-if="requestQuote"
      class="quote-popup absolute-center-h-v"
      v-click-outside="onClickOutside"
    >
      <h1 class="text-xl font-semibold">Requesting quote</h1>
      <p class="mt-2">
        After requesting the quote there will 5 more
        <br />free quotes left
      </p>
      <div class="flex justify-end mt-3">
        <button @click="sendQuote" class="btn btn-normal btn--ideeza px-4 py-2">Send</button>
      </div>
    </div>

    <!--Optimize popup-->
    <div
      v-if="showOptimize"
      class="quote-popup absolute-center-h-v"
      v-click-outside="onClickOutsideOptimize"
    >
      <h1 class="text-xl font-semibold">Optimization</h1>
      <div class="flex items-center font-semibold text-ideeza-black mt-5">
        <CheckBox />Free shipping
      </div>

      <div class="mt-5">
        <h1 class="font-semibold mb-1">Price</h1>
        <div class="flex justify-between">
          <input placeholder="$ min" />
          <input placeholder="$ max" />
        </div>
      </div>

      <div class="mt-5">
        <h1 class="font-semibold mb-1">Delivery time</h1>
        <select class="optimize-select">
          <option value="1 day">1Day</option>
        </select>
      </div>

      <div class="mt-5 flex">
        <button class="btn btn-hollow--ideeza px-5 py-2 mr-3">Electronic criteria</button>
        <button class="btn btn-hollow--ideeza px-5 py-2">Mechanics criteria</button>
      </div>

      <div class="flex mt-5">
        <button @click="doOptimize" class="btn btn-normal btn--ideeza px-4 py-2">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
import LeftMenu from "~/components/user/common-left-side-menu.vue";
import Search from "~/components/form/search.vue";
import CheckBox from "~/components/form/checkbox-dark.vue";
import apiServiceWithToken from "~/apiService/have_token.js";
export default {
  middleware: "auth",
  layout: "user",
  name: "manufacturers-index",
  data: function() {
    return {
      requestQuote: false,
      quoteSend: false,
      showOptimize: false,
      manufacturers: [],
      avata_img_url: process.env.avatar_base_url,
    };
  },
  components: {
    LeftMenu,
    Search,
    CheckBox
  },
  computed: {
    leftMenu() {
      return this.$store.state.usermenu.openLeftMenu;
    }
  },
  mounted() {
    let productid = window.$nuxt.$cookies.get('productid');
    var manufacturersFormData = new FormData();
    manufacturersFormData.set('productid', productid);
    let getmanufacturersurl = "/api/project/get_manufacturers";
    let getmanufacturersData = {
      method: "post",
      url: getmanufacturersurl,
      data: manufacturersFormData
    };

    apiServiceWithToken(getmanufacturersData, response => {
      console.log(response.data);
      console.log(response.data["success"]);
      if (response.data["success"] == true) {
        this.manufacturers = response.data["data"];
        console.log("manufacturers: ", response.data["data"]);
      }
    });
  },
  methods: {
    sendQuote() {
      this.quoteSend = true;
      this.requestQuote = false;
      this.$notify({
        group: "success",
        text: "Request sent"
      });
    },
    doOptimize() {
      this.showOptimize = false;
    },
    onClickOutside() {
      this.requestQuote = false;
    },
    onClickOutsideOptimize() {
      this.showOptimize = false;
    }
  }
};
</script>

<style scoped>
select {
  @apply text-ideeza;
}
option {
  @apply text-ideeza-black;
}
.quote-popup {
  @apply bg-white shadow p-5;
  width: 500px;
}
.services-container {
  width: 100%;
  max-width: 750px;
}
input {
  @apply border border-solid border-ideeza-gray-300 outline-none p-2 rounded;
}
.optimize-select {
  @apply border border-solid border-ideeza-gray-300 outline-none p-2 rounded w-full;
  min-width: 100%;
}
</style>
