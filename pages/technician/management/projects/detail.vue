<template>
  <div>
    <div v-for="info in articleArray" v-if="info.id == $route.query.id">
      <div class="mt-10">
        <div class="flex justify-between items-center border-b-4 border-solid border-ideeza pb-5">
          <div class="flex">
            <span
              class="text-ideeza-dark text-xl inline-block font-semibold mr-5"
            >Project: {{info.title}}</span>
            <div class="flex items-center text-gray-500 hover:text-gray-800 cursor-pointer">
              <span class="text-sm inline-block mr-1">Edit</span>
              <font-awesome-icon class="mr-1 h-3" :icon="['fas', 'pen']" />
            </div>
          </div>
          <div>
            <button onclick="print()" class="btn btn-normal border-ideeza px-5 py-3">Invoice</button>
            <button
              @click.self="completeTask=true"
              class="btn btn-normal btn--ideeza px-5 py-3"
            >Complete Project</button>
            <button
              @click.self="$router.push('/technician/management/projects')"
              class="btn btn-normal btn--ideeza-gray-500 px-5 py-3"
            >Back</button>
          </div>
        </div>

        <div class="flex items-center justify-between my-5">
          <div>
            Status:
            <span class="text-ideeza uppercase">{{info.status}}</span>
          </div>
          <div class="flex items-center">
            <div class="text-xl">
              Project Duration:
              <span class="text-ideeza">{{ts.toLocaleDateString(0 - info.start)}} -</span>
              <span class="text-ideeza">{{ts.toLocaleDateString(info.end - 0)}}</span>
            </div>
            <font-awesome-icon class="ml-3 h-4 text-gray-800" :icon="['fas', 'calendar-alt']" />
          </div>
        </div>

        <div class="text-ideeza my-5">Price: $210</div>

        <div class="lg:flex justify-between">
          <div class="project-description lg:mr-16">
            <div class="gradient-bg px-8 py-5 text-white">Project Description</div>
            <p class="p-5 bg-white text-black">{{info.description}}</p>
          </div>

          <div class="flex-grow">
            <div class="gradient-bg px-8 py-5 text-white">Attachments</div>
            <div class="p-5 bg-white">
              <span class="block text-xs">3 pics attached</span>
              <div class="flex flex-wrap attached-images-wrapper mt-2">
                <!-- <img src="https://picsum.photos/200" alt /> -->
                <span v-for="image in info.attach">
                  <img :src="project_img_url + image.image" />
                </span>
                <img src="https://picsum.photos/200" alt />
                <!-- <img v-for="image in info.attach" :src="project_img_url+image.image" alt />{{project_img_url}}{{image.image}} -->
              </div>
              <div class="text-xs mt-5">
                link attached:
                <a class="text-blue-500" href="https://google.com">https://google.com</a>
              </div>
            </div>
          </div>
        </div>

        <table class="mt-10 shadow-md">
          <thead>
            <tr class="text-white h16 gradient-bg">
              <th class="text-left">Tasks</th>
              <th class="text-left">Domain</th>
              <th class="text-left">Assigned to</th>
              <th class="text-left">Due Date</th>
              <th class="text-left">Task Status</th>
              <th class="text-left">Notification</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="task in articleArray2">
              <tr class="bg-ideeza-100">
                <td class="cursor-pointer" @click="taskdetailtrue(task.id)">
                  <!-- @click.self="detailTask=true;window.$nuxt.$cookies.set('techniciantaskid', task.id)" -->
                  <font-awesome-icon class="mr-1 text-lg text-ideeza" :icon="['fas', 'caret-up']" />
                  {{task.name}}
                </td>
                <td>{{task.domain}}</td>
                <td>
                  <img
                    v-for="image in task.assigned_user"
                    :src="avata_img_url + image.avatar"
                    class="avatar"
                  />
                </td>
                <td class="text-center">
                  <div
                    class="text-sm text-gray-600 w-3/4 bg-white h-8 text-center rounded-full relative"
                  >
                    <span class="absolute due-date text-black">{{(task.end - task.start)/100000000}}</span>
                    <div
                      class="bg-ideeza rounded-full h-8"
                      :style="{ width: ((task.end - task.start)/100000000) +'%'}"
                    ></div>
                  </div>
                </td>
                <td>{{task.status}}</td>
                <td class="notifications">
                  <font-awesome-icon
                    class="mr-1 text-lg text-ideeza-gold"
                    :icon="['fas', 'exclamation-circle']"
                  />
                </td>

                <!-- <td class="cursor-pointer" @click.self="expand(task.id)">
              <font-awesome-icon
                class="mr-1 text-lg text-ideeza"
                :icon="['fas', 'caret-up']"
                v-if="task.id in expanded&&expanded[task.id]==true"
              />
              <font-awesome-icon
                class="mr-1 text-lg text-ideeza"
                :icon="['fas', 'caret-down']"
                v-else
              />
              {{task.name}}
            </td>
            <td>{{task.domain}}</td>
            <td>
                <img v-for="image in task.assigned_to" :src="image.url" class="avatar" />-->
                <!-- <img class="avatar" src="https://randomuser.me/api/portraits/women/20.jpg">
                                              <img class="avatar" src="https://randomuser.me/api/portraits/men/20.jpg">
                <img class="avatar" src="https://randomuser.me/api/portraits/men/12.jpg">-->
                <!-- </td>
            <td class="text-center">
              <div
                class="text-sm text-gray-600 w-3/4 bg-white h-8 text-center rounded-full relative"
              >
                <span class="absolute due-date text-black">{{task.timeline.date}}</span>
                <div
                  class="bg-ideeza rounded-full h-8"
                  :style="{ width: task.timeline.progress+'%'}"
                ></div>
              </div>
            </td>
            <td class="status status--completed" v-if="task.status == 1">completed</td>
            <td v-if="task.status == 2" class="status status--over">over due</td>
                <td v-if="task.status == 3" class="status status--progress">in progress</td>-->
                <!-- 1 for completed, 2 for over_due, 3 for in_progress -->
                <!-- <td class="notifications">
              <font-awesome-icon
                v-if="task.status == 1"
                class="mr-1 text-lg text-ideeza-gold"
                :icon="['fas', 'exclamation-circle']"
              />
              <font-awesome-icon
                v-else-if="task.status == 2"
                class="mr-1 text-lg text-blue-700"
                :icon="['fas', 'bell']"
              />
              <font-awesome-icon
                v-else-if="task.status == 3"
                class="mr-1 text-lg text-red-500"
                :icon="['far', 'clock']"
              />
                </td>-->
              </tr>

              <!-- <template v-if="task.id in expanded&&expanded[task.id]==true">
            <tr class="bg-pink-200" v-for="(subtask) in task.subtasks">
              <td
                class="cursor-pointer md:text-right"
                @click.self="detailTask=true"
              >{{subtask.name}}</td>
              <td>{{subtask.domain}}</td>
              <td>
              <img v-for="image in subtask.assigned_to" :src="image.url" class="avatar" />-->
              <!-- <img class="avatar" src="https://randomuser.me/api/portraits/women/20.jpg">
            <img class="avatar" src="https://randomuser.me/api/portraits/men/20.jpg">
              <img class="avatar" src="https://randomuser.me/api/portraits/men/12.jpg">-->
              <!-- </td>
              <td class="text-center">
                <div
                  class="text-sm text-gray-600 w-3/4 bg-white h-8 text-center rounded-full relative"
                >
                  <span class="absolute due-date text-black">{{subtask.timeline.date}}</span>
                  <div
                    class="bg-ideeza rounded-full h-8"
                    :style="{ width: subtask.timeline.progress+'%'}"
                  ></div>
                </div>
              </td>
              <td class="status status--completed" v-if="subtask.status == 1">completed</td>
              <td v-if="subtask.status == 2" class="status status--over">over due</td>
              <td v-if="subtask.status == 3" class="status status--progress">in progress</td>-->
              <!-- 1 for completed, 2 for over_due, 3 for in_progress -->
              <!-- <td class="notifications">
                <font-awesome-icon
                  v-if="subtask.status == 1"
                  class="mr-1 text-lg text-ideeza-gold"
                  :icon="['fas', 'exclamation-circle']"
                />
                <font-awesome-icon
                  v-else-if="subtask.status == 2"
                  class="mr-1 text-lg text-blue-700"
                  :icon="['fas', 'bell']"
                />
                <font-awesome-icon
                  v-else-if="subtask.status == 3"
                  class="mr-1 text-lg text-red-500"
                  :icon="['far', 'clock']"
                />
              </td>
            </tr>
              </template>-->
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


            </tr>-->
          </tbody>
        </table>
        <button
          @click.self="addNewTask=true"
          class="btn btn-normal btn--ideeza-dark px-5 py-3 mt-5"
        >Add New Task +</button>

        <div class="mt-20">
          <div class="gradient-bg px-8 py-5 text-white">Timeline</div>

          <task-timeline />
        </div>

        <!--Add new project-->
        <new-project @onClose="addNewProject=false" v-if="addNewProject" />

        <!--Add new task-->
        <new-task @onClose="addNewTask=false" v-if="addNewTask" />

        <!--Edit task-->
        <edit-task @onClose="editTask=false" v-if="editTask" />

        <detail-task
          @onClose="detailTask=false"
          @onEdit="detailTask=false;editTask=true"
          v-if="detailTask"
          @complete="detailTask=false;completeTask=true"
        />
        <complete-task @onClose="completeTask=false" v-if="completeTask" />

        <!-- <span v-for="info in articleArray" v-if="info.id == $route.query.id">
      {{info}}
    </span>
    --{{$route.query.id}}
        {{articleArray2}}--{{projectidd}}-->
      </div>
    </div>
  </div>
</template>

<script>
import AddNewProject from "~/components/technician/management/new-project.vue";
import AddNewTask from "~/components/technician/management/new-task.vue";
import EditTask from "~/components/technician/management/edit-task.vue";
import DetailTask from "~/components/technician/management/detail-task.vue";
import TaskTimeLine from "~/components/technician/management/task-timeline.vue";
import CompleteTask from "~/components/technician/management/complete-task.vue";

import apiService from "~/apiService/have_token.js";
import apiService2 from "~/apiService/get_param.js";

export default {
  name: "detail",
  mounted() {
    this.projectidd = this.$route.query.id;
    window.$nuxt.$cookies.set("technicianprojectid", this.$route.query.id);

    this.$store.commit("TechnicianProjectStore/viewflagchange2");

    let sendData = {
      method: "get",
      url: this.geturl,
      data: null
    };

    apiService(sendData, response => {
      console.log(response.data);
      this.randomNumber = response.data;
      this.articleArrayaxios = Object.values(response.data.data);

      this.articleArrayaxios.map(item => {
        this.articleArrayrout.push(item);
        this.articleArray.push(item);
      });
    });

    const formData = new FormData();
    formData.set("projectid", this.projectidd);
    let sendData2 = {
      method: "post",
      url: this.geturl2,
      data: formData
    };

    apiService(sendData2, response => {
      console.log(response.data);
      this.randomNumber2 = response.data;
      this.articleArrayaxios2 = Object.values(response.data.tasks);

      this.articleArrayaxios2.map(item => {
        this.articleArrayrout2.push(item);
        this.articleArray2.push(item);
      });
    });
  },
  components: {
    "new-project": AddNewProject,
    "new-task": AddNewTask,
    "edit-task": EditTask,
    "task-timeline": TaskTimeLine,
    DetailTask,
    CompleteTask
  },
  methods: {
    taskdetailtrue(myid) {
      window.$nuxt.$cookies.set("techniciantaskid", myid);
      this.detailTask = true;
    },
    expand(id) {
      if (id in this.expanded && this.expanded[id] == true) {
        this.$set(this.expanded, id, false);
      } else {
        this.$set(this.expanded, id, true);
      }
      this.$forceUpdate();
    }
  },
  data: function() {
    return {
      project_img_url: process.env.project_image_url,
      ts: new Date(),
      geturl: "/api/project/technician/get_all",
      articleArray: [],
      articleArrayrout: [],
      articleArrayaxios: [],
      projectidd: null,
      randomNumber: {},
      avata_img_url: process.env.avatar_base_url,
      project_img_url: process.env.project_image_url,
      articleArray2: [],
      articleArrayrout2: [],
      geturl2: "/api/project/get_tasks",
      articleArrayaxios2: [],
      randomNumber2: [],

      addNewProject: false,
      addNewTask: false,
      editTask: false,
      detailTask: false,
      completeTask: false,
      expanded: {},
      tasks: [
        {
          id: 1,
          name: "Make Iron from steal: first phase",
          domain: "Electronics",
          assigned_to: [
            {
              url: "https://randomuser.me/api/portraits/women/20.jpg"
            },
            {
              url: "https://randomuser.me/api/portraits/men/20.jpg"
            },
            {
              url: "https://randomuser.me/api/portraits/men/12.jpg"
            }
          ],
          timeline: {
            progress: 30,
            date: "02.10.2020"
          },
          status: 1, //1 for completed, 2 for over_due, 3 for in_progress
          subtasks: [
            {
              id: 2,
              name: "Make Iron from steal: first phase",
              domain: "Electronics",
              assigned_to: [
                {
                  url: "https://randomuser.me/api/portraits/women/20.jpg"
                },
                {
                  url: "https://randomuser.me/api/portraits/men/20.jpg"
                },
                {
                  url: "https://randomuser.me/api/portraits/men/12.jpg"
                }
              ],
              timeline: {
                progress: 30,
                date: "02.10.2020"
              },
              status: 1
            }
          ]
        }
      ]
    };
  }
};
function print() {
  var doc = new jsPDF();
  doc.text("Price: 210", 10, 10);
  doc.save("a4.pdf");
}
</script>

<style scoped>
.project-description {
  width: 100%;
  max-width: 1000px;
}
.attached-images-wrapper img {
  @apply mr-3;
  max-width: 30%;
  width: 100%;
}
.avatar {
  @apply w-8 rounded-full -ml-5 shadow inline cursor-pointer;
}
.avatar:hover {
  @apply shadow-md;
}
.avatar:first-child {
  @apply ml-0;
}
.avatar-timeline {
  @apply w-6 rounded-full shadow inline cursor-pointer;
}
.status {
  @apply uppercase;
}
.status--completed {
  @apply text-green-500;
}
.status--progress {
  @apply text-orange-500;
}
.status--over {
  @apply text-red-500;
}
.notifications {
  @apply text-sm text-ideeza;
}
.time-line-contents {
  width: 220px;
}
.timeline-days-container div {
}
.timeline-line {
  width: 5.6%;
}
@screen lg {
  table {
    @apply mb-5 w-full table-fixed border-collapse text-gray-600;
  }
  thead tr {
    @apply bg-white px-6 pl-16;
  }
  thead th {
    @apply p-6;
  }
  thead th:first-child {
    @apply pl-16;
  }
  tbody td {
    @apply p-6 border-r border-solid border-gray-300;
  }
  tbody tr:even {
    @apply bg-white;
  }
  tbody td:first-child {
    @apply pl-2;
  }
  tbody td:last-child {
    @apply border-r-0;
  }
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
    margin-bottom: 2rem;
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
    content: "Tasks";
  }
  td:nth-of-type(2):before {
    content: "Domain";
  }
  td:nth-of-type(3):before {
    content: "Assigned to";
  }
  td:nth-of-type(4):before {
    content: "Due Date";
    text-align: left;
  }
  td:nth-of-type(5):before {
    content: "Task Status";
  }
  td:nth-of-type(6):before {
    content: "Notification";
  }
}
.due-date {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>