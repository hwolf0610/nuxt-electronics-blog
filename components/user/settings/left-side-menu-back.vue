<template>
  <div class="flex flex-col items-start bg-white h-full shadow relative left-side-bar">

      <div class="p-10 relative w-full flex justify-center items-center">
        <div @click="activeMenu='settings'" class="font-semibold mr-5 cursor-pointer" :class="{'text-ideeza underline': activeMenu === 'settings'}" >Settings</div>
        <div @click="activeMenu='menu'" class="font-semibold cursor-pointer" :class="{'text-ideeza underline': activeMenu === 'menu'}" >Menu</div>
      </div>

      <div class="relative w-full " v-if="activeMenu === 'settings'">
        <div class="px-10">
          <div class="menu-item">
            <nuxt-link to="/user/settings/general" >General</nuxt-link>
          </div>
          <div class="menu-item">
            <nuxt-link to="/user/settings/notifications" >Notifications</nuxt-link>
          </div>
          <div class="menu-item">
            <nuxt-link to="/user/settings/payment-methods" >Payment Methods</nuxt-link>
          </div>
          <div class="menu-item">
            <nuxt-link to="/user/settings/payout-methods" >Payout Preferences</nuxt-link>
          </div>
            <div class="menu-item">
            <nuxt-link to="/user/settings/assembly-service" >Cost of  Service</nuxt-link>
          </div>
          <div class="menu-item">
            <nuxt-link to="/user/settings/transaction-history" >Transaction History</nuxt-link>
          </div>
          <div class="menu-item">
            <nuxt-link to="/user/settings/privacy" >Privacy</nuxt-link>
          </div>
          <div class="menu-item">
            <nuxt-link to="/user/settings/security" >Security</nuxt-link>
          </div>
        </div>
      </div>

      <div v-if="activeMenu === 'menu'" class="px-10 relative w-full">
        <CommonMenu />
      </div>

      <LeftBotMenu class="flex-shrink sticky bottom-0  p-10 self-end w-full z-10" />




  </div>
</template>

<script>
  import CommonMenu from '~/components/user/user-menu-items.vue'
  import LeftBotMenu from '~/components/user/left-menu-bot-items.vue'
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
    width: 300px;
    min-width: 300px;
  }
  .menu-item{
    @apply flex mb-5 content-center items-center mt-2 text-gray-700 text-lg font-semibold cursor-pointer;
  }
  .menu-item:hover{
    @apply text-ideeza;
  }
  .left-main-menu svg{
    @apply text-gray-500;
  }
  .menu-item:hover svg{
    @apply text-ideeza;
  }
  .line-height-0{
    line-height: 0;
  }

</style>
