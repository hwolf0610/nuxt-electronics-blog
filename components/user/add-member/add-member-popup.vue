<template>
  <div
    v-on:click.stop.prevent="onClickPop"
    class="mt-12 bg-white absolute border border-solid border-gray-400 shadow shadow-ld z-50 p-5 flex items-center"
  >
    <div class="invite-field-container mr-5">
      <input placeholder="Enter email" v-model="inviteValue" />
    </div>
    <button class="btn btn-normal btn--ideeza px-4 py-3" @click="onInvite">Invite</button>
  </div>
</template>

<script>
import TextField from "~/components/form/text-field.vue";
export default {
  name: "add-member-popup",
  data: function() {
    return {
      inviteValue: null
    };
  },
  components: {
    "text-field": TextField
  },
  methods: {
    onClickPop() {},
    onInvite() {
      alert(this.inviteValue);
      window.location.reload();
    }
  }
};
</script>

<style scoped>
.invite-field-container {
  width: 250px;
  @apply p-2 rounded-sm outline-none border border-solid border-ideeza-gray-300;
}
</style>
