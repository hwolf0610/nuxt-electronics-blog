<template>
    <div class="container lg m-auto my-20 px-4">
      <div class="flex">
          <div class="w-4/5">
            
            <div class="text-2xl my-5 border-gray-300 border-b pb-5 COS-steps">
              <nuxt-link to="./cost-service" class="text-ideeza px-4 py-2 COS-steps-active">Cost of Service</nuxt-link>
              <nuxt-link to="./fabrication" class="text-gray-900 px-4 py-2">Fabrication</nuxt-link>
              <nuxt-link to="./assembly-service" class="text-gray-900 px-4 py-2">Assembly Service</nuxt-link>
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
                      <td class="border-b px-4 py-4 w-2/5 text-lg font-bold ">Intro to CSS</td>
                      <td class="border-b px-4 py-4 w-3/5">
                        <div class="relative">
                          <select class="block appearance-none w-full bg-white border border-gray-800 hover:border-gray-500 px-4 py-3 pr-8  shadow leading-tight focus:outline-none ">
                              <option>ABS, Alumide, PET, ABS, HDPE, PC, ABS 15E1, ABS B...</option>
                              <option>Option 2</option>
                              <option>Option 3</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                          </div>
                      </td>
                    </tr>

                    <tr>
                      <td class="border-b px-4 py-4 w-2/5 text-lg font-bold ">Max Dimensions</td>
                      <td class="border-b px-4 py-4 w-3/5">
                        <div class="flex">
                        
                          <div class="flex-1 pr-3"><input class="border border-gray-800 appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none " id="username" type="text" placeholder="length"></div>
                          <div class="flex-1 pr-3"><input class="border border-gray-800 appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none " id="username" type="text" placeholder="Width"></div>
                          <div class="flex-1 pr-3"><input class="border border-gray-800 appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none " id="username" type="text" placeholder="Height"></div>
                          <div class="flex-1 relative">
                            <select class="block appearance-none w-full bg-white border border-gray-800 hover:border-gray-500 px-4 py-3 pr-8  shadow leading-tight focus:outline-none ">
                            <option>Unit</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                          </select>
                          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>



                        </div>
                           
                      </td>
                    </tr>

                    <tr>
                      <td class="border-b px-4 py-4 w-2/5 text-lg font-bold ">Quantity Ability</td>
                      <td class="border-b px-4 py-4 w-3/5">
                        <div class="flex">
                          <div class="flex-1 pr-3"><input class="border border-gray-800 appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none " id="username" type="text" placeholder="min"></div>
                          <div class="flex-1"><input class="border border-gray-800 appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none " id="username" type="text" placeholder="max"></div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td class="border-b px-4 py-4 w-2/5 text-lg font-bold ">Suitable for prototyping</td>
                      <td class="border-b px-4 py-4 w-3/5">
                        <div class="flex justify-left w-full">
  
                          <!-- Toggle Button -->
                          <label 
                            for="toogleA"
                            class="flex items-center cursor-pointer"
                          >
                            <!-- toggle -->
                            <div class="relative">
                              <!-- input -->
                              <input id="toogleA" type="checkbox" class="hidden" />
                              <!-- line -->
                              <div
                                class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"
                              ></div>
                              <!-- dot -->
                              <div
                                class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
                              ></div>
                            </div>
                            <!-- label -->
                            <div
                              class="ml-3 text-gray-700 font-medium"
                            >
                              
                            </div>
                          </label>
                          
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td class="border-b px-4 py-4 w-2/5 text-lg font-bold ">Design file type</td>
                      <td class="border-b px-4 py-4 w-3/5">
                        <div class="relative">
                            <select class="block appearance-none w-full bg-white border border-gray-800 hover:border-gray-500 px-4 py-3 pr-8  shadow leading-tight focus:outline-none ">
                            <option>AMF, CGR, PRT</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                          </select>
                          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td class="border-b px-4 py-4 w-2/5 text-lg font-bold ">Manufacturing time</td>
                      <td class="border-b px-4 py-4 w-3/5"><div class=""><input class="border border-gray-800 appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none " id="username" type="text" placeholder="Approximately in days"></div></td>
                    </tr>
                     
                     
                  </tbody>
                </table>

                <div class="text-center my-4">
                  <button class="bg-gray-ideeza w-full text-xl border font-semibold text-gray-ideeza py-4 px-4 rounded-full rounded-full shadow-lg mt-5">+Add New Field <span class="text-sm font-hairline">(NEED TO BE APPROVED BY OUR TECHNICIAN)</span></button>
                   
                </div>
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
.toggle__dot {
  top: -.25rem;
  left: -.25rem;
  transition: all 0.3s ease-in-out;
}

input:checked ~ .toggle__dot {
  transform: translateX(100%);
  background-color: #ff00c7;
}
</style>