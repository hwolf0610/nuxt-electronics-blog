<template>
  <div>
    
    <div class="py-5 flex">
        <div class="flex-1">
            <div class="inline-block px-5 cursor-pointer" :class="{'text-ideeza': singleView==true}" @click="singleView=true">Single screen view</div>
            <div class="inline-block px-5 cursor-pointer" :class="{'text-ideeza': singleView==false}" @click="singleView=false">Multiple screens view</div>
        </div>
        <div class="flex-1 text-right">
            <button class="border bg-ideeza text-white py-2 px-10 text-xl">Design</button>
            <button class="border text-gray-600 py-2 px-10 text-xl ml-5">Code</button>
        </div>
    </div>
    <side-bar></side-bar>
    <div class="w-full my-10 md:flex justify-center">
              
            <div class="bg-white rounded-lg shadow p-3 mr-5 mobile">
              <div class="py-5">
                <img src="~/static/images/back-screen.png" class="inline-block">
              </div>
            
              <div class="text-center py-3">
                  <img src="~/static/images/neo_logo.png" class="inline-block">
              </div>

              <div class="mt-5">
                <form class="bg-white rounded px-8 pt-6 pb-8 mb-4">
                  <div class="w-full">
                    <div class="mb-4">
                      <label class="block text-gray-700 text-sm mb-2" for="username">
                        Sign in
                      </label>
                      <input class="border border-green-400  appearance-none border rounded-full w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="username">
                    </div>

                    <div class="mb-4">
                       
                      <input class="border border-gray-500  appearance-none border rounded-full w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="password" placeholder="password">
                    </div>

                    <div class="mb-4">
                       
                      <input type="checkbox" name="" value=""> Stay login
                    </div>
                  </div>
                  <div class=" mt-10">
                  <button class="border green-btn w-full text-white py-3 px-10 text-xl rounded-full">Save</button>
                  <p class="py-3 text-center text-blue-500">
                    Forgot password?
                  </p>
                </div> 
                </form>
                
              </div>
         </div>
         <div class="bg-white rounded-lg shadow p-5 mr-5 mobile" v-if="singleView==false">
              <div class="py-5 flex justify-between items-center">
                <img src="~/static/images/back-screen.png" class="inline-block">
                <h4 class="font-semibold text-lg text-black">News</h4>
                <font-awesome-icon class="text-lg block" :icon="['fas', 'align-right']"/>
              </div>
              <div class="mt-5 mb-1">
                <div class="bg-green-300 p-5 rounded-lg">
                  <div class="badge -mt-12 mb-5">
                    <img class="mx-auto" src="~/static/images/neo-coin.png" >
                  </div>
                  <div class="text-green-100 text-xl font-semibold">Introducing NEO coin!</div>
                  <p class="mt-4 text-black">
                    You will earn NEO coins for completing the charity work, which you can swap into money or, pay online payments directly from NEO app.
                  </p>
                </div>
              </div>
              <div class="relative mt-24">
                <button class="border green-btn w-full text-white py-3 px-10 text-xl rounded-full">Work for charity</button>
                <div class="absolute charity">
                  <img src="~/static/images/charity.png">
                </div>
              </div>
              <div class="relative mt-5">
                <button class="border bg-blue-600 w-full text-white py-3 px-10 text-xl rounded-full">Learn more</button>
              </div>
         </div>

        </div>
  </div>
</template>
<script>
import SideBar from '~/components/user/pro/app/SideBar.vue'
export default {
  components: {
    SideBar
  },
  data() {
    return {
      singleView: false
    }
  }
}
</script>

<style scoped>
  .select-layout-btn [type="radio"]:checked,
  .select-layout-btn [type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
  }

  .select-layout-btn [type="radio"]:checked+label,
  .select-layout-btn [type="radio"]:not(:checked)+label {
    position: relative;
    padding: 4px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #666;
    border: 1px solid #fff;
  }

  .select-layout-btn [type="radio"]:not(:checked)+label:after {
    border: none;
  }

  .select-layout-btn [type="radio"]:checked+label {
    border: 1px solid #ff14c9;
  }

  .w-1-8 {
    width: 12.5%
  }

  .right-bar {
    width: 300px;
    top: 0;
    right: 0;
    z-index: 0;
    padding-top: 50px;
    height: 100vh;
  }
  .mobile{
    width: 360px;
  }
  .green-btn{
    background:#03be33;
  }
  .charity {
    bottom: 10%;
  }
  .charity img{
    height: 105px;
  }
</style>
