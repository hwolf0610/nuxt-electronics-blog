<template>
  <div>
    <textarea :rows="rows" :placeholder="placeholder" @change="descriptionNameChange()"  v-model="descriptionName"></textarea>
  </div>
</template>

<script>
export default {
  name: "text-area",
  props: ["placeholder", "rows"],
  methods: {
    descriptionNameChange() {
      console.log("The new value is: ", this.descriptionName);
      this.$store.commit(
        "userBlogStore/saveDescriptionName",
        this.descriptionName
      );
    },
    handleInput(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>

<style scoped>
textarea {
  @apply w-full h-full bg-white border border-solid border-gray-300;
  padding: 12px 24px;
}
</style>
