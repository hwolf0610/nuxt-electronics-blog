<template>
  <div class="project-right-bar lg:ml-5 relative">
    <div class="text-right block my-5">
      <nuxt-link to="/user/add-service" class="btn btn-normal btn--ideeza px-6 py-2">Add service +</nuxt-link>
    </div>

    <div class="flex justify-between items-center mt-10">
      <div class="track-heading">{{title}}</div>
      <div class="flex items-center">
        <font-awesome-icon
          @click="prev"
          class="mr-2 h-4 text-gray-500 text-lg hover:text-gray-800 cursor-pointer"
          :icon="['fas', 'chevron-left']"
        />
        <font-awesome-icon
          @click="next"
          class="h-4 text-gray-500 text-lg hover:text-gray-800 cursor-pointer"
          :icon="['fas', 'chevron-right']"
        />
      </div>
    </div>

    <!--Electronics-->
    <div v-if="tabNumber === 0" class="mt-10">
      <Progress width="60" />
      <h1 class="font-semibold my-5">Manufacturers working on project</h1>
      <div class="mb-10" v-for="Project in articleArray" >
        <div class="flex justify-between items-center" v-if="Project.connector.kind == 'Electronics' ">
          <div class="flex items-center">
            <div class="mr-2">
              <img class="avatar" :src=" avata_img_url +Project.connector.profile" alt />
            </div>
            <div>
              <span class="block font-semibold text-sm">{{Project.connector.name}}</span>
              <span class="block text-sm text-gray-500">{{Project.connector.consultantKind}}</span>
            </div>
          </div>
          <div class="flex items-center">
            <div class="text-sm text-right mr-5">
              <span class="text-ideeza block font-semibold">{{Project.connector.consultantname}}</span>
              <span class="text-gray-600 text-xs block">{{Project.connector.state}}</span>
            </div>
            <nuxt-link  :to="{ path: '/user/messages', query: { id: Project.connector.id}}">
              <font-awesome-icon
                class="mr-2 h-6 text-ideeza text-xl cursor-pointer"
                :icon="['fas', 'envelope']"
              />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <!--Freelancers-->
    <div v-if="tabNumber === 1" class="mt-10">
      <Progress width="20" />
      <h1 class="font-semibold my-5">Freelancers working on project</h1>
      <div class="mb-10" v-for="Project in articleArray" >
        <div class="flex justify-between items-center" v-if="Project.connector.kind == 'Freelancers' ">
          <div class="flex items-center">
            <div class="mr-2">
              <img class="avatar" :src=" avata_img_url +Project.connector.profile" alt />
            </div>
            <div>
              <span class="block font-semibold text-sm">{{Project.connector.name}}</span>
              <span class="block text-sm text-gray-500">{{Project.connector.consultantKind}}</span>
            </div>
          </div>
          <div class="flex items-center">
            <div class="text-sm text-right mr-5">
              <span class="text-ideeza block font-semibold">{{Project.connector.consultantname}}</span>
              <span class="text-gray-600 text-xs block">{{Project.connector.state}}</span>
            </div>
            <nuxt-link  :to="{ path: '/user/messages', query: { id: Project.connector.id}}">
              <font-awesome-icon
                class="mr-2 h-6 text-ideeza text-xl cursor-pointer"
                :icon="['fas', 'envelope']"
              />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <!--Parts-->
    <div v-if="tabNumber === 2" class="mt-10">
      <Progress width="80" />
      <h1 class="font-semibold my-5">People working on project</h1>
      <div class="mb-10" v-for="Project in articleArray" >
        <div class="flex justify-between items-center" v-if="Project.connector.kind == 'Parts' ">
          <div class="flex items-center">
            <div class="mr-2">
              <img class="avatar" :src="avata_img_url+Project.connector.profile" alt />
            </div>
            <div>
              <span class="block font-semibold text-sm">{{Project.connector.name}}</span>
              <span class="block text-sm text-gray-500">{{Project.connector.consultantKind}}</span>
            </div>
          </div>
          <div class="flex items-center">
            <div class="text-sm text-right mr-5">
              <span class="text-ideeza block font-semibold">{{Project.connector.consultantname}}</span>
              <span class="text-gray-600 text-xs block">{{Project.connector.state}}</span>
            </div>
            <nuxt-link  :to="{ path: '/user/messages', query: { id: Project.connector.id}}">
              <font-awesome-icon
                class="mr-2 h-6 text-ideeza text-xl cursor-pointer"
                :icon="['fas', 'envelope']"
              />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- {{articleArray}}--{{projectidd}} -->
  </div>
</template>

<script>
import Progress from "~/components/user/order-tracking/progress-bar.vue";

import Projects from "~/data/UserProjectApi.json";
import apiService from "~/apiService/get_param.js";

 import axios from 'axios';
export default {
  name: "projects-right-bar",
  data: function() {
    return {
      Projects: Projects.myprojectconnect,
      tabNumber: 0,
      titleList: ["Electronics", "Freelancers", "Parts"],
      geturl: "/api/project/get_connectors",
      articleArray: [],
      randomNumber: [],
      projectidd:null,
      avata_img_url:process.env.avatar_base_url,

    };
  },
   mounted() {

// axios.get('http://192.168.1.162/api/project/get_connectors', {
//     params: {
//       projectid: this.projectidd
//     }
//   })
//   .then(function (response) {
//     console.log("response:", response);
//     this.randomNumber = response;
//     this.articleArray = Object.values(response.data.data);
//   })

      this.projectidd = window.$nuxt.$cookies.get("userprojectid");

     const params = {	projectid: this.projectidd,};
    let sendData = {
      url: this.geturl,
      param: params
    };

    apiService(sendData, response => {
      console.log(response.data);
      this.randomNumber = response.data;
      this.articleArray = Object.values(response.data.data);
    });
  },
  components: {
    Progress
  },
  computed: {
    title() {
      return this.titleList[this.tabNumber];
    }
  },
  methods: {
    prev() {
      if (this.tabNumber > 0) {
        this.tabNumber -= 1;
      }
    },
    next() {
      if (this.tabNumber < 2) {
        this.tabNumber += 1;
      }
    }
  }
};
</script>

<style scoped>
.track-heading {
  @apply text-2xl font-semibold relative;
  width: fit-content;
}
.track-heading:before {
  @apply border-b-4 border-solid border-ideeza left-0;
  content: "";
  position: absolute;
  width: 80px;
  bottom: -10px;
}
.avatar {
  @apply rounded-full;
  width: 45px;
  height: 45px;
}
</style>
