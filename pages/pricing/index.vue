<template>
  <div>
    <div class="md:flex justify-around">
      <div class="p-5">
        <div class="logo md:ml-10">
          <nuxt-link to="/">
            <img class="logo ml-1" src="~/static/images/logo-1.png" />
          </nuxt-link>
        </div>
      </div>
      <div class="md:flex items-center justify-around">
        <div class="md:flex block justify-center items-center content-center w-m-c">
          <nuxt-link
            to="/about"
            class="block md:inline-block ml-5 md:ml-0 py-2 md:py-0 mr-12 text-base text-white text-gray-300"
          >About Us</nuxt-link>
          <nuxt-link
            to="/pricing"
            class="block md:inline-block ml-5 md:ml-0 py-2 md:py-0 mr-12 text-base text-white text-gray-300"
          >Pricing</nuxt-link>
          <nuxt-link
            to="/user/support"
            class="block md:inline-block ml-5 md:ml-0 py-2 md:py-0 mr-12 text-base text-white text-gray-300"
          >Contact Us</nuxt-link>
          <nuxt-link
            to="/user/profile"
            class="md:ml-0 mr-4 ml-5 md:ml-0 my-3 md:my-0 py-2 md:py-0 text-base text-white text-gray-300"
          >
            <font-awesome-icon class="text-xl text-gray-500" :icon="['fab', 'linkedin']" />
          </nuxt-link>
          <nuxt-link
            to="/user/profile"
            class="md:my-0 my-3 mr-4 ml-5 md:ml-0 py-2 md:py-0 text-base text-white text-gray-300"
          >
            <font-awesome-icon class="text-xl text-gray-500" :icon="['fab', 'twitter-square']" />
          </nuxt-link>
          <nuxt-link
            to="/user/profile"
            class="md:my-0 my-3 mr-4 ml-5 md:ml-0 py-2 md:py-0 text-base text-white text-gray-300"
          >
            <font-awesome-icon class="text-xl text-gray-500" :icon="['fab', 'instagram']" />
          </nuxt-link>
          <nuxt-link
            to="/user/profile"
            class="md:my-0 my-3 mr-12 ml-5 md:ml-0 py-2 md:py-0 text-base text-white text-gray-300"
          >
            <font-awesome-icon class="text-xl text-gray-500" :icon="['fab', 'facebook-square']" />
          </nuxt-link>
          <button
            v-if="!auth"
            @click="showLoginModal=true"
            class="auth-btn ml-5 md:ml-0 my-1 md:my-0 rounded-full px-3 py-2 border-0 text-gray-300"
          >
            Sign Up/
            Log In
          </button>
          <nuxt-link v-else to="/user/profile">
            <div class="flex items-center" style="cursor: pointer">
              <img
                class="h-8 w-8 rounded-full mr-2"
                src="https://randomuser.me/api/portraits/men/17.jpg"
              />
              <span class="text-white inline-block">{{name}}</span>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="flex flex-row-reverse mt-10">
      <div class="md:w-1/3 w-3/4 text-white md:mr-16">
        <div class="mb-2">
          <span class="text-gold">In platform purchases</span> - (Third party service costs) Cloud - App marketing
          service - Certification - Manufacturing patents, Industrial designers,
          engineers, marketing, AI, big data, graphic designers, lawyers
        </div>
        <div class="mb-2">
          <span class="text-gold">Consulting support</span> - Industrial designer, Engineering advice, AD'HOC
          pricing
        </div>
      </div>
      <div class="md:mr-20 mr-2 text-center">
        <img src="~/static/images/price-bot.png" alt="price-bot" />
        <span class="text-xl font-bold text-white">Pricing</span>
      </div>
    </div>
    <div class="flex flex-wrap justify-center px-5 py-10">
      <div class="lg:w-1/4 md:w-1/2 w-full pr-2 mb-3">
        <div
          class="bg-white shadow-lg rounded relative pricing-card"
          :style="{'background-image':'url('+backgroundUrl1+'),url('+backgroundUrl2+'),url('+backgroundUrl3+');'}"
        >
          <div class="flex pt-10 px-10 pb-10 items-start">
            <div class="mr-5">
              <img src="~/static/images/rockit.png" alt="rockit" class="h-20" />
            </div>
            <div>
              <div class="text-xl text-black">EXPLORER</div>
              <div class="text-base mb-2">FOR ANYONE</div>
              <hr class="border-ideeza border-t-2" />
            </div>
          </div>
          <div class="px-20 py-10">
            <div class="mb-2 text-sm">
              <font-awesome-icon class="text-sm text-green mr-2" :icon="['fa', 'check']" />Electronics
            </div>
            <div class="mb-2 text-sm">
              <font-awesome-icon class="text-sm text-green mr-2" :icon="['fa', 'check']" />Electronics
            </div>
            <div class="mb-2 text-sm">
              <font-awesome-icon class="text-sm text-green mr-2" :icon="['fa', 'check']" />Electronics
            </div>
            <div class="mb-2 text-sm">
              <font-awesome-icon class="text-sm text-green mr-2" :icon="['fa', 'check']" />Electronics
            </div>
          </div>
          <div class="text-center text-4xl pb-10">Public</div>
          <div class="p-10 text-center">
            <button class="rounded bg-white text-center px-10 py-3 w-full">Free</button>
          </div>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full pr-2 mb-3">
        <div
          class="bg-white shadow-lg rounded relative pricing-card creator-maker"
          :style="{'background-image':'url('+backgroundUrl1+'),url('+backgroundUrl2+'),url('+backgroundUrl3+');'}"
        >
          <div class="popular-badge-text">Most Popular</div>
          <div class="popular-badge">
            <font-awesome-icon :icon="['far', 'star']" />
          </div>
          <div class="flex pt-10 px-10 pb-10 items-start h-40">
            <div class="mr-5">
              <img src="~/static/images/bulb.png" alt="rockit" class="h-20" />
            </div>
            <div>
              <div class="text-xl text-black">Creator</div>
              <div class="text-base mb-2">Maker</div>
              <hr class="border-ideeza border-t-2" />
            </div>
          </div>
          <div class="px-5 mx-10 py-2 mb-5 bg-white rounded">
            <div class="flex flex-wrap justify-between">
              <div class="text-sm">
                <font-awesome-icon class="text-sm text-green mr-2" :icon="['fa', 'check']" />Electronics
              </div>
              <div class="text-sm">
                <font-awesome-icon class="text-sm text-green mr-2" :icon="['fa', 'check']" />Cover
              </div>
              <div class="text-sm">
                <font-awesome-icon class="text-sm text-green mr-2" :icon="['fa', 'check']" />Code
              </div>
              <div class="text-sm">
                <font-awesome-icon class="text-sm text-green mr-2" :icon="['fa', 'check']" />Social
              </div>
            </div>
          </div>
          <div class="mx-16 text-left mb-16">
            <div class="mb-2">
              <font-awesome-icon class="text-sm text-ideeza mr-2" :icon="['fa', 'plus']" />1 active project
            </div>
            <div class="mb-2">
              <font-awesome-icon class="text-sm text-ideeza mr-2" :icon="['fa', 'plus']" />In platform purchase
            </div>
          </div>
          <div class="text-center text-4xl pb-10">Private</div>
          <div class="p-10 text-center">
            <button class="btn-top-white rounded-lg bg-white text-center px-10 py-3 w-full">$799</button>
            <button
              class="btn-bot-black rounded-b-lg bg-black text-white text-center py-2 w-3/4 btn-gray"
            >$69 X 12 = $828</button>
          </div>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full pr-2 mb-3">
        <div
          class="bg-white shadow-lg rounded relative pricing-card innovator"
          :style="{'background-image':'url('+backgroundUrl1+'),url('+backgroundUrl2+'),url('+backgroundUrl3+');'}"
        >
          <div class="flex pt-10 px-10 pb-10 items-start h-40">
            <div class="mr-5">
              <img src="~/static/images/enperprise.png" alt="rockit" class="w-24" />
            </div>
            <div>
              <div class="text-xl text-black">INNOVATOR</div>
              <div class="text-base mb-2">SERIAL ENTERPRENUAR</div>
              <hr class="border-ideeza border-t-2" />
            </div>
          </div>
          <div class="px-5 mx-10 py-2 mb-2 bg-white rounded">
            <div class="flex flex-wrap justify-between">
              <div class="text-sm">
                <font-awesome-icon class="text-sm text-green mr-2" :icon="['fa', 'check']" />Electronics
              </div>
              <div class="text-sm">
                <font-awesome-icon class="text-sm text-green mr-2" :icon="['fa', 'check']" />Cover
              </div>
              <div class="text-sm">
                <font-awesome-icon class="text-sm text-green mr-2" :icon="['fa', 'check']" />Code
              </div>
              <div class="text-sm">
                <font-awesome-icon class="text-sm text-green mr-2" :icon="['fa', 'check']" />Social
              </div>
            </div>
          </div>
          <div class="mx-16 text-left mb-10">
            <div class="mb-2">
              <font-awesome-icon class="text-sm text-ideeza mr-2" :icon="['fa', 'plus']" />10 active project
            </div>
            <div class="mb-2">
              <font-awesome-icon class="text-sm text-ideeza mr-2" :icon="['fa', 'plus']" />In platform purchase
            </div>
            <div class="mb-2">
              <font-awesome-icon class="text-sm text-ideeza mr-2" :icon="['fa', 'plus']" />Consult support
            </div>
          </div>
          <div class="text-center text-4xl pb-10">Private</div>
          <div class="p-10 text-center">
            <button
              class="btn-top-black rounded-t-lg bg-black text-white text-center py-2 w-3/4 btn-gray"
            >$799 X 12 = $11988</button>
            <button class="btn-bot-white rounded-lg bg-white text-center px-10 py-3 w-full">$9999</button>
          </div>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full pr-2 mb-3">
        <div
          class="bg-white shadow-lg rounded relative pricing-card team"
          :style="{'background-image':'url('+backgroundUrl1+'),url('+backgroundUrl2+'),url('+backgroundUrl3+');'}"
        >
          <div class="flex pt-10 px-10 pb-10 items-start h-40">
            <div class="mr-5">
              <img src="~/static/images/cup.png" alt="rockit" class="h-20" />
            </div>
            <div>
              <div class="text-xl text-black">TEAM</div>
              <div class="text-base mb-2">SME ACCOUNT</div>
              <hr class="border-ideeza border-t-2" />
            </div>
          </div>
          <div class="px-5 mx-10 py-2 mb-2 bg-white rounded">
            <div class="flex flex-wrap justify-between">
              <div class="text-sm">
                <font-awesome-icon class="text-sm text-green mr-2" :icon="['fa', 'check']" />Electronics
              </div>
              <div class="text-sm">
                <font-awesome-icon class="text-sm text-green mr-2" :icon="['fa', 'check']" />Cover
              </div>
              <div class="text-sm">
                <font-awesome-icon class="text-sm text-green mr-2" :icon="['fa', 'check']" />Code
              </div>
              <div class="text-sm">
                <font-awesome-icon class="text-sm text-green mr-2" :icon="['fa', 'check']" />Social
              </div>
            </div>
          </div>
          <div class="mx-16 text-left mb-2 text-sm">
            <div class="mb-2 flex justify-between items-start">
              <font-awesome-icon class="text-sm text-ideeza mt-2 mr-2" :icon="['fa', 'plus']" />
              <span>10 active project per account (additional teammate $99/month)</span>
            </div>
            <div class="mb-2 flex items-start">
              <font-awesome-icon class="text-sm text-ideeza mt-2 mr-2" :icon="['fa', 'plus']" />
              <span>In platform purchase</span>
            </div>
            <div class="mb-2 flex items-start">
              <font-awesome-icon class="text-sm text-ideeza mt-2 mr-2" :icon="['fa', 'plus']" />
              <span>Consult support</span>
            </div>
          </div>
          <div class="text-center text-4xl pb-10">Private</div>
          <div class="p-10 text-center">
            <button class="btn-top-white rounded-lg bg-white text-center px-10 py-3 w-full">$9999</button>
            <button
              class="btn-bot-black rounded-b-lg bg-black text-white text-center py-2 w-3/4 btn-gray"
            >$799 X 12 = $11988</button>
          </div>
        </div>
      </div>
    </div>
    <login
      v-if="showLoginModal"
      @close="showLoginModal=false"
      @signup="showLoginModal=false;showSignupModal=true"
      @reset="showLoginModal=false;showResetModal=true;"
    />
    <signup
      v-if="showSignupModal"
      @close="showSignupModal=false"
      @login="showSignupModal=false;showLoginModal=true"
      @signup="showSignupModal=false;showEmailSignupModal=true;"
    />
    <reset-password
      v-if="showResetModal"
      @login="showLoginModal=true;showResetModal=false"
      @close="showResetModal=false"
    />
    <email-signup
      v-if="showEmailSignupModal"
      @close="showEmailSignupModal=false"
      @login="showLoginModal=true;showEmailSignupModal=false"
    />
  </div>
</template>
<script>
import Login from "~/components/reusables/Login.vue";
import Signup from "~/components/reusables/Signup.vue";
import ResetPassword from "~/components/reusables/ResetPassword.vue";
import EmailSignup from "~/components/reusables/EmailSignup.vue";
export default {
  middleware: "auth",
  layout: "pricing",
  components: {
    Login,
    Signup,
    ResetPassword,
    EmailSignup
  },
  data() {
    return {
      backgroundUrl1: require("~/static/images/intersection1.png"),
      backgroundUrl2: require("~/static/images/intersection3.png"),
      backgroundUrl3: require("~/static/images/intersection4.png"),
      showLoginModal: false,
      showSignupModal: false,
      showResetModal: false,
      showEmailSignupModal: false,
      auth: false
    };
  },
  mounted() {
    let authToken = window.$nuxt.$cookies.get("authToken");
    if (authToken != null) {
      this.auth = true;
      let firstname = window.$nuxt.$cookies.get("firstname");
      let lastname = window.$nuxt.$cookies.get("lastname");
      this.name = firstname + " " + lastname;
    } else {
      this.auth = false;
    }
  }
};
</script>
<style scoped>
.logo {
  width: 70px;
  height: 35px;
}

.auth-btn {
  background-color: #6f279a;
}

.text-gold {
  color: #ecec00;
}

.text-green {
  color: #01ff00;
}

.pricing-card-images img {
  position: absolute;
  bottom: 0;
}

.pricing-card {
  background-repeat: no-repeat;
  background-position: bottom;
  height: 600px;
  background-size: 100%;
}

.creator-maker {
  background-color: #ffedfb;
}

.innovator {
  background-color: #f2eef6;
}

.team {
  background-color: #fefeed;
}

.btn-gray {
  background: #333333;
}

.btn-top-black {
  position: absolute;
  left: 50%;
  width: 68%;
  bottom: 9%;
  transform: translateX(-50%);
}

.btn-bot-black {
  position: absolute;
  left: 50%;
  width: 68%;
  bottom: 1%;
  transform: translateX(-50%);
}

.btn-bot-white {
  position: absolute;
  left: 50%;
  width: 80%;
  bottom: 1%;
  transform: translateX(-50%);
}

.btn-top-white {
  position: absolute;
  left: 50%;
  width: 80%;
  bottom: 7.6%;
  transform: translateX(-50%);
}
.popular-badge {
  position: absolute;
  width: 50px;
  height: 50px;
  background: white;
  top: -37px;
  border-radius: 30px;
  left: 12px;
  border: 6px double #ecec00;
  text-align: center;
  /* font-size: 20px; */
  padding: 6px 6px;
}
.popular-badge svg {
  font-size: 23px;
  color: #ecec00;
}
.popular-badge-text {
  background: white;
  height: 37px;
  text-align: center;
  width: 207px;
  font-size: 21px;
  left: 40px;
  position: absolute;
  top: -37px;
  border-top-right-radius: 13px;
}
</style>
