<template>
    <div class="email-support-container mx-auto mt-32">
      <div class="stepper-bar bg-gray-200 relative mx-auto mb-20">
        <div class="stepper-bar-overlay bg-ideeza-dark" :style="`width: ${overlayWidth}%` "></div>
        <div class="absolute top-0 left-0 h-full w-full z-50 flex justify-between">

          <!--1-->
          <div class="stepper-icon-wrapper relative" :class="{'active': step >= 0}">
            <span class="absolute-center-h-v" >1</span>
            <div class="stepper-text stepper-text--ask" :class="{'active': step >=0 }">Schematic</div>
          </div>
          <!--2-->
          <div class="stepper-icon-wrapper relative" :class="{'active': step >= 1}">
            <span  class="absolute-center-h-v" >2</span>
            <div class="stepper-text stepper-text--review" :class="{'active': step >= 1}">Design</div>
          </div>
          <!--3-->
          <div class="stepper-icon-wrapper relative" :class="{'active': step >= 2 }">
            <span  class="absolute-center-h-v" >3</span>
            <div class="stepper-text stepper-text--complete" :class="{'active': step >= 2 }">Code</div>
          </div>
          <!--4-->
          <div class="stepper-icon-wrapper relative" :class="{'active': step >= 3 }">
            <span  class="absolute-center-h-v" >4</span>
            <div class="stepper-text stepper-text--complete" :class="{'active': step >= 3 }">General</div>
          </div>


        </div>
      </div>

      <div v-if="step === 0" class="search-container flex w-fit-content bg-white items-center content-center border border-solid border-gray-300">
        <div class="h-12 relative w-10">
          <font-awesome-icon class="ml-1 h-4 text-gray-400 absolute-center-h-v" :icon="['fas', 'search']"/>
        </div>
        <input placeholder="Add more components" class="bg-white flex-grow outline-none h-8 text-gray-800 pr-3">


      </div>

      <div v-if="step === 0" class="w-full relative bg-gray-400 mt-10 components-container">
        <Schematic />
      </div>
      <div v-if="step === 1" class="w-full relative bg-gray-400 mt-10 components-container">
        <Design />
      </div>

      <div v-if="step === 2" class="w-full ">
        <h1 class="text-2xl font-semibold my-5">Choice on code</h1>
        <div class="bg-white shadow border border-solid border-gray-400 w-full md:flex justify-center items-center choice-on-code">
          <button  @click="back" class="btn pill-button mt-10 md:mt-0 px-16 py-1 block md:inline mb-2 md:mb-0">Back</button>
          <button class="btn pill-button pill-button--ideeza px-16 py-1 md:mx-5 block md:inline mb-2 md:mb-0">Add code</button>
          <button  @click="next" class="btn pill-button md:px-16 px-5 py-1 block md:inline mb-2 md:mb-0">Continue without adding code</button>
        </div>
      </div>

      <div v-if="step === 3" class="w-full">
        <div class="my-10 bg-white shadow border border-solid border-gray-400 w-full md:flex items-center p-5">
          <div class="flex items-center">
            <img src="~/static/images/processor-48.png" alt="">
            <div class="mx-10">ATMEGA32M1-AU</div>
          </div>
          <div>
            <button class="btn pill-button px-6 text-xs mr-2 mb-2 md:mb-0">Legs</button>
            <button class="btn pill-button px-6 text-xs mr-2 mb-2 md:mb-0">Charts</button>
            <button class="btn pill-button px-6 text-xs mr-2 mb-2 md:mb-0">2D Preview</button>
            <button class="btn pill-button px-6 mr-2 text-xs mb-2 md:mb-0">3D Preview</button>
            <button class="btn pill-button px-6 text-xs mb-2 md:mb-0">Data Sheet</button>
          </div>
        </div>
        <div class="w-full md:flex">
          <div class="md:w-1/2 md:pr-5">
            <h1 class="text-2xl font-semibold my-5">Add details of the part</h1>
            <div class="bg-white shadow border border-solid border-gray-400">
              <div class="w-full flex p-3">
                <div class="w-1/2">Name</div>
                <div class="w-1/2">
                  <input class="w-full bg-white border border-solid border-gray-300 text-lg ">
                </div>
              </div>
              <div class="w-full flex p-3">
                <div class="w-1/2">Category</div>
                <div class="w-1/2">
                  <DropDownField styleHeight="tiny"  />
                </div>
              </div>
              <div class="w-full flex p-3">
                <div class="w-1/2">Description</div>
                <div class="w-1/2">
                  <TextArea rows="1" />
                </div>
              </div>
            </div>
          </div>
          <div class="md:w-1/2 md:pl-5">
            <h1 class="text-2xl font-semibold my-5">Pricing</h1>
            <div class="bg-white shadow border border-solid border-gray-400">

              <div class="flex w-full">
                <div class="w-1/2 p-3 flex justify-between items-center">
                  <span class="inline-block mr-12">Quantity</span>
                  <input class="w-full bg-white border border-solid border-gray-300 w-16 ">
                </div>
                <div class="w-1/2 p-3 flex justify-between items-center">
                  <span class="inline-block mr-12">Price</span>
                  <input class="w-full bg-white border border-solid border-gray-300 w-16 ">
                </div>
              </div>
              <div class="flex w-full">
                <div class="w-1/2 p-3 flex justify-between items-center">
                  <span class="inline-block mr-12">Quantity</span>
                  <input class="w-full bg-white border border-solid border-gray-300 w-16 ">
                </div>
                <div class="w-1/2 p-3 flex justify-between items-center">
                  <span class="inline-block mr-12">Price</span>
                  <input class="w-full bg-white border border-solid border-gray-300 w-16 ">
                </div>
              </div>
              <div class="flex w-full">
                <div class="w-1/2 p-3 flex justify-between items-center">
                  <span class="inline-block mr-12">Quantity</span>
                  <input class="w-full bg-white border border-solid border-gray-300 w-16 ">
                </div>
                <div class="w-1/2 p-3 flex justify-between items-center">
                  <span class="inline-block mr-12">Price</span>
                  <input class="w-full bg-white border border-solid border-gray-300 w-16 ">
                </div>
              </div>

              <div class="w-full p-3 text-center bg-gray-200 cursor-pointer">
                + Add new
              </div>

            </div>
          </div>
        </div>

      </div>

      <div v-if="step > 3" class="bg-white shadow-md w-full text-center flex flex-col justify-between items-center font-semibold text-3xl md:text-5xl py-32">
        <div class="mx-auto">
          <img src="~/static/images/e-processor.png" alt="">
        </div>
        <div class="mx-auto">
          Congratulations!<br>
          Your component is added
        </div>
      </div>

      <!--Bot Buttons-->
      <div class="mt-10 w-full mx-auto button-bar flex">
        <div class="w-1/2 text-left">
          <button v-if="step > 0 && step!==2 && step < 4" @click="back" class="btn pill-button px-16 py-1">Back</button>
        </div>
        <div class="w-1/2 text-right">
          <button v-if="step < 2" @click="next" class="btn pill-button pill-button--ideeza px-16 py-1">Next</button>
          <button @click="next" v-if="step === 3" class="btn pill-button pill-button--ideeza px-16 py-1">Finish</button>
        </div>
      </div>

      <!--Right Sliders-->
      <div :class="{'active': activeDrawer === 'cart'}" class="right-drawer right-drawer--cart  fixed-center-v right-0 bg-transparent flex handle-margin">
        <!--handle-->
        <div>
          <div @click="handle('cart')" class="handle">
            <font-awesome-icon class="ml-1 h-6 text-gray-600 text-3xl" :icon="['fas', 'shopping-cart']"/>
          </div>
        </div>
        <div class="handle-contents handle-contents--cart w-full">
          <h1 class="text-ideeza text-center font-semibold">Added Parts</h1>
          <div class="w-full mt-5">
            <table class="table-auto text-xs text-gray-500 w-full">
              <tbody>
                <tr class="bg-gray-100">
                  <td>ATMEGAM1-32-AU-ND</td>
                  <td>34</td>
                  <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                  <td><font-awesome-icon class="ml-1 h-3" :icon="['fas', 'trash']"/></td>
                </tr>
                <tr class="">
                  <td>ATMEGAM1-32-AU-ND</td>
                  <td>34</td>
                  <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                  <td><font-awesome-icon class="ml-1 h-3" :icon="['fas', 'trash']"/></td>
                </tr>
                <tr class="bg-gray-100">
                  <td>ATMEGAM1-32-AU-ND</td>
                  <td>34</td>
                  <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                  <td><font-awesome-icon class="ml-1 h-3" :icon="['fas', 'trash']"/></td>
                </tr>
                <tr class="">
                  <td>ATMEGAM1-32-AU-ND</td>
                  <td>34</td>
                  <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                  <td><font-awesome-icon class="ml-1 h-3" :icon="['fas', 'trash']"/></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div :class="{'active': activeDrawer === 'link'}" class="right-drawer right-drawer--link fixed-center-v right-0 bg-transparent flex z-40">
        <!--handle-->
        <div>
          <div @click="handle('link')" class="handle">
            <font-awesome-icon class="ml-1 h-6 text-gray-600 text-3xl" :icon="['fas', 'link']"/>
          </div>
        </div>
        <div class="handle-contents handle-contents--cart w-full">
          <h1 class="text-ideeza text-center font-semibold">CONNECTIONS</h1>
          <div class="w-full mt-5 text-xs">
            <div class="flex">
              <div class="w-16 text-ideeza">edit</div>
              <div class="w-64">Connection 1</div>
              <div>Properties</div>
            </div>
            <div class="flex text-gray-500 mt-5">
              <div class="w-16 text-ideeza"></div>
              <div class="w-64"><span class="inline-block w-16">Part 1</span> ATMEGAMINI-X8</div>
              <div>Name</div>
            </div>
            <div class="flex text-gray-500 mt-5">
              <div class="w-16 text-ideeza"></div>
              <div class="w-64"><span class="inline-block w-16">Leg 1</span> 14</div>
              <div>Propert</div>
            </div>
            <div class="flex text-gray-500 mt-5">
              <div class="w-16 text-ideeza"></div>
              <div class="w-64"><span class="inline-block w-16">Part 2</span> ATMEGAMINI-X8</div>
              <div>Name</div>
            </div>
            <div class="flex text-gray-500 mt-5">
              <div class="w-16 text-ideeza"></div>
              <div class="w-64"><span class="inline-block w-16">Leg 2</span> 12</div>
              <div>Propert</div>
            </div>
          </div>
        </div>
      </div>

      <div :class="{'active': activeDrawer === 'options'}" class="right-drawer right-drawer--options fixed-center-v right-0 bg-transparent flex handle-margin-2 z-30">
        <!--handle-->
        <div>
          <div @click="handle('options')" class="handle z-50">
            <font-awesome-icon class="ml-1 h-6 text-gray-600 text-3xl" :icon="['fas', 'cog']"/>
          </div>
        </div>
        <div class="handle-contents handle-contents--cart w-full">
          <h1 class="text-ideeza text-center font-semibold">OPTIONS</h1>
          <div class="mt-5 w-full">
            <div class="flex justify-center items-center">
              <span class="inline-block mr-5">Width:</span>
              <div class="w-10">
                <input type="text" class="bg-white border rounded-full border-solid border-gray-300 text-xs p-1 text-center" value="45">
              </div>
            </div>
          </div>
          <div class="mt-5 w-full">
            <div class="flex justify-center items-center">
              <span class="inline-block mr-5">Height:</span>
              <div class="w-10">
                <input type="text" class="bg-white border rounded-full border-solid border-gray-300 text-xs p-1 text-center" value="20">
              </div>
            </div>
          </div>
          <div class="mt-5 w-full text-center">
            <button class="bg-white border border-solid border-gray-400 text-xs px-5 py-1 rounded-full">Side</button>
          </div>
          <div class="mt-5 w-full text-center">
            <button class="bg-white border border-solid border-gray-400 text-xs px-5 py-1 rounded-full">Check Data</button>
          </div>

        </div>
      </div>

    </div>
</template>

<script>
    import TextField from '~/components/form/text-field.vue'
    import TextArea from '~/components/form/text-area.vue'
    import DropDownField from '~/components/form/dropdown-field.vue'
    import Schematic from '~/components/technician/electronics/add-component/schematics.vue'
    import Design from '~/components/technician/electronics/add-component/design.vue'
    export default {
        name: "index",
        data: function () {
            return {
                activeDrawer: null,
                step: 0
            }
        },
      components: {
            TextField,
          TextArea,
          DropDownField,
        Schematic,
        Design
      },
      computed: {
        overlayWidth () {
          if(this.step === 0)
            return 0;
          else if(this.step === 1)
            return 33;
          else if(this.step === 2)
            return 66;
          else if(this.step >= 3)
            return 99;
        }
      },
        methods: {
            back() {
                if(this.step > 0)
                    this.step -= 1;
            },
            next() {
              if(this.step < 4)
                  this.step += 1;
            },
            handle(drawer){
                if(this.activeDrawer === drawer)
                    this.activeDrawer = null;
                else
                    this.activeDrawer = drawer;
            }
        }
    }
</script>

<style scoped>
  .components-container{

  }
  .email-support-container{
    width: 100%;
    max-width: 950px;
  }
  .stepper-bar{
    width: 95vw;
    max-width: 600px;
    height: 15px;
  }
  .stepper-bar-overlay{
    @apply rounded-r-lg;
    transition: all 0.3s ease-in;
    height: 100%;
    width: 97%;
    margin-left: 2px;
  }
  .stepper-icon-wrapper{
    @apply rounded-full bg-gray-200 font-semibold;
    width: 50px;
    height: 50px;
    margin-top: -20px;
    transition: all 0.3s ease-in;
  }

  .stepper-icon-wrapper.active{
    @apply bg-ideeza-dark;
  }
  .stepper-icon-wrapper.active {
    @apply text-white;
  }
  .stepper-text{
    @apply absolute font-semibold text-gray-600;
    margin-top: 60px;
  }
  .stepper-text--ask{
    margin-left: 10px;
  }
  .stepper-text--review{
    margin-left: -2px;
  }
  .stepper-text--complete{
    margin-left: -12px;
  }

  .handle{
    @apply bg-white shadow-md px-6 py-4 rounded-l-lg  cursor-pointer;
    height: fit-content;
    margin-left: -86px;
  }
  .handle-margin{
    margin-top: -50px;
  }
  .handle-margin-2{
    margin-top: 50px;
  }
  .right-drawer{
    @apply bg-white rounded-bl-lg;
    width: 450px;
    margin-right: -450px;
  }
  .right-drawer--cart{
    width: 650px;
    margin-right: -650px;
    z-index: 100;
  }
  .right-drawer--link{
    z-index: 99;
  }
  .right-drawer--options{
    z-index: 98;
  }
  .right-drawer.active{
    margin-right: 0px;
  }
  .choice-on-code{
    height: 250px;
  }
  .handle-contents{
    @apply bg-white p-4 rounded-bl-lg;
    height: 300px;
    transition: all 0.3s ease-in;
  }
  .handle-contents--cart{

  }

  .button-bar{
    width: 100%;
    max-width: 950px;
  }

  td{
    @apply p-2 border-b border-solid border-gray-200;
  }

  @screen lg{
    .thankyou-email{
      height: 500px;
    }
  }
</style>
