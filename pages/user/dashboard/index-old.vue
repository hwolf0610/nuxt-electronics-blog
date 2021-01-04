<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>

    <!-- Main Contents -->
    <div class="flex-grow mb-20">

      <div class="main-contents"><!--Status Cards-->
        <div class="lg:flex w-full cards-wrapper">
          <!--Money Earned-->
          <div class="card-container lg:mr-5 mr-0 mt-5 lg:mt-0">
            <h1 class="text-xl font-semibold text-gar-800 pl-3 lg:pl-0">Money Earned</h1>
            <div class="mx-auto lg:mx-none status-card bg-white shadow-md mt-5 p-3">
              <div class="text-right">
                <font-awesome-icon class="mr-1 h-4 cursor-pointer" :icon="['fas', 'ellipsis-h']"/>
              </div>
              <div class="flex justify-between items-center content-center ">
                <div class="text-gray-800 text-semibold text-xl lg:text-6xl">$2,500</div>
                <div><img class="w-12 lg:w-auto" src="~/static/icons/coins-icon.svg"></div>
              </div>
            </div>
          </div>

          <!--FeedBack-->
          <div class="card-container lg:mr-5 mr-0 mt-5 lg:mt-0">
            <h1 class="text-xl font-semibold text-gar-800 pl-3 lg:pl-0">Feedback</h1>
            <div class="status-card bg-white shadow-md mt-5 p-3">
              <div class="text-right">
                <font-awesome-icon class="mr-1 h-4 cursor-pointer" :icon="['fas', 'ellipsis-h']"/>
              </div>
              <div class="flex justify-between items-center content-center ">
                <div class="text-gray-800 text-semibold text-xl lg:text-6xl">32</div>
                <div><img class="w-12 lg:w-auto" src="~/static/icons/feedback.svg"></div>
              </div>
            </div>
          </div>

          <!--Likes-->
          <div class="card-container mt-5 lg:mt-0">
            <h1 class="text-xl font-semibold text-gar-800 pl-3 lg:pl-0">Stars</h1>
            <div class="status-card bg-white shadow-md mt-5 p-3">
              <div class="text-right">
                <font-awesome-icon class="mr-1 h-4 cursor-pointer" :icon="['fas', 'ellipsis-h']"/>
              </div>
              <div class="flex justify-between items-center content-center ">
                <div class="text-gray-800 text-semibold text-xl lg:text-6xl">1,500</div>
                <div><img class="w-12 lg:w-auto" src="~/static/icons/star-icon.svg"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="xl:flex mt-10">
          <!--Success Stories-->
          <div class="lg:mr-5">
            <h1 class="text-xl font-semibold text-gar-800 pl-3 lg:pl-0">Success Stories</h1>
            <div class="success-stories shadow-md mt-5 relative">
              <img class="object-fit object-center" src="~/static/images/dashboard.png">
              <div class="absolute w-full h-full top-0 left-0 overlay z-10"></div>
              <div class="absolute-center-v pl-5 lg:pl-20 z-20">
                <div class="text-base lg:text-xl text-white font-semibold">
                  How Ideeza can make<br>the world a better place
                </div>
                <div class="text-xs lg:text-lg text-white mt-5 lg:mt-20">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>
                  Pellentesque sollicitudin fermentum velit, elementum<br>
                  luctus est ornare sit amet.<br>
                </div>
              </div>
              <div class="absolute bottom-0 right-0 pr-4 pb-1 lg:pr-20 lg:pb-8 z-30">
                <button class="btn btn-normal btn--ideeza py-2 lg:py-3 w-32 lg:w-40 text-center lg:block mb-1 lg:mb-3">
                  Read More
                </button>
                <button class="btn btn-normal btn--ideeza-dark py-2 lg:py-3 w-32 lg:w-40 text-center lg:block">Try it
                  Yourself
                </button>
              </div>
            </div>
          </div>

          <!--Messages-->
          <div class="messages mt-5 lg:mt-0">
            <h1 class="text-xl font-semibold text-gar-800 pl-3 lg:pl-0">Messages</h1>
            <div class="bg-white shadow-md mt-5">
              <div class="p-3 text-right border-b border-solid border-gray-300">
                <font-awesome-icon class="mr-1 h-4 cursor-pointer" :icon="['fas', 'ellipsis-h']"/>
              </div>
              <div>
                <div class="flex justify-between items-center mt-5 px-3 pb-5 border-b border-solid border-gray-300 ">

                  <div class="flex">
                    <div class="mr-3">
                      <img class="h-16 w-16 rounded-full"
                           src="https://randomuser.me/api/portraits/women/20.jpg">
                    </div>
                    <div class="text-gray-500">
                      <nuxt-link to="/user/messages">
                        <span class="text-base font-semibold text-gray-800">Jasmine Mueller</span>
                        <span class="text-xs ">. 5min ago</span>
                        <div class="text-sm lg:text-base">
                          Great product, love the function of it, pcb card...
                        </div>
                      </nuxt-link>

                      <div class="text-ideeza mt-2">Reply <span class="text-gray-500">•</span> Delete</div>
                    </div>
                  </div>


                </div>
                <div class="flex justify-between items-center mt-5 px-3 pb-5 border-b border-solid border-gray-300 ">
                  <div class="grow">
                    <div class="flex">
                      <div class="mr-3">
                        <img class="h-16 w-16 rounded-full"
                             src="https://randomuser.me/api/portraits/men/3.jpg">
                      </div>
                      <div class="text-gray-500">
                        <nuxt-link to="/user/messages">
                          <span class="text-base font-semibold text-gray-800">Jasmine Mueller</span>
                          <span class="text-xs ">. 5min ago</span>
                          <div class="text-sm lg:text-base">
                            Great product, love the function of it, pcb card...
                          </div>
                        </nuxt-link>
                        <div class="text-ideeza mt-2">Reply <span class="text-gray-500">•</span> Delete</div>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="flex justify-between items-center mt-5 px-3 pb-5 border-b border-solid border-gray-300 ">
                  <div class="grow">
                    <div class="flex">
                      <div class="mr-3">
                        <img class="h-16 w-16 rounded-full"
                             src="https://randomuser.me/api/portraits/men/7.jpg">
                      </div>
                      <div class="text-gray-500">
                        <nuxt-link to="/user/messages">
                          <span class="text-base font-semibold text-gray-800">Jasmine Mueller</span>
                          <span class="text-xs ">. 5min ago</span>
                          <div class="text-sm lg:text-base">
                            Great product, love the function of it, pcb card...
                          </div>
                        </nuxt-link>
                        <div class="text-ideeza mt-2">Reply <span class="text-gray-500">•</span> Delete</div>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="flex justify-between items-center mt-5 px-3 pb-5 border-b border-solid border-gray-300 ">
                  <div class="grow">
                    <div class="flex">
                      <div class="mr-3">
                        <img class="h-16 w-16 rounded-full"
                             src="https://randomuser.me/api/portraits/women/8.jpg">
                      </div>
                      <div class="text-gray-500">
                        <nuxt-link to="/user/messages">
                          <span class="text-base font-semibold text-gray-800">Jasmine Mueller</span>
                          <span class="text-xs ">. 5min ago</span>
                          <div class="text-sm lg:text-base">
                            Great product, love the function of it, pcb card...
                          </div>
                        </nuxt-link>
                        <div class="text-ideeza mt-2">Reply <span class="text-gray-500">•</span> Delete</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <!--New Orders-->
        <div class="mt-10 orders">
          <h1 class="text-xl font-semibold text-gar-800 pl-3 lg:pl-0 pb-3 mb-3 border-b border-solid border-gary-300">
            New Orders</h1>
          <div>
            <div class="hidden xl:flex justify-between">
              <div class="flex">
                <select class="field field--border-light mr-1 h-12">
                  <option>All payout methods</option>
                </select>
                <select class="field field--border-light mr-1 h-12">
                  <option>All type products</option>
                </select>
                <select class="field field--border-light mr-1 h-12">
                  <option>2018</option>
                </select>
                <select class="field field--border-light mr-1 h-12">
                  <option>Order status</option>
                </select>
              </div>
              <div>
                <div class="flex w-fit-content bg-white justify-center border-light-gray items-center content-center">
                  <div class="h-12 relative w-10">
                    <font-awesome-icon class="ml-1 h-4 text-gray-400 absolute-center-h-v" :icon="['fas', 'search']"/>
                  </div>
                  <input placeholder="search by details" class="bg-white outline-none h-12 text-gray-800 pr-3">
                </div>

              </div>
            </div>
            <div class="xl:hidden cursor-pointer border-light-gray w-10 h-8 relative mt-2  ml-2 bg-white">
              <font-awesome-icon class="ml-1 h-6 text-gray-600 absolute-center-h-v" :icon="['fas', 'sliders-h']"/>
            </div>
          </div>
          <div class="p-3 my-3 gradient-bg lg:flex justify-between items-center text-white">
            <div class="text-sm mb-1 lg:mb-0 lg:text-xl">Lamborghini Aventado and Something</div>
            <font-awesome-icon class="mr-1 h-4 cursor-pointer" :icon="['fas', 'ellipsis-h']"/>
          </div>

          <!--Orders Table-->
          <table>
            <thead>
            <tr class="text-gray-800 h16">
              <th class="text-left ">Products</th>
              <th class="text-left lg:text-center">Color</th>
              <th class="text-left lg:text-center">Price</th>
              <th class="text-left lg:text-center">Quantity</th>
              <th class="text-left lg:text-center">Cost</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr class="">
              <td class="product">
                <div class="lg:flex">
                  <div class="mr-2">
                    <img src="~/static/images/Layercar.png">
                  </div>
                  <div class="my-auto">
                      <span class="block font-semibold">
                        Lamborghini
                      </span>
                    <span class="block text-sm text-gray-500">
                        Electronics + Cover
                      </span>

                  </div>
                </div>

              </td>
              <td class="lg:text-center">Red</td>
              <td class="font-semibold lg:text-center">$20,000</td>
              <td class="lg:text-center"><span class="inline-block mr-3">-</span>1<span
                class="inline-block ml-3">+</span></td>
              <td class="font-semibold lg:text-center">
                <font-awesome-icon class="mr-3 h-4 cursor-pointer" :icon="['fas', 'chevron-down']"/>
                $100,000
              </td>

              <td class="lg:text-right">
                <button class="btn btn-normal px-2 py-2 mb-3 bg-white">Invoice</button>
                <nuxt-link class="btn btn-normal px-2 py-2 bg-white" to="/user/projects/detail">
                  Details
                </nuxt-link>

              </td>
            </tr>
            </tbody>
          </table>

          <!--Table Stats-->
          <div class="mt-5 lg:flex justify-end">
            <div class="lg:w-3/5 p-3 lg:flex justify-between">
              <!--Paging-->
              <div class="flex items-center">
                <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'angle-double-left']"/>
                page 1 0f 9
                <font-awesome-icon class="ml-2 h-4 cursor-pointer" :icon="['fas', 'angle-double-right']"/>
              </div>

              <div class="flex items-center">
                <span class="inline-block">Total</span><span class="inline-block ml-10">$3500</span>

                <span class="inline-block ml-32">Show</span>
                <select class="field field--border-none ml-2 h-10">
                  <option>1-3</option>
                </select>
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
    name: "dashboard-index",
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
  .cards-wrapper{
    max-width: 1530px;
  }
  .status-card{
    width: 100%;
    height: 100px;
  }
  .success-stories{
    width: 100%;
    max-width: 860px;
    max-height: 600px;
  }
  .overlay{
    background: rgba(0,0,0, 0.2);
  }
  .messages{
    width: 100%;
    max-width: 630px;
  }
  .orders{
    width: 100%;
    max-width: 1530px;
  }

  @screen md{

    .status-card{

      /*width: 200px;
      height: 100px;*/
    }

  }


  @screen lg{
    .card-container{
      @apply w-1/3;
    }

    .status-card{
      height: 160px;
    }
    table{
      @apply mb-5 w-full table-fixed border-collapse text-gray-600;
    }
    thead tr{
      @apply border-b-2 border-solid border-ideeza;
    }
    tbody td{
      @apply border-t border-solid border-gray-400 py-3 my-3;
    }
    tbody tr:last-child td{
      @apply border-b border-solid border-gray-400 py-3 my-3;
    }
  }

  @screen xl{
    .messages{
      width: 100%;
      max-width: 630px;
    }
  }

  @media
  only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px)  {

    /* Force table to not be like tables anymore */
    table, thead, tbody, th, td, tr {
      display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr { border: 1px solid #ccc; margin-bottom: 10px; }

    td {
      /* Behave  like a "row" */
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 50%;
    }

    td:before {
      /* Now like a table header */
      position: absolute;
      /* Top/left values mimic padding */
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
      font-weight: 600;
    }

    /*
      Label the data
      */
    td:nth-of-type(1):before { content: "Products"; }
    td:nth-of-type(2):before { content: "Color"; }
    td:nth-of-type(3):before { content: "Price"; }
    td:nth-of-type(4):before { content: "Quantity"; }
    td:nth-of-type(5):before { content: "Cost"; }
    td:nth-of-type(6):before { content: "Action"; }
  }
</style>
