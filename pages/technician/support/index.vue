<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>

    <!-- Main Contents -->
    <div class="flex-grow">

      <div class="main-contents">
        <h1 class="text-gray-800 text-2xl lg:text-4xl lg:mt-10 font-semibold">Support Center</h1>

        <!--Big Buttons-->
        <div
          class="big-buttons-container flex flex-wrap lg:flex-no-wrap justify-between mt-10 border-b heading-border pb-5">
          <div @click="activeButton = 'email'" class="big-button" :class="{active: activeButton === 'email'}">
            <span class="">Email</span>
            <font-awesome-icon class="absolute-center-h-v hidden lg:inline mr-1 cursor-pointer support-icon" :icon="['far', 'envelope']"/>
          </div>
          <div @click="activeButton = 'chat'" class="big-button" :class="{active: activeButton === 'chat'}">
            <span>Chat</span>
            <font-awesome-icon class="absolute-center-h-v hidden lg:inline mr-1 cursor-pointer support-icon" :icon="['far', 'comment-dots']"/>
          </div>
          <div @click="activeButton = 'phone'" class="big-button" :class="{active: activeButton === 'phone'}">
            <span>Phone</span>
            <font-awesome-icon class="absolute-center-h-v hidden lg:inline mr-1 cursor-pointer support-icon" :icon="['fas', 'phone']"/>

          </div>
        </div>

        <EmailSupport v-if="activeButton === 'email'"/>
        <PhoneSupport v-if="activeButton === 'phone'"/>
      </div>
    </div>

  </div>


</template>

<script>
  import LeftMenu from '~/components/technician/common-left-side-menu.vue'
  import EmailSupport from '~/components/support/email.vue'
  import PhoneSupport from '~/components/support/phone.vue'

  export default {
    layout: 'user-help',
    name: "support-index",
    components: {
      LeftMenu,
      EmailSupport,
      PhoneSupport
    },
    data: function () {
      return {
        activeButton: null
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
  .support-icon{
    @apply text-gray-400;
    font-size: 30px;
    height: 30px;
  }
  .big-buttons-container{
    width: 100%;

  }
  .big-button{
    @apply mt-5 relative shadow-md bg-white border border-solid border-gray-300 font-semibold text-gray-800 text-xl cursor-pointer;
    width: 170px;
    height: 100px;
  }
  .big-button span{
    @apply absolute bottom-0 left-0 p-2;
  }
  .big-button:hover .support-icon{
    @apply text-ideeza;
  }
  .big-button.active{
    @apply bg-ideeza;
  }
  .big-button.active span{
    @apply text-white;
  }
  .big-button.active .support-icon{
    @apply text-white;
  }
  @screen lg{
    .big-button span{
      @apply p-3;
    }
    .big-button{
      @apply text-2xl;
      width: 430px;
      height: 200px;
    }

    .support-icon{
     font-size: 50px;
      height: 50px;
    }

  }
  @screen xl{
    .big-button span{
      @apply p-5;
    }
    .big-button{
      @apply text-4xl;
    }
    .support-icon{
      font-size: 80px;
      height: 80px;
    }

  }

</style>
