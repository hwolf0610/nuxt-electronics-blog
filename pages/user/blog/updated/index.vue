<template>
      <div class="main-contents">
        <simple-table :fields="fields" :searchbox="true" title="Manage articles" @add="$router.push('/user/blog/updated/add')">
          <template v-slot:header>
            <button class="font-bold text-sm mr-3 text-ideeza-dark">Delete</button>
            <button class="font-bold text-sm mr-3 text-ideeza-dark">Print</button>
            <button class="font-bold text-sm mr-3 text-ideeza-dark">Export</button>
          </template>
          <template v-slot:th>
            <th class="p-4 border-t border-b border-blue-300 w-2/3">
              <input type="checkbox" id="ad" v-model="selected" @change="selectall" />
              <label for="ad">Article Name</label>
              <font-awesome-icon class="text-sm mt-2 ml-1 text-green-300" :icon="['fas', 'arrow-down']" />
            </th>
            <th class="p-4 border-t border-b border-blue-300 w-1/4">
              Date
              <font-awesome-icon class="text-sm mt-2 ml-1 text-green-300" :icon="['fas', 'arrow-down']" />
            </th>
            <th class="p-4 border-t border-b border-blue-300 w-1/3">
              Action
              <font-awesome-icon class="text-sm mt-2 ml-1 text-green-300" :icon="['fas', 'arrow-down']" />
            </th>
            <!-- <th class="p-4 border-t border-b border-blue-300" :class="'w-1/'+fields.length" v-for="(field,index) in fields">
                    <template v-if="index==0">
                        <input  type="checkbox" id="ad" v-model="selected" @change="$emit('selectall',selected)"/>
                        <label for="ad">{{field}}</label>
                        <font-awesome-icon class="text-sm mt-2 ml-1 text-green-300" :icon="['fas', 'arrow-down']"/>
                    </template>
                    <template v-else>
                        {{field}}
                        <font-awesome-icon class="text-sm mt-2 ml-1 text-green-300" :icon="['fas', 'arrow-down']"/>    
                    </template>
                </th> -->
          </template>
          <tr class="flex w-full mb-4" v-for="(blog,index) in blogs">
            <td class="p-4 w-2/3" :class="{'border-b':blogs.length-1 != index}">
              <div class="flex">
                <div>
                  <input type="checkbox" :id="blog.id" v-model="blog.selected" />
                  <label :for="blog.id">{{blog.name}}</label>
                </div>
              </div>
            </td>
            <td class="p-4 w-1/4" :class="{'border-b':blogs.length-1 != index}">{{blog.date}}</td>
            <td class="p-4 w-1/3" :class="{'border-b':blogs.length-1 != index}">
              <nuxt-link :to="'/user/blog/updated/'+blog.id">
              <font-awesome-icon class="text-xl mt-2 ml-4 text-blue-800" :icon="['fas', 'eye']" />
              </nuxt-link>
              <font-awesome-icon class="text-xl mt-2 ml-4 text-blue-800" :icon="['fas', 'pause']" />
              <font-awesome-icon class="text-xl mt-2 ml-4 text-blue-800" :icon="['fas', 'check']" />
              <font-awesome-icon class="text-xl mt-2 ml-4 text-blue-800" :icon="['fas', 'times']" />
              <font-awesome-icon class="text-xl mt-2 ml-4 text-green-300 float-right" :icon="['fa', 'grip-vertical']" />
            </td>
          </tr>
          <template v-slot:footer>
            <div class="my-3">
                <pagination v-model="page" :records="50" :per-page="10" ></pagination>
            </div>
          </template>
        </simple-table>
    <MyIdeeza v-click-outside="onClickOutside" v-if="showMyIdeeza" />
    
  </div>
</template>
<script>
  import MyIdeeza from '~/components/user/my-ideeza/new-ideeza.vue'
  import SimpleTable from '~/components/reusables/Table.vue'
  import Pagination from 'vue-pagination-2'
  export default {
    middleware: "auth",
    layout: 'user',
    components: {
      MyIdeeza,
      SimpleTable,
      Pagination
    },
    data: function () {
      return {
        showMyIdeeza: false,
        selected: false,
        page: 1,
        blogs: [{
            id: 1,
            name: 'How ideeza can make the world a better place',
            date: '10 jul, 2019',
          },
          {
            id: 2,
            name: 'How ideeza can make the world a better place',
            date: '10 jul, 2019',
          },
          {
            id: 3,
            name: 'How ideeza can make the world a better place',
            date: '10 jul, 2019',
          },
          {
            id: 4,
            name: 'How ideeza can make the world a better place',
            date: '10 jul, 2019',
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
        }],
        fields: ['id', 'article_name', 'date', 'actions'],
        options: {
          headings: {
            id: '',
            detail: 'Products',
            quantity: 'Quantity',
            actions: ''
          },
          sortable: [],
          filterable: false,
          childRowTogglerFirst: false
        }
      }
    },
    methods: {
      selectall() {
        if (this.selected == true) {
          this.blogs.forEach(element => {
            element.selected = true
          });
        } else {
          this.blogs.forEach(element => {
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
