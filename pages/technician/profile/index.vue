<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow">
      <div class="main-contents">
        <div class="md:mx-6 lg:flex">
          <div class="lg:w-2/3 lg:mr-3">
            <!--Agency Header-->
            <div class="p-8 shadow-lg bg-white mb-5">
              <div class="md:flex pb-5 lg:pb-10  border-b border-solid border-gray-300">
                <img class="mx-auto md:mx-0 md:mr-10 w-40" src="~/static/images/Business-Profile.png">
                <div class="text-center md:text-left">
                  <h2 class="text-xl text-gray-800 font-semibold">Moran Biton</h2>
                  <div class="text-lg text-gray-600">Technician</div>
                  <div class="text-lg text-gray-600">
                    <font-awesome-icon class="mr-3 h-4 inline-block" :icon="['fas', 'map-marker-alt']" />
                    New York, USA
                  </div>
                </div>
              </div>

              <!--Agency Details-->
              <div class="mt-5">

                <h1 class="text-black font-semibold text-xl">
                  Description
                </h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a augue id eros gravida condimentum.
                  Ut
                  ullamcorper mollis eros ac dictum. Morbi non varius felis, vehicula eleifend lorem. Sed ultrices
                  turpis
                  mollis mi scelerisque varius. Etiam viverra aliquam orci, sed mollis risus sodales non. Nulla quis
                  pellentesque elit. Integer vel odio nunc. Cras eu quam at orci congue ultrices. Quisque malesuada,
                  augue
                  in ultrices imperdiet, nisl tellus scelerisque velit.
                </p>

                <p>
                  Curabitur sit amet auctor nulla. Quisque maximus nisi mauris, a fringilla arcu molestie ut. Praesent
                  vitae
                  lacus finibus, facilisis nisl eget, rhoncus magna. Mauris consectetur semper tincidunt. Curabitur vel
                  sapien in ipsum blandit finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam
                  tincidunt tincidunt augue non consectetur. Nulla facilisi. Proin sodales diam vel justo auctor
                  lobortis
                  vitae id nisi.
                </p>

              </div>

              <!--Agency Stats-->
              <div class="mt-10 pt-10 flex flex-col lg:flex-row border-t border-solid border-gray-300">
                <div class="lg:w-1/4 p-1">
                  <h1 class="text-black font-semibold text-xl">
                    8
                  </h1>
                  <span class="text-gray-500  font-semibold">
                    Parts Created
                  </span>
                </div>
                <div class="lg:w-1/4 p-1">
                  <h1 class="text-black font-semibold text-xl">
                    5
                  </h1>
                  <span class="text-gray-500  font-semibold">
                    Solved Problems
                  </span>
                </div>
                <div class="lg:w-1/4 p-1">
                  <h1 class="text-black font-semibold text-xl">
                    3
                  </h1>
                  <span class="text-gray-500  font-semibold">
                    Reviewed Parts
                  </span>
                </div>
                <div class="lg:w-1/4 p-1">
                  <h1 class="text-black font-semibold text-xl">
                    November 17, 2018
                  </h1>
                  <span class="text-gray-500  font-semibold">
                    Member Since
                  </span>
                </div>
              </div>
            </div>
            <h1 class="text-2xl md:mx-3 text-gray-800 font-semibold my-5">Added Parts</h1>
            <hr>
            <div class="flex flex-wrap md:mx-3 mb-5 text-ideeza-dark font-semibold">
              <div class="mr-3 text-ideeza">Added Electronics</div>
              <div class="mr-3">Added Code</div>
              <div class="mr-3">Added Cover</div>
            </div>
            <div class="px-8 pt-8 mb-10 shadow-md bg-white">
              <div class="product-history-tile lg:flex justify-between">
                <div class="flex-shrink flex">
                  <img class="mr-10" src="~/static/images/Layercar.png">
                  <div>
                    <h1 class="text-black text-xl font-semibold">Lamborghini<br>
                      Aventado Project</h1>
                    <h3 class="text-gray-600 text-lg font-semibold">
                      Electronics + Cover
                    </h3>
                  </div>
                </div>
                <!--Feedback-->
                <div class="feed-back-container">
                  <span class="block text-base text-gray-600">Feedback</span>
                  <div class="flex items-center mt-2">
                    <div class="text-black text-xl font-semibold inline-block mr-3">5,0</div>
                    <div>
                      <img class="mr-1 inline" src="~/static/images/star.png">
                      <img class="mr-1 inline" src="~/static/images/star.png">
                      <img class="mr-1 inline" src="~/static/images/star.png">
                      <img class="mr-1 inline" src="~/static/images/star.png">
                      <img class="mr-1 inline" src="~/static/images/star.png">
                    </div>
                  </div>
                  <div class="mt-5 text-sm text-gray-600">
                    May 2018 - September 2018
                  </div>
                </div>
              </div>
              <div class="product-history-tile lg:flex justify-between">
                <div class="flex-shrink flex">
                  <img class="mr-10" src="~/static/images/Layercar.png">
                  <div>
                    <h1 class="text-black text-xl font-semibold">Lamborghini<br>
                      Aventado Project</h1>
                    <h3 class="text-gray-600 text-lg font-semibold">
                      Electronics + Cover
                    </h3>
                  </div>
                </div>
                <!--Feedback-->
                <div class="feed-back-container">
                  <span class="block text-base text-gray-600">Feedback</span>
                  <div class="flex items-center mt-2">
                    <div class="text-black text-xl font-semibold inline-block mr-3">5,0</div>
                    <div>
                      <img class="mr-1 inline" src="~/static/images/star.png">
                      <img class="mr-1 inline" src="~/static/images/star.png">
                      <img class="mr-1 inline" src="~/static/images/star.png">
                      <img class="mr-1 inline" src="~/static/images/star.png">
                      <img class="mr-1 inline" src="~/static/images/star.png">
                    </div>
                  </div>
                  <div class="mt-5 text-sm text-gray-600">
                    May 2018 - September 2018
                  </div>
                </div>
              </div>
              <hr>
              <div class="text-center text-grap-700 py-4 align-center px-3 font-bold font-lg">Load more +</div>
            </div>
          </div>
          <div class="lg:w-1/3  md:ml-3 mb-5">
            <!--Business Managers-->
            <div class="p-5 bg-white mt-10 lg:mt-0 shadow-lg">
              <h1 class="font-semibold text-gray-800 pb-3 border-b border-solid border-gray-300">Business
                Review Expertise</h1>
              <div class="font-semibold text-lg bg-white lg:p-1 xl:p-5">
                <div class="mt-5">Fabrication</div>
                <div class="mt-5">Assembly</div>
                <div class="mt-5">Dealer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>


</template>

<script>
  import LeftMenu from '~/components/technician/common-left-side-menu.vue'

  export default {
    layout: 'user',
    name: "agency-index",
    components: {
      LeftMenu
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
  p {
    @apply mt-5 text-base font-semibold text-gray-500;
  }

  .product-history-tile {
    @apply pt-5 pb-5 border-b border-solid border-gray-300;
  }

  .product-history-tile:last-child {
    @apply border-b-0;
  }

  .feed-back-container {
    width: 200px;
  }

</style>
