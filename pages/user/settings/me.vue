<template>
  <div class="settings-general mx-3 md:mx-20 mt-10">
    <div v-for="infogeneral in articleArray">
      <!---->
      <!--Profile Information-->
      <!---->
      <div
        class="md:flex justify-between items-center pb-3 border-b border-solid border-gray-400 p-5 lg:p-0"
      >
        <h1 class="text-gray-800 text-xl lg:text-2xl font-semibold">Edit General Profile Information</h1>
        <span class="text-gray-500 text-sm lg:text-xl">* Required</span>
      </div>

      <!--Form Container-->
      <div class="my-5 p-5 bg-white shadow-lg">
        <!--Form Fields-->
        <div class="form-field">
          <div class="field-label">Name</div>
          <div class="field-input flex-grow">
            <!-- <input class="field h-10" name="name"  v-model="infogeneral.general_profile.firstname"/> -->
          </div>
        </div>

        <div class="form-field">
          <div class="field-label">
            Email Address
            <font-awesome-icon class="ml-1 h-4 inline" :icon="['fas', 'lock']" />
          </div>
          <div class="field-input flex-grow">
            <input class="field h-10" v-model="infogeneral.general_profile.email" />
          </div>
        </div>

        <div class="form-field">
          <div class="field-label">
            Phone Number
            <font-awesome-icon class="ml-1 h-4 inline" :icon="['fas', 'lock']" />
          </div>
          <div class="field-input flex-grow">
            <input class="field h-10" v-model="infogeneral.general_profile.phone" />
          </div>
        </div>

        <div class="form-field">
          <div class="field-label">
            Address
            <font-awesome-icon class="ml-1 h-4 inline" :icon="['fas', 'lock']" />
          </div>
          <div class="field-input flex-grow">
            <input class="field h-10" v-model="infogeneral.general_profile.address" />
          </div>
        </div>

        <div class="form-field">
          <div class="field-label">Website</div>
          <div class="field-input flex-grow">
            <input class="field h-10" v-model="infogeneral.general_profile.website" />
          </div>
        </div>

        <div class="form-field">
          <div class="field-label">Preferred Language</div>
          <div class="field-input flex-grow">
            <select class="field h-10" v-model="infogeneral.general_profile.prefered_language">
              <option value="male" >{{infogeneral.general_profile.prefered_language}}</option>
            </select>
          </div>
        </div>

        <div class="form-field">
          <div class="field-label">Description</div>
          <div class="field-input flex-grow">
            <textarea class="field h-40" v-model="infogeneral.general_profile.desc"></textarea>
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
            <select  class="field w-full h-10" v-model="infogeneral.general_profile.lineofbusiness">
              <option value="male" >{{infogeneral.general_profile.lineofbusiness}}</option>
            </select>
            <!-- <input class="field h-10" name="name"  v-model="line_of_business"/> -->
          </div>
        </div>
        <div class="form-field">
          <div class="field-label">Expertise</div>
          <div class="field-input flex-grow">
            <select  class="field w-full h-10" v-model="infogeneral.general_profile.expertise">
              <option value="male" >{{infogeneral.general_profile.expertise}}</option>
            </select>
            <!-- <select v-model="expertise" class="field w-full h-10">
              <option value="1">Fabrication</option>
              <option value="2">Assembly</option>
              <option value="3">Dealer</option>
              <option value="4">Tester</option>
              <option value="5">CNC Plastic</option>
            </select> -->
          </div>
        </div>
      </div>
      <!--Profile Phote-->
      <!---->
      <div
        class="md:flex justify-between items-center pb-3 mt-20 border-b border-solid border-gray-400 p-5 lg:p-0"
      >
        <h1 class="text-gray-800 text-xl lg:text-2xl font-semibold">Profile Photo</h1>
        <span class="text-gray-500 text-sm lg:text-xl">* Required</span>
      </div>

      <!--Form Container-->
      <div class="my-5 p-5 bg-white shadow-lg">
        <!--Photo Field-->
        <div class="md:flex">
          <div
            class="w-full h-64 mb-5 md:mb-0 md:h-48 md:w-48 md:w-max-content md:mr-6 flex-shrink"
          >
            <img id="image" class="object-cover object-center h-full mx-auto" :src="avata_img_url + infogeneral.additional_profile.avatar" />

           
          </div>

          <div class="flex-grow">
            <div class="text-gray-500 text-sm">
              Most viewers take less than three seconds to scan a full web-page and form their first impressions. The next thing they look for? A company’s logo.
            </div>
            <div class="mt-10">
               <input id="file-input" type="file" name="name" style="display: none;" />
              <button
                class="btn pill-button w-full"
                onclick="document.getElementById('file-input').click();"
                @click="upload">Upload a file from your computer</button>
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
        <h1 class="text-gray-800 text-xl lg:text-2xl font-semibold">Social Media Accounts</h1>
      </div>

      <!--Container-->
      <div class="my-5 p-5 bg-white shadow-md">
        <div class="mb-10">
          <h1
            class="text-lg font-semibold text-gray-600 pb-3 border-b border-solid border-gray-400"
          >Facebook</h1>
          <div class="lg:flex justify-between">
            <div class="text-lg text-gray-500 mt-3 pr-0 lg:pr-28 md:w-2/3">
              Sign in with Facebook and discover your trusted
              connections to people all over the world.
            </div>
            <div class="self-center text-right mt-3 lg:mt-0 md:w-1/3">
              <button class="btn w-32 px-3 py-2" @click="disconnectfacebook">Disconnect</button>
            </div>
          </div>
        </div>

        <div class="mb-10">
          <h1
            class="text-lg font-semibold text-gray-600 pb-3 border-b border-solid border-gray-400"
          >LinkedIn</h1>
          <div class="lg:flex justify-between">
            <div class="text-lg text-gray-500 mt-3 pr-0 lg:pr-28 md:w-2/3">
              Sign in with Facebook and discover your trusted
              connections to people all over the world.
            </div>
            <div class="self-center text-right mt-3 lg:mt-0 md:w-1/3">
              <button class="btn w-32 px-3 py-2 font-semibold" @click="disconnectlinkedin">Connect</button>
            </div>
          </div>
        </div>

        <div class="mb-10">
          <h1
            class="text-lg font-semibold text-gray-600 pb-3 border-b border-solid border-gray-400"
          >Google</h1>
          <div class="lg:flex justify-between">
            <div class="text-lg text-gray-500 mt-3 pr-0 lg:pr-28 md:w-2/3">
              Connect your Ideeza account to your Google account for simplicity and ease
            </div>
            <div class="self-center text-right mt-3 lg:mt-0 md:w-1/3">
              <button class="btn w-32 px-3 py-2" @click="disconnectlinkedin">Disconnect</button>
            </div>
          </div>
        </div>

        <div class="mt-16 mb-3 text-center">
          <button class="btn pill-button bg-gray-200 border border-gray-400 py-2 px-10 lg:px-20"  @click="addsocialaccount">Add more social accounts</button>
        </div>
      </div>

      <div class="mt-16 mb-16 text-center">
        <button class="btn pill-button pill-button--ideeza px-20 py-1" @click="savegeneralsetting">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
import Projects from "~/data/TechnicianSettingApi.json";
import apiService from "~/apiService/have_token.js";

export default {
  name: "index",
  data: function() {
    return {
      Projectsgeneral: Projects.Setting_general,
      name: Projects.Setting_general[0].name,
      emailaddress: Projects.Setting_general[0].emailaddress,
      phonenumber: Projects.Setting_general[0].phonenumber,
      preferredlanguage: Projects.Setting_general[0].preferredlanguage,
      address: Projects.Setting_general[0].address,
      website: Projects.Setting_general[0].website,
      skills: Projects.Setting_general[0].skills,
      descibe: Projects.Setting_general[0].descibe,
      line_of_business: 3,
      expertise: 2, 
      form: {
        first_name: null,
        last_name: null,
        gender: null,
        d_o_b: null,
        email: null,
        phone: null,
        lanuage: null,
        address: null,
        website: null,
        skills: null,
        describe: null
      },
      geturl: "/api/user/get_profile",
      articleArray: [],
      randomNumber: {},
      avata_img_url:process.env.avatar_base_url,
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
      this.randomNumber = response.data;
      this.articleArray = Object.values(response.data.data);

      
       const obj3 = { ...this.articleArray[0], ...this.articleArray[1] };
       this.articleArraymid1 =obj3;
       
      this.firstname=articleArraymid1.firstname;
      this.lastname= articleArraymid1.lastname;
      this.sex= articleArraymid1.sex;
      this.birthday= articleArraymid1.birthday;
      this.emailaddress= articleArraymid1.email;
      this.phonenumber= articleArraymid1.phone;
      this.preferredlanguage= articleArraymid1.prefered_language;
      this.address= articleArraymid1.address;
      this.website= articleArraymid1.website;
      this.skills= articleArraymid1.skill;
      this.descibe= articleArraymid1.desc;
      this.additional_school= articleArraymid1.school;
      this.additional_work= articleArraymid1.work;
      this.additional_timezone= articleArraymid1.timezone;
      this.additional_language= articleArraymid1.langauge;
      
    });
  },
  methods: {
    upload() {
      // alert("upload image!!!");
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
      alert("All Setting Saved!!!");
    }
  }
};
</script>

<style scoped>
  .settings-general{
    max-width: 700px;
  }
  .form-field{
    @apply py-4 border-b border-solid border-gray-300;
  }
  .form-field:last-child{
    @apply border-0;
  }
  .field-label{
    @apply w-56 text-gray-600 text-xl font-semibold;
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
