<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>

    <!-- Main Contents -->
    <div class="flex-grow">

      <div class="main-contents">
        <div class="projects-container">
          <div class="lg:flex justify-between items-center pb-3">
            <h1 class="text-xl text-gray-800 font-semibold ">My projects</h1>
            <div class="hidden lg:flex items-center">
              <div class="text-lg">view</div>
              <div class="ml-3">
                <font-awesome-icon @click="longview = true" class="mr-1 h-4 cursor-pointer text-gray-400"
                                   :class="{'text-ideeza': longview}" :icon="['fas', 'bars']"/>
              </div>
              <div class="ml-3">
                <font-awesome-icon @click="longview = false" class="mr-1 h-4 cursor-pointer text-gray-400"
                                   :class="{'text-ideeza': !longview}" :icon="['fas', 'th-large']"/>
              </div>
            </div>
          </div>

          <div class="lg:flex flex-wrap justify-between">
            <div :class="{'w-48': !longview}"
                 class="project-item-container w-full border border-solid border-ideeza mt-12">
              <div class="lg:flex">
                <div class="lg:mr-10">
                  <div class="project-item-image mx-auto">
                    <img class="w-full mx-auto" src="~/static/images/Layercar.png" alt="">
                    <div class="text-sm text-gray-500 mt-3">Electronics + Cover</div>
                  </div>
                </div>
                <div class="flex-grow">
                  <div class="flex justify-between text-gray-800 text-xl font-semibold">
                    <span>Audi</span>
                    <span>$20,000</span>
                  </div>
                  <div>
                    <font-awesome-icon class="mr-1 h-10 lg:text-2xl cursor-pointer text-yellow-600"
                                       :icon="['fas', 'star']"/>
                    <font-awesome-icon class="mr-1 h-10 lg:text-2xl cursor-pointer text-yellow-600"
                                       :icon="['fas', 'star']"/>
                    <font-awesome-icon class="mr-1 h-10 lg:text-2xl cursor-pointer text-yellow-600"
                                       :icon="['fas', 'star']"/>
                    <font-awesome-icon class="mr-1 h-10 lg:text-2xl cursor-pointer text-yellow-600"
                                       :icon="['fas', 'star']"/>
                    <font-awesome-icon class="mr-1 h-10 lg:text-2xl cursor-pointer text-yellow-600"
                                       :icon="['fas', 'star']"/>
                  </div>
                  <div class="mt-5 text-gray-500">
                    Sed in porta nunc, a interdum massa. Donec elementum id leo in pulvinar. Cras purus erat, feugiat
                    vel lectus ut, hendrerit
                    porttitor sem. Curabitur tempor sem ex
                  </div>
                  <div class="mt-12 text-left lg:text-right">
                    <nuxt-link to="/user/projects/detail" class="btn btn-normal btn--ideeza px-8 py-3">View more</nuxt-link>
                  </div>
                </div>
              </div>
            </div>
            <div :class="{'w-48': !longview}"
                 class="project-item-container w-full border border-solid border-ideeza mt-12">
              <div class="lg:flex">
                <div class="lg:mr-10">
                  <div class="project-item-image mx-auto">
                    <img class="w-full " src="~/static/images/Layercar.png" alt="">
                    <div class="text-sm text-gray-500 mt-3">Electronics + Cover</div>
                  </div>
                </div>
                <div class="flex-grow">
                  <div class="flex justify-between text-gray-800 text-xl font-semibold">
                    <span>Audi</span>
                    <span>$20,000</span>
                  </div>
                  <div>
                    <font-awesome-icon class="mr-1 h-10 lg:text-2xl cursor-pointer text-yellow-600"
                                       :icon="['fas', 'star']"/>
                    <font-awesome-icon class="mr-1 h-10 lg:text-2xl cursor-pointer text-yellow-600"
                                       :icon="['fas', 'star']"/>
                    <font-awesome-icon class="mr-1 h-10 lg:text-2xl cursor-pointer text-yellow-600"
                                       :icon="['fas', 'star']"/>
                    <font-awesome-icon class="mr-1 h-10 lg:text-2xl cursor-pointer text-yellow-600"
                                       :icon="['fas', 'star']"/>
                    <font-awesome-icon class="mr-1 h-10 lg:text-2xl cursor-pointer text-yellow-600"
                                       :icon="['fas', 'star']"/>
                  </div>
                  <div class="mt-5 text-gray-500">
                    Sed in porta nunc, a interdum massa. Donec elementum id leo in pulvinar. Cras purus erat, feugiat
                    vel lectus ut, hendrerit
                    porttitor sem. Curabitur tempor sem ex
                  </div>
                  <div class="mt-12 text-left lg:text-right">
                    <nuxt-link to="/user/projects/detail" class="btn btn-normal btn--ideeza px-8 py-3">View more</nuxt-link>
                  </div>
                </div>
              </div>
            </div>
            <div :class="{'w-48': !longview}"
                 class="project-item-container w-full border border-solid border-ideeza mt-12">
              <div class="lg:flex">
                <div class="lg:mr-10">
                  <div class="project-item-image mx-auto">
                    <img class="w-full " src="~/static/images/Layercar.png" alt="">
                    <div class="text-sm text-gray-500 mt-3">Electronics + Cover</div>
                  </div>
                </div>
                <div class="flex-grow">
                  <div class="flex justify-between text-gray-800 text-xl font-semibold">
                    <span>Audi</span>
                    <span>$20,000</span>
                  </div>
                  <div>
                    <font-awesome-icon class="mr-1 h-10 lg:text-2xl cursor-pointer text-yellow-600"
                                       :icon="['fas', 'star']"/>
                    <font-awesome-icon class="mr-1 h-10 lg:text-2xl cursor-pointer text-yellow-600"
                                       :icon="['fas', 'star']"/>
                    <font-awesome-icon class="mr-1 h-10 lg:text-2xl cursor-pointer text-yellow-600"
                                       :icon="['fas', 'star']"/>
                    <font-awesome-icon class="mr-1 h-10 lg:text-2xl cursor-pointer text-yellow-600"
                                       :icon="['fas', 'star']"/>
                    <font-awesome-icon class="mr-1 h-10 lg:text-2xl cursor-pointer text-yellow-600"
                                       :icon="['fas', 'star']"/>
                  </div>
                  <div class="mt-5 text-gray-500">
                    Sed in porta nunc, a interdum massa. Donec elementum id leo in pulvinar. Cras purus erat, feugiat
                    vel lectus ut, hendrerit
                    porttitor sem. Curabitur tempor sem ex
                  </div>
                  <div class="mt-12 text-left lg:text-right">
                    <nuxt-link to="/user/projects/detail" class="btn btn-normal btn--ideeza px-8 py-3">View more</nuxt-link>
                  </div>
                </div>
              </div>
            </div>
            <div :class="{'w-48': !longview}"
                 class="project-item-container w-full border border-solid border-ideeza mt-12">
              <div class="lg:flex">
                <div class="lg:mr-10">
                  <div class="project-item-image mx-auto">
                    <img class="w-full " src="~/static/images/Layercar.png" alt="">
                    <div class="text-sm text-gray-500 mt-3">Electronics + Cover</div>
                  </div>
                </div>
                <div class="flex-grow">
                  <div class="flex justify-between text-gray-800 text-xl font-semibold">
                    <span>Audi</span>
                    <span>$20,000</span>
                  </div>
                  <div>
                    <font-awesome-icon class="mr-1 h-10 lg:text-2xl cursor-pointer text-yellow-600"
                                       :icon="['fas', 'star']"/>
                    <font-awesome-icon class="mr-1 h-10 lg:text-2xl cursor-pointer text-yellow-600"
                                       :icon="['fas', 'star']"/>
                    <font-awesome-icon class="mr-1 h-10 lg:text-2xl cursor-pointer text-yellow-600"
                                       :icon="['fas', 'star']"/>
                    <font-awesome-icon class="mr-1 h-10 lg:text-2xl cursor-pointer text-yellow-600"
                                       :icon="['fas', 'star']"/>
                    <font-awesome-icon class="mr-1 h-10 lg:text-2xl cursor-pointer text-yellow-600"
                                       :icon="['fas', 'star']"/>
                  </div>
                  <div class="mt-5 text-gray-500">
                    Sed in porta nunc, a interdum massa. Donec elementum id leo in pulvinar. Cras purus erat, feugiat
                    vel lectus ut, hendrerit
                    porttitor sem. Curabitur tempor sem ex
                  </div>
                  <div class="mt-12 text-left lg:text-right">
                    <nuxt-link to="/user/projects/detail" class="btn btn-normal btn--ideeza px-8 py-3">View more</nuxt-link>
                  </div>
                </div>
              </div>
            </div>
            <div :class="{'w-48': !longview}"
                 class="project-item-container w-full border border-solid border-ideeza mt-12">
              <div class="lg:flex">
                <div class="lg:mr-10">
                  <div class="project-item-image mx-auto">
                    <img class="w-full " src="~/static/images/Layercar.png" alt="">
                    <div class="text-sm text-gray-500 mt-3">Electronics + Cover</div>
                  </div>
                </div>
                <div class="flex-grow">
                  <div class="flex justify-between text-gray-800 text-xl font-semibold">
                    <span>Audi</span>
                    <span>$20,000</span>
                  </div>
                  <div>
                    <font-awesome-icon class="mr-1 h-10 lg:text-2xl cursor-pointer text-yellow-600"
                                       :icon="['fas', 'star']"/>
                    <font-awesome-icon class="mr-1 h-10 lg:text-2xl cursor-pointer text-yellow-600"
                                       :icon="['fas', 'star']"/>
                    <font-awesome-icon class="mr-1 h-10 lg:text-2xl cursor-pointer text-yellow-600"
                                       :icon="['fas', 'star']"/>
                    <font-awesome-icon class="mr-1 h-10 lg:text-2xl cursor-pointer text-yellow-600"
                                       :icon="['fas', 'star']"/>
                    <font-awesome-icon class="mr-1 h-10 lg:text-2xl cursor-pointer text-yellow-600"
                                       :icon="['fas', 'star']"/>
                  </div>
                  <div class="mt-5 text-gray-500">
                    Sed in porta nunc, a interdum massa. Donec elementum id leo in pulvinar. Cras purus erat, feugiat
                    vel lectus ut, hendrerit
                    porttitor sem. Curabitur tempor sem ex
                  </div>
                  <div class="mt-12 text-left lg:text-right">
                    <nuxt-link to="/user/projects/detail" class="btn btn-normal btn--ideeza px-8 py-3">View more</nuxt-link>
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
  import LeftMenu from '~/components/user/common-left-side-menu.vue'
    export default {
      layout: 'user',
      name: "projects-index",
      data: function() {
        return {
          longview: true
        }
      },
      components: {
        LeftMenu
      },
      computed: {
        leftMenu() {
          return this.$store.state.usermenu.openLeftMenu;
        }
      },
    }
</script>

<style scoped>
  .projects-container{
    width: 100%;

  }
  .project-item-container{
    width: 100%;

  }
  .project-item-image{
    width: 100%;
    min-width: auto;
  }
  .w-45{
    width: auto;
  }
  @screen lg {
    .projects-container {
      padding: 60px 50px;
    }
    .project-item-container{
      padding: 26px;
    }
    .project-item-image{
      min-width: 226px;
    }
    .w-48{
      width: 48%;
    }
  }
</style>
