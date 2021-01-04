<template>
<div class="container lg m-auto my-20 px-4">
      <div class="flex">
          <div class="w-4/5">
            <div class="text-2xl my-5 border-gray-300 border-b pb-5 COS-steps">
            <nuxt-link to="./cost-service" class="text-gray-900 px-4 py-2">Cost of Service</nuxt-link>
            <nuxt-link to="./fabrication" class="text-ideeza COS-steps-active px-4 py-2">Fabrication</nuxt-link>
            <nuxt-link to="./assembly-service" class="text-gray-900 px-4 py-2">Assembly Service</nuxt-link>
            <nuxt-link to="./dealer" class="text-gray-900 px-4 py-2 ">Dealer</nuxt-link>
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
                      <td class="border-b px-4 py-4 w-2/5 text-lg font-bold ">Board Type</td>
                      <td class="border-b px-4 py-4 w-3/5">
                        <div class="relative">
                          <select class="block appearance-none w-full bg-white border border-gray-800 hover:border-gray-500 px-4 py-3 pr-8  shadow leading-tight focus:outline-none ">
                              <option>Panel by Customers</option>
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
                      <td class="border-b px-4 py-4 w-2/5 text-lg font-bold ">Different Design in Panel</td>
                      <td class="border-b px-4 py-4 w-3/5">
                         <input class="border border-gray-800 appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none " type="text" placeholder="">
                      </td>
                    </tr>

                    <tr>
                      <td class="border-b px-4 py-4 w-2/5 text-lg font-bold ">Size <span>(single)</span></td>
                      <td class="border-b px-4 py-4 w-3/5">
                        <div class="flex">
                        
                          <div class="flex-1 pr-3"><input class="border border-gray-800 appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none " id="username" type="text" placeholder="length"></div>
                          <div class="flex-1 pr-3"><input class="border border-gray-800 appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none " id="username" type="text" placeholder="Width"></div>
                           
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
                      <td class="border-b px-4 py-4 w-2/5 text-lg font-bold ">Quantity (single)</td>
                      <td class="border-b px-4 py-4 w-3/5">
                        <div class="flex">
                        
                          <div class="flex-1 pr-3"><input class="border border-gray-800 appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none " id="username" type="text" placeholder="length"></div>
                          <div class="flex-1 pr-3"> </div>
                          <div class="flex-1 "></div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td class="border-b px-4 py-4 w-2/5 text-lg font-bold ">Material</td>
                      <td class="border-b px-4 py-4 w-3/5">
                        <div class="relative">
                            <select class="block appearance-none w-full bg-white border border-gray-800 hover:border-gray-500 px-4 py-3 pr-8  shadow leading-tight focus:outline-none ">
                            <option>Normal FR-4 Board, Aluminum Board, Rigid-Flex Bo...</option>
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
                      <td class="border-b px-4 py-4 w-2/5 text-lg font-bold ">Solder Mask</td>
                      <td class="border-b px-4 py-4 w-3/5">
                        <div class="relative">
                            <select class="block appearance-none w-full bg-white border border-gray-800 hover:border-gray-500 px-4 py-3 pr-8  shadow leading-tight focus:outline-none ">
                            <option>Red, Blue</option>
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
                      <td class="border-b px-4 py-4 w-2/5 text-lg font-bold ">Gold Fingers</td>
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
                      <td class="border-b px-4 py-4 w-2/5 text-lg font-bold ">Surface Finish</td>
                      <td class="border-b px-4 py-4 w-3/5">
                        <div class="relative">
                            <select class="block appearance-none w-full bg-white border border-gray-800 hover:border-gray-500 px-4 py-3 pr-8  shadow leading-tight focus:outline-none ">
                            <option>HASL Lead Free</option>
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
                      <td class="border-b px-4 py-4 w-2/5 text-lg font-bold ">Via Process</td>
                      <td class="border-b px-4 py-4 w-3/5">
                        <div class="relative">
                            <select class="block appearance-none w-full bg-white border border-gray-800 hover:border-gray-500 px-4 py-3 pr-8  shadow leading-tight focus:outline-none ">
                            <option>Plugged Vias</option>
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
                      <td class="border-b px-4 py-4 w-2/5 text-lg font-bold ">Finished Copper</td>
                      <td class="border-b px-4 py-4 w-3/5">
                        <div class="relative">
                            <select class="block appearance-none w-full bg-white border border-gray-800 hover:border-gray-500 px-4 py-3 pr-8  shadow leading-tight focus:outline-none ">
                            <option>2 Oz of Cu</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                          </select>
                          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                      </td>
                    </tr>
                     
                     
                     
                  </tbody>
                </table>

                 
         </div>

         <h2 class="text-3xl font-bold mt-10 mb-5">Additional Board Specification</h2>

         <div class="text-xl mb-5 border-gray-300 border-b border-t py-5">                            
            <nuxt-link to="" class="text-ideeza px-3">Aluminum  Board</nuxt-link>
            <nuxt-link to="" class="text-gray-900 px-3">Normal FR-4 Board</nuxt-link>
            <nuxt-link to="" class="text-gray-900 px-3">Rigid-Flex Board</nuxt-link>
            <nuxt-link to="" class="text-gray-900 px-3">Card Board</nuxt-link>
        </div>


        <div class="bg-white shadow-lg p-5 mt-10">
                <table class="w-full text-gray-ideeza">
                  <tbody>
                    <tr>
                      <td class="border-b px-4 py-4 w-2/5 text-lg font-bold ">Max Layers</td>
                      <td class="border-b px-4 py-4 w-3/5">
                        <div class="relative">
                            <select class="block appearance-none w-full bg-white border border-gray-800 hover:border-gray-500 px-4 py-3 pr-8  shadow leading-tight focus:outline-none ">
                            <option> </option>
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
                      <td class="border-b px-4 py-4 w-2/5 text-lg font-bold ">Copper Layers</td>
                      <td class="border-b px-4 py-4 w-3/5">
                        <div class="relative">
                            <select class="block appearance-none w-full bg-white border border-gray-800 hover:border-gray-500 px-4 py-3 pr-8  shadow leading-tight focus:outline-none ">
                            <option>Top Layer, Bottom Layer</option>
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
                      <td class="border-b px-4 py-4 w-2/5 text-lg font-bold ">Soldermask</td>
                      <td class="border-b px-4 py-4 w-3/5">
                        <div class="relative">
                            <select class="block appearance-none w-full bg-white border border-gray-800 hover:border-gray-500 px-4 py-3 pr-8  shadow leading-tight focus:outline-none ">
                            <option>Top Side</option>
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
                      <td class="border-b px-4 py-4 w-2/5 text-lg font-bold ">FR4-TG</td>
                      <td class="border-b px-4 py-4 w-3/5">
                        <div class="relative">
                            <select class="block appearance-none w-full bg-white border border-gray-800 hover:border-gray-500 px-4 py-3 pr-8  shadow leading-tight focus:outline-none ">
                            <option>TG 130 - 140</option>
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
                      <td class="border-b px-4 py-4 w-2/5 text-lg font-bold ">Min Thickness</td>
                      <td class="border-b px-4 py-4 w-3/5">
                         <input class="border border-gray-800 appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none " type="text" placeholder="">
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