<template>
    <div class="container lg m-auto my-20 px-4">
      <div class="flex">
          <div class="w-4/5">
            <div class="text-2xl my-5 border-gray-300 border-b pb-5 COS-steps">
              <nuxt-link to="./cost-service" class="text-gray-900 px-4 py-2">Cost of Service</nuxt-link>
              <nuxt-link to="./fabrication" class="text-gray-900 px-4 py-2">Fabrication</nuxt-link>
              <nuxt-link to="./assembly-service" class="text-ideeza COS-steps-active text-gray-900 px-4 py-2">Assembly Service</nuxt-link>
              <nuxt-link to="./dealer" class="text-gray-900 px-4 py-2">Dealer</nuxt-link>
            </div>
            <div class="flex mt-10 border-gray-300 border-b pb-10">
              <div class="flex-1 px-3">
                <button class="block bg-white text-xl font-bold border border-gray-300 text-gray-900 py-5 w-full">
                  <img src="~static/images/power.png" class="inline-block mx-3">
                Electronics</button>
              </div>
              <div class="flex-1 px-3 ">
                <button class="block bg-white text-xl font-bold border border-gray-300 text-gray-900 py-5 w-full">
                  <img src="~static/images/cover.png" class="inline-block mx-3">Cover</button>
              </div>
            </div>

              <div class="bg-white shadow-lg p-5 mt-10">
                <table class="w-full text-gray-ideeza">
                   
                  <tbody>
                    <tr>
                      <td class="border-b px-4 py-4 w-2/5 text-lg font-bold ">Price for / Quantity</td>
                      <td class="border-b px-4 py-4 w-3/5">
                        <div class="relative flex">
                          <div class="flex-1 text-lg font-bold text-gray-500 text-center">1</div>
                          <div class="flex-1 text-lg font-bold text-gray-500 text-center">2</div>
                          <div class="flex-1">
                             <button class="border border-gray-800 appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none ">+Add value</button>
                          </div>
                          </div>
                      </td>
                    </tr>

                    <tr>
                      <td class="border-b px-4 py-4 w-2/5 text-lg font-bold ">Smt parts</td>
                      <td class="border-b px-4 py-4 w-3/5">
                        <div class="flex">
                          <div class="flex-1 pr-3"><input class="border border-gray-800 appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none " id="username" type="text" placeholder="Amount"></div>
                          <div class="flex-1 pr-3"><input class="border border-gray-800 appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none " id="username" type="text" placeholder="Amount"></div>
                          <div class="flex-1"><input class="border border-gray-800 appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none " id="username" type="text" placeholder="Amount"></div> 
                        </div>
                           
                      </td>
                    </tr>

                    <tr>
                      <td class="border-b px-4 py-4 w-2/5 text-lg font-bold ">Through hole</td>
                      <td class="border-b px-4 py-4 w-3/5">
                        <div class="flex">
                          <div class="flex-1 pr-3"><input class="border border-gray-800 appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none " id="username" type="text" placeholder="Amount"></div>
                          <div class="flex-1 pr-3"><input class="border border-gray-800 appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none " id="username" type="text" placeholder="Amount"></div>
                          <div class="flex-1"><input class="border border-gray-800 appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none " id="username" type="text" placeholder="Amount"></div> 
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td class="border-b px-4 py-4 w-2/5 text-lg font-bold ">Unique</td>
                      <td class="border-b px-4 py-4 w-3/5">
                        <div class="flex">
                          <div class="flex-1 pr-3"><input class="border border-gray-800 appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none " id="username" type="text" placeholder="Amount"></div>
                          <div class="flex-1 pr-3"><input class="border border-gray-800 appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none " id="username" type="text" placeholder="Amount"></div>
                          <div class="flex-1"><input class="border border-gray-800 appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none " id="username" type="text" placeholder="Amount"></div> 
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td class="px-4 py-4 w-2/5 text-lg font-bold ">Special Request</td>
                      <td class="px-4 py-4 w-3/5">
                         <textarea class="border border-gray-800 appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none" placeholder="Fill in the detailed technical info about the PCB assembly" rows="1"></textarea>
                      </td>
                    </tr>

                     
                  </tbody>
                </table>
         </div>

         <div class="text-center my-4">
            <button class="bg-ideeza text-xl border font-semibold text-white py-2 px-24 rounded-full rounded-full shadow-lg mt-5">Save</button>   
          </div>


      </div>
   </div>
  </div>
     
   

   
</div> 
</template>
<script>


import headercomponent from '~/layouts/headercomponent/';
export default {
   components:{
    headercomponent
   }
};
</script>
<style>
body{
  background:#f5f5f5;
}
.form-text-color{
  color: #174a84;
}
.form-border-color{
  border-color: #174a84;  
}
.text-gray-ideeza{
  color:#666666;
}
.bg-gray-ideeza{
  background:#f2f2f2;
}
</style>