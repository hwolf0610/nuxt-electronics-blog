<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow mb-20">
      <div class="main-contents">
        <!--Status Cards-->
        <div class="lg:flex w-full cards-wrapper items-center">
          <div class="card-container lg:mr-5 mr-0 mt-5 lg:mt-0">
            <h1 class="text-3xl font-semibold text-gar-800 pl-3 lg:pl-0">Good morning, Chan!</h1>
          </div>
          <div class="card-container lg:mr-5 mr-0 mt-5 lg:mt-0">
            <div class="mx-auto lg:mx-none status-card bg-white shadow-lg rounded-lg mt-5 px-3 py-5 relative">
              <div class="text-base">Open Tickets</div>
              <div class="flex justify-between items-center content-center ">
                <div class="text-gray-800 text-bold text-xl lg:text-3xl">
                  <div>56</div>
                </div>
                <img src="~/static/images/opened-tickets.png" class="w-12 object-center object-right mr-5" alt="">
              </div>
            </div>
          </div>


          <div class="card-container lg:mr-5 mr-0 mt-5 lg:mt-0">
            <div class="mx-auto lg:mx-none status-card bg-white shadow-lg rounded-lg mt-5 px-3 py-5 relative">
              <div class="text-base">Unopened Tickets</div>
              <div class="flex justify-between items-center content-center ">
                <div class="text-gray-800 text-bold text-xl lg:text-3xl">
                  <div>56</div>
                </div>
                <img src="~/static/images/un-opened-tickets.png" class="w-12 object-center object-right mr-5" alt="">
              </div>
            </div>
          </div>

          <div class="card-container mt-5 lg:mr-5 lg:mt-0">
            <div class="mx-auto lg:mx-none status-card bg-white shadow-lg rounded-lg mt-5 px-3 py-5 relative">
              <div class="text-base">On Hold Tickets</div>
              <div class="flex justify-between items-center content-center ">
                <div class="text-gray-800 text-bold text-xl lg:text-3xl">
                  <div>56</div>
                </div>
                <img src="~/static/images/on-hold-tickets.png" class="w-12 object-center object-right mr-5" alt="">
              </div>
            </div>
          </div>

          <div class="card-container mt-5 lg:mt-0">
            <div class="mx-auto lg:mx-none status-card bg-white shadow-lg rounded-lg mt-5 px-3 py-5 relative">
              <div class="text-base">Finished Tickets</div>
              <div class="flex justify-between items-center content-center ">
                <div class="text-gray-800 text-bold text-xl lg:text-3xl">
                  <div>56</div>
                </div>
                <img src="~/static/images/finished-tickets.png" class="w-12 object-center object-right mr-5" alt="">
              </div>
            </div>
          </div>

        </div>

        <div class="xl:flex mt-10 justify-between">
          <div class="lg:w-2/3 lg:mr-5 w-full">
            <h1 class="text-xl font-semibold text-gar-800 pl-3 lg:pl-0">Task Management</h1>
            <!--List-->
            <div class="shadow-md mt-5 relative p-6 bg-white">
              <div class="flex justify-between">
                <span class="text-gray-500 text-sm">2 tasks completed out of {{projects.length}}</span>
                <font-awesome-icon class="mr-1 h-4 cursor-pointer" :icon="['fas', 'ellipsis-h']" />
              </div>

              <div
                class="mt-5 w-full lg:flex justify-between items-center"
                v-for="project in projects"
              >
                <div class="text-sm text-gray-600">
                  <nuxt-link to="/technician/projects/technician-detail">{{project.projectName}}</nuxt-link>
                </div>
                <div>
                  <img
                    class="avatar"
                    v-for="profile_image in project.assigned_to_profile_image"
                    :src="profile_image"
                  />
                </div>
                <div class="text-sm text-gray-600">{{project.due_date}}</div>
                <div class="text-sm text-orange-600">{{project.task_status}}</div>
                <div class="text-sm text-ideeza">{{project.notification}}</div>
              </div>
            </div>
          </div>
          <div class="mt-5 lg:mt-0 md:w-1/3">
            <vc-calendar class="mx-auto bg-white box-shadow rounded mb-3" color="pink" is-expanded :theme="theme" />
            <div class="bg-white shadow rounded">
            <div class="py-3 px-5 bg-ideeza text-white text-center rounded">3rd March</div>
            <hr class="my-1">
            <ul class="shadow-lg">
                 <li class="flex justify-between hover:bg-ideeza-dark py-3 px-5 event" v-for="task in tasks">
                    <div>
                        <div class="text text-sm font-bold">{{task.title}}</div>
                        <div class="text text-xs">{{task.duration}}</div>
                    </div>
                    <div class="event-icons text-right">
                        <font-awesome-icon class="text text-xs text-gray-500 mr-2 cursor-pointer" :icon="['fa', 'pen']"  @click="onEditTask" />
                        <font-awesome-icon class="text text-sm text-gray-500 cursor-pointer" :icon="['fas', 'times']" @click="onDeleteTask" />
                    </div>
                </li>
            </ul>
        </div>
          </div>
          <!-- <div class="messages mt-5 lg:mt-0 lg:w-1/3">
            <h1 class="text-xl font-semibold text-gar-800 pl-3 lg:pl-0">Task List</h1>
            <div class="bg-white shadow-md mt-5">
              <div class="flex justify-between p-6">
                <span class="text-gray-500 text-sm">2 tasks completed out of {{tasks.length}}</span>
                <div class="text-gray-500 text-sm flex justify-between items-center">
                  <font-awesome-icon class="h-4 cursor-pointer" :icon="['fas', 'chevron-left']" />
                  <span class="mx-2">January 2020</span>
                  <font-awesome-icon class="h-4 cursor-pointer" :icon="['fas', 'chevron-right']" />
                </div>
                <font-awesome-icon class="mr-1 h-4 cursor-pointer" :icon="['fas', 'ellipsis-h']" />
              </div>
              <div
                class="p-6 border-t border-solid border-gray-300 flex justify-between items-center text-gray-600 hover:bg-ideeza-dark hover:text-white"
                v-for="task in tasks"
              >
                <div>
                  <span class="font-semibold text-sm block">
                    <nuxt-link to="/technician/tasklist">{{task.title}}</nuxt-link>
                  </span>
                  <span class="text-xs block">{{task.duration}}</span>
                </div>
                <div>
                  <font-awesome-icon
                    class="mr-3 h-4 cursor-pointer inline"
                    :icon="['fas', 'pen']"
                    @click="onEditTask"
                  />
                  <font-awesome-icon
                    class="h-4 cursor-pointer inline"
                    :icon="['fas', 'times']"
                    @click="onDeleteTask"
                  />
                </div>
              </div>
            </div>
          </div> -->
        </div>

        <div class="mt-10 orders">
          <h1
            class="text-xl font-semibold text-gar-800 pl-3 lg:pl-0 pb-3 mb-3 border-b border-solid border-gary-300"
          >Message Center</h1>

          <div>
            <div class="hidden xl:flex justify-between">
              <div class="flex flex-wrap">
                <select class="field field--border-light mr-1 h-12">
                  <option>All payout methods</option>
                </select>
                <select class="field field--border-light mr-1 h-12">
                  <option>All type products</option>
                </select>
                <select class="field field--border-light mr-1 h-12">
                  <option v-for="year in years">{{year}}</option>
                </select>
                <select class="field field--border-light mr-1 h-12">
                  <option>Order status</option>
                </select>
              </div>
              <div>
                <div
                  class="flex w-fit-content bg-white justify-center border-light-gray items-center content-center"
                >
                  <div class="h-12 relative w-10">
                    <font-awesome-icon
                      class="ml-1 h-4 text-gray-400 absolute-center-h-v"
                      :icon="['fas', 'search']"
                    />
                  </div>
                  <input
                    placeholder="search users"
                    v-model="searchTerm"
                    v-on:input="search"
                    class="bg-white outline-none h-12 text-gray-800 pr-3"
                  />
                </div>
              </div>
            </div>
            <div
              class="xl:hidden cursor-pointer border-light-gray w-10 h-8 relative mt-2 ml-2 bg-white"
            >
              <font-awesome-icon
                class="ml-1 h-6 text-gray-600 absolute-center-h-v"
                :icon="['fas', 'sliders-h']"
              />
            </div>
          </div>
          <div class="shadow-md">
          <table class="mt-10">
            <thead>
              <tr class="text-gray-800 h16">
                <th class="text-left">Username</th>
                <th class="text-left">Role</th>
                <th class="text-left">Status</th>
                <th class="text-left">Join Date</th>
                <th class="text-left">Rate</th>
                <th class="text-left">Actions</th>
                <th class="text-right">
                  <font-awesome-icon class="mr-1 h-4 cursor-pointer" :icon="['fas', 'ellipsis-h']" />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                :class="index%2!=0?'bg-white':'bg-gray-100'"
                v-for="(tabledata, index) in articleArray"
                v-if="start < index && index < end "
              >
                <td>{{tabledata.ArticlesName}}{{index}}{{tabledata.id}}</td>
                <td>{{tabledata.role}}</td>
                <td>{{tabledata.Status}}</td>
                <td>{{tabledata.Date}}</td>
                <td>
                  <img class="inline" src="~/static/images/star.png" alt />
                  <img class="inline" src="~/static/images/star.png" alt />
                  <img class="inline" src="~/static/images/star.png" alt />
                  <img class="inline" src="~/static/images/star.png" alt />
                  <img class="inline" src="~/static/images/star.png" alt />
                </td>

                <td class="lg:text-right">
                  <nuxt-link :to="{ path: '/technician/profile', query: { id: tabledata.id}}">
                    <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'eye']" />
                  </nuxt-link>
                  <nuxt-link :to="{ path: '/technician/messages', query: { id: tabledata.id}}">
                    <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'envelope']" />
                  </nuxt-link>
                  <font-awesome-icon
                    class="mr-2 h-4 cursor-pointer"
                    :icon="['fas', 'check']"
                    @click="onApproveWork"
                  />
                  <font-awesome-icon
                    class="mr-2 h-4 cursor-pointer"
                    :icon="['fas', 'pause']"
                    @click="onPauseWork"
                  />
                  <font-awesome-icon
                    class="mr-2 h-4 cursor-pointer"
                    :icon="['fas', 'times']"
                    @click="onCancelWork"
                  />
                </td>
                <td class="lg:text-right text-xs">5 mins ago</td>
              </tr>
            </tbody>
          </table>

          <!--Table Stats-->
          <div class="mt-5 lg:flex justify-end">
            <div class="lg:w-3/5 p-3 lg:flex justify-between">
              <!--Paging-->
              <div class="flex items-center">
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
                  <font-awesome-icon
                    class="ml-2 h-4 cursor-pointer"
                    :icon="['fas', 'angle-double-right']"
                  />
                </span>
              </div>

              <div class="flex items-center">
                <span class="inline-block ml-32">Show</span>
                <select class="field field--border-none ml-2 h-10" @change="changeshowperiod">
                  <option
                    v-for="(tabledata, index) in articleArray"
                    v-if="length > index "
                  >{{(index)*5+1}}-{{(index)*5+5}}</option>
                  <option>All</option>
                </select>
              </div>
            </div>
          </div>
          </div>
        </div>
          </div>

        </div>
      </div>
</template>

<script>
import LeftMenu from "~/components/technician/common-left-side-menu.vue";
import articles from "~/json/messageCenter.json";
import projects from "~/data/TechnicianProjectApi.json";
import tasklists from "~/json/tasklist.json";
export default {
  layout: "technician",
  name: "dashboard-index",
  components: {
    LeftMenu
  },
  data: function() {
    return {
      years: [
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021"
      ],
      projects: projects.firstproject,
      tasks: tasklists,
      theme: {
          container: {
            light: 'ideeza-date-picker',
          },
          arrows: {
            light: 'ideeza-arrow',
          },
        },
      searchTerm: '',
      articles: articles,
      articleArray: [],
      currentSort: 'name',
      currentSortDir: 'asc',
      currentviewpoint: this.$store.state.userBlogStore.offset + 1,
      index: 0,
      length: articles.length / 5 - 1,
      counter: articles.length / this.$store.state.userBlogStore.scale,
      start: this.$store.state.userBlogStore.offset * 5 - 1,
      end: this.$store.state.userBlogStore.offset * 5 + 5,
      counterarray: []
    };
  },

  created: function() {
    this.$store.commit("userBlogStore/viewflagchange2");
    let i = 1;
    let array1 = [];
    let endd = articles.length / this.$store.state.userBlogStore.scale + 1;
    for (i = 1; i <= endd; i++) {
      array1.push(i);
    }
    this.counterarray = array1;
    // console.log("array1:", array1);
    // console.log("articles:", this.articles);

    this.articles.map(item => {
      this.articleArray.push(item);
    });
  },
  computed: {
    leftMenu() {
      return this.$store.state.usermenu.openLeftMenu;
    }
  },
  mounted() {
    console.log('mounted');
  },
  methods: {
    changeshowperiod(e) {
      this.articleArray = [];
      if (e.target.value == "all") {
        this.articles.map(item => {
          this.articleArray.push(item);
        });
      } else {
        var a = e.target.value.split("-");
        var a1 = a[0];
        var a2 = a[1];
        alert("a1:" + a1 + "a2:" + a2);
        this.articles.map((item, index) => {
          if (index >= a1 && index <= a2) {
            this.articleArray.push(item);
          }
        });
      }
    },
    search(e) {
      this.articleArray = [];

      let article_list = this.articles;
      article_list.map(element => {
        const a_text = element.ArticlesName.toLowerCase() + "";
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
    selectedkey(e) {
      this.$store.commit("userBlogStore/selectedkeyChange", e - 1);
      // $router.go({path:'/news', force: true})
      console.log(this.currentviewpoint + "_");
      this.currentviewpoint = this.$store.state.userBlogStore.offset + 1;
      this.counter =
        this.articleArray.length / this.$store.state.userBlogStore.scale;
      this.start = this.$store.state.userBlogStore.offset * 5 - 1;
      this.end = this.$store.state.userBlogStore.offset * 5 + 5;
      console.log("start and end :", this.start, this.end);
      // this.$refs.page.$forceUpdate();
    },
    increasekey() {
      if (
        this.currentviewpoint == this.counter ||
        this.currentviewpoint > this.counter
      ) {
      } else {
        this.$store.commit("userBlogStore/increasekeyChange");
        this.currentviewpoint = this.$store.state.userBlogStore.offset + 1;
        this.counter =
          this.articleArray.length / this.$store.state.userBlogStore.scale;
        this.start = this.$store.state.userBlogStore.offset * 5 - 1;
        this.end = this.$store.state.userBlogStore.offset * 5 + 5;
        // $router.go({path:'/news', force: true})
        // this.$refs.page.$forceUpdate();
      }
    },
    decreasekey() {
      if (this.currentviewpoint == 1 || this.currentviewpoint < 1) {
      } else {
        this.$store.commit("userBlogStore/decreasekeyChange");
        this.currentviewpoint = this.$store.state.userBlogStore.offset + 1;
        this.counter =
          this.articleArray.length / this.$store.state.userBlogStore.scale;
        this.start = this.$store.state.userBlogStore.offset * 5 - 1;
        this.end = this.$store.state.userBlogStore.offset * 5 + 5;
        // $router.go({path:'/news', force: true})
        // this.$refs.page.$forceUpdate();
      }
    },

    onEditTask() {
      alert();
    },
    onDeleteTask() {
      alert();
    },
    onApproveWork() {
      alert();
    },
    onPauseWork() {
      alert();
    },
    onCancelWork() {
      alert();
    }
  }
};
</script>

<style scoped>
.due-date{
    transform: translateX(-50%);
}
.cards-wrapper {
  max-width: 1530px;
}
.status-card {
  width: 100%;
  height: 100px;
}
.success-stories {
  width: 100%;
  max-width: 860px;
  max-height: 600px;
}
.overlay {
  background: rgba(0, 0, 0, 0.2);
}
.orders {
  width: 100%;
  max-width: 1530px;
}

.avatar {
  @apply w-8 rounded-full -ml-5 shadow inline cursor-pointer;
}
.avatar:hover {
  @apply shadow-md;
}
.avatar:first-child {
  @apply ml-0;
}

@screen md {
  .status-card {
    /*width: 200px;
      height: 100px;*/
  }
}

@screen lg {
  .card-container {
    @apply w-1/4;
  }

  .status-card {
    height: 160px;
  }
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
    @apply p-6;
  }
  tbody tr:even {
    @apply bg-white;
  }
  tbody td:first-child {
    @apply pl-16;
  }
}


  @screen lg{
    .card-container{
      @apply w-1/4;
    }
    table{
      @apply mb-5 w-full table-fixed border-collapse text-gray-600;
    }
    thead tr{
      @apply bg-white px-6 pl-16;
    }
    thead th{
      @apply p-6;
    }
    thead th:first-child{
      @apply pl-16;
    }
    tbody td{
      @apply p-6;
    }
    tbody tr:even{
      @apply bg-white;
    }
    tbody td:first-child{
      @apply pl-16;
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
