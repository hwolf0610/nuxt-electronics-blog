<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow">
      <div class="main-contents">
        <div class="bg-white shadow-md border-solid border-gray-400 overflow-y-auto p-3 md:p-10">
          <div
            class="flex items-center justify-between pb-3 border-b-2 border-solid border-ideeza-dark"
          >
            <div class="flex items-center">
              <span class="font-semibold text-xl inline-block">Services</span>
            </div>

            <!-- <Search placeholder="search services..." /> -->
            <div
              class="search-container flex w-fit-content bg-white justify-center items-center content-center"
            >
              <div class="h-12 relative w-10">
                <font-awesome-icon
                  class="ml-1 h-4 text-gray-400 absolute-center-h-v"
                  :icon="['fas', 'search']"
                />
              </div>
              <input
                placeholder="search services..."
                class="bg-white outline-none h-8 text-gray-800 pr-3"
                v-model="searchTerm"
                v-on:input="search"
              />
              <!-- {{searchTerm}} -->
            </div>
          </div>

          <div class="my-3 lg:flex justify-between text-sm">
            <div class="flex mb-2 justify-between md:justify-start">
              <div
                class="flex items-center p-1 border border-solid border-ideeza-gray-700 md:mr-5 mr-1"
              >
                <span class="mr-3">Type:</span>
                <select class="border-0" @change="selectkindman" v-model="kindman">
                  <option>Patents</option>
                  <option>Clouds</option>
                  <option>Freelancers</option>
                </select>
              </div>
              <div class="flex items-center p-1 border border-solid border-ideeza-gray-700">
                <span class="mr-3">Sort By:</span>
                <select class="border-0" v-model="kindmanworkinfo" @change="selectkindmanworkinfo">
                  <option>Cost</option>
                  <option>Rating</option>
                  <option>Work time</option>
                  <option>Address</option>
                </select>
              </div>
            </div>
            <div class="flex md:block justify-between">
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
            <div class="mb-32 lg:mb-20 lg:flex" v-for="(Service, index ) in articleArray">
              <div class="md:flex w-full">
                <div class="mb-5 lg:mb-0 lg:mr-5">
                  <img class="avatar rounded-full mx-auto" :src="avata_img_url+ Service.profile" />
                </div>
                <div class="flex-1">
                  <div class="md:flex justify-between items-center">
                    <div class="flex-1 md:flex items-center">
                      <h1
                        class="text-lg font-semibold block md:inline-block mr-5 text-center md:text-left"
                      >{{Service.name}}</h1>
                      <span
                        v-if="index == 0"
                        class="text-center block md:text-left md:inline mb-2 md:mb-0"
                      >
                        <button
                          class="btn btn-normal btn--ideeza px-5 py-2"
                          @click="showprofiledetail"
                        >Available</button>
                      </span>
                    </div>
                    <div class="flex justify-center md:justify-start items-center">
                      <div
                        class="py-1 px-2 border border-solid border-light-gray mr-3 md:flex-none"
                      >{{Service.time}} Days</div>
                      <div
                        class="py-1 px-2 border border-solid border-light-gray mr-3 md:flex-none"
                      >{{Service.cost}}</div>
                      <div
                        v-if="index==0"
                        @click="requestQuote = !requestQuote"
                        :class="{'btn-green': quoteSend}"
                        class="py-1 px-2 border border-solid border-light-gray md:flex-none flex-1"
                      >Request Quote</div>
                    </div>
                  </div>
                  <div class="flex-1 my-5 flex justify-center md:justify-start items-center">
                    <h2 class="inline-block mr-5 font-semibold text-lg">Code</h2>
                    <span v-for="index in  Service.score" :key="index">
                      <font-awesome-icon class="h-3 text-ideeza-gold" :icon="['fas', 'star']" />
                    </span>
                    <span class="ml-3">({{Service.score}})</span>
                  </div>
                  <div class="text-ideeza-black" v-if="flag == 1">{{Service.shortdescription}}</div>
                  <div class="text-ideeza-black" v-else>{{Service.description}}</div>

                  <div class="flex mt-5 justify-center md:justify-start">
                    <button class="btn btn--ideeza-dark px-3 py-1 mr-3">{{Service.mainCore1}}</button>
                    <button class="btn btn--ideeza-dark px-3 py-1 mr-3">{{Service.mainCore2}}</button>
                    <button class="btn btn--ideeza-dark px-3 py-1 mr-3">{{Service.mainCore3}}</button>
                  </div>
                </div>
              </div>
            </div>
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
    <!-- {{articleArrayaxios}} -->
  </div>
</template>

<script>
import LeftMenu from "~/components/user/common-left-side-menu.vue";
import Search from "~/components/form/search.vue";
import CheckBox from "~/components/form/checkbox-dark.vue";

import Services from "~/data/UserProjectApi.json";

import apiService from "~/apiService/get_param.js";

export default {
  middleware: "auth",
  layout: "user",
  name: "manufacturers-index",
  data: function() {
    return {
      searchTerm: "",
      kindman: "Patents",
      kindmanworkinfo: "Cost",
      flag: 1,
      Services: Services.Result_info,
      articleArray: [],
      articleArrayrout: [],
      requestQuote: false,
      quoteSend: false,
      showOptimize: false,
      geturl: "/api/project/get_services",
      articleArrayaxios: [],
      randomNumber: [],
      projectidd: null,
      avata_img_url: process.env.avatar_base_url
    };
  },
  mounted() {
    console.log('params: ', this.$route.params);
    this.projectidd = window.$nuxt.$cookies.get("userprojectid");
    const params = { projectid: this.projectidd };
    let sendData = {
      url: this.geturl,
      param: params
    };

    apiService(sendData, response => {
      console.log(response.data);
      this.randomNumber = response.data;
      this.articleArrayaxios = Object.values(response.data.data);

      this.articleArrayaxios.map(item => {
        this.articleArrayrout.push(item.service);
        this.articleArray.push(item.service);
      });
    });
  },
  created: function() {
    // this.Services.map(item => {
    //   this.articleArray.push(item);
    // });
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
  methods: {
    showprofiledetail(e) {
      if (this.flag == 1) {
        this.flag = 2;
      } else if (this.flag == 2) {
        this.flag = 1;
      }
    },
    selectkindman(e) {
      this.articleArray = [];
      // alert(e.target.value)
      this.kindman = e.target.value;
      let article_list = this.articleArrayrout;
      article_list.map(element => {
        if (element.type == e.target.value) {
          this.articleArray.push(element);
        }
      });
    },
    selectkindmanworkinfo(e) {
      //  alert(e.target.value)
      this.kindmanworkinfo = e.target.value;
      let article_list = this.articleArray;
      let S_index = e.target.value;
      switch (S_index) {
        case "Cost":
          article_list.sort(function(a, b) {
            var x = a.cost;
            var y = b.cost;
            if (x < y) {
              return -1;
            }
            if (x > y) {
              return 1;
            }
            return 0;
          });

          // console.log("sorted : ", article_list);
          break;
        case "Rating":
          article_list.sort(function(a, b) {
            var x = a.score;
            var y = b.score;
            if (x < y) {
              return -1;
            }
            if (x > y) {
              return 1;
            }
            return 0;
          });

          // console.log("sorted : ", article_list);
          break;
        case "Work time":
          article_list.sort(function(a, b) {
            var x = a.time;
            var y = b.time;
            if (x < y) {
              return -1;
            }
            if (x > y) {
              return 1;
            }
            return 0;
          });

          // console.log("sorted : ", article_list);
          break;

        case "Address":
          article_list.sort(function(a, b) {
            var x = a.address.toLowerCase();
            var y = b.address.toLowerCase();
            if (x < y) {
              return -1;
            }
            if (x > y) {
              return 1;
            }
            return 0;
          });

          // console.log("sorted : ", article_list);
          break;

        default:
          break;
      }
    },
    search(e) {
      this.articleArray = [];

      let article_list = this.articleArrayrout;
      article_list.map(element => {
        const a_text = element.name.toLowerCase() + "";
        const b_text = e.target.value.toLowerCase() + "";
        // const b_text = "master"

        let s_index = a_text.indexOf(b_text) + 1;
        // console.log("search ", a_text, b_text, s_index);

        if (s_index > 0 || e.target.value == "") {
          this.articleArray.push(element);
        }
      });

      console.log("search array :", this.articleArray, e.target.value);
    },
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
.quote-popup {
  @apply bg-white shadow p-5;
  width: 500px;
  max-width: 95vw;
}
select {
  @apply text-ideeza;
}
option {
  @apply text-ideeza-black;
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

.search-container {
  height: fit-content;
}
</style>
