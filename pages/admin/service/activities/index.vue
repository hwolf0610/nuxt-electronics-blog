<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow mb-20">
      <div class="main-contents">

        <div class="flex">
          <div class="flex w-1/2">
            <h1 class="flex text-3xl text-ideeza">Activities</h1>
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
              Contact activities
            </button>
            <button class="items-center bg-white border border-gray-300 rounded px-3 py-1 text-gray-600 ml-2">
              All users
            </button>
            <button class="items-center bg-white border border-gray-300 rounded px-3 py-1 text-gray-600 ml-2">
              All activities
            </button>
            <button class="items-center bg-ideeza border rounded px-3 py-1 text-white ml-2">
              <font-awesome-icon class="text-sm" :icon="['fas', 'user-plus']"/> Add Document
            </button>
          </div>
        </div>

        <div class="md:flex">
          <table class="text-left w-full border-collapse mt-5">
		        <thead class="">
			        <tr class="mb-4">
                <th class="py-2 px-10 uppercase w-3/4">Title</th>
                <th class="py-2 uppercase w-1/4">Created</th>
              </tr>
		        </thead>
            <tbody class="bg-grey-light overflow-y-auto text-gray-700">
              <tr class="w-full mb-4 bg-white rounded" v-for="index in 8" :key="index">
                <td class="py-2 px-10 text-sm border-b-4 w-3/4">
                  <img class="inline-flex h-10 w-10 rounded-full" src="~/static/images/product.png"> 
                  <div class="inline-block text-xs align-middle">
                     <span class="font-bold">Added Document</span>
                    <br>
                    <span class="text-gray-500">Document type - Local drive</span>
                  </div>
                </td>
                <td class="py-2 text-sm border-b-4 w-1/4 font-bold">4 Days Ago</td>
              </tr>   
            </tbody>
	        </table>
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
