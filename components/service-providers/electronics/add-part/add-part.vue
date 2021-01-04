<template>
  <div>
    <div class="flex justify-between items-center bg-white shadow-md  p-4">
      <div class="flex items-center">
        <img src="~/static/images/add-part.png" alt="">
        <div class="ml-5">
          <span class="block font-semibold">
            ATMEGA32M1-AU
          </span>
          <span class="text-sm, text-gray-600">
            AVR microcontroller, EEPROM: 1KB; SRAM: 2KB; Flash: 32KB; TQFP32
          </span>
        </div>
      </div>
      <div>
        <button class="btn pill-button px-8 py-0">Datasheet</button>
      </div>
    </div>

    <div class="w-full flex justify-between mt-10">



      <div class="w-45 ">
        <h1 class="font-semibold">Upload 2d and 3d files</h1>
        <div class="container-part-add">
          <img src="~/static/images/cloud-computing.png" alt="">
          <div class="text-center">Drag & drop files here to upload</div>
          <hr data-content="or" class="hr-text">
          <button class="btn pill-button px-16 py-0 mt-2">Select files</button>
        </div>

      </div>
      <div class="flex items-center justify-center">
        OR
      </div>
      <div class="w-45">

        <h1 class="font-semibold">Create new model</h1>
        <div class="container-part-add">
          <div class="w-full flex flex-col items-center " v-if="!createModel">
            <img src="~/static/images/processor.png" alt="">
            <div class="text-center">Create new model from scratch</div>
            <hr data-content="and be creative" class="hr-text">
            <button @click="createModel=true" class="btn pill-button px-16 py-0 mt-2">create model</button>
          </div>

          <div v-if="createModel" class="w-full flex flex-col items-center">
            <span class="font-semibold text-center mb-5">Choose the type of Model</span>
            <button @click="$emit('onSelectType')" class="btn pill-button pill-button--ideeza px-24 py-0 mb-5">SMT</button>
            <hr data-content="or" class="hr-text my-5">
            <button @click="$emit('onSelectType')" class="btn pill-button pill-button--ideeza px-16 py-0">Through Hole</button>
          </div>

        </div>

      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "add-part",
        data: () => {
            return {
                createModel: false
            }
        }
    }
</script>

<style scoped>
  .w-45{
    width: 45%;
  }
  .container-part-add {
    @apply shadow-md mt-2 w-full bg-white flex flex-col items-center justify-center;
    height: 300px;
  }
  .hr-text{
    line-height: 1em;
    position: relative;
    outline: 0;
    border: 0;
    color: #999;
    text-align: center;
    height: 1.5em;
    opacity: .5;
    width: 24em;
    margin-top: -.045em;
  }
  .hr-text:before{
    content: "";
    background: #999;
    position: absolute;
    left: 20%;
    top: 50%;
    width: 60%;
    height: 1px;
  }
  .hr-text:after{
    content: attr(data-content);
    position: relative;
    display: inline-block;
    padding: 0 .5em;
    line-height: 1.5em;
    color: #999;
    background-color: #fcfcfa;
  }
</style>
