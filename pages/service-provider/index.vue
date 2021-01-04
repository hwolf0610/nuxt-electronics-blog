<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <!-- <LeftMenu/> -->
    <sidebar-menu :menu-items="menu" />
    <!-- Main Contents -->
    <div class="flex-grow">
      <div></div>
      <nuxt-child></nuxt-child>

    </div>

  </div>


</template>

<script>
  import LeftMenu from '~/components/user/common-left-side-menu.vue'
  import SidebarMenu from '~/components/reusables/SideBar.vue'

  export default {
    layout: 'user',
    name: "project-index",
    components: {
      LeftMenu,
      SidebarMenu
    },
    data: function () {
      return {
        menu: [
            {
                name: 'Dashboard',
                iconComponent: 'DashBoardIcon',
                link: '/user/dashboard'
            },
            {
                name: 'Users',
                icon: 'user',
                link: '/user/home',
                childs: [
                  {
                    name: 'Home',
                    link: '/user/home'
                  },
                  {
                    name: 'Contacts',
                    link: '/user/contact'
                  },
                  {
                    name: 'Marketing',
                    link: '/user/marketing'
                  }
                ]
            },
            {
                name: 'Service Providers',
                icon: 'users',
                link: '/serviceprovider'
            },
            {
                name: 'Investor',
                icon: 'users',
                link: '/investors'
            },
            {
                name: 'Products',
                icon: 'gift',
                link: '/products'
            },
            {
                name: 'Orders',
                icon: 'shopping-cart',
                link: '/orders'
            },
            {
                name: 'Messages',
                icon: 'envelope',
                link: 'messages'
            },
            {
              name: 'Blog',
              icon: 'blog',
              link: '/user/blog/updated'
            }
        ]
      }
    },
    computed: {
      leftMenu() {
        return this.$store.state.usermenu.openLeftMenu;
      }
    },
    mounted() {

    },
    methods: {}
  }
</script>

<style scoped>



</style>
