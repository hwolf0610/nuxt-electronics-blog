<template>
  <div class="settings-general mx-auto"  >
    <!---->
    <!--Profile Information-->
    <!---->
    <!-- {{articleArraymid1}}
    {{articleArraymid1.userid}} -->
    <div v-if="articleArraymid1.userid == userid">
      <!-- v-if="userid == infogeneral.userid" -->
    <div
      class="md:flex justify-between items-center pb-3 border-b border-solid border-gray-400 p-5 lg:p-0"
     
    >
      <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Edit Profile Information</h1>
      <span class="text-gray-500 text-sm lg:text-2xl">* Required</span>
    </div>

    <!--Form Container-->
    <div class="my-5 p-5 bg-white shadow-md">
      <!--Form Fields-->
      <div class="form-field">
        <div class="field-label">
          First Name
          <font-awesome-icon class="ml-1 h-4 inline" :icon="['fas', 'lock']" />
        </div>
        <div class="field-input flex-grow">
          <input class="field h-10" name="first-name"   :value="articleArraymid1.firstname"/>
        </div>
      </div>

      <div class="form-field">
        <div class="field-label">
          Last Name
          <font-awesome-icon class="ml-1 h-4 inline" :icon="['fas', 'lock']" />
        </div>
        <div class="field-input flex-grow">
          <input class="field h-10" :value="articleArraymid1.lastname" />
        </div>
      </div>

      <div class="form-field">
        <div class="field-label">I Am</div>
        <div class="field-input flex-grow">
          <select class="field h-10" :value="articleArraymid1.sex">
            <option value="male">Male</option>
            <option value="female">FeMale</option>
          </select>
        </div>
      </div>

      <div class="form-field">
        <div class="field-label">
          Birth Date
          <font-awesome-icon class="ml-1 h-4 inline" :icon="['fas', 'lock']" />
        </div>
        <div class="field-input flex-grow">
          <input class="field h-10"  :value="articleArraymid1.birthday" />
        </div>
      </div>

      <div class="form-field">
        <div class="field-label">
          Email Address
          <font-awesome-icon class="ml-1 h-4 inline" :icon="['fas', 'lock']" />
        </div>
        <div class="field-input flex-grow">
          <input class="field h-10" :value="articleArraymid1.email" />
        </div>
      </div>

      <div class="form-field">
        <div class="field-label">
          Phone Number
          <font-awesome-icon class="ml-1 h-4 inline" :icon="['fas', 'lock']" />
        </div>
        <div class="field-input flex-grow">
          <input class="field h-10" :value="articleArraymid1.phone" />
        </div>
      </div>

      <div class="form-field">
        <div class="field-label">Preferred Language</div>
        <div class="field-input flex-grow">
          <select class="field h-10"  :value="articleArraymid1.prefered_language">
             <option value="English">English</option>
            <option value="Russia">Russia</option>
          </select>
        </div>
      </div>

      <div class="form-field">
        <div class="field-label">
          Address
          <font-awesome-icon class="ml-1 h-4 inline" :icon="['fas', 'lock']" />
        </div>
        <div class="field-input flex-grow">
          <input class="field h-10"  :value="articleArraymid1.address" />
        </div>
      </div>

      <div class="form-field">
        <div class="field-label">Website</div>
        <div class="field-input flex-grow">
          <input class="field h-10" :value="articleArraymid1.website" />
        </div>
      </div>

      <div class="form-field">
        <div class="field-label">Skills</div>
        <div class="field-input flex-grow">
          <textarea class="field h-20" :value="articleArraymid1.skill"></textarea>
        </div>
      </div>

      <div class="form-field">
        <div class="field-label">Describe Yourself</div>
        <div class="field-input flex-grow">
          <textarea class="field h-40" :value="articleArraymid1.desc"></textarea>
        </div>
      </div>
    </div>

    <!---->
    <!--Additional Information-->
    <!---->
    <div
      class="md:flex justify-between items-center pb-3 mt-20 border-b border-solid border-gray-400 p-5 lg:p-0"
    >
      <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Additional Information</h1>
      <span class="text-gray-500 text-sm lg:text-2xl">* Required</span>
    </div>

    <!--Form Container-->
    <div class="my-5 p-5 bg-white shadow-md">
      <!--Form Fields-->
      <div class="form-field">
        <div class="field-label">School</div>
        <div class="field-input flex-grow">
          <input class="field h-10" :value="articleArraymid1.school" />
        </div>
      </div>

      <div class="form-field">
        <div class="field-label">Work</div>
        <div class="field-input flex-grow">
          <input class="field h-10" :value="articleArraymid1.work" />
        </div>
      </div>

      <div class="form-field">
        <div class="field-label">Timezone</div>
        <div class="field-input flex-grow">
          <select class="field h-10" :value="articleArraymid1.timezone">
            <option value="GMT + 1:00">GMT + 1:00</option>
            <option value="GMT + 2:00">GMT + 2:00</option>
          </select>
        </div>
      </div>

      <div class="form-field">
        <div class="field-label">Languages</div>
        <div class="field-input flex-grow">
          <input class="field h-10" :value="articleArraymid1.language" />
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
        <div class="w-full h-64 mb-5 md:mb-0 md:h-48 md:w-48 md:w-max-content md:mr-6 flex-shrink">
         <img
            class="object-cover object-center h-full mx-auto"
            :src=" avata_img_url + articleArraymid1.avatar" id="image"           
          /> 
           <!-- {{infogeneral.avatar}} -->
        </div>
        <div class="flex-grow">
          <div
            class="text-gray-500 text-sm"
          >
          First impressions count, we all know this. And we only get one chance to make a good first impression. Perhaps in person, your charm and use of language can camouflage your faults, but in the online world. your first impression is made with your face – your profile picture.
          <!-- {{infogeneral.profile_description}} -->
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
            <button class="btn px-2"  @click="disconnectlinkedin">Disconnect</button>
          </div>
        </div>
      </div>

      <div class="mt-16 mb-3 text-center">
        <button class="btn pill-button px-10 lg:px-20"   @click="addsocialaccount">Add more social accounts</button>
      </div>
    </div>

    <div class="mt-16 mb-16 text-center">
      <button class="btn pill-button pill-button--ideeza px-20" @click="savegeneralsetting">Save</button>
    </div>
  </div>
  <!-- {{articleArraymid1}} -->
  </div>
</template>

<script>
import Projects from "~/data/UserSettingApi.json";
import apiService from "~/apiService/have_token.js";

export default {
  name: "index",
  data: function() {
    return {
      // Projectslanguage: null,
      // Projectstimezone: null,
      // Projectsgeneral: null,
      // firstname: null,
      // lastname: null,
      // sex: null,
      // birthday: null,
      // emailaddress: null,
      // phonenumber: null,
      // preferredlanguage: null,
      // address: null,
      // website: null,
      // skills: null,
      // descibe: null,
      // additional_school: null,
      // additional_work: null,
      // additional_timezone: null,
      // additional_language: null,
      // form: {
      //   first_name: null,
      //   last_name: null,
      //   gender: null,
      //   d_o_b: null,
      //   email: null,
      //   phone: null,
      //   lanuage: null,
      //   address: null,
      //   website: null,
      //   skills: null,
      //   describe: null
      // },
       geturl: "/api/user/get_profile",
      articleArray: [],
      randomNumber: {},
      avata_img_url:process.env.avatar_base_url,
      articleArraymid1:[],
      userid:null,
    };
  },
  mounted(){
    this.userid = window.$nuxt.$cookies.get("userid")
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

      // this.Projectslanguage= Projects.General_language;
      // this.Projectstimezone= Projects.General_timezone;
      // this.Projectsgeneral= this.articleArraymid1;
      // this.firstname= Projects.Setting_general[0].firstname;
      // this.lastname= Projects.Setting_general[0].lastname;
      // this.sex=Projects.Setting_general[0].sex;
      // this.birthday= Projects.Setting_general[0].birthday;
      // this.emailaddress= Projects.Setting_general[0].emailaddress;
      // this.phonenumber= Projects.Setting_general[0].phonenumber;
      // this.preferredlanguage= Projects.Setting_general[0].preferredlanguage;
      // this.address= Projects.Setting_general[0].address;
      // this.website= Projects.Setting_general[0].website;
      // this.skills= Projects.Setting_general[0].skills;
      // this.descibe= Projects.Setting_general[0].descibe;
      // this.additional_school= Projects.Setting_general[0].additional_school;
      // this.additional_work= Projects.Setting_general[0].additional_work;
      // this.additional_timezone= Projects.Setting_general[0].additional_timezone;
      // this.additional_language= Projects.Setting_general[0].additional_language;

       });

  },
  methods:{
    upload(evt){
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
      this.file = evt.target.files[0];

    },
    disconnectfacebook(){
      alert("disconnect_Facebook!!!")
    },
    disconnectlinkedin(){
      alert("disconnect_Linkedin!!!")
    },
    addsocialaccount(){
       alert("add_Social_Account!!!")
    },
    savegeneralsetting(){
      alert("All Setting Saved!!!")
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
