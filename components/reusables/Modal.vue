<template>
  <transition name="modal">
    <div :style="{zIndex:zIndex}" class="modal-mask">
      <div class="modal-wrapper">
        <div v-click-outside="closeModal" :class="{'wide':wide,'ultra-wide':ultraWide}" class="modal-container">
          <div v-if="!forGuide" class="modal-header">
            <slot name="header"></slot>
          </div>

          <div :class="{'no-padd':forGuide}" class="modal-body text-center">
            <slot name="body"></slot>
          </div>

          <div v-if="hidefooter==false" class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    forGuide: {
      type: Boolean,
      default: false
    },
    hidefooter: {
      type: Boolean,
      default: false
    },
    canvas: {
      type: Boolean,
      default: false
    },
    wide: {
      type: Boolean,
      default: false
    },
    ultraWide: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 10000
    }
  },
  methods: {
    closeModal: function() {
      if (this.canvas == false) this.$emit('close')
    }
  }
}
</script>
<style>

.modal-mask {
    position: fixed;
    z-index: 10000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    display: table;
    transition: opacity .15s ease;
}
.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}
.modal-container {
    max-width: 500px;
    margin: 0px auto;
    position: relative;
    background-color: #fff;
    transition: all .3s ease;
    box-shadow: 0 27px 24px 0 rgba(0, 0, 0, 0.2), 0 40px 77px 0 rgba(0, 0, 0, 0.22);
    border-radius: 6px;
    border: none;
}
.modal-body {
    max-height: 80vh;
    overflow-y: auto;
}
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.5s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;
}
.modal-body::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
}

.modal-body::-webkit-scrollbar
{
	width: 10px;
	background-color: #F5F5F5;
}

.modal-body::-webkit-scrollbar-thumb
{
	background-color: #999999;
	border: 2px solid #999999;
}
</style>
