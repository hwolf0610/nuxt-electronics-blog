<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow bg-settings">
      <nuxt-child></nuxt-child>
    </div>
  </div>
</template>

<script>
import LeftMenu from "~/components/technician/settings/left-side-menu.vue";

export default {
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
.bg-settings{
  background-color: #F8F9FA;
}
</style>
