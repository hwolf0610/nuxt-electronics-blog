<template>
    <div @click.self="close" class="popup-overlay">
      <div class="popup-overlay--contents add-new-container">
        <!--Header-->
        <div class="border-b-2 border-solid border-ideeza pb-5 mt-10">
          <div class="flex justify-between px-20">
            <span class="text-ideeza text-xl">
              {{taskTitle}}
            </span>
            <font-awesome-icon @click="close" class="mr-1 h-4 cursor-pointer text-gray-500 hover:text-gray-800" :icon="['fas', 'times']"/>
          </div>

          <div class="flex justify-between items-center px-20">
            <span class="text-sm">Project: Iron Making</span>
            <div class="flex items-center">
              <span class="text-gray-800 inline-block">Task Duration: <span class="text-ideeza">26 Oct - 29 Nov</span></span>
              <!--Calendar-->
              <font-awesome-icon class="ml-2 h-4 cursor-pointer text-gray-800" :icon="['fas', 'calendar-alt']"/>
            </div>
          </div>
        </div>


        <!--Contents-->
        <div class="px-20 mt-5 flex">
          <div class="lg:w-1/2" >
            <div class="flex justify-between items-center">
              <h1 class="text-ideeza-dark font-semibold">Task Description</h1>
              <div class="flex items-center  text-gray-500 hover:text-gray-800 cursor-pointer">
                <span class="text-sm inline-block mr-1">Edit</span>
                <font-awesome-icon @click="close" class="mr-1 h-3" :icon="['fas', 'pen']"/>
              </div>

            </div>
            <div class="mt-5">
              <p class="p-3 bg-gray-100 rounded-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur fermentum consectetur. Pellentesque et velit mattis, sagittis magna ac, vulputate neque. Suspendisse dolor sem, blandit ac dolor vitae, fermentum rhoncus augue. Fusce scelerisque posuere neque, in accumsan mi sagittis vitae. Phasellus purus purus, pulvinar vel diam sit amet, auctor feugiat purus. Donec nulla est, convallis nec tempor ac, molestie in massa. Morbi molestie varius ex, vel molestie dui. Phasellus accumsan velit eget efficitur condimentum.
              </p>
            </div>
            <div class="mt-5 font-semibold text-ideeza-dark">
              Attachments
            </div>
            <div class="mt-5">
              <span class="block text-xs">3 pics attached</span>
              <div class="flex flex-wrap attached-images-wrapper mt-2">
                <img class="w-24 h-24" src="https://picsum.photos/200" alt="">
                <img class="w-24 h-24 mx-5" src="https://picsum.photos/200" alt="">
                <img class="w-24 h-24" src="https://picsum.photos/200" alt="">

              </div>
              <div class="text-xs mt-5">
                link attached: <a href="https://google.com">https://google.com</a>
              </div>
            </div>
            <div class="mt-10">
              <span class="inline-block mb-2">Attach</span>
              <FileField />
            </div>
          </div>

          <div class="lg:ml-20">


            <div class="mt-10">
              Notification center: <button @click.self="showNotifications = true" class="ml-5 btn btn-small btn--ideeza px-2 text-xs">Compose <font-awesome-icon class="ml-2 h-3 text-white" :icon="['fas', 'paper-plane']"/></button>
            </div>
            <div class="mt-10">
              <div class="flex">
                <div class="mr-2">
                  <img class="avatar" src="https://randomuser.me/api/portraits/men/20.jpg">
                </div>
                <div class="">
                  <div class="flex justify-between">
                    <span class="inline-block">
                      <span class="text-xs block">He Someone</span>
                      <span class="text-xs font-semibold">Due date problem</span>
                    </span>
                    <span class="text-xs text-ideeza-dark">30 min ago</span>
                  </div>

                  <p class="text-sm mt-3">
                    Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit. Etiam efficitur <br> fermentum consectetur. <br>
                    Pellentesque et velit mattis, <br> sagittis magna ac, vulputate neque.
                  </p>

                  <div class="mt-5 flex">
                    <button class="btn btn--ideeza-dark py-2 px-6">Make a Call</button>
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
          markStatusData: ['Waiting', 'Active', 'Completed', 'Over Due'],
          taskTitle: "Make Iron from steel"
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
