<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />
    <!-- Main Contents -->
    <div class="flex-grow">
      <div class="main-contents md:flex">
        <div class="detail-main md:w-2/3">
          <div class="lg:flex justify-between items-center pb-3">
            <nuxt-link to="" class="border rounded-lg border-pink-600 px-8 py-3 text-pink-600">Go Back</nuxt-link>
          </div>
          <!--Panel Menu-->
          <div
            class="flex justify-between flex-col lg:flex-row border-b border-gray-400 pl-5 pr-5 lg:pl-0 lg:pr-0 pb-3"
          >
            <div
              class="text-xl font-bold m-3 lg:m-0 text-center lg:text-left"
            >
            <div v-for="Project in Projects" :key="Project.id">
              <div v-if="Project.id == $route.query.id ">
                 <!-- Lamborghini Aventado Project -->
                 {{Project.projecttitle}}
                </div></div>
           </div>
            <div class="flex flex-wrap items-center">
              <span class="panel-menu text-center">
                <nuxt-link to="/user/pro" >
                <font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'bolt']" />Electronics
                </nuxt-link>
              </span>
              <span class="ml-5 panel-menu text-center active">
                <nuxt-link to="/user/pro" >
                <font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'code']" />Code
                </nuxt-link>
              </span>
              <span class="ml-5 panel-menu text-center">
                <nuxt-link to="/user/pro" >
                <font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'cube']" />Cover
                </nuxt-link>
              </span>
               
              <nuxt-link to="/user/pro" class="ml-5 panel-menu text-center">
                <CustomizeIcon class="fill-current mr-1 w-4" />Customize
              </nuxt-link>
            </div>
          </div>

          <div class="my-5 bg-white shadow">
            <div class="">
              <img src="~/static/images/My_project_cover.png">
            </div>

            <div class="p-3 lg:flex justify-between items-center">
              <div class="relative" v-click-outside="onClickOutside">
                <div class="btn btn--ideeza px-4 py-1 mr-3 inline-block" @click="focus = !focus">
                  Share Inventions
                  <font-awesome-icon class="ml-3 h-6 text-xl" :icon="['fas', 'star']" />
                </div>

                <div class="btn btn--ideeza px-4 py-1 mr-3 inline-block" @click="focus = !focus">
                  Join this project
                  <font-awesome-icon class="ml-3 h-6 text-xl" :icon="['fas', 'star']" />
                </div>

                <div class="btn btn--ideeza px-4 py-1 mr-3 inline-block" @click="focus = !focus">
                  Track the order
                </div>
                
                <div class="inline-block text-gray-400">
                  <font-awesome-icon class="mr-2 h-3 cursor-pointer" :icon="['fas', 'eye']" /> 2.6K
                  <font-awesome-icon class="ml-2 h-3 text-xl" :icon="['fas', 'star']" /> 56
                </div>    
              </div>

              <div class="flex items-center mt-5 lg:mt-0" v-for="Project in Projects"  v-if="Project.id == $route.query.id">
                <div>
                  <nuxt-link
                    to="/user/order-tracking/making-product"
                    class="btn btn-normal btn--ideeza font-semibold px-5 py-2"
                  >Track the order</nuxt-link>
                </div>
                <div class="mx-5 text-sm text-gray-500 font-semibold">
                  <font-awesome-icon class="mr-1 h-4" :icon="['fas', 'eye']" />{{Project.Cost}}
                </div>
                <div>
                  <button class="btn btn-normal font-semibold p-2 text-gray-500">
                    <font-awesome-icon class="mr-1 h-4" :icon="['fas', 'star']" />{{Project.mark}}
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

            <p class="text-gray-500 text-md p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>


            <div class="flex mt-4">
                <div class="p-3">
                  <div class="w-16 h-16 rounded-full overflow-hidden">
                    <img src="https://randomuser.me/api/portraits/women/23.jpg">
                  </div>
                </div>
                <div>
                  <div class="p-3 bg-gray-300 rounded-lg">
                      <div class="flex">
                        <div class="flex-1">
                          <h3 class="text-gray-700 font-bold text-xl">Mike Tayson</h3>
                        </div>
                        <div class="flex-1 text-right">
                          3 min ago
                        </div>
                      </div>
                      <p class="text-gray-700 text-md">Technican at Google</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud</p>
                      <div class=" py-3">
                          <span class="inline-block">
                            <img src="~/static/images/like-min.png" class="inline-block mr-2"> 92 Likes</span>
                          <span class="inline-block">
                            <img src="~/static/images/comment.png" class="inline-block mr-2">92 comments</span>
                      </div>
                  </div>
                  <div class="flex mt-4">
                    <div class="p-3">
                      <div class="w-16 h-16 rounded-full overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/women/21.jpg">
                      </div>
                    </div>
                    <div>
                      <div class="p-3 bg-gray-300 rounded-lg">
                          <div class="flex">
                              <div class="flex-1">
                                <h3 class="text-gray-700 font-bold text-xl">Mike Tayson</h3>
                              </div>
                              <div class="flex-1 text-right">
                                3 min ago
                              </div>
                            </div>
                          <p class="text-gray-700 text-md">Technican at Google</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.</p>
                          <div class=" py-3">
                          <span class="inline-block">
                            <img src="~/static/images/like-min.png" class="inline-block mr-2"> 92 Likes</span>
                          <span class="inline-block">
                            <img src="~/static/images/comment.png" class="inline-block mr-2">92 comments</span>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex mt-4">
                    <div class="p-3">
                      <div class="w-16 h-16 rounded-full overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/women/23.jpg">
                      </div>
                    </div>
                    <div>
                      <div class="p-3 bg-gray-300 rounded-lg">
                          <div class="flex">
                            <div class="flex-1">
                              <h3 class="text-gray-700 font-bold text-xl">Mike Tayson</h3>
                            </div>
                            <div class="flex-1 text-right">
                              3 min ago
                            </div>
                          </div>
                          <p class="text-gray-700 text-md">Technican at Google</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.</p>
                          <div class=" py-3">
                          <span class="inline-block">
                            <img src="~/static/images/like-min.png" class="inline-block mr-2"> 92 Likes</span>
                          <span class="inline-block">
                            <img src="~/static/images/comment.png" class="inline-block mr-2">92 comments</span>
                      </div>
                      </div>
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
import LeftMenu from "~/components/user/common-left-side-menu.vue";
import RightSideBar from "~/components/user/projects/right-bar.vue";
import ShareInternal from "~/components/share/share-internal.vue";
import ShareExternal from "~/components/share/share-external.vue";
import CustomizeIcon from "~/components/partials/icons/customize-icon.vue";

import Projects from "~/data/UserProjectApi.json";
import axios from "axios";

export default {
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
      externalShare: false
    };
  },
  created: function() {
    axios.get("http://127.0.0.1:5000/api/getblog").then(response => {
      // console.log("response :", response.data)
      this.randomNumber = response.data;
      console.log(this.randomNumber);
    });
    console.log(this.randomNumber);
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
        this.description=e.target.value;
        console.log(this.description);
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
