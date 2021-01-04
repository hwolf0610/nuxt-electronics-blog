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
          <div class="text-xl font-bold m-3 lg:m-0 text-center lg:text-left">my smartphone</div>
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
          <div class="w-9/12 px-3">
          <div class="flex-1 mt-6">
              <div class="flex bg-gray-200 border border-solid border-ideeza rounded-sm">
                <div class="flex-grow">
                  <input type="text" class="px-3 w-full h-full border-0 outline-none bg-gray-200" placeholder="iPhone 8+">
                </div>
                <div class="flex-shrink flex contents-center p-2 bg-gary-400">
                  <img  src="https://img.icons8.com/ios-glyphs/22/a0aec0/search.png" >
                </div>
              </div>
            </div>
        
          <div class="p-5 bg-white flex flex-wrap">
             <div class="w-2/6 text-center p-3">
               <img src="~/static/images/iphone.png" class="inline-block">
               <p class="py-3 text-gray-800 text-sm">Iphone 8+ (1344 X 750)</p> 
             </div>
             <div class="w-2/6 text-center p-3">
               <img src="~/static/images/iphone.png" class="inline-block">
               <p class="py-3 text-gray-800 text-sm">Iphone 8+ (1344 X 750)</p> 
             </div>
             <div class="w-2/6 text-center p-3">
               <img src="~/static/images/iphone.png" class="inline-block">
               <p class="py-3 text-gray-800 text-sm">Iphone 8+ (1344 X 750)</p> 
             </div>
             <div class="w-2/6 text-center p-3">
               <img src="~/static/images/iphone.png" class="inline-block">
               <p class="py-3 text-gray-800 text-sm">Iphone 8+ (1344 X 750)</p> 
             </div>
             <div class="w-2/6 text-center p-3">
               <img src="~/static/images/iphone.png" class="inline-block">
               <p class="py-3 text-gray-800 text-sm">Iphone 8+ (1344 X 750)</p> 
             </div>
             <div class="w-2/6 text-center p-3">
               <img src="~/static/images/iphone.png" class="inline-block">
               <p class="py-3 text-gray-800 text-sm">Iphone 8+ (1344 X 750)</p> 
             </div>
             <div class="w-2/6 text-center p-3">
               <img src="~/static/images/iphone.png" class="inline-block">
               <p class="py-3 text-gray-800 text-sm">Iphone 8+ (1344 X 750)</p> 
             </div>
             <div class="w-2/6 text-center p-3">
               <img src="~/static/images/iphone.png" class="inline-block">
               <p class="py-3 text-gray-800 text-sm">Iphone 8+ (1344 X 750)</p> 
             </div>
             <div class="w-2/6 text-center p-3">
               <img src="~/static/images/iphone.png" class="inline-block">
               <p class="py-3 text-gray-800 text-sm">Iphone 8+ (1344 X 750)</p> 
             </div>

          </div>     
      </div>

      <div class="w-3/12 bg-white shadow px-3">
        <div class=" text-gray-900 py-5 text-xl text-center">Choose smartphone</div>
           <p>Here you should choose the
smartphone you want to create
application for</p>
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
</style>
