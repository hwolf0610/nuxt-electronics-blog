<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />
    <!-- Main Contents -->
    <div class="flex-grow">
      <div class="main-contents md:flex">
        <div class="detail-main md:w-2/3">
          <!--Panel Menu-->
          <div
            class="flex justify-between flex-col lg:flex-row border-b border-gray-400 pl-5 pr-5 lg:pl-0 lg:pr-0 pb-3"
          >
            <div class="text-xl font-bold m-3 lg:m-0 text-center lg:text-left">
              <div v-for="Project in articleArray">
                <div v-if="Project.project_id == $route.query.id ">
                  <!-- Lamborghini Aventado Project -->
                  {{Project.title}}
                </div>
              </div>
            </div>
            <div class="flex flex-wrap items-center">
              <span class="panel-menu text-center">
                <nuxt-link to="/user/pro">
                  <font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'bolt']" />Electronics
                </nuxt-link>
              </span>
              <span class="ml-5 panel-menu text-center active">
                <nuxt-link to="/user/pro">
                  <font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'code']" />Code
                </nuxt-link>
              </span>
              <span class="ml-5 panel-menu text-center">
                <nuxt-link to="/user/pro">
                  <font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'cube']" />Cover
                </nuxt-link>
              </span>
              <nuxt-link to="/user/pro" class="ml-5 panel-menu text-center">
                <font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'wrench']" />General
              </nuxt-link>
              <nuxt-link to="/user/pro" class="ml-5 panel-menu text-center">
                <CustomizeIcon class="fill-current mr-1 w-4" />Customize
              </nuxt-link>
            </div>
          </div>

          <div class="my-5 bg-white shadow">
            <div v-for="Project in articleArray">
              <div v-if="Project.project_id == $route.query.id ">
                <img
                  class="w-full"
                  :src=" project_img_url + Project.products[0].product_image"
                />
              </div>
            </div>

            <div class="py-5 px-5 lg:flex justify-between items-center">
              <div class="relative" v-click-outside="onClickOutside">
                <div class="btn btn--ideeza px-6 py-1 mr-5" @click="focus = !focus">
                  Share Inventions
                  <font-awesome-icon class="ml-5 h-6 text-xl" :icon="['fas', 'star']" />
                </div>
                <div class="z-50 absolute bg-white shadow-md py-2 px-1" v-show="focus">
                  <div
                    @click="showInternalShare"
                    class="px-2 py-3 text-ideeza-black hover:text-ideeza block cursor-pointer"
                  >Share in news feed</div>
                  <div
                    @click="showExternalShare"
                    class="px-1 py-2 text-ideeza-black hover:text-ideeza block cursor-pointer"
                  >Share external</div>
                </div>
              </div>

              <div
                class="flex items-center mt-5 lg:mt-0"
                v-for="Project in articleArray"
                v-if="Project.project_id == $route.query.id"
              >
                <div>
                  <nuxt-link
                    to="/user/order-tracking/making-product"
                    class="btn btn-normal btn--ideeza font-semibold px-5 py-2"
                  >Track the order</nuxt-link>
                </div>
                <div class="mx-5 text-sm text-gray-500 font-semibold">
                  <font-awesome-icon class="mr-1 h-4" :icon="['fas', 'eye']" />
                  {{Project.products[0].cost}}
                </div>
                <div>
                  <button class="btn btn-normal font-semibold p-2 text-gray-500">
                    <font-awesome-icon class="mr-1 h-4" :icon="['fas', 'star']" />
                    {{Project.products[0].rating}}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="my-10 bg-white shadow">
            <div
              class="flex py-5 px-5 border-b border-solid border-gray-300 justify-between items-center w-full"
            >
              <span class="text-lg font-semibold text-ideeza">Description</span>
              <button @click="EditTextarea1" class="btn btn-small px-3 text-ideeza">
                <font-awesome-icon class="mr-2 h-3 align-baseline inline" :icon="['fa', 'pen']" />Edit
              </button>
            </div>

            <div class="py-10 px-5 text-gray-600" v-if="tab===0">
              <div class="lg:flex" v-for="Project in articleArray">
                <div
                  class="lg:flex"
                  v-if="Project.project_id == $route.query.id "
                >{{Project.description}}</div>
              </div>
            </div>
            <div class="py-10 px-5 text-gray-600 w-full">
              <div v-if="tab===1" v-for="Project in articleArray">
                <textarea
                  name
                  id
                  cols="30"
                  rows="10"
                  class="w-full border-light-gray border border-solid p-3"
                  v-if="Project.project_id == $route.query.id "
                  @change="saveDescription"
                >{{Project.description}}</textarea>
              </div>

              <div class="mt-5 flex justify-end">
                <button class="btn pill-button--ideeza px-5 py-1" @click="saveDescription">Save</button>
              </div>
            </div>
          </div>
        </div>

        <!--Right Sidebar-->
        <RightSideBar class="flex-grow md:w-1/3" />
      </div>
    </div>
    <ShareInternal v-if="internalShare" @close="closeShareInternal" />
    <ShareExternal v-if="externalShare" @close="closeShareExternal" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";

import LeftMenu from "~/components/user/common-left-side-menu.vue";
import RightSideBar from "~/components/user/projects/right-bar.vue";
import ShareInternal from "~/components/share/share-internal.vue";
import ShareExternal from "~/components/share/share-external.vue";
import CustomizeIcon from "~/components/partials/icons/customize-icon.vue";

import Projects from "~/data/UserProjectApi.json";

import apiService from "~/apiService/have_token.js";
import apiService2 from "~/apiService/have_data.js";

export default {
  middleware: "auth",
  layout: "user",
  name: "building-index",
  components: {
    LeftMenu,
    RightSideBar,
    ShareInternal,
    ShareExternal,
    CustomizeIcon
  },
  data: function() {
    return {
      Projects: Projects.firstproject,
      tab: 0,
      mainDropDownActive: false,
      description: " ",
      currentMenu: {},
      storeCurrentMenu: null,
      menuChildren: null,
      searchVal: null,
      focus: null,
      internalShare: false,
      externalShare: false,
      geturl: "/api/project/get_all",
      geturl2: "/api/project/update_description",
      articleArray: [],
      randomNumber: {},
      project_img_url:process.env.project_image_url,

    };
  },
  created: function() {},
  mounted() {
    window.$nuxt.$cookies.set("userprojectid", this.$route.query.id);

    let sendData = {
      method: "get",
      url: this.geturl,
      data: null
    };

    apiService(sendData, response => {
      console.log(response.data);
      this.randomNumber = response.data;
      this.articleArray = Object.values(response.data.data);
    });
  },
  computed: {
    leftMenu() {
      return this.$store.state.usermenu.openLeftMenu;
    }
  },
  methods: {
    EditTextarea1() {
      this.tab = 1;
      for (const [key, value] of Object.entries(this.Projects)) {
        console.log(key, value.id);
        if (this.$route.query.id == value.id) {
          this.description = value.Description;
          console.log("id_:", value.id);
        }
      }
    },
    onClickOutside(event, el) {
      this.focus = false;
    },
    saveDescription(e) {
      if (this.description === "") {
        this.$notify({
          group: "error",
          type: "error",
          text: "Please fill in the description"
        });
      } else {
        this.tab = 0;
        this.description = e.target.value;
        console.log("change description:",this.description);
        console.log("change idid description:",this.$route.query.id);

        let rouu = this.$route.query.id
        let description = e.target.value;

        const formData = new FormData();
        formData.set("project_id", rouu);
        formData.set("description", description);
        let sendData = {
          method: "post",
          url: this.geturl2,
          data: formData
        };
        apiService2(sendData, response => {

          console.log(response);
          this.articleArray.map(item=>{
            if(item.project.id == this.$route.query.id)
              {
                item.description = e.target.value
              }
          })

        });
      }
    },
    closeShareInternal() {
      this.internalShare = false;
    },
    closeShareExternal() {
      this.externalShare = false;
    },
    showInternalShare() {
      this.focus = false;
      this.internalShare = true;
    },
    showExternalShare() {
      this.focus = false;
      this.externalShare = true;
    }
  }
};
</script>

<style scoped>
.detail-main {
  width: 100%;
  max-width: 1100px;
}

.panel-menu {
  @apply inline-block font-semibold text-gray-700 cursor-pointer;
}
.panel-menu.active {
  @apply text-ideeza;
}
.panel-menu:hover {
  @apply text-ideeza;
}
.panel-menu-icon {
  height: 11px;
  display: inline-block;
}
.tab.active {
  @apply text-ideeza;
}
@screen lg {
  .builder-panel {
    width: 100%;
    max-width: 1235px;
  }
}
</style>
