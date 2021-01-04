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
        <button class="rounded-full bg-blue-700 text-white text-center w-full py-3 mb-2" @click="facebookSignin">
          <font-awesome-icon class="text-base mr-2" :icon="['fab', 'facebook-f']" />Continue with Facebook
        </button>
        <button
          class="rounded-full bg-white border border-black text-black text-center w-full py-3" @click="googleSignin"
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
        <button
          class="rounded-full bg-ideeza text-white text-center w-full py-3 mb-1"
          @click="$emit('signup')"
        >
          <font-awesome-icon class="text-base mr-2" :icon="['fa', 'envelope']" />Sign up with Email
        </button>
        <div class="text-center">
          Already have an ideeza account?
          <a href="#" @click="$emit('login')" class="text-ideeza font-bold">Log in</a>
        </div>
      </div>
    </template>
  </modal>
</template>
<script>
import Modal from "~/components/reusables/Modal.vue";
import firebase from "firebase";
import axios from "axios";
export default {
  components: {
    Modal
  },
  methods: {
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
          console.log('googleSign', result);
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
</script>