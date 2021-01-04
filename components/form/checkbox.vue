<template>
    <div class="form-checkbox" @click="checkBoxClicked()">
        <font-awesome-icon class="checkbox" :class="{'checkbox-active': isActive}" :icon="isActive ? ['fas','check-square'] : ['far','square']" />
        <span class="checkbox-label"><slot></slot></span>
    </div>
</template>

<script>
    export default {
        name: "form-checkbox",
        props: ['checked', 'value'],
        data() {
            return {
                isActive: false
            }
        },
        watch: {
          checked: function (val, oldVal) {
              this.isActive = !!val;
          }
        },
        mounted() {
          this.isActive = this.checked;
          if(this.isActive) {
              this.$emit('onChange', this.isActive, this.value);
          }
        },
        methods: {
            checkBoxClicked() {
                this.isActive = !this.isActive;
                this.$emit('onChange', this.isActive, this.value);
            }
        }
    }
</script>

<style scoped>

    .form-checkbox{
        @apply cursor-pointer;

        box-sizing: border-box;
    }

    .checkbox{
        @apply text-gray-600 text-lg mr-2 select-none h-5 inline-block align-text-bottom;
        transition: .3s all ease;
    }
    .checkbox.checkbox-active{
        @apply text-gray-800;
    }

    .checkbox-label{
        @apply text-gray-800 text-lg select-none font-semibold;
    }

    @screen lg{

    }

</style>
