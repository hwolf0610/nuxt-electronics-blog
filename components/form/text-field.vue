<template>
  <div>
    <input
      @input="handleInput"
      placeholder=""
      :value="value"
      class="w-full bg-white border border-solid border-gray-300 text-lg"
    />
  </div>
</template>

<script>
export default {
  name: "text-field",
  props: ["placeholder"],
  props: ["value"],
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
      this.$store.commit("userBlogStore/savearticlesname", e.target.value);
    }
  }
};
</script>

<style scoped>
input {
  padding: 12px 24px;
}
</style>
