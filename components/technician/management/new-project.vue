<template>
  <div @click.self="close" class="popup-overlay">
    <div class="popup-overlay--contents add-new-container">
      <!--Header-->
      <div class="flex justify-between">
        <input
          type="text"
          class="outline-none border-0 text-ideeza text-xl placeholder-ideeza lg:w-1/2"
          placeholder="Add Project Name..."
           @change="projectname"
        />
        <font-awesome-icon
          @click="close"
          class="mr-1 h-4 cursor-pointer text-gray-500 hover:text-gray-800"
          :icon="['fas', 'times']"
        />
      </div>

      <!--Contents-->
      <div class="mt-10 flex">
        <div class="lg:w-1/2">
          <div class="flex justify-between items-center">
            <h1 class="text-ideeza-dark font-semibold">Project Description</h1>
            <div class="flex items-center text-gray-500 hover:text-gray-800 cursor-pointer">
              <span class="text-sm inline-block mr-1">Edit</span>
              <font-awesome-icon @click="close" class="mr-1 h-3" :icon="['fas', 'pen']" />
            </div>
          </div>
          <div class="mt-5">
            <textarea
        placeholder="Add project description here ...." @change="projectdescription" style="width:100%;height:150px;"
      ></textarea>
            <!-- <TextAreaField rows="5" placeholder="Add project description here ...." @change="projectdescription" /> -->
          </div>
          <button
            @click="send_add_request"
            class="mt-5 btn btn-normal btn--ideeza px-6 py-2"
          >Add project +</button>
        </div>

        <div class="lg:ml-20">
          <div class="flex items-center">
            <span class="text-gray-800 inline-block">Project Duration</span>
            <!--Calendar-->
            <vc-date-picker
              v-model="dateRange"
              color="pink"
              mode="range"
              :value="dateRange"
              :popover="{ placement: 'bottom', visibility: 'click' }"
              @change="projectdeadline"
            >
              <font-awesome-icon
                class="ml-2 h-4 cursor-pointer text-gray-800"
                :icon="['fas', 'calendar-alt']"
              />
            </vc-date-picker>
          </div>

          <div class="mt-5 w-40">
            <span class="inline-block mb-2">Mark Status</span>
            <select  @change="projectstatus"   styleHeight="mini">
              <option v-for="options in markStatusData" :value="options">{{options}}</option>
            </select>
            <!-- <DropDownField :data="markStatusData" styleHeight="mini" @change="projectstatus" /> -->
          </div>

          <div class="mt-10 relative">
            Assigned members:
            <button
              @click.self="showMembers = true"
              class="ml-5 btn btn-small btn--ideeza px-2 text-xs"
            >Add +</button>
            <div
              v-click-outside="hideMembers"
              v-if="showMembers"
              class="members-container absolute left-0 z-50 bg-white shadow-md p-2"
            >
              <div>
                <SearchField bg="bg-gray-100" placeholder="search member" />
              </div>
              <div class="mt-2 flex justify-between items-center" v-for="info in articleArray">
                <div class="flex items-center">
                  <img class="avatar" :src="avata_img_url+info.avatar" alt />
                  <span class="member-name">{{info.firstname}}</span>
                </div>
                <input type="checkbox" @click="projectuser(info.userid)"/>
                <!-- <CheckBoxField  /> -->
              </div>
              
            </div>
          </div>

          <div class="mt-10">
            <span class="inline-block mb-2">Attach</span>
            <img id="image" />
            <form enctype="multipart/form-data">
            <input
          type="file"
          @change="fileseleted"
          ref="file_upload"
          class="btn btn-normal btn--ideeza px-10 py-4 block lg: iinline-block"
          style="display:none"
        />
         </form>
         <button
       class="ml-5 btn btn-small btn--ideeza px-2 text-xs"
        @click="$refs.file_upload.click()"
      >SelectImage</button>
            <!-- <FileField /> -->
          </div>
        </div>
      </div>
    </div>
    <!-- {{articleArray}} -->
  </div>
</template>

<script>
import TextAreaField from "~/components/form/text-area.vue";
import DropDownField from "~/components/form/dropdown-field.vue";
import SearchField from "~/components/form/search-mini.vue";
import CheckBoxField from "~/components/form/checkbox-plus.vue";
import FileField from "~/components/form/file-field.vue";

import apiService from "~/apiService/have_token.js";
import apiService2 from "~/apiService/get_param.js";


export default {
  name: "new-project",
  data: function() {
    return {
      dateRange: new Date().toISOString().slice(0, 10),
      showMembers: false,
      markStatusData: ["Waiting", "Active", "Completed", "Over Due"],
      geturl: "/api/project/add_project",
      name:null,
      description:null,
      start:null,
      end:null,
      status:null,
      file:null,
      user:[],
      geturl2: "/api/user/get_list",
      articleArray: [],
      articleArrayaxios: [],
      articleArrayrout: [],
      randomNumber: [],
      projectidd:null,
      avata_img_url:process.env.avatar_base_url,

    };
  },
  mounted() {
    this.$store.commit("TechnicianProjectStore/viewflagchange2");
    let sendData = {
      method: "get",
      url: this.geturl2,
      data: null
    };

    apiService2(sendData, response => {
      console.log(response.data);
      // this.randomNumber = response.data;
      this.articleArrayaxios = Object.values(response.data.data);

      this.articleArrayaxios.map(item => {
        this.articleArrayrout.push(item);
        this.articleArray.push(item);
      });      
    });
  },
  components: {
    TextAreaField,
    DropDownField,
    SearchField,
    CheckBoxField,
    FileField
  },
  methods: {
    uploadUserBlog() {
      const formData = new FormData();
      formData.set("user", this.articlena);
      formData.set("user", this.articlena);
      formData.set("name", this.name);
      formData.set("description", this.description);
      formData.set("start", this.start);
      formData.set("end", this.end);
      formData.set("status", this.status);
      formData.append("attached", this.file);
      let sendData = {
        method: "post",
        url: this.geturl,
        data: formData
      };

      apiService(sendData, response => {
        console.log(response);
      });
    },
    fileseleted(evt) {
      var reader = new FileReader();
      reader.onload = function(e) {
        // get loaded data and render thumbnail.
        document.getElementById("image").src = e.target.result;
      };
      // read the image file as a data URL.
      reader.readAsDataURL(evt.target.files[0]);

      // this.file = this.$refs.file.files[0];
      console.log("file_upload:", evt);
      this.file = evt.target.files[0];
    },
    projectname(event) {
      this.name = event.target.value;
    },
    projectdescription(event){
      this.description = event.target.value;
    },
    projectdeadline(event){
      this.dateRange = event.target.value;
      console.log("datapicker:",this.dateRange )      
    },
    projectstatus(event){
      this.status = event.target.value;
    },
    projectuser(event){
      this.user.push(event)      
    },
    send_add_request() {
      this.start=new Date(this.dateRange.start).getTime()
      this.end=new Date(this.dateRange.end).getTime()
      const formData = new FormData();
       this.user.map(item=>{
        console.log("only:", item)
        formData.set("user", item);
      })
      // formData.set("user", this.articlena);
      // formData.set("user", this.articlena);
      formData.set("name", this.name);
      formData.set("description", this.description);
      formData.set("start", this.start);
      formData.set("end", this.end);
      formData.set("status", this.status);
      formData.append("attached", this.file);
      let sendData = {
        method: "post",
        url: this.geturl,
        data: formData
      };

      apiService(sendData, response => {
        console.log(response);
      });

      // alert("sending your add requset!!!"+this.name+this.description+this.status+new Date(this.dateRange.start).getTime() +"---------"+new Date(this.dateRange.end).getTime()+"ggg"+this.user);
      //  this.user.map(item=>{
      //   console.log("only:", item)
      // })
      
      console.log("timestart:",this.start )
      console.log("timeend:",this.end )

      this.$emit("onClose");
    },
    close() {
      this.$emit("onClose");
    },
    hideMembers() {
      this.showMembers = false;
    }
  },
  computed: {
  activityDate: {
      get() {
        return new Date(this.dateRange);
      },
      set(val) {
        console.log(val);
        this.dateRange = val.toISOString().slice(0, 10);
      },
  },
  }
};
</script>

<style scoped>
.add-new-container {
  @apply w-full h-full p-20;
  max-width: 1300px;
  max-height: 900px;
}
.members-container {
  height: 200px;
  overflow-y: auto;
}
.member-name {
  @apply text-gray-600 ml-2;
  font-size: 10px;
  font-weight: lighter;
}
.avatar {
  @apply w-4 rounded-full inline;
}
</style>
