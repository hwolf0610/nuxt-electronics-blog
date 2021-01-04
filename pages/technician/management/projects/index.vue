<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <!-- <LeftMenu /> -->

    <!-- Main Contents -->
    <div class="flex-grow">
      <div class="main-contents">
        <h1 class="text-2xl border-b-4 border-solid border-ideeza pb-5 mt-8">Projects</h1>
        <div class="mt-5 mb-10 lg:flex justify-between">
          <div class="flex">
            <select
              class="w-32 mr-10"
              selected="All"
              @change="selectkindman"
              v-model="kindman"
              style="height:40px;font-size:20px "
            >
              <option>All</option>
              <option>Active</option>
              <option>completed</option>
              <option>Priority</option>
              <option>Over Due</option>
            </select>
            <!-- <drop-down class="w-32 mr-10" :data="dataDropDown" selected="All" /> -->
            <!-- <search-field placeholder="Search Project..." /> -->
            <input
              placeholder="search Project..."
              class="bg-white outline-none h-8 text-gray-800 pr-3"
              v-model="searchTerm"
              v-on:input="search"
            />
          </div>
          <div>
            <button
              @click.self="addNewProject=true"
              class="btn btn-normal btn--ideeza px-5 py-3"
            >Create New +</button>
            <select
              class="w-48 block mt-5"
              placeholder="Sort By"
              style="height:40px;font-size:20px "
              v-model="kindmanworkinfo"
              @change="selectkindmanworkinfo"
            >
              <option>None</option>
              <option>Due Date First</option>
              <option>Starting Day First</option>
              <option>Chronologycal</option>
              <option>Alphabetical</option>
            </select>
            <!-- <drop-down
              class="w-48 block mt-5"
              styleHeight="mini"
              :data="sortDropDown"
              placeholder="Sort By"
            />-->
          </div>
        </div>

        <table class="mt-10 shadow-md">
          <thead>
            <tr class="text-white h16 gradient-bg">
              <th class="text-left">Projects</th>
              <th class="text-left">Assigned to</th>
              <th class="text-left">Due Date</th>
              <th class="text-left">Task Status</th>
              <th class="text-left">Notification</th>
            </tr>
          </thead>
          <tbody v-for="(Service, index) in articleArray">
            <tr class="bg-ideeza-100" v-if="start < index && index < end ">
              <td>
                <nuxt-link :to="{ path: '/technician/management/projects/detail', query: { id: Service.id}}" >{{Service.title}}</nuxt-link>
              </td>
              <td>
                <span v-for="image in Service.assigned_users">
                  <img class="avatar" :src="avata_img_url + image.avatar" />
                </span>
              </td>
              <td>{{ts.toLocaleDateString(Service.end - Service.start)}}</td>
              <td class="status status--completed">{{Service.status}}</td>
              <td class="notifications">2 new notification</td>
            </tr>
          </tbody>
        </table>

        <!--Table Stats-->
        <!-- <div class="mt-10 lg:flex justify-center">
          <div class="flex items-center">
            <font-awesome-icon
              class="mr-2 h-4 cursor-pointer"
              :icon="['fas', 'angle-double-left']"
            />page 1 0f 9
            <font-awesome-icon
              class="ml-2 h-4 cursor-pointer"
              :icon="['fas', 'angle-double-right']"
            />
          </div>
        </div>-->

        <!--Paging-->
        <div class="mx-auto w-content">
          <span class="inline-block mr-4 cursor-pointer" @click="decreasekey">
            <font-awesome-icon class="mr-1 h-4" :icon="['fas', 'angle-double-left']" />Previous
          </span>

          <span v-for="inde in counterarray " :key="inde">
            <span v-if="currentviewpoint == inde " class="text-lg text-ideeza">
              <button style="width:35px;" @click="selectedkey(inde)">{{inde}}</button>
            </span>
            <span v-else>
              <button style="width:35px;" @click="selectedkey(inde)">{{inde}}</button>
            </span>
          </span>

          <span class="inline-block ml-4 cursor-pointer" @click="increasekey">
            Next
            <font-awesome-icon class="ml-2 h-4" :icon="['fas', 'angle-double-right']" />
          </span>
        </div>

        <!--Add new project-->
        <new-project @onClose="addNewProject=false" v-if="addNewProject" />
      </div>
    </div>
    <!-- <ul >
      <li v-for="info in articleArray">
        <span v-for="detail in info.assigned_users">{{detail.avatar}}</span></li><br/>
    </ul> -->
    <!-- {{articleArray}} -->
  </div>
</template>

<script>
import LeftMenu from "~/components/technician/common-left-side-menu.vue";
import DropDownField from "~/components/form/dropdown-field.vue";
import SearchField from "~/components/form/search.vue";
import AddNewProject from "~/components/technician/management/new-project.vue";

import Services from "~/data/TechnicianProjectApi.json";

import apiService from "~/apiService/have_token.js";



export default {
  layout: "user",
  name: "projects-index",
  components: {
    LeftMenu,
    "drop-down": DropDownField,
    "search-field": SearchField,
    "new-project": AddNewProject
  },
  data: function() {
    return {
      ts: new Date(),
      Services: Services.firstproject,
      searchTerm: "",
      kindman: "All",
      kindmanworkinfo: "Sort BY",
      articleArray: [],
      currentviewpoint: this.$store.state.TechnicianProjectStore.offset + 1,
      index: 0,
      length: null,
      counter: null,
      start: this.$store.state.TechnicianProjectStore.offset * 5 - 1,
      end: this.$store.state.TechnicianProjectStore.offset * 5 + 5,
      counterarray: [],
       articleArrayaxios: [],
      articleArrayrout: [],
      randomNumber: [],
      geturl: "/api/project/technician/get_all",
      avata_img_url:process.env.avatar_base_url,
      addNewProject: false,
      dataDropDown: ["All", "Active", "Completed", "Priority", "Over Due"],
      sortDropDown: [
        "None",
        "Due Date First",
        "Starting Day First",
        "Chronologycal",
        "Alphabetical"
      ]
    };
  },
  created: function() {
    // this.$store.commit("TechnicianProjectStore/viewflagchange2");
    // let i = 1;
    // let endd =
    //   this.Services.length / this.$store.state.TechnicianProjectStore.scale + 1;
    // //  alert( this.Services.length);
    // for (i = 1; i <= endd; i++) {
    //   this.counterarray.push(i);
    // }
    // // alert(this.counterarray);

    // this.Services.map(item => {
    //   this.articleArray.push(item);
    // });
  },
  computed: {
    leftMenu() {
      return this.$store.state.usermenu.openLeftMenu;
    }
  },
  mounted() {
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

      this.length = this.articleArrayrout.length / 5 - 1;
      this.counter = this.articleArrayrout.length / this.$store.state.TechnicianProjectStore.scale;
  
      let i = 1;
      let endd = this.articleArrayrout.length /this.$store.state.TechnicianProjectStore.scale + 1;
      //  alert( this.Services.length);
      for (i = 1; i <= endd; i++) {
        this.counterarray.push(i);
      }
    });
  },
  methods: {
    search(e) {
      this.articleArray = [];

      let article_list = this.articleArrayrout;
      article_list.map(element => {
        const a_text = element.title.toLowerCase() + "";
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
    selectkindman(e) {
      this.searchTerm = "";
      this.articleArray = [];
      // alert(e.target.value)
      this.kindman = e.target.value;
      let article_list = this.articleArrayrout;
      article_list.map(element => {
        if (e.target.value == "All") {
          this.articleArray.push(element);
        } else if (element.status == e.target.value) {
          this.articleArray.push(element);
        }
      });
    },
    selectkindmanworkinfo(e) {
      this.searchTerm = "";
      //  alert(e.target.value)
      this.kindmanworkinfo = e.target.value;
      let article_list = this.articleArray;
      let S_index = e.target.value;
      switch (S_index) {
        case "None":
          article_list.sort(function(a, b) {
            var x = a.title;
            var y = b.title;
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
        case "Due Date First":
          article_list.sort(function(a, b) {
            var x = a.end;
            var y = b.end;
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
        case "Starting Day First":
          article_list.sort(function(a, b) {
            var x = a.start;
            var y = b.start;
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

        case "Chronologycal":
          article_list.sort(function(a, b) {
            var x = a.start;
            var y = b.start;
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

        case "Alphabetical":
          article_list.sort(function(a, b) {
            var x = a.title.toLowerCase();
            var y = b.title.toLowerCase();
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
    selectedkey(e) {
      this.$store.commit("TechnicianProjectStore/selectedkeyChange", e - 1);
      // $router.go({path:'/news', force: true})
      console.log(this.currentviewpoint + "_");
      this.currentviewpoint =
        this.$store.state.TechnicianProjectStore.offset + 1;
      this.counter =
        this.articleArray.length /
        this.$store.state.TechnicianProjectStore.scale;
      this.start = this.$store.state.TechnicianProjectStore.offset * 5 - 1;
      this.end = this.$store.state.TechnicianProjectStore.offset * 5 + 5;
      console.log("start and end :", this.start, this.end);
      // this.$refs.page.$forceUpdate();
    },
    increasekey() {
      if (
        this.currentviewpoint == this.counter ||
        this.currentviewpoint > this.counter
      ) {
      } else {
        this.$store.commit("TechnicianProjectStore/increasekeyChange");
        this.currentviewpoint =
          this.$store.state.TechnicianProjectStore.offset + 1;
        this.counter =
          this.articleArray.length /
          this.$store.state.TechnicianProjectStore.scale;
        this.start = this.$store.state.TechnicianProjectStore.offset * 5 - 1;
        this.end = this.$store.state.TechnicianProjectStore.offset * 5 + 5;
        // $router.go({path:'/news', force: true})
        // this.$refs.page.$forceUpdate();
      }
    },
    decreasekey() {
      if (this.currentviewpoint == 1 || this.currentviewpoint < 1) {
      } else {
        this.$store.commit("TechnicianProjectStore/decreasekeyChange");
        this.currentviewpoint =
          this.$store.state.TechnicianProjectStore.offset + 1;
        this.counter =
          this.articleArray.length /
          this.$store.state.TechnicianProjectStore.scale;
        this.start = this.$store.state.TechnicianProjectStore.offset * 5 - 1;
        this.end = this.$store.state.TechnicianProjectStore.offset * 5 + 5;
        // $router.go({path:'/news', force: true})
        // this.$refs.page.$forceUpdate();
      }
    }
  }
};
</script>

<style scoped>
.avatar {
  @apply w-8 rounded-full -ml-5 shadow inline cursor-pointer;
}
.avatar:hover {
  @apply shadow-md;
}
.avatar:first-child {
  @apply ml-0;
}
.status {
  @apply uppercase;
}
.status--completed {
  @apply text-green-500;
}
.status--progress {
  @apply text-orange-500;
}
.status--over {
  @apply text-red-500;
}
.notifications {
  @apply text-sm text-ideeza;
}
@screen lg {
  table {
    @apply mb-5 w-full table-fixed border-collapse text-gray-600;
  }
  thead tr {
    @apply bg-white px-6 pl-16;
  }
  thead th {
    @apply p-6;
  }
  thead th:first-child {
    @apply pl-16;
  }
  tbody td {
    @apply p-6 border-r border-solid border-gray-300;
  }
  tbody tr:even {
    @apply bg-white;
  }
  tbody td:first-child {
    @apply pl-16;
  }
  tbody td:last-child {
    @apply border-r-0;
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
    content: "Products";
  }
  td:nth-of-type(2):before {
    content: "Color";
  }
  td:nth-of-type(3):before {
    content: "Price";
  }
  td:nth-of-type(4):before {
    content: "Quantity";
  }
  td:nth-of-type(5):before {
    content: "Cost";
  }
  td:nth-of-type(6):before {
    content: "Action";
  }
}
</style>