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
      <div class="flex flex-wrap">
        <div class="w-6/12 px-6 py-5">
          <div class="mb-5">
            <div class="flex"><span class="inline-block font-bold">I. Main Problem Being Addressed</span>
              <div class="relative inline-block mx-3 ToolTipIcon align-middle">
                <img src="~/static/images/questionnaire-tip-icon.png" class=" ">
                <div class="absolute bg-white shadow rounded p-5 ToolTip left-0 botton-0">
                  <p class="text-ideeza">Every solution targets a certain problem. Please use this section to highlight the specific problem the solution addresses. This section can be as short or as long as needed to describe the precise problem the solution addresses</p>
                </div>
              </div>
            </div>
            <textarea class="border border-gray-400 rounded w-full h-32 px-2 mt-6" type="text" placeholder="Write here..."  />
          </div>

          <div class="mb-5">
            <div class="flex"><span class="inline-block font-bold">II. Summary of the Invention (Maximum of 150 words)</span>
              <div class="relative inline-block mx-3 ToolTipIcon align-middle">
                <img src="~/static/images/questionnaire-tip-icon.png" class=" ">
                <div class="absolute bg-white shadow rounded p-5 ToolTip left-0 botton-0">
                  <p class="text-ideeza">Every solution targets a certain problem. Please use this section to highlight the specific problem the solution addresses. This section can be as short or as long as needed to describe the precise problem the solution addresses</p>
                </div>
              </div>
            </div>
            <textarea class="border border-gray-400 rounded w-full h-32 px-2 mt-6" type="text" placeholder="Write here..."  />
          </div>

          <div class="mb-5">
            <div class="flex"><span class="inline-block font-bold">III. How is This Invention Made and Used</span>
              <div class="relative inline-block mx-3 ToolTipIcon align-middle">
                <img src="~/static/images/questionnaire-tip-icon.png" class=" ">
                <div class="absolute bg-white shadow rounded p-5 ToolTip left-0 botton-0">
                  <p class="text-ideeza">Every solution targets a certain problem. Please use this section to highlight the specific problem the solution addresses. This section can be as short or as long as needed to describe the precise problem the solution addresses</p>
                </div>
              </div>
            </div>
            <textarea class="border border-gray-400 rounded w-full h-32 px-2 mt-6" type="text" placeholder="Write here..."  />
          </div>

          <div class="mb-5">
            <div class=""><span class="inline-block font-bold">VII. References </span>
              <div class="relative inline-block mx-3 ToolTipIcon align-middle">
                <img src="~/static/images/questionnaire-tip-icon.png" class=" ">
                <div class="absolute bg-white shadow rounded p-5 ToolTip left-0 botton-0">
                  <p class="text-ideeza">Every solution targets a certain problem. Please use this section to highlight the specific problem the solution addresses. This section can be as short or as long as needed to describe the precise problem the solution addresses</p>
                </div>
              </div>
            </div>
            <textarea class="border border-gray-400 rounded w-full h-32 px-2 mt-6" type="text" placeholder="Write here..."  />
          </div>
        </div>

        <div class="w-6/12 px-6 py-5">
          <div class="mb-5">
            <div class="flex"><span class="inline-block font-bold">IV. Markets Addressed</span>
              <div class="relative inline-block mx-3 ToolTipIcon align-middle">
                <img src="~/static/images/questionnaire-tip-icon.png" class=" ">
                <div class="absolute bg-white shadow rounded p-5 ToolTip right-0 botton-0">
                  <p class="text-ideeza">Every solution targets a certain problem. Please use this section to highlight the specific problem the solution addresses. This section can be as short or as long as needed to describe the precise problem the solution addresses</p>
                </div>
              </div>
            </div>
            <textarea class="border border-gray-400 rounded w-full h-32 px-2 mt-6" type="text" placeholder="Write here..."  />
          </div>

          <div class="mb-5">
            <div class="flex"><span class="inline-block font-bold">V. Comparative Benefits / Advantages</span>
              <div class="relative inline-block mx-3 ToolTipIcon align-middle">
                <img src="~/static/images/questionnaire-tip-icon.png" class=" ">
                <div class="absolute bg-white shadow rounded p-5 ToolTip right-0 botton-0">
                  <p class="text-ideeza">Every solution targets a certain problem. Please use this section to highlight the specific problem the solution addresses. This section can be as short or as long as needed to describe the precise problem the solution addresses</p>
                </div>
              </div>
            </div>
            <textarea class="border border-gray-400 rounded w-full h-32 px-2 mt-6" type="text" placeholder="Write here..."  />
          </div>

          <div class="mb-5">
            <div class="flex"><span class="inline-block font-bold">VI. Related Background</span>
              <div class="relative inline-block mx-3 ToolTipIcon align-middle">
                <img src="~/static/images/questionnaire-tip-icon.png" class=" ">
                <div class="absolute bg-white shadow rounded p-5 ToolTip right-0 botton-0">
                  <p class="text-ideeza">Every solution targets a certain problem. Please use this section to highlight the specific problem the solution addresses. This section can be as short or as long as needed to describe the precise problem the solution addresses</p>
                </div>
              </div>
            </div>
            <textarea class="border border-gray-400 rounded w-full h-32 px-2 mt-6" type="text" placeholder="Write here..."  />
          </div>

           
        </div>

        
         
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
