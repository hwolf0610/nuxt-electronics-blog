<template>
    <div @click.self="close" class="popup-overlay">
      <div class="popup-overlay--contents add-new-container">
        <!--Header-->
        <div class="flex justify-between border-b-2 border-solid border-ideeza pb-5 px-20 pt-20">
          <input type="text" class="outline-none border-0 text-ideeza text-xl placeholder-ideeza lg:w-1/2" placeholder="Add new task...." >
          <font-awesome-icon @click="close" class="mr-1 h-4 cursor-pointer text-gray-500 hover:text-gray-800" :icon="['fas', 'times']"/>
        </div>

        <!--Contents-->
        <div class="p-20 mt-10 flex">
          <div class="lg:w-1/2" >
            <div class="flex justify-between items-center">
              <h1 class="text-ideeza-dark font-semibold">Task Description</h1>
              <div class="flex items-center  text-gray-500 hover:text-gray-800 cursor-pointer">
                <span class="text-sm inline-block mr-1">Edit</span>
                <font-awesome-icon @click="close" class="mr-1 h-3" :icon="['fas', 'pen']"/>
              </div>

            </div>
            <div class="mt-5">
              <TextAreaField rows="5" placeholder="Add project description here ...." />
            </div>
            <div class="mt-10">
              <span class="inline-block mb-2">Attach</span>
              <FileField />
            </div>
          </div>

          <div class="lg:ml-20">
            <div class="flex items-center">
              <span class="text-gray-800 inline-block">Task Duration</span>
              <!--Calendar-->
              <vc-date-picker v-model="dateRange" color="pink" mode='range' value=""
                           :popover="{ placement: 'bottom', visibility: 'click' }" >
                <font-awesome-icon class="ml-2 h-4 cursor-pointer text-gray-800" :icon="['fas', 'calendar-alt']"/>
              </vc-date-picker>

            </div>

            <div class="mt-5 w-40">
              <span class="inline-block mb-2">Mark Status</span>
              <DropDownField :data="markStatusData" styleHeight="mini"  />
            </div>

            <div class="mt-10 relative">
              Assigned members: <button @click.self="showMembers = true" class="ml-5 btn btn-small btn--ideeza px-2 text-xs">Add +</button>
              <div v-click-outside="hideMembers" v-if="showMembers" class="members-container absolute left-0 z-50 bg-white shadow-md p-2">
                <div>
                  <SearchField bg="bg-gray-100" placeholder="search member" />
                </div>
                <div class="mt-2 flex justify-between items-center">
                  <div class="flex items-center" >
                    <img class="avatar" src="https://randomuser.me/api/portraits/women/20.jpg">
                    <span class="member-name">Jon Doe, Manager</span>
                  </div>
                  <CheckBoxField />
                </div>
                <div class="mt-2 flex justify-between items-center">
                  <div class="flex items-center" >
                    <img class="avatar" src="https://randomuser.me/api/portraits/women/20.jpg">
                    <span class="member-name">Jon Doe, Manager</span>
                  </div>
                  <CheckBoxField />
                </div>
                <div class="mt-2 flex justify-between items-center">
                  <div class="flex items-center" >
                    <img class="avatar" src="https://randomuser.me/api/portraits/women/20.jpg">
                    <span class="member-name">Jon Doe, Manager</span>
                  </div>
                  <CheckBoxField />
                </div>
                <div class="mt-2 flex justify-between items-center">
                  <div class="flex items-center" >
                    <img class="avatar" src="https://randomuser.me/api/portraits/women/20.jpg">
                    <span class="member-name">Jon Doe, Manager</span>
                  </div>
                  <CheckBoxField />
                </div>

              </div>
            </div>

            <div class="mt-10">
              Notification center: <button @click.self="showNotifications = true" class="ml-5 btn btn-small btn--ideeza px-2 text-xs">Compose <font-awesome-icon class="ml-2 h-3 text-white" :icon="['fas', 'paper-plane']"/></button>
            </div>
            <div class="mt-10 rounded-lg p-5 bg-gray-200">
              <span class="text-xs">Inbox is empty</span>
            </div>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
  import TextAreaField from "~/components/form/text-area.vue"
  import DropDownField from "~/components/form/dropdown-field.vue"
  import SearchField from "~/components/form/search-mini.vue"
  import CheckBoxField from "~/components/form/checkbox-plus.vue"
  import FileField from "~/components/form/file-field.vue"
    export default {
        name: "new-project",
      data: function() {
        return {
          dateRange: null,
          showMembers: false,
          showNotifications: false,
          markStatusData: ['Waiting', 'Active', 'Completed', 'Over Due']
        }
      },
      components: {
        TextAreaField,
        DropDownField,
        SearchField,
        CheckBoxField,
        FileField
      },
      methods: {
          close(){
            this.$emit('onClose');
          },
        hideMembers() {
            this.showMembers = false;
        }

      }
    }
</script>

<style scoped>
  .add-new-container{
    @apply w-full h-full;
    max-width: 1300px;
    max-height: 900px;
  }
  .members-container{
    height: 200px;
    overflow-y: auto;
  }
  .member-name{
    @apply text-gray-600 ml-2;
    font-size: 10px;
    font-weight: lighter;
  }
  .avatar{
    @apply w-4 rounded-full inline;
  }
</style>
