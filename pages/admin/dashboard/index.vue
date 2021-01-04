<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow mb-20">
      <div class="main-contents">
        <div class="mb-3 flex relative content-center font-semibold text-ideeza-dark" >Dashboard</div>

        <div class="md:flex">
          <div class="md:w-2/3 md:mr-3">
        <simple-table @selectall="selectall" :fields="['Name','Email','Title','Date Modified','Role']">
          <tr class="flex w-full mb-4" v-for="(user,index) in users">
            <td class="p-2 w-1/5 text-sm" :class="{'border-b':users.length-1 != index}">
              <input type="checkbox" :id="user.id" v-model="user.selected" />
              <label :for="user.id">{{user.name}}</label>
            </td>
            <td class="p-2 w-1/5 text-sm" :class="{'border-b':users.length-1 != index}">{{user.email}}</td>
            <td class="p-2 w-1/5" :class="{'border-b':users.length-1 != index}" v-if="user.type == 1">
              <button class="px-4 py-2 text-ideeza-dark hover:bg-green-200 bg-green-300 w-full rounded text-xs">Regional Manager</button>
            </td>
            <td class="p-2 w-1/5" :class="{'border-b':users.length-1 != index}" v-if="user.type == 2">
              <button class="px-4 py-1 text-ideeza-dark hover:bg-blue-200 bg-blue-300 text-xs w-full rounded">Assitant to the Regional
                Manager</button>
            </td>
            <td class="p-2 w-1/5 text-sm" :class="{'border-b':users.length-1 != index}" v-if="user.type == 3">
              <button class="px-4 py-2 text-ideeza-dark hover:bg-blue-200 bg-blue-300 w-full rounded">Salesman</button>
            </td>
            <td class="p-2 w-1/5 text-sm" :class="{'border-b':users.length-1 != index}">{{user.date_modified}}</td>
            <td class="p-2 w-1/5 text-sm" :class="{'border-b':users.length-1 != index}">
              {{user.role==1?'User':'Service provider'}}
              <font-awesome-icon class="text-xl mt-2 ml-4 text-gray-500 float-right" :icon="['fa', 'grip-vertical']" />
            </td>
          </tr>
        </simple-table>
        </div>

        <div class="md:w-1/3">
        <div class="border rounded text-ideeza border-ideeza bg-white mb-3">
              <div class="flex justify-between pt-5 pl-5 pr-5 items-center mb-3">
            <h6 class="text-ideeza font-bold text-sm flex-shrink">Perfomence</h6>
            <div class="flex justify-between flex-none">
                <div v-if="searchbox" class="flex w-fit-content bg-white justify-center border border-ideeza rounded items-center mr-2 content-center">
                    <div class="h-12 relative w-10">
                        <font-awesome-icon class="ml-1 h-4 text-gray-400 absolute-center-h-v" :icon="['fas', 'search']"/>
                    </div>
                    <input placeholder="search users" class="bg-white outline-none h-12 text-gray-800 pr-3">
                </div>
                <button class="bg-white border border-ideeza rounded px-3 py-1 text-ideeza">
                    Today <font-awesome-icon class="text-sm" :icon="['fa', 'chevron-down']"/>
                </button>
                <font-awesome-icon class="text-xl mt-2 ml-4 text-gray-500" :icon="['fas', 'cog']"/>
            </div>
        </div>
              <div class="">
                <apexchart width="100%" height="200" type="line" :options="chartOptions_line" :series="series"></apexchart>
              </div>
            </div>
        <div class="border rounded text-ideeza border-ideeza bg-white">
              <div class="flex justify-between pt-5 pl-5 pr-5 items-center mb-3">
            <h6 class="text-ideeza font-bold text-sm flex-shrink">Sales</h6>
            <div class="flex justify-between flex-none">
                <div v-if="searchbox" class="flex w-fit-content bg-white justify-center border border-ideeza rounded items-center mr-2 content-center">
                    <div class="h-12 relative w-10">
                        <font-awesome-icon class="ml-1 h-4 text-gray-400 absolute-center-h-v" :icon="['fas', 'search']"/>
                    </div>
                    <input placeholder="search users" class="bg-white outline-none h-12 text-gray-800 pr-3">
                </div>
                <button class="bg-white border border-ideeza rounded px-3 py-1 text-ideeza">
                    Today <font-awesome-icon class="text-sm" :icon="['fa', 'chevron-down']"/>
                </button>
                <font-awesome-icon class="text-xl mt-2 ml-4 text-gray-500" :icon="['fas', 'cog']"/>
            </div>
        </div>
              <div class="">
                <div class="overflow-auto max-96-vw sales-table">
                  <table class="text-left w-full">
                    <tbody class="bg-grey-light w-full text-ideeza-dark">
                      <tr class="w-full mb-3">
                        <td class="p-2 border-b font-bold text-xs text-ideeza-dark">Jim</td> 
                        <td class="p-2 border-b font-bold text-1xl text-ideeza-dark">$86000</td> 
                        <td class="p-2 border-b">
                          <div id="chart-spark3">
                            <apexchart type="area" height="30" :options="chartOptionsSpark3" :series="seriesSpark3"></apexchart>
                          </div>
                        </td>
                        <td class="p-2 border-b text-xs text-green-400 font-bold">+7%</td>
                        <td class="p-2 border-b">
                        <div class="bg-green-200 rounded-full h-10 w-10 flex items-center justify-center">
                          <font-awesome-icon class="text-xl text-gray-500" :icon="['fas', 'arrow-up']"/>
                        </div>
                        </td>
                      </tr>
                      <tr class="w-full mb-3">
                        <td class="p-2 border-b font-bold text-xs text-ideeza-dark">Jim</td> 
                        <td class="p-2 border-b font-bold text-1xl text-ideeza-dark">$86000</td> 
                        <td class="p-2 border-b">
                          <div id="chart-spark3">
                            <apexchart type="area" height="30" :options="chartOptionsSpark3" :series="seriesSpark3"></apexchart>
                          </div>
                        </td>
                        <td class="p-2 border-b text-xs text-green-400 font-bold">+7%</td>
                        <td class="p-2 border-b">
                        <div class="bg-green-200 rounded-full h-10 w-10 flex items-center justify-center">
                          <font-awesome-icon class="text-xl text-gray-500" :icon="['fas', 'arrow-up']"/>
                        </div>
                        </td>
                      </tr>
                      <tr class="w-full mb-3">
                        <td class="p-2 border-b font-bold text-xs text-ideeza-dark">Jim</td> 
                        <td class="p-2 border-b font-bold text-1xl text-ideeza-dark">$86000</td> 
                        <td class="p-2 border-b">
                          <div id="chart-spark3">
                            <apexchart type="area" height="30" :options="chartOptionsSpark3" :series="seriesSpark3"></apexchart>
                          </div>
                        </td>
                        <td class="p-2 border-b text-xs text-green-400 font-bold">+7%</td>
                        <td class="p-2 border-b">
                        <div class="bg-green-200 rounded-full h-10 w-10 flex items-center justify-center">
                          <font-awesome-icon class="text-xl text-gray-500" :icon="['fas', 'arrow-up']"/>
                        </div>
                        </td>
                      </tr>
                      <tr class="w-full mb-3">
                        <td class="p-2 border-b font-bold text-xs text-ideeza-dark">Jim</td> 
                        <td class="p-2 border-b font-bold text-1xl text-ideeza-dark">$86000</td> 
                        <td class="p-2 border-b">
                          <div id="chart-spark3">
                            <apexchart type="area" height="30" :options="chartOptionsSpark3" :series="seriesSpark3"></apexchart>
                          </div>
                        </td>
                        <td class="p-2 border-b text-xs text-green-400 font-bold">+7%</td>
                        <td class="p-2 border-b">
                        <div class="bg-green-200 rounded-full h-10 w-10 flex items-center justify-center">
                          <font-awesome-icon class="text-xl text-gray-500" :icon="['fas', 'arrow-up']"/>
                        </div>
                        </td>
                      </tr>
                      <tr class="w-full mb-3">
                        <td class="p-2 border-b font-bold text-xs text-ideeza-dark">Jim</td> 
                        <td class="p-2 border-b font-bold text-1xl text-ideeza-dark">$86000</td> 
                        <td class="p-2 border-b">
                          <div id="chart-spark3">
                            <apexchart type="area" height="30" :options="chartOptionsSpark3" :series="seriesSpark3"></apexchart>
                          </div>
                        </td>
                        <td class="p-2 border-b text-xs text-green-400 font-bold">+7%</td>
                        <td class="p-2 border-b">
                        <div class="bg-green-200 rounded-full h-10 w-10 flex items-center justify-center">
                          <font-awesome-icon class="text-xl text-gray-500" :icon="['fas', 'arrow-up']"/>
                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        </div>
        </div>
        <div class="md:flex">
          <div class="md:w-1/3">
            <div class="border rounded p-20 h-64 text-ideeza border-ideeza text-center md:mr-3 my-3 bg-white">
              <h1 class="text-5xl font-bold text-ideeza">132</h1>
              <h4 class="text-gray-500 text-xl">Active Users</h4>
            </div>
            <div class="border rounded p-20 h-64 text-ideeza border-ideeza text-center md:mr-3 my-3 bg-white">
              <h1 class="text-5xl font-bold text-ideeza">$5,656</h1>
              <h4 class="text-gray-500 text-xl">Revenue</h4>
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
        chartOptions_line: {
          chart: {
            animations: {
              speed: 200
            },
            zoom: {
              enabled: false,
            },
          },
          colors: ["#C0FFCF"],
          stroke: {
            curve: 'smooth',
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: ['Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thur']
          },
        },
          seriesSpark3: [{
            data: [47, 45, 54, 38, 56, 24, 65, 31, 37]
          }],
          chartOptionsSpark3: {
            chart: {
              type: 'area',
              height: 20,
              sparkline: {
                enabled: true
              },
            },
            colors: ["#C0FFCF"],
            stroke: {
              curve: 'smooth'
            },
            fill: {
              opacity: 0.3
            },
            xaxis: {
              crosshairs: {
                width: 1
              },
            },
            yaxis: {
              min: 0
            },
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
.sales-table{
  height: calc(13rem + 0.29rem);
}
.simple-table tbody td {
  padding: 0.5rem;
}
.simple-table th {
  font-size: 0.85rem;
}
</style>
