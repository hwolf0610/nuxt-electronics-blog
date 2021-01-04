<template>
  <div class="settings-actions p-2 mx-auto">
    <div v-for="info_action_account in Projects">
      <!---->
      <!--Actions-->
      <!---->
      <div
        class="md:flex mt-10 justify-between items-center pb-3 border-b border-solid border-gray-400"
      >
        <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Remove the account</h1>
      </div>
      <!--Container-->
      <div class="my-5 p-5 bg-white shadow-md">
        <!--Head-->
        <div
          class="pb-3 mb-5 text-gray-500 border-b border-solid border-gray-300"
        >Why you want to remove the account</div>
        <div class="mb-2">
          <label for="dont-need" class="flex items-center font-semibold text-lg text-ideeza-black">
            <input
              name="delete-reason"
              type="radio"
              id="dont-need"
              class="mr-3"
              :checked="info_action_account.state1"
              @click="set_reason('select1')"
            /> {{info_action_account.reason1}}
          </label>
        </div>
        <div class="mb-2">
          <label for="useless" class="flex items-center font-semibold text-lg text-ideeza-black">
            <input
              name="delete-reason"
              type="radio"
              id="useless"
              class="mr-3"
              @click="set_reason('select2')"
              :checked="info_action_account.state2"
            /> {{info_action_account.reason2}}
          </label>
        </div>
        <div class="mb-2">
          <label for="technical" class="flex items-center font-semibold text-lg text-ideeza-black">
            <input
              name="delete-reason"
              type="radio"
              id="technical"
              class="mr-3"             
              @click="set_reason('select3')"
              :checked="info_action_account.state3"
            /> {{info_action_account.reason3}}
          </label>
        </div>

        <div class="mb-2">
          <label for="other" class="flex items-center font-semibold text-lg text-ideeza-black">
            <input
              name="delete-reason"
              type="radio"
              id="other"
              class="mr-3"
              @click="set_reason('select4')"
              :checked="info_action_account.state4"
            /> {{info_action_account.reason4}}
          </label>
        </div>

        <div class="mt-8">
          <button
            class="cursor-pointer border-0 bg-ideeza-gray-700 rounded-full text-white px-12 py-1"
            @click="delete_account"
          >Delete</button>
        </div>
      </div>

      <div class="mt-16 mb-16 text-center">
        <button class="btn pill-button pill-button--ideeza px-20" @click="savegeneralsetting">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
import Projects from "~/data/UserSettingApi.json";
import CheckBox from "~/components/form/checkbox.vue";
export default {
  middleware: "auth",
  name: "notifications",
  data: function() {
    return {
      longview: true,
      Projects: Projects.Setting_account_action,
      reason: "",
    };
  },
  methods: {
    savegeneralsetting() {
      alert("All Setting Saved!!!");
    },
    set_reason(name){
      this.reason = name
      // alert(this.reason)
    },
    delete_account() {
      if (this.reason == "" ) {
        alert("please select your reason!!!");
      } else {
        alert("Delete your account");
      }
      
    }
  },
  components: {
    CheckBox
  }
};
</script>

<style scoped>
.settings-actions {
  max-width: 700px;
}
</style>
