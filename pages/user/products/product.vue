<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow">
      <div class="main-contents">
        <div class="p-5">
          <div class="bg-white shadow p-5">
          <div class="lg:flex justify-between items-center pb-3">
            <nuxt-link to="" class="border rounded-lg border-pink-600 px-8 py-3 text-pink-600">Go Back</nuxt-link>
          </div>
          <div class="">
            <h2 class="text-pink-900 mt-5 font-bold text-4xl">Lamborgini toy car</h2>
            <div class="flex mt-4">
              <div class="w-16 h-16 rounded-full overflow-hidden">
                <img src="https://randomuser.me/api/portraits/women/17.jpg">
              </div>
              <div class="pl-3">
                  <h3 class="text-pink-700 font-bold text-2xl">Alex Gordon</h3>
                  <p class="text-pink-700">Technican at Google</p>
              </div>
            </div>
          </div>

          <div class="lg:flex flex-wrap">
            <div class="w-6/12">
              <h2 class="text-pink-900 font-bold text-2xl mt-10 mb-8 btm-underline">Description</h2>
              <p class="text-pink-900">Curabitur varius fringilla est, sed rhoncus ligula sagittis vel. Suspendisse vel dapibus orci, volutpat bibendum lacus. Nullam cursus metus felis, at consectetur turpis aliquet non. Sed eu ante interdum, pellentesque ex quis, semper dolor.</p>

              <div class="flex text-pink-900 border-t border-b border-pink-200 py-3 my-5 text-sm">
                <div class="w-4/12">
                  <div class="inline-block px-2"><img src="~/static/images/like2.png" class="inline-block mr-2">Like</div>
                  <div class="inline-block px-2"><img src="~/static/images/share.png" class="inline-block mr-2">Share</div>
                </div>
                <div class="w-8/12">
                  <div class="inline-block px-2">121 Likes</div>
                  <div class="inline-block px-2">11 Comments</div>
                  <div class="inline-block px-2">11 Shares</div>
                </div>
              </div>

              <div class="flex mt-4">
                <div class="p-3">
                  <div class="w-16 h-16 rounded-full overflow-hidden">
                    <img src="https://randomuser.me/api/portraits/women/23.jpg">
                  </div>
                </div>
                <div>
                  <div class="p-3 bg-gray-300 rounded-lg">
                      <div class="flex">
                        <div class="flex-1">
                          <h3 class="text-gray-700 font-bold text-xl">Mike Tayson</h3>
                        </div>
                        <div class="flex-1 text-right">
                          3 min ago
                        </div>
                      </div>
                      <p class="text-gray-700 text-md">Technican at Google</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud</p>
                      <div class=" py-3">
                          <span class="inline-block">
                            <img src="~/static/images/like-min.png" class="inline-block mr-2"> 92 Likes</span>
                          <span class="inline-block">
                            <img src="~/static/images/comment.png" class="inline-block mr-2">92 comments</span>
                      </div>
                  </div>
                  <div class="flex mt-4">
                    <div class="p-3">
                      <div class="w-16 h-16 rounded-full overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/women/21.jpg">
                      </div>
                    </div>
                    <div>
                      <div class="p-3 bg-gray-300 rounded-lg">
                          <div class="flex">
                              <div class="flex-1">
                                <h3 class="text-gray-700 font-bold text-xl">Mike Tayson</h3>
                              </div>
                              <div class="flex-1 text-right">
                                3 min ago
                              </div>
                            </div>
                          <p class="text-gray-700 text-md">Technican at Google</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.</p>
                          <div class=" py-3">
                          <span class="inline-block">
                            <img src="~/static/images/like-min.png" class="inline-block mr-2"> 92 Likes</span>
                          <span class="inline-block">
                            <img src="~/static/images/comment.png" class="inline-block mr-2">92 comments</span>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex mt-4">
                    <div class="p-3">
                      <div class="w-16 h-16 rounded-full overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/women/23.jpg">
                      </div>
                    </div>
                    <div>
                      <div class="p-3 bg-gray-300 rounded-lg">
                          <div class="flex">
                            <div class="flex-1">
                              <h3 class="text-gray-700 font-bold text-xl">Mike Tayson</h3>
                            </div>
                            <div class="flex-1 text-right">
                              3 min ago
                            </div>
                          </div>
                          <p class="text-gray-700 text-md">Technican at Google</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.</p>
                          <div class=" py-3">
                          <span class="inline-block">
                            <img src="~/static/images/like-min.png" class="inline-block mr-2"> 92 Likes</span>
                          <span class="inline-block">
                            <img src="~/static/images/comment.png" class="inline-block mr-2">92 comments</span>
                      </div>
                      </div>
                    </div>
                  </div>

            </div>
            <div class="w-6/12 pl-3">
              <h2 class="text-pink-900 font-bold text-2xl mt-10 mb-8 btm-underline">Products</h2>
              <div class="flex mb-4">
                <div class="w-6/12 p-2">
                  <div class="shadow-lg"><img src="~/static/images/project-cover-1.png"></div>
                  <h2 class="text-pink-900 font-bold text-xl pt-3">Lamborghini Aventado Project </h2>
                  <p class="text-gray-700 text-md">Cover</p>
                </div>
                <div class="w-6/12 p-2">
                  <div class="shadow-lg"><img src="~/static/images/project-cover-2.png"></div>
                  <h2 class="text-pink-900 font-bold text-xl pt-3">Lamborghini Aventado Project</h2>
                  <p class="text-gray-700 text-md">Cover</p>
                </div>
              </div>
              <div class="flex mb-4">
                <div class="w-6/12 p-2">
                  <div class="shadow-lg"><img src="~/static/images/project-cover-3.png"></div>
                  <h2 class="text-pink-900 font-bold text-xl pt-3">Lamborghini Aventado Project </h2>
                  <p class="text-gray-700 text-md">Cover</p>
                </div>
                <div class="w-6/12 p-2">
                  <div class="shadow-lg"><img src="~/static/images/project-cover-4.png"></div>
                  <h2 class="text-pink-900 font-bold text-xl pt-3">Lamborghini Aventado Project</h2>
                  <p class="text-gray-700 text-md">Cover</p>
                </div>
              </div>
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
  };

</script>

<style scoped>
.btm-underline{
  position: relative;
}
.btm-underline:after{
  content: '';
  position: absolute;
  width: 150px;
  height: 3px;
  background:#febef0;
  bottom: -10px;
  left:0;
}
</style>
