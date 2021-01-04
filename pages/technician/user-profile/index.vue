<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex builder-panel main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>
    <!-- Main Contents -->
    <div class="flex-grow lg:p-10">
      <div class="main-contents lg:flex p-2 lg:p-5 xl:p-20 bg-white shadow-md">
        <div class="left-panel">
          <img class="w-full" src="https://i.pravatar.cc/400?img=12" alt="">

          <div class="mt-10 mb-5 semi-border  relative">
            <span class="font-semibold text-gray-500 pr-3 bg-white">SOCIAL MEDIA</span>
          </div>
          <div class="">
            <font-awesome-icon class="mr-2 h-6 text-gray-500 text-4xl hover:text-gray-800 cursor-pointer" :icon="['fab', 'facebook-square']"/>
            <font-awesome-icon class="mr-2 h-6 text-gray-500 text-4xl hover:text-gray-800 cursor-pointer" :icon="['fab', 'linkedin']"/>
            <font-awesome-icon class="mr-2 h-6 text-gray-500 text-4xl hover:text-gray-800 cursor-pointer" :icon="['fab', 'behance-square']"/>
            <font-awesome-icon class="mr-2 h-6 text-gray-500 text-4xl hover:text-gray-800 cursor-pointer" :icon="['fab', 'dribbble-square']"/>
          </div>

          <div class="mt-10 mb-5 semi-border  relative">
            <span class="font-semibold text-gray-500 pr-3 bg-white">SKILLS</span>
          </div>
          <div class="mt-10">
            <span class="font-semibold text-ideeza-dark block text-lg">
              Product Design
            </span>
            <span class="font-semibold text-ideeza-dark block text-lg">
              Electronics
            </span>
            <span class="font-semibold text-ideeza-dark block text-lg">
              3D Modeling
            </span>
            <span class="font-semibold text-ideeza-dark block text-lg">
              Prototyping
            </span>
            <span class="font-semibold text-ideeza-dark block text-lg">
              3D Max
            </span>
            <span class="font-semibold text-ideeza-dark block text-lg">
              AutoCad
            </span>
          </div>
        </div>
        <div class="lg:ml-20 flex-grow">
          <div class="w-full flex justify-between items-top">
            <div class="lg:flex items-top">
              <div class="text-3xl font-semibold">
                John Doe
                <span class="block font-semibold text-xl text-ideeza-dark">Product Designer</span>
              </div>
              <div class="lg:ml-10 text-gray-500 font-semibold text-xl">
                <font-awesome-icon class="mr-3 h-6" :icon="['fas', 'map-marker-alt']"/>
                New york, NY
              </div>
            </div>
            <div>
              <span class="text-gray-500 font-semibold">Report user</span>
            </div>
          </div>
          <div class="lg:mt-20">
            <span class="font-semibold text-gray-500 block">RATINGS</span>
            <div class="flex items-center">
              <span class="text-gray-800 font-semibold text-3xl">4,0</span>
              <img class="rating-star" src="~/static/images/star.png" alt="">
              <img class="rating-star" src="~/static/images/star.png" alt="">
              <img class="rating-star" src="~/static/images/star.png" alt="">
              <img class="rating-star" src="~/static/images/star.png" alt="">
              <img class="rating-star" src="~/static/images/star-gray.png" alt="">
            </div>
          </div>
          <div class="lg:mt-20 lg:flex items-center">
            <div class=" flex items-center cursor-pointer text-gray-600 text-xl hover:text-gray-800 font-semibold">
              <font-awesome-icon class="mr-3 h-5" :icon="['fas', 'envelope']"/>
              <span>Send message</span>
            </div>
            <div class="lg:mx-10">
              <button class="btn btn-normal btn-text-bold text-gray-600 px-10 py-4"><font-awesome-icon class="mr-3 h-5" :icon="['fas', 'check']"/> Contacts</button>
            </div>
            <div class="lg:mx-10 hidden">
              <button class="btn btn-normal btn-text-bold text-gray-600 px-10 py-4">Add to Contacts</button>
            </div>
            <div class="hidden">
              <button class="btn btn-normal btn-text-bold text-gray-600 px-10 py-4">Send Agency Invitation</button>
            </div>
          </div>

          <!--Tabs-->
          <div class="tabs-container z-10 relative flex lg:mt-20">
            <div @click="tabItem='timeline'" class="tab-item" :class="{active: tabItem === 'timeline', 'border-bot': tabItem !== 'timeline'}"><font-awesome-icon class="mr-3 h-5" :icon="['fas', 'eye']"/> Timeline</div>
            <div @click="tabItem='about'" class="tab-item" :class="{active: tabItem === 'about', 'border-bot': tabItem !== 'about'}"><font-awesome-icon class="mr-3 h-5" :icon="['fas', 'user']"/> About</div>
            <div @click="tabItem='projects'" class="tab-item" :class="{active: tabItem === 'projects', 'border-bot': tabItem !== 'projects'}"><font-awesome-icon class="mr-3 h-5" :icon="['fas', 'lightbulb']"/> Projects</div>
            <div @click="tabItem='reviews'" class="tab-item" :class="{active: tabItem === 'reviews', 'border-bot': tabItem !== 'reviews'}"><font-awesome-icon class="mr-3 h-5" :icon="['fas', 'star']"/> Reviews</div>
          </div>
          <!--Time line-->
          <div v-if="tabItem === 'timeline'" class="mt-5">
            <!--New Feed-->
            <div class="mb-10">

              <div class="flex-grow bg-white border border-solid border-gray-700 p-5">
                <div class="text-ideeza font-semibold text-lg mb-5">
                  <font-awesome-icon class="mr-1 h-4 inline-block" :icon="['fas', 'pen']"/>
                  Share Project
                </div>
                <div class="bg-gray-200 py-5 px-3 flex justify-center items-center">
                  <div class="flex-grow">
                    <input class="w-full px-1 bg-gray-200 text-lg text-gray-600 font-semibold outline-none" placeholder="Lorem ipsum dolores sit ?" >
                  </div>
                  <div>
                    <font-awesome-icon class="mr-1 h-4 text-lg inline-block text-gray-500 hover:text-gray-600 cursor-pointer" :icon="['fas', 'paperclip']"/>
                    <font-awesome-icon class="mr-1 h-4 text-lg inline-block text-gray-500 hover:text-gray-600 cursor-pointer" :icon="['fas', 'camera']"/>
                  </div>

                </div>
              </div>
            </div>


            <div class="flex mb-10 ">

              <div class="flex-grow bg-white border border-solid border-gray-700 p-5">
                <div class="text-gray-600 font-semibold text-lg mb-5 flex justify-between">
                  <div>John Doe <span class="font-normal">likes a project</span> • <span class="font-normal text-xs">2 hours ago</span></div>
                  <div>
                    <font-awesome-icon class="mr-1 h-6 text-lg inline-block text-gray-500 hover:text-gray-600 cursor-pointer" :icon="['fas', 'ellipsis-h']"/>
                  </div>
                </div>
                <div class="bg-gray-200">
                  <img class="w-full object-fit object-center" src="~/static/images/car-big.png" alt="">
                </div>
                <div class="mt-10">
                  <button class="btn pill-button px-6 mr-3">Like</button>
                  <button class="btn pill-button px-6 mr-3">Share</button>
                  <button class="btn pill-button px-6 mr-3">Comment</button>
                </div>
              </div>
            </div>

            <div class="flex mb-10">

              <div class="flex-grow bg-white border border-solid border-gray-700 py-5">
                <div class="text-gray-600 font-semibold text-lg mb-5 flex justify-between mx-5">
                  <div>Sarah Doe <span class="font-normal">add a new project</span> <span class="text-gray-800">Retro Headphones</span> • <span class="font-normal text-xs">3 weeks ago</span></div>
                  <div>
                    <font-awesome-icon class="mr-1 h-6 text-lg inline-block text-gray-500 hover:text-gray-600 cursor-pointer" :icon="['fas', 'ellipsis-h']"/>
                  </div>
                </div>
                <div class="bg-gray-200 mx-5">
                  <img class="w-full object-fit object-center" src="~/static/images/headphone-big.png" alt="">
                </div>
                <div class="mt-10 lg:flex mx-5">
                  <img class="mt-2 mr-2 lg:mt-0" src="~/static/images/headphone-1.png" alt="">
                  <img class="mt-2 lg:mt-0" src="~/static/images/headphone-2.png" alt="">
                </div>
                <div class="my-10 mx-5">
                  <button class="btn pill-button pill-button--ideeza px-3 lg:px-6 mr-1 lg:mr-3">Don't Like</button>
                  <button class="btn pill-button px-3 lg:px-6 mr-1 lg:mr-3">Share</button>
                  <button class="btn pill-button px-3 lg:px-6 mr-1 lg:mr-3">Comment</button>
                </div>

                <div class="text-gray-600 text-lg border-t border-b border-solid border-gray-300 py-5 px-5">
                  <span class="font-semibold">You</span> and <span class="font-semibold">35 others</span> like this
                </div>

                <!--Comments-->
                <div class="border-b border-solid border-gray-300 py-5 px-5">
                  <div class="flex">
                    <div class="mr-10 w-16">
                      <img class="feed-comment-avatar rounded-full" src="https://randomuser.me/api/portraits/men/15.jpg" alt="">
                    </div>
                    <div >
                      <div class="text-gray-600 text-lg">
                        <span class="mr-10 inline-block font-semibold">William Doe</span> Great product, love the design and function of it,
                        <br>
                        pcb card is beautifully arranged... keep on going :)
                      </div>
                      <div class="text-base text-gray-600 mt-5">
                        <span class="text-ideeza">Like</span> • <span class="text-ideeza">Reply</span> • <span class="text-sm">2 week ago</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!--Write Comments-->
                <div class="mt-10 mx-5 bg-gray-200 p-10">
                  <input class="bg-gray-200 text-gray-600 text-semibold text-lg outline-none" placeholder="Write your comment...">
                </div>

              </div>
            </div>
          </div>

          <!--About-->
          <div class="mt-5" v-if="tabItem === 'about'">
            <h1 class="text-gray-500 font-semibold txt-xl my-10">CONTACT INFORMATION</h1>
            <div class="flex mb-5 font-semibold text-lg">
              <div class="heading-contact">Phone:</div>
              <div class="text-ideeza-dark">+1 22 333 4567</div>
            </div>
            <div class="flex mb-5 font-semibold text-lg">
              <div class="heading-contact">Address:</div>
              <div class="">111 E 11th Street<br>New York, NY</div>
            </div>
            <div class="flex mb-5 font-semibold text-lg">
              <div class="heading-contact">Email:</div>
              <div class="text-ideeza-dark">john@doe.com</div>
            </div>
            <div class="flex mb-5 font-semibold text-lg">
              <div class="heading-contact">Website:</div>
              <div class="text-ideeza-dark">www.johndoe.com</div>
            </div>

            <h1 class="text-gray-500 font-semibold txt-xl my-10">BASIC INFORMATION</h1>
            <div class="flex mb-5 font-semibold text-lg">
              <div class="heading-contact">Birthday:</div>
              <div class="">June 21, 1998</div>
            </div>
            <div class="flex mb-5 font-semibold text-lg">
              <div class="heading-contact">Gender:</div>
              <div class="">Male</div>
            </div>
          </div>

          <!--Projects-->
          <div class="mt-5 flex flex-wrap" v-if="tabItem === 'projects'">
            <img class="project-image" src="~/static/images/dron-8.png" alt="">
            <img class="project-image" src="~/static/images/dron-8.png" alt="">
            <img class="project-image" src="~/static/images/dron-8.png" alt="">
          </div>

          <!--Reviews-->
          <div class="mt-5" v-if="tabItem === 'reviews'">
            <div class="mb-10 mt-5">
              <div class="flex justify-between items-center w-full">
                <div class="flex items-center">
                  <img class="feed-avatar w-16 rounded-full mr-5" src="https://randomuser.me/api/portraits/women/31.jpg" alt="">
                  <div class=""><span class="font-semibold text-ideeza-dark inline-block mr-5">Jane Doe</span> <span class="font-sm text-gray-500">Reviewed 30 days ago</span></div>
                </div>
                <div class="flex items-center text-gray-500 text-sm hover:text-gray-800 cursor-pointer">
                  <font-awesome-icon class="mr-2 h-4" :icon="['fas', 'flag']"/>
                  Report
                </div>

              </div>
              <div class="mt-5 border rounded-lg border-solid border-gray-500 p-5 text-sm">
                <div class="flex justify-between">
                  <div class="text-lg font-semibold">"Perfect innovative gift of my dreams"</div>
                  <div>
                    <img class="rating-star" src="~/static/images/star.png" alt="">
                    <img class="rating-star" src="~/static/images/star.png" alt="">
                    <img class="rating-star" src="~/static/images/star.png" alt="">
                    <img class="rating-star" src="~/static/images/star.png" alt="">
                    <img class="rating-star" src="~/static/images/star.png" alt="">
                  </div>
                </div>
                <p class="font-sm my-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt metus enim, in elementum sem egestas nec. Suspendisse quis diam lectus. In a ipsum risus. Vivamus a nibh et risus iaculis ultricies at a enim. Aenean tristique leo vel posuere fringilla. Duis tempus velit in eros dignissim accumsan. Quisque massa leo, volutpat facilisis pharetra in, porta a lorem.
                </p>
              </div>
            </div>

            <div class="mb-10 mt-5">
              <div class="flex justify-between items-center w-full">
                <div class="flex items-center">
                  <img class="feed-avatar w-16 rounded-full mr-5" src="https://randomuser.me/api/portraits/women/32.jpg" alt="">
                  <div class=""><span class="font-semibold text-ideeza-dark inline-block mr-5">Shane Doe</span> <span class="font-sm text-gray-500">Reviewed 30 days ago</span></div>
                </div>
                <div class="flex items-center text-gray-500 text-sm hover:text-gray-800 cursor-pointer">
                  <font-awesome-icon class="mr-2 h-4" :icon="['fas', 'flag']"/>
                  Report
                </div>

              </div>
              <div class="mt-5 border rounded-lg border-solid border-gray-500 p-5 text-sm">
                <div class="flex justify-between">
                  <div class="text-lg font-semibold">"Perfect innovative gift of my dreams"</div>
                  <div>
                    <img class="rating-star" src="~/static/images/star.png" alt="">
                    <img class="rating-star" src="~/static/images/star.png" alt="">
                    <img class="rating-star" src="~/static/images/star.png" alt="">
                    <img class="rating-star" src="~/static/images/star.png" alt="">
                    <img class="rating-star" src="~/static/images/star.png" alt="">
                  </div>
                </div>
                <p class="font-sm my-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt metus enim, in elementum sem egestas nec. Suspendisse quis diam lectus. In a ipsum risus. Vivamus a nibh et risus iaculis ultricies at a enim. Aenean tristique leo vel posuere fringilla. Duis tempus velit in eros dignissim accumsan. Quisque massa leo, volutpat facilisis pharetra in, porta a lorem.
                </p>
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
      layout: 'technician',
      name: "profile-index",
      components: {
        LeftMenu,
      },
      data: function() {
        return {
          tabItem: 'timeline'
        }
      },
      computed: {
        leftMenu () {
          return this.$store.state.usermenu.openLeftMenu;
        }
      }
    }
</script>

<style scoped>

  .profile-panel{
    width: 100%;
    max-width: 1533px;
  }
  .left-panel{
    width: 100%;
  }
  .semi-border{
    @apply z-10;
  }

  .semi-border:before {
    @apply border-t-4 border-solid border-gray-200;
    content:"";
    margin: 0 auto; /* this centers the line to the full width specified */
    position: absolute; /* positioning must be absolute here, and relative positioning must be applied to the parent */
    left: 0; right: 0; bottom: 4px;
    z-index: -1;
  }
  .rating-star{
    @apply inline ml-3;
    width: 28px;
    height: 28px;
  }
  .tab-item{
    @apply cursor-pointer z-50 bg-white px-5 py-5 font-semibold text-xl text-gray-500 flex items-center;
  }
  .tab-item.border-bot{
    border-bottom: 4px solid #edf2f7;
  }
  .tab-item.active{
    @apply border-t-4 border-l-4 border-r-4 border-solid border-gray-200 text-ideeza;
  }
  .tabs-container:before {
    @apply border-t-4 border-solid border-gray-200;
    content:"";
    margin: 0 auto; /* this centers the line to the full width specified */
    position: absolute; /* positioning must be absolute here, and relative positioning must be applied to the parent */
    left: 0; right: 0; bottom: 0;
    z-index: -1;
  }
  .heading-contact{
    width: 150px;
  }
  .project-image{
    @apply mr-2 mb-2;
    max-width: 285px;
  }
  @screen lg{
    .left-panel{
      max-width: 366px;
    }
  }
</style>
