<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />
    <!-- Main Contents -->
    <div class="flex-grow mb-20">
      <div class="main-contents">
        <simple-table @selectall="selectall" title="Manage Users, Technicians & Service Providers" :fields="['Name','Email','Title','Date Modified','Role']">
          <tr class="flex w-full mb-4" v-for="(user,index) in users">
            <td class="p-4 w-1/5" :class="{'border-b':users.length-1 != index}">
              <input type="checkbox" :id="user.id" v-model="user.selected" />
              <label :for="user.id">{{user.name}}</label>
            </td>
            <td class="p-4 w-1/5" :class="{'border-b':users.length-1 != index}">{{user.email}}</td>
            <td class="p-4 w-1/5" :class="{'border-b':users.length-1 != index}" v-if="user.type == 1">
              <button class="px-4 py-2 text-ideeza-dark hover:bg-green-200 bg-green-300 w-full rounded">Regional Manager</button>
            </td>
            <td class="p-4 w-1/5" :class="{'border-b':users.length-1 != index}" v-if="user.type == 2">
              <button class="px-4 py-1 text-ideeza-dark hover:bg-blue-200 bg-blue-300 text-sm w-full rounded">Assitant to the Regional
                Manager</button>
            </td>
            <td class="p-4 w-1/5" :class="{'border-b':users.length-1 != index}" v-if="user.type == 3">
              <button class="px-4 py-2 text-ideeza-dark hover:bg-blue-200 bg-blue-300 w-full rounded">Salesman</button>
            </td>
            <td class="p-4 w-1/5" :class="{'border-b':users.length-1 != index}">{{user.date_modified}}</td>
            <td class="p-4 w-1/5" :class="{'border-b':users.length-1 != index}">
              {{user.role==1?'User':'Service provider'}}
              <font-awesome-icon class="text-xl mt-2 ml-4 text-gray-500 float-right" :icon="['fa', 'grip-vertical']" />
            </td>
          </tr>
        </simple-table>
        <div class="md:flex">
          <div class="md:w-1/3">
            <div class="border rounded p-20 h-64 text-ideeza border-ideeza text-center md:mr-3 my-3 bg-white">
              <h1 class="text-5xl font-bold text-ideeza">132</h1>
              <h4 class="text-gray-500 text-xl">Active User</h4>
            </div>
            <div class="border rounded p-20 h-64 text-ideeza border-ideeza text-center md:mr-3 my-3 bg-white">
              <h1 class="text-5xl font-bold text-ideeza">115</h1>
              <h4 class="text-gray-500 text-xl">New users per month</h4>
            </div>
          </div>
          <div class="md:w-1/3">
            <div class="border rounded p-20 h-64 text-ideeza border-ideeza text-center md:mr-3 my-3 bg-white">
              <h1 class="text-5xl font-bold text-ideeza">32</h1>
              <h4 class="text-gray-500 text-xl">Banned users</h4>
            </div>
            <div class="border rounded p-20 h-64 text-ideeza border-ideeza text-center md:mr-3 my-3 bg-white">
              <h1 class="text-5xl font-bold text-ideeza">112</h1>
              <h4 class="text-gray-500 text-xl">Registered today</h4>
            </div>
          </div>
          <div class="md:w-1/3">
            <div
              class="border rounded text-ideeza border-ideeza my-3 bg-white user-chart relative">
              <h4 class="text-ideeza-dark text-5xl pt-4 pl-4">151</h4>
              <h6 class="text-gray-500 text-2xl pl-4">New Users this Week</h6>
              <div class="absolute bottom-0 w-full">
                <apexchart width="100%" height="350" type="bar" :options="chartOptions" :series="series"></apexchart>
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
  import LeftMenu from '~/components/user/common-left-side-menu.vue'
  import MyIdeeza from '~/components/user/my-ideeza/new-ideeza.vue'
  import SimpleTable from '~/components/reusables/Table.vue'
  export default {
    middleware: "auth",
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
