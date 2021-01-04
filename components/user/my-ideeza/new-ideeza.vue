<template>
  <div class="absolute-center-h-v myIdeeza">
    <div class="relative w-full h-full">
      <div class="layer-icon-container">
        <LayersIcon class="fill-current absolute-center-h-v" />
      </div>

      <div class="my-ideeza-contents">
        <div class="relative font-semibold">
          <textarea @keydown.enter="pitchIdeeza" v-model="ideeza" rows="6" placeholder="My ideeza..." class="font-semibold w-full pr-10"></textarea>
          <font-awesome-icon class="font-semibold h-4 mr-2 mt-1 absolute top-0 right-0" :icon="['fas', 'microphone']" />
        </div>
      </div>

      <img @click="pitchIdeeza"
        class="ideeza-go-icon absolute-center-h cursor-pointer bottom-0"
        src="~/static/icons/my-ideeza-go.png"
      />
    </div>
  </div>
</template>

<script>
import LayersIcon from "~/components/partials/icons/layers-icon.vue";
export default {
  name: "new-ideeza",
  components: {
    LayersIcon
  },
  data() {
    return {
      ideeza: null
    }
  },
  methods: {
    pitchIdeeza() {
      this.$emit('close')
    }
  }
};
</script>

<style scoped>
.myIdeeza {
  @apply bg-white w-full border border-solid border-ideeza-dark z-50;
  max-width: 780px;
  height: 230px;
}
.layer-icon-container {
  @apply bg-ideeza-dark text-white rounded-full absolute;
  width: 75px;
  height: 75px;
  margin-left: -35px;
  margin-top: -35px;
}
.my-ideeza-contents {
  @apply px-5;
  padding-top: 40px;
}
.ideeza-go-icon {
  margin-bottom: -75px;
}
.layer-icon {
  width: 33px;
  height: 33px;
}
</style>
