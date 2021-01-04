<template>
  <div class="relative" v-click-outside="onClickOutside">
    <input
      v-model="value"
      @focusin="focus(true)"
      @input="searchCategory($event.target.value)"
      @change="CategoryNameChange()"
      :placeholder="placeholder"
      class="w-full bg-white border border-solid border-gray-300 text-lg"
    />
    <div
      v-if="hasfocus"
      class="absolute w-full z-50 bg-white shadow-lg border border-solid border-gray-200 text-lg"
    >
      <div
        @click="chooseCategory(val)"
        class="p-4 hover:bg-gray-200 cursor-default"
        v-for="val in displayData"
        :key="val"
      >{{val}}</div>
      <div class="p-4 text-ideeza cursor-pointer">Add new category +</div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "category-field",
  props: ["placeholder"],
  data: function() {
    return {
      hasfocus: false,
      listClick: false,
      value: null,
      displayData: [],
      searchData: [
        "Somet Cat",
        "Some Dog",
        "Some Elephant",
        "Mouse",
        "Keyboard"
      ]
    };
  },
  methods: {
    CategoryNameChange() {
      console.log("The new value is: ", this.value);
      this.$store.commit("userBlogStore/saveCategoryName", this.value);
    },
    focus(value) {
      this.hasfocus = value;
      if (this.value) {
        this.searchCategory(this.value);
      }
    },
    handleInput(e) {
      this.$emit("input", this.value);
    },
    chooseCategory(val) {
      this.value = val;
      this.$emit("input", this.value);
      this.focus(false);
    },
    searchCategory(val) {
      let searchData = _.cloneDeep(this.searchData);
      if (_.isEmpty(val)) {
        this.displayData = [];
      } else {
        let results = [];
        _.filter(searchData, obj => {
          if (_.toLower(obj).includes(val.toLowerCase())) {
            results.push(obj);
          }
        });
        this.displayData = results;
      }
    },
    onClickOutside(event, el) {
      this.focus(false);
    },

    // Note: The middleware will be executed if the event was fired outside the element.
    //       It should have only sync functionality and it should return a boolean to
    //       define if the handler should be fire or not
    middleware(event, el) {
      return event.target.className !== "modal";
    }
  }
};
</script>

<style scoped>
input {
  padding: 12px 24px;
}
</style>
