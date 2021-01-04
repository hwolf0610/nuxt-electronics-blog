<template>
<div class="">
      <div class="p-5 mt-2 bg-white shadow-md">

      <!--Form Fields-->
      <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold" >Board Type</div>
        <div class="field-input flex-grow">
          <select class="h-10 border border-black">
            <option>
              Single Pieces
            </option>
             <option>
              Pane by Customer
            </option>
             <option>
              Pane by PCBway
            </option>
          </select>
        </div>
      </div>
      <hr class="my-2">

      <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold" >Different Design in Panel</div>
        <div class="field-input flex-grow mb-2">
          <input class="field h-10"  />
        </div>
      </div>
      <hr class="my-2">
      <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold">Size(single)</div>
        <div class="field-input md:flex flex-1">
          <input class="border border-black mr-2 h-10 flex-1 mb-2 md:mb-0" />
          <input class="border border-black mr-2 h-10 flex-1 mb-2 md:mb-0"/>
          <div class="flex-1">
          <select class="w-full border border-black flex-1 h-10">
            <option>unit</option>
          </select>
          </div>
        </div>
      </div>
       <hr class="my-2">

      <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold">Quantity</div>
        <div class="field-input flex-grow mb-2">
          <input class="field h-10" placeholder="pcs" />
        </div>
      </div>
      <hr class="my-2">

      <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold">Layers</div>
        <div class="field-input flex-grow">
          <select class="h-10 border border-black w-full">
            <option>1 Layer</option>
            <option>2 Layers</option>
            <option>4 Layers</option>
            <option>6 Layers</option>
            <option>8 Layers</option>
            <option>10 Layers</option>
            <option>12 Layers</option>
            <option>14 Layers</option>
          </select>
        </div>
      </div>
      <hr class="my-2">

      <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold" >Material</div>
        <div class="field-input flex-grow">
          <select class="h-10 border border-black w-full">
            <option>
              Normal FR-4 Board
            </option>
            <option>Aluminum Board</option>
            <option>Rigid-flexBox</option>
            <option>Rogers</option>
            <option>Copper Base</option>
          </select>
        </div>
      </div>
      <hr class="my-2">
      <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold" >FR4-TG</div>
        <div class="field-input flex-grow">
          <select class="h-10 border border-black w-full">
            <option>TG 130-140</option>
            <option>TG 150-160</option>
            <option>TG 170-180</option>
          </select>
        </div>
      </div>
      <hr class="my-2">

      <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold">Thickness</div>
        <div class="field-input flex-grow">
          <select class="h-10 border border-black w-full">
            <option>0.2</option>
            <option>0.4</option>
            <option>0.6</option>
            <option>0.8</option>
            <option>1.0</option>
            <option>1.2</option>
            <option>1.6</option>
            <option>2.0</option>
            <option>2.4</option>
            <option>2.6</option>
            <option>2.8</option>
            <option>3.0</option>
            <option>3.2</option>
            <option> >= 1.7-6.0</option>
          </select>
        </div>
      </div>
      <hr class="my-2">

      <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold">Min Track/Spacing</div>
        <div class="field-input flex-grow">
          <select class="h-10 border border-black w-full">
            <option>3/3mil</option>
            <option>4/4mil</option>
            <option>5/5mil</option>
            <option>6/6mil</option>
            <option>8/8mil</option>
          </select>
        </div>
      </div>
      <hr class="my-2">

      <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold">Min Hole Size</div>
        <div class="field-input flex-grow">
          <select class="h-10 border border-black w-full">
            <option>0.15mm</option>
            <option>0.2mm</option>
            <option>0.25mm</option>
            <option>0.3mm</option>
            <option>0.8mm</option>
            <option>1.0mm</option>
            <option>No Drill</option>
          </select>
        </div>
      </div>
      <hr class="my-2">

       <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold" >Solder Mask</div>
        <div class="field-input flex-grow">
          <select class="h-10 border border-black w-full">
            <option>Red</option>
            <option>green</option>
            <option>yellow</option>
            <option>blue</option>
            <option>white</option>
            <option>black</option>
          </select>
        </div>
      </div>
       <hr class="my-2">

       <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold" >Silkscreen</div>
        <div class="field-input flex-grow">
          <select class="h-10 border border-black w-full">
            <option>White</option>
            <option>Black</option>
            <option>None</option>
          </select>
        </div>
      </div>
       <hr class="my-2">

       <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold" >Gold Fingers</div>
        <div class="field-input flex-grow">
          <input type="checkbox">
        </div>
      </div>
       <hr class="my-2">
       <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold" >Surface finish</div>
        <div class="field-input flex-grow">
          <select class="h-10 border border-black w-full">
            <option>
              HASL with lead
            </option>
            <option>
              HASL lead free
            </option>

            <option>
              Immersion gold(ENIG)
            </option>

            <option>
              OSP
            </option>

            <option>
              HArd Gold
            </option>

            <option>
              Immersion Silver
            </option>

            <option>
              ENEPIG
            </option>

            <option>
              None(Plain copper)
            </option>
          </select>
        </div>
      </div>
     <hr class="my-2">
      <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold" >Via Process</div>
        <div class="field-input flex-grow">
          <select class="h-10 border border-black w-full">
            <option>
              Tenting Vias
            </option>
            <option>
              Plugged vias
            </option>
            <option>
              Vias not covered
            </option>
          </select>
        </div>
      </div>
      <hr class="my-2">
       <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold" >Finished copper</div>
        <div class="field-input flex-grow">
          <select class="h-10 border border-black w-full">
            <option>
              1 oz cu
            </option>
            <option>
              2 oz cu
            </option>
            <option>
              3 oz cu
            </option>
            <option>
              4 oz cu
            </option>
            <option>
              5 oz cu
            </option>
            <option>
              6 oz cu
            </option>
            <option>
              7 oz cu
            </option>
            <option>
              8 oz cu
            </option>
            <option>
              9 oz cu
            </option>
            <option>
              10 oz cu
            </option>
            <option>
              11 oz cu
            </option>
            <option>
              12 oz cu
            </option>
            <option>
              13 oz cu
            </option>
          </select>
        </div>
      </div>

      <hr class="my-2">
      <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold">Extra pcb product number</div>
        <div class="field-input flex-grow">
          <input type="checkbox">  Not to add extra pcb product number on board (extra+$3)
        </div>
      </div>
    </div>
    <div class="mt-10">
        <h1 class="font-semibold">Additional Board Specification</h1>
      </div>
      <div class="flex my-2">
        <h1 class="text-ideeza mr-8 font-semibold">
          Aluminum board
        </h1>
        <h1 class="font-semibold mr-8 text-ideeza-gray-700">
          Normal FR Board
        </h1>
        <h1 class="font-semibold mr-8 text-ideeza-gray-700">
          Rigid-Flex-Board
        </h1>
        <h1 class="font-semibold text-ideeza-gray-700">
          Card Board
        </h1>
      </div>
      <hr class="my-2">
      <div class="p-5 bg-white shadow-md">

      <!--Form Fields-->
      <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold" >Max Layers</div>
        <div class="field-input flex-grow">
          <select class="h-10 border border-black w-full">
            <option>
              1 Layer
            </option>
            <option>
              2 Layer
            </option>
            <option>
              4 Layer
            </option>
            <option>
              6 Layer
            </option>
            <option>
              8 Layer
            </option>
            <option>
              10 Layer
            </option>
            <option>
              12 Layer
            </option>
            <option>
              14 Layer
            </option>
          </select>
        </div>
      </div>


       <hr class="my-2">

      <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold" >Copper layers</div>
        <div class="field-input flex-grow">
          <select class="h-10 border border-black w-full">
            <option>
              1 oz Cu
            </option>
            <option>
              2 oz Cu
            </option>
            <option>
              3 oz Cu
            </option>
            <option>
              4 oz Cu
            </option>
            <option>
              5 oz Cu
            </option>
            <option>
              6 oz Cu
            </option>
            <option>
              7 oz Cu
            </option>
            <option>
              8 oz Cu
            </option>
            <option>
              9 oz Cu
            </option>
            <option>
              10 oz Cu
            </option>
            <option>
              11 oz Cu
            </option>
            <option>
              12 oz Cu
            </option>
            <option>
              13 oz Cu
            </option>
          </select>
        </div>
      </div>
      <hr class="my-2">
       <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold" >Solder Mask</div>
        <div class="field-input flex-grow">
          <select class="h-10 border border-black w-full">
            <option>Red</option>
            <option>green</option>
            <option>yellow</option>
            <option>blue</option>
            <option>white</option>
            <option>black</option>
          </select>
        </div>
      </div>
       <hr class="my-2">
       <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold" >FR4-TG</div>
        <div class="field-input flex-grow">
          <select class="h-10 border border-black w-full">
            <option>
              TG 130-140
              </option>
              <option>
              TG 140-150
              </option>
              <option>
              TG 150-160
              </option>
          </select>
        </div>
      </div>
 <hr class="my-2">

      <div class="form-field md:flex items-center">
        <div class="field-label md:w-1/3 font-semibold" >Min Thickness</div>
        <div class="field-input flex-grow mb-2">
          <select class="h-10 border border-black w-full">
             <option>0.2</option>
            <option>0.4</option>
            <option>0.6</option>
            <option>0.8</option>
            <option>1.0</option>
            <option>1.2</option>
            <option>1.4</option>
            <option>1.6</option>
            <option>1.8</option>
            <option>2.0</option>
            <option>2.1</option>
            <option>2.2</option>
            <option>2.4</option>
            <option>2.6</option>
            <option>2.8</option>
            <option>3.0</option>
            <option>3.2</option>
          </select>
        </div>
      </div>
  </div>
  <div class="text-center mt-5">
    <button class="bg-ideeza text-white text-base px-10 py-2 rounded-full">Save</button>
  </div>
</div>
</template>
<script>
export default {
  layout:'user'
}
</script>
<style scoped>
.field-input select {
  max-width: 100%;
  min-width: 100%;
}
</style>
