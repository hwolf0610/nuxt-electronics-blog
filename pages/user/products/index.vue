<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow mb-20">
      <div class="main-contents">
          <div class="md:flex md:flex-wrap">
          <div class="lg:w-1/4 md:w-1/2 w-full">
            <div class="border rounded p-20 px-10 h-64 text-ideeza border-ideeza text-center md:mr-3 my-3 bg-white">
              <h1 class="text-5xl font-bold text-ideeza">132</h1>
              <h4 class="text-gray-500 text-xl">All Products</h4>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full">
            <div class="border rounded p-20 px-10 h-64 text-ideeza border-ideeza text-center  my-3 bg-white">
              <h1 class="text-5xl font-bold text-ideeza">32</h1>
              <h4 class="text-gray-500 text-xl">Active users</h4>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full">
            <div class="border rounded p-20 px-10 h-64 text-ideeza border-ideeza text-center md:mr-3 my-3 bg-white">
              <h1 class="text-5xl font-bold text-ideeza">1192</h1>
              <h4 class="text-gray-500 text-xl">All orders</h4>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full">
            <div class="border rounded px-10 h-64 pl-10 pr-10 pt-20 pb-20 text-ideeza border-ideeza text-center my-3 bg-white">
              <h1 class="text-5xl font-bold text-ideeza">$23,1229</h1>
              <h4 class="text-gray-500 text-xl">Revenue</h4>
            </div>
          </div>
        </div>
        <simple-table @selectall="selectall" :fields="['Name','Title','Username','Role','Type','Visibility','Start-End']" :searchbox="true" title="Products">
          <tr class="flex w-full mb-4" v-for="(user,index) in users">
            <td class="p-4 w-1/7" :class="{'border-b':users.length-1 != index}">
              <div class="flex">
                <div>
                    <input type="checkbox" :id="user.id" v-model="user.selected" />
                    <label :for="user.id"></label>
                </div>
                <img src="~/static/images/dron-8.png" class="object-cover object-center w-2/3" alt="">
              </div>
              
            </td>
            <td class="p-4 w-1/7" :class="{'border-b':users.length-1 != index}">{{user.title}}</td>
            <td class="p-4 w-1/7" :class="{'border-b':users.length-1 != index}">{{user.username}}</td>
            <td class="p-4 w-1/7" :class="{'border-b':users.length-1 != index}" v-if="user.role == 1">
              <button class="px-4 py-2 text-ideeza-dark hover:bg-green-200 bg-green-300 w-full rounded">Regional Manager</button>
            </td>
            <td class="p-4 w-1/7" :class="{'border-b':users.length-1 != index}" v-if="user.role == 2">
              <button class="px-4 py-1 text-ideeza-dark hover:bg-blue-200 bg-blue-300 text-sm w-full rounded">Assitant to the Regional
                Manager</button>
            </td>
            <td class="p-4 w-1/7" :class="{'border-b':users.length-1 != index}" v-if="user.role == 3">
              <button class="px-4 py-2 text-ideeza-dark hover:bg-blue-200 bg-blue-300 w-full rounded">Salesman</button>
            </td>
            <td class="p-4 w-1/7" :class="{'border-b':users.length-1 != index}">
                <template v-if="user.type==1">
                    <font-awesome-icon class="text-xl mt-2 ml-4 text-gray-500" :icon="['fa', 'fire']" />
                </template>
                <template v-else-if="user.type==2">
                    <font-awesome-icon class="text-xl mt-2 ml-4 text-gray-500" :icon="['fa', 'code']" />
                </template>
                <template v-else>
                    <font-awesome-icon class="text-xl mt-2 ml-4 text-gray-500" :icon="['fa', 'user']" />
                </template>
            </td>
            <td class="p-4 w-1/7" :class="{'border-b':users.length-1 != index}">{{user.visibility}}</td>
            <td class="p-4 w-1/7" :class="{'border-b':users.length-1 != index}">
                <div class="flex justify-between items-center">
                    <div>
                        <p class="text-sm">Start:</p>
                        <p class="text-xl">{{user.date.start}}</p>
                        <p class="text-sm">Start:</p>
                        <p class="text-xl">{{user.date.end}}</p>
                    </div>
                    <font-awesome-icon class="text-xl mt-2 ml-4 text-gray-500 float-right" :icon="['fa', 'grip-vertical']" />
                </div>
            </td>
          </tr>
        </simple-table>
      </div>
    </div>
    <MyIdeeza v-click-outside="onClickOutside" v-if="showMyIdeeza" />
  </div>
</template>
<script>
  import LeftMenu from '~/components/user/common-left-side-menu.vue'
  import MyIdeeza from '~/components/user/my-ideeza/new-ideeza.vue'
  import SimpleTable from '~/components/reusables/Table.vue'
  export default {
    middleware: 'auth',
    layout: 'user',
    components: {
      LeftMenu,
      MyIdeeza,
      SimpleTable
    },
    data: function () {
      return {
        showMyIdeeza: false,
        users: [{
            id: 1,
            name: 'Michael Scott',
            title: 'Mech Drone',
            username: 'marchas',
            type: 1,
            date_modified: '07/04/1927',
            role: 1,
            visibility: 'Public',
            date: {
                start: '04/24/2018',
                end: '05/24/2018'
            }
          },
          {
            id: 2,
            name: 'Michael Scott',
            title: 'Mech Drone',
            username: 'marchas',
            type: 2,
            date_modified: '07/04/1927',
            role: 2,
            visibility: 'Public',
            date: {
                start: '04/24/2018',
                end: '05/24/2018'
            }
          },
          {
            id: 3,
            name: 'Michael Scott',
            title: 'Mech Drone',
            username: 'marchas',
            type: 1,
            date_modified: '07/04/1927',
            role: 2,
            visibility: 'Public',
            date: {
                start: '04/24/2018',
                end: '05/24/2018'
            }
          },
          {
            id: 4,
            name: 'Michael Scott',
            title: 'Mech Drone',
            username: 'marchas',
            type: 3,
            date_modified: '07/04/1927',
            role: 1,
            visibility: 'Public',
            date: {
                start: '04/24/2018',
                end: '05/24/2018'
            }
          },
        ],
        chartOptions: {
          chart: {
            animations: {
              speed: 200
            },
            zoom: {
              enabled: false,
            },
            foreColor: '#431184'
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: ['Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thur']
          },
          fill: {
            colors: ['#ff00c7']
          }
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 35, 50, 49, 60, 70, 91]
        }]
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

</style>
