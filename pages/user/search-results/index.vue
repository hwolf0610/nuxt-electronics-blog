<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>

    <!-- Main Contents -->
    <div class="search-panel flex-grow lg:pt-10 px-2 lg:px-5 xl:px-10">
      <div class="pb-5 border-b border-solid border-gray-400 lg:flex justify-between items-center">
        <div class="flex mt-5 ml-2 lg:ml-0 lg:mt-0">
          <div class="font-semibold text-lg text-ideeza mr-5">Models</div>
          <div class="font-semibold text-lg mr-5">Users</div>
          <div class="font-semibold text-lg mr-5">Free</div>
          <div class="font-semibold text-lg mr-5">Store</div>
        </div>
        <div class="flex items-center font-semibold text-lg text-ideeza-dark mt-5 ml-2 lg:ml-0 lg:mt-0">
          <font-awesome-icon class="mr-2 h-4 panel-menu-icon" :icon="['fas', 'sliders-h']"/> <span>Filter</span>
        </div>
      </div>

      <!--Banner-->
      <div class="search-banner relative">
        <img class="object-cover object-center" src="~/static/images/drone-banner.png" alt="">
        <div class="banner-overlay z-50 p-5 absolute-center-v w-full flex justify-between">
          <font-awesome-icon class="h-6 text-white cursor-pointer" :icon="['fas', 'chevron-left']"/>
          <font-awesome-icon class="h-6 text-white cursor-pointer" :icon="['fas', 'chevron-right']"/>
        </div>
        <div class="flex justify-end absolute bottom-0 lg:pb-10 pb-5 pr-5 text-white z-50 w-full">
          <span class="font-semibold">Mech Drone</span> by John Doe
        </div>
      </div>

      <!--Results-->
      <h1 class="pb-3 mt-5 border-b border-solid border-gray-400 font-semibold">45 results by <span class="text-ideeza-dark">Drone</span></h1>

      <div class="flex flex-wrap justify-start my-5">
        <!--Search Items-->
        <div class="search-item shadow">
          <div class="search-item-img">
            <img class="object-cover object-center" src="~/static/images/dron-8.png" alt="">
          </div>

          <div class="bg-white p-2 flex justify-between items-center">
            <div class="search-avatar flex items-center font-semibold text-sm text-gray-500">
              <img class="search-avatar-img mr-2" src="https://randomuser.me/api/portraits/men/6.jpg" alt=""> John Doe
            </div>
            <div class="flex items-center text-gray-500 text-sm">
              <div class="mr-2"><font-awesome-icon class="mr-1 h-4 panel-menu-icon" :icon="['fas', 'eye']"/>1.5k</div>
              <div class="mr-2"><font-awesome-icon class="mr-1 h-4 panel-menu-icon" :icon="['fas', 'comments']"/>8</div>
              <div class="mr-2"><font-awesome-icon class="mr-1 h-4 panel-menu-icon" :icon="['fas', 'star']"/>3.6</div>
            </div>
          </div>
        </div>
        <div class="search-item shadow">
          <div class="search-item-img">
            <img class="object-cover object-center" src="~/static/images/dron-8.png" alt="">
          </div>

          <div class="bg-white p-2 flex justify-between items-center">
            <div class="search-avatar flex items-center font-semibold text-sm text-gray-500">
              <img class="search-avatar-img mr-2" src="https://randomuser.me/api/portraits/men/6.jpg" alt=""> John Doe
            </div>
            <div class="flex items-center text-gray-500 text-sm">
              <div class="mr-2"><font-awesome-icon class="mr-1 h-4 panel-menu-icon" :icon="['fas', 'eye']"/>1.5k</div>
              <div class="mr-2"><font-awesome-icon class="mr-1 h-4 panel-menu-icon" :icon="['fas', 'comments']"/>8</div>
              <div class="mr-2"><font-awesome-icon class="mr-1 h-4 panel-menu-icon" :icon="['fas', 'star']"/>3.6</div>
            </div>
          </div>
        </div>
        <div class="search-item shadow">
          <div class="search-item-img">
            <img class="object-cover object-center" src="~/static/images/dron-8.png" alt="">
          </div>

          <div class="bg-white p-2 flex justify-between items-center">
            <div class="search-avatar flex items-center font-semibold text-sm text-gray-500">
              <img class="search-avatar-img mr-2" src="https://randomuser.me/api/portraits/men/6.jpg" alt=""> John Doe
            </div>
            <div class="flex items-center text-gray-500 text-sm">
              <div class="mr-2"><font-awesome-icon class="mr-1 h-4 panel-menu-icon" :icon="['fas', 'eye']"/>1.5k</div>
              <div class="mr-2"><font-awesome-icon class="mr-1 h-4 panel-menu-icon" :icon="['fas', 'comments']"/>8</div>
              <div class="mr-2"><font-awesome-icon class="mr-1 h-4 panel-menu-icon" :icon="['fas', 'star']"/>3.6</div>
            </div>
          </div>
        </div>
        <div class="search-item shadow">
          <div class="search-item-img">
            <img class="object-cover object-center" src="~/static/images/dron-8.png" alt="">
          </div>

          <div class="bg-white p-2 flex justify-between items-center">
            <div class="search-avatar flex items-center font-semibold text-sm text-gray-500">
              <img class="search-avatar-img mr-2" src="https://randomuser.me/api/portraits/men/6.jpg" alt=""> John Doe
            </div>
            <div class="flex items-center text-gray-500 text-sm">
              <div class="mr-2"><font-awesome-icon class="mr-1 h-4 panel-menu-icon" :icon="['fas', 'eye']"/>1.5k</div>
              <div class="mr-2"><font-awesome-icon class="mr-1 h-4 panel-menu-icon" :icon="['fas', 'comments']"/>8</div>
              <div class="mr-2"><font-awesome-icon class="mr-1 h-4 panel-menu-icon" :icon="['fas', 'star']"/>3.6</div>
            </div>
          </div>
        </div>
        <div class="search-item shadow">
          <div class="search-item-img">
            <img class="object-cover object-center" src="~/static/images/dron-8.png" alt="">
          </div>

          <div class="bg-white p-2 flex justify-between items-center">
            <div class="search-avatar flex items-center font-semibold text-sm text-gray-500">
              <img class="search-avatar-img mr-2" src="https://randomuser.me/api/portraits/men/6.jpg" alt=""> John Doe
            </div>
            <div class="flex items-center text-gray-500 text-sm">
              <div class="mr-2"><font-awesome-icon class="mr-1 h-4 panel-menu-icon" :icon="['fas', 'eye']"/>1.5k</div>
              <div class="mr-2"><font-awesome-icon class="mr-1 h-4 panel-menu-icon" :icon="['fas', 'comments']"/>8</div>
              <div class="mr-2"><font-awesome-icon class="mr-1 h-4 panel-menu-icon" :icon="['fas', 'star']"/>3.6</div>
            </div>
          </div>
        </div>
        <div class="search-item shadow">
          <div class="search-item-img">
            <img class="object-cover object-center" src="~/static/images/dron-8.png" alt="">
          </div>

          <div class="bg-white p-2 flex justify-between items-center">
            <div class="search-avatar flex items-center font-semibold text-sm text-gray-500">
              <img class="search-avatar-img mr-2" src="https://randomuser.me/api/portraits/men/6.jpg" alt=""> John Doe
            </div>
            <div class="flex items-center text-gray-500 text-sm">
              <div class="mr-2"><font-awesome-icon class="mr-1 h-4 panel-menu-icon" :icon="['fas', 'eye']"/>1.5k</div>
              <div class="mr-2"><font-awesome-icon class="mr-1 h-4 panel-menu-icon" :icon="['fas', 'comments']"/>8</div>
              <div class="mr-2"><font-awesome-icon class="mr-1 h-4 panel-menu-icon" :icon="['fas', 'star']"/>3.6</div>
            </div>
          </div>
        </div>
        <div class="search-item shadow">
          <div class="search-item-img">
            <img class="object-cover object-center" src="~/static/images/dron-8.png" alt="">
          </div>

          <div class="bg-white p-2 flex justify-between items-center">
            <div class="search-avatar flex items-center font-semibold text-sm text-gray-500">
              <img class="search-avatar-img mr-2" src="https://randomuser.me/api/portraits/men/6.jpg" alt=""> John Doe
            </div>
            <div class="flex items-center text-gray-500 text-sm">
              <div class="mr-2"><font-awesome-icon class="mr-1 h-4 panel-menu-icon" :icon="['fas', 'eye']"/>1.5k</div>
              <div class="mr-2"><font-awesome-icon class="mr-1 h-4 panel-menu-icon" :icon="['fas', 'comments']"/>8</div>
              <div class="mr-2"><font-awesome-icon class="mr-1 h-4 panel-menu-icon" :icon="['fas', 'star']"/>3.6</div>
            </div>
          </div>
        </div>
        <div class="search-item shadow">
          <div class="search-item-img">
            <img class="object-cover object-center" src="~/static/images/dron-8.png" alt="">
          </div>

          <div class="bg-white p-2 flex justify-between items-center">
            <div class="search-avatar flex items-center font-semibold text-sm text-gray-500">
              <img class="search-avatar-img mr-2" src="https://randomuser.me/api/portraits/men/6.jpg" alt=""> John Doe
            </div>
            <div class="flex items-center text-gray-500 text-sm">
              <div class="mr-2"><font-awesome-icon class="mr-1 h-4 panel-menu-icon" :icon="['fas', 'eye']"/>1.5k</div>
              <div class="mr-2"><font-awesome-icon class="mr-1 h-4 panel-menu-icon" :icon="['fas', 'comments']"/>8</div>
              <div class="mr-2"><font-awesome-icon class="mr-1 h-4 panel-menu-icon" :icon="['fas', 'star']"/>3.6</div>
            </div>
          </div>
        </div>



      </div>

      <div class="my-10 text-center">
        <button class="btn pill-button px-12 py-1 font-semibold">load more +</button>
      </div>

    </div>

  </div>


</template>

<script>
  import LeftMenu from '~/components/user/common-left-side-menu.vue'

  export default {
    middleware: "auth",
    layout: 'user',
    name: "search-index",
    components: {
      LeftMenu
    },
    data: function () {
      return {}
    },
    computed: {
      leftMenu() {
        return this.$store.state.usermenu.openLeftMenu;
      }
    },
    mounted() {

    },
    methods: {}
  }
</script>

<style scoped>
  .search-banner{
    width: 100%;
    height: 200px;
  }
  .search-banner img{
    height: 100%;
  }
  .search-item-img img{
    width: 100%;
  }
  .search-avatar-img{
    @apply rounded-full;
    width: 28px;
    height: 28px;
  }
  .search-item{
    @apply mb-5 mx-auto;
  }
  @screen lg{
    .search-panel{
      width: 100%;
      max-width: 1290px;
    }
    .search-banner{
      height: 350px;
    }
    .search-item{
      @apply mr-2;
      width: 300px;
    }
    .search-item-img{
      height: 300px;
    }
    .search-item-img img{
      width: auto;
      height: 300px;
    }


    .search-item{
      max-width: 293px;
    }
    .search-item-img{
      height: 300px;
    }


  }
</style>
