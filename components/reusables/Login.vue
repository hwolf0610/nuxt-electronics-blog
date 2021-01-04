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
      <div class="my-5 mx-5">
        <button
          class="rounded-full bg-blue-700 text-white text-center w-full py-3 mb-2"
          @click="facebookSignin"
        >
          <font-awesome-icon class="text-base mr-2" :icon="['fab', 'facebook-f']" />Continue with Facebook
        </button>
        <button
          class="rounded-full bg-white border border-black text-black text-center w-full py-3"
          @click="googleSignin"
        >
          <svg
            width="17"
            height="17"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="847 405 17 17"
          >
            <image
              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAACOklEQVQ4T52US0hUYRTH/8frvMxxakzapLmoJkVbtDCMFsJMDgiJFdO6MWnZQkl7QEYb7ywmggiCoZR2GZEw0oQN5aJC22TERIshCNLowdRcreY+5p64k3O7M+L0uLvvnO/8+J/v/M8llH3ZYKeXtPwAM/WCuB1AHYAMgBQR4nlNiW2aXfhqLSPrQfJ3HGcgCsBTDrecsyCc9CSf3SzGTIjk7xAZGKlQXEzJIJxYA5ECe/uZ+XoZ4CNA90D8lhmNBPQU8npVn+fR3HxJOzxZ2yCN+1JQhAaLvIjbnhmlRFouxriry7niyrrdieefytWSOoMRPeMU5Ts7wRkniEmsezh/5i/aMq+Q+gBPAXRyToA6tSNds6S1WRWErnKtquQ2rwetElgzIBIAt3GJCBPVAYStBX3RH8eIaLyCss8GhH/rwkVbAKP/CIEBya4a6r+UEPDNeNgnIOzTQRA135tby+0tr47eVopqQpe/N6ks7DEnx3ACbBjNVogRHpOaxLDEtsiQuhtzej3AEF8fnFl3OoejuQgThi1PcIo4iXq/vD+1xDVbzARD1AThQronYfqkdTJk3/7+2piQ3zBoXQEmR3PB9r54MEzEN8om8AGgBDG/08HbiOiAQ272Ni6et9u0XxNn5vDUkGvC3J1d8e4xEE7/yWTV+Y3YungWrpxPvDvoKrRdssW+6e5+Ai5V3mJadshN514ciV1Zs8XFQOv9oJdVfYCJegG0rQK/AHjJhGmXosQWDs2W/E9+AgWG2UG1pUUZAAAAAElFTkSuQmCC"
              width="17"
              height="17"
              x="847"
              y="405"
            />
          </svg>
          Continue with Google
        </button>
        <div class="flex items-center justify-between mb-3">
          <hr class="flex-1 mt-1" />
          <span class="mx-1">or</span>
          <hr class="flex-1 mt-1" />
        </div>
        <div>
          <div class="text-left">
            <input
              type="email"
              class="block w-full border border-black px-3 py-3 mb-3"
              placeholder="Email"
              v-model="email"
            />
            <input
              type="password"
              class="block w-full border border-black px-3 py-3 mb-3"
              placeholder="Password"
              v-model="password"
            />
            <div v-if="!auth" style="color: red">Your Email or password is incorrect!</div>
            <input type="checkbox" class="mb-3" /> Remember me
            <!-- <nuxt-link to="/user/dashboard"> -->
            <button
              class="rounded-full bg-ideeza text-white text-center w-full py-3 mb-1"
              @click="login"
            >Login</button>
            <!-- </nuxt-link> -->
          </div>
        </div>
        <div class="text-center mb-10 font-bold text-ideeza">
          <a href="#" @click="$emit('reset')">Forget password?</a>
        </div>
        <div class="text-center">
          Don't have account an account?
          <a
            href="#"
            @click="$emit('signup')"
            class="text-ideeza font-bold"
          >Sign up</a>
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
      auth: true
    };
  },
  computed: {},

  methods: {
    async login() {
      if (validate_email(this.email) && validatePassword(this.password)) {
        let signinurl = "/api/user/login";
        var bodyFormData = new FormData();
        bodyFormData.set("email", this.email);
        bodyFormData.set("password", this.password);

        let sendData = {
          method: "post",
          url: signinurl,
          data: bodyFormData
        };
        apiService(sendData, response => {
          if (response.data.success == true) {
            this.auth = true;
            var token = response.data["data"].token;
            var userdata = response.data["data"].userdata;
            var firstname = userdata.firstname;
            var lastname = userdata.lastname;
            var userid = userdata.id;
            var useravatar = userdata.avatar;

            // window.$nuxt.$cookies.set("authToken", token);
            // window.$nuxt.$cookies.set("firstname", firstname);
            // window.$nuxt.$cookies.set("lastname", lastname);
            // window.$nuxt.$cookies.set("userid", userid);
            console.log("window.$nuxt.$cookies", window.$nuxt);

            window.$nuxt.$cookies.set("authToken", token);
            window.$nuxt.$cookies.set("firstname", firstname);
            window.$nuxt.$cookies.set("lastname", lastname);
            window.$nuxt.$cookies.set("userid", userid);
            window.$nuxt.$cookies.set("useravatar", useravatar);
            // console.log("Here: ", window.$nuxt.$cookies.get("authToken"));
            this.$router.push("/user/dashboard");
          } else {
            // alert(response.data.message)
            this.auth = false;
          }
        });
      } else {
      }
    },

    googleSignin() {
      // const provider = new firebase.auth.GoogleAuthProvider();

      this.provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(this.provider)
        .then(function(result) {
          // store the user ore wathever
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          console.log("googleSignin", result);
          this.$router.push("/user/dashboard");
        })
        .catch(function(e) {
          console.log(e);
        });
    },

    facebookSignin() {
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // ...
        })
        .catch(function(e) {
          // Handle Errors here.
          var errorCode = e.code;
          var errorMessage = e.message;
          // The email of the user's account used.
          var email = e.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = e.credential;
          // ...
        });
    }
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