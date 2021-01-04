<template>
  <div >

    <div class="flex">

      <div class="w-3/5 ">
        <div class="flex justify-between items-center mb-5">
          <span class="font-semibold">
            Edit QFN Square Package Overall Dimensions
          </span>
          <span class="text-gray-600">
            {{step}}/{{maxStep}}
          </span>
        </div>

        <div v-if="step === 1">
          <div class="shadow-md px-5 py-3 bg-white">
            <div class="flex justify-between items-center pb-2 border-b border-solid border-gray-400">
              <span class="font-semibold ">Body Span Range (E)</span>
              <div class="flex items-center">
                <span class="inline-block mr-5">Min</span>
                <input type="text" class="px-2 py-1 border border-gray-400 w-24">
              </div>
              <div class="flex items-center">
                <span class="inline-block mr-5">Max</span>
                <input type="text" class="px-2 py-1 border border-gray-400 w-24">
              </div>
            </div>
          </div>
          <div class="shadow-md px-5 py-3 bg-white">
            <div class="flex justify-between items-center pb-2 border-b border-solid border-gray-400">
              <span class="font-semibold ">Body Span Range (D)</span>
              <div class="flex items-center">
                <span class="inline-block mr-5">Min</span>
                <input type="text" class="px-2 py-1 border border-gray-400 w-24">
              </div>
              <div class="flex items-center">
                <span class="inline-block mr-5">Max</span>
                <input type="text" class="px-2 py-1 border border-gray-400 w-24">
              </div>
            </div>
          </div>
          <div class="shadow-md px-5 py-3 bg-white ">
            <div class="w-392 flex items-center justify-between pb-2 border-b border-solid border-gray-400 relative">
              <span class="font-semibold ">Height (H)</span>
              <div class="flex items-center">
                <span class="inline-block mr-5">Max</span>
                <input type="text" class="px-2 py-1 border border-gray-400 w-24 ">
              </div>

            </div>
          </div>
          <div class="shadow-md px-5 py-3 bg-white ">
            <div class="w-392 flex items-center justify-between pb-2 border-b border-solid border-gray-400 relative">
              <span class="font-semibold ">Standoff Height (A1)</span>
              <div class="flex items-center">
                <span class="inline-block mr-5">Min</span>
                <input type="text" class="px-2 py-1 border border-gray-400 w-24 ">
              </div>

            </div>
          </div>
          <div class="shadow-md px-5 py-3 bg-white ">
            <div class="w-392 flex items-center justify-between pb-2 border-b border-solid border-gray-400 relative">
              <span class="font-semibold ">Chamfered Corner (CH)</span>
              <input type="text" class="px-2 py-1 border border-gray-400 w-24 ">


            </div>
          </div>
          <div class="shadow-md px-5 py-3 bg-white ">
            <div class="w-392 flex items-center justify-between pb-2 border-b border-solid border-gray-400 relative">
              <span class="font-semibold ">Pin 1 location</span>
              <select class="bg-white border border-gray-400 p-2">
                <option value="">Side of D</option>
              </select>


            </div>
          </div>
        </div>

        <div v-if="step === 2">
          <div class="shadow-md px-5 py-3 bg-white ">
            <div class="w-392 flex items-center justify-between pb-2 border-b border-solid border-gray-400 relative">
              <span class="font-semibold ">Height (H)</span>
              <div class="flex items-center">
                <span class="inline-block mr-5">Max</span>
                <input type="text" class="px-2 py-1 border border-gray-400 w-24 ">
              </div>

            </div>
          </div>
          <div class="shadow-md px-5 py-3 bg-white ">
            <div class="w-392 flex items-center justify-between pb-2 border-b border-solid border-gray-400 relative">
              <span class="font-semibold ">Standoff Height (A1)</span>
              <div class="flex items-center">
                <span class="inline-block mr-5">Min</span>
                <input type="text" class="px-2 py-1 border border-gray-400 w-24 ">
              </div>

            </div>
          </div>
          <div class="shadow-md px-5 py-3 bg-white ">
            <div class="w-392 flex items-center justify-between pb-2 border-b border-solid border-gray-400 relative">
              <span class="font-semibold ">Chamfered Corner (CH)</span>
              <input type="text" class="px-2 py-1 border border-gray-400 w-24 ">


            </div>
          </div>
          <div class="shadow-md px-5 py-3 bg-white ">
            <div class="w-392 flex items-center justify-between pb-2 border-b border-solid border-gray-400 relative">
              <span class="font-semibold ">Pin 1 location</span>
              <select class="bg-white border border-gray-400 p-2">
                <option value="">Side of D</option>
              </select>


            </div>
          </div>
        </div>


        <!--Navigation-->
        <div class="flex justify-between mt-10">
          <button @click="back" class="btn pill-button px-16 py-0">Back</button>
          <button @click="next" class="btn pill-button px-16 py-0">Next</button>
          <button @click="$emit('next')" class="btn pill-button pill-button--ideeza px-16 py-0">Finish</button>
        </div>
      </div>



      <div class="w-2/5 pl-5">
        <div class="flex items-center mb-5 justify-end">
          <div class="view-button-container">
            <div @click="activeView = '2D'" :class="{'active': activeView === '2D'}" class="view-style b-right">2D Preview</div>
            <div @click="activeView = '3D'" :class="{'active': activeView === '3D'}" class="view-style b-left">3D Preview</div>
          </div>
        </div>
        <div class="view-container bg-gray-500">
          <Engine />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Engine from '~/components/technician/electronics/add-part/engine.vue'
    export default {
        name: "configure",
        data: () => {
            return {
                step: 1,
                maxStep: 10,
                activeView: '3D'
            }
        },
      components: {
          Engine
      },
        methods: {
            back () {
                if(this.step > 1)
                    this.step -= 1;
            },
            next () {
                if(this.step < this.maxStep)
                    this.step += 1;
            }
        }
    }
</script>

<style scoped>
.w-392{
  width: 392px;
}
.view-container{
  height: 480px;
}
.view-button-container{
  @apply flex justify-between rounded-full border border-solid border-gray-400 relative bg-gray-300;
  width: 300px;
  height: 25px;
}
  .view-style {
    @apply text-center px-12 h-full align-middle text-xs absolute cursor-pointer;
    line-height: 26px;
  }

.view-style:hover{
  @apply rounded-full z-40 bg-white;
}

  .view-style.active{
    @apply bg-ideeza-dark rounded-full text-white absolute z-50;
  }
  .b-right{
    @apply left-0;
  }

.b-left{
  @apply right-0;
}

</style>
