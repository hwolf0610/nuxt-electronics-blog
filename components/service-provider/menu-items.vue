<template>
  <div class="left-main-menu ">
    <div class="menu-item">
      <nuxt-link to="/service-provider/dashboard">
        <DashBoardIcon class="fill-current mr-5" /> Dashboard
      </nuxt-link>
    </div>
    <div class="menu-item">
      <nuxt-link to="/service-provider/order">
        <font-awesome-icon class="mr-5 w-8 h-8 text-2xl align-text-top" :icon="['fas', 'shopping-cart']"/> Orders
      </nuxt-link>
    </div>
    <div class="menu-item">
      <nuxt-link to="/service-provider/transaction">
        <TaskIcon class="fill-current mr-5" /> Transaction
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
