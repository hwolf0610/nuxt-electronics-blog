<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow">
      <div class="main-contents">
        <div class="lg:flex">
          <div class="lg:w-3/4 lg:mr-3 p-8 shadow-md bg-white">
            <!--Agency Header-->
            <div class="md:flex pb-5 lg:pb-0 border-b border-solid border-gray-300">
              <img class="mx-auto md:mx-0 md:mr-10" src="~/static/images/agency-icon.png" />
              <div class="text-center md:text-left">
                <h2 class="text-xl text-gray-800 font-semibold">Soft Inncorporation L.L.C</h2>
                <div class="text-lg text-gray-600">Electronics & 3D Modelling</div>
                <div class="text-lg text-gray-600">
                  <font-awesome-icon
                    class="mr-3 h-4 inline-block"
                    :icon="['fas', 'map-marker-alt']"
                  />New York, USA
                </div>
              </div>
            </div>

            <!--Agency Details-->
            <div class="mt-5">
              <h1 class="text-black font-semibold text-xl">Agency Description</h1>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a augue id eros gravida condimentum.
                Ut
                ullamcorper mollis eros ac dictum. Morbi non varius felis, vehicula eleifend lorem. Sed ultrices turpis
                mollis mi scelerisque varius. Etiam viverra aliquam orci, sed mollis risus sodales non. Nulla quis
                pellentesque elit. Integer vel odio nunc. Cras eu quam at orci congue ultrices. Quisque malesuada, augue
                in ultrices imperdiet, nisl tellus scelerisque velit.
              </p>

              <p>
                Curabitur sit amet auctor nulla. Quisque maximus nisi mauris, a fringilla arcu molestie ut. Praesent
                vitae
                lacus finibus, facilisis nisl eget, rhoncus magna. Mauris consectetur semper tincidunt. Curabitur vel
                sapien in ipsum blandit finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam
                tincidunt tincidunt augue non consectetur. Nulla facilisi. Proin sodales diam vel justo auctor lobortis
                vitae id nisi.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a augue id eros gravida condimentum.
                Ut
                ullamcorper mollis eros ac dictum. Morbi non varius felis, vehicula eleifend lorem. Sed ultrices turpis
                mollis mi scelerisque varius. Etiam viverra aliquam orci, sed mollis risus sodales non. Nulla quis
                pellentesque elit. Integer vel odio nunc. Cras eu quam at orci congue ultrices. Quisque malesuada, augue
                in ultrices imperdiet, nisl tellus scelerisque velit.
              </p>

              <p>
                Curabitur sit amet auctor nulla. Quisque maximus nisi mauris, a fringilla arcu molestie ut. Praesent
                vitae
                lacus finibus, facilisis nisl eget, rhoncus magna. Mauris consectetur semper tincidunt. Curabitur vel
                sapien in ipsum blandit finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam
                tincidunt tincidunt augue non consectetur. Nulla facilisi. Proin sodales diam vel justo auctor lobortis
                vitae id nisi.
              </p>
            </div>

            <!--Agency Stats-->
            <div
              class="mt-10 pt-10 flex flex-col lg:flex-row border-t border-solid border-gray-300"
            >
              <div class="lg:w-1/4 p-1">
                <h1 class="text-black font-semibold text-xl">8</h1>
                <span class="text-gray-500 font-semibold">Finished Products</span>
              </div>
              <div class="lg:w-1/4 p-1">
                <h1 class="text-black font-semibold text-xl">5</h1>
                <span class="text-gray-500 font-semibold">Current Members</span>
              </div>
              <div class="lg:w-1/4 p-1">
                <h1 class="text-black font-semibold text-xl">3</h1>
                <span class="text-gray-500 font-semibold">Active Jobs</span>
              </div>
              <div class="lg:w-1/4 p-1">
                <h1 class="text-black font-semibold text-xl">November 17, 2018</h1>
                <span class="text-gray-500 font-semibold">Member Since</span>
              </div>
            </div>
          </div>
          <div class="lg:w-2/6">
            <!--Business Managers-->
            <div class="p-5 bg-white mt-10 lg:mt-0">
              <h1
                class="font-semibold text-gray-800 pb-3 mb-3 border-b border-solid border-gray-300"
              >
                Business
                Managers
              </h1>
            </div>
            <div class="flex justify-between items-center bg-white lg:p-1 xl:p-5">
              <div class="flex items-center">
                <img
                  class="h-10 w-10 md:h-14 md:w-14 rounded-full mr-3"
                  src="https://randomuser.me/api/portraits/men/5.jpg"
                />
                <div class="text-left mr-3">
                  <h2 class="font-semibold text-gray-800">Erin Lindford</h2>
                  <div class="text-gray-600">Manager</div>
                </div>
              </div>

              <nuxt-link to="/user/messages" class="btn btn-normal px-3 py-2">
                <font-awesome-icon class="mr-1 h-4" :icon="['fas', 'envelope']" />Message
              </nuxt-link>
            </div>

            <!--Agency Menvers-->
            <div class="p-5 bg-white mt-10 lg:mt-0">
              <h1
                class="font-semibold text-gray-800 pb-3 mb-3 border-b border-solid border-gray-300"
              >
                Agency
                Members
              </h1>
            </div>
            <div class="flex justify-between items-center bg-white lg:p-1 xl:p-5">
              <div class="flex items-center">
                <img
                  class="h-10 w-10 md:h-14 md:w-14 rounded-full mr-3"
                  src="https://randomuser.me/api/portraits/men/10.jpg"
                />
                <div class="text-left mr-3">
                  <h2 class="font-semibold text-gray-800">John Doe</h2>
                  <div class="text-gray-600">Product Manager</div>
                </div>
              </div>

              <nuxt-link to="/user/messages" class="btn btn-normal px-1 py-1">
                <font-awesome-icon class="mr-1 h-4" :icon="['fas', 'envelope']" />Message
              </nuxt-link>
            </div>
            <div class="flex justify-between items-center bg-white lg:p-1 xl:p-5">
              <div class="flex items-center">
                <img
                  class="h-10 w-10 md:h-14 md:w-14 rounded-full mr-3"
                  src="https://randomuser.me/api/portraits/men/10.jpg"
                />
                <div class="text-left mr-3">
                  <h2 class="font-semibold text-gray-800">John Doe</h2>
                  <div class="text-gray-600">Product Manager</div>
                </div>
              </div>

              <nuxt-link to="/user/messages" class="btn btn-normal px-1 py-1">
                <font-awesome-icon class="mr-1 h-4" :icon="['fas', 'envelope']" />Message
              </nuxt-link>
            </div>
            <div class="flex justify-between items-center bg-white lg:p-1 xl:p-5">
              <div class="flex items-center">
                <img
                  class="h-10 w-10 md:h-14 md:w-14 rounded-full mr-3"
                  src="https://randomuser.me/api/portraits/men/10.jpg"
                />
                <div class="text-left mr-3">
                  <h2 class="font-semibold text-gray-800">John Doe</h2>
                  <div class="text-gray-600">Product Manager</div>
                </div>
              </div>

              <nuxt-link to="/user/messages" class="btn btn-normal px-1 py-1">
                <font-awesome-icon class="mr-1 h-4" :icon="['fas', 'envelope']" />Message
              </nuxt-link>
            </div>
            <div class="flex justify-between items-center bg-white lg:p-1 xl:p-5">
              <div class="flex items-center">
                <img
                  class="h-10 w-10 md:h-14 md:w-14 rounded-full mr-3"
                  src="https://randomuser.me/api/portraits/men/10.jpg"
                />
                <div class="text-left mr-3">
                  <h2 class="font-semibold text-gray-800">John Doe</h2>
                  <div class="text-gray-600">Product Manager</div>
                </div>
              </div>

              <nuxt-link to="/user/messages" class="btn btn-normal px-1 py-1">
                <font-awesome-icon class="mr-1 h-4" :icon="['fas', 'envelope']" />Message
              </nuxt-link>
            </div>
          </div>
        </div>

        <!--History & Feedback-->
        <h1 class="text-2xl text-gray-800 font-semibold mt-20 mb-10">Product History & Feedback</h1>
        <div class="p-8 mb-10 shadow-md bg-white lg:w-4/6">
          <div class="product-history-tile lg:flex justify-between">
            <div class="flex-shrink flex">
              <img class="mr-10" src="~/static/images/Layercar.png" />
              <div>
                <h1 class="text-black text-xl font-semibold">
                  Lamborghini
                  <br />Aventado Project
                </h1>
                <h3 class="text-gray-600 text-lg font-semibold">Electronics + Cover</h3>
              </div>
            </div>
            <!--Feedback-->
            <div class="feed-back-container">
              <span class="block text-base text-gray-600">Feedback</span>
              <div class="flex items-center mt-2">
                <div class="text-black text-xl font-semibold inline-block mr-3">5,0</div>
                <div>
                  <img class="mr-1 inline" src="~/static/images/star.png" />
                  <img class="mr-1 inline" src="~/static/images/star.png" />
                  <img class="mr-1 inline" src="~/static/images/star.png" />
                  <img class="mr-1 inline" src="~/static/images/star.png" />
                  <img class="mr-1 inline" src="~/static/images/star.png" />
                </div>
              </div>
              <div class="mt-5 text-sm text-gray-600">May 2018 - September 2018</div>
            </div>
          </div>
          <div class="product-history-tile lg:flex justify-between">
            <div class="flex-shrink flex">
              <img class="mr-10" src="~/static/images/Layercar.png" />
              <div>
                <h1 class="text-black text-xl font-semibold">
                  Lamborghini
                  <br />Aventado Project
                </h1>
                <h3 class="text-gray-600 text-lg font-semibold">Electronics + Cover</h3>
              </div>
            </div>
            <!--Feedback-->
            <div class="feed-back-container">
              <span class="block text-base text-gray-600">Feedback</span>
              <div class="flex items-center mt-2">
                <div class="text-black text-xl font-semibold inline-block mr-3">5,0</div>
                <div>
                  <img class="mr-1 inline" src="~/static/images/star.png" />
                  <img class="mr-1 inline" src="~/static/images/star.png" />
                  <img class="mr-1 inline" src="~/static/images/star.png" />
                  <img class="mr-1 inline" src="~/static/images/star.png" />
                  <img class="mr-1 inline" src="~/static/images/star.png" />
                </div>
              </div>
              <div class="mt-5 text-sm text-gray-600">May 2018 - September 2018</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftMenu from "~/components/user/common-left-side-menu.vue";

export default {
  middleware: 'auth',
  layout: "user",
  name: "agency-index",
  components: {
    LeftMenu
  },
  data: function() {
    return {};
  },
  computed: {
    leftMenu() {
      return this.$store.state.usermenu.openLeftMenu;
    }
  },
  mounted() {},
  methods: {}
};
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
