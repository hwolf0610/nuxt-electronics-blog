<template>
  <div>
    <h1 class="text-2xl border-b-4 border-solid border-ideeza pb-5 mt-8">Manage Question Algorithm</h1>

    <div class="categories mt-16 mb-10">
      <TextField placeholder="write your description" />
    </div>

    <div class="shadow-md categories">



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
              <div>What is the shape</div>
            </div>
            <div class="flex flex-shrink items-center self-end">
              <font-awesome-icon class="h-3 mr-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'pen']"/>
              <font-awesome-icon class="h-3 inline text-xs text-gray-400 mr-3 cursor-pointer hover:text-gray-600" :icon="['fas', 'trash']"/>
              <font-awesome-icon class="h-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'plus']"/>
            </div>
          </div>


          <div v-if="main_1" class="">

            <div class="menu-sub-item hover:bg-gray-200">
              <div class="flex flex-grow items-center main">
                <div>Circle</div>
              </div>
              <div class="flex flex-shrink items-center self-end">
                <font-awesome-icon class="h-3 mr-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'pen']"/>
                <font-awesome-icon class="h-3 inline text-xs text-gray-400 mr-3 cursor-pointer hover:text-gray-600" :icon="['fas', 'trash']"/>
<font-awesome-icon class="h-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'plus']"/>
              </div>
            </div>

            <div class="menu-sub-item hover:bg-gray-200">
              <div class="flex flex-grow items-center main">
                <div>Square</div>
              </div>
              <div class="flex flex-shrink items-center self-end">
                <font-awesome-icon class="h-3 mr-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'pen']"/>
                <font-awesome-icon class="h-3 inline text-xs text-gray-400 mr-3 cursor-pointer hover:text-gray-600" :icon="['fas', 'trash']"/>
<font-awesome-icon class="h-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'plus']"/>
              </div>
            </div>

            <div class="menu-sub-item hover:bg-gray-200">
              <div class="flex flex-grow items-center main">
                <div>Triangle</div>
              </div>
              <div class="flex flex-shrink items-center self-end">
                <font-awesome-icon class="h-3 mr-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'pen']"/>
                <font-awesome-icon class="h-3 inline text-xs text-gray-400 mr-3 cursor-pointer hover:text-gray-600" :icon="['fas', 'trash']"/>
<font-awesome-icon class="h-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'plus']"/>
              </div>
            </div>

            <div class="menu-sub-item hover:bg-gray-200">
              <div class="flex flex-grow items-center main">
                <div>Oval</div>
              </div>
              <div class="flex flex-shrink items-center self-end">
                <font-awesome-icon class="h-3 mr-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'pen']"/>
                <font-awesome-icon class="h-3 inline text-xs text-gray-400 mr-3 cursor-pointer hover:text-gray-600" :icon="['fas', 'trash']"/>
<font-awesome-icon class="h-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'plus']"/>
              </div>
            </div>


          </div>
        </div>

        <div class="main-menu-item">
          <div @click="main_3 = !main_3" class="menu-item hover:bg-gray-200 ">
            <div class="flex flex-grow items-center main">
              <font-awesome-icon class="mr-5 h-4 inline text-xl text-gray-500 main-arrow" :class="{'active': main_3}" :icon="['fas', 'chevron-right']"/>
              <div>What is the color ?</div>
            </div>
            <div class="flex flex-shrink items-center self-end">
              <font-awesome-icon class="h-3 mr-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'pen']"/>
              <font-awesome-icon class="h-3 inline text-xs text-gray-400 mr-3 cursor-pointer hover:text-gray-600" :icon="['fas', 'trash']"/>
<font-awesome-icon class="h-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'plus']"/>
            </div>
          </div>

          <div v-if="main_3" class="">

            <div class="menu-sub-item hover:bg-gray-200">
              <div class="flex flex-grow items-center main">
                <div>Red</div>
              </div>
              <div class="flex flex-shrink items-center self-end">
                <font-awesome-icon class="h-3 mr-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'pen']"/>
                <font-awesome-icon class="h-3 inline text-xs text-gray-400 mr-3 cursor-pointer hover:text-gray-600" :icon="['fas', 'trash']"/>
<font-awesome-icon class="h-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'plus']"/>
              </div>
            </div>

            <div class="menu-sub-item hover:bg-gray-200">
              <div class="flex flex-grow items-center main">
                <div>Green</div>
              </div>
              <div class="flex flex-shrink items-center self-end">
                <font-awesome-icon class="h-3 mr-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'pen']"/>
                <font-awesome-icon class="h-3 inline text-xs text-gray-400 mr-3 cursor-pointer hover:text-gray-600" :icon="['fas', 'trash']"/>
<font-awesome-icon class="h-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'plus']"/>
              </div>
            </div>

            <div class="menu-sub-item hover:bg-gray-200">
              <div class="flex flex-grow items-center main">
                <div>Blue</div>
              </div>
              <div class="flex flex-shrink items-center self-end">
                <font-awesome-icon class="h-3 mr-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'pen']"/>
                <font-awesome-icon class="h-3 inline text-xs text-gray-400 mr-3 cursor-pointer hover:text-gray-600" :icon="['fas', 'trash']"/>
<font-awesome-icon class="h-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'plus']"/>
              </div>
            </div>

            <div class="menu-sub-item hover:bg-gray-200">
              <div class="flex flex-grow items-center main">
                <div>Lime</div>
              </div>
              <div class="flex flex-shrink items-center self-end">
                <font-awesome-icon class="h-3 mr-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'pen']"/>
                <font-awesome-icon class="h-3 inline text-xs text-gray-400 mr-3 cursor-pointer hover:text-gray-600" :icon="['fas', 'trash']"/>
<font-awesome-icon class="h-3 inline text-xs text-gray-400 cursor-pointer hover:text-gray-600" :icon="['fas', 'plus']"/>
              </div>
            </div>


          </div>
        </div>

      </div>

      <div class="bg-gray-200 cursor-pointer px-6 py-3">
        + Add new question
      </div>

    </div>


  </div>
</template>

<script>
  import TextField from "~/components/form/text-field.vue"
  export default {
    name: "electronics",
    data: function() {
      return {
        main_1: false,
        main_2: false,
        main_3: false,
        main_4: false
      }
    },
    components: {
      TextField
    }
  }
</script>

<style scoped>
  .categories{
    width: 100%;
    max-width: 600px;
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
