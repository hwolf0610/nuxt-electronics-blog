<template>
  <div class="mt-16 shadow-md categories">

    <!--Search-->
    <div class="flex bg-gray-200 border-b border-solid border-gray-300">
      <div class="flex-shrink flex items-center p-2 bg-gary-100">
        <font-awesome-icon class="h-4 inline text-xl text-gray-500" :icon="['fas', 'search']"/>
      </div>
      <div class="flex-grow">
        <input class="w-full py-5 border-0 outline-none bg-gray-200 " placeholder="search">
      </div>
    </div>

    <!--Left Menu-->
    <div class="">

      <div class="main-menu-item">
        <div @click="main_1 = !main_1" class="menu-item hover:bg-gray-200 ">
          <div class="flex flex-grow items-center main">
            <font-awesome-icon class="mr-5 h-4 inline text-xl text-gray-500 main-arrow" :class="{'active': main_1}" :icon="['fas', 'chevron-right']"/>
            <div>Core Code</div>
          </div>
          <div class="flex flex-shrink items-center self-end">
            <font-awesome-icon class="h-3 mr-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'pen']"/>
            <font-awesome-icon class="h-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'trash']"/>
          </div>
        </div>

        <div v-if="main_1" @click="main_2 = !main_2" class="menu-item-2 hover:bg-gray-200 ">
          <div class="flex flex-grow items-center main">
            <font-awesome-icon class="mr-5 h-4 inline text-xl text-gray-500 main-arrow" :class="{'active': main_2}" :icon="['fas', 'chevron-right']"/>
            <div>CPU</div>
          </div>
          <div class="flex flex-shrink items-center self-end">
            <font-awesome-icon class="h-3 mr-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'pen']"/>
            <font-awesome-icon class="h-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'trash']"/>
          </div>
        </div>

        <div v-if="main_2 && main_1" class="">

          <div class="menu-sub-item hover:bg-gray-200">
            <div class="flex flex-grow items-center main">
              <div>Atmega</div>
            </div>
            <div class="flex flex-shrink items-center self-end">
              <font-awesome-icon class="h-3 mr-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'pen']"/>
              <font-awesome-icon class="h-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'trash']"/>
            </div>
          </div>

          <div class="menu-sub-item hover:bg-gray-200">
            <div class="flex flex-grow items-center main">
              <div>Pic</div>
            </div>
            <div class="flex flex-shrink items-center self-end">
              <font-awesome-icon class="h-3 mr-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'pen']"/>
              <font-awesome-icon class="h-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'trash']"/>
            </div>
          </div>

          <div class="menu-sub-item hover:bg-gray-200">
            <div class="flex flex-grow items-center main">
              <div>Intel</div>
            </div>
            <div class="flex flex-shrink items-center self-end">
              <font-awesome-icon class="h-3 mr-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'pen']"/>
              <font-awesome-icon class="h-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'trash']"/>
            </div>
          </div>

          <div class="menu-sub-item hover:bg-gray-200">
            <div class="flex flex-grow items-center main">
              <div>AMD</div>
            </div>
            <div class="flex flex-shrink items-center self-end">
              <font-awesome-icon class="h-3 mr-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'pen']"/>
              <font-awesome-icon class="h-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'trash']"/>
            </div>
          </div>


        </div>
      </div>

      <div class="main-menu-item">
        <div @click="main_3 = !main_3" class="menu-item hover:bg-gray-200 ">
          <div class="flex flex-grow items-center main">
            <font-awesome-icon class="mr-5 h-4 inline text-xl text-gray-500 main-arrow" :class="{'active': main_3}" :icon="['fas', 'chevron-right']"/>
            <div>Built In</div>
          </div>
          <div class="flex flex-shrink items-center self-end">
            <font-awesome-icon class="h-3 mr-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'pen']"/>
            <font-awesome-icon class="h-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'trash']"/>
          </div>
        </div>

        <div v-if="main_3" @click="main_4 = !main_4" class="menu-item-2 hover:bg-gray-200 ">
          <div class="flex flex-grow items-center main">
            <font-awesome-icon class="mr-5 h-4 inline text-xl text-gray-500 main-arrow" :class="{'active': main_4}" :icon="['fas', 'chevron-right']"/>
            <div>CPU</div>
          </div>
          <div class="flex flex-shrink items-center self-end">
            <font-awesome-icon class="h-3 mr-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'pen']"/>
            <font-awesome-icon class="h-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'trash']"/>
          </div>
        </div>

        <div v-if="main_3 && main_4" class="">

          <div class="menu-sub-item hover:bg-gray-200">
            <div class="flex flex-grow items-center main">
              <div>Atmega</div>
            </div>
            <div class="flex flex-shrink items-center self-end">
              <font-awesome-icon class="h-3 mr-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'pen']"/>
              <font-awesome-icon class="h-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'trash']"/>
            </div>
          </div>

          <div class="menu-sub-item hover:bg-gray-200">
            <div class="flex flex-grow items-center main">
              <div>Pic</div>
            </div>
            <div class="flex flex-shrink items-center self-end">
              <font-awesome-icon class="h-3 mr-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'pen']"/>
              <font-awesome-icon class="h-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'trash']"/>
            </div>
          </div>

          <div class="menu-sub-item hover:bg-gray-200">
            <div class="flex flex-grow items-center main">
              <div>Intel</div>
            </div>
            <div class="flex flex-shrink items-center self-end">
              <font-awesome-icon class="h-3 mr-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'pen']"/>
              <font-awesome-icon class="h-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'trash']"/>
            </div>
          </div>

          <div class="menu-sub-item hover:bg-gray-200">
            <div class="flex flex-grow items-center main">
              <div>AMD</div>
            </div>
            <div class="flex flex-shrink items-center self-end">
              <font-awesome-icon class="h-3 mr-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'pen']"/>
              <font-awesome-icon class="h-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'trash']"/>
            </div>
          </div>


        </div>
      </div>

    </div>

    <div class="bg-gray-200 cursor-pointer px-6 py-3">
      + Add new category
    </div>

  </div>
</template>

<script>
  export default {
    name: "electronics",
    data: function() {
      return {
        main_1: false,
        main_2: false,
        main_3: false,
        main_4: false
      }
    }

  }
</script>

<style scoped>
  .categories{
    width: 100%;
    max-width: 400px;
  }
  .main-menu-item{
    @apply border-b border-gray-300 border-solid;
  }
  .menu-item{
    @apply p-3 cursor-pointer flex items-center;
  }
  .menu-item-2{
    @apply pl-8 pr-3 py-3 cursor-pointer flex items-center;
  }
  .menu-sub-item{
    @apply pl-12 pr-3 py-3 flex items-center;
  }
  .main{
    @apply font-semibold;
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
  .main-arrow{
    transition: all 0.4s;
  }
  .main-arrow.active{
    transform: rotate(90deg);
  }
  .sub-menu{
    transition: all 0.1s;
  }
  .left-dropdown-enter-active,
  .left-dropdown-leave-active {
    transition: all 0.3s;
  }
  .left-dropdown-enter,
  .left-dropdown-leave-to {
    opacity: 0;
    transform: translateY(10px);
  }
</style>
