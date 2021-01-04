<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>

    <!-- Main Contents -->
    <div class="flex-grow ">
      <div class="main-contents">
        <h1 class="text-gray-800 text-2xl lg:text-4xl lg:mt-10 font-semibold">How can we help?</h1>
        <!--Search-->
        <div class="search-field border border-solid border-gray-400 bg-white flex">
          <div class="h-12 relative w-10">
            <font-awesome-icon class="ml-1 h-4 text-ideeza absolute-center-h-v" :icon="['fas', 'search']"/>
          </div>
          <input placeholder="Have a question? Enter a search term here..."
                 class="bg-white w-full outline-none h-12 text-gray-800 pr-3">
        </div>

        <!--Big Buttons-->
        <div class="big-buttons-container flex flex-wrap mt-8 lg:mt-16 xl:mt-32">
          <div class="big-button mr-5 xl:mt-0 lg:mt-5">
            <span class="text-center absolute-center-v w-full block">Getting Started</span>
          </div>
          <div class="big-button mr-5">
            <span class="text-center absolute-center-v w-full block">Knowledge Base</span>
          </div>
          <div class="big-button mr-5">
            <span class="text-center absolute-center-v w-full block">Forum</span>
          </div>
          <div class="big-button mr-5">
            <span class="text-center absolute-center-v w-full block">News</span>
          </div>
        </div>

        <!--FAQ's-->
        <div class="mt-20">
          <h1 class="text-gray-800 lg:text-4xl lg:mt-10 font-semibold pb-5 border-b heading-border">Frequently Asked
            Questions</h1>
        </div>

        <div class="faq-container lg:flex flex-wrap">
          <div class="faq-wrapper mt-5">
            <h1 class="border-b heading-border text-gray-600 lg:text-xl lg:mt-10 font-semibold pb-5">Shipping</h1>
            <p>
              Lorem ipsum dolores s consectetur
              adipisicing elit, sed do eismod tempor ?
            </p>
            <p>
              Sed do eiusmod temporis as alasto ?
            </p>
            <p>
              Labore et dolore, aliqua ut enima dodis
              astala a somuniti?
            </p>

            <div class="mt-5 text-ideeza flex items-center">
              <font-awesome-icon class="mr-4 h-4 cursor-pointer" :icon="['fas', 'long-arrow-alt-right']"/>
              View all
            </div>
          </div>
          <div class="faq-wrapper mt-5">
            <h1 class="border-b heading-border text-gray-600 lg:text-xl lg:mt-10 font-semibold pb-5">Top questions</h1>
            <p>
              Lorem ipsum dolores s consectetur
              adipisicing elit, sed do eismod tempor ?
            </p>
            <p>
              Sed do eiusmod temporis as alasto ?
            </p>
            <p>
              Labore et dolore, aliqua ut enima dodis
              astala a somuniti?
            </p>

            <div class="mt-5 text-ideeza flex items-center">
              <font-awesome-icon class="mr-4 h-4 cursor-pointer" :icon="['fas', 'long-arrow-alt-right']"/>
              View all
            </div>
          </div>
          <div class="faq-wrapper mt-5">
            <h1 class="border-b heading-border text-gray-600 lg:text-xl lg:mt-10 font-semibold pb-5">Your payout
              status</h1>
            <p>
              Lorem ipsum dolores s consectetur
              adipisicing elit, sed do eismod tempor ?
            </p>
            <p>
              Sed do eiusmod temporis as alasto ?
            </p>
            <p>
              Labore et dolore, aliqua ut enima dodis
              astala a somuniti?
            </p>

            <div class="mt-5 text-ideeza flex items-center">
              <font-awesome-icon class="mr-4 h-4 cursor-pointer" :icon="['fas', 'long-arrow-alt-right']"/>
              View all
            </div>
          </div>
          <div class="faq-wrapper mt-5">
            <h1 class="border-b heading-border text-gray-600 lg:text-xl lg:mt-10 font-semibold pb-5">Pricing &
              availability</h1>
            <p>
              Lorem ipsum dolores s consectetur
              adipisicing elit, sed do eismod tempor ?
            </p>
            <p>
              Sed do eiusmod temporis as alasto ?
            </p>
            <p>
              Labore et dolore, aliqua ut enima dodis
              astala a somuniti?
            </p>

            <div class="mt-5 text-ideeza flex items-center">
              <font-awesome-icon class="mr-4 h-4 cursor-pointer" :icon="['fas', 'long-arrow-alt-right']"/>
              View all
            </div>
          </div>
          <div class="faq-wrapper mt-5">
            <h1 class="border-b heading-border text-gray-600 lg:text-xl lg:mt-10 font-semibold pb-5">Popular
              questions</h1>
            <p>
              Lorem ipsum dolores s consectetur
              adipisicing elit, sed do eismod tempor ?
            </p>
            <p>
              Sed do eiusmod temporis as alasto ?
            </p>
            <p>
              Labore et dolore, aliqua ut enima dodis
              astala a somuniti?
            </p>

            <div class="mt-5 text-ideeza flex items-center">
              <font-awesome-icon class="mr-4 h-4 cursor-pointer" :icon="['fas', 'long-arrow-alt-right']"/>
              View all
            </div>
          </div>
          <div class="faq-wrapper mt-5">
            <h1 class="border-b heading-border text-gray-600 lg:text-xl lg:mt-10 font-semibold pb-5">Electronics</h1>
            <p>
              Lorem ipsum dolores s consectetur
              adipisicing elit, sed do eismod tempor ?
            </p>
            <p>
              Sed do eiusmod temporis as alasto ?
            </p>
            <p>
              Labore et dolore, aliqua ut enima dodis
              astala a somuniti?
            </p>

            <div class="mt-5 text-ideeza flex items-center">
              <font-awesome-icon class="mr-4 h-4 cursor-pointer" :icon="['fas', 'long-arrow-alt-right']"/>
              View all
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>


</template>

<script>
  import LeftMenu from '~/components/technician/common-left-side-menu.vue'
  import Search from '~/components/form/search.vue'

  export default {
    layout: 'user-help',
    name: "help-index",
    components: {
      LeftMenu,
      Search
    },
    data: function () {
      return {}
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
  .search-field{
    width: 100%;
    max-width: 1000px;
  }
  .big-buttons-container{
    width: 100%;
  }
  .big-button{
    @apply mt-5 relative shadow-md bg-white border border-solid border-gray-300 font-semibold text-gray-800 text-xl cursor-pointer;
    width: 170px;
    height: 100px;
  }

  .faq-container{
    width: 100%;
    max-width: 1050px;
  }
  .faq-wrapper{
    width: 100%;
    max-width: 300px;
  }

  @screen lg{
    .big-button{
      @apply text-2xl;
      width: 250px;
      height: 250px;
    }

    .faq-wrapper{
      max-width: 320px;
      margin-right: 30px;
    }
    .faq-wrapper p{
      @apply my-5;
    }

  }

  @screen xl{
    .big-button{
      @apply text-3xl;
      width: 290px;
      height: 290px;
    }
  }
</style>
