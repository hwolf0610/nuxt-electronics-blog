<template>
  <div class="settings-privacy mx-auto p-2">
    <!---->
    <!--Social Connections-->
    <!---->
    <div class="md:flex justify-between items-center pb-3 border-b border-solid border-gray-400">
      <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Social Connections</h1>
    </div>
    <!--Container-->
    <div class="my-5 pb-10 bg-white shadow-md">
      <!--Head-->
      <div
        class="p-10 mb-5 text-gray-500 border-b border-solid border-gray-300"
        v-for="Project in Projects"
        v-if="Project.id == 1"
      >
        {{Project.content1}}
        <br />
        <br />
        {{Project.content2}}
        <br />
        <br />
        {{Project.content3}}
      </div>
      <div
        class="px-10"
        v-for="(select,index) in articleArray[0]"
        v-if="index == 'social_connection' "
      >
        <span v-if="select == 'false'">
          <input type="checkbox" :checked="false" id="social" @click="changesocial" />
          Share my activity with my Facebook friends that are also on Ideeza (recommended)
        </span>
        <span v-else-if="select == 'true'">
          <input type="checkbox" :checked="true" id="social" @click="changesocial" />
          Share my activity with my Facebook friends that are also on Ideeza (recommended)
        </span>
      </div>
    </div>

    <!---->
    <!--facebook-->
    <!---->
    <div
      class="md:flex justify-between items-center pb-3 mt-10 border-b border-solid border-gray-400"
    >
      <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Add Ideeza to Facebook Timeline</h1>
    </div>
    <!--Container-->
    <div class="my-5 pb-10 bg-white shadow-md">
      <!--Head-->
      <div
        class="p-10 mb-5 text-gray-500 border-b border-solid border-gray-300"
        v-for="Project in Projects"
        v-if="Project.id == 2"
      >
        {{Project.content1}}
        <br />
        <br />
        {{Project.content2}}
      </div>
      <div
        class="px-10"
        v-for="(select,index) in articleArray[0]"
        v-if="index == 'facebook_timeline' "
      >
        <span v-if="select == 'false'">
          <input type="checkbox" :checked="false" id="Facebook" @click="changeFacebook" />
          Share my activity with my Facebook friends that are also on Ideeza (recommended)
        </span>
        <span v-else-if="select == 'true'">
          <input type="checkbox" :checked="true" id="Facebook" @click="changeFacebook" />
          Share my activity with my Facebook friends that are also on Ideeza (recommended)
        </span>

        <!-- <input type="checkbox" :checked="false" id="Facebook" @click="changeFacebook" />
        Share my activity with my Facebook friends that are also on Ideeza (recommended)-->
      </div>
    </div>

    <!---->
    <!--Products-->
    <!---->
    <div
      class="md:flex justify-between items-center pb-3 mt-10 border-b border-solid border-gray-400"
    >
      <h1
        class="text-gray-800 text-xl lg:text-3xl font-semibold"
      >Your Products & Profile in Search Engines</h1>
    </div>
    <!--Container-->
    <div class="my-5 pb-10 bg-white shadow-md">
      <!--Head-->
      <div
        class="p-10 mb-5 text-gray-500 border-b border-solid border-gray-300"
        v-for="Project in Projects"
        v-if="Project.id == 3"
      >
        {{Project.content1}}
        <br />
        <br />
        {{Project.content2}}
        <br />
        <br />
        {{Project.content3}}
      </div>
      <div class="px-10" v-for="(select,index) in articleArray[0]" v-if="index == 'search_engine' ">
        <span v-if="select == 'false'">
          <input type="checkbox" :checked="false" id="Search" @click="changesearch" />
          Include my profile and products in search engines like Google and Bing (recommended)
        </span>
        <span v-else-if="select == 'true'">
          <input type="checkbox" :checked="true" id="Search" @click="changesearch" />
          Include my profile and products in search engines like Google and Bing (recommended)
        </span>

        <!-- <input type="checkbox" :checked="select" id="Search" @click="changesearch" />
        Include my profile and products in search engines like Google and Bing (recommended){{select}}-->
      </div>
    </div>

    <div class="mt-16 mb-16 text-center">
      <button class="btn px-20 pill-button pill-button--ideeza" @click="savesetting">Save</button>
      <!-- {{articleArray[0]}} -->
    </div>
  </div>
</template>

<script>
import CheckBox from "~/components/form/checkbox.vue";
import Projects from "~/data/UserSettingApi.json";
import axios from "axios";
import apiService from "~/apiService/have_token.js";
export default {
  middleware: "auth",
  name: "privacy",
  data: function() {
    return {
      longview: true,
      Projects: Projects.Privacy,
      Search: false,
      Facebook: false,
      social: false,
      geturl: "/api/setting/privacy",
      geturl2: "/api/setting/save_privacy",
      articleArray: [],
      randomNumber: {}
    };
  },
  created: function() {},
  mounted() {
    let sendData = {
      method: "get",
      url: this.geturl,
      data: null
    };

    apiService(sendData, response => {
      console.log(response.data);
      this.randomNumber = response.data;
      this.articleArray = Object.values(response.data.data);

      this.articleArray[0].map((item, index) => {
        switch (index) {
          case 0:
            this.Facebook = item;

            break;
          case 1:
            this.Search = item;
            break;
          case 2:
            this.social = item;
            break;
        }
        console.log("item,index:", item, index);
        console.log("item__index:", item);
        console.log("item_++index:", index);
        // this.articleArray.push(item);
      });
    });
  },
  methods: {
    changeFacebook() {
      var checkBox = document.getElementById("Facebook");
      if (checkBox.checked == true) {
        this.Facebook = "true";
      } else {
        this.Facebook = "false";
      }
      // alert("Facebook_"+this.Facebook);
    },
    changesearch() {
      var checkBox = document.getElementById("Search");
      if (checkBox.checked == true) {
        this.Search = "true";
      } else {
        this.Search = "false";
      }
      // alert("Search_" + this.Search);
    },
    changesocial() {
      var checkBox = document.getElementById("social");
      if (checkBox.checked == true) {
        this.social = "true";
      } else {
        this.social = "false";
      }
      // alert("social_"+this.social);
    },
    savesetting() {
      // alert(
      //   "all setting saved!!!" +
      //     this.social +
      //     "_" +
      //     this.Facebook +
      //     "_" +
      //     this.Search +
      //     "_"
      // );
      const formData = new FormData();
      formData.set("facebook_timeline", this.Facebook);
      formData.set("search_engine", this.Search);
      formData.set("social_connection", this.social);
      let sendData = {
        method: "post",
        url: this.geturl2,
        data: formData
      };

      apiService(sendData, response => {
        console.log(response);
      });
    }
  },
  components: {
    CheckBox
  }
};
</script>

<style scoped>
.settings-privacy {
  max-width: 950px;
}
input[type="checkbox"] {
  /* Double-sized Checkboxes */
  -ms-transform: scale(2); /* IE */
  -moz-transform: scale(2); /* FF */
  -webkit-transform: scale(2); /* Safari and Chrome */
  -o-transform: scale(2); /* Opera */
  transform: scale(2);
  padding: 10px;
  margin: 5px;
}
</style>
