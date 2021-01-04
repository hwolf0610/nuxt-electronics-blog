<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>

    <!-- Main Contents -->
    <div class="flex-grow mb-20">

      <div class="code-contents w-full mx-auto">
        <h1 class="text-3xl my-10">Code Editor</h1>



        <AddCode />

        <div class="md:flex text-center justify-between mt-10 mx-2">
          <button class="block md:inline-block mb-2 md:mb-0 btn pill-button px-12 ">Back</button>
          <button class="block md:inline-block mb-2 md:mb-0 btn pill-button px-12 ">+ Add New File</button>
          <button class="block md:inline-block mb-2 md:mb-0 btn pill-button pill-button--ideeza px-12">Next</button>
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
  .code-contents{
    max-width: 1200px;
  }
</style>
