<template>
  <div @click.self="close" class="popup-overlay">
    <div class="popup-overlay--contents add-new-container">
      <!--Header-->
      <div class="flex justify-between px-10 pt-5">
        <h1 class="font-semibold text-xl">Add new task</h1>
        <font-awesome-icon
          @click="close"
          class="mr-1 h-4 cursor-pointer text-gray-500 hover:text-gray-800"
          :icon="['fas', 'times']"
        />
      </div>

      <div class="my-5 md:flex justify-between px-5 md:px-10">
        <div class="md:w-1/2">
          <div class="input-container">
            <label>Link to (Option)</label>
            <input placeholder="Project or layer" v-model="taskLink" />
          </div>
          <div class="input-container">
            <label>Name</label>
            <input placeholder="name" v-model="taskName" />
          </div>
          <div class="input-container">
            <label>Description</label>
            <textarea rows="5" class="taskDescription" v-model="taskDescription"></textarea>
          </div>
          <div class="input-container">
            <label>Taskers</label>
            <div class="flex items-center">
              <img
                class="h-10 w-10 mr-2 rounded-full"
                src="https://randomuser.me/api/portraits/women/17.jpg"
              />
              <img
                class="h-10 w-10 mr-2 rounded-full"
                src="https://randomuser.me/api/portraits/men/16.jpg"
              />
              <div class="add-member h-10 w-10 mr-2 bg-gray-300 rounded-full relative">
                <font-awesome-icon
                  class="absolute-center-h-v mr-1 h-4 text-gray-600 hover:text-gray-800 cursor-pointer"
                  :icon="['fas', 'plus']"
                  @click="onAddTaskers"
                />
                <InvitePopup v-if="requestAddTasker" />
              </div>
            </div>
          </div>
        </div>
        <div class="md:w-2/3 md:pl-10">
          <h1 class="font-semibold text-lg block">Deadline</h1>
          <!--Calendar-->
          <vc-calendar
            v-model="date"
            @dayclick="selectDate"
            mode="range"
            value
            class="mx-auto mt-5"
            color="pink"
            is-expanded
            :attributes="attributes"
            :theme="theme"
          />
        </div>
      </div>

      <div class="px-10">
        <h1 class="font-semibold text-lg block">Attachments</h1>
        <FileField />
        <div>
          <div class="flex items-center mt-2">
            <span class="text-ideeza text-xs">introduction to the task 4 attachment</span>
            <font-awesome-icon
              class="ml-2 h-3 inline text-ideeza-gray-300 cursor-pointer :hover:text-ideeza-gray-500"
              :icon="['fas', 'trash']"
            />
          </div>
        </div>
      </div>

      <div class="flex justify-end px-10 mb-5">
        <button class="btn btn--ideeza px-3 py-1" @click="addNewTask">Add Task</button>
      </div>
    </div>
  </div>
</template>

<script>
import FileField from "~/components/form/file-field.vue";
import InvitePopup from "~/components/user/add-member/add-member-popup.vue";
export default {
  name: "add-task",
  data: function() {
    return {
      date: new Date(),
      requestAddTasker: false,
      dateRange: new Date().setHours(0, 0, 0, 0),
      taskLink: null,
      taskName: null,
      taskDescription: null,
      taskDeadLine: null,
      taskTaskers: null,
      taskAttachments: null,
      showMembers: false,
      task: null,
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
      ]
    };
  },
  components: {
    FileField,
    InvitePopup
  },
  methods: {
    close() {
      this.$emit("onClose");
    },
    hideMembers() {
      this.showMembers = false;
    },
    addNewTask() {
      var r = confirm("Do you want to add new task?");
      if (r == true) {
        this.task = {
          link: this.taskLink,
          name: this.taskName,
          description: this.taskDescription,
          deadline: this.dateRange
        };
        const data = JSON.stringify(this.task);
        alert(data);

        var addTaskFormData = new FormData();
        addTaskFormData.set("link", this.taskLink);
        addTaskFormData.set("name", this.taskName);
        addTaskFormData.set("description", this.taskDescription);
        addTaskFormData.set("deadline", this.dateRange);
        window.location.reload();
      } else {
      }
    },
    onAddTaskers() {
      this.requestAddTasker = true;
      // alert();
    },
    selectDate(date) {
      alert(date.dateTime);
      this.dateRange = date.dateTime;
    }
  }
};
</script>

<style scoped>
.input-container {
  @apply my-5;
}
label {
  @apply font-semibold text-lg block mb-2 text-ideeza-black;
}
input {
  @apply p-2 rounded-sm outline-none border border-solid border-ideeza-gray-300;
  width: 90%;
}
textarea {
  @apply p-2 rounded-sm outline-none border border-solid border-ideeza-gray-300;
  width: 90%;
}
.add-new-container {
  @apply w-full;
  max-width: 1000px;
  max-height: 100vh;
  overflow-y: auto;
}

.avatar {
  @apply w-4 rounded-full inline;
}
</style>
