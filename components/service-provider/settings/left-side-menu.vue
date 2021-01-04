<template>
  <div class="flex flex-col bg-white h-full shadow left-side-bar fixed nav">

      <div class="pt-20 px-10 pb-10 flex justify-center items-center relative w-full  ">
        <div @click="activeMenu='settings'" class="font-semibold mr-5 cursor-pointer px-3 border-ideeza py-1 border" :class="{'bg-ideeza text-white': activeMenu === 'settings'}" >Settings</div>
        <div @click="activeMenu='menu'" class="font-semibold cursor-pointer px-3 border-ideeza border py-1" :class="{'bg-ideeza text-white': activeMenu === 'menu'}" >Menu</div>
      </div>

      <div class="relative w-full px-10" v-if="activeMenu === 'settings'">

          <div class="menu-item">
            <nuxt-link to="/service-provider/settings/general" >General</nuxt-link>
          </div>
          <div class="menu-item">
            <nuxt-link to="/service-provider/settings/notifications" >Notifications</nuxt-link>
          </div>
          <div class="menu-item">
            <nuxt-link to="/service-provider/settings/payment-methods" >Payment Methods</nuxt-link>
          </div>
          <div class="menu-item">
            <nuxt-link to="/service-provider/settings/payout-preferences" >Payout Preferences</nuxt-link>
          </div>
          <div class="menu-item">
            <nuxt-link to="/service-provider/settings/cost-of-service" >Cost of Service</nuxt-link>
          </div>
          <div class="menu-item">
            <nuxt-link to="/service-provider/settings/agents" >Agents</nuxt-link>
          </div>
          <div class="menu-item">
            <nuxt-link to="/service-provider/settings/pricing-plan" >Pricing Plan</nuxt-link>
          </div>
          <div class="menu-item">
            <nuxt-link to="/service-provider/settings/privacy" >Privacy</nuxt-link>
          </div>
          <div class="menu-item">
            <nuxt-link to="/service-provider/settings/security" >Security</nuxt-link>
          </div>
      </div>

      <div v-if="activeMenu === 'menu'" class="px-10 relative w-full">
        <CommonMenu />
      </div>
  </div>
</template>

<script>
  import CommonMenu from '~/components/service-provider/user-menu-items.vue'
  import LeftBotMenu from '~/components/service-provider/left-menu-bot-items.vue'
  export default {
    name: "settings-left-side-menu",
    components: {
      LeftBotMenu,
      CommonMenu
    },
    data: function () {
      return {
        activeMenu: 'settings'
      }
    }
  }
</script>

<style scoped>
  .left-side-bar{
    width: 270px;
    min-width: 270px;
  }
  .active-link{
    @apply text-gray-800;
  }
  .menu-item{
    @apply mb-5 text-gray-600 text-base font-semibold cursor-pointer;
  }
  .menu-item:hover{
    @apply text-gray-800;
  }
  .nav {
    margin-top: -60px;
    z-index: 1;
  }
</style>
