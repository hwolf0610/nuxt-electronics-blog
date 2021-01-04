<template>
  <!-- Toggle Button -->
  <label 
    for="toogleA"
    class="flex items-center cursor-pointer"
  >
    <!-- toggle -->
    <div class="relative">
      <!-- input -->
      <input id="toogleA" type="checkbox" class="hidden" v-model="isToggleOn" v-on:change="$emit('input', $event.target.checked)"/>
      <!-- line -->
      <div
        class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"
      ></div>
      <!-- dot -->
      <div
        class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
      ></div>
    </div>
    <!-- label -->
    <div
      class="ml-3 text-gray-700 font-medium"
    >
    </div>
  </label>
</template>

<script>
export default {
  mounted () {
    this.isToggleOn = this.value
  },
  props: ['value', 'onText', 'offText'],
  data () {
    return {
      isToggleOn: false
    }
  }
}
</script>

<style lang="postcss">
.toggle__dot {
  top: -.25rem;
  left: -.25rem;
  transition: all 0.3s ease-in-out;
}

input:checked ~ .toggle__dot {
  transform: translateX(100%);
  background-color: #cbd5e0;
}
  /* CHECKBOX TOGGLE SWITCH */
  .form-switch {
      @apply relative select-none w-12 mr-2 leading-normal;
  }
  .form-switch-checkbox {
      @apply hidden;
  }
  .form-switch-label {
      @apply block overflow-hidden cursor-pointer bg-white border rounded-full h-6  shadow-inner;
      transition: background-color 0.2s ease-in;
  }
  .form-switch-label:before {
      @apply absolute block bg-white w-6 border rounded-full -ml-1;
      top: 0;
      bottom: 0;  
      right: 50%;
      content: "";
      transition: all 0.2s ease-in;
  }
  .form-switch-checkbox:checked + .form-switch-label,
  .form-switch-checkbox:checked + .form-switch-label:before {
  
  }
  .form-switch-checkbox:checked + .form-switch-label {
      @apply bg-gray-500 shadow-none;
  }
  .form-switch-checkbox:checked + .form-switch-label:before {
      right: 0;
  }
</style>