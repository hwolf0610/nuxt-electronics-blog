<template>
  <div class="task-container">
    <!-- <div
      class="py-6 px-5 text-xl font-semibold text-gray-800 border-b border-solid border-gray-400"
    >{{title}}</div> -->
    <div v-for="(tk, index) in task" class>
      <div
      class="py-6 px-5 text-xl font-semibold text-gray-800 border-b border-solid border-gray-400"
    >{{new Date(tk.task.timestamp).toDateString()}}</div>
      <!-- <div
        @click="task.active = !task.active"
        class="cursor-pointer py-3 flex flex items-center"
        :class="{'font-semibold text-ideeza-black': task.active}"
      >
        <div class="text-center flex-grow">Task {{index+1}}</div>
        <div class="mr-5" v-html="task.active ? '-' : '+'"></div>
      </div>-->

      <!--Task content-->
      <div :class="{'important': tk.task.important}" class="task task-contents">
        <div class="task-time">{{tk.task.duration}}</div>
        <div class="task-name">{{tk.task.title}}</div>

        <div v-if="tk.task.subtasks" class="text-sm font-normal">
          <template v-for="t in tk.task.subtasks">
            <check-box v-model="t.completed">{{t.description}}</check-box>
          </template>
        </div>

        <div class="mt-8 flex justify-between items-center">
          <div class="flex items-center">
            <img class="h-10 w-10 mr-2 rounded-full" :src="invite" v-for="invite in tk.task.invited" />
            <div
              @click="tk.task.addnewmember = !tk.task.addnewmember"
              class="add-member h-10 w-10 mr-2 bg-gray-300 rounded-full relative"
              :class="{'active': tk.task.addnewmember}"
            >
              <font-awesome-icon class="absolute-center-h-v mr-1 h-4" :icon="['fas', 'plus']" />
              <InvitePopup v-if="tk.task.addnewmember" />
            </div>
          </div>

          <!--Attachments-->
          <div class="flex items-center">
            <div class="mr-2" @click="onComment">
              <font-awesome-icon class="h-4 text-ideeza cursor-pointer" :icon="['far', 'comment']" />
              <span class="attachment-no">{{tk.task.comment_count}}</span>
            </div>
            <div class="mr-2" @click="onPaperClip">
              <font-awesome-icon
                class="h-4 text-ideeza cursor-pointer"
                :icon="['fas', 'paperclip']"
              />
              <span class="attachment-no">{{tk.task.paperclip_count}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center">
      <button @click="$emit('showAddTask')" class="btn pill-button px-5 mt-5">+Add new task</button>
    </div>
  </div>
</template>

<script>
import InvitePopup from "~/components/user/add-member/add-member-popup.vue";
import tasklists from "~/json/tasklist.json";
import CheckBox from "~/components/form/checkbox-light.vue";
Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};
export default {
  name: "task-col",
  props: ["task"],
  components: {
    InvitePopup,
    CheckBox
  },
  data: function() {
    return {
      title: null,
      showAddTask: false,
      d: new Date().addDays(this.index),
      weeks: ["Sunday", "Monday", "Tuesday", "Thirsday", "Friday", "Saturday"],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
    };
  },
  mounted() {
    // this.title = new Date(this.tk.timestamp).toDateString();
  },
  methods: {
    onComment() {
      alert();
    },
    onPaperClip() {
      alert();
    }
  }
};
</script>

<style scoped>
.carousal-border {
  @apply border-b border-t border-solid mt-5;
}

.task-col {
  @apply m-5;
  width: 100%;
}
.task-wrapper {
  max-width: 1200px;
}
.task {
  transition: all 0.2s;
}
.task-contents {
  @apply p-3 border border-gray-100 mx-4 my-5;
}
.task-contents-hide {
  @apply h-0 overflow-hidden;
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
.task-container {
  @apply mx-5 pb-5 mb-5 shadow-lg bg-white;
  min-width: 350px;
}
</style>
