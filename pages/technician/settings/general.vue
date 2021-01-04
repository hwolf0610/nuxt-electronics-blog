<template>
  <div class="settings-general mx-auto">
    <!---->
    <!--Profile Information-->
    <!---->
    <div v-if="articleArraymid1.userid == userid">
      <div
        class="md:flex justify-between items-center pb-3 border-b border-solid border-gray-400 p-5 lg:p-0"
      >
        <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Edit General Profile Information</h1>
        <span class="text-gray-500 text-sm lg:text-2xl">* Required</span>
      </div>

      <!--Form Container-->
      <div class="my-5 p-5 bg-white shadow-md">
        <!--Form Fields-->
        <div class="form-field">
          <div class="field-label">Name</div>
          <div class="field-input flex-grow">
            <input class="field h-10" name="name" :value="articleArraymid1.firstname" @change="changefirstname"/>
          </div>
        </div>

        <div class="form-field">
          <div class="field-label">
            Email Address
            <font-awesome-icon class="ml-1 h-4 inline" :icon="['fas', 'lock']" />
          </div>
          <div class="field-input flex-grow">
            <input class="field h-10" :value="articleArraymid1.email" @change="changeemail"/>
          </div>
        </div>

        <div class="form-field">
          <div class="field-label">
            Phone Number
            <font-awesome-icon class="ml-1 h-4 inline" :icon="['fas', 'lock']" />
          </div>
          <div class="field-input flex-grow">
            <input class="field h-10" :value="articleArraymid1.phone" @change="changephonenumber"/>
          </div>
        </div>

        <div class="form-field">
          <div class="field-label">
            Address
            <font-awesome-icon class="ml-1 h-4 inline" :icon="['fas', 'lock']" />
          </div>
          <div class="field-input flex-grow">
            <input class="field h-10"  :value="articleArraymid1.address" @change="changeaddress" />
          </div>
        </div>

        <div class="form-field">
          <div class="field-label">Website</div>
          <div class="field-input flex-grow">
            <input class="field h-10"  :value="articleArraymid1.website"  @change="changewebsite"/>
          </div>
        </div>

        <div class="form-field">
          <div class="field-label">Preferred Language</div>
          <div class="field-input flex-grow">
            <select class="field h-10"   @change="changelanguage">
              <option value="English">English</option>
            </select>
          </div>
        </div>

        <div class="form-field">
          <div class="field-label">Description</div>
          <div class="field-input flex-grow">
            <textarea class="field h-40" @change="changedesc">
              {{articleArraymid1.desc}}
              </textarea>
          </div>
        </div>
      </div>


       <!--- Business Information -->
      <!---->

      <div
        class="md:flex justify-between items-center pb-3 mt-20 border-b border-solid border-gray-400 p-5 lg:p-0"
      >
        <h1 class="text-gray-800 text-xl lg:text-2xl font-semibold">Business Information</h1>
        <span class="text-gray-500 text-sm lg:text-xl">* Required</span>
      </div>
      <div class="my-5 p-5 bg-white shadow-lg">
        <div class="form-field">
          <div class="field-label">Line of Business</div>
          <div class="field-input flex-grow">
            <select v-model="lineofbusiness"  class="field w-full h-10" @change="changelineofbussiness">
              <option value="1">Electronics</option>
              <option value="2">Cover</option>
              <option value="3">Code</option>
            </select>
            <!-- <input class="field h-10" name="name"  v-model="line_of_business"/> -->
          </div>
        </div>
        <div class="form-field">
          <div class="field-label">Expertise</div>
          <div class="field-input flex-grow">
            <select v-model="expertise" class="field w-full h-10" @change="changeexpertise">
              <option value="1">Fabrication</option>
              <option value="2">Assembly</option>
              <option value="3">Dealer</option>
              <option value="4">Tester</option>
              <option value="5">CNC Plastic</option>
            </select>
          </div>
        </div>
      </div>




      <!---->
      <!--Profile Phote-->
      <!---->
      <div
        class="md:flex justify-between items-center pb-3 mt-20 border-b border-solid border-gray-400 p-5 lg:p-0"
      >
        <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Profile Photo</h1>
        <span class="text-gray-500 text-sm lg:text-2xl">* Required</span>
      </div>

      <!--Form Container-->
      <div class="my-5 p-5 bg-white shadow-md">
        <!--Photo Field-->
        <div class="md:flex">
          <div
            class="w-full h-64 mb-5 md:mb-0 md:h-48 md:w-48 md:w-max-content md:mr-6 flex-shrink"
          >
            <img
            class="object-cover object-center h-full mx-auto"
            :src=" avata_img_url + articleArraymid1.avatar" id="image"           
          /> 
          </div>
          <div class="flex-grow">
            <div class="text-gray-500 text-sm">
              Most viewers take less than three seconds to scan
              a full web-page and form their first impressions.
              The next thing they look for? A company’s logo.
            </div>
            <div class="mt-10">
              <form enctype="multipart/form-data">
              <input ref="file_upload" type="file"  style="display: none;"  @change="upload" />
               </form>
              <button
                class="btn pill-button w-full"
                @click="$refs.file_upload.click()"
                >Upload a file from your computer</button>   
             
            </div>
          </div>
        </div>
      </div>

      <!---->
      <!--Social Container-->
      <!---->
      <div
        class="md:flex justify-between items-center pb-3 mt-20 border-b border-solid border-gray-400 p-5 lg:p-0"
      >
        <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Social Media Accounts</h1>
      </div>

      <!--Container-->
      <div class="my-5 p-5 bg-white shadow-md">
        <div class="mb-10">
          <h1
            class="text-lg font-semibold text-gray-600 pb-3 border-b border-solid border-gray-400"
          >Facebook</h1>
          <div class="lg:flex justify-between">
            <div class="text-lg text-gray-500 mt-3 pr-0 lg:pr-28">
              Sign in with Facebook and discover your trusted
              connections to people all over the world.
            </div>
            <div class="self-center mt-3 lg:mt-0">
              <button class="btn px-2" @click="disconnectfacebook">Disconnect</button>
            </div>
          </div>
        </div>

        <div class="mb-10">
          <h1
            class="text-lg font-semibold text-gray-600 pb-3 border-b border-solid border-gray-400"
          >LinkedIn</h1>
          <div class="lg:flex justify-between">
            <div class="text-lg text-gray-500 mt-3 pr-0 lg:pr-28">
              Sign in with Facebook and discover your trusted
              connections to people all over the world.
            </div>
            <div class="self-center mt-3 lg:mt-0">
              <button class="btn px-2" @click="disconnectlinkedin">Disconnect</button>
            </div>
          </div>
        </div>

        <div class="mt-16 mb-3 text-center">
          <button
            class="btn pill-button px-10 lg:px-20"
            @click="addsocialaccount"
          >Add more social accounts</button>
        </div>
      </div>

      <div class="mt-16 mb-16 text-center">
        <button class="btn pill-button pill-button--ideeza px-20" @click="savegeneralsetting">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
import apiService from "~/apiService/have_token.js";

export default {
  name: "index",
  data: function() {
    return {
      geturl: "/api/user/get_profile",
      articleArray: [],
      randomNumber: {},
      avata_img_url: process.env.avatar_base_url,
      articleArraymid1: [],
      userid: null,
      geturl2: "/api/user/update_profile",
      firstname:null,
      lastname:null,
      birthday:null,
      email:null,
      sex:null,
      phone:null,
      prefered_language:null,
      address:null,
      website:null,
      skill:null,
      desc:null,
      school:null,
      work:null,
      timezone:null,
      language:null,
      company:null,
      avatar:null,
      lineofbusiness:null,
      expertise:null,


    };
  },
  mounted() {
    this.userid = window.$nuxt.$cookies.get("userid");
    let sendData = {
      method: "get",
      url: this.geturl,
      data: null
    };

    apiService(sendData, response => {
      console.log(response.data);
      this.randomNumber = response.data;
      this.articleArray = Object.values(response.data.data);

      const obj3 = { ...this.articleArray[0], ...this.articleArray[1] };
      this.articleArraymid1 = obj3;

      this.firstname = this.articleArraymid1.firstname;
      this.lastname = this.articleArraymid1.lastname;
      this.birthday = this.articleArraymid1.birthday;
      this.email = this.articleArraymid1.email;
      this.sex = this.articleArraymid1.sex;
      this.phone = this.articleArraymid1.phone;
      this.prefered_language = this.articleArraymid1.prefered_language;
      this.address = this.articleArraymid1.address;
      this.website = this.articleArraymid1.website;
      this.skill = this.articleArraymid1.skill;
      this.desc = this.articleArraymid1.desc;
      this.school = this.articleArraymid1.school;
      this.work = this.articleArraymid1.work;
      this.timezone = this.articleArraymid1.timezone;
      this.language = this.articleArraymid1.language;
      this.company = this.articleArraymid1.company;
      this.avatar = this.articleArraymid1.avatar;
      this.lineofbusiness = this.articleArraymid1.lineofbusiness;
      this.expertise = this.articleArraymid1.expertise;

    });
  },
  methods: {
    changefirstname(evt){
        this.firstname = evt.target.value
    },
    changeemail(evt){
        this.email = evt.target.value
    },
    changephonenumber(evt){
        this.phone = evt.target.value
    },
     changeaddress(evt){
        this.address = evt.target.value
    },
    changewebsite(evt){
        this.website = evt.target.value
    },
    changelanguage(evt){
        this.prefered_language = evt.target.value
    },
    changedesc(evt){
        this.desc = evt.target.value
    },
    changelineofbussiness(evt){
        this.lineofbusiness = evt.target.value
    },
    changeexpertise(evt){
        this.expertise = evt.target.value
    },
    upload(evt) {
      // alert("upload image!!!")
    var reader = new FileReader();
      reader.onload = function(e) {
        // get loaded data and render thumbnail.
        document.getElementById("image").src = e.target.result;
      };
      // read the image file as a data URL.
      reader.readAsDataURL(evt.target.files[0]);

      // this.file = this.$refs.file.files[0];
      console.log("file_upload:", evt);
      this.avatar = evt.target.files[0];
    },
    disconnectfacebook() {
      alert("disconnect_Facebook!!!");
    },
    disconnectlinkedin() {
      alert("disconnect_Linkedin!!!");
    },
    addsocialaccount() {
      alert("add_Social_Account!!!");
    },
    savegeneralsetting() {

      const formData = new FormData();
      formData.set("firstname", this.firstname);
      formData.set("lastname", this.lastname);
      formData.set("birthday", this.birthday);
      formData.set("email", this.email);
      formData.set("sex", this.sex);
      formData.set("phone", this.phone);
      formData.set("prefered_language", this.prefered_language);
      formData.set("address", this.address);
      formData.set("website", this.website);
      formData.set("skill", this.skill);
      formData.set("desc", this.desc);
      formData.set("school", this.school);
      formData.set("work", this.work);
      formData.set("timezone", this.timezone);
      formData.set("language", this.language);
      formData.set("company", this.company);
      formData.append("avatar", this.avatar);
      formData.set("lineofbusiness", this.lineofbusiness);
      formData.set("expertise", this.expertise);
      let sendData2 = {
        method: "post",
        url: this.geturl2,
        data: formData
      };

      apiService(sendData2, response => {
        console.log(response);
      });


      // alert("All Setting Saved!!!");
      console.log("firstname:",this.firstname);
      console.log("lastname:",this.lastname);
      console.log("birthday:",this.birthday);
      console.log("email:",this.email);
      console.log("sex:",this.sex);
      console.log("phone:",this.phone);
      console.log("prefered_language:",this.prefered_language);
      console.log("address:",this.address);
      console.log("skill:",this.skill);
      console.log("desc:",this.desc);
      console.log("school:",this.school);
      console.log("work:",this.work);
      console.log("timezone:",this.timezone);
      console.log("language:",this.language);
      console.log("company:",this.company);
      console.log("avatar:",this.avatar);
      console.log("lineofbusiness:",this.lineofbusiness);
      console.log("expertise:",this.expertise);

    }
  }
};
</script>

<style scoped>
.settings-general {
  max-width: 700px;
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
</style>
