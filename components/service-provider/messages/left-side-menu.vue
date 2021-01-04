<template>
  <div class="flex flex-wrap items-start bg-white h-full shadow relative left-side-bar">

    <!--Search-->
    <div class="px-10 mt-5">
      <div class="flex bg-gray-200 border border-solid border-gray-500 rounded-sm">
        <div class="flex-shrink flex contents-center p-2 bg-gary-400">
          <img  src="https://img.icons8.com/ios-glyphs/22/a0aec0/search.png" >
        </div>
        <div class="flex-grow">
          <input class="w-full h-full border-0 outline-none bg-gray-200" placeholder="search">
        </div>
      </div>
    </div>

      <div class="py-5 relative w-full flex justify-center items-center">
        <div @click="activeMenu='messages'" class="message-menu-button mr-3" :class="{'active': activeMenu === 'messages'}" >Message</div>
        <div @click="activeMenu='menu'" class="message-menu-button" :class="{'active': activeMenu === 'menu'}" >Menu</div>
      </div>

      <div class="relative w-full" v-if="activeMenu === 'messages'">

        <div class="flex justify-center mb-5">
          <div @click="activeMessages = 'people'" class="messages-left-toggler" :class="{'active': activeMessages === 'people'}" >People</div>
          <div @click="activeMessages = 'groups'" class="messages-left-toggler" :class="{'active': activeMessages === 'groups'}">Groups</div>
          <div @click="activeMessages = 'unseen'" class="messages-left-toggler" :class="{'active': activeMessages === 'unseen'}">Unseen</div>
        </div>
        <!--Left Menu-->
        <div v-if="activeMessages === 'people'" class="left-main-menu border-t border-solid border-gray-300 z-50 bg-white">

          <div class="flex justify-between items-center mt-5 px-3 pb-5 border-b border-solid border-gray-300 ">
            <div class="grow">
              <div class="flex items-center">
                <div class="mr-1">
                  <img class="h-10 w-10 rounded-full"
                       src="https://randomuser.me/api/portraits/women/20.jpg">
                </div>
                <div>
                  <span class="text-base font-semibold text-gray-800">Jasmine Mueller</span>
                  <span class="text-xs text-ideeza"><span class="text-6xl text-gray-500 line-height-0" >.</span> 5min ago</span>
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
                  <span class="text-xs text-ideeza"><span class="text-6xl text-gray-500 line-height-0" >.</span> 50min ago</span>
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
                  <span class="text-xs text-gray-500"><span class="text-6xl text-gray-500 line-height-0" >.</span> 1day ago</span>
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
                  <span class="text-xs text-gray-500"><span class="text-6xl text-gray-500 line-height-0" >.</span> 2day ago</span>
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
        <div v-if="activeMessages === 'groups'" class="left-main-menu border-t border-solid border-gray-300 z-50 bg-white">
          <template v-for="(group,index) in groups" >
          <div class="flex justify-between items-center mt-5 px-3 pb-5 border-b border-solid border-gray-300 " :key="index">
            <div class="grow">
              <div class="flex items-center">
                <div class="mr-1">
                  <img class="h-10 w-10 rounded-full"
                       :src="'https://randomuser.me/api/portraits/women/'+20+index+'.jpg'">
                </div>
                <div>
                  <span class="text-base font-semibold text-gray-800">{{group.title}}</span>
                  <span class="text-xs text-ideeza"><span class="text-6xl text-gray-500 line-height-0" >.</span> 5min ago</span>
                  <div class="text-sm text-gray-500">
                    {{group.description}}
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-shrink relative">
              <font-awesome-icon @click="group.show_sub =true;$forceUpdate()" class="mr-1 h-4 text-gray-500 hover:text-gray-600 cursor-pointer " :icon="['fas', 'ellipsis-h']"/>
              <ul class="group-menu" v-if="group.show_sub">
                <li class="p-3">weqw</li>
                <li class="p-3">qweqwe</li>
              </ul>
            </div>
          </div>
          </template>
          <div class="flex justify-between items-center mt-5 px-3 pb-5 border-b border-solid border-gray-300 ">
            <div class="grow">
              <div class="flex items-center">
                <div class="mr-1">
                  <img class="h-10 w-10 rounded-full"
                       src="https://randomuser.me/api/portraits/men/12.jpg">
                </div>
                <div>
                  <span class="text-base font-semibold text-gray-800">Jon Doe</span>
                  <span class="text-xs text-ideeza"><span class="text-6xl text-gray-500 line-height-0" >.</span> 50min ago</span>
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
                  <span class="text-xs text-gray-500"><span class="text-6xl text-gray-500 line-height-0" >.</span> 1day ago</span>
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
        <div v-if="activeMessages === 'unseen'" class="left-main-menu border-t border-solid border-gray-300 z-50 bg-white">
          <div class="flex justify-between items-center mt-5 px-3 pb-5 border-b border-solid border-gray-300 ">
            <div class="grow">
              <div class="flex items-center">
                <div class="mr-1">
                  <img class="h-10 w-10 rounded-full"
                       src="https://randomuser.me/api/portraits/women/20.jpg">
                </div>
                <div>
                  <span class="text-base font-semibold text-gray-800">Jasmine Mueller</span>
                  <span class="text-xs text-ideeza"><span class="text-6xl text-gray-500 line-height-0" >.</span> 5min ago</span>
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
                  <span class="text-xs text-ideeza"><span class="text-6xl text-gray-500 line-height-0" >.</span> 50min ago</span>
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

      <div v-if="activeMenu === 'menu'" class="px-10 relative w-full">
        <CommonMenu />
      </div>

      <LeftBotMenu class="flex-shrink sticky bottom-0 p-10 self-end w-full z-10" />




  </div>
</template>

<script>
  import CommonMenu from '~/components/service-provider/user-menu-items.vue'
  import LeftBotMenu from '~/components/service-provider/left-menu-bot-items.vue'
    export default {
        name: "common-left-side-menu",
      components: {
        LeftBotMenu,
        CommonMenu
      },
      data: function () {
        return {
          activeMenu: 'messages',
          activeMessages: 'people',
          groups: [
            {
              title: 'Jasmine Mueller',
              description: 'great products, love the func...',
              show_sub: false
            },
            {
              title: 'Jon Doe',
              description: 'great products, love the func...',
              show_sub: false
            },
            {
              title: 'Jane Doe',
              description: 'great products, love the func...',
              show_sub: false
            }
          ]
        }
      }
    }
</script>

<style lang="postcss" scoped>
  .left-side-bar{
    width: 300px;
    min-width: 300px;
  }
  .menu-item{
    @apply flex mb-5 content-center items-center mt-2 text-gray-700 text-lg font-semibold cursor-pointer;
  }
  .menu-item:hover{
    @apply text-ideeza;
  }
  .left-main-menu svg{
    @apply text-gray-500;
  }
  .menu-item:hover svg{
    @apply text-ideeza;
  }
  .line-height-0{
    line-height: 0;
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
  .group-menu{
    top:15px;
    @apply absolute border border-ideeza right-0 bg-white;
  }
</style>
