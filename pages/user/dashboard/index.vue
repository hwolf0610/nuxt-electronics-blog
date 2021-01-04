<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow mb-20">
      <div class="main-contents">
        <h1 class="font-semibold lg:text-5xl">Good morning, {{name}}!</h1>

        <div class="mt-10 lg:flex welcome-container">
          <div class="lg:w-1/2 lg:h-full relative text-white">
            <img src="~/static/images/user-dash-main.png" class="object-center object-contain" alt />
            <div class="absolute top-0 left-0 w-full text-center flex flex-col items-center">
              <h1
                class="font-semibold lg:text-5xl mt-10 mb-5 text-white text-center w-full"
              >Let's get you started</h1>
              <span
                class="font-semibold block text-3xl mb-3 w-full text-center"
              >Now is your time to change the world.</span>
              <span
                class="font-semibold block text-3xl mb-10 w-full text-center"
              >Dream, invent, create.</span>

              <img
                @click="showMyIdeeza=true"
                class="cursor-pointer absolute top-50"
                src="~/static/images/float-ideeza.png"
                alt
              />
            </div>
          </div>
          <div class="lg:w-1/2 md:pl-10">
            <div class="md:flex justify-between items-center pb-5 border-b border-light-gray">
              <h2 class="font-semibold block text-3xl">Last Activity</h2>
              <button
                class="btn pill-button px-10 text-lg"
                @click="viewLastActivity"
              >View last activity</button>
            </div>

            <div class="md:flex justify-between">
              <nuxt-link to="/user/projects" class="flex-1">
                <div class="status-button p-2">
                  <div class="flex items-center">
                    <font-awesome-icon
                      class="mr-6 h-10 text-2xl text-ideeza"
                      :icon="['fas', 'layer-group']"
                    />
                    <span
                      class="text-3xl font-bold text-ideeza-black mb-5 leading-none"
                    >{{lengthofprojects}}</span>
                  </div>
                  <div class="pl-12">
                    <span class="text-ideeza-blue-gray text-lg block">Projects</span>
                  </div>
                </div>
              </nuxt-link>
              <nuxt-link to="/user/profile" class="flex-1">
                <div class="status-button p-2">
                  <div class="flex items-center">
                    <img class="mr-6" src="~/static/icons/users.svg" alt />
                    <span
                      class="text-3xl font-bold text-ideeza-black mb-5 leading-none"
                    >{{activities.contactsmark}}</span>
                  </div>
                  <div class="pl-12">
                    <span class="text-ideeza-blue-gray text-lg block">Contacts</span>
                  </div>
                </div>
              </nuxt-link>
              <nuxt-link to="/user/dashboard" class="flex-1">
                <div class="status-button p-2">
                  <div class="flex items-center">
                    <img class="mr-6" src="~/static/icons/bullseye.svg" alt />
                    <span
                      class="text-3xl font-bold text-ideeza-black mb-5 leading-none"
                    >{{activities.myscore}}</span>
                  </div>
                  <div class="pl-12">
                    <span class="text-ideeza-blue-gray text-lg block">My Score</span>
                  </div>
                </div>
              </nuxt-link>
            </div>

            <div style="overflow: scroll; height:200px">
              <div class="table relative mb-5" v-for="userloginhistory in userloginhistories">
                <div class="table-cell timeline-diaplay"></div>
                <div class="table-cell pl-5">
                  <div>{{new Date(userloginhistory.history.timestamp * 1000)}}</div>
                  <div class="my-1">User Log in</div>
                  <div class="font-semibold">{{name}} logged into a system</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="sm:flex">
          <div class="sm:w-2/3">
            <h1 class="font-semibold lg:text-3xl my-5">World's last innovation</h1>
            <div class="scroll-area" v-if="show">
              <no-ssr>
                <!-- <smooth-scrollbar ref="smooth-scroll-1" :options="{alwaysShowTracks: true}"> -->
                <div class="sm:flex flex-wrap" style="overflow: scroll; height: 600px;">
                  <template>
                    <div class="blog-container md:w-1/3" v-for="(innovation,index) in innovations">
                      <div class="m-1">
                        <nuxt-link to>
                          <div class="mb-8">
                            <img
                              :src="blog_post_url + innovation.postimage"
                              class="object-center object-contain"
                              alt
                              style="height: 200px"
                            />
                          </div>
                        </nuxt-link>
                        <h3 class="font-semibold tex-2xl mb-2" style="height: 100px">{{innovation.article}}</h3>
                        <p>{{innovation.description}}</p>
                        <div class="flex justify-between items-center mt-5">
                          <small>{{new Date(innovation.timestamp*1000).getDate() + ' ' +  months[new Date(innovation.timestamp*1000).getMonth()] + ' ' + new Date(innovation.timestamp*1000).getFullYear()}}</small>
                          <button class="btn btn--ideeza px-2 py-2" @click="readMore">Read more</button>
                        </div>
                      </div>
                      <!-- <div class="m-1" v-else>
                        <div class="flex justify-between items-center mb-5">
                          <small>{{new Date(innovation.timestamp*1000)}}</small>
                          <button class="btn btn--ideeza px-2 py-2" @click="readMore">Read more</button>
                        </div>
                        <h3 class="font-semibold tex-2xl mb-2">{{innovation.article}}</h3>
                        <p>{{innovation.description}}</p>
                        <nuxt-link to>
                          <div class="mt-8">
                            <img
                              :src="'http://192.168.1.162/api/img/blogs/' + innovation.postimage"
                              class="object-center object-contain"
                              alt
                            />
                          </div>
                        </nuxt-link>
                      </div>-->
                    </div>
                  </template>
                  <!-- <li v-for="breed in breeds" :key="breed">
                    <p class="breed button--green">{{breed}}</p>
                  </li>-->
                </div>
                <!-- </smooth-scrollbar> -->
              </no-ssr>
            </div>
          </div>
          <div class="sm:w-1/3">
            <h1 class="font-semibold lg:text-3xl my-5">Top projects</h1>
            <div class="scroll-area">
              <no-ssr>
                <!-- <smooth-scrollbar ref="smooth-scroll-2" :options="{alwaysShowTracks: true}"> -->
                <div class="flex flex-wrap" style="overflow: scroll; height: 600px;">
                  <div class="w-1/2 p-2" v-for="topproject in topprojects">
                    <div class="p-2 border border-solid border-light-gray">
                      <div class="w-full projects-image">
                        <img
                          :src="project_image_url + topproject.project_info.image"
                          class="object-contain object-center w-full"
                          alt
                        />
                        <div class="my-1 flex justify-between items-center">
                          <div class="flex items-center">
                            <font-awesome-icon
                              class="mr-1 h-4 text-ideeza-gold"
                              :icon="['fas', 'star']"
                            />
                            <small class="text-xs">{{topproject.project_info.rate}}</small>
                          </div>

                          <span class="text-xs">{{topproject.project_info.like}} likes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- </smooth-scrollbar> -->
              </no-ssr>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--MyIdeeza Popup-->
    <MyIdeeza v-click-outside="onClickOutside" v-if="showMyIdeeza" />
  </div>
</template>

<script>
import LeftMenu from "~/components/user/common-left-side-menu.vue";
import MyIdeeza from "~/components/user/my-ideeza/new-ideeza.vue";
import axios from "axios";
import innovation from "~/json/innovation.json";
import topprojects from "~/json/topprojects.json";
import activity from "~/json/activity.json";
import apiService from "~/apiService";
import apiServiceWithToken from "~/apiService/have_token.js";

Object.defineProperty(Array.prototype, "chunk_inefficient", {
  value: function(chunkSize) {
    var array = this;
    return [].concat.apply(
      [],
      array.map(function(elem, i) {
        return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
      })
    );
  }
});

export default {
  middleware: "auth",
  layout: "user",
  name: "dashboard-index",
  components: {
    LeftMenu,
    MyIdeeza
  },
  data: function() {
    return {
      showMyIdeeza: false,
      topprojects: [],
      innovations: [],
      activities: activity,
      lengthofprojects: [],
      userloginhistories: [],
      show: true,
      name: "",
      avatar: "",
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'Sepetember',
        'Octobor',
        'November',
        'December'
      ],
      blog_post_url: process.env.blog_post_url,
      project_image_url: process.env.project_image_url
    };
  },
  computed: {
    leftMenu() {
      return this.$store.state.usermenu.openLeftMenu;
    }
  },

  created() {},
  mounted() {
    // let authToken = window.$nuxt.$cookies.get("authToken");
    let authToken = window.$nuxt.$cookies.get("authToken");
    console.log("authToken: ", authToken);
    if (authToken != null) {
      // this.name =
      //   window.$nuxt.$cookies.get("firstname") +
      //   " " +
      //   window.$nuxt.$cookies.get("lastname");
      let firstname = window.$nuxt.$cookies.get("firstname");
      let lastname = window.$nuxt.$cookies.get("lastname");
      let useravatar = window.$nuxt.$cookies.get("useravatar");
      this.name = firstname + " " + lastname;
      this.avatar = useravatar;

      let getallprojectsurl = "/api/project/get_all";
      let getallprojectsData = {
        method: "get",
        url: getallprojectsurl,
        data: null
      };

      apiServiceWithToken(getallprojectsData, response => {
        console.log(response.data);
        console.log(response.data["success"]);
        if (response.data["success"] == true) {
          this.lengthofprojects = response.data["data"].length;
          console.log("projects: ", response.data["data"].genera);
        }
      });

      let getloginhistory = "/api/setting/login_history";

      let getloginhistoryData = {
        method: "get",
        url: getloginhistory,
        data: null
      };

      apiServiceWithToken(getloginhistoryData, response => {
        console.log(response.data);
        console.log(response.data["success"]);
        if (response.data["success"] == true) {
          // this.lengthofprojects = response.data["data"].length;
          this.userloginhistories = response.data["data"];
          console.log("history: ", response.data["data"]);
        }
      });

      let gettopprojectsurl = "/api/project/top_projects";

      let gettopprojectsData = {
        method: "get",
        url: gettopprojectsurl,
        data: null
      };

      apiServiceWithToken(gettopprojectsData, response => {
        console.log("topprojectData: ", response.data);
        console.log(response.data["success"]);
        if (response.data["success"] == true) {
          // this.lengthofprojects = response.data["data"].length;
          this.topprojects = response.data["data"];
          console.log("history: ", response.data["data"]);
        }
      });

      let getblogsurl = "/api/get_blogs";

      let getblogsurlData = {
        method: "get",
        url: getblogsurl,
        data: null
      };

      apiServiceWithToken(getblogsurlData, response => {
        console.log("blogsData: ", response.data);
        console.log(response.data["success"]);
        if (response.data["success"] == true) {
          // this.lengthofprojects = response.data["data"].length;
          this.innovations = response.data["data"];
          console.log("innovations: ", this.innovations);
        }
      });
    } else {
      this.$router.push("/");
    }
  },
  methods: {
    onClickOutside() {
      this.showMyIdeeza = false;
    },
    showMyProjects() {
      alert("Hello");
    },
    showMyProfile() {},
    readMore() {
      alert("Read More");
    },
    viewLastActivity() {
      window.location.reload();
    }
  }
};
</script>

<style scoped>
.blog-image-container {
  width: 315px;
  height: 215px;
}
.projects-image {
  /*height: 170px;*/
}
.scroll-area {
  height: 430px;
}
.blog-container {
  @apply mt-2;
}
.status-button {
  @apply p-3 m-3 border border-solid border-ideeza cursor-pointer rounded;
}
/deep/ .scrollbar-thumb {
  @apply bg-ideeza opacity-75;
}
.top-50 {
  top: 50%;
}
</style>
