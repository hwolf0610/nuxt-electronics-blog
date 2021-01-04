<template>
  <div class="w-full h-full relative">
    <client-only>
      <engine
        :init-data="initDataForEngine"
        :visibleGrid="visibleGrid"
        :componentSize="initDataForEngine.compSize"
        :visible3d="visible3d"
        :compEnable="compEnable"
        :group-button="doAction"
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
          visibleGrid: true,        // show the grid
          initDataForEngine: {
            "nets":[{"name":"Net 0","path":[[{"x":3.0500001907348633,"y":0.009999999776482582,"z":0.4000000059604645},{"x":3.0500001907348633,"y":0.009999999776482582,"z":0.75},{"x":2.0999999046325684,"y":0.009999999776482582,"z":0.75}]],"pins":[[0,2],[1,2]]}],
            "routing":[],
            "assets":[{"name":"Comp1","transform":{"pos_sc":[3.4,0.4,0],"pos_d":[0,0,0,0]},"nets":[{"name":"Net 0","path":[[{"x":5.349999904632568,"y":0.009999999776482582,"z":0},{"x":2.1500000953674316,"y":0.009999999776482582,"z":0},{"x":2.1500000953674316,"y":0.009999999776482582,"z":-0.6000000238418579}]],"pins":[[-1,1],[0,1]]},{"name":"Net 1","path":[[{"x":0.44999992847442627,"y":0.009999999776482582,"z":-0.6000000238418579},{"x":0.44999992847442627,"y":0,"z":0},{"x":-0.1,"y":0,"z":0}],[{"x":-0.1,"y":0,"z":0},{"x":-0.1,"y":0.009999999776482582,"z":-0.6000000238418579},{"x":-0.75,"y":0.009999999776482582,"z":-0.6000000238418579}]],"pins":[[0,2],[1,1]]},{"name":"Net 2","path":[[{"x":-2.450000047683716,"y":0.009999999776482582,"z":-0.6000000238418579},{"x":-2.450000047683716,"y":0.009999999776482582,"z":0},{"x":-5.650000095367432,"y":0.009999999776482582,"z":0}]],"pins":[[1,2],[-1,2]]}],"routing_data":[],"assets":[{"transform":{"best_p":[0,0,0,0],"best_sc":[1.3,-0.6,0],"rotation":[0,0,0],"pivot":[-1.05,-0.65],"position":[0,0,0],"mirror":false,"display":0,"coverPos":[0,0,0],"coverRot":[0,0,0]},"name":"cap0805","name2d":"R","url":"user-be5e1cc3a341462690fd8d8db0dac77e.babylon","design":"user-3119100f41da4b3a8efc9e8a8cf85984.babylon","schematic":"user-1bec78f99fcc41e7a2c36377b8943b4f.babylon"},{"transform":{"best_p":[0,0,0,0],"best_sc":[-1.6,-0.6,0],"rotation":[0,0,0],"pivot":[-1.05,-0.65],"position":[0,0,0],"mirror":false,"display":0,"coverPos":[0,0,0],"coverRot":[0,0,0]},"name":"cap0805","name2d":"R","url":"user-be5e1cc3a341462690fd8d8db0dac77e.babylon","design":"user-3119100f41da4b3a8efc9e8a8cf85984.babylon","schematic":"user-1bec78f99fcc41e7a2c36377b8943b4f.babylon"}],"compSize":[20,20],"electData":{"ComponentParts":["cap0805","R","cap0805","R"],"ComponentToParts":[[1,0,1],[2,1,2]],"PartToPart":[[0,1],[0,2,1,1],[1,2]],"PartToPartNames":["Net 0","Net 1","Net 2"],"need":{"pin":["1/vcc"],"vcc":false},"pass":{"pin":["2/gnd"],"gnd":false}}},{"name":"Comp2","transform":{"pos_sc":[1.5,0.5,0],"pos_d":[0,0,0,0]},"assets":[{"transform":{"best_p":[3.1499999999999986,0.9500000000000002,0,0],"best_sc":[2.6,-0.1,0],"rotation":[0,0,0],"pivot":[-1.05,-0.65],"position":[5.800000000000001,0,5.8999999999999995],"mirror":false,"display":0,"coverPos":[0,0,0],"coverRot":[0,0,0]},"name":"cap0805","name2d":"C","url":"user-be5e1cc3a341462690fd8d8db0dac77e.babylon","design":"user-3119100f41da4b3a8efc9e8a8cf85984.babylon","schematic":"user-fedb78707a30463396684b40590e0759.babylon"},{"transform":{"best_p":[0.7299999999999995,4.329999999999998,0,0],"best_sc":[-0.8,0.30000000000000004,0],"position":[4.6000000000000005,0,-1.4999999999999987],"rotation":[0,0,0],"pivot":[-4.67,-4.67]},"name":"ATmega328","name2d":"AT","url":"user-e71413056a4049e399aad42118410e87.babylon","design":"user-0e1383d25be244a08f024106d03ac8ae.babylon","schematic":"user-6cb573279715425db9fec438d44c73b8.babylon"}],"nets":[{"name":"Net 0","path":[[{"x":2.049999952316284,"y":0.009999999776482582,"z":-0.10000000149011612},{"x":2.049999952316284,"y":0.009999999776482582,"z":-0.44999998807907104},{"x":0.40000003576278687,"y":0.009999999776482582,"z":-0.44999998807907104}]],"pins":[[0,2],[1,10]]}],"routing_data":[{"pins":[[1,10],[0,2]],"path":[[{"x":6.599999904632568,"y":0.019999999552965164,"z":2.9749999046325684},{"x":7.7,"y":0,"z":4.7},{"x":6.550000190734863,"y":0.019999999552965164,"z":5.900000095367432}]],"width":[[0.1,0.1]],"mirror":[[false,false]]}],"compSize":[20,15],"electData":{"ComponentParts":["ATmega328","AT"],"ComponentToParts":[[1,0,11],[2,0,6],[3,0,25]],"PartToPart":[[0,11],[0,6],[0,25]],"PartToPartNames":["Net 0","Net 1","Net 2"],"need":{"pin":["1/vcc","2/gnd"],"vcc":false,"gnd":false},"pass":{"pin":["3/ac1"],"ac1":false}}}],
            "compSize":[50,50],
            "electData":{"ComponentToParts":[],"PartToPart":[[0,2,1,2]],"PartToPartNames":["Net 0"]}
          },                        // the entire object need on init, those infos come from schematic engine
          doAction: "move",         // 'move','rotate','mirror','label','route','highlight','delete'
          resolution: 10,           // min: 1, max: 100.
          visible3d: false,         // show/hide 3d objects
          compEnable: false,        // show/hide component
          wireWidth: 0.1            // width of wire
        }
      },
      components: {
        'engine': Engine.eud,
        'spinner': Spinner,
      },
      methods: {
        toggleGrid() {
          this.visibleGrid = !this.visibleGrid
        },
        toggle2d3d() {
          this.visible3d = !this.visible3d
        },
        changeAction(action) {
          this.doAction = action
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
