<template>
  <div class="menu-bot border-t border-solid border-gray-200 " >
    <div class="menu-item text-gray-500 hover:text-gray-800 text-xl font-semibold">
      <nuxt-link to="/user/help">
        <font-awesome-icon class="mr-5 w-8 h-8 text-2xl align-text-middle" :icon="['fas', 'info-circle']"/> Help
      </nuxt-link>
    </div>

    <div class="menu-item text-gray-500 hover:text-gray-800 mt-5 text-xl font-semibold">
      <nuxt-link to="/user/settings">
        <font-awesome-icon class="mr-5 w-8 h-8 align-text-middle" :icon="['fas', 'cog']"/> Settings
      </nuxt-link>

    </div>
    <div class="menu-item text-gray-500 hover:text-gray-800 mt-5 text-xl font-semibold">
      <nuxt-link to="/user/support">
        <font-awesome-icon class="mr-5 w-8 h-8 text-2xl align-text-middle" :icon="['fas', 'user-tie']"/> Contact Support
      </nuxt-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "left-menu-bot-items"
    }
</script>

<style scoped>
  .menu-bot{
    margin-top: 550px;
  }
  .active-link,
  .active-link svg{
    @apply text-gray-800;
  }
</style>
