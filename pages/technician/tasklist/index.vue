<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow lg:pt-16 lg:px-10">
      <div
        class="flex justify-between items-center pb-3 mb-5 border-b border-solid border-gray-400 p-5 lg:p-0"
      >
        <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Task List</h1>
        <div class="lg:hidden cursor-pointer border-light-gray w-10 h-8 relative bg-white">
          <font-awesome-icon
            class="ml-1 h-6 text-gray-600 absolute-center-h-v"
            :icon="['fas', 'sliders-h']"
          />
        </div>
      </div>

      <div class="w-full overflow-x-hidden">
        <div class="task-wrapper flex flex-wrap">
          <!--Task Col-->
          <div class="task-col" v-for="(task, index) in tasks">
            <div class="mx-auto lg:mx-0 lg:mr-8 pb-5 shadow-md bg-white">
              <div
                class="py-6 px-5 text-xl font-semibold text-gray-800 border-b border-solid border-gray-400"
              >{{task.timestamp}}</div>

              <!--Task content-->
              <div class="my-16 mx-3 p-3" v-for="data in task.data">
                <div class="task-time">{{data.duration}}</div>
                <div class="task-name">{{data.title}}</div>

                <div class="mt-8 flex justify-between items-center">
                  <div class="flex items-center">
                    <img
                      class="h-10 w-10 mr-2 rounded-full"
                      v-for="portrait_url in data.invited"
                      :src="portrait_url"
                    />
                    <div
                      @click="data.addNewMember = !data.addNewMember"
                      class="add-member h-10 w-10 mr-2 bg-gray-300 rounded-full relative"
                      :class="{'active': data.addNewMember}"
                    >
                      <font-awesome-icon
                        class="absolute-center-h-v mr-1 h-4"
                        :icon="['fas', 'plus']"
                      />
                      <InvitePopup v-if="data.addNewMember" />
                    </div>
                  </div>

                  <!--Attachments-->
                  <div class="flex items-center">
                    <div class="mr-2" @click="onComment">
                      <font-awesome-icon
                        class="h-4 text-ideeza cursor-pointer"
                        :icon="['far', 'comment']"
                      />
                      <span class="attachment-no">{{data.comment_count}}</span>
                    </div>
                    <div class="mr-2" @click="onPaperClip">
                      <font-awesome-icon
                        class="h-4 text-ideeza cursor-pointer"
                        :icon="['fas', 'paperclip']"
                      />
                      <span class="attachment-no">{{data.paperclip_count}}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mb-5 text-center">
                <button @click="onAddTask" class="btn pill-button px-5">+Add new task</button>
              </div>
            </div>
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
      v-model="date" 
      color="pink" 
      is-expanded 
      :theme="theme"
      :attributes="attributes" />

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
  </div>
</template>
<script>
import LeftMenu from "~/components/technician/common-left-side-menu.vue";
import CheckBox from "~/components/form/checkbox.vue";
import InvitePopup from "~/components/user/add-member/add-member-popup.vue";
import latestactivities from "~/json/latestactivity.json";
import tasklists from "~/json/techniciantasklist.json";
export default {
  layout: "technician",
  name: "task-index",
  components: {
    LeftMenu,
    CheckBox,
    InvitePopup
  },
  data: function() {
    return {
      date: new Date(),
      attributes: [
        {
          key: "today",
          highlight: true,
          dates: new Date()
        }
      ],
      tasks: tasklists,
      addNewMember: false,
      theme: {
        container: {
          light: "ideeza-date-picker"
        },
        arrows: {
          light: "ideeza-arrow"
        }
      },
      latestactivities: latestactivities
    };
  },
  computed: {
    leftMenu() {
      return this.$store.state.usermenu.openLeftMenu;
    }
  },
  mounted() {
    console.log("technician tasklist mounted: ");
  },
  methods: {
    displayAddTask() {
      this.showAddTask = true;
    },
    closeAddTask() {
      this.showAddTask = false;
    },
    addTasks() {
      if (this.tab === "daily") {
        alert(this.date);
      } else if (this.tab === "weekly") {
        this.tasksWeekly.push({
          id: this.id
        });
        this.id++;
      }
    },
    onComment() {
      alert();
    },
    onPaperClip() {
      alert();
    },
    onAddTask() {
      alert();
    }
  }
};
</script>

<style scoped>
.task-col {
  @apply mt-5;
  width: 100%;
  max-width: 370px;
  min-width: 360px;
}
.task-wrapper {
  max-width: 1200px;
}
.task-time {
  @apply text-gray-500;
}
.task-name {
  @apply text-gray-800 text-xl font-semibold mt-5;
}
.attachment-no {
  @apply text-gray-500 text-sm;
}
.add-member {
  @apply h-10 w-10 mr-2 bg-gray-300 rounded-full relative cursor-pointer text-gray-600;
}
.add-member:hover {
  @apply text-gray-800;
}
.add-member.active {
  @apply bg-ideeza-dark text-white;
}
.add-member.active:hover {
  @apply text-white;
}
.important {
  @apply bg-ideeza-dark;
}
.important .task-time,
.important .task-name,
.important .attachment-no {
  @apply text-white;
}
.important .add-member {
  @apply bg-white;
}
/*Right Bar*/
.task-right-bar {
  width: 300px;
  min-width: 300px;
}
</style>
