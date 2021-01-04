<template>
  <div class="w-full">
    <div class="w-full shadow-md bg-white relative">

      <div class="p-5 lg:flex justify-between items-center">
        <div class="flex items-center">
          <div class="flex items-center mr-5">
            <span class="mr-1">Name</span>
            <input type="text" class="w-32 bg-white p-1 border border-solid border-gray-400">
          </div>
          <div class="flex items-center">
            <span class="mr-1">Category</span>
            <select class="w-32 bg-white p-1 border border-solid border-gray-400">
              <option></option>
            </select>
          </div>
        </div>
        <div class="flex items-center">
          <button class="btn pill-button py-0 px-5 mr-5" >Upload 3D</button>
          <button class="btn pill-button py-0 px-5" >Upload image</button>
        </div>
      </div>

      <div class="content-container relative">
        <img class="object-center object-cover" src="~/static/images/add-cover.png" alt="">
      </div>

      <div class="flex justify-between p-5 w-full">
        <div class="flex items-center font-semibold text-gray-800">
          <span class="mr-2">Axis</span>
          <span class="mr-2 text-lg">X</span>
          <input type="text" class="w-20 bg-white p-1 border border-solid border-gray-400 mr-2">
          <span class="mr-2 text-lg">Y</span>
          <input type="text" class="w-20 bg-white p-1 border border-solid border-gray-400 mr-2">
          <span class="mr-2 text-lg">Z</span>
          <input type="text" class="w-20 bg-white p-1 border border-solid border-gray-400 mr-2">
        </div>
        <div class="flex items-center font-semibold text-gray-800">
          <span class="mr-3">Color</span>
          <div class="rounded-full w-10 h-10 bg-blue-700 cursor-pointer"></div>
        </div>
        <div class="flex">
          <button class="btn pill-button py-0 px-5" >Translate</button>
          <button class="btn pill-button py-0 px-5 mx-5" >Scale</button>
          <button class="btn pill-button py-0 px-5" >Rotate</button>
        </div>

      </div>

      <div v-if="!description" @click="description=true" class="p-5 bg-gray-200 text-center cursor-pointer">
        + Add description
      </div>

      <div v-if="description" class="w-full flex p-5 border-t border-solid border-gray-300">
        <span class="font-semibold mr-5 flex-shrink">Description</span>
        <div class="flex-grow">
          <textarea rows="2" class="bg-white p-1 border border-solid border-gray-400 w-full"></textarea>
        </div>
      </div>

    </div>

    <div class="w-full mt-10 lg:flex justify-end">
      <button class="btn pill-button py-0 px-20 mr-5" >+ Add new part</button>
      <button class="btn pill-button pill-button--ideeza py-0 px-12" >Save</button>
    </div>
  </div>

</template>

<script>
    export default {
        name: "cover",
      data: () => {
          return {
            description: false
          }
      }
    }
</script>

<style scoped>
  select{
    min-width: 130px;
  }
  .content-container{
    /*height: 300px;*/
  }
</style>
