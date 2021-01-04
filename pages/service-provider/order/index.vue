<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow mb-20">
      <div class="main-contents">
        <h1 class="mt-10 mb-5 text-1xl font-bold border-b-2 pb-2">Orders</h1>
        <div class="flex justify-between items-center mb-3">
            <div>
              <button class="bg-white border border-gray-400 rounded px-3 py-2 text-xs">
                All payment methods <font-awesome-icon class="" :icon="['fas', 'angle-down']"/>
              </button>
              <button class="bg-white border border-gray-400 rounded px-3 py-2 text-xs">
                All type products <font-awesome-icon class="" :icon="['fas', 'angle-down']"/>
              </button>
              <button class="bg-white border border-gray-400 rounded px-3 py-2 text-xs">
                2018 <font-awesome-icon class="" :icon="['fas', 'angle-down']"/>
              </button>
              <button class="bg-white border border-gray-400 rounded px-3 py-2 text-xs">
                Order Status <font-awesome-icon class="" :icon="['fas', 'angle-down']"/>
              </button>
              <button class="bg-white border border-gray-400 rounded px-3 py-2 text-xs">
                Type <font-awesome-icon class="" :icon="['fas', 'angle-down']"/>
              </button>
            </div>
            <div class="flex justify-between flex-none">
                <div class="flex w-fit-content bg-white justify-center border border-gray-400 rounded items-center mr-2 content-center">
                    <div class="h-8 relative w-10">
                        <font-awesome-icon class="ml-1 h-4 text-gray-400 absolute-center-h-v" :icon="['fas', 'search']"/>
                    </div>
                    <input placeholder="Find order" class="bg-white outline-none h-8 text-gray-800 pr-3">
                </div>
            </div>
        </div>


        <div class="md:flex">
          <div class="md:w-full">
        <div class="bg-white rounded border-gray-400 border shadow">
        <div class="p-5 pt-0">
        <table class="text-left w-full border-collapse">
		      <thead class="bg-white text-gray-700">
			        <tr class="mb-4">
                <th class="p-4 border-b border-gray-300">
                  <font-awesome-icon class="text-sm" :icon="['fas', 'sort']"/> Image
                </th>
                <th class="p-4 border-b border-gray-300">
                  <font-awesome-icon class="text-sm" :icon="['fas', 'sort']"/> Title
                </th>
                <th class="p-4 border-b border-gray-300">
                  <font-awesome-icon class="text-sm" :icon="['fas', 'sort']"/> ID
                </th>
                <th class="p-4 border-b border-gray-300">
                  <font-awesome-icon class="text-sm" :icon="['fas', 'sort']"/> Type
                </th>
                <th class="p-4 border-b border-gray-300">
                  <font-awesome-icon class="text-sm" :icon="['fas', 'sort']"/> Quantity
                </th>
                <th class="p-4 border-b border-gray-300">
                  <font-awesome-icon class="text-sm" :icon="['fas', 'sort']"/> Price
                </th>
                <th class="p-4 border-b border-gray-300">
                  <font-awesome-icon class="text-sm" :icon="['fas', 'sort']"/> Order Status
                </th>
                <th class="p-4 border-b border-gray-300">
                  <font-awesome-icon class="text-sm" :icon="['fas', 'sort']"/> Start End
                </th>
            </tr>
		      </thead>
          <tbody class="bg-grey-light text-gray-700">
            <tr class="w-full mb-4" v-for="index in 2" :key="index">
              <td class="p-4 text-sm border-b">
                <label><img class="inline-flex h-20" src="~/static/images/product.png"></label>
              </td>
              <td class="p-4 text-sm border-b">
                <div>
                  <div class="font-bold">Lamborghini Aventado PCB</div>
                  <div class="text-gray-500">Electronics</div>
                  <div class="text-gray-500">Order ID: <span class="text-gray-700">123456</span></div>
                </div>
              </td>
              <td class="p-4 text-sm border-b font-bold">12</td>
              <td class="p-4 text-sm border-b font-bold">Type</td>
              <td class="p-4 text-sm border-b font-bold">5</td>
              <td class="p-4 text-sm border-b font-bold">$100</td>
              <td class="p-4 text-sm border-b font-bold">Opened</td>
              <td class="p-4 text-sm border-b flex items-center justify-between">
                <p class="font-bold">
                  <span class="text-xs">Start:</span><br>
                  <span class="text-base">04/24/2018</span><br>
                  <span class="text-xs">End:</span><br>
                  <span class="text-base">04/24/2018</span><br>
                </p>
                <div>
                  <button class="bg-white border border-gray-400 rounded px-3 py-2 text-xs">
                    Invoice
                  </button>
                  <button class="bg-white border border-gray-400 rounded px-3 py-2 text-xs">
                    Details
                  </button>
                </div>
              </td>
            </tr>    
          </tbody>
	      </table>

        <div class="mt-5 relative">
          <!--Paging-->
          <div class="mx-auto w-content">
            <span class="inline-block mr-4 cursor-pointer"><font-awesome-icon class="mr-1 h-4" :icon="['fas', 'angle-double-left']"/> Previous</span>
            1 <span class="text-lg text-ideeza">2</span> 3
            <span class="inline-block ml-4 cursor-pointer">Next <font-awesome-icon class="ml-2 h-4" :icon="['fas', 'angle-double-right']"/></span>
          </div>
          <div class="lg:absolute flex items-center top-0 w-content lg:w-auto right-0 my-3 lg:my-0 mx-auto lg:mx-0">
            <span class="inline-block">Show</span>
            <select class="inline field ml-2 h-10">
              <option>1-3</option>
            </select>
          </div>
        </div>
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
  import LeftMenu from '~/components/service-provider/common-left-side-menu.vue'
  import MyIdeeza from '~/components/user/my-ideeza/new-ideeza.vue'

  export default {
    layout: 'service-provider',
    components: {
      LeftMenu,
      MyIdeeza,
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