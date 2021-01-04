<template>
  <modal wide @close="$emit('close')">
    <template slot="header">
      <div class="text-right py-3 px-3">
        <button @click="$emit('close')">
          <font-awesome-icon class="text-xs text-black mt-2 mr-2" :icon="['fa', 'times']" />
        </button>
      </div>
    </template>
    <template slot="body">
      <div class="mx-5">
        <div class="text-center">
          Sign up with
          <span class="text-ideeza font-bold">Facebook</span> or
          <span class="text-ideeza font-bold">Google</span>
        </div>
        <div class="flex items-center justify-between mb-3">
          <hr class="flex-1 mt-1" />
          <span class="mx-1">or</span>
          <hr class="flex-1 mt-1" />
        </div>
        <div>
          <div class="text-left">
            <input
              type="email"
              class="block w-full border border-gray px-3 py-3 mb-3"
              placeholder="Email Address"
              v-model="email"
            />
            <input
              type="text"
              class="block w-full border border-gray px-3 py-3 mb-3"
              placeholder="First Name"
              v-model="firstname"
            />
            <input
              type="text"
              class="block w-full border border-gray px-3 py-3 mb-3"
              placeholder="Last Name"
              v-model="lastname"
            />
            <input
              type="password"
              class="block w-full border border-gray px-3 py-3 mb-3"
              placeholder="Create a Password"
              v-model="password"
            />
            <div class="font-bold text-lg text-black mb-2">Birthday</div>
            <div class="text-base mb-1">Other people won't see your birthday.</div>
            <div class="flex justify-between mb-3">
              <input
                type="text"
                class="border border-gray px-3 py-3 mr-1 w-1/3"
                placeholder="Month"
                v-model="month"
              />
              <input
                type="text"
                class="border border-gray px-3 py-3 mr-1 w-1/3"
                placeholder="Day"
                v-model="day"
              />
              <input
                type="text"
                class="border border-gray px-3 py-3 mr-1 w-1/3"
                placeholder="Year"
                v-model="year"
              />
            </div>
            <label class="leading-normal flex text-sm mb-1">
              <input type="checkbox" class="mt-1 mr-2" />
              <span>i'd like to recieve marketing promotions, special offers, inspiration and policy updates from ideeza. You can opt out any time.</span>
            </label>
            <button
              class="rounded-full bg-ideeza text-white text-center w-full py-3 mb-1"
              @click="signup"
            >Sign up</button>
          </div>
        </div>
        <div class="text-center mb-5">
          Already have an ideeza account?
          <a
            href="#"
            @click="$emit('login')"
            class="text-ideeza font-bold"
          >Log in</a>
        </div>
      </div>
    </template>
  </modal>
</template>
<script>
import Modal from "~/components/reusables/Modal.vue";
import firebase from "firebase";
import apiService from "~/apiService";
export default {
  components: {
    Modal
  },
  data() {
    return {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      day: "",
      month: "",
      year: ""
    };
  },
  methods: {
    async signup() {
      if (validate_email(this.email) && validatePassword(this.password)) {
        var registerurl = "/api/user/register";
        var birthday = this.day + "/" + this.month + "/" + this.year;

        var signupFormData = new FormData();
        signupFormData.set("email", this.email);
        signupFormData.set("password", this.password);
        signupFormData.set("firstname", this.firstname);
        signupFormData.set("lastname", this.lastname);
        signupFormData.set("birthday", birthday);

        let sendData = {
          method: "post",
          url: registerurl,
          data: signupFormData
        };

        apiService(sendData, response => {
          console.log(response.data);
          console.log(response.data.success);
          if (response.data.success == true) {
            let signinurl = "/api/user/login";

            let Data = {
              method: "post",
              url: signinurl,
              data: signupFormData
            };

            apiService(Data, response => {
              console.log(response.data);
              console.log(response.data.success);
              if (response.data.success == true) {
                var token = response.data["data"].token;
                var userdata = response.data["data"].userdata;
                var firstname = userdata.firstname;
                var lastname = userdata.lastname;
                var userid = userdata.id;

                window.$nuxt.$cookies.set("authToken", token);
                window.$nuxt.$cookies.set("firstname", firstname);
                window.$nuxt.$cookies.set("lastname", lastname);
                window.$nuxt.$cookies.set("userid", userid);
                console.log("Here: ", window.$nuxt.$cookies.get("authToken"));
                this.$router.push("/user/dashboard");
              }
            });
          }
        });
      } else {
      }
    }
  },
  mounted() {
    // this.signup();
  }
};

function validate_email(email) {
  if (email != "") {
    var apos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (apos < 1 || dotpos - apos < 2) {
      alert("Please Enter Your Email Correctly!");
      return false;
    } else {
      return true;
    }
  } else {
    alert("Please Enter Your Email");
    return false;
  }
}

function validatePassword(password) {
  var error = "";
  var illegalChars = /[\W_]/; // allow only letters and numbers

  if (password == "") {
    error = "You didn't enter a password.\n";
    alert(error);
    return false;
  } else if (password.length < 3 || password.length > 15) {
    error = "The password is the wrong length. \n";
    alert(error);
    return false;
  } else if (illegalChars.test(password)) {
    error = "The password contains illegal characters.\n";
    alert(error);
    return false;
  }
  // else if (
  //   password.search(/[a-zA-Z]+/) == -1 ||
  //   password.search(/[0-9]+/) == -1
  // ) {
  //   error = "The password must contain at least one numeral.\n";
  //   alert(error);
  //   return false;
  // }
  else {
  }
  return true;
}
</script>
