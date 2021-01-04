<template  >
  <div class="main-contents">
    <h1 class="text-xl text-gray-800 font-semibold border-b heading-border pb-3">Your articles</h1>

    <div class="lg:flex justify-between items-center my-5">
      <nuxt-link
        to="/user/blog/add"
        class="btn btn-normal btn--ideeza px-10 py-4 block lg: iinline-block"
      >
        <button @click="uploadUserBlogkey">Add new article</button>
        <span class="ml-5">+</span>
      </nuxt-link>
      <div
        class="flex w-fit-content bg-white justify-center border-light-gray items-center content-center mt-3 lg:mt-0"
      >
        <div class="h-12 relative w-10">
          <font-awesome-icon
            class="ml-1 h-4 text-gray-400 absolute-center-h-v"
            :icon="['fas', 'search']"
          />
        </div>
        <input
          placeholder="search article"
          v-model="searchTerm"
          v-on:input="search"
          class="bg-white outline-none h-12 text-gray-800 pr-3"
        />
        <!-- {{searchTerm}} -->
        <!-- <button>Search</button> -->
      </div>
    </div>

    <!--Blog List-->
    <div class="bg-white shadow-md p-0 lg:p-5" id="app">
      <table id="mytableapp">
        <thead>
          <tr>
            <td @click="sort('name')">
              <img
                class="inline-block mr-1 align-baseline"
                src="~/static/icons/sort-arrows.png"
                alt
              />
              Article name
            </td>
            <td class="flex items-center" @click="sort('Date')">
              <img
                class="inline-block mr-1 align-baseline"
                src="~/static/icons/sort-arrows.png"
                alt
              />
              Date
            </td>
            <td @click="sort('Status')">
              <img
                class="inline-block mr-1 align-baseline"
                src="~/static/icons/sort-arrows.png"
                alt
              />
              Status
            </td>
            <td @click="sort('Status')">
              <img
                class="inline-block mr-1 align-baseline"
                src="~/static/icons/sort-arrows.png"
                alt
              />
              Actions
            </td>
            <td class="text-right">
              <font-awesome-icon class="mr-1 h-4 cursor-pointer" :icon="['fas', 'ellipsis-h']" />
            </td>
          </tr>
        </thead>

        <tbody class="text-gray-800">
          <tr v-for="(tabledata, index) in articleArray" v-if="start < index && index < end ">
            <td class="font-semibold">{{tabledata.article}}</td>
            <td class>
               {{ts.toLocaleDateString(tabledata.timestamp)}}
              <!-- <span v-if="tabledata.flag"></span>
              <span v-else="!tabledata.flag">{{tabledata.flag=size;}}</span>-->
            </td>
            <!-- <td class="font-semibold">{{tabledata.Status}}</td> -->
            <td>
              <!-- <p v-if="tabledata.flag == 1 ">
                <span class="text-green-500 font-semibold">{{tabledata.status}}</span>
              </p>
              <p v-else-if="tabledata.flag == 2  ">
                <span class="font-semibold">{{tabledata.status}}</span>
              </p>
              <p v-else-if="tabledata.flag == 3  ">
                <span class="text-red-500 font-semibold">{{tabledata.status}}</span>
              </p> -->
               <span class="text-green-500 font-semibold">{{tabledata.status}}</span>
            </td>

            <td class="text-gray-500">
              <nuxt-link :to="{ path: '/user/blog/view', query: { id: tabledata.id}}">
                <!-- <nuxt-link to="/user/blog/view"> -->
                <button @click="uploadUserBlogkey2">
                  <font-awesome-icon
                    class="mr-1 h-3 cursor-pointer hover:text-gray-800"
                    :icon="['fas', 'eye']"
                  />
                </button>
              </nuxt-link>
              <nuxt-link :to="{ path: '/user/messages', query: { id: tabledata.id}}">
                <font-awesome-icon
                  class="mr-1 h-3 cursor-pointer hover:text-gray-800"
                  :icon="['fas', 'envelope']"
                />
              </nuxt-link>
              <font-awesome-icon
                class="mr-1 h-3 cursor-pointer hover:text-gray-800"
                :icon="['fas', 'check']"
                 @click="setstatus(tabledata.id,'Active')"
              />
              <font-awesome-icon
                class="mr-1 h-3 cursor-pointer hover:text-gray-800"
                :icon="['fas', 'times']"
                 @click="setstatus(tabledata.id,'Close')"
              />
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <!-- debug: sort={{currentSort}}, dir={{currentSortDir}} -->
      <!--Table Stats-->
      <div class="mt-5 relative">
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

        <div
          class="lg:absolute flex items-center top-0 w-content lg:w-auto right-0 my-3 lg:my-0 mx-auto lg:mx-0"
        >
          <span class="inline-block">Show</span>
          <select class="inline field ml-2 h-10" @change="changeshowperiod">
            <option
              v-for="(tabledata, index) in articleArray"
              v-if="length > index "
            >{{(index)*5+1}}-{{(index)*5+5}}</option>
            <option>all</option>
          </select>
        </div>
      </div>
    </div>
    <!-- {{Math.ceil(counter)}} -->
  </div>
</template>

<script>
import articles from "../../../data/BlogApi.json";
import apiService from "~/apiService";
import apiService2 from "~/apiService/have_data.js";

import { teal } from "color-name";
export default {
  name: "blog-list",
  data: function() {
    return {
      ts: new Date(),
      searchTerm: "",
      articles: articles,
      articleArray: [],
      currentSort: "name",
      currentSortDir: "asc",
      currentviewpoint: this.$store.state.userBlogStore.offset + 1,
      index: 0,
      length: null,
      counter: null,
      start: this.$store.state.userBlogStore.offset * 5 - 1,
      end: this.$store.state.userBlogStore.offset * 5 + 5,
      counterarray: [],
       articleArrayaxios: [],
      articleArrayrout: [],
      randomNumber: [],
      geturl: "/api/get_blogs",
      geturl2: "/api/blog/change_status",
    };
  },
  mounted(){
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
  created: function() {
    
 
  },
  methods: {
    setstatus(userid, status){
          const formData = new FormData();
      formData.set("id", userid);
      formData.set("status", status);
      let sendData = {
        method: "post",
        url: this.geturl2,
        data: formData
      };
      apiService2(sendData, response => {
        console.log(response);
      });
      },
    changeshowperiod(e) {
      this.articleArray = [];
      if (e.target.value == "all") {
        this.articleArrayrout.map(item => {
          this.articleArray.push(item);
        });
      } else {
        var a = e.target.value.split("-");
        var a1 = a[0];
        var a2 = a[1];
        // alert("a1:" + a1 + "a2:" + a2);
        this.articleArrayrout.map((item, index) => {
          if (index >= a1 && index <= a2) {
            this.articleArray.push(item);
          }
        });
      }
    },
    search(e) {
      this.articleArray = [];

      let article_list = this.articleArrayrout;
      article_list.map(element => {
        const a_text = element.article.toLowerCase() + "";
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
    sort: function(s) {
      console.log("sort key :", s, this.articleArray);
      let direction = 1;

      if (s === this.currentSort) {
        if (this.currentSortDir == "asc") {
          direction = 1;
        } else if (this.currentSortDir == "desc") {
          direction = -1;
        }

        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }

      this.currentSortDir;
      let article_list = this.articleArray;
      switch (s) {
        case "name":
          article_list.sort(function(a, b) {
            var x = a.article.toLowerCase();
            var y = b.article.toLowerCase();
            if (x < y) {
              return -1 * direction;
            }
            if (x > y) {
              return 1 * direction;
            }
            return 0;
          });

          // console.log("sorted : ", article_list);
          break;
        case "Date":
          article_list.sort(function(a, b) {
            var ts= new Date()
            var x = ts.toLocaleDateString(a.timestamp).toLowerCase();
            var y = ts.toLocaleDateString(b.timestamp).toLowerCase();
            if (x < y) {
              return -1 * direction;
            }
            if (x > y) {
              return 1 * direction;
            }
            return 0;
          });

          // console.log("sorted : ", article_list);
          break;
        case "Status":
          article_list.sort(function(a, b) {
            var x = a.status.toLowerCase();
            var y = b.status.toLowerCase();
            if (x < y) {
              return -1 * direction;
            }
            if (x > y) {
              return 1 * direction;
            }
            return 0;
          });

          // console.log("sorted : ", article_list);
          break;

        default:
          break;
      }
      this.currentSort = s;
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
    uploadUserBlogkey() {
      this.$store.commit("userBlogStore/viewflagchange1");
    },
    uploadUserBlogkey2() {
      this.$store.commit("userBlogStore/viewflagchange2");
    }
  }
};

// export default {
//     name: "blog-list"
// }
</script>

<style scoped>
#mytableapp thead tr td {
  cursor: pointer;
}

.blog-container {
  width: 100%;
  max-width: 1530px;
  padding: 20px 5px;
}

@screen lg {
  .blog-container {
    padding: 60px 50px;
  }
  /*Table*/
  table {
    @apply mb-5 w-full border-collapse text-gray-600;
  }

  tbody td {
    @apply py-5 pr-2;
  }

  tbody tr:nth-child(odd) {
    @apply bg-gray-100;
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
    content: "Article name";
  }
  td:nth-of-type(2):before {
    content: "Date";
  }
  td:nth-of-type(3):before {
    content: "Status";
  }
  td:nth-of-type(4):before {
    content: "Actions";
  }
}
</style>
