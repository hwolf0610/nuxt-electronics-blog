<template>
  <div class="settings-notifications p-2 lg:flex mx-auto">
    <div v-for="infonotification in Projects" class="settings-notifications p-2 lg:flex mx-auto">
      <!--Column 1-->
      <div class="column lg:mr-10">
        <!---->
        <!--Messages-->
        <!---->
        <div
          class="md:flex mt-10 justify-between items-center pb-3 border-b border-solid border-gray-400"
        >
          <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Messages</h1>
        </div>
        <!--Container-->
        <div class="my-5 p-5 bg-white shadow-md">
          <!--Head-->
          <div
            class="pb-3 mb-5 text-gray-500 border-b border-solid border-gray-300"
          >Receive messages to:</div>
          <div class="mb-2">
            <CheckBox :checked="infonotification.message_email" value="email">Email</CheckBox>
          </div>
          <div class="mb-2">
            <CheckBox
              :checked="infonotification.message_notification"
              value="notify_mobile"
            >Notifications & mobile devices</CheckBox>
          </div>
          <div class="mb-2">
            <CheckBox
              :checked="infonotification.message_textmessage"
              value="notify_mobile"
            >Text Messages</CheckBox>
          </div>
        </div>

        <!---->
        <!--Reminders-->
        <!---->
        <div
          class="md:flex mt-10 justify-between items-center pb-3 border-b border-solid border-gray-400"
        >
          <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Reminders</h1>
        </div>
        <!--Container-->
        <div class="my-5 p-5 bg-white shadow-md">
          <!--Head-->
          <div class="pb-3 mb-5 text-gray-500 border-b border-solid border-gray-300">
            Recieve reminders, requests to write
            a review, and other reminders related
            to your activities on Ideeza.
          </div>
          <div class="mb-2">
            <CheckBox :checked="infonotification.Reminders_email" value="email">Email</CheckBox>
          </div>
          <div class="mb-2">
            <CheckBox
              :checked="infonotification.Reminders_notification"
              value="notify_mobile"
            >Notifications to mobile devices</CheckBox>
          </div>
          <div class="mb-2">
            <CheckBox
              :checked="infonotification.Reminders_textmessage"
              value="notify_mobile"
            >Text Messages</CheckBox>
          </div>
        </div>

        <!---->
        <!--Account Support-->
        <!---->
        <div
          class="md:flex mt-10 justify-between items-center pb-3 border-b border-solid border-gray-400"
        >
          <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Account Support</h1>
        </div>
        <!--Container-->
        <div class="my-5 p-5 bg-white shadow-md">
          <!--Head-->
          <div class="pb-3 mb-5 text-gray-500 border-b border-solid border-gray-300">
            We may need to send you messages
            regarding your account, legal notifica-
            tions, security and privacy matters,
            and customer support requests.
          </div>
          <div class="mb-2">
            <CheckBox :checked="infonotification.Account_Support_email" value="email">Email</CheckBox>
          </div>
          <div class="mb-2">
            <CheckBox
              :checked="infonotification.Account_Support_notification"
              value="notify_mobile"
            >Notifications & mobile devices</CheckBox>
          </div>
          <div class="mb-2">
            <CheckBox
              :checked="infonotification.Account_Support_textmessage"
              value="notify_mobile"
            >Text Messages</CheckBox>
          </div>
        </div>
      </div>

      <!--Column 2-->
      <div class="column">
        <!---->
        <!--Contact Info-->
        <!---->
        <div
          class="md:flex mt-10 justify-between items-center pb-3 border-b border-solid border-gray-400"
        >
          <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Contact Information</h1>
        </div>
        <!--Container-->
        <div class="my-5 p-5 bg-white shadow-md">
          <!--Head-->
          <div class="pb-3 mb-5 text-gray-500 border-b border-solid border-gray-300">
            This information can be edited from
            your profile page.
            <span
              class="text-ideeza"
            >Edit profile</span>
          </div>
          <div class="mb-3 flex justify-between">
            <div class="text-left text-gray-800 text-lg font-semibold">Email:</div>
            <div class="flex-shrink text-gray-600 text-lg">{{infonotification.contact_info_email}}</div>
          </div>
          <div class="mb-3 flex justify-between">
            <div class="text-left text-gray-800 text-lg font-semibold">Phone Number:</div>
            <div class="flex-shrink text-gray-600 text-lg">{{infonotification.contact_info_phone_number}}</div>
          </div>
        </div>

        <!---->
        <!--Text Messages-->
        <!---->
        <div
          class="md:flex mt-10 justify-between items-center pb-3 border-b border-solid border-gray-400"
        >
          <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Text Messages</h1>
        </div>
        <!--Container-->
        <div class="my-5 p-5 bg-white shadow-md">
          <!--Head-->
          <div class="mb-3 flex justify-between">
            <div class="text-left text-gray-500 w-1/2">
              Recieve SMS
              <br />notifications to:
            </div>
            <div class="w-1/2">
              <select class="w-auto field h-10">
                <option value>{{infonotification.Text_Messages1}}</option>
                <option value>{{infonotification.Text_Messages2}}</option>
              </select>
            </div>
          </div>
        </div>

        <!---->
        <!--Policy and community-->
        <!---->
        <div
          class="md:flex mt-10 justify-between items-center pb-3 border-b border-solid border-gray-400"
        >
          <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Policy and community</h1>
        </div>
        <!--Container-->
        <div class="my-5 p-5 bg-white shadow-md">
          <!--Head-->
          <div class="pb-3 mb-5 text-gray-500 border-b border-solid border-gray-300">
            Recieve updates on regulations and
            stay informed about advocacy efforts
            to create responsible laws on Ideeza.
          </div>
          <div class="mb-2">
            <CheckBox :checked="infonotification.Policy_and_community_email" value="email">Email</CheckBox>
          </div>
          <div class="mb-2">
            <CheckBox
              :checked="infonotification.Policy_and_community_notification"
              value="notify_mobile"
            >Notifications & mobile devices</CheckBox>
          </div>
          <div class="mb-2">
            <CheckBox
              :checked="infonotification.Policy_and_community_textmessage"
              value="notify_mobile"
            >Text Messages</CheckBox>
          </div>
        </div>
        <div class="mt-16 mb-16 text-center">
      <button class="btn pill-button pill-button--ideeza px-20" @click="savegeneralsetting">Save</button>
    </div>
      </div>

         
       



    </div>
  </div>
</template>

<script>
import CheckBox from "~/components/form/checkbox.vue";
import Projects from "~/data/UserSettingApi.json";

export default {
  middleware: "auth",
  name: "notifications",
  data: function() {
    return {
      longview: true,
      Projects: Projects.Setting_notification
    };
  },
  methods:{
    savegeneralsetting(){
      alert("All Setting Saved!!!")
    }
  },
  components: {
    CheckBox
  }
};
</script>

<style scoped>
.settings-notifications {
  max-width: 900px;
}
.column {
  width: 100%;
  max-width: 400px;
}
</style>
