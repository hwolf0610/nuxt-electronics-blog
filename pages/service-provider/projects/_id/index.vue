<template>
  <div >

    <!-- Main Contents -->
    <div class="flex-grow" v-for="projectkind in Servicesproject" v-if="projectkind.id == id ">
      <div class="main-contents">
        <div class="mt-10">
      <div class="flex justify-between items-center border-b-4 border-solid border-ideeza pb-5">
        <div class="md:flex">
          <span class="text-ideeza-dark text-xl inline-block font-semibold mr-5">Project: {{projectkind.projectName}}</span>
          <div class="flex items-center  text-gray-500 hover:text-gray-800 cursor-pointer">
            <span class="text-sm inline-block mr-1">Edit</span>
            <font-awesome-icon class="mr-1 h-3" :icon="['fas', 'pen']"/>
          </div>
        </div>
        <div>
        <button @click.self="addNewProject=true" class="btn btn-normal border-ideeza px-5 py-3">Invoice</button>
        <button @click.self="addNewProject=true" class="btn btn-normal btn--ideeza px-5 py-3">Complete Project</button>
        <button @click.self="addNewProject=true" class="btn btn-normal btn--ideeza-gray-500 px-5 py-3">Back</button>
        </div>
      </div>

      <div class="flex items-center justify-between my-5">
        <div>
          Status: <span class="text-ideeza uppercase">{{projectkind.task_status}}</span>
        </div>
        <div class="flex items-center">
          <div class="text-xl">Project Duration: <span class="text-ideeza">{{projectkind.due_date}}</span></div>
          <font-awesome-icon class="ml-3 h-4 text-gray-800" :icon="['fas', 'calendar-alt']"/>
        </div>
      </div>

      <div class="text-ideeza my-5">
        Price: $210
      </div>

      <div class="lg:flex justify-between">
        <div class="project-description lg:mr-16">
          <div class="gradient-bg px-8 py-5 text-white">
            Project Description
          </div>
          <p class="p-5 bg-white text-black">
           {{projectkind.projectDescription}}
          </p>
        </div>

        <div class="flex-grow">
          <div class="gradient-bg px-8 py-5 text-white">
            Attachments
          </div>
          <div class="p-5 bg-white">
            <span class="block text-xs">3 pics attached</span>
            <div class="flex flex-wrap attached-images-wrapper mt-2">
              <img src="https://picsum.photos/200" alt="">
              <img src="https://picsum.photos/200" alt="">
              <img src="https://picsum.photos/200" alt="">

            </div>
            <div class="text-xs mt-5">
              link attached: <a class="text-blue-500" href="https://google.com">https://google.com</a>
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
          <template v-for="(Service) in articleArray" v-if="projectkind.projectName == Service.projectName">
        <tr class="bg-ideeza-100">
          <td class="cursor-pointer" @click.self="expand(Service.id)" >
            <font-awesome-icon class="mr-1 text-lg text-ideeza" :icon="['fas', 'caret-up']" v-if="Service.id in expanded&&expanded[Service.id]==true"/> 
            <font-awesome-icon class="mr-1 text-lg text-ideeza" :icon="['fas', 'caret-down']" v-else/>
            {{Service.TaskName}}
          </td>
          <td>{{Service.domain}}</td>
          <td>
            <img v-for="image in Service.assigned_to_profile_image" :src="image[0]" class="avatar">
            <!-- <img class="avatar" src="https://randomuser.me/api/portraits/women/20.jpg">
            <img class="avatar" src="https://randomuser.me/api/portraits/men/20.jpg">
            <img class="avatar" src="https://randomuser.me/api/portraits/men/12.jpg"> -->
          </td>
          <td class="text-center">
            <div class="text-sm text-gray-600 w-3/4 bg-white h-8 text-center rounded-full relative">
              <span class="absolute due-date text-black">{{Service.due_date}}</span>
              <div class="bg-ideeza rounded-full h-8" :style="{ width:'30%'}">
              </div>
            </div>
          </td>
          <td class="status status--completed" v-if="Service.task_status=='completed'">
            completed
          </td>
          <td v-if="Service.task_status == 'Over Due'" class="status status--over">Over Due</td>
          <td v-if="Service.task_status== 'Active'" class="status status--progress">Active</td>
          <!-- 1 for completed, 2 for over_due, 3 for in_progress -->
          <td class="notifications">
            <font-awesome-icon v-if="Service.task_status=='completed'" class="mr-1 text-lg text-ideeza-gold" :icon="['fas', 'exclamation-circle']"/> 
            <font-awesome-icon v-else-if="Service.task_status == 'Over Due'" class="mr-1 text-lg text-blue-700" :icon="['fas', 'bell']"/> 
            <font-awesome-icon v-else-if="Service.task_status == 'Active'" class="mr-1 text-lg text-red-500" :icon="['far', 'clock']"/> 
          </td>
        </tr>
        <template v-if="Service.id in expanded&&expanded[Service.id]==true">
          <tr class="bg-pink-200" v-for="(subtask) in Service.subtasks">
            <td class="cursor-pointer md:text-right" @click.self="detailTask=true">
            {{subtask.TaskName}}
            </td>
          <td>{{subtask.domain}}</td>
          <td>
            <img v-for="image in subtask.assigned_to_profile_image" :src="image[0]" class="avatar">
            <!-- <img class="avatar" src="https://randomuser.me/api/portraits/women/20.jpg">
            <img class="avatar" src="https://randomuser.me/api/portraits/men/20.jpg">
            <img class="avatar" src="https://randomuser.me/api/portraits/men/12.jpg"> -->
          </td>
          <td class="text-center">
            <div class="text-sm text-gray-600 w-3/4 bg-white h-8 text-center rounded-full relative">
              <span class="absolute due-date text-black">{{subtask.due_date}}</span>
              <div class="bg-ideeza rounded-full h-8" :style="{ width:'30%'}">
              </div>
            </div>
          </td>
          <td class="status status--completed" v-if="subtask.task_status=='completed'">
            completed
          </td>
          <td v-if="Service.task_status == 'Over Due'" class="status status--over">Over Due</td>
          <td v-if="Service.task_status == 'Active'" class="status status--progress">Active</td>
          <!-- 1 for completed, 2 for over_due, 3 for in_progress -->
          <td class="notifications">
            <font-awesome-icon v-if="subtask.task_status=='completed'" class="mr-1 text-lg text-ideeza-gold" :icon="['fas', 'exclamation-circle']"/> 
            <font-awesome-icon v-else-if="Service.task_status == 'Over Due'" class="mr-1 text-lg text-blue-700" :icon="['fas', 'bell']"/> 
            <font-awesome-icon v-else-if="Service.task_status == 'Active'" class="mr-1 text-lg text-red-500" :icon="['far', 'clock']"/> 
          </td>
          </tr>
        </template>
          </template>
        </tbody>
      </table>
      <button @click.self="addNewTask=true" class="btn btn-normal btn--ideeza-dark px-5 py-3 mt-5">Add New Task +</button>


      <div class="mt-20">
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

      <detail-task @onClose="detailTask=false" @onEdit="detailTask=false;editTask=true" v-if="detailTask" @complete="detailTask=false;completeTask=true"/>
      <complete-task @onClose="completeTask=false" v-if="completeTask"/>
    </div>
      </div>
    </div>

  </div>
</template>

<script>

  import LeftMenu from '~/components/technician/common-left-side-menu.vue'
  import AddNewProject from "~/components/technician/management/new-project.vue"
  import AddNewTask from "~/components/technician/management/new-task.vue"
  import EditTask from "~/components/technician/management/edit-task.vue"
  import TaskTimeLine from "~/components/technician/management/task-timeline.vue"
  import DetailTask from "~/components/technician/management/detail-task.vue"
  import CompleteTask from "~/components/technician/management/complete-task.vue"

import Services from "~/data/TechnicianProjectApi.json";

    export default {
      layout: 'service-provider',
        name: "detail",
      components: {
        'new-project': AddNewProject,
        'new-task': AddNewTask,
        'edit-task': EditTask,
        'task-timeline': TaskTimeLine,
        DetailTask,
        LeftMenu,
        CompleteTask
      },
      asyncData({
      params
    }) {
      return {
        id: params.id
      }
    },
      computed: {
        leftMenu() {
          return this.$store.state.usermenu.openLeftMenu;
        }
      },
      methods:{
        changeid(id){
          // alert(id)
          this.$store.commit("TechnicianProjectStore/projectTaskkeychange1", id);
          // alert(this.$store.state.TechnicianProjectStore.projectTaskkey)
        },
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
      Servicestask: Services.firsttask,
      Servicesproject: Services.firstproject,
      articleArray: [],
          addNewProject: false,
          addNewTask: false,
          editTask: false,
          detailTask: false,
          completeTask: false,
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
      },
      created: function() {
    
    this.Servicestask.map(item => {
      this.articleArray.push(item);
    });
  },
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
    td:nth-of-type(1):before { content: "Tasks"; }
    td:nth-of-type(2):before { content: "Domain"; }
    td:nth-of-type(3):before { content: "Assigned To"; }
    td:nth-of-type(4):before { content: "Due Date"; }
    td:nth-of-type(5):before { content: "Task Status"; }
    td:nth-of-type(6):before { content: "Notification"; }
  }
  .due-date{
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%);
  }
</style>
