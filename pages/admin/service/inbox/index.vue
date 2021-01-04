<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow lg:py-5 lg:px-3 xl:px-3">
      <div class="lg:flex">
        <div class="mt-10 lg:mt-0 lg:w-2/6 bg-white mr-3">

    <div class="relative w-full">

      <div class="flex p-3 border-b border-solid border-gray-300">
        <h1 class="text-lg font-semibold text-gray-800">CHAT</h1>
      </div>

      <div class="p-3">
        <div class="text-sm font-bold text-gray-800 mb-3">Favourites</div>
        <div class="flex">
          <div class="mr-2">
            <div>
              <img class="h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/women/20.jpg">
            </div>
            <div>
              <span class="text-gray-500 mb-3 text-xs">Danial</span>
            </div>
          </div>

          <div class="mr-2">
            <div>
              <img class="h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/women/20.jpg">
            </div>
            <div>
              <span class="text-gray-500 mb-3 text-xs">Danial</span>
            </div>
          </div>

          <div>
            <div>
              <img class="h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/women/20.jpg">
            </div>
            <div>
              <span class="text-gray-500 mb-3 text-xs">Danial</span>
            </div>
          </div>
        </div>
      </div>
      <!--Left Menu-->
      <div class="left-main-menu border-t border-solid border-gray-300 z-50 bg-white">

        <div class="flex justify-between items-center mt-5 px-3 pb-5 border-b border-solid border-gray-300 ">
          <div class="grow">
            <div class="flex items-center">
              <div class="mr-1">
                <img class="h-10 w-10 rounded-full"
                     src="https://randomuser.me/api/portraits/women/20.jpg">
              </div>
              <div>
                <span class="text-base font-semibold text-gray-800">Jasmine Mueller</span>
                <span class="text-xs text-ideeza"><span class="text-gray-500 line-height-0" >.</span> 5min ago</span>
                <div class="text-sm text-gray-500">
                  great product, love the func ....
                </div>
              </div>
            </div>
          </div>
          <div class="flex-shrink">
            <font-awesome-icon class="mr-1 h-4 text-gray-500 hover:text-gray-600 cursor-pointer " :icon="['fas', 'ellipsis-h']"/>
          </div>
        </div>
        <div class="flex justify-between items-center mt-5 px-3 pb-5 border-b border-solid border-gray-300 ">
          <div class="grow">
            <div class="flex items-center">
              <div class="mr-1">
                <img class="h-10 w-10 rounded-full"
                     src="https://randomuser.me/api/portraits/men/12.jpg">
              </div>
              <div>
                <span class="text-base font-semibold text-gray-800">Jon Doe</span>
                <span class="text-xs text-ideeza"><span class="text-gray-500 line-height-0" >.</span> 50min ago</span>
                <div class="text-sm text-gray-500">
                  great product, love the func ....
                </div>
              </div>
            </div>
          </div>
          <div class="flex-shrink">
            <font-awesome-icon class="mr-1 h-4 text-gray-500 hover:text-gray-600 cursor-pointer " :icon="['fas', 'ellipsis-h']"/>
          </div>
        </div>
        <div class="flex justify-between items-center mt-5 px-3 pb-5 border-b border-solid border-gray-300 ">
          <div class="grow">
            <div class="flex items-center">
              <div class="mr-1">
                <img class="h-10 w-10 rounded-full"
                     src="https://randomuser.me/api/portraits/women/8.jpg">
              </div>
              <div>
                <span class="text-base font-semibold text-gray-800">Jane Doe</span>
                <span class="text-xs text-gray-500"><span class="text-gray-500 line-height-0" >.</span> 1day ago</span>
                <div class="text-sm text-gray-500">
                  great product, love the func ....
                </div>
              </div>
            </div>
          </div>
          <div class="flex-shrink">
            <font-awesome-icon class="mr-1 h-4 text-gray-500 hover:text-gray-600 cursor-pointer " :icon="['fas', 'ellipsis-h']"/>
          </div>
        </div>
        <div class="flex justify-between items-center mt-5 px-3 pb-5 border-b border-solid border-gray-300 ">
          <div class="grow">
            <div class="flex items-center">
              <div class="mr-1">
                <img class="h-10 w-10 rounded-full"
                     src="https://randomuser.me/api/portraits/men/3.jpg">
              </div>
              <div>
                <span class="text-base font-semibold text-gray-800">John Snow</span>
                <span class="text-xs text-gray-500"><span class="text-gray-500 line-height-0" >.</span> 2day ago</span>
                <div class="text-sm text-gray-500">
                  great product, love the func ....
                </div>
              </div>
            </div>
          </div>
          <div class="flex-shrink">
            <font-awesome-icon class="mr-1 h-4 text-gray-500 hover:text-gray-600 cursor-pointer " :icon="['fas', 'ellipsis-h']"/>
          </div>
        </div>
      </div>
    </div>
        </div>

        <div class="lg:w-4/6 lg:mr-3 shadow-md bg-white">
          <div class="flex justify-between items-center border-b border-solid border-gray-300 p-5">
            <div class="grow">
              <div class="flex">
                <div class="mr-5">
                  <img class="w-16 rounded-full"
                       src="https://randomuser.me/api/portraits/men/20.jpg">
                </div>
                <div>
                  <h1 class="text-lg font-semibold text-gray-800">Laurentis Rando</h1>
                  <span class="text-base text-gray-500">
                    <font-awesome-icon class="h-4 text-ideeza cursor-pointer " :icon="['fas', 'circle']"/>  Online
                  </span>
                </div>
              </div>
            </div>
            <div class="flex-shrink">
              <font-awesome-icon class="mr-1 h-4 text-gray-500 hover:text-gray-600 cursor-pointer " :icon="['fas', 'cog']"/>
            </div>
          </div>

          <!--Messages-->
          <div class="p-2 lg:p-5">

            <!--Message To-->
            <div class="py-4">
              <span class="block text-gray-500 text-sm text-center">10/01/2018 8:41PM</span>
              <div class="flex mt-5 justify-end">
                <div class="ml-2 flex items-end flex-col">
                  <div class="messages message--to">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
                <div class="message-from-avatar flex ml-2">
                  <img class="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/women/20.jpg">
                </div>
              </div>
            </div>

            <!--Message From-->
            <div class="py-4">
              <span class="block text-gray-500 text-sm text-center">10/01/2018 8:41PM</span>
              <div class="flex mt-5">
                <div class="message-from-avatar">
                  <img class="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/women/20.jpg">
                </div>
                <div class="ml-2 flex flex-col">
                  <div class="messages message--from">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </div>
            </div>

            <!--Message To-->
            <div class="py-4">
              <span class="block text-gray-500 text-sm text-center">10/01/2018 8:41PM</span>
              <div class="flex mt-5 justify-end">
                <div class="ml-2 flex items-end flex-col">
                  <div class="messages message--to">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
                <div class="message-from-avatar flex ml-2">
                  <img class="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/women/20.jpg">
                </div>
              </div>
            </div>

            <!--Message From-->
            <div class="py-4">
              <span class="block text-gray-500 text-sm text-center">10/01/2018 8:41PM</span>
              <div class="flex mt-5">
                <div class="message-from-avatar">
                  <img class="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/women/20.jpg">
                </div>
                <div class="ml-2 flex flex-col">
                  <div class="messages message--from">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!--Message Input-->
          <div class="p-5 mt-5 border-t border-solid border-gray-300">
            <div class="flex">
              <div class="flex-grow">
                <input class="h-full w-full border-0 text-gray-600 outline-none pr-2" placeholder="Type Message">
              </div>
              <div class="flex-shrink ">
                <font-awesome-icon class="mr-1 h-4 text-gray-400 hover:text-gray-600 cursor-pointer " :icon="['fas', 'cloud-upload-alt']"/>
                <font-awesome-icon class="mr-1 h-4 text-gray-400 hover:text-gray-600 cursor-pointer " :icon="['fas', 'camera']"/>
                <font-awesome-icon class="mr-1 h-4 text-gray-400 hover:text-gray-600 cursor-pointer " :icon="['fas', 'microphone']"/>
              </div>
            </div>
          </div>


        </div>
        <div class="mt-10 lg:mt-0 lg:w-2/6 bg-white shadow-md">
          <!--User-->
          <div class="flex justify-center border-b border-solid border-gray-300 p-5 text-center">
            <div class="grow">
              <div class="">
                <div class="">
                  <img class="w-16 rounded-full inline-flex" src="https://randomuser.me/api/portraits/women/20.jpg">
                </div>
                <div>
                  <h1 class="text-lg font-semibold text-gray-800">Jasmine Mueller</h1>
                  <span class="text-sm text-gray-500">Active 8h ago</span>
                </div>
              </div>
            </div>
          </div>

          <!--Shared Photos-->
          <div class="p-5">
            <div class="cursor-pointer flex justify-between items-center">
              <div class="grow">
                <h1 class="text-lg font-semibold text-gray-600">Shared Files</h1>
              </div>
              <div class="flex-shrink">
                <font-awesome-icon class="mr-1 h-4 text-gray-500 hover:text-gray-600 cursor-pointer " :icon="['fas', 'chevron-down']"/>
              </div>
            </div>

            <div class="flex mt-5 flex-wrap">
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
              <div class="w-1/3 p-1 shared-photo">
                <div class="h-full w-full bg-gray-300"></div>
              </div>
            </div>

          </div>
        </div>
      </div>


    </div>
    <MyIdeeza v-click-outside="onClickOutside" v-if="showMyIdeeza" />
  </div>
</template>
<script>
  import LeftMenu from '~/components/admin/common-left-side-menu.vue'
  import MyIdeeza from '~/components/user/my-ideeza/new-ideeza.vue'
  import SimpleTable from '~/components/reusables/Table.vue'

  export default {
    layout: 'admin',
    components: {
      LeftMenu,
      MyIdeeza,
      SimpleTable,
    },
    data: function () {
      return {
        showMyIdeeza: false,
      }
    },
    methods: {
      selectall(value) {
        if (value == true) {
          this.users.forEach(element => {
            element.selected = true
          });
        } else {
          this.users.forEach(element => {
            element.selected = false
          });
        }
        this.$forceUpdate()
      }
    },
    computed: {
      leftMenu() {
        return this.$store.state.usermenu.openLeftMenu;
      }
    },
  }

</script>
<style>
  .messages{
    @apply py-1 px-2 text-base;
    width: fit-content;
    margin-bottom: 2px;
  }
  .message-from-avatar{
    width: 40px;
    height: 40px;
  }
  .message--to{
    @apply text-right text-white bg-ideeza rounded-l-lg p-6;
  }
  .message--to:first-child{
    @apply rounded-tr-lg;
  }
  .message--to:last-child{
    @apply rounded-br-lg;
  }

  .message--from{
    @apply text-left text-gray-800 bg-white border rounded-r-lg p-6;
  }
  .message--from:first-child{
    @apply rounded-tl-lg;
  }
  .message--from:last-child{
    @apply rounded-bl-lg;
  }
  .shared-photo{
    height: 80px;
  }
  .message-menu-button{
    @apply font-semibold border border-solid border-gray-400 text-center py-2 bg-transparent w-32 cursor-pointer;
  }
  .message-menu-button.active{
    @apply border-ideeza bg-ideeza text-white;
  }
  .messages-left-toggler{
    @apply cursor-pointer font-semibold text-xs py-1 border-b-4 border-transparent mr-3;
  }
  .messages-left-toggler.active{
    @apply border-ideeza;
  }
</style>
