<template>
  <div>
    <div class="flex justify-between items-center bg-white shadow-md  p-4">
      <div class="flex items-center">
        <img src="~/static/images/add-part.png" alt="">
        <div class="ml-5">
          <span class="block font-semibold">
            ATMEGA32M1-AU
          </span>

        </div>
      </div>
      <div>
        <button class="btn pill-button px-8 py-0">Legs</button>
        <button class="btn pill-button px-8 mx-3 py-0">Chart</button>
        <button class="btn pill-button px-8 py-0">2D Preview</button>
        <button class="btn pill-button px-8 mx-3 py-0">3D Preview</button>
        <button class="btn pill-button px-8 py-0">Datasheet</button>
      </div>
    </div>

    <div class="my-10 border-b border-solid border-gray-300">
      <h1 class="font-semibold text-xl">
        Code Editor
      </h1>
    </div>

    <AddCode />
    <div class="flex justify-between mt-10">
      <button @click="$emit('back')" class="btn pill-button px-12 ">Back</button>
      <button class="btn pill-button px-12 ">+ Add New File</button>
      <button @click="$emit('next')" class="btn pill-button pill-button--ideeza px-12">Next</button>
    </div>
  </div>
</template>

<script>

    import AddCode from '~/components/technician/add-code.vue'
    export default {
        name: "add-code",
        components: {
            AddCode
        }
    }
</script>

<style scoped>

</style>
