<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow" v-for="info in articleArray" v-if="info.id == $route.query.id">
      <div class="main-contents p-5">
        <div class="md:flex text-black justify-between mb-5">
          <h1 class="font-bold text-3xl">Project: {{info.title}}</h1>
          <button
            class="bg-ideeza-dark px-3 py-2 text-white"
            @click.self="$router.push('/technician/tracking')"
          >Back</button>
        </div>
        <div class="md:flex text-ideeza-dark mb-5 items-center font-semibold justify-between">
          <div class="md:flex items-center">
            <img
              src="https://randomuser.me/api/portraits/women/20.jpg"
              class="h-10 w-10 rounded-full mr-5"
            />
            <label>Michael Scott</label>
          </div>
          <button class="bg-ideeza px-3 py-2 text-white">Complete project</button>
        </div>
        <div class="md:flex">
          <div class="w-4/6 bg-white p-5 border-ideeza border mb-5 rounded mr-2">
            <h1 class="text-xl font-bold text-ideeza mb-3">Project Description</h1>
            <p class="text-gray-500">{{info.description}}</p>
          </div>
          <div class="w-2/6 bg-white p-5 border-ideeza border mb-5 rounded">
            <div class="flex-grow">
              <div class>Attachments</div>
              <div class="bg-white">
                <span class="block text-xs">3 pics attached</span>
                <div class="flex flex-wrap attached-images-wrapper mt-2">
                  <span v-for="image in info.attach">
                    <img :src="project_img_url + image.image" />
                  </span>
                  <img src="https://picsum.photos/200" alt />
                </div>
                <div class="mt-5">Link attached:</div>
                <div class="text-xs">
                  <a class="text-blue-500" href="https://google.com">https://google.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <simple-table :searchbox="false" :add="false" :header="true" title="Tasks">
          <template v-slot:header>
            <button class="font-bold text-sm mr-3 text-ideeza-dark">Delete</button>
            <button class="font-bold text-sm mr-3 text-ideeza-dark">Print</button>
            <button class="font-bold text-sm mr-3 text-ideeza-dark">Export</button>
          </template>
          <template v-slot:th>
            <th class="border-t border-b border-blue-300 w-2/12 text-ideeza-dark p-3">
              <!-- <input type="checkbox" id="ad" v-model="selected" @change="selectall" /> -->
              <label for="ad">User name</label>
              <!-- <font-awesome-icon
                class="text-sm mt-2 ml-1 text-green-300"
                :icon="['fas', 'arrow-down']"
              />-->
            </th>
            <th class="border-t border-b border-blue-300 w-2/12 text-ideeza-dark p-3">
              Project name
              <!-- <font-awesome-icon
                class="text-sm mt-2 ml-1 text-green-300"
                :icon="['fas', 'arrow-down']"
              />-->
            </th>
            <th class="border-t border-b border-blue-300 w-2/12 text-ideeza-dark p-3 text-center">
              Service Providers
              <!-- <font-awesome-icon
                class="text-sm mt-2 ml-1 text-green-300"
                :icon="['fas', 'arrow-down']"
              />-->
            </th>
            <th class="border-t border-b border-blue-300 w-2/12 text-ideeza-dark p-3">
              Deadline
              <!-- <font-awesome-icon
                class="text-sm mt-2 ml-1 text-green-300"
                :icon="['fas', 'arrow-down']"
              />-->
            </th>
            <th class="border-t border-b border-blue-300 w-2/12 text-ideeza-dark p-3">
              Completed
              <!-- <font-awesome-icon
                class="text-sm mt-2 ml-1 text-green-300"
                :icon="['fas', 'arrow-down']"
              />-->
            </th>
            <th class="border-t border-b border-blue-300 w-2/12 text-ideeza-dark p-3"></th>
          </template>
          <tr
            class="flex w-full mb-4"
            v-for="task in articleArray2"
            @click="taskdetailtrue(task.id)"
          >
            <td class="w-2/12 text-ideeza-dark font-semibold">
              <div class="flex">
                <div class="flex" @click.stop>
                  <!-- <input type="checkbox" :id="task.id" v-model="task.selected" />
                  <label :for="task.id"></label>-->
                  <img :src="avata_img_url +useravatar" class="h-10 w-10 rounded-full mr-2" />

                  <label>{{username}}</label>
                </div>
              </div>
            </td>
            <td class="w-2/12 text-sm text-ideeza-dark font-semibold">{{task.name}}</td>
            <td class="w-2/12 text-sm text-ideeza-dark text-center">
              <img
                v-for="image in task.assigned_user"
                :src="avata_img_url + image.avatar"
                class="avatar"
              />
            </td>
            <td class="w-2/12 text-sm text-ideeza-dark font-semibold pl-2 text-left">
              <div class="ml-2">{{ts.toLocaleDateString(task.end - task.start)}}</div>
            </td>
            <td class="w-2/12 text-sm text-ideeza-dark font-semibold pl-2 text-left">
              <div class="ml-5">{{(task.end - task.start)/100000000}}%</div>
            </td>
            <td class="w-2/12 text-sm text-ideeza-dark font-semibold pl-2 text-left">
              <!-- <font-awesome-icon
                class="text-xl mt-2 ml-4 text-green-300 float-right"
                :icon="['fa', 'grip-vertical']"
              />-->
            </td>
          </tr>
        </simple-table>
        <detail-task
          @onClose="detailTask=false"
          @onEdit="detailTask=false;editTask=true"
          v-if="detailTask"
          @complete="detailTask=false;completeTask=true"
        />
        <complete-task @onClose="completeTask=false" v-if="completeTask" />
      </div>
    </div>
  </div>
</template>
<script>
import LeftMenu from "~/components/technician/common-left-side-menu.vue";
import SimpleTable from "~/components/reusables/Table.vue";
import DetailTask from "~/components/technician/management/detail-task.vue";
import CompleteTask from "~/components/technician/management/complete-task.vue";

import apiService from "~/apiService/have_token.js";
import apiService2 from "~/apiService/get_param.js";

export default {
  layout: "user",
  components: {
    LeftMenu,
    SimpleTable,
    DetailTask,
    CompleteTask
  },
  mounted() {
    this.username =
      window.$nuxt.$cookies.get("firstname") +
      " " +
      window.$nuxt.$cookies.get("lastname");
    this.useravatar = window.$nuxt.$cookies.get("useravatar");

    this.projectidd = this.$route.query.id;
    window.$nuxt.$cookies.set("technicianprojectid", this.$route.query.id);

    this.$store.commit("TechnicianProjectStore/viewflagchange2");

    let sendData = {
      method: "get",
      url: this.geturl,
      data: null
    };

    apiService(sendData, response => {
      console.log(response.data);
      this.randomNumber = response.data;
      this.articleArrayaxios = Object.values(response.data.data);

      this.articleArrayaxios.map(item => {
        this.articleArrayrout.push(item);
        this.articleArray.push(item);
      });
    });

    const formData = new FormData();
    formData.set("projectid", this.projectidd);
    let sendData2 = {
      method: "post",
      url: this.geturl2,
      data: formData
    };

    apiService(sendData2, response => {
      console.log(response.data);
      this.randomNumber2 = response.data;
      this.articleArrayaxios2 = Object.values(response.data.tasks);

      this.articleArrayaxios2.map(item => {
        this.articleArrayrout2.push(item);
        this.articleArray2.push(item);
      });
    });
  },
  data() {
    return {
      useravatar: null,
      username: null,
      project_img_url: process.env.project_image_url,
      ts: new Date(),
      geturl: "/api/project/technician/get_all",
      articleArray: [],
      articleArrayrout: [],
      articleArrayaxios: [],
      projectidd: null,
      randomNumber: {},
      avata_img_url: process.env.avatar_base_url,
      project_img_url: process.env.project_image_url,
      articleArray2: [],
      articleArrayrout2: [],
      geturl2: "/api/project/get_tasks",
      articleArrayaxios2: [],
      randomNumber2: [],
      selected: false,
      detailTask: false,
      completeTask: false,
      tasks: [
        {
          id: 1,
          category: {
            name: "Code"
          },
          task: {
            name: "Make Iron from steal"
          },
          service_providers: [
            {
              url: "https://randomuser.me/api/portraits/women/20.jpg"
            },
            {
              url: "https://randomuser.me/api/portraits/men/20.jpg"
            },
            {
              url: "https://randomuser.me/api/portraits/men/12.jpg"
            }
          ],
          deadline: "07/04/1927",
          completed: 30
        }
      ]
    };
  },
  computed: {
    leftMenu() {
      return this.$store.state.usermenu.openLeftMenu;
    }
  },
  methods: {
    taskdetailtrue(myid) {
      window.$nuxt.$cookies.set("techniciantaskid", myid);
      this.detailTask = true;
    },
    selectall() {
      if (this.selected == true) {
        this.projects.forEach(element => {
          element.selected = true;
        });
      } else {
        this.projects.forEach(element => {
          element.selected = false;
        });
      }
      this.$forceUpdate();
    }
  }
};
</script>
<style scoped>
.w-13 {
  width: 13.333333%;
}
.avatar {
  @apply w-8 rounded-full -ml-2 shadow inline cursor-pointer;
}
.attached-images-wrapper img {
  @apply mr-3 mb-3;
  max-width: 30%;
  width: 100%;
}
</style>