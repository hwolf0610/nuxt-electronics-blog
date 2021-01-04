<template>
    <div class="form-checkbox" >
        <font-awesome-icon class="checkbox" @click="checkBoxClicked()" :class="{'checkbox-active': isActive}" :icon="isActive ? ['fas','check-square'] : ['far','square']" />
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
        box-sizing: border-box;
    }

    .checkbox{
        @apply text-gray-600 text-lg mr-2 select-none h-8 inline-block align-text-bottom cursor-pointer;
        font-size: 30px;
        transition: .3s all ease;
    }
    .checkbox.checkbox-active{
        @apply text-ideeza-dark;
    }

    .checkbox-label{
        @apply text-gray-800 text-lg select-none font-semibold;
    }

    @screen lg{

    }

</style>
