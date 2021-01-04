<template>
  <div class="md:m-8 lg:m-8 m-2">
    <div>
      <div class="max-w-3xl">
        <h1 class="text-gray-800 text-xl font-semibold">Social Connections</h1>
        <hr class="mt-2 mb-5" />
        <div class="bg-white p-5 shadow-lg">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum consectetur natus necessitatibus sed incidunt voluptas ab quasi numquam doloribus nemo quae non modi, architecto ipsam itaque optio et. Blanditiis, praesentium?</p>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum itaque voluptas nemo sint. Voluptatibus blanditiis aut dicta aliquam. Doloribus iste, eveniet aspernatur ad accusamus exercitationem ipsum dicta adipisci quasi enim.</p>
          <br />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi aperiam ex distinctio voluptate quasi dolor ea, obcaecati cum. Nisi minus eos laboriosam adipisci iste facilis saepe quas eaque assumenda dicta?</p>
          <hr class="mt-2 mb-5" />
          <div class="flex">
            <div class="px-10"
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
            <div>
              <!-- <p
                class="text-sm text-black ml-2 font-semibold"
              >Share my activity with my facebook friends that are also on ideeza (recommended)</p> -->
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="max-w-3xl">
        <h1 class="text-gray-800 text-xl font-semibold">Add Ideeza to Facebook Timeline</h1>
        <hr class="mt-2 mb-5" />
        <div class="bg-white p-5 shadow-lg">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum consectetur natus necessitatibus sed incidunt voluptas ab quasi numquam doloribus nemo quae non modi, architecto ipsam itaque optio et. Blanditiis, praesentium?</p>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum itaque voluptas nemo sint. Voluptatibus blanditiis aut dicta aliquam. Doloribus iste, eveniet aspernatur ad accusamus exercitationem ipsum dicta adipisci quasi enim.</p>
          <hr class="mt-2 mb-5" />
          <div class="flex">
            <div class="px-10"
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
            </div>
            <div>
              <!-- <p
                class="text-sm text-black ml-2 font-semibold"
              >Share my activity with my facebook friends that are also on ideeza (recommended)</p> -->
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="max-w-3xl">
        <h1 class="text-gray-800 text-xl font-semibold">Your Products and Profile in Search Engines</h1>
        <hr class="mt-2 mb-5" />
        <div class="bg-white p-5 shadow-lg">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum consectetur natus necessitatibus sed incidunt voluptas ab quasi numquam doloribus nemo quae non modi, architecto ipsam itaque optio et. Blanditiis, praesentium?</p>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum itaque voluptas nemo sint. Voluptatibus blanditiis aut dicta aliquam. Doloribus iste, eveniet aspernatur ad accusamus exercitationem ipsum dicta adipisci quasi enim.</p>
          <br />
          <p>Note: This may reduce your profile opportunities and will take a few days to take effect</p>
          <hr class="mt-2 mb-5" />
          <div class="flex">
            <div
              class="px-10"
              v-for="(select,index) in articleArray[0]"
              v-if="index == 'search_engine' "
            >
              <span v-if="select == 'false'">
                <input type="checkbox" :checked="false" id="Search" @click="changesearch" />
                Share my activity with my facebook friends that are also on ideeza (recommended)
              </span>
              <span v-else-if="select == 'true'">
                <input type="checkbox" :checked="true" id="Search" @click="changesearch" />
                Share my activity with my facebook friends that are also on ideeza (recommended)
              </span>
            </div>
            <div>
              <!-- <p
                class="text-sm text-black ml-2 font-semibold"
              >Share my activity with my facebook friends that are also on ideeza (recommended)</p> -->
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="flex justify-center max-w-3xl">
        <div>
          <button
            class="text-white rounded-full bg-ideeza px-8 py-1 font-semibold"
            @click="savesetting"
          >Save</button>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>
<script>
import Projects from "~/data/UserSettingApi.json";
import apiService from "~/apiService/have_token.js";
export default {
  layout: "service-provider-setting",
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
  }
};
</script>
<style scoped>
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