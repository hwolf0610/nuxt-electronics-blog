<template>
  <div class="header-bar gradient-bg">
    <!--Logo-->
    <div class="flex items-center">
      <div class="w-6 h-full relative">
        <transition name="slide-fade">
          <font-awesome-icon
            key="on"
            v-if="!leftMenu"
            @click="toggleLeftMenu()"
            class="absolute-center-v text-white cursor-pointer ml-1 mr-2 absolute h-4"
            :icon="['fas', 'chevron-left']"
          />
          <font-awesome-icon
            key="off"
            v-else
            @click="toggleLeftMenu()"
            class="absolute-center-v text-white cursor-pointer ml-1 mr-2 absolute h-4"
            :icon="['fas', 'bars']"
          />
        </transition>
      </div>

      <div class="logo">
        <nuxt-link to="/">
          <img class="logo ml-1" src="~/static/images/logo-1.png" />
        </nuxt-link>
      </div>
    </div>

    <!--Menu-->
    <div class="flex items-center justify-end">
      <nuxt-link
        to="/user/cart/overview"
        class="cart-button bg-transparent rounded-full h-10 w-10 flex items-center justify-center mr-5 hidden lg:flex"
      >
        <img class="cart-icon" src="https://img.icons8.com/ios-glyphs/50/ffffff/shopping-cart.png" />
      </nuxt-link>
      <div class="flex items-center relative mr-5" v-click-outside="onClickOutside">
        <font-awesome-icon
          class="text-white text-2xl h-6 cursor-pointer"
          @click="showInfoAlert = !showInfoAlert"
          :icon="['far', 'bell']"
        />
        <font-awesome-icon class="text-ideeza h-2 absolute bell-info" :icon="['fas', 'circle']" />
        <div class="info-alert text-xs" v-show="showInfoAlert">
          <div class="text-ideeza-black px-2 py-4 font-semibold">New</div>
          <div class="info-contents" v-for="n in news">
            <img class="info-avatar" :src="n.portrait_url" />
            <div class="flex-grow">
              <span class="font-semibold">{{n.description}}</span>
            </div>
          </div>
          <div
            class="text-ideeza text-center px-2 py-4 font-semibold cursor-pointer"
            @click="onSeeMore"
          >See more</div>
        </div>
      </div>

      <div class="flex items-center relative mr-5" v-click-outside="onClickOutsideHelp">
        <font-awesome-icon
          class="text-white text-2xl h-6 cursor-pointer"
          @click="showHelpAlert = !showHelpAlert"
          :icon="['fas', 'question']"
        />
        <div class="help-alert text-xs" v-show="showHelpAlert">
          <nuxt-link
            to="/user/help"
            class="text-gray-500 hover:text-gray-800 font-semibold px-3 py-2 w-full block"
          >
            <div class="px-2 w-full flex items-center">
              <font-awesome-icon class="mr-3 h-5 align-text-middle" :icon="['fas', 'info-circle']" />Help
            </div>
          </nuxt-link>

          <nuxt-link
            to="/user/support"
            class="text-gray-500 hover:text-gray-800 font-semibold px-3 py-2 w-full block"
          >
            <div class="px-2 w-full flex items-center">
              <font-awesome-icon class="mr-3 h-5 align-text-middle" :icon="['fas', 'user-tie']" />Support
            </div>
          </nuxt-link>
        </div>
      </div>

      <div class="flex items-center relative mr-5" v-click-outside="onClickOutsideProfile">
        <div
          class="flex items-center"
          @click="showProfileAlert = !showProfileAlert"
          style="cursor: pointer"
        >
          <img
            class="h-10 w-10 rounded-full mr-2"
            :src="avatar_base_url + avatar"
          />
          <span class="text-white inline-block">{{name}}</span>
        </div>
        <div class="help-alert text-xs" v-show="showProfileAlert">
          <nuxt-link
            to="/user/profile"
            class="text-gray-500 hover:text-gray-800 font-semibold px-3 py-2 w-full block"
          >
            <div class="px-2 w-full flex items-center">
              <font-awesome-icon class="mr-3 h-5 align-text-middle" :icon="['fas', 'user-alt']" />Profile
            </div>
          </nuxt-link>

          <div
            class="text-gray-500 hover:text-gray-800 font-semibold px-3 py-2 w-full block"
            style="cursor: pointer"
            @click="onSignOut"
          >
            <div class="px-2 w-full flex items-center">
              <font-awesome-icon
                class="mr-3 h-5 align-text-middle"
                :icon="['fas', 'sign-out-alt']"
              />Sign Out
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import news from "~/json/news.json";
export default {
  name: "header-bar",
  data: function() {
    return {
      showInfoAlert: false,
      showHelpAlert: false,
      showProfileAlert: false,
      news: news,
      name: "",
      avatar: "",
      avatar_base_url: process.env.avatar_base_url,
    };
  },
  computed: {
    leftMenu() {
      return this.$store.state.usermenu.openLeftMenu;
    }
  },
  mounted() {

    let firstname = window.$nuxt.$cookies.get('firstname');
    let lastname = window.$nuxt.$cookies.get('lastname');
    let useravatar = window.$nuxt.$cookies.get("useravatar");
    this.name = firstname + ' ' + lastname;
    this.avatar = useravatar;
  },
  methods: {
    ...mapMutations({
      toggleLeftMenu: "usermenu/toggleLeftMenu"
    }),
    onClickOutside() {
      this.showInfoAlert = false;
    },
    onClickOutsideHelp() {
      this.showHelpAlert = false;
    },
    onClickOutsideProfile() {
      this.showProfileAlert = false;
    },
    onSeeMore() {
      alert();
    },
    onSignOut() {
      window.$nuxt.$cookies.remove("authToken");
      window.$nuxt.$cookies.remove("firstname");
      window.$nuxt.$cookies.remove("lastname");
      window.$nuxt.$cookies.remove("userid");
      this.$router.push("/home");
    }
  }
};
</script>

<style scoped>
.w-m-c {
  width: max-content;
}
.bell-info {
  top: 3px;
  right: -3px;
  z-index: 50;
}
.info-alert {
  @apply shadow-lg absolute z-50 bg-white;
  width: 285px;
  left: -132px;
  top: 35px;
}
.help-alert {
  @apply shadow-lg absolute z-50 bg-white;
  width: 150px;
  left: -60px;
  top: 35px;
}
.info-alert:before {
  border: solid;
  border-color: white transparent;
  border-width: 0 6px 6px 6px;
  top: -6px;
  content: "";
  display: block;
  left: 50%;
  margin-left: -6px;
  position: absolute;
  z-index: 99;
}
.info-avatar {
  @apply rounded-full mr-1;
  width: 41px;
}
.info-contents {
  @apply p-4 flex mb-1;
  background: rgba(67, 16, 131, 0.07);
}
.header-bar {
  @apply flex justify-between pl-5 pr-5 pt-2 pb-2;
  z-index:1;
}
.logo {
  width: 70px;
  height: 35px;
}
.search-form-container {
  max-width: 912px;
}
.search-input {
  @apply w-full bg-white border-0 outline-none;
}
.search-logo {
  @apply absolute m-0;
  width: 13px;
  height: 16px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.cart-button {
  @apply;
  transition: 0.12s ease-in;
}
.cart-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.cart-icon {
  width: 25px;
  height: 24px;
}
.side-bar-toggler {
  width: 17px;
  height: 17px;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s;
}
.slide-fade-enter,
.slide-fade-leave-active {
  opacity: 0;
}
.slide-fade-enter {
  transform: translateX(10px);
}
.slide-fade-leave-active {
  transform: translateX(-10px);
}
</style>
