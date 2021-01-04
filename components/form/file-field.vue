<template>
  <label class="file-select" :class="borderClass">
    <div class="flex items-center">
      <div class="btn px-3 py-2 text-xs mr-5" :class="btn">Choose</div>
      <div class="text-sm">
        <span class="text-gray-800" v-if="files">{{files}}</span>
        <span class="text-gray-400" v-else>No file choosen</span>
      </div>
    </div>
    <input type="file" @change="handleFileChange" />
  </label>
</template>

<script>
export default {
  name: "file-field",
  props: {
    btn: {
      type: String,
      default: "btn--ideeza"
    },
    borderClass: {
      type: String,
      default: "border-gray-300"
    }
  },
  data: function() {
    return {
      files: null
    };
  },
  methods: {
    handleFileChange(e) {
      let file = e.target.files[0];
      if (file && file.name) {
        this.files = file.name;
      } else {
        this.files = null;
      }
      this.$emit("input", file);
    }
  }
};
</script>

<style scoped>
.file-select {
  @apply block w-full bg-white border border-solid border-gray-300 text-lg p-2;
}
.file-select > .select-button {
  padding: 1rem;

  color: white;
  background-color: #2ea169;

  border-radius: 0.3rem;

  text-align: center;
  font-weight: bold;
}

.file-select > input[type="file"] {
  display: none;
}
</style>
