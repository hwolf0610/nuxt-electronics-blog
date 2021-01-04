<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow mb-20">
      <div class="main-contents">

        <div class="flex">
          <div class="flex w-1/2">
            <h1 class="flex text-3xl text-ideeza">Deals</h1>
            <div class="flex items-center ml-5 text-xs">14,234 Total</div>
            <div class="flex items-center ml-5 text-xs">
              Sort By:
              <button class="px-3 py-1 text-gray-800 text-bold">
                Date Created <font-awesome-icon class="text-sm" :icon="['fa', 'chevron-down']"/>
              </button>
            </div>
          </div>
          <div class="flex w-1/2 justify-end">
            <button class="items-center bg-white border border-gray-300 rounded px-3 py-1 text-gray-600">
              <font-awesome-icon class="text-sm" :icon="['fas', 'bars']"/>
            </button>
            <button class="items-center bg-white border border-gray-300 rounded px-3 py-1 text-gray-600 ml-2">
              <font-awesome-icon class="text-sm" :icon="['fas', 'filter']"/>
            </button>
            <button class="items-center bg-white border border-gray-300 rounded px-3 py-1 text-gray-600 ml-2">
              <font-awesome-icon class="text-sm" :icon="['fas', 'eye']"/>
            </button>
            <button class="items-center bg-ideeza border rounded px-3 py-1 text-white ml-2">
              <font-awesome-icon class="text-sm" :icon="['fas', 'user-plus']"/> Add Deal
            </button>
          </div>
        </div>

        <div class="md:flex mt-10">
          <div class="w-1/4 mr-3">
            <div class="bg-gray-600 text-white p-4 rounded text-sm flex justify-between">
              <div>Test 64</div>
              <div><font-awesome-icon class="text-sm" :icon="['fas', 'ellipsis-h']"/></div>
            </div>

            <div class="bg-white p-4 rounded mt-2" v-for="index in 4" :key="index">
              <div class="text-gray-900 text-sm">Investment deal for series A </div>
              <div class="text-gray-500 text-sm mt-1">$212,347.22</div>
              <div class="mt-2">
                <img class="inline-flex h-8 w-8 rounded-full" src="~/static/images/product.png">
                <img class="inline-flex h-8 w-8 rounded-full" src="~/static/images/product.png">
                <img class="inline-flex h-8 w-8 rounded-full" src="~/static/images/product.png">
              </div>
              <div class="text-gray-500 text-xs mt-2 pl-5">
                4 months ago  
              </div>
            </div>
          </div>

          <div class="w-1/4 mr-3">
            <div class="bg-blue-600 text-white p-4 rounded text-sm flex justify-between">
              <div>Test 64</div>
              <div><font-awesome-icon class="text-sm" :icon="['fas', 'ellipsis-h']"/></div>
            </div>

            <div class="bg-white p-4 rounded mt-2" v-for="index in 4" :key="index">
              <div class="text-gray-900 text-sm">Investment deal for series A </div>
              <div class="text-gray-500 text-sm mt-1">$212,347.22</div>
              <div class="mt-2">
                <img class="inline-flex h-8 w-8 rounded-full" src="~/static/images/product.png">
                <img class="inline-flex h-8 w-8 rounded-full" src="~/static/images/product.png">
                <img class="inline-flex h-8 w-8 rounded-full" src="~/static/images/product.png">
              </div>
              <div class="text-gray-500 text-xs mt-2 pl-5">
                4 months ago  
              </div>
            </div>
          </div>

          <div class="w-1/4 mr-3">
            <div class="bg-green-600 text-white p-4 rounded text-sm flex justify-between">
              <div>Test 64</div>
              <div><font-awesome-icon class="text-sm" :icon="['fas', 'ellipsis-h']"/></div>
            </div>

            <div class="bg-white p-4 rounded mt-2" v-for="index in 4" :key="index">
              <div class="text-gray-900 text-sm">Investment deal for series A </div>
              <div class="text-gray-500 text-sm mt-1">$212,347.22</div>
              <div class="mt-2">
                <img class="inline-flex h-8 w-8 rounded-full" src="~/static/images/product.png">
                <img class="inline-flex h-8 w-8 rounded-full" src="~/static/images/product.png">
                <img class="inline-flex h-8 w-8 rounded-full" src="~/static/images/product.png">
              </div>
              <div class="text-gray-500 text-xs mt-2 pl-5">
                4 months ago  
              </div>
            </div>
          </div>

          <div class="w-1/4">
            <div class="bg-red-600 text-white p-4 rounded text-sm flex justify-between">
              <div>Test 64</div>
              <div><font-awesome-icon class="text-sm" :icon="['fas', 'ellipsis-h']"/></div>
            </div>

            <div class="bg-white p-4 rounded mt-2" v-for="index in 4" :key="index">
              <div class="text-gray-900 text-sm">Investment deal for series A </div>
              <div class="text-gray-500 text-sm mt-1">$212,347.22</div>
              <div class="mt-2">
                <img class="inline-flex h-8 w-8 rounded-full" src="~/static/images/product.png">
                <img class="inline-flex h-8 w-8 rounded-full" src="~/static/images/product.png">
                <img class="inline-flex h-8 w-8 rounded-full" src="~/static/images/product.png">
              </div>
              <div class="text-gray-500 text-xs mt-2 pl-5">
                4 months ago  
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
  .user-chart {
    height: calc(32rem + 0.75rem);
    width: 100%;
  }
.sales-table{
  height: calc(13rem + 0.29rem);
}
.simple-table tbody td {
  padding: 0.5rem;
}
.simple-table th {
  font-size: 0.85rem;
}
.light-pink{
  background: #ffc5f2;
}
</style>
