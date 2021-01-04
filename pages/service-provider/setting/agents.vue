<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>

    <!-- Main Contents -->
    <div class="flex-grow mb-20 mt-20">

      <div class="px-4"><!--Status Cards-->
        <h1 class="text-2xl border-b font-semibold text-gar-800 pl-3 lg:pl-0 pb-3">Agents & Permissions</h1>
        <div class="bg-white shadow mt-5 p-6 w-3/5 border-b">
           <h2 class="text-gray-600 text-xl">New Agents</h2>
            <div class="flex mt-5">
             <div class="flex border border-gray-800 mr-4 w-4/5">
               <input type="text" name="" class="flex-1 py-2 px-4 text-gray-800" placeholder="Type Email">
               <div class="pt-2 px-3 border-l border-gray-800">
                  Edit
                  <img src="~/static/icons/sort-arrows.png" class=" ml-2 inline-block">
               </div>
             </div>
             <div class="w-1/5">
                <button class="rounded-full bg-ideeza py-2 px-10 text-white">
                  Add
                </button>
              </div>
          </div>
          <p class="py-5 text-gray-600">Can send messages and publish as the Page, respond to and delete comments on the Page, see which admin created a post or comment, view insights, respond to and delete comments from the Page and edit details of page.</p>

          <div class="border-t py-5">

           <h2 class="text-gray-600 text-xl py-5 font-bold">Existing Agents</h2>
           
           <h3 class="text-gray-800 text-lg font-bold">Admin</h3>
           <p class="py-5 text-gray-600">Can send messages and publish as the Page, respond to and delete comments on the Page, see which admin created a post or comment, view insights, respond to and delete comments from the Page and edit details of page.</p>

            
            
           <div class="flex items-center border-b py-2">
            <div class="w-2/12">
              <div class="w-16 h-16 rounded-full overflow-hidden">
                <img src="https://randomuser.me/api/portraits/women/12.jpg">
              </div>
            </div>
            <div class="w-8/12 text-left">
              <h3 class="text-gray-600 text-lg font-bold">Jon Cochran</h3>
              <p class="text-gray-600">Admin</p>
            </div>
            <div class="w-2/12">
              <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'times']"/>
            </div>
           </div>

           <div class="flex items-center border-b py-2">
            <div class="w-2/12">
              <div class="w-16 h-16 rounded-full overflow-hidden">
                <img src="https://randomuser.me/api/portraits/men/20.jpg">
              </div>
            </div>
            <div class="w-8/12 text-left">
              <h3 class="text-gray-600 text-lg font-bold">Jon Cochran</h3>
              <p class="text-gray-600">Admin</p>
            </div>
            <div class="w-2/12">
              <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'times']"/>
            </div>
           </div>

           <div class="py-4 border-b">
             <h3 class="text-gray-800 text-lg font-bold">Editor</h3>
             <p class="py-2 text-gray-600">Can send messages and publish as the Page, respond to and delete comments on the Page, see which admin created a post or comment, view insights, respond to and delete comments from the Page and edit details of page.</p>
           </div>
           <div class="flex items-center border-b py-2">
            <div class="w-2/12">
              <div class="w-16 h-16 rounded-full overflow-hidden">
                <img src="https://randomuser.me/api/portraits/women/20.jpg">
              </div>
            </div>
            <div class="w-8/12 text-left">
              <h3 class="text-gray-600 text-lg font-bold">Jon Cochran</h3>
              <p class="text-gray-600">Admin</p>
            </div>
            <div class="w-2/12">
              <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'times']"/>
            </div>
           </div>
          </div>
        </div>
        

      </div>

    </div>

  </div>


</template>

<script>
  import LeftMenu from '~/components/service-providers/common-left-side-menu.vue'

  export default {
    layout: 'service-providers',
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

  .avatar{
    @apply w-8 rounded-full -ml-5 shadow inline cursor-pointer;
  }
  .avatar:hover{
    @apply shadow-md;
  }
  .avatar:first-child{
    @apply ml-0;
  }

  @screen md{

    .status-card{

      /*width: 200px;
      height: 100px;*/
    }

  }


  @screen lg{
    .card-container{
      @apply w-1/4;
    }

    .status-card{
      height: 160px;
    }
    table{
      @apply mb-5 w-full table-fixed border-collapse text-gray-600;
    }
    thead tr{
      @apply bg-white px-6 pl-16;
    }
    thead th{
      @apply p-6;
    }
    thead th:first-child{
      @apply pl-16;
    }
    tbody td{
      @apply p-6;
    }
    tbody tr:even{
      @apply bg-white;
    }
    tbody td:first-child{
      @apply pl-16;
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
