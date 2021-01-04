<template>
  <div class="flex justify-between w-full">
    <div class="w-3/5 ">
      <div class="bg-white shadow-md mr-5">
        <div class="flex items-center bg-white p-3 pb-1 border-b border-solid border-gray-300">
          <div class="w-32 font-semibold">
            Chart Title
          </div>
          <div class="flex-grow">
            <input @input="updateChartTitle($event)"  type="text" class="chart-input w-full">
          </div>
        </div>
        <div class="flex items-center bg-white p-3 pb-1 border-b border-solid border-gray-300">
          <div class="w-32 font-semibold">
            Label
          </div>
          <div class="flex-grow flex justify-between">
            <div class="flex items-center">
              <span class="text3-xl inline-block ">X</span>
              <input @input="updateChartXTitle($event)" type="text" class="chart-input w-32 mx-2">
              <select class="select">
                <option>mV</option>
              </select>
            </div>
            <div class="flex items-center justify-end">
              <span class="text3-xl inline-block mr-2">Y</span>
              <input @input="updateChartYTitle($event)" type="text" class="chart-input w-32 mx-2">
              <select class="select">
                <option>mV</option>
              </select>
            </div>
          </div>
        </div>

        <div v-for="(chart,index) in chartFaker" :key="`${chart.y}-${index} `" class="flex items-center bg-white p-3 pb-1 border-b border-solid border-gray-300">
          <div class="w-32 font-semibold">
            Add Value
          </div>
          <div class="flex-grow flex justify-between">
            <div class="flex items-center">
              <span class="text3-xl inline-block mr-2">X</span>
              <input @input="updateChartValueX($event, index)" v-model="chart.x"   type="text" class="chart-input w-48">

            </div>
            <div class="flex items-center">
              <span class="text3-xl inline-block mr-2">Y</span>
              <input @input="updateChartValueY($event, index)" v-model="chart.y"  type="text" class="chart-input w-48">

            </div>
            <div>
              <font-awesome-icon @click="removeChartValue(index)" class="mr-1 h-4 cursor-pointer" :icon="['fas', 'times']"/>
            </div>
          </div>
        </div>

        <div @click="addChartValue" class="text-center bg-gray-200 w-full cursor-pointer p-3 text-gray-600 cursor-pointer" >
          + Add new value
        </div>
      </div>


      <!--Navigation-->
      <div class="flex justify-between mt-10 mr-5">
        <button @click="$emit('back')" class="btn pill-button px-16 py-0">Back</button>
        <button @click="$emit('next')" class="btn pill-button pill-button--ideeza px-16 py-0">Next</button>
      </div>
    </div>

    <div class="w-2/5">
      <apexchart width="420" height="400" type="bar" :options="chartOptions" :series="chartData"></apexchart>
    </div>

  </div>

</template>

<script>
  import _ from 'lodash';
    export default {
        name: "line-chart",
      data: () => {
        return {
          id: 1,
          chartVals: [],
          chartTitle: '',
          chartOptions: {
            title: {
              margin: 10,
              offsetX: 10,
              style: {
                fontSize:  '16px',
                color:  '#ff00c7'
              },
            },
            xaxis: {
              title: {
                offsetX: 0,
                offsetY: 0,
                color: '#431184'
              }
            },
            yaxis: {
              title: {
                offsetX: 0,
                offsetY: 0,
                color: '#431184'
              }
            }
          },
          chartData: [{
            data: [

            ]
          }],
          chartFaker: []
        }
      },

      methods: {
          updateChartValueX($event, index) {
            this.chartFaker[index].x = $event.target.value;
            if(!_.isNil(this.chartFaker[index].x) && !_.isNil(this.chartFaker[index].y)) {
              let newData = [];
              _.forEach(this.chartFaker, (obj) => {
                if(!_.isNil(obj.x) && !_.isNil(obj.y)){
                  newData.push({
                    x: obj.x,
                    y: obj.y
                  })
                }
              })
              this.chartData = [{data: newData}];
            }

          },
        updateChartValueY($event, index) {
          this.chartFaker[index].y = $event.target.value;
          if(!_.isNil(this.chartFaker[index].x) && !_.isNil(this.chartFaker[index].y)) {
            let newData = [];
            _.forEach(this.chartFaker, (obj) => {
              if(!_.isNil(obj.x) && !_.isNil(obj.y)){
                newData.push({
                  x: obj.x,
                  y: obj.y
                })
              }
            })
            this.chartData = [{data: newData}];
          }
        },
        addChartValue() {

          this.chartFaker.push({
            x: null,
            y: null
          });

        },
        removeChartValue(index) {
          this.chartFaker.splice(index, 1);
          console.log(this.chartFaker)
          this.chartData = [{data: this.chartFaker}];
        },
        updateChartTitle($event) {
          this.chartOptions = {
            title: {
              text: $event.target.value
            }
          }
        },
        updateChartXTitle($event) {
          this.chartOptions = {
            xaxis: {
              title: {
                text: $event.target.value
              }
            }
          }
        },
        updateChartYTitle($event) {
          this.chartOptions = {
            yaxis: {
              title: {
                text: $event.target.value
              }
            }
          }
        }
      }
    }
</script>

<style scoped>
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
