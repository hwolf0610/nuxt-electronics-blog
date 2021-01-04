<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow mb-20">
      <div class="main-contents">
        <div class="md:flex">
          <div class="md:w-full">
        <div class="bg-white rounded border-ideeza border shadow">
        <div class="flex justify-between pt-5 pl-5 pr-5 items-center mb-3">
            <h6 class="text-ideeza font-bold text-sm flex-shrink">Manage News</h6>
            <div class="flex justify-between flex-none">
                <div class="flex w-fit-content bg-white justify-center border border-ideeza rounded items-center mr-2 content-center">
                    <div class="h-8 relative w-10">
                        <font-awesome-icon class="ml-1 h-4 text-gray-400 absolute-center-h-v" :icon="['fas', 'search']"/>
                    </div>
                    <input placeholder="search" class="bg-white outline-none h-8 text-gray-800 pr-3">
                </div>
                <a href="/admin/news/add" class="bg-white border border-ideeza rounded px-3 py-1 text-ideeza">Add New <font-awesome-icon class="text-sm" :icon="['fa', 'plus']"/></a>
                <font-awesome-icon class="text-xl mt-2 ml-4 text-gray-500" :icon="['fas', 'cog']"/>
            </div>
        </div>
        <div class="pl-5 pb-2">
            <button class="font-bold text-sm mr-3 text-ideeza-dark">Delete</button>
            <button class="font-bold text-sm mr-3 text-ideeza-dark">Print</button>
            <button class="font-bold text-sm mr-3 text-ideeza-dark">Export</button>
        </div>
        <div class="overflow-x-auto max-96-vw">
        <table class="text-left w-full border-collapse">
		      <thead class="bg-white text-ideeza-dark">
			        <tr class="mb-4">
                <th class="px-10 py-4 border-t border-b border-blue-300">
                  <input  type="checkbox" id="ad"/>
                  <label for="ad">News Name</label>
                  <font-awesome-icon class="text-sm mt-2 ml-1 text-green-300" :icon="['fas', 'arrow-down']"/>
                </th>
                <th class="px-10 py-4 border-t border-b border-blue-300">
                    Date
                    <font-awesome-icon class="text-sm mt-2 ml-1 text-green-300" :icon="['fas', 'arrow-down']"/> 
                </th>
                <th class="px-10 py-4 border-t border-b border-blue-300 w-1/8">
                    Actions
                    <font-awesome-icon class="text-sm mt-2 ml-1 text-green-300" :icon="['fas', 'arrow-down']"/> 
                </th>
            </tr>
		      </thead>
    <tbody class="bg-grey-light overflow-y-auto text-ideeza-dark" >
      <tr class="w-full mb-4" v-for="index in 4" :key="index">
              <td class="p-10 text-sm border-b">
                <input type="checkbox" />
                <label>How Ideeza can make the world a better place</label>
              </td>
              <td class="p-10 text-sm border-b">10 Jul, 2019</td>
              <td class="p-10 text-sm border-b flex items-center">
                <p class="text-ideeza-dark font-bold">
                  <font-awesome-icon class="text-xl mr-1" :icon="['far', 'eye']" />
                  <font-awesome-icon class="text-xl mr-1" :icon="['fas', 'pause']" />
                  <font-awesome-icon class="text-xl mr-1" :icon="['fas', 'check']" />
                  <font-awesome-icon class="text-xl mr-5" :icon="['fas', 'times']" />
                </p>
                <font-awesome-icon class="text-xl ml-5 text-gray-500" :icon="['fa', 'grip-vertical']" />
              </td>
            </tr>
            
      </tbody>
	</table>

        <ul class="flex list-reset w-auto mt-5 mb-3 justify-center">
          <li><a class="block hover:bg-blue border-2 border-ideeza px-3 py-2 mx-2" href="#">1</a></li>
          <li><a class="block hover:bg-blue border border-ideeza px-3 py-2 mx-2" href="#">2</a></li>
          <li><a class="block hover:bg-blue border border-ideeza px-3 py-2 mx-2" href="#">3</a></li>
          <li><a class="block hover:bg-blue border border-ideeza px-3 py-2 mx-2" href="#">4</a></li>
          <li><a class="block hover:bg-blue border border-ideeza px-3 py-2 mx-2" href="#">5</a></li>
        </ul>
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
        users: [{
            id: 1,
            name: 'Michael Scott',
            email: 'marchas@gmail.com',
            type: 1,
            date_modified: '07/04/1927',
            role: 1
          },
          {
            id: 2,
            name: 'Michael Scott',
            email: 'marchas@gmail.com',
            type: 2,
            date_modified: '07/04/1927',
            role: 2
          },
          {
            id: 3,
            name: 'Michael Scott',
            email: 'marchas@gmail.com',
            type: 1,
            date_modified: '07/04/1927',
            role: 2
          },
          {
            id: 4,
            name: 'Michael Scott',
            email: 'marchas@gmail.com',
            type: 3,
            date_modified: '07/04/1927',
            role: 1
          },
          {
            id: 5,
            name: 'Michael Scott',
            email: 'marchas@gmail.com',
            type: 3,
            date_modified: '07/04/1927',
            role: 1
          },
          {
            id: 6,
            name: 'Michael Scott',
            email: 'marchas@gmail.com',
            type: 3,
            date_modified: '07/04/1927',
            role: 1
          },
        ],
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