<template>
  <div class="flex flex-wrap items-start bg-white h-full shadow relative left-side-bar">

      <!--Left Menu-->
      <div class="left-main-menu p-10 relative w-full">
        <CommonMenuItems />
      </div>

  </div>
</template>

<script>
  import CommonMenuItems from '~/components/admin/menu-items.vue'

    export default {
        name: "common-left-side-menu",
      components: {
        CommonMenuItems,
      }
    }
</script>

<style scoped>
  .left-side-bar{
    width: 300px;
    min-width: 300px;
  }
  .left-main-menu{

  }
</style>
