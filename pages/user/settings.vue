<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow">
      <nuxt-child></nuxt-child>
    </div>
  </div>
</template>

<script>
import LeftMenu from "~/components/user/settings/left-side-menu.vue";

export default {
  middleware: "auth",
  layout: "user",
  name: "settings-index",
  components: {
    LeftMenu
  },
  data: function() {
    return {};
  },
  computed: {
    leftMenu() {
      return this.$store.state.usermenu.openLeftMenu;
    }
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
</style>
