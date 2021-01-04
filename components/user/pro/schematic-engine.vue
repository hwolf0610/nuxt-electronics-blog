<template>
  <div class="w-full h-full relative">
    <client-only>
      <engine
        :init-data="initDataForEngine"
        :visibleGrid="visibleGrid"
        :group-button="doAction"
        :part-data="partDataForImport"
        :resolution="parseInt(resolution)"
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
        name: "schematic-engine",
      data() {
        return {
          step: 0,
          visibleGrid: true,        // show the grid
          initDataForEngine: {},    // the entire object need to init the engine, at the begining is empty
          doAction: "move",         // move, rotate, copy, delete, label, route, highlight
          resolution: 10,           // min: 1, max: 100.
          partDataForImport: {},    // the entire object need to import a part
          inportedinsecond: {},     // come from first engine, render in second
          showTech: false    // the entire object need to import a part
        }
      },
      components: {
        'engine': Engine.eus,
        'spinner': Spinner,
      },
      methods: {
        toggleGrid() {
          this.visibleGrid = !this.visibleGrid
        },
        import3dModel(param){
          this.partDataForImport = param;
        },
        changeAction(action) {
          this.doAction = action
        },
        hide2nd () {
          this.showTech = false
        },
        selectedObject (param) {
          this.inportedinsecond = param
          this.showTech = true
          /* eslint-disable no-console */
          console.log('data of this comp ',JSON.stringify(param))
        }
      }
    }
</script>

<style scoped>

</style>
