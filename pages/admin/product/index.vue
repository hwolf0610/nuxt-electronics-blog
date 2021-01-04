<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow mb-20">
      <div class="main-contents">

        <div class="md:flex">
          <div class="md:w-1/4">
            <div class="border rounded p-10 pt-20 h-64 text-ideeza border-ideeza text-center md:mr-3 my-3 bg-white">
              <h1 class="text-5xl font-bold text-ideeza">132</h1>
              <h4 class="text-gray-500 text-xl">All Products</h4>
            </div>
          </div>
          <div class="md:w-1/4">
            <div class="border rounded p-10 pt-20 h-64 text-ideeza border-ideeza text-center md:mr-3 my-3 bg-white">
              <h1 class="text-5xl font-bold text-ideeza">32</h1>
              <h4 class="text-gray-500 text-xl">Active Orders</h4>
            </div>
          </div>
          <div class="md:w-1/4">
            <div class="border rounded p-10 pt-20 h-64 text-ideeza border-ideeza text-center md:mr-3 my-3 bg-white">
              <h1 class="text-5xl font-bold text-ideeza">1192</h1>
              <h4 class="text-gray-500 text-xl">All Orders</h4>
            </div>
          </div>
          <div class="md:w-1/4">
            <div class="border rounded p-10 pt-20 h-64 text-ideeza border-ideeza text-center my-3 bg-white">
              <h1 class="text-5xl font-bold text-ideeza">$23,1229</h1>
              <h4 class="text-gray-500 text-xl">Revenue</h4>
            </div>
          </div>
        </div>


        <div class="md:flex">
          <div class="md:w-full">
        <div class="bg-white rounded border-ideeza border shadow">
        <div class="flex justify-between pt-5 pl-5 pr-5 items-center mb-3">
            <h6 class="text-ideeza font-bold text-sm flex-shrink">Manage Products</h6>
            <div class="flex justify-between flex-none">
                <div class="flex w-fit-content bg-white justify-center border border-ideeza rounded items-center mr-2 content-center">
                    <div class="h-8 relative w-10">
                        <font-awesome-icon class="ml-1 h-4 text-gray-400 absolute-center-h-v" :icon="['fas', 'search']"/>
                    </div>
                    <input placeholder="search" class="bg-white outline-none h-8 text-gray-800 pr-3">
                </div>
                <button class="bg-white border border-ideeza rounded px-3 py-1 text-ideeza">
                    Add New <font-awesome-icon class="text-sm" :icon="['fa', 'plus']"/>
                </button>
                <font-awesome-icon class="text-xl mt-2 ml-4 text-gray-500" :icon="['fas', 'cog']"/>
            </div>
        </div>
        <div class="pl-5 pb-2">
            <button class="font-bold text-sm mr-3 text-ideeza-dark">Delete</button>
            <button class="font-bold text-sm mr-3 text-ideeza-dark">Print</button>
            <button class="font-bold text-sm mr-3 text-ideeza-dark">Export</button>
            <button class="font-bold text-sm mr-3 text-ideeza-dark">Make Manager</button>
        </div>
        <div class="overflow-x-auto max-96-vw">
        <table class="text-left w-full border-collapse simple-table">
		      <thead class="bg-white text-ideeza-dark">
			        <tr class="mb-4">
                <th class="p-4 border-t border-b border-blue-300 w-1/8">
                  <input  type="checkbox" id="ad"/>
                  <label for="ad">Image</label>
                  <font-awesome-icon class="text-sm mt-2 ml-1 text-green-300" :icon="['fas', 'arrow-down']"/>
                </th>
                <th class="p-4 border-t border-b border-blue-300 w-1/8">
                    Title
                    <font-awesome-icon class="text-sm mt-2 ml-1 text-green-300" :icon="['fas', 'arrow-down']"/> 
                </th>
                <th class="p-4 border-t border-b border-blue-300 w-1/8">
                    Username
                    <font-awesome-icon class="text-sm mt-2 ml-1 text-green-300" :icon="['fas', 'arrow-down']"/> 
                </th>
                <th class="p-4 border-t border-b border-blue-300 w-1/8">
                    Role
                    <font-awesome-icon class="text-sm mt-2 ml-1 text-green-300" :icon="['fas', 'arrow-down']"/> 
                </th>
                <th class="p-4 border-t border-b border-blue-300 w-1/8">
                    Type
                    <font-awesome-icon class="text-sm mt-2 ml-1 text-green-300" :icon="['fas', 'arrow-down']"/> 
                </th>
                <th class="p-4 border-t border-b border-blue-300 w-1/8">
                    Visalibity
                    <font-awesome-icon class="text-sm mt-2 ml-1 text-green-300" :icon="['fas', 'arrow-down']"/> 
                </th>
                <th class="p-4 border-t border-b border-blue-300 w-1/8">
                    Start End
                    <font-awesome-icon class="text-sm mt-2 ml-1 text-green-300" :icon="['fas', 'arrow-down']"/> 
                </th>
            </tr>
		      </thead>
    <tbody class="bg-grey-light overflow-y-auto text-ideeza-dark" >
      <tr class="w-full mb-4" v-for="index in 4" :key="index">
              <td class="p-4 text-sm border-b">
                <input type="checkbox" />
                <label><img class="inline-flex h-20" src="~/static/images/product.png"></label>
              </td>
              <td class="p-4 text-sm border-b">Mech Drone</td>
              <td class="p-4 text-sm border-b">Mech Drone</td>
              <td class="p-4 text-sm border-b">
                <button class="px-4 py-2 text-ideeza-dark hover:bg-green-200 bg-green-300 w-full rounded text-xs">Service Provider</button>
              </td>
              <td class="p-4 text-sm border-b">
                <LightIcon class="mr-5" />
                <CodeIcon class="mr-5" />
                <CoverIcon class="" />
              </td>
              <td class="p-4 text-sm border-b">Public</td>
              <td class="p-4 text-sm border-b flex items-center">
                <p class="text-ideeza-dark font-bold">
                  <span class="text-xs">Start:</span><br>
                  <span class="text-base">04/24/2018</span><br>
                  <span class="text-xs">End:</span><br>
                  <span class="text-base">04/24/2018</span><br>
                </p>
                <font-awesome-icon class="text-xl mt-2 ml-4 text-gray-500" :icon="['fa', 'grip-vertical']" />
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
  import CoverIcon from '~/components/partials/icons/cover-icon.vue'
  import CodeIcon from '~/components/partials/icons/code-icon.vue'
  import LightIcon from '~/components/partials/icons/light-icon.vue'

  export default {
    layout: 'admin',
    components: {
      LeftMenu,
      MyIdeeza,
      SimpleTable,
      CoverIcon,
      CodeIcon,
      LightIcon
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
<style>
.simple-table th {
  font-size: 0.85rem;
}
.simple-table [type="checkbox"]:not(:checked) + img, .simple-table [type="checkbox"]:checked + img {
    position: relative;
    padding-left: 1.95em;
    cursor: pointer;
}
.simple-table [type="checkbox"]:not(:checked) + img:before{
    content: '';
    position: absolute;
    left: 0; top: 0;
    width: 1.25em; height: 1.25em;
    border: 2px solid #A5C9FF;
    background: #FFF;
    border-radius: 4px;
    box-shadow: inset 0 1px 3px rgba(0,0,0,.1);
}
.simple-table [type="checkbox"]:checked + img:before {
    content: '';
    position: absolute;
    left: 0; top: 0;
    width: 1.25em; height: 1.25em;
    border: 2px solid #A5C9FF;
    background: #A5C9FF;
    border-radius: 4px;
    box-shadow: inset 0 1px 3px rgba(0,0,0,.1);
}
    /* checked mark aspect */
.simple-table [type="checkbox"]:not(:checked) + img:after,
    [type="checkbox"]:checked + img:after {
    content: '\2713\0020';
    position: absolute;
    top: .22em;
    left: .23em;
    font-size: 1.0em;
    line-height: 0.8;
    color: #fff;
    transition: all .2s;
    font-family: 'Lucida Sans Unicode', 'Arial Unicode MS', Arial;
}
    /* checked mark aspect changes */
.simple-table [type="checkbox"]:not(:checked) + img:after {
    opacity: 0;
    transform: scale(0);
}
.simple-table [type="checkbox"]:checked + img:after {
    opacity: 1;
    transform: scale(1);
}
    /* disabled checkbox */
.simple-table [type="checkbox"]:disabled:not(:checked) + img:before,
    [type="checkbox"]:disabled:checked + img:before {
    box-shadow: none;
    border-color: #bbb;
    background-color: #ddd;
}
.simple-table [type="checkbox"]:disabled:checked + img:after {
    color: #999;
}
.simple-table [type="checkbox"]:disabled + img {
    color: #aaa;
}
    /* accessibility */
.simple-table [type="checkbox"]:checked:focus + img:before,
.simple-table [type="checkbox"]:not(:checked):focus + img:before {
    border: 2px solid #A5C9FF;
}
</style>
