<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow mb-20">
      <div class="main-contents">
        <h1 class="mt-10 mb-2 text-xl font-bold border-b-2 pb-2">Transaction History</h1>
        <div class="flex justify-between items-center mb-3 border-b-2 pb-2">
          <div class="flex">
            <div class="text-1xl font-bold text-ideeza mr-3">Completed Payouts</div>
            <div class="text-1xl font-bold text-gray-700">Completed Payouts</div>
          </div>
          <div>
            Paid Out: <span class="font-bold">150$</span>
          </div>
        </div>
        <div class="flex justify-between items-center mb-3">
            <div>
              <button class="bg-white border border-gray-400 rounded px-3 py-2 text-xs">
                All payment methods <font-awesome-icon class="" :icon="['fas', 'angle-down']"/>
              </button>
              <button class="bg-white border border-gray-400 rounded px-3 py-2 text-xs">
                All products <font-awesome-icon class="" :icon="['fas', 'angle-down']"/>
              </button>
              <button class="bg-white border border-gray-400 rounded px-3 py-2 text-xs">
                2018 <font-awesome-icon class="" :icon="['fas', 'angle-down']"/>
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
                    <input placeholder="Find transaction" class="bg-white outline-none h-8 text-gray-800 pr-3">
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
                  <font-awesome-icon class="text-sm" :icon="['fas', 'sort']"/> Date
                </th>
                <th class="p-4 border-b border-gray-300">
                  <font-awesome-icon class="text-sm" :icon="['fas', 'sort']"/> Payment Method
                </th>
                <th class="p-4 border-b border-gray-300">
                  <font-awesome-icon class="text-sm" :icon="['fas', 'sort']"/> Price
                </th>
                <th class="p-4 border-b border-gray-300">
                  Invoice
                </th>
            </tr>
		      </thead>
          <tbody class="bg-grey-light text-gray-700">
            <tr class="w-full mb-4" v-for="index in 2" :key="index">
              <td class="p-4 text-sm border-b">
                <div>
                  <div class="font-bold">Lamborghini Aventado PCB</div>
                  <div class="text-gray-600">Electronics</div>
                  <div class="text-gray-600">Order ID: <span class="text-gray-900 font-bold">123456</span></div>
                </div>
              </td>
              <td class="p-4 text-sm border-b font-bold">12</td>
              <td class="p-4 text-sm border-b font-bold">Type</td>
              <td class="p-4 text-sm border-b font-bold">5</td>
              <td class="p-4 text-sm border-b font-bold">Jan 23, 2019</td>
              <td class="p-4 text-sm border-b font-bold">IBAN ******0969</td>
              <td class="p-4 text-sm border-b font-bold">$100</td>
              <td class="p-4 text-sm border-b">
                <img class="h-10" src="~/static/images/bill.png">
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

    <div class="mt-5 mb-10 flex justify-end">
      <button class="bg-ideeza border border-gray-400 rounded-full px-5 py-2 text-white">
        Download .CSV
      </button>
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