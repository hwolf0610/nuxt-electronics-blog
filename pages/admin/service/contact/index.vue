<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow mb-20">
      <div class="main-contents">

        <div class="flex">
          <div class="flex w-1/2">
            <h1 class="flex text-3xl text-ideeza">Contacts</h1>
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
              Filter <font-awesome-icon class="text-sm" :icon="['fas', 'filter']"/>
            </button>
            <button class="items-center bg-ideeza border rounded px-3 py-1 text-white ml-2">
              <font-awesome-icon class="text-sm" :icon="['fas', 'user-plus']"/> Add Contact
            </button>
            <button class="items-center light-pink rounded px-3 py-1 text-ideeza ml-2">
              <font-awesome-icon class="text-sm" :icon="['fas', 'ellipsis-h']"/>
            </button>
          </div>
        </div>

        <div class="md:flex">
          <table class="text-left w-full border-collapse mt-5">
		      <thead class="">
			        <tr class="mb-4">
                <th class="py-2">
                  <button class="items-center bg-white rounded px-3 py-1 text-gray-600">
                    <font-awesome-icon class="text-sm" :icon="['fas', 'plus']"/>
                  </button>
                </th>
                <th class="py-2 uppercase">First Name</th>
                <th class="py-2 uppercase">Last Name</th>
                <th class="py-2 uppercase">Email</th>
                <th class="py-2 uppercase">Phone</th>
                <th class="py-2 uppercase">Tags</th>
                <th class="py-2 uppercase">Created Date</th>
                <th class="py-2">
                   <button class="items-center bg-white rounded px-2 py-1 text-gray-600">
                    <font-awesome-icon class="text-sm" :icon="['fas', 'caret-left']"/>
                  </button>
                  <button class="items-center bg-white rounded px-2 py-1 text-gray-600">
                    <font-awesome-icon class="text-sm" :icon="['fas', 'caret-right']"/>
                  </button>
                </th>
            </tr>
		      </thead>
    <tbody class="bg-grey-light overflow-y-auto text-gray-700">
      <tr class="w-full mb-4 bg-white rounded" v-for="index in 8" :key="index">
              <td class="p-2 text-sm border-b-4">
                <input type="checkbox" />
              </td>
              <td class="py-2 text-sm border-b-4"><img class="inline-flex h-10 w-10 rounded-full" src="~/static/images/product.png"> Andrew</td>
              <td class="py-2 text-sm border-b-4">Heston</td>
              <td class="py-2 text-sm border-b-4">abc@xyz.com</td>
              <td class="py-2 text-sm border-b-4">022-634-1573</td>
              <td class="py-2 text-sm border-b-4">
                <button class="items-center bg-gray-200 rounded px-2 py-1 text-gray-600">
                test tag
                </button>
                <button class="items-center bg-gray-200 rounded px-2 py-1 text-gray-600">
                test tag
                </button>
                <button class="items-center bg-gray-200 rounded px-2 py-1 text-gray-600">
                test tag
                </button>
              </td>
              <td class="py-2 text-sm border-b-4">22 OCT 2020</td>
              <td class="py-2 text-sm border-b-4 px-3"><font-awesome-icon class="text-sm" :icon="['fas', 'ellipsis-h']"/></td>
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
