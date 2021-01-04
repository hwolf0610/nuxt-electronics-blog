<template>
  <div class="left-main-menu ">
    <div class="menu-item">
      <nuxt-link to="/admin/dashboard">
        <DashBoardIcon class="fill-current mr-5" /> Dashboard
      </nuxt-link>
    </div>
    <div class="menu-item flex-col">
      <div class="flex">
        <nuxt-link to="/admin/user" class="w-1/2">
          <font-awesome-icon class="mr-5 w-8 h-8 text-2xl align-text-top" :icon="['far', 'user']"/> Users
        </nuxt-link>
        <font-awesome-icon v-if="!userActive" @click="userActive = !userActive" class="w-1/2 mr-5 w-8 h-8 text-2xl align-text-top" :icon="['fas', 'caret-down']"/>
        <font-awesome-icon v-if="userActive" @click="userActive = !userActive" class="w-1/2 mr-5 w-8 h-8 text-2xl align-text-top" :icon="['fas', 'caret-up']"/>
      </div>
      <div :class="[userActive ? 'block' : 'hidden']">
        <nuxt-link to="/admin/user" class="block ml-12 text-base mt-2">Home</nuxt-link>
        <nuxt-link to="/admin/user/contact" class="block ml-12 text-base mt-2">Contacts</nuxt-link>
        <nuxt-link to="/admin/users" class="block ml-12 text-base mt-2">Marketing</nuxt-link>
      </div>
    </div>
    <div class="menu-item flex-col">
      <div class="flex">
        <nuxt-link to="/admin/service" class="w-11/12">
          <UserIcon class="fill-current mr-3" /> Service providers
        </nuxt-link>
        <font-awesome-icon v-if="!SPActive" @click="SPActive = !SPActive" class="w-1/12 mr-5 w-8 h-8 text-2xl align-text-top" :icon="['fas', 'caret-down']"/>
        <font-awesome-icon v-if="SPActive" @click="SPActive = !SPActive" class="w-1/12 mr-5 w-8 h-8 text-2xl align-text-top" :icon="['fas', 'caret-up']"/>
      </div>
      <div :class="[SPActive ? 'block' : 'hidden']">
        <nuxt-link to="/admin/service" class="block ml-12 text-base mt-2">Home</nuxt-link>
        <nuxt-link to="/admin/service/contact" class="block ml-12 text-base mt-2">Contacts</nuxt-link>
        <nuxt-link to="/admin/service/deals" class="block ml-12 text-base mt-2">Deals</nuxt-link>
        <nuxt-link to="/admin/service/document" class="block ml-12 text-base mt-2">Documents</nuxt-link>
        <nuxt-link to="/admin/service/inbox" class="block ml-12 text-base mt-2">Inbox</nuxt-link>
        <nuxt-link to="/admin/service/activities" class="block ml-12 text-base mt-2">Activities</nuxt-link>
      </div>
    </div>
    <div class="menu-item flex-col">
      <div class="flex">
        <nuxt-link to="/admin/invester" class="w-11/12">
          <UserIcon class="fill-current mr-3" /> Investors
        </nuxt-link>
        <font-awesome-icon v-if="!investActive" @click="investActive = !investActive" class="w-1/12 mr-5 w-8 h-8 text-2xl align-text-top" :icon="['fas', 'caret-down']"/>
        <font-awesome-icon v-if="investActive" @click="investActive = !investActive" class="w-1/12 mr-5 w-8 h-8 text-2xl align-text-top" :icon="['fas', 'caret-up']"/>
      </div>

      <div :class="[investActive ? 'block' : 'hidden']">
        <nuxt-link to="/admin/invester/blog" class="block ml-12 text-base mt-2">Blog</nuxt-link>
      </div>
    </div>
    <div class="menu-item">
      <nuxt-link to="/admin/product">
        <ProductIcon class="fill-current mr-5" /> Products
      </nuxt-link>
    </div>
    <div class="menu-item">
      <nuxt-link to="/admin/order">
        <font-awesome-icon class="mr-5 w-8 h-8 text-2xl align-text-top" :icon="['fas', 'shopping-cart']"/> Orders
      </nuxt-link>
    </div>
    <div class="menu-item">
      <nuxt-link to="/admin/messages">
        <font-awesome-icon class="mr-5 w-8 h-8 text-2xl align-text-top" :icon="['far', 'comments']"/> Messages
      </nuxt-link>
    </div>
    <div class="menu-item">
      <nuxt-link to="/admin/news">
        <font-awesome-icon class="mr-5 w-8 h-8 text-2xl align-text-top" :icon="['far', 'newspaper']"/> News
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  import DashBoardIcon from '~/components/partials/icons/dashboard-icon.vue'
  import ProductIcon from '~/components/partials/icons/product-icon.vue'
  import TaskIcon from '~/components/partials/icons/list-icon.vue'
  import UserIcon from '~/components/partials/icons/user-icon.vue'
    export default {
      name: "menu-items",
      components: {
        DashBoardIcon,
        ProductIcon,
        TaskIcon,
        UserIcon
      },
      data() {
        return {
          userActive: false,
          SPActive: false,
          investActive: false
        }
      }
    }
</script>

<style scoped>
  .menu-item{
    @apply flex mb-8 content-center mt-2 text-gray-700 text-xl font-semibold cursor-pointer;
  }

  .menu-item a:hover{
    @apply text-ideeza;
  }
  .left-main-menu svg{
    @apply text-gray-500;
  }
  .menu-item:hover svg{
    @apply text-ideeza;
  }
  .active-link,
  .active-link svg{
    @apply text-ideeza;
  }
</style>
