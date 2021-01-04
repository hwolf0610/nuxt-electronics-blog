<template>
  <div >
    <div class="flex justify-between items-center bg-white shadow-md  p-4">
      <div class="flex items-center">
        <img src="~/static/images/add-part.png" alt="">
        <div class="ml-5">
          <span class="block font-semibold">
            ATMEGA32M1-AU
          </span>
          <span class="text-sm, text-gray-600">
            AVR microcontroller, EEPROM: 1KB; SRAM: 2KB;...
          </span>
        </div>
      </div>
      <div>
        <button class="btn pill-button px-8 py-0">2D Preview</button>
        <button class="btn pill-button px-8 mx-3 py-0">3D Preview</button>
        <button class="btn pill-button px-8 py-0">Datasheet</button>
      </div>
    </div>

    <div class="my-10 border-b border-solid border-gray-300">
      <h1 class="font-semibold text-xl">
        Add Electronics Configuration
      </h1>
    </div>

    <div v-if="showSelection" class="w-full flex justify-between mt-10">
      <div class="w-48 ">
        <div class="container-part-add">
          <img src="~/static/images/e-chip.png" alt="">

          <button @click="legMeaning" class="btn pill-button px-24 py-0 mt-10">Leg Meaning</button>
        </div>

      </div>

      <div class="w-48">
        <div class="container-part-add">
          <div class="w-full flex flex-col items-center ">
            <img src="~/static/images/e-bar-chart.png" alt="">

            <button @click="addChart"  class="btn pill-button px-32 py-0 mt-10">Chart</button>
          </div>
        </div>

      </div>
    </div>



    <div v-if="!showSelection" >
      <div class="flex mb-10 justify-between w-full">
        <div @click="electronic = 'leg'" :class="{'active': electronic === 'leg'}" class="big-button">Leg Meaning</div>
        <div @click="electronic = 'chart'" :class="{'active': electronic === 'chart'}" class="big-button">Chart</div>
      </div>


          <div v-if="electronic === 'leg'">
            <leg-meaning @next="$emit('next')" @back="$emit('back')" />
          </div>

          <div v-if="electronic === 'chart'">

            <bar-chart @next="$emit('next')" @back="$emit('back')"  />

          </div>




    </div>

  </div>
</template>

<script>

  import BarChart from '~/components/charts/bar-chart'
  import LegMeaning from '~/components/technician/electronics/add-part/add-electronics-meaning'
    export default {
        name: "add-electronics",
        data: () => {
            return {
              datacollection: null,

                showSelection: true,
                electronic: 'leg',


            }
        },
      components: {
        'bar-chart': BarChart,
        'leg-meaning': LegMeaning
      },
      mounted () {

      },
      methods: {


            removeChartValue(index) {
                this.chartVals.splice(index, 1);
            },
            addChartValue() {
                this.chartVals.push({id: 1});
            },
            legMeaning() {
              this.electronic = 'leg';
              this.showSelection = false;
            },
            addChart() {
              this.electronic = 'chart';
              this.showSelection = false;
            },

        }
    }
</script>

<style scoped>
  .w-48{
    width: 48%;
  }
  .container-part-add {
    @apply shadow-md mt-2 w-full bg-white flex flex-col items-center justify-center;
    height: 300px;
  }
  .view-container{
    height: 400px;
  }

  .big-button{
    @apply bg-white border border-solid border-gray-300 text-center p-3 font-semibold text-xl cursor-pointer;
    width: 49%;
  }
  .big-button.active{
    @apply bg-transparent text-ideeza;
  }
  .select{
    @apply border border-gray-400 bg-white px-2 py-1 w-20 mr-2;
    height: 34px;
  }
  .leg-input{
    @apply border border-gray-400 px-2 py-1 mr-2;
    width: 115px;
  }
  .chart-input{
    @apply border border-gray-400 px-2 py-1;

  }
</style>
