<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>

    <!-- Main Contents -->
    <div class="flex-grow">
      <div class="main-contents">
        <div class="mt-10">
      <div class="flex justify-between items-center border-b-4 border-solid border-ideeza pb-5">
        <div class="flex">
          <span class="text-ideeza-dark text-xl inline-block font-semibold mr-5">Project: Metal Making</span>
          <div class="flex items-center  text-gray-500 hover:text-gray-800 cursor-pointer">
            <span class="text-sm inline-block mr-1">Edit</span>
            <font-awesome-icon class="mr-1 h-3" :icon="['fas', 'pen']"/>
          </div>
        </div>
        <button @click.self="addNewProject=true" class="btn btn-normal btn--ideeza px-5 py-3">Create New +</button>
      </div>

      <div class="flex items-center justify-between my-5">
        <div>
          Status: <span class="text-ideeza uppercase">active</span>
        </div>
        <div class="flex items-center">
          <div class="text-xl">Project Duration: <span class="text-ideeza">29 Sep - 16 Oct</span></div>
          <font-awesome-icon class="ml-3 h-4 text-gray-800" :icon="['fas', 'calendar-alt']"/>
        </div>
      </div>

      <div class="lg:flex justify-between">
        <div class="project-description lg:mr-16">
          <div class="gradient-bg px-8 py-5 text-white">
            Project Description
          </div>
          <p class="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur fermentum consectetur. Pellentesque et velit mattis, sagittis magna ac, vulputate neque. Suspendisse dolor sem, blandit ac dolor vitae, fermentum rhoncus augue. Fusce scelerisque posuere neque, in accumsan mi sagittis vitae. Phasellus purus purus, pulvinar vel diam sit amet, auctor feugiat purus. Donec nulla est, convallis nec tempor ac, molestie in massa. Morbi molestie varius ex, vel molestie dui. Phasellus accumsan velit eget efficitur condimentum. Fusce vehicula mi eu metus gravida, eget congue quam fermentum. Fusce consectetur, velit ultrices commodo lobortis, risus justo consectetur velit, a laoreet felis nisi venenatis ex. Quisque blandit magna eget velit vestibulum, porta vehicula velit convallis. Cras pulvinar nisl ut erat porta, et pellentesque metus facilisis. Sed porttitor malesuada efficitur. Curabitur malesuada elementum rhoncus. Etiam et rutrum nisi. Nam in ultricies lorem.
          </p>
        </div>

        <div class="flex-grow">
          <div class="gradient-bg px-8 py-5 text-white">
            Attachments
          </div>
          <div class="mt-5">
            <span class="block text-xs">3 pics attached</span>
            <div class="flex flex-wrap attached-images-wrapper mt-2">
              <img src="https://picsum.photos/200" alt="">
              <img src="https://picsum.photos/200" alt="">
              <img src="https://picsum.photos/200" alt="">

            </div>
            <div class="text-xs mt-5">
              link attached: <a href="https://google.com">https://google.com</a>
            </div>
          </div>
        </div>
      </div>


      <table class="mt-10 shadow-md">
        <thead>
        <tr class="text-white h16 gradient-bg">
          <th class="text-left ">Tasks</th>
          <th class="text-left">Domain</th>
          <th class="text-left">Assigned to</th>
          <th class="text-left">Due Date</th>
          <th class="text-left">Task Status</th>
          <th class="text-left">Notification</th>
        </tr>
        </thead>
        <tbody>
          <template v-for="task in tasks">
        <tr class="bg-ideeza-100">
          <td class="cursor-pointer" @click.self="expand(task.id)" >
            <font-awesome-icon class="mr-1 text-lg text-ideeza" :icon="['fas', 'caret-up']" v-if="task.id in expanded&&expanded[task.id]==true"/> 
            <font-awesome-icon class="mr-1 text-lg text-ideeza" :icon="['fas', 'caret-down']" v-else/>
            {{task.name}}
          </td>
          <td>{{task.domain}}</td>
          <td>
            <img v-for="image in task.assigned_to" :src="image.url" class="avatar">
            <!-- <img class="avatar" src="https://randomuser.me/api/portraits/women/20.jpg">
            <img class="avatar" src="https://randomuser.me/api/portraits/men/20.jpg">
            <img class="avatar" src="https://randomuser.me/api/portraits/men/12.jpg"> -->
          </td>
          <td class="text-center">
            <div class="text-sm text-gray-600 w-3/4 bg-white h-8 text-center rounded-full relative">
              <span class="absolute due-date text-black">{{task.timeline.date}}</span>
              <div class="bg-ideeza rounded-full h-8" :style="{ width: task.timeline.progress+'%'}">
              </div>
            </div>
          </td>
          <td class="status status--completed" v-if="task.status == 1">
            completed
          </td>
          <td v-if="task.status == 2" class="status status--over">over due</td>
          <td v-if="task.status == 3" class="status status--progress">in progress</td>
          <!-- 1 for completed, 2 for over_due, 3 for in_progress -->
          <td class="notifications">
            <font-awesome-icon v-if="task.status == 1" class="mr-1 text-lg text-ideeza-gold" :icon="['fas', 'exclamation-circle']"/> 
            <font-awesome-icon v-else-if="task.status == 2" class="mr-1 text-lg text-blue-700" :icon="['fas', 'bell']"/> 
            <font-awesome-icon v-else-if="task.status == 3" class="mr-1 text-lg text-red-500" :icon="['far', 'clock']"/> 
          </td>
        </tr>
        <template v-if="task.id in expanded&&expanded[task.id]==true">
          <tr class="bg-pink-200" v-for="(subtask) in task.subtasks">
            <td class="cursor-pointer md:text-right" @click.self="detailTask=true">
            {{subtask.name}}
            </td>
          <td>{{subtask.domain}}</td>
          <td>
            <img v-for="image in subtask.assigned_to" :src="image.url" class="avatar">
            <!-- <img class="avatar" src="https://randomuser.me/api/portraits/women/20.jpg">
            <img class="avatar" src="https://randomuser.me/api/portraits/men/20.jpg">
            <img class="avatar" src="https://randomuser.me/api/portraits/men/12.jpg"> -->
          </td>
          <td class="text-center">
            <div class="text-sm text-gray-600 w-3/4 bg-white h-8 text-center rounded-full relative">
              <span class="absolute due-date text-black">{{subtask.timeline.date}}</span>
              <div class="bg-ideeza rounded-full h-8" :style="{ width: subtask.timeline.progress+'%'}">
              </div>
            </div>
          </td>
          <td class="status status--completed" v-if="subtask.status == 1">
            completed
          </td>
          <td v-if="subtask.status == 2" class="status status--over">over due</td>
          <td v-if="subtask.status == 3" class="status status--progress">in progress</td>
          <!-- 1 for completed, 2 for over_due, 3 for in_progress -->
          <td class="notifications">
            <font-awesome-icon v-if="subtask.status == 1" class="mr-1 text-lg text-ideeza-gold" :icon="['fas', 'exclamation-circle']"/> 
            <font-awesome-icon v-else-if="subtask.status == 2" class="mr-1 text-lg text-blue-700" :icon="['fas', 'bell']"/> 
            <font-awesome-icon v-else-if="subtask.status == 3" class="mr-1 text-lg text-red-500" :icon="['far', 'clock']"/> 
          </td>
          </tr>
        </template>
          </template>
        <!-- <tr class="cursor-pointer" @click.self="editTask=true">
          <td >
            <font-awesome-icon class="mr-1 text-lg text-ideeza" :icon="['fas', 'caret-down']"/> 
            Iron Making
          </td>
          <td>Cover</td>
          <td>
            <img class="avatar" src="https://randomuser.me/api/portraits/women/20.jpg">
            <img class="avatar" src="https://randomuser.me/api/portraits/men/20.jpg">
            <img class="avatar" src="https://randomuser.me/api/portraits/men/12.jpg">
          </td>
          <td class="text-center">
            <div class="text-sm text-gray-600 w-3/4 bg-white h-8 text-center rounded-full relative">
              <span class="absolute due-date text-black">16.11.2019</span>
              <div class="bg-ideeza rounded-full h-8" style="width:80%;">
              </div>
            </div>
          </td>
          <td class="status status--over">over due</td>
          <td class="notifications">
            <font-awesome-icon class="mr-1 text-lg text-blue-700" :icon="['fas', 'bell']"/>
          </td>


        </tr>
        <tr class="bg-ideeza-100">
          <td class="cursor-pointer" @click.self="editTask=true" >
            <font-awesome-icon class="mr-1 text-lg text-ideeza" :icon="['fas', 'caret-down']"/> 
            Iron Making
          </td>
          <td>Code</td>
          <td>
            <img class="avatar" src="https://randomuser.me/api/portraits/women/20.jpg">
            <img class="avatar" src="https://randomuser.me/api/portraits/men/20.jpg">
            <img class="avatar" src="https://randomuser.me/api/portraits/men/12.jpg">
          </td>
          <td class="text-center">
            <div class="text-sm text-gray-600 w-3/4 bg-white h-8 text-center rounded-full relative">
              <span class="absolute due-date text-black">16.11.2019</span>
              <div class="bg-ideeza rounded-full h-8" style="width:60%;">
              </div>
            </div>
          </td>
          <td class="status status--progress">in progress</td>
          <td class="notifications">
            <font-awesome-icon class="mr-1 text-lg text-red-500" :icon="['far', 'clock']"/>
          </td>


        </tr>
        <tr class="">
          <td class="cursor-pointer" @click.self="editTask=true" >
            <font-awesome-icon class="mr-1 text-lg text-ideeza" :icon="['fas', 'caret-down']"/> 
            Iron Making
          </td>
          <td>Electronics</td>
          <td>
            <img class="avatar" src="https://randomuser.me/api/portraits/women/20.jpg">
            <img class="avatar" src="https://randomuser.me/api/portraits/men/20.jpg">
            <img class="avatar" src="https://randomuser.me/api/portraits/men/12.jpg">
          </td>
          <td class="text-center">
            <div class="text-sm text-gray-600 w-3/4 bg-white h-8 text-center rounded-full relative">
              <span class="absolute due-date text-black">16.11.2019</span>
              <div class="bg-ideeza rounded-full h-8" style="width:90%;">
              </div>
            </div>
          </td>
          <td class="status status--completed">COMPLETED</td>
          <td class="notifications">
            <font-awesome-icon class="mr-1 text-lg text-ideeza-gold" :icon="['fas', 'exclamation-circle']"/> 
          </td>


        </tr> -->

        </tbody>
      </table>


      <div class="mt-10">
        <div class="gradient-bg px-8 py-5 text-white">
          Timeline
        </div>
        <task-timeline />

      </div>

      <!--Add new project-->
      <new-project @onClose="addNewProject=false" v-if="addNewProject" />

      <!--Add new task-->
      <new-task @onClose="addNewTask=false" v-if="addNewTask" />

      <!--Edit task-->
      <edit-task @onClose="editTask=false" v-if="editTask" />
    </div>
      </div>
    </div>

  </div>
</template>

<script>

  import LeftMenu from '~/components/technician/common-left-side-menu.vue'
  import AddNewProject from "~/components/technician/management/new-project.vue"
  import AddNewTask from "~/components/technician/management/new-task.vue"
  import EditTask from "~/components/technician/management/edit-task-technician.vue"
  import TaskTimeLine from "~/components/technician/management/task-timeline.vue"
  import CompleteTask from "~/components/technician/management/complete-task.vue"

    export default {
        name: "detail",
      components: {
        'new-project': AddNewProject,
        'new-task': AddNewTask,
        'edit-task': EditTask,
        'task-timeline': TaskTimeLine,
        'complete-task': CompleteTask,
        LeftMenu,

      },
      computed: {
        leftMenu() {
          return this.$store.state.usermenu.openLeftMenu;
        }
      },
      methods: {
        expand(id) {
          if(id in this.expanded &&this.expanded[id] == true){
            this.$set(this.expanded, id, false);  
          }
          else {
            this.$set(this.expanded, id, true);
          }
          this.$forceUpdate();
        },
      },
      data: function () {
        return {
          addNewProject: false,
          addNewTask: false,
          editTask: false,
          expanded: {},
          tasks: [
            {
              id: 1,
              name: 'Make Iron from steal: first phase',
              domain: 'Electronics',
              assigned_to: [
                {
                  url: 'https://randomuser.me/api/portraits/women/20.jpg'
                },
                {
                  url: 'https://randomuser.me/api/portraits/men/20.jpg'  
                },
                {
                  url: 'https://randomuser.me/api/portraits/men/12.jpg'  
                }
              ],
              timeline: {
                progress: 30,
                date: '02.10.2020'
              },
              status: 1, //1 for completed, 2 for over_due, 3 for in_progress
              subtasks: [
                {
                  id: 2,
                  name: 'Make Iron from steal: first phase',
                  domain: 'Electronics',
                  assigned_to: [
                    {
                      url: 'https://randomuser.me/api/portraits/women/20.jpg'
                    },
                    {
                      url: 'https://randomuser.me/api/portraits/men/20.jpg'  
                    },
                    {
                      url: 'https://randomuser.me/api/portraits/men/12.jpg'  
                    }
                  ],
                  timeline: {
                    progress: 30,
                    date: '02.10.2020'
                  },
                  status: 1
                },
                {
                  id: 3,
                  name: 'Make Iron from steal: first phase',
                  domain: 'Electronics',
                  assigned_to: [
                    {
                      url: ''
                    }
                  ],
                  timeline: {
                    progress: 30,
                    date: '02.10.2020'
                  },
                  status: 1
                },
                {
                  id: 4,
                  name: 'Make Iron from steal: first phase',
                  domain: 'Electronics',
                  assigned_to: [
                    {
                      url: 'https://randomuser.me/api/portraits/women/20.jpg'
                    },
                    {
                      url: 'https://randomuser.me/api/portraits/men/20.jpg'  
                    }
                  ],
                  timeline: {
                    progress: 30,
                    date: '02.10.2020'
                  },
                  status: 1
                }
              ]
            },
            {
              id: 5,
              name: 'Make Iron from steal: first phase',
              domain: 'Electronics',
              assigned_to: [
                {
                  url: 'https://randomuser.me/api/portraits/women/20.jpg'
                },
                {
                  url: 'https://randomuser.me/api/portraits/men/20.jpg'  
                },
              ],
              timeline: {
                progress: 80,
                date: '02.10.2020'
              },
              status: 2, //1 for completed, 2 for over_due, 3 for in_progress
              subtasks: [
                {
                  id: 6,
                  name: 'Make Iron from steal: first phase',
                  domain: 'Electronics',
                  assigned_to: [
                    {
                      url: 'https://randomuser.me/api/portraits/men/20.jpg'  
                    },
                    {
                      url: 'https://randomuser.me/api/portraits/men/12.jpg'  
                    }
                  ],
                  timeline: {
                    progress: 30,
                    date: '02.10.2020'
                  },
                  status: 1
                },
                {
                  id: 7,
                  name: 'Make Iron from steal: first phase',
                  domain: 'Electronics',
                  assigned_to: [
                    {
                      url: ''
                    }
                  ],
                  timeline: {
                    progress: 30,
                    date: '02.10.2020'
                  },
                  status: 2
                },
                {
                  id: 8,
                  name: 'Make Iron from steal: first phase',
                  domain: 'Electronics',
                  assigned_to: [
                    {
                      url: ''
                    }
                  ],
                  timeline: {
                    progress: 30,
                    date: '02.10.2020'
                  },
                  status: 2
                }
              ]
            },
            {
              id: 9,
              name: 'Make Iron from steal: first phase',
              domain: 'Electronics',
              assigned_to: [
                {
                  url: 'https://randomuser.me/api/portraits/women/20.jpg'
                },
              ],
              timeline: {
                progress: 70,
                date: '02.10.2020'
              },
              status: 3, //1 for completed, 2 for over_due, 3 for in_progress
              subtasks: [
                {
                  id: 10,
                  name: 'Make Iron from steal: first phase',
                  domain: 'Electronics',
                  assigned_to: [
                    {
                      url: ''
                    }
                  ],
                  timeline: {
                    progress: 30,
                    date: '02.10.2020'
                  },
                  status: 1
                },
                {
                  id: 11,
                  name: 'Make Iron from steal: first phase',
                  domain: 'Electronics',
                  assigned_to: [
                    {
                      url: ''
                    }
                  ],
                  timeline: {
                    progress: 30,
                    date: '02.10.2020'
                  },
                  status: 2
                },
                {
                  id: 11,
                  name: 'Make Iron from steal: first phase',
                  domain: 'Electronics',
                  assigned_to: [
                    {
                      url: ''
                    }
                  ],
                  timeline: {
                    progress: 30,
                    date: '02.10.2020'
                  },
                  status: 3
                }
              ]
            }
          ]
        }
      }
    }
</script>

<style scoped>
  .project-description{
    width: 100%;
    max-width: 1000px;
  }
  .attached-images-wrapper img{
    @apply mr-3;
    max-width: 30%;
    width: 100%;
  }
  .avatar{
    @apply w-8 rounded-full -ml-5 shadow inline cursor-pointer;
  }
  .avatar:hover{
    @apply shadow-md;
  }
  .avatar:first-child{
    @apply ml-0;
  }
  .avatar-timeline{
    @apply w-6 rounded-full shadow inline cursor-pointer;
  }
  .status {
    @apply uppercase;
  }
  .status--completed{
    @apply text-green-500;
  }
  .status--progress{
    @apply text-orange-500;
  }
  .status--over{
    @apply text-red-500;
  }
  .notifications{
    @apply text-sm text-ideeza;
  }
  .time-line-contents{
    width: 220px;
  }
  .timeline-days-container div{

  }
  .timeline-line{
    width: 5.6%;
  }
  @screen lg{

    table{
      @apply mb-5 w-full table-fixed border-collapse text-gray-600;
    }
    thead tr{
      @apply bg-white px-6 pl-16;
    }
    thead th{
      @apply p-6;
    }
    thead th:first-child{
      @apply pl-16;
    }
    tbody td{
      @apply p-6 border-r border-solid border-gray-300;
    }
    tbody tr:even{
      @apply bg-white;
    }
    tbody td:first-child{
      @apply pl-16;
    }
    tbody td:last-child{
      @apply border-r-0;
    }

  }
  @media
  only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px)  {

    /* Force table to not be like tables anymore */
    table, thead, tbody, th, td, tr {
      display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr { border: 1px solid #ccc; margin-bottom: 10px; }

    td {
      /* Behave  like a "row" */
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 50%;
    }

    td:before {
      /* Now like a table header */
      position: absolute;
      /* Top/left values mimic padding */
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
      font-weight: 600;
    }

    /*
      Label the data
      */
    td:nth-of-type(1):before { content: "Products"; }
    td:nth-of-type(2):before { content: "Color"; }
    td:nth-of-type(3):before { content: "Price"; }
    td:nth-of-type(4):before { content: "Quantity"; }
    td:nth-of-type(5):before { content: "Cost"; }
    td:nth-of-type(6):before { content: "Action"; }
  }
</style>
