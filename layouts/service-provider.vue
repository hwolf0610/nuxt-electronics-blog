<template>
  <div class="flex flex-col h-full">
    <navigation class="flex-shrink"></navigation>
    <div :class="{'hide-sider-bar':!leftMenu}" class="flex main-panel">
      <!--  Left Side Bar  -->
      <!-- <LeftMenu/> -->
      <!-- <sidebar-menu :menu-items="menu" :bot-menu-items="botMenuItems" /> -->
      <LeftMenu />
      <!-- Main Contents -->
      <div class="flex-grow page-container p-2">
        <nuxt />
      </div>

    </div>
    <notifications group="error" position="top right">
      <template slot="body" slot-scope="props">
        <div class="notify notify--error">
          <div class="flex items-center text-white font-semibold">
            <img class="mr-3" src="~/static/icons/exclaimation-icon.png" alt />
            {{props.item.text}}
          </div>

          <a class="close cursor-pointer" @click="props.close">
            <font-awesome-icon class="mr-3 h-3 text-red-200 text-xs" :icon="['fas', 'times']" />
          </a>
        </div>
      </template>
    </notifications>
    <notifications group="success" position="top right">
      <template slot="body" slot-scope="props">
        <div class="notify notify--success">
          <div class="flex items-center text-white font-semibold">
            <img class="mr-3" src="~/static/icons/notificication-success-icon.png" alt />
            {{props.item.text}}
          </div>

          <a class="close cursor-pointer" @click="props.close">
            <font-awesome-icon class="mr-3 h-3 text-green-200 text-xs" :icon="['fas', 'times']" />
          </a>
        </div>
      </template>
    </notifications>
    <FloatButton />
  </div>

</template>

<script>
  import LeftMenu from '~/components/service-provider/common-left-side-menu.vue'
  import SidebarMenu from '~/components/reusables/SideBar.vue'
  import navigation from "~/components/service-provider/header-bar.vue";
  import FloatButton from "~/components/user/float-button/right-bot-float-button.vue";
  import {
    mapMutations
  } from "vuex";
  export default {
    layout: 'user',
    name: "service-provider-layout",
    components: {
      LeftMenu,
      SidebarMenu,
      navigation,
      FloatButton
    },
    data: function () {
      return {
        botMenuItems: [{
            name: 'Help',
            icon: 'shopping-cart',
            link: 'orders'
        }],
        menu: [{
            name: 'Dashboard',
            iconComponent: 'DashBoardIcon',
            link: 'dashboard'
          },
          {
            name: 'Orders',
            icon: 'shopping-cart',
            link: 'orders'
          },
          {
            name: 'Projects',
            icon: 'project-diagram',
            link: 'projects'
          },
          {
            name: 'Transactions',
            icon: 'list-alt',
            link: 'transactions'
          },
          {
            name: 'Messages',
            icon: 'envelope',
            link: 'messages'
          },
          {
            name: 'Help',
            icon: 'info-circle',
            link: 'help'
          },
        ]
      }
    },
    computed: {
      leftMenu() {
        return this.$store.state.usermenu.openLeftMenu;
      }
    },
    mounted() {
      console.log(this.$device.isMobile);
      if (this.$device.isMobile) {
        this.toggleLeftMenu();
      }
    },
    methods: {
      ...mapMutations({
        toggleLeftMenu: "usermenu/toggleLeftMenu"
      })
    }
  }

</script>

<style scoped>
#__nuxt {
  height: 100%;
}
#__layout {
  height: 100%;
}
.vue-notification-group {
  width: 350px !important;
  top: 30px !important;
  right: 30px !important;
}
.notify {
  @apply flex justify-between items-center px-3 py-2;
  width: 350px;
}
.notify--error {
  @apply bg-ideeza-red;
}
.notify--success {
  @apply bg-ideeza-green;
}
.page-container {
    min-height: calc(100vh - 40px);
    background: #F5F5F5;
}
</style>
