<template>
 <div class="container lg m-auto my-20 px-4">
      <div class="flex">
      <div class="w-5/5">
        <div class="text-2xl my-5 border-gray-300 border-b pb-5 COS-steps">                            
            <nuxt-link to="./cost-service" class="text-gray-900 px-4 py-2">Cost of Service</nuxt-link>
            <nuxt-link to="./fabrication" class="text-gray-900 px-4 py-2">Fabrication</nuxt-link>
            <nuxt-link to="./assembly-service" class="text-gray-900 px-4 py-2">Assembly Service</nuxt-link>
            <nuxt-link to="./dealer" class="text-ideeza px-4 py-2 COS-steps-active">Dealer</nuxt-link>
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

            <div class="text-2xl flex flex-wrap my-5 border-b border-gray-300 pb-5">                            
              <div class="text-2xl flex-1 flex ">                            
                <div class="flex-1 px-2">
                   <button class="border appearance-none border w-full py-3 px-3 text-ideeza leading-tight focus:outline-none text-lg">+Add value</button>
                </div>
                <div class="flex-1 px-2">
                  <div class="flex-1 relative">
                    <select class="block text-lg appearance-none w-full bg-white border  px-4 py-3 pr-8 leading-tight focus:outline-none ">
                    <option>Category</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
                </div>
                <div class="flex-1 px-2">
                  <div class="flex-1 relative">
                      <select class="block text-lg appearance-none w-full bg-white border  px-4 py-3 pr-8 leading-tight focus:outline-none ">
                      <option>Subcategory</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                  </div>
                </div>
               
            </div>
              <div class="flex-1">
                <div class="flex border w-64 bg-white px-3 text-gray-700 leading-tight float-right">
                  <button class="border-0 px-3 pb-3">
                    <img src="~static/images/search-gray.png" class="inline-block">
                  </button>
                  <input class="appearance-none py-2 w-full text-md flex-1 border-0 focus:outline-none" type="text" placeholder="Search" value="">
                </div>
              </div>
            </div>

              <div class="bg-white shadow-lg p-5 mt-10 overflow-auto  ">
                <table class="w-full text-gray-ideeza">
                                                                                                                     
                  <tbody>
                    <tr>
                      <th class="border-b px-0 py-4 text-md font-normal text-center px-1">Name</th>
                      <th class="border-b px-0 py-4 text-md font-normal text-center px-1">2D</th>
                      <th class="border-b px-0 py-4 text-md font-normal text-center px-1">3D</th>
                      <th class="border-b px-0 py-4 text-md font-normal text-center px-1">Manufacturer</th>
                      <th class="border-b px-0 py-4 text-md font-normal text-center px-1">Unit in Stock</th>
                      <th class="border-b px-0 py-4 text-md font-normal text-center px-1">Price</th>
                      <th class="border-b px-0 py-4 text-md font-normal text-center px-1">Package</th>
                      <th class="border-b px-0 py-4 text-md font-normal text-center px-1">Produc...</th>
                      <th class="border-b px-0 py-4 text-md font-normal text-center px-1">Availability</th>
                      <th class="border-b px-0 py-4 text-md font-normal text-center px-1">ROHS?</th>
                      <th class="border-b px-0 py-4 text-md font-normal text-center px-1">Category</th>
                      <th class="border-b px-0 py-4 text-md font-normal text-center px-1">Subcategory</th>
                    </tr>
                    <tr>
                      <td class="border-b px-0 py-4 font-normal text-lg text-gray-900 px-1 text-center">Test1</td>
                      <td class="border-b px-0 py-4 font-normal text-lg text-gray-900 px-1 text-center">2D.file</td>
                      <td class="border-b px-0 py-4 font-normal text-lg text-gray-900 px-1 text-center">3D.file</td>
                      <td class="border-b px-0 py-4 font-normal text-lg text-gray-900 px-1 text-center">PCBWay</td>
                      <td class="border-b px-0 py-4 font-normal text-lg text-gray-900 px-1 text-center">10</td>
                      <td class="border-b px-0 py-4 font-normal text-lg text-gray-900 px-1 text-center">
                         <input class="border border-gray-800 appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none " type="text" placeholder="" value="100"> 
                      </td>
                      <td class="border-b px-0 py-4 font-normal text-lg text-gray-900 px-1 text-center">
                        <input class="border border-gray-800 appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none " type="text" placeholder="p1" >
                      </td>
                      <td class="border-b px-0 py-4 font-normal text-lg text-gray-900 px-1 text-center">
                        <input class="border border-gray-800 appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none " type="text" placeholder="2019" value=""> 
                      </td>
                      <td class="border-b px-0 py-4 font-normal text-lg text-gray-900 px-1 text-center">Yes</td>
                      <td class="border-b px-0 py-4 font-normal text-lg text-gray-900 px-1 text-center">
                          <div class="relative">
                          <select class="block appearance-none w-16 bg-white border border-gray-800 hover:border-gray-500 px-1 py-3 pr-8  shadow leading-tight focus:outline-none ">
                              <option>Yes</option>
                              <option>No</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                          </div>
                      </td>
                      <td class="border-b px-0 py-4 font-normal text-lg text-gray-900 px-1 text-center">Category</td>
                      <td class="border-b px-0 py-4 font-normal text-lg text-gray-900 px-1 text-center">Subcategory</td>
                    </tr>
                    <tr>
                      <td class="border-b px-0 py-4 font-normal text-lg text-gray-900 px-1 text-center">Test1</td>
                      <td class="border-b px-0 py-4 font-normal text-lg text-gray-900 px-1 text-center">
                        <input type="file" name="myFile" value="Upload" class="custom-file-input w-full pl-3">
                      </td>
                      <td class="border-b px-0 py-4 font-normal text-lg text-gray-900 px-1 text-center">3D.file</td>
                      <td class="border-b px-0 py-4 font-normal text-lg text-gray-900 px-1 text-center">PCBWay</td>
                      <td class="border-b px-0 py-4 font-normal text-lg text-gray-900 px-1 text-center">10</td>
                      <td class="border-b px-0 py-4 font-normal text-lg text-gray-900 px-1 text-center">
                         <input class="border border-gray-800 appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none " type="text" placeholder="" value="100"> 
                      </td>
                      <td class="border-b px-0 py-4 font-normal text-lg text-gray-900 px-1 text-center">
                        <input class="border border-gray-800 appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none " type="text" placeholder="p1" >
                      </td>
                      <td class="border-b px-0 py-4 font-normal text-lg text-gray-900 px-1 text-center">
                        <input class="border border-gray-800 appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none " type="text" placeholder="2019" value=""> 
                      </td>
                      <td class="border-b px-0 py-4 font-normal text-lg text-gray-900 px-1 text-center">Yes</td>
                      <td class="border-b px-0 py-4 font-normal text-lg text-gray-900 px-1 text-center">
                          <div class="relative">
                          <select class="block appearance-none w-16 bg-white border border-gray-800 hover:border-gray-500 px-1 py-3 pr-8  shadow leading-tight focus:outline-none ">
                              <option>Yes</option>
                              <option>No</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                          </div>
                      </td>
                      <td class="border-b px-0 py-4 font-normal text-lg text-gray-900 px-1 text-center">Category</td>
                      <td class="border-b px-0 py-4 font-normal text-lg text-gray-900 px-1 text-center">Subcategory</td>
                    </tr> 
                  </tbody>
                </table>
         </div>

         <div class="text-right my-4">
            <button class="bg-ideeza text-xl border font-semibold text-white py-2 px-24 rounded-full rounded-full shadow-lg mt-5">Update</button>   
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

.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}
.custom-file-input::before {
  content: 'upload';
  display: inline-block;
  color: #fc00c5;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  margin-top: 15px;
}
.custom-file-input:hover::before {
  border-color: black;
}
.custom-file-input:active::before {
  background: #fff;
}
</style>