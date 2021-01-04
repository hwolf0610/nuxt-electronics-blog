<template>
  <div>
    <client-only placeholder="Loading...">
      <engine
        :initData = initData
        :defaultData="dataForm"
        :toggle3d="toggle3d"
        :toggle2d="toggle2d"
        :togglesc="togglesc"
        :togglechecker="togglechecker"
      />
    </client-only>
  </div>

</template>

<script>
  import Engine from '@ideeza/vue3dengine'
  import {
    TQFNdata,
    // FemaleHeaderdata,
    // R0805data
  } from '@ideeza/vue3dengine/src/engines/electronic_tech_part'
    export default {
      name: "engine",
      components: {
        'engine': Engine.etp,
      },
      data() {
        return {
          initData: 'TQFN',   // name of one package - TQFN, FEMALEHEADER, R0805
          dataForm: TQFNdata, // all the informations from form
          toggle3d: true,     // show 3d
          toggle2d: false,    // show 2d
          togglesc: false,    // show schematic
          togglechecker: false, // show position checker
        }
      },
    }
</script>

<style scoped>

</style>
