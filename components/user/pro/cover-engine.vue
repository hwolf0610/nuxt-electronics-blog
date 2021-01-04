<template>
  <div class="w-full h-full relative cover-engine-container">
    <client-only>
      <engine
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
        :scan="scan"
        :scanRes="scanRes"
        :scanView="scanView"
        @selectObject="selectedObject"
      />
      <spinner slot="placeholder" />
    </client-only>
  </div>
</template>

<script>
  import Engine from '@ideeza/vue3dengine'
  import Spinner from '~/components/loader/spinner.vue'
    export default {
        name: "cover-engine",
      data() {
        return {
          visibleGrid: true,        // show the grid
          initDataForEngine: {},    // the entire object need to init the engine, at the begining is empty
          router: 2,                // type of scene - part -0, component -1, cover -2
          background: "#ffffff",    // backround color - hex string
          transform: "translate",   // type of transform in scene - translate, rotate, scale
          objectData: {},           // the object used to import a 3d object
          uploadData: null,         // the event from upload
          transformData: [0, 'X'],  // first is the value of input, second is axis - X,Y,Z(string)
          objectColor: "#ffffff",   // color of object
          apiPlatform: "polygoogle",// site where we search polygoogle/remix3d
          searchFor: "",            // text after we search
          scan: false,              // do scan
          scanRes: 5,               // 1,2,3,5,6,8,10, etc
          scanView: 3               // 0-Outisde / 1-Inside / 2-Border / 3-All
        }
      },
      components: {
        'engine': Engine.cu,
        'spinner': Spinner,
      },
      mounted() {
          this.import3dModel({'transform':{'position':[0,0,0],'rotation':[0,0,0],'scale':[1,1,1],'color':'#1f1f1f'},'url':'user-5272f6574e9b4c2b955bb3a6dbc45795.glb'})
      },
      methods: {
        toggleGrid() {
          this.visibleGrid = !this.visibleGrid
        },
        changeTransf(param) {
          this.transform = param
        },
        import3dModel(param){
          this.objectData = param;
        },
        upload3dModel(param){
          this.uploadData = param;
        },
        selectedObject (param) {
          switch (param) {
            case '0':
              // console.log('clicked on board')
              break;
            case '1':
              // console.log('clicked on part')
              break
            case '2':
              // console.log('clicked on wire')
              break;
            default:
              break;
          }
        }
      }
    }
</script>

<style scoped>

</style>
