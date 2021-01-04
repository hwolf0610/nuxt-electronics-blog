<template>
  <div>
    <div class="mt-10">
      <h3 class="font-semi-bold text-2xl">Order Details</h3>
    </div>
    <hr class="mt-2 mb-4">
    <div>
      <!-- <div>
        <div class="hidden xl:flex justify-between">
          <div class="flex">
            <select class="field field--border-light mr-1 h-12">
              <option>All payout methods</option>
            </select>
            <select class="field field--border-light mr-1 h-12">
              <option>All products</option>
            </select>
            <select class="field field--border-light mr-1 h-12">
              <option>2018</option>
            </select>
            <select class="field field--border-light mr-1 h-12">
              <option>Order Status</option>
            </select>
            <select class="field field--border-light mr-1 h-12">
              <option>Type</option>
            </select>
          </div>
          <div>
            <div class="flex w-fit-content bg-white justify-center border-light-gray items-center content-center">
              <div class="h-12 relative w-10">
                <font-awesome-icon class="ml-1 h-4 text-gray-400 absolute-center-h-v" :icon="['fas', 'search']" />
              </div>
              <input placeholder="Find and order by detail..." class="bg-white outline-none h-8 text-gray-800 pr-3"
                v-model="searchTerm" v-on:input="search" />
            </div>
          </div>
        </div>
        <div class="xl:hidden cursor-pointer border-light-gray w-10 h-8 relative mt-2 ml-2 bg-white">
          <font-awesome-icon class="ml-1 h-6 text-gray-600 absolute-center-h-v" :icon="['fas', 'sliders-h']" />
        </div>
      </div> -->
      <div class="px-3 bg-white shadow-lg">
        <table class="mt-5 ">
          <thead>
            <tr class="text-gray-800 h16 border-b border-gray-500">
              <th colspan="2" class="text-left">Image</th>
              <th class="text-left" colspan="2">Title</th>
              <th class="text-left">ID</th>
              <th class="text-left">Type</th>
              <th class="text-left">Quantity</th>
              <th class="text-left">Price</th>
              <th class="text-left">Status</th>
              <th class="text-left" colspan="2">Start-End</th>
              <th class="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="font-semibold">
              <td colspan="2" class="text-left">
                <img :src="order.image" class="w-full">
              </td>
              <td colspan="2">
                <div>{{order.title}}</div>
                <div class="font-light">{{order.type}}</div>
              </td>
              <td>{{order.id}}</td>
              <td>{{order.type_2}}</td>
              <td>{{order.quantity}}</td>
              <td>{{order.price}}</td>
              <td>{{order.status}}</td>
              <td colspan="2">
                <div class="font-light">Start:</div>
                <div>{{order.date.start}}</div>
                <div class="font-light">End:</div>
                <div>{{order.date.end}}</div>
              </td>
              <td class="text-left">
                <div><button class="py-2 px-3 mb-2 border border-gray-400">Invoice</button></div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="ml-6">
          <h4 class="font-semibold">Details</h4>
          <div class="md:flex justify-between" v-if="order">
            <div class="md:w-1/3">
              <div class="making-container mx-auto">
                <div class="track-heading mt-6">Combine & QA</div>
                <div class="mt-10">
                  <Progress :width="order.progress" />
                  <div class="my-10" v-for="worker in order.workers">
                    <div class="flex justify-between items-center" v-if="worker.kind == 'Eletronics' ">
                      <div class="flex items-center">
                        <div class="mr-2">
                          <img class="avatar" :src="worker.profileimage" alt />
                        </div>
                        <div>
                          <span class="block font-semibold text-sm">{{worker.name}}</span>
                          <span class="block text-sm text-gray-500">{{worker.consultantKind}}</span>
                        </div>
                      </div>
                      <div class="flex items-center">
                        <div class="text-sm text-gray-500 mr-2">
                          <span class="block font-semibold text-sm text-ideeza">{{worker.consultantname}}</span>
                          <span class="block text-xs font-bold text-gray-500">{{worker.state}}</span>
                        </div>
                        <nuxt-link :to="{ path: '/user/messages', query: { id: worker.id}}">
                          <font-awesome-icon class="mr-2 h-6 text-ideeza text-xl cursor-pointer"
                            :icon="['far', 'envelope']" />
                        </nuxt-link>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div class="flex-1">
              <table class="shadow-md">
                <thead>
                  <tr class="text-white h16 gradient-bg">
                    <th class="text-left " colspan="2">Tasks</th>
                    <th class="text-left" colspan="2">Domain</th>
                    <th class="text-left" colspan="2">Assigned to</th>
                    <th class="text-left" colspan="2">Due Date</th>
                    <th class="text-left">Task Status</th>
                    <th class="text-left" colspan="2">Notification</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-for="(Service,index) in articleArray">
                    <tr :class="{'bg-ideeza-100': index % 2== 0,'bg-white': index%2 != 0}">
                      <td class="cursor-pointer" @click.self="expand(Service.id)" colspan="2">
                        <font-awesome-icon class="mr-1 text-lg text-ideeza" :icon="['fas', 'caret-up']"
                          v-if="Service.id in expanded&&expanded[Service.id]==true" />
                        <font-awesome-icon class="mr-1 text-lg text-ideeza" :icon="['fas', 'caret-down']" v-else />
                        {{Service.TaskName}}
                      </td>
                      <td colspan="2">{{Service.domain}}</td>
                      <td colspan="2">
                        <img v-for="image in Service.assigned_to_profile_image" :src="image[0]" class="avatar">
                        <!-- <img class="avatar" src="https://randomuser.me/api/portraits/women/20.jpg">
            <img class="avatar" src="https://randomuser.me/api/portraits/men/20.jpg">
            <img class="avatar" src="https://randomuser.me/api/portraits/men/12.jpg"> -->
                      </td>
                      <td class="text-center" colspan="2">
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
                      <td class="status status--priority" v-if="Service.task_status=='Priority'">
                        Priority
                      </td>
                      <!-- 1 for completed, 2 for over_due, 3 for in_progress -->
                      <td class="notifications" colspan="2">
                        <font-awesome-icon v-if="Service.task_status=='completed'" class="mr-1 text-lg text-ideeza-gold"
                          :icon="['fas', 'exclamation-circle']" />
                        <font-awesome-icon v-else-if="Service.task_status == 'Over Due'"
                          class="mr-1 text-lg text-blue-700" :icon="['fas', 'bell']" />
                        <font-awesome-icon v-else-if="Service.task_status == 'Priority'"
                          class="mr-1 text-lg text-red-700" :icon="['fas', 'bell']" />
                        <font-awesome-icon v-else-if="Service.task_status == 'Active'" class="mr-1 text-lg text-red-500"
                          :icon="['far', 'clock']" />
                      </td>
                    </tr>
                    <template v-if="Service.id in expanded&&expanded[Service.id]==true">
                      <tr class="bg-pink-200" v-for="(subtask) in Service.subtasks">
                        <td class="cursor-pointer md:text-right" @click.self="detailTask=true" colspan="2">
                          {{subtask.TaskName}}
                        </td>
                        <td colspan="2">{{subtask.domain}}</td>
                        <td colspan="2">
                          <img v-for="image in subtask.assigned_to_profile_image" :src="image[0]" class="avatar">
                          <!-- <img class="avatar" src="https://randomuser.me/api/portraits/women/20.jpg">
            <img class="avatar" src="https://randomuser.me/api/portraits/men/20.jpg">
            <img class="avatar" src="https://randomuser.me/api/portraits/men/12.jpg"> -->
                        </td>
                        <td class="text-center" colspan="2">
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
                        <td class="notifications" colspan="2">
                          <font-awesome-icon v-if="subtask.task_status=='completed'"
                            class="mr-1 text-lg text-ideeza-gold" :icon="['fas', 'exclamation-circle']" />
                          <font-awesome-icon v-else-if="Service.task_status == 'Over Due'"
                            class="mr-1 text-lg text-blue-700" :icon="['fas', 'bell']" />
                          <font-awesome-icon v-else-if="Service.task_status == 'Active'"
                            class="mr-1 text-lg text-red-500" :icon="['far', 'clock']" />
                        </td>
                      </tr>
                    </template>
                  </template>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <new-task @onClose="addNewTask=false" v-if="addNewTask" />
    <edit-task @onClose="editTask=false" v-if="editTask" />
    <detail-task @onClose="detailTask=false" @onEdit="detailTask=false;editTask=true" v-if="detailTask" @complete="detailTask=false;completeTask=true"/>
    <complete-task @onClose="completeTask=false" v-if="completeTask"/>
  </div>
</template>
<script>
  import ordersdata from "~/data/OrderApi.json"
  import Progress from "~/components/user/order-tracking/progress-bar.vue";
  import Services from "~/data/TechnicianProjectApi.json";
  import AddNewProject from "~/components/technician/management/new-project.vue"
  import AddNewTask from "~/components/technician/management/new-task.vue"
  import EditTask from "~/components/technician/management/edit-task.vue"
  import TaskTimeLine from "~/components/technician/management/task-timeline.vue"
  import DetailTask from "~/components/technician/management/detail-task.vue"
  import CompleteTask from "~/components/technician/management/complete-task.vue"
  export default {
    layout: 'service-provider',
    data() {
      return {
        order: [],
        searchTerm: "",
        articleArray: [],
        Servicestask: Services.firsttask,
        expanded: {},
        addNewProject: false,
        addNewTask: false,
        editTask: false,
        detailTask: false,
        completeTask: false
      }
    },
    asyncData({
      params
    }) {
      return {
        id: params.id
      }
    },
    components: {
        Progress,
        'new-project': AddNewProject,
        'new-task': AddNewTask,
        'edit-task': EditTask,
        'task-timeline': TaskTimeLine,
        DetailTask,
        CompleteTask
    },
    created: function () {
      this.Servicestask.map(item => {
        this.articleArray.push(item);
      });
      Object.assign(this.order, ordersdata);
      this.order = this.order.find(a => a.id.toString() == this.id)
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
    }
  }

</script>
<style scoped>
  @screen lg {
    table {
      @apply w-full table-fixed border-collapse text-gray-600;
    }

    thead tr {
      @apply bg-white px-6 pl-16;
    }

    thead th:first-child {
      @apply p-6;
    }

    /* thead th:first-child {
    @apply pl-0;
  } */
    tbody td:first-child {
      @apply p-6;
    }

    tbody tr:even {
      @apply bg-white;
    }

    /* tbody td:first-child {
    @apply pl-0;
  } */
  }

  @media only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px) {

    /* Force table to not be like tables anymore */
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr {
      border: 1px solid #ccc;
      margin-bottom: 10px;
    }

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
    td:nth-of-type(1):before {
      content: "Title";
    }

    td:nth-of-type(2):before {
      content: "ID";
    }

    td:nth-of-type(3):before {
      content: "Type";
    }

    td:nth-of-type(4):before {
      content: "Quantity";
    }

    td:nth-of-type(5):before {
      content: "Date";
    }

    td:nth-of-type(6):before {
      content: "Payout Methods";
    }

    td:nth-of-type(7):before {
      content: "Price";
    }

    td:nth-of-type(8):before {
      content: "Invoice";
    }
  }

  .making-container {
    @apply px-2;
    width: 100%;
    max-width: 370px;
  }

  .avatar {
    @apply rounded-full;
    width: 45px;
    height: auto;
  }

  .track-heading {
    @apply text-2xl font-semibold relative;
    width: fit-content;
  }

  .track-heading:before {
    @apply border-b-4 border-solid border-ideeza left-0;
    content: "";
    position: absolute;
    width: 80px;
    bottom: -10px;
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
  .notifications{
    @apply text-sm text-ideeza text-right;
  }
  .due-date{
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%);
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
  .status--priority{
    @apply text-blue-300;
  }
</style>
