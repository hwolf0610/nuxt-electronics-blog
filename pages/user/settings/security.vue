<template>
  <div class="settings-security mx-auto">
    <!---->
    <!--Profile Information-->
    <!---->
    <div class="security-form">
      <div
        class="md:flex justify-between items-center pb-3 border-b border-solid border-gray-400 p-5 lg:p-0"
      >
        <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Change your password</h1>
      </div>

      <!--Form Container-->
      <div class="my-5 p-5 bg-white shadow-md">
        <!--Form Fields-->
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

        <div class="mt-8 mb-3 text-center">
          <button
            class="btn px-20 pill-button pill-button--ideeza"
            @click="updatepassword"
          >Update Password</button>
        </div>
      </div>
    </div>

    <!---->
    <!--Login History-->
    <!---->
    <div
      class="md:flex mt-20 justify-between items-center pb-3 border-b border-solid border-gray-400 p-5 lg:p-0"
    >
      <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Login History</h1>
    </div>

    <!--Container-->
    <div class="my-5 p-5 bg-white shadow-md">
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
      <!-- {{articleArray[0]}} -->
      <div class="text-center lg:text-right text-sm text-gray-500">
        If you see something unfamiliar
        <span class="text-ideeza">change your password</span>
      </div>
    </div>
  </div>
</template>

<script>
import Projects from "~/data/UserSettingApi.json";
import axios from "axios";
import apiService from "~/apiService/have_token.js";

export default {
  middleware: "auth",
  name: "security",
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
};
</script>

<style scoped>
.settings-security {
  max-width: 900px;
}
.security-form {
  max-width: 600px;
}
.form-field {
  @apply py-4 border-b border-solid border-gray-300;
}
.form-field:last-child {
  @apply border-0;
}
.field-label {
  @apply w-56 text-gray-600 text-xl font-semibold;
}

@screen md {
  .form-field {
    @apply flex;
  }
}

@screen lg {
  table {
    @apply mb-5 w-full table-auto border-collapse text-gray-600;
  }
  tbody td {
    @apply border-t border-solid border-gray-400 py-3 my-3;
  }
  tbody tr:last-child td {
    @apply border-b border-solid border-gray-400 py-3 my-3;
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
    content: "Browser/Device";
  }
  td:nth-of-type(2):before {
    content: "Location";
  }
  td:nth-of-type(3):before {
    content: "Recent Activity";
  }
  td:nth-of-type(4):before {
    content: " ";
  }
}
</style>
