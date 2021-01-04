<template>
  <div class="flex flex-wrap items-start bg-white h-full shadow relative left-side-bar">
    <!--Left Menu-->
    <div class="left-main-menu p-10 relative w-full">
      <CommonMenuItems />
    </div>
    <LeftBotMenu class="flex-shrink sticky bottom-0 p-10 self-end w-full" />
  </div>
</template>

<script>
import CommonMenuItems from "~/components/service-provider/user-menu-items.vue";
import LeftBotMenu from "~/components/service-provider/left-menu-bot-items.vue";
export default {
  name: "common-left-side-menu",
  components: {
    CommonMenuItems,
    LeftBotMenu
  }
};
</script>

<style scoped>
.left-side-bar {
  width: 270px;
  min-width: 270px;
}
.left-main-menu {
}
</style>
