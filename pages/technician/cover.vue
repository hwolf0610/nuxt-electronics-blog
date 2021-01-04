<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>

    <!-- Main Contents -->
    <div class="flex-grow mb-20">
      <div class="main-contents">

        <!--Header Bar-->
        <div class="header-bar lg:flex items-center md:mx-auto">
           <nuxt-link class="header-menu block md:inline-block mb-2 md:mb-0" to="/technician/cover/add-part">
             Add Part
           </nuxt-link>

          <nuxt-link class="header-menu block md:inline-block mb-2 md:mb-0" to="/technician/cover/add-component">
            Add Component
          </nuxt-link>

          <nuxt-link class="header-menu block md:inline-block mb-2 md:mb-0" to="/technician/cover/add-cover">
            Add Cover
          </nuxt-link>


        </div>
        <nuxt-child></nuxt-child>



      </div>


    </div>



  </div>


</template>

<script>
  import LeftMenu from '~/components/technician/common-left-side-menu.vue'

  export default {
    layout: 'technician',
    name: "electronics-index",
    components: {
      LeftMenu
    },
    data: function () {
      return {
        activeDrawer: null,
        step: 0
      }
    },
    computed: {
      leftMenu() {
        return this.$store.state.usermenu.openLeftMenu;
      }
    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<style scoped>

  .header-bar{
    width: fit-content;
  }

  .header-menu{
    @apply px-6 py-3 bg-white text-lg text-gray-600 cursor-pointer mr-6 font-semibold;
  }
  .header-menu:hover{
    @apply text-ideeza;
  }
  .header-menu.active-link{
    @apply bg-transparent text-ideeza border border-solid border-gray-300;
  }
</style>
