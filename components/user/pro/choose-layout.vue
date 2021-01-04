<template>
<div @click.self="$emit('close')" class="popup-overlay">
    <div class="popup-overlay--contents add-new-container">
    <div class="p-6">
        <div class="flex justify-between py-5">
          <h3 class="font-semibold">Choose the layout</h3>
          <div class="flex bg-gray-200 border border-solid border-gray-500 rounded-sm">
          <div class="flex-shrink flex contents-center p-2 bg-gary-400">
            <img  src="https://img.icons8.com/ios-glyphs/22/a0aec0/search.png" >
          </div>
          <div class="flex-grow">
            <input type="text" class="w-full h-full border-0 outline-none bg-gray-200" placeholder="search">
          </div>
        </div>
        </div>
        <form action="#">
          <div class="flex flex-wrap text-center">
            <div class="select-layout-btn mr-5 mb-5">
              <input type="radio" id="layout1" name="radio-group" checked>
              <label for="layout1"><img src="~/static/images/layout-1.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn mr-5 mb-5">
              <input type="radio" id="layout2" name="radio-group">
              <label for="layout2"><img src="~/static/images/layout-2.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn mr-5 mb-5">
              <input type="radio" id="layout3" name="radio-group">
              <label for="layout3"><img src="~/static/images/layout-3.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn mr-5 mb-5">
              <input type="radio" id="layout4" name="radio-group">
              <label for="layout4"><img src="~/static/images/layout-4.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn mr-5 mb-5">
              <input type="radio" id="layout5" name="radio-group">
              <label for="layout5"><img src="~/static/images/layout-5.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn mr-5 mb-5">
              <input type="radio" id="layout6" name="radio-group">
              <label for="layout6"><img src="~/static/images/layout-6.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn mr-5 mb-5">
              <input type="radio" id="layout7" name="radio-group">
              <label for="layout7"><img src="~/static/images/layout-7.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn mr-5 mb-5">
              <input type="radio" id="layout8" name="radio-group">
              <label for="layout8"><img src="~/static/images/layout-8.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn mr-5 mb-5">
              <input type="radio" id="layout9" name="radio-group">
              <label for="layout9"><img src="~/static/images/layout-9.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn mr-5 mb-5">
              <input type="radio" id="layout10" name="radio-group">
              <label for="layout10"><img src="~/static/images/layout-10.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn mr-5 mb-5">
              <input type="radio" id="layout11" name="radio-group">
              <label for="layout11"><img src="~/static/images/layout-11.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn mr-5 mb-5">
              <input type="radio" id="layout12" name="radio-group">
              <label for="layout12"><img src="~/static/images/layout-12.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn mr-5 mb-5">
              <input type="radio" id="layout13" name="radio-group">
              <label for="layout13"><img src="~/static/images/layout-13.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn mr-5 mb-5">
              <input type="radio" id="layout14" name="radio-group">
              <label for="layout14"><img src="~/static/images/layout-14.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn mr-5 mb-5">
              <input type="radio" id="layout15" name="radio-group">
              <label for="layout15"><img src="~/static/images/layout-15.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn mr-5 mb-5">
              <input type="radio" id="layout16" name="radio-group">
              <label for="layout16"><img src="~/static/images/layout-16.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn mr-5 mb-5">
              <input type="radio" id="layout17" name="radio-group">
              <label for="layout17"><img src="~/static/images/layout-17.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn mr-5 mb-5">
              <input type="radio" id="layout18" name="radio-group">
              <label for="layout18"><img src="~/static/images/layout-18.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn mr-5 mb-5">
              <input type="radio" id="layout19" name="radio-group">
              <label for="layout19"><img src="~/static/images/layout-19.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn mr-5 mb-5">
              <input type="radio" id="layout20" name="radio-group">
              <label for="layout20"><img src="~/static/images/layout-20.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn mr-5 mb-5">
              <input type="radio" id="layout21" name="radio-group">
              <label for="layout21"><img src="~/static/images/layout-21.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn mr-5 mb-5">
              <input type="radio" id="layout22" name="radio-group">
              <label for="layout22"><img src="~/static/images/layout-22.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn mr-5 mb-5">
              <input type="radio" id="layout23" name="radio-group">
              <label for="layout23"><img src="~/static/images/layout-23.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn mr-5 mb-5">
              <input type="radio" id="layout24" name="radio-group">
              <label for="layout24"><img src="~/static/images/layout-24.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn mr-5 mb-5">
              <input type="radio" id="layout25" name="radio-group">
              <label for="layout25"><img src="~/static/images/layout-25.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn mr-5 mb-5">
              <input type="radio" id="layout26" name="radio-group">
              <label for="layout26"><img src="~/static/images/layout-26.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn mr-5 mb-5">
              <input type="radio" id="layout27" name="radio-group">
              <label for="layout27"><img src="~/static/images/layout-27.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn mr-5 mb-5">
              <input type="radio" id="layout28" name="radio-group">
              <label for="layout28"><img src="~/static/images/layout-28.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn mr-5 mb-5">
              <input type="radio" id="layout29" name="radio-group">
              <label for="layout29"><img src="~/static/images/layout-29.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn mr-5 mb-5">
              <input type="radio" id="layout30" name="radio-group">
              <label for="layout30"><img src="~/static/images/layout-30.png" class="inline-block"></label>
            </div>
            <div class="select-layout-btn mr-5 mb-5">
              <input type="radio" id="layout31" name="radio-group">
              <label for="layout31"><img src="~/static/images/layout-31.png" class="inline-block"></label>
            </div>
          </div>
        </form>
        <div class=" mt-10">
          <button @click="$emit('close')" class="border bg-ideeza text-white py-2 px-10 text-xl">Save</button>
          <button @click="$emit('close')" class="border text-gray-600 py-2 px-10 text-xl ml-5">Discard</button>
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
    font-size: 11px;
} 
.select-layout-btn [type="radio"]:checked + label{
    border: 1px solid #ff00c7;
}
.select-layout-btn [type="radio"]:checked + label {
   color: #ff00c7;
}
.layout-selected{
  display: none;
}
.select-layout-btn [type="radio"]:checked + label img.layout-selected{
  display: inline-block; ;
}
.select-layout-btn [type="radio"]:checked + label img.layout-display{
  display: none ;
}
.w-1-8 {width: 12.5%}
.select-layout-btn label img{
  width: initial;
  height: 60px;
}
</style>