<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>
    <!-- Main Contents -->
    <div class="builder-panel flex-grow lg:p-10">
      <!--Panel Menu-->
      <div class="flex justify-between flex-col lg:flex-row border-b border-gray-400 pl-5 pr-5 lg:pl-0 lg:pr-0 pb-3">
        <div class="text-xl font-bold m-3 lg:m-0 text-center lg:text-left">Lamborghini Aventado Project</div>
        <div class="flex items-center justify-center content-center">
          <span class="panel-menu text-center" ><font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'bolt']"/>Electronics</span>
          <span class="ml-5 panel-menu text-center active" ><font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'code']"/>Code</span>
          <span class="ml-5 panel-menu text-center" ><font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'cube']"/>Cover</span>
          <span class="ml-5 panel-menu text-center" ><font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'mobile-alt']"/>App</span>
          <span class="ml-5 panel-menu text-center" ><font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'wrench']"/>Customize</span>
        </div>
      </div>

      <div class="my-5 bg-white shadow">
        <img class="w-full" src="~/static/images/car-big.png">
        <div class="py-5 px-5 lg:flex justify-between items-center">
          <div class="relative share">
            <button class="bg-ideeza text-white px-2 py-3 rounded">
              Share invention
              <font-awesome-icon class="ml-1 h-4" :icon="['fas', 'star']"/>
            </button>
            <div class="absolute bg-white bottom-0 share-drop-down shadow-md">
              <ul>
                <li @click="showShareInternal=true" class="p-3">Share in news feed</li>
                <li @click="showShareExternal=true" class="p-3">Share external</li>
              </ul>
            </div>
          </div>

          <div class="flex items-center mt-5 lg:mt-0">
            <div>
              <nuxt-link to="/user/cart/overview" class="btn btn-normal text-ideeza font-semibold p-2"><font-awesome-icon class="mr-1 h-4" :icon="['fas', 'shopping-cart']"/> Buy now</nuxt-link>
            </div>
            <div class="mx-5 text-sm text-gray-500 font-semibold">
              <font-awesome-icon class="mr-1 h-4" :icon="['fas', 'eye']"/> 2.8k
            </div>
            <div>
              <button class="btn btn-normal font-semibold p-2 text-gray-500"><font-awesome-icon class="mr-1 h-4" :icon="['fas', 'star']"/> 39</button>
            </div>
          </div>
        </div>
      </div>

      <div class="my-10 bg-white shadow">
        <div class="flex py-5 border-b border-solid border-gray-300">
          <div class="tab px-5 text-gray-700 font-semibold text-lg lg:text-xl cursor-pointer active" >
            Description
          </div>
        </div>

        <div class="pt-10 px-5">
          <div class="font-bold text-black mb-3 text-lg">Description</div>
          <textarea class="w-full border rounded p-3 font-bold text-base" rows="8" v-model="description" placeholder="Type the description here..."></textarea>
        </div>
        <div class="text-right pt-5 pb-10 px-5">
          <button class="bg-ideeza px-5 py-2 text-white">Save</button>
        </div>
      </div>
    </div>
    <share-internal v-if="showShareInternal" @close="showShareInternal=false"/>
    <share-external v-if="showShareExternal" @close="showShareExternal=false"/>
  </div>
</template>

<script>
  import LeftMenu from '~/components/user/common-left-side-menu.vue'
  import ShareExternal from '~/components/share/share-external.vue'
  import ShareInternal from '~/components/share/share-internal.vue'
    export default {
      middleware: "auth",
      layout: 'user',
      name: "building-index",
      components: {
        LeftMenu,
        ShareExternal,
        ShareInternal
      },
      data: function () {
        return {
          description: null,
          mainDropDownActive: false,
          currentMenu: {},
          storeCurrentMenu: null,
          menuChildren: null,
          searchVal: null,
          showShareInternal: false,
          showShareExternal: false
        }
      },
      computed: {
        leftMenu () {
          return this.$store.state.usermenu.openLeftMenu;
        }
      }
    }
</script>

<style scoped>

  .builder-panel{
    width: auto;
  }

  .panel-menu{
    @apply inline-block font-semibold text-gray-700 cursor-pointer;
  }
  .panel-menu.active{
    @apply text-ideeza;
  }
  .panel-menu:hover{
    @apply text-ideeza;
  }
  .panel-menu-icon{
    height: 11px;
    display: inline-block;
  }
  .tab.active{
    @apply text-ideeza;
  }
  @screen lg{
    .builder-panel{
      width: 100%;
      max-width: 1235px;
    }
  }
  .share:hover .share-drop-down{
    opacity: 1;
    transform: translateY(100%);
  }
  .share .share-drop-down{
    opacity: 0;
    transform: translateY(80%);
    min-width: fit-content;
    transition: all 0.5s;
  }
  .share .share-drop-down li{
    min-width: max-content;
    @apply font-semibold cursor-pointer;
  }
  .share .share-drop-down li:hover{
    @apply text-ideeza;
  }

</style>
