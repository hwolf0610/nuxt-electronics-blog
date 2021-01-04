<template>
  <div  class="" class="flex main-panel">
    <!--  Left Side Bar  -->
    <div class="flex-shrink flex flex-col justify-between p-10 bg-white h-full shadow left-side-bar">
      <div class="flex-shrink">
        <!--Search-->
        <div class="flex bg-gray-200 border border-solid border-gray-500 rounded-sm">
          <div class="flex-shrink flex contents-center p-2 bg-gary-400">
            <img  src="https://img.icons8.com/ios-glyphs/22/a0aec0/search.png" >
          </div>
          <div class="flex-grow">
            <input type="text" class="w-full h-full border-0 outline-none bg-gray-200" placeholder="search">
          </div>
        </div>

        <!--Left Menu-->
        <div class="mt-10 ">
          <div class="menu-button-container" >

            <div class="mb-3 flex relative content-center font-semibold" >
              Electronics
            </div>
            <!--Sub Menu Items-->
               
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Button</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Checkbox</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Datepicker</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Image</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Label</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Listview</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Listpicker</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Notifier</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Passwordtextbox</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Slider</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Spinner</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Textbox</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Spinner</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Timepicker </check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Webviewer</check-box>
            <check-box class="py-3 pl-4 block hover:text-pink-900" >Layout</check-box>
             

            <div class="flex items-center font-semibold text-lg text-ideeza-black">
              <input class="mr-3" type="color" > BG Color  </div>

            <hr />

            <nuxt-link class="button" to="/technician/electronics/add-part">Add Part</nuxt-link>
            <nuxt-link class="button" to="technician/electronics/add-component">Add Component</nuxt-link>
            <nuxt-link class="button" to="technician/electronics/add-pcb">Add PCB</nuxt-link>
          </div>
        </div>
      </div>



    </div>

    <!-- Main Contents -->
    <div class="flex-grow">
      <!--Panel Menu-->
      <div class="main-contents">
        
        <div class="flex justify-between flex-col lg:flex-row border-b border-gray-400 pl-5 pr-5 lg:pl-0 lg:pr-0 pb-3">
          <div class="text-xl font-bold m-3 lg:m-0 text-center lg:text-left">APP Inventor</div>
          <div class="flex items-center justify-center content-center">
            <span class="panel-menu text-center" >
              <font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'bolt']"/>Electronics</span>
            <span class="ml-5 panel-menu text-center">
              <font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'code']"/>Code</span>
            <span class="ml-5 panel-menu text-center" >
              <font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'cube']"/>Cover</span>
            <span class="ml-5 panel-menu text-center"  >
              <font-awesome-icon class="mr-1 panel-menu-icon" :icon="['fas', 'wrench']"/>General</span>
          </div>
        </div>

        <div class="flex">
          <div class="w-9/12">
         
          <div class="py-5 flex w-full px-2">
            <div class="flex-1">
              <div class="inline-block px-5">Single screen view</div>
              <div class="inline-block px-5 text-ideeza">Multiple screens view</div>
            </div>
            <div class="">
              <button class="border bg-ideeza text-white py-2 px-10 text-xl">Design</button>
              <button class="border text-gray-600 py-2 px-10 text-xl ml-5">Code</button>
            </div>
        </div>
        

        <div class="w-full mt-10">
              
            <div class="w-6/12 m-auto bg-white rounded-lg shadow p-3">
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

        </div>

      </div>

      <div class="w-3/12 bg-white shadow">
        <div class=" text-gray-900 py-5 text-xl text-center">Layers</div>
          <div class="flex px-5 text-left w-full">
            <div class="w-2/12"></div>
            <div class="w-9/12">Button</div>
            <div class="w-1/12 text-gray-900 font-bold text-xl text-center">-</div>
          </div>
          <div class="flex px-5 text-left w-full">
            <div class="w-2/12"></div>
            <div class="w-9/12">Properties</div>
            <div class="w-1/12 text-gray-900 font-bold text-xl text-center">-</div>
          </div>
          <div class="flex px-5 text-left w-full">
            <div class="w-2/12"></div>
            <div class="w-9/12">
              <div class=" w-5 h-5 mr-5 bg-ideeza inline-block"></div> Color
            </div>
          </div>
          <div class="flex px-5 text-left w-full">
            <div class="w-2/12"></div>
            <div class="w-9/12">
              10 Border radius
            </div>
          </div>
          <div class="flex px-5 text-left w-full">
            <div class="w-2/12"></div>
            <div class="w-9/12">
              120 Width(px)
            </div>
          </div>
          <div class="flex px-5 text-left w-full">
            <div class="w-2/12"></div>
            <div class="w-9/12">
              110 Height(px)
            </div>
          </div>
          <div class="flex px-5 text-left w-full">
              <div class="w-2/12"></div>
              <div class="w-9/12">Inside Layer</div>
              <div class="w-1/12 text-gray-900 font-bold text-xl text-center">-</div>
            </div>
      </div>
      </div>
    </div>
  </div>
</div>
</template>
 
<style scoped>

.select-layout-btn [type="radio"]:checked,
.select-layout-btn [type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
}
.select-layout-btn [type="radio"]:checked + label,
.select-layout-btn [type="radio"]:not(:checked) + label
{
    position: relative;
    padding:4px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #666;
    border: 1px solid #fff;
} 
.select-layout-btn [type="radio"]:not(:checked) + label:after {
    border: none;
}
.select-layout-btn [type="radio"]:checked + label {
  border: 1px solid #ff14c9;  
}
.w-1-8 {width: 12.5%}
.green-btn{
  background:#03be33;
}
</style>
