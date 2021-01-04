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
            <div class="menu-button-container" >
             <div class="py-2 text-gray-600">App info</div>  
             <div class="py-2 text-ideeza">Tempale</div>  
             <div class="py-2 text-gray-600">User interface</div>  
             <div class="py-2 text-gray-600">Prototyping</div>  
             
          </div>
          </div>
        </div>
      </div>



    </div>

    <!-- Main Contents -->
    <div class="flex-grow">
      <!--Panel Menu-->
      <div class="main-contents">
        
        <div class="flex justify-between flex-col lg:flex-row border-b border-gray-400 pl-5 pr-5 lg:pl-0 lg:pr-0 pb-3">
          <div class="text-xl font-bold m-3 lg:m-0 text-center lg:text-left">Circuit Board</div>
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
          <div class="w-full m-auto px-3">
           
           <h2 class="text-gray-800 text-xl mt-8">
              <img src="~/static/images/i-icon.png" class="inline-block">
              Application settings
           </h2>
        
          <div class="p-5 bg-white flex flex-wrap bg-white rounded-lg shadow-lg m-auto"> 
            <div class="w-6/12 p-3">
              <form class="bg-white rounded px-8 pt-6 pb-8 mb-4">
                <div class="w-full">
                  <div class="mb-4">
                    <label class="block text-gray-900 text-sm font-bold mb-2" for="username">
                      App name
                    </label>
                    <input class="border form-border-color appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="App name">
                  </div>

                  <div class="mb-4">
                    <label class="block text-gray-900 text-sm font-bold mb-2 " for="username">
                      App icon
                    </label>
                    <input type="file" name="myFile" value="Upload" class="custom-file-input w-full pl-3 border rounded w-full py-2 px-3 text-gray-700">

                    <div class="w-full h-48 border mt-5 text-center relative">
                      <div class="absolute top-0 right-0 p-2 text-sm">Remove
                        <img src="~/static/images/bin.png" class="inline-block">
                      </div>
                      <img src="~/static/images/app-icon.png" class="inline-block mt-5">
                    </div>

                  </div>
 
                </div>
                 
                
                <div class=" mt-10">
                  <button class="border bg-ideeza text-white py-2 px-10 text-xl">Save</button>
                  <button class="border text-gray-600 py-2 px-10 text-xl ml-5">Discard</button>
                </div> 

            </form>
            </div>
            <div class="w-6/12 p-3">
              <form class="bg-white rounded px-8 pt-6 pb-8 mb-4">
                  <div class="w-full">
                    <div class="mb-4">
                      <label class="block text-gray-900 text-sm font-bold mb-2" for="username">
                        Author name
                      </label>
                      <input class="border form-border-color appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Author name">
                    </div>

                    <div class="mb-4">
                      <label class="block text-gray-900 text-sm font-bold mb-2" for="username">
                        Date of creation
                      </label>
                      <input class="border form-border-color appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Date of creation">
                    </div>

                    <div class="mb-4">
                      <label class="block text-gray-900 text-sm font-bold mb-2" for="username">
                        Android version
                      </label>
                      <div class="relative">
                          <select class="block appearance-none w-full bg-white border border-gray-800 hover:border-gray-500 px-4 py-3 pr-8  shadow leading-tight focus:outline-none ">
                              <option>Lollipop 2.0.0</option>
                              <option>Option 2</option>
                              <option>Option 3</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                          </div>
                    </div>
                    <div class="mb-4">
                      <label class="block text-gray-900 text-sm font-bold mb-2" for="username">
                        Ios version
                      </label>
                      <div class="relative">
                          <select class="block appearance-none w-full bg-white border border-gray-800 hover:border-gray-500 px-4 py-3 pr-8  shadow leading-tight focus:outline-none ">
                              <option>Lollipop 2.0.0</option>
                              <option>Option 2</option>
                              <option>Option 3</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                          </div>
                    </div>
                  </div>
                   
                    <button class="w-full bg-gray-800 text-white font-bold py-4 px-5 shadow-lg mt-5">Choose you smartphone</button> 
              </form>
            </div>
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
select{
  max-width:unset;
}

.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}
.custom-file-input::before {
  content: 'choose';
    display: inline-block;
    color: #fff;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    font-size: 11px;
    background: #fc00c5;
    padding: 8px 20px;
    border-radius: 4px;
}
.custom-file-input:hover::before {
  border-color: black;
}
.custom-file-input:active::before {
  background: #fff;
}
</style>
