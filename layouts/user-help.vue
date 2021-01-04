<template>
  <div class="flex flex-col h-full">
    <navigation class="flex-shrink"></navigation>
    <nuxt class="flex-grow" />
  </div>
</template>

<script>
import navigation from "~/components/user/header-bar-help.vue";
import { mapMutations } from "vuex";
export default {
  components: { navigation },
  mounted() {
    console.log(this.$device.isMobile);
    if (this.$device.isMobile) {
      this.toggleLeftMenu();
    }
  },
  methods: {
    ...mapMutations({
      toggleLeftMenu: "usermenu/toggleLeftMenu"
    })
  }
};
</script>

<style>
#__nuxt {
  height: 100%;
}
#__layout {
  height: 100%;
}
</style>
