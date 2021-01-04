<template>
  <div class="relative" v-click-outside="onClickOutside">
    <div
      @click="focus(true)"
      :class="{'py-3': dropdownStyle === 'normal', 'py-1': dropdownStyle === 'mini', 'py-0': dropdownStyle === 'tiny'}"
      class="flex justify-between items-center px-3 w-full bg-white border border-solid border-gray-300"
    >
      <div class="text-gray-800">{{value}}</div>
      <div class="relative mr-2">
        <font-awesome-icon
          class="ml-1 h-4 text-gray-400 absolute-center-h-v"
          :icon="['fas', 'chevron-down']"
        />
      </div>
    </div>

    <div
      v-if="hasfocus"
      class="dropdown-container absolute w-full z-50 bg-white shadow-lg border border-solid border-gray-200"
    >
      <div
        @click="chooseValue(val)"
        class="p-3 hover:bg-gray-200 cursor-default"
        :class="{'bg-gray-200': val === value}"
        v-for="val in data"
        :key="val"
      >{{val}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "category-field",
  props: ["placeholder", "data", "selected", "styleHeight"],
  data: function() {
    return {
      hasfocus: false,
      listClick: false,
      value: null,
      dropdownStyle: "normal"
    };
  },
  mounted() {
    if (!this.selected && !this.placeholder) {
      this.value = "Select";
    } else if (this.selected) {
      this.value = this.selected;
    } else {
      this.value = this.placeholder;
    }
    if (this.styleHeight === "mini" || this.styleHeight === "tiny") {
      this.dropdownStyle = this.styleHeight;
    }
  },
  methods: {
    focus(value) {
      this.hasfocus = value;
    },

    chooseValue(val) {
      this.value = val;
      this.$emit("input", this.value);
      this.focus(false);
    },
    onClickOutside(event, el) {
      this.focus(false);
    }
  }
};
</script>

<style scoped>
.dropdown-container {
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
