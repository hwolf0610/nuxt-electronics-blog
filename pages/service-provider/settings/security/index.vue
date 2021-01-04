<template>
  <div class="md:m-8 lg:m-8 m-2">
    <div class="my-2">
      <div class="max-w-xl">
        <h1 class="text-gray-800 text-xl font-semibold">Change Your Password</h1>
        <hr class="mt-2 mb-5">
        <div class="bg-white shadow-lg">
          <div class="p-5">
            <div class="form-field">
              <div class="field-label">Old Password</div>
              <div class="field-input flex-grow">
                           <input class="field h-10" name v-model="old_password" />

              </div>
            </div>
             <div class="form-field">
              <div class="field-label">New Password</div>
              <div class="field-input flex-grow">
                <input class="field h-10" name v-model="new_password" />
              </div>
            </div>
             <div class="form-field">
              <div class="field-label">Confirm Password</div>
              <div class="field-input flex-grow">
                 <input class="field h-10" name v-model="password_confirm" />
              </div>
            </div>
            <div class="flex justify-center">
              <div class="mt-5">
                <button class="text-white rounded-full bg-ideeza px-4 py-1"  @click="updatepassword">Update Password</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br>
      <h1 class="text-gray-800 text-xl font-semibold">Login History</h1>
      <hr class="mt-2 mb-5">
      <div class="mb-5 p-5 bg-white shadow-md ">

      <table>
        <thead>
          <tr class="text-gray-800 h16">
            <th class="text-left">Browser/Device</th>
            <th class="text-left">Location</th>
            <th class="text-left">Recent Activity</th>
            <th></th>
          </tr>
        </thead>
        <tbody v-for="Projects in articleArray ">
          <tr class v-for="(Project,index) in Projects ">
            <td class>{{ Project.browser}}</td>
            <td>{{ Project.location}}</td>
            <td>{{ ts.toLocaleDateString(Project.timestamp)}}</td>
            <td class="lg:text-right">
              <font-awesome-icon
                class="ml-1 h-4 cursor-pointer text-gray-400"
                :icon="['fas', 'times']"
                @click="delete_login_history(Project.id)"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <div class="text-center lg:text-right text-sm text-gray-500">
        If you see something unfamiliar <span class="text-ideeza">change your password</span>
      </div>

    </div>
      <!-- <div class="max-w-2xl md:ml-10 md:mr-10">
        <h1>Login History</h1>
        <hr class="mt-2 mb-5">
        <div class="bg-white shadow-lg">
          <div class="p-5">
            <div class="flex justify-between">
              <div>
                <h1>Browser/Device</h1>
              </div>
              <div>
                <h1>Location</h1>
              </div>
              <div>
                <h1>Recent Activity</h1>
              </div>
            </div>
            <hr class="mt-2 mb-2">
            <div class="flex justify-between">
              <div>
                <p>chrome/Windows 10</p>
              </div>
              <div>
                <p><span>Sarajevo</span>,Bih Bosia and Herzigovena</p>
              </div>
              <div>
                <p>About 3 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
import Projects from "~/data/UserSettingApi.json";
import apiService from "~/apiService/have_token.js";

export default {
  layout:'service-provider-setting',
  data: function() {
    return {
      longview: true,
      Projects: Projects.Login_history,
      security: Projects.Setting_general,
      geturl: "/api/setting/login_history",
      geturl2: "/api/setting/delete_login_history",
      articleArray: [],
      randomNumber: {},
      ts: new Date(),
      loginId: null,
      password_confirm: null,
      new_password: null,
      old_password: null
    };
  },
  mounted() {
    let sendData = {
      method: "get",
      url: this.geturl,
      data: null
    };

    apiService(sendData, response => {
      console.log(response.data);
      this.randomNumber = response.data.data;
      // this.articleArray = Object.values(response.data.data);
      this.articleArray = this.randomNumber;
    });
  },
  created: function() {},
  methods: {
    delete_login_history(evt) {
      //   this.articleArray=[];

      //  alert(evt)
      // this.loginId=evt;
      // this.randomNumber.splice(this.loginId, this.loginId-1)

      const formData = new FormData();
      formData.set("id", evt);
      let sendData = {
        method: "post",
        url: this.geturl2,
        data: formData
      };

      apiService(sendData, response => {
        console.log(response.data);

        let listArray = [];
        console.log("before delete : ", this.randomNumber, evt);
        this.randomNumber.map(item => {
          // console.log("item id : ", item.history.id)
          if (item.history.id == evt) {
          } else {
            // this.articleArray.push(item);
            listArray.push(item);
          }
        });

        this.articleArray = listArray;

        console.log("after delete : ", this.articleArray);

        // this.randomNumber[this.loginId].remove()
        // window.location.reload();
      });
    },
    updatepassword() {
      if (this.old_password == this.security[0].password) {
        if (this.new_password == this.password_confirm) {
          alert("update your password!!!");
        } else {
          alert("password_confirm Error!!!");
        }
      } else {
        alert("old password Error!!!");
      }
    }
  }
}
</script>
<style scoped>
@screen lg{
    table{
      @apply mb-5 w-full table-auto border-collapse text-gray-600;
    }
    tbody td{
      @apply border-t border-solid border-gray-400 py-3 my-3;
    }
    tbody tr:last-child td{
      @apply border-b border-solid border-gray-400 py-3 my-3;
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
    td:nth-of-type(1):before { content: "Browser/Device"; }
    td:nth-of-type(2):before { content: "Location"; }
    td:nth-of-type(3):before { content: "Recent Activity"; }
    td:nth-of-type(4):before { content: " "; }
  }
  .form-field.textarea{
  @apply py-2 border-b border-solid border-gray-300 items-start;
}
.form-field{
    @apply py-2 border-b border-solid border-gray-300 items-center;
  }
  .form-field:last-child{
    @apply border-0;
  }
  .field-label{
    @apply w-56 text-gray-600 text-base font-semibold;
  }

  @screen md{
    .form-field{
      @apply flex;
    }
  }
  select.w-full{
    width: 100% !important;
    max-width: 100% !important;
  }
</style>
