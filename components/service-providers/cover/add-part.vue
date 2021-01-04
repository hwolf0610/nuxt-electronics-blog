<template>
  <div class="w-full">
    <div class="w-full shadow-md bg-white relative">

      <div class="p-5 flex justify-between items-center">
        <div class="flex items-center">
          <div class="flex items-center mr-5">
            <check-box :checked="true" @onChange="toggleGrid">Grid</check-box>
          </div>
          <div class="flex items-center">
            <span class="mr-1">Category</span>
            <select class="w-32 bg-white p-1 border border-solid border-gray-400">
              <option></option>
            </select>
          </div>
        </div>
        <div class="flex items-center">
          <file-field label="Upload 3D" @input="upload3dModel" />
          <button @click="addImage" class="btn pill-button py-0 px-5" >Upload image</button>
        </div>
      </div>

      <div class="content-container relative">
        <client-only>

          <engine class="border border-light-gray engine-container"
                  :init-data="initDataForEngine"
                  :router="router"
                  :visibleGrid="visibleGrid"
                  :transform="transform"
                  :transformData="transformData"
                  :objectData="objectData"
                  :objectColor="objectColor"
                  :uploadData="uploadData"
                  :background="background"
                  :apiPlatform="apiPlatform"
                  :searchFor="searchFor"
                  @selectObject="selectedObject"
          />
          <spinner slot="placeholder" />
        </client-only>
      </div>

      <div class="flex justify-between items-center p-5 w-full">
        <div class="flex items-center font-semibold text-gray-800">
          <span class="mr-2">Axis</span>
          <span class="mr-2 text-lg">X</span>
          <input @input="setTransform($event.target.value, 'X')" type="text" class="w-20 bg-white p-1 border border-solid border-gray-400 mr-2">
          <span class="mr-2 text-lg">Y</span>
          <input @input="setTransform($event.target.value, 'Y')" type="text" class="w-20 bg-white p-1 border border-solid border-gray-400 mr-2">
          <span class="mr-2 text-lg">Z</span>
          <input @input="setTransform($event.target.value, 'Z')" type="text" class="w-20 bg-white p-1 border border-solid border-gray-400 mr-2">
        </div>
        <div class="flex items-center font-semibold text-gray-800">
          <div class="relative mr-5 flex flex-col items-center text-xs">
            <span class="block">Color</span>
            <input v-model="objectColor" type="color">
          </div>

          <div class="relative flex flex-col items-center text-xs">
            <span class="block">BG Color</span>
            <input v-model="background" type="color">
          </div>

        </div>
        <div class="flex">
          <button @click="transform='translate'" class="btn pill-button py-0 px-5 " :class="{'pill-button--ideeza': transform === 'translate'}" >Translate</button>
          <button @click="transform='scale'" class="btn pill-button py-0 px-5 mx-5" :class="{'pill-button--ideeza': transform === 'scale'}" >Scale</button>
          <button @click="transform='rotate'" class="btn pill-button py-0 px-5" :class="{'pill-button--ideeza': transform === 'rotate'}" >Rotate</button>
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
  import Engine from '@ideeza/vue3dengine'
  import CheckBox from '~/components/form/checkbox.vue'
  import FilesField from '~/components/form/file-field-button.vue'
  import Spinner from '~/components/loader/spinner.vue'
    export default {
        name: "cover",
      data: () => {
          return {
            colorPicker: false,
            description: false,
            visibleGrid: true,        // show the grid
            initDataForEngine: {},    // the entire object need to init the engine, at the begining is empty
            router: 0,                // type of scene - part -0, component -1, cover -2
            background: "#ffffff",    // backround color - hex string
            transform: "translate",   // type of transform in scene - translate, rotate, scale
            objectData: {},           // the object used to import a 3d object
            uploadData: null,         // the event from upload
            transformData: [0, 'X'],  // first is the value of input, second is axis - X,Y,Z(string)
            objectColor: "#ffffff",   // color of object
            apiPlatform: "polygoogle",// site where we search polygoogle/remix3d
            searchFor: "",            // text after we search
          }
      },
      components: {
        'engine': Engine.ct,
        'check-box': CheckBox,
        'spinner': Spinner,
        'file-field': FilesField
      },
      mounted() {
          console.log('mounted');
          //this.objectData =
      },
      computed: {
          backgroundDisplayStyle() {
            return `background-color: ${this.background}`;
          },
          objectDisplayStyle() {
            return `background-color: ${this.objectColor}`;
          }
      },
      methods: {
        toggleGrid(state){
          this.visibleGrid = state;
        },
        showColorPicker() {
          this.showColorPicker = true;
        },
        setTransform(val, position){
          if(!isNaN(val)){
            console.log(val)
            this.transformData = [val, position]
          }
        },
        addImage(){
          this.objectData = {'transform':{'position':[0,0,0],'rotation':[0,0,0],'scale':[1,1,1],'color':'#1f1f1f'},'url':'user-5272f6574e9b4c2b955bb3a6dbc45795.glb'};
        },
        upload3dModel(param){
          this.uploadData = param;
        },
        selectedObject(val) {

        }
      }
    }
</script>

<style scoped>
  select{
    min-width: 130px;
  }
  .content-container{
    height: 450px;
  }
  .engine-container{
    height: 450px;
  }
  .color-container{
    @apply rounded-full w-10 h-10 cursor-pointer border border-solid border-gray-300 shadow;
  }
</style>
