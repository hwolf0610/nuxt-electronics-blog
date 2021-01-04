<template>
    <div>
    <div v-if="articleArraymid1.userid == userid">
      <div class="md:m-8 lg:m-8 m-2">
        <div class="flex max-w-3xl">
          <h1 class="mr-auto text-xl font-semibold text-ideeza-black">Edit General Profile Informations</h1>
          <label class="font-semibold">*Required</label>
        </div>
        <hr class="max-w-3xl mt-2 mb-5">
        <div class="max-w-3xl bg-white shadow-lg">
          <div class="p-8">
            <div class="form-field">
              <div class="field-label">Company Name</div>
              <div class="field-input flex-grow">
                 <input class="field h-10" :value="articleArraymid1.company_name" @change="changecompany"/>
              </div>
            </div>
          <hr class="mb-2">
            <div class="form-field">
              <div class="field-label">Email Address</div>
              <div class="field-input flex-grow">
            <input class="field h-10" :value="articleArraymid1.email" @change="changeemail"/>
               
              </div>
            </div>
          <hr class="mb-2">
            <div class="form-field">
              <div class="field-label">Phone Number <font-awesome-icon class="ml-2 text-sm" :icon="['fas', 'lock']" /></div>
              <div class="field-input flex-grow">
            <input class="field h-10" :value="articleArraymid1.phone" @change="changephonenumber" />
               
              </div>
            </div>
          <hr class="mb-2">
            <div class="form-field">
              <div class="field-label">Address <font-awesome-icon class="ml-2 text-sm" :icon="['fas', 'lock']" /></div>
              <div class="field-input flex-grow">
                            <input class="field h-10"  :value="articleArraymid1.address"  @change="changeaddress"/>

              </div>
            </div>
          <hr class="mb-2">
            <div class="form-field">
              <div class="field-label">Website</div>
              <div class="field-input flex-grow">
            <input class="field h-10"  :value="articleArraymid1.website" @change="changewebsite"/>
               
              </div>
            </div>
          <hr class="mb-2">
          <div class="form-field">
            <div class="field-label">Preferred Language</div>
            <div class="field-input flex-grow">
             <select class="field h-10"     @change="changelanguage">
              <option value="English">English</option>
            </select>
            </div>
          </div>
          <hr class="mb-2">
          <div class="form-field textarea">
            <div class="field-label">Describe Your Company</div>
            <div class="field-input flex-grow">
              <textarea class="field h-40" value=""  @change="changedesc">
                 {{articleArraymid1.desc}}
              </textarea>
            </div>
          </div>
          </div>
        </div>
      </div>

      <div class="md:m-8 lg:m-8 m-2">
        <div class="flex max-w-3xl">
          <h1 class="mr-auto text-xl font-semibold text-ideeza-black">Business Information</h1>
          <label class="font-semibold">*Required</label>
        </div>
        <hr class="max-w-3xl my-2">
        <div class="max-w-3xl bg-white shadow-lg">
          <div class="p-8">
            <div class="form-field">
              <div class="field-label">Line of bussiness</div>
              <div class="field-input flex-grow">
               <select v-model="lineofbusiness"  class="field w-full h-10" @change="changelineofbussiness">
              <option value="1">Electronics</option>
              <option value="2">Cover</option>
              <option value="3">Code</option>
            </select>
              </div>
            </div>
          <hr class="mb-2">
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
        </div>
      </div>

      <div class="md:m-8 lg:m-8 m-2">
        <div class="flex max-w-3xl">
          <h1 class="mr-auto text-xl font-semibold text-ideeza-black">Profile Photo</h1>
          <label class="font-semibold">*Required</label>
        </div>
        <hr class="max-w-3xl my-2">
        <div class="max-w-3xl bg-white shadow-lg">
          <div class="p-8">
            <div class="lg:flex md:flex">

               <img
            class="object-cover object-center h-full mx-auto"
            :src=" avata_img_url + articleArraymid1.avatar" id="image"           
          /> 

              <div class="flex-col lg:ml-5 md:ml-5">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam hic placeat inventore quidem nihil qui quam non, reprehenderit nam, cupiditate ea amet voluptatum similique expedita, quae aut? Fuga, assumenda aperiam.</p>
                
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
        </div>
      </div>

        <div class="md:m-8 lg:m-8 m-2">
        <div class="flex max-w-3xl">
          <h1 class="mr-auto text-xl font-semibold text-ideeza-black">Social Media Accounts</h1>

        </div>
        <hr class="max-w-3xl my-2">
        <div class="max-w-3xl bg-white shadow-lg">
          <div class="p-8">
            <h1 class="font-semibold mt-2">Facebook</h1>
            <hr class="mb-2 mt-2">
            <div class="lg:flex md:flex">
                <div><p class="mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.reprehenderit nam, cupiditate ea amet voluptatum similique expedita, quae aut? Fuga, assumenda aperiam.</p>
                </div>
                <div class="flex justify-end lg:block md:block"><button class="ml-5 border border-gray-400 px-3 py-1 font-semibold text-gray-500 w-32" @click="disconnectfacebook">Disconnect</button></div>
            </div>

            <h1 class="font-semibold mt-2">Linkedin</h1>
            <hr class="mb-2 mt-2">
            <div class="lg:flex md:flex">
                <div><p class="mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.reprehenderit nam, cupiditate ea amet voluptatum similique expedita, quae aut? Fuga, assumenda aperiam.</p>
                </div>
                <div class="flex justify-end lg:block md:block"><button class="ml-5 border border-gray-400 px-3 py-1 font-semibold text-gray-500 w-32" @click="disconnectlinkedin">Disconnect</button></div>

            </div>

            <h1 class="font-semibold mt-2">Google</h1>
            <hr class="mb-2 mt-2">
            <div class="lg:flex md:flex">
                <div><p class="mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.reprehenderit nam, cupiditate ea amet voluptatum similique expedita, quae aut? Fuga, assumenda aperiam.</p>
                </div>
                <div class="flex justify-end lg:block md:block"><button class="ml-5 border border-gray-400 px-3 py-1 font-semibold text-gray-500 w-32" @click="disconnectgoogle">Disconnect</button></div>
            </div>
            <div class="flex justify-center">
              <button class="rounded-full lg:px-12 md:px-12 p-2 text-ideeza-gray border border-gray-400 mt-5 font-semibold"  @click="addsocialaccount">Add more social accounts</button>
          </div>
          </div>
        </div>
      </div>
      <div class="md:m-8 lg:m-8 m-2 max-w-3xl">
        <div class="flex justify-center">
          <button class="bg-ideeza p-3 rounded-full text-white lg:w-48 md:w-48 w-24 font-semibold" @click="savegeneralsetting">Save</button>
        </div>
      </div>
</div>
</div>
</template>
<script>
import apiService from "~/apiService/have_token.js";

export default {
  layout:'service-provider-setting',
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
    changecompany(evt){
      this.company = evt.target.value
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
    disconnectgoogle(){
        alert("disconnect_google!!!");
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
}
</script>
<style scoped>
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
