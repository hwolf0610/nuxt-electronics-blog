<template>
	<div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
     
     <LeftMenu/>

  <div class="w-full px-4 bg-white">

    <div class="py-4 mt-10">
      <nuxt-link to="" class="px-5 py-3 border text-pink-800 border-pink-800 rounded">Go Back</nuxt-link>
    </div>

    <h2 class="text-3xl  text-gray-700 py-6 border-b">Questionnaire</h2>
    <div class="mt-5">
      <div class=" ">
         <p class="text-gray-900 py-4">User has not yet filled the questionnaire out.</p>
         <nuxt-link to="" class="text-white px-5 py-3 bg-ideeza rounded mt-5">
         Remind
      </nuxt-link>
      </div> 
    </div>
  
  </div>
  </div>
</template>
 <script>

    import LeftMenu from '~/components/technician/common-left-side-menu.vue'
    import AddCode from '~/components/technician/add-code.vue'

    export default {
        layout: 'technician',
        name: "code-index",
        components: {
            LeftMenu,
            AddCode
        },

        computed: {
            leftMenu() {
                return this.$store.state.usermenu.openLeftMenu;
            }
        },
        mounted() {

        },

    }
</script>
<style scoped>
select{
      max-width: none;
}
.ToolTip{
  display:none;
  width:450px;
}
.ToolTipIcon:hover .ToolTip{ 
  display:block;
}
</style>
