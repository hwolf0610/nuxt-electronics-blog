<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow lg:pt-16 lg:px-2">
      <div
        class="flex justify-between items-center pb-3 mb-5 border-b border-solid border-gray-400 p-5 lg:p-0"
      >
        <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Task List</h1>
        <div class="flex items-center">
          <span
            class="text-lg font-semibold cursor-pointer mr-5 text-ideeza-black hover:text-ideeza"
            :class="{'text-ideeza': tab === 'daily'}"
            @click="tab='daily'"
          >Daily</span>
          <span
            class="text-lg font-semibold cursor-pointer text-ideeza-black hover:text-ideeza"
            :class="{'text-ideeza': tab === 'weekly'}"
            @click="tab='weekly'"
          >Weekly</span>
        </div>
      </div>

      <div class="w-full scroll-container mx-auto">
        <div v-if="tab==='daily'" class="task-wrapper flex mb-10">
          <!--Task Col Daily-->
          <div class="mx-auto task-col md:flex flex-wrap">
            <template>
              <div v-if="filter_date==null"></div>
              <div v-else>
                <TaskCol @showAddTask="displayAddTask" :task="tasks" />
              </div>
            </template>
          </div>
        </div>

        <div v-if="tab==='weekly'" class="task-wrapper flex mb-10">
          <!--Task Col Weekly-->
          <div class="mx-auto task-col md:flex flex-wrap">
            <template>
              <div v-if="filter_week == null">
                <!-- <TaskCol @showAddTask="displayAddTask" :task="tasks" /> -->
              </div>
              <div v-else>
                <TaskCol @showAddTask="displayAddTask" :task="tasks" />
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>

    <!--RightBar-->
    <div class="hidden lg:block task-right-bar bg-white shadow-md py-16">
      <div class="text-gray-800 text-2xl font-semibold text-center">Calendar</div>
      <!--Calendar-->
      <vc-calendar
        class="mx-auto mt-5"
        @dayclick="addTasks"
        v-model="date"
        color="pink"
        is-expanded
        :theme="theme"
        :attributes="attributes"
        :value="null"
      />
      <div class="mt-5 py-5 px-5 border-t border-solid border-gray-300">
        <div class="text-xl text-gray-500 font-semibold">Latest Activity</div>

        <div class="my-5" v-for="latestactivity in latestactivities">
          <div class="flex">
            <img
              class="h-10 w-10 md:h-14 md:w-14 rounded-full mr-3"
              :src="latestactivity.potrait_url"
            />
            <div class="text-left mr-3">
              <div class="text-gray-600 text-sm">
                <span class="font-semibold text-gray-800">{{latestactivity.name}}</span>
                {{latestactivity.action}}
                <br />
                <span class="underline font-semibold">to {{latestactivity.destination}}</span>
              </div>
              <div class="mt-2 text-gray-500 text-xs">{{latestactivity.timestamp}}</div>
            </div>
          </div>
          <img class="mt-2" :src="latestactivity.image_url" />
        </div>
      </div>
    </div>

    <!--Add Task-->
    <AddTask @onClose="closeAddTask" v-if="showAddTask" />
  </div>
</template>
<script>
import AddTask from "~/components/user/tasklist/add-task";
import TaskCol from "~/components/user/tasklist/task-col";
import LeftMenu from "~/components/user/common-left-side-menu.vue";
import CheckBox from "~/components/form/checkbox.vue";
import InvitePopup from "~/components/user/add-member/add-member-popup.vue";
import latestactivities from "~/json/latestactivity.json";
import taskslist from "~/json/tasklist.json";
import apiServiceWithToken from "~/apiService/have_token.js";
export default {
  middleware: "auth",
  layout: "user",
  name: "task-index",
  components: {
    LeftMenu,
    CheckBox,
    InvitePopup,
    AddTask,
    TaskCol
  },
  data: function() {
    return {
      week: null,
      date: new Date(),
      tab: "daily",
      showAddTask: false,
      addNewMember: false,
      filter_date: null,
      filter_week: null,
      tasks: [],
      theme: {
        container: {
          light: "ideeza-date-picker"
        },
        arrows: {
          light: "ideeza-arrow"
        }
      },
      attributes: [
        {
          key: "today",
          highlight: true,
          dates: new Date()
        }
      ],
      tasksDaily: [],
      tasksWeekly: [{ id: 1 }],
      id: 0,

      latestactivities: latestactivities
    };
  },
  computed: {
    leftMenu() {
      return this.$store.state.usermenu.openLeftMenu;
    }
  },

  created: function() {
    Date.prototype.getWeek = function(dowOffset) {
      /*getWeek() was developed by Nick Baicoianu at MeanFreePath: http://www.meanfreepath.com */

      dowOffset = typeof dowOffset == "int" ? dowOffset : 0; //default dowOffset to zero
      var newYear = new Date(this.getFullYear(), 0, 1);
      var day = newYear.getDay() - dowOffset; //the day of week the year begins on
      day = day >= 0 ? day : day + 7;
      var daynum =
        Math.floor(
          (this.getTime() -
            newYear.getTime() -
            (this.getTimezoneOffset() - newYear.getTimezoneOffset()) * 60000) /
            86400000
        ) + 1;
      var weeknum;
      //if the year starts before the middle of a week
      if (day < 4) {
        weeknum = Math.floor((daynum + day - 1) / 7) + 1;
        if (weeknum > 52) {
          nYear = new Date(this.getFullYear() + 1, 0, 1);
          nday = nYear.getDay() - dowOffset;
          nday = nday >= 0 ? nday : nday + 7;
          /*if the next year starts before the middle of
              the week, it is week #1 of that year*/
          weeknum = nday < 4 ? 1 : 53;
        }
      } else {
        weeknum = Math.floor((daynum + day - 1) / 7);
      }
      return weeknum;
    };
  },
  mounted() {
    this.tasks.map(item => {
      this.week = item.date;
      var s = new Date(this.week);
      this.week = s.getWeek();
    });
    var d = new Date();
    d.setHours(0, 0, 0, 0);
    this.filter_date = Number(d);
    var dd = new Date(this.filter_date);
    this.filter_week = dd.getWeek();

    var bodyFormData = new FormData();
    bodyFormData.set("start", Number(d));
    bodyFormData.set("end", Number(d));

    let getalltasksurl = "/api/task/get_all";
    let getalltasksData = {
      method: "post",
      url: getalltasksurl,
      data: bodyFormData
    };

    apiServiceWithToken(getalltasksData, response => {
      if (response.data["success"] == true) {
        this.tasks = response.data["data"];
        console.log("tasks: ", response.data["data"]);
      }
    });

    let getloginhistory = "/api/setting/login_history";

    let getloginhistoryData = {
      method: "get",
      url: getloginhistory,
      data: null
    };
  },
  methods: {
    displayAddTask() {
      this.showAddTask = true;
    },
    closeAddTask() {
      this.showAddTask = false;
    },
    addTasks(date) {
      this.filter_date = date.dateTime;
      var d = new Date(this.filter_date);
      if (this.tab === "daily") {
        this.filter_date = d.getDate();

        let gettasksurl = "/api/task/get_all";
        var bodyFormData = new FormData();
        bodyFormData.set("start", date.dateTime);
        bodyFormData.set("end", date.dateTime);

        let getalltasksData = {
          method: "post",
          url: gettasksurl,
          data: bodyFormData
        };

        apiServiceWithToken(getalltasksData, response => {
          if (response.data["success"] == true) {
            this.tasks = response.data["data"];
            console.log("tasks: ", response.data["data"]);
          }
        });
      } else if (this.tab === "weekly") {
        // this.filter_week = d.getWeek();
        var d = new Date(date.dateTime);

        var first = d.getDate() - d.getDay();
        var last = first + 6;
        var firstday = new Date(d.setDate(first));
        var lastday = new Date(d.setDate(last));
        var start = Number(firstday);
        var end = Number(lastday);
        let gettasksurl = "/api/task/get_all";
        var bodyFormData = new FormData();
        bodyFormData.set("start", start);
        bodyFormData.set("end", end);

        let getalltasksData = {
          method: "post",
          url: gettasksurl,
          data: bodyFormData
        };

        apiServiceWithToken(getalltasksData, response => {
          if (response.data["success"] == true) {
            this.tasks = response.data["data"];
            console.log("weekly tasks: ", response.data["data"]);
          }
        });
      }
    }
  }
};
</script>

<style scoped>
.my-scrollbar {
  width: 100%;
  min-width: 300px;
}
.task-col {
  @apply mt-5;
  width: 100%;
}
.task-wrapper {
  max-width: 1200px;
}

/*Right Bar*/
.task-right-bar {
  width: 300px;
  min-width: 300px;
}

.accordion-container {
  @apply border-t border-b border-solid border border-gray-300;
}
.accordion-container--title {
  @apply flex py-2 px-1;
}
</style>
