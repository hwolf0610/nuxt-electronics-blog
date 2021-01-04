<template>
  <div class="header-bar gradient-bg">
    <div class="flex justify-between">
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
      <div class="flex justify-end">
        <nuxt-link
          to="/user/cart/overview"
          class="cart-button bg-transparent rounded-full h-10 w-10 flex items-center justify-center mr-5 hidden lg:flex"
        >
          <img
            class="cart-icon"
            src="https://img.icons8.com/ios-glyphs/50/ffffff/shopping-cart.png"
          />
        </nuxt-link>
        <div class="flex justify-center items-center content-center w-m-c">
          <nuxt-link to="/user/profile" class="flex items-center">
            <img
              class="h-10 w-10 rounded-full mr-2"
              src="https://randomuser.me/api/portraits/men/17.jpg"
            />
            <span class="text-white inline-block">John Doe</span>
          </nuxt-link>
          <font-awesome-icon
            class="text-white cursor-pointer ml-5 lg:hidden h-4"
            :icon="['fas', 'ellipsis-v']"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "header-bar",
  data: function() {
    return {};
  },
  computed: {
    leftMenu() {
      return this.$store.state.usermenu.openLeftMenu;
    }
  },
  methods: {
    ...mapMutations({
      toggleLeftMenu: "usermenu/toggleLeftMenu"
    })
  }
};
</script>

<style scoped>
.w-m-c {
  width: max-content;
}
.header-bar {
  @apply pl-5 pr-5 pt-2 pb-2;
  height: 100px;
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
