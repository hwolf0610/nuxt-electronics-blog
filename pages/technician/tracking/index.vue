<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow">
      <div class="main-contents p-5">
        <simple-table
          :searchbox="false"
          :add="false"
          :header="true"
          title="Projects"
          border="border-gray"
        >
          <template v-slot:header>
            <button class="font-bold text-sm mr-3 text-ideeza-dark">Delete</button>
            <button class="font-bold text-sm mr-3 text-ideeza-dark">Print</button>
            <button class="font-bold text-sm mr-3 text-ideeza-dark">Export</button>
          </template>
          <template v-slot:th>
            <th class="border-t border-b border-blue-300 w-1/5 text-ideeza-dark p-3">
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
            <th class="border-t border-b border-blue-300 w-13 text-ideeza-dark p-3"></th>
          </template>
          <tr
            class="flex w-full mb-4"
            v-for="(project,index) in articleArray"
            @click="$router.push('/technician/tracking/_id?id='+project.id)"
          >
            <td class="w-1/5 text-ideeza-dark font-semibold">
              <div class="flex">
                <div class="flex"  >
                  <!-- <input type="checkbox" :id="project.id" v-model="project.selected" /> -->
                  <!-- <label :for="project.id"></label> -->
                </div>
                <img :src="avata_img_url +useravatar" class="h-10 w-10 rounded-full mr-2" />
                <label>{{ username}}</label>
                
              </div>
            </td>
            <td class="w-2/12 text-sm text-ideeza-dark font-semibold">{{project.title}}</td>
            <td class="w-2/12 text-sm text-ideeza-dark text-center">
             <img
                   v-for="info2 in project.assigned_users" 
                    :src="avata_img_url + info2.avatar"
                     class="avatar"
                  />
              <!-- hhh{{project.assigned_users}} -->
              <!-- +{{project.service_providers.length}} -->
            </td>
            <td class="w-2/12 text-sm text-ideeza-dark font-semibold pl-2 text-left">
              <div class="ml-2">{{ts.toLocaleDateString(project.end - project.start)}}</div>
            </td>
            <td class="w-13 text-sm text-ideeza-dark font-semibold pl-2 text-left">
              <div class="ml-5">{{(project.end - project.start)/100000000}}%</div>
            </td>
            <td class="w-2/12 text-sm text-ideeza-dark font-semibold pl-2 text-left">
              <button class="border border-ideeza-dark py-2 px-3 rounded">Track order</button>
              <!-- <font-awesome-icon
                class="text-xl mt-2 ml-4 text-green-300 float-right"
                :icon="['fa', 'grip-vertical']"
              /> -->
            </td>
          </tr>
        </simple-table>
      </div>
    </div>
    <!-- <span v-for="(info,index) in articleArray"  >
       <span v-for="info2 in info.assigned_users">{{info2.avatar}}</span>
    </span>
    -->
  </div>
</template>
<script>
import LeftMenu from "~/components/technician/common-left-side-menu.vue";
import SimpleTable from "~/components/reusables/Table.vue";

import apiService from "~/apiService/have_token.js";

export default {
  layout: "user",
  components: {
    LeftMenu,
    SimpleTable
  },
  data() {
    return {
      ts: new Date(),
      articleArray: [],
      articleArrayaxios: [],
      articleArrayrout: [],
      randomNumber: [],
      geturl: "/api/project/technician/get_all",
      avata_img_url: process.env.avatar_base_url,
      username:null,
      useravatar:null,
      selected: false,
      projects: [
        {
          id: 1,
          user: {
            name: "Michael Scott",
            avatar: "https://randomuser.me/api/portraits/women/20.jpg"
          },
          name: "Porsche 219mm",
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
          completed: 30,
          selected: false
        },
        {
          id: 2,
          user: {
            name: "Michael Scott",
            avatar: "https://randomuser.me/api/portraits/men/20.jpg"
          },
          name: "Porsche 219mm",
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
          completed: 30,
          selected: false
        }
      ]
    };
  },
  mounted() {
    this.username = window.$nuxt.$cookies.get("firstname") + " "+ window.$nuxt.$cookies.get("lastname");
    this.useravatar = window.$nuxt.$cookies.get("useravatar");
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
  },
  computed: {
    leftMenu() {
      return this.$store.state.usermenu.openLeftMenu;
    }
  },
  methods: {
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
</style>