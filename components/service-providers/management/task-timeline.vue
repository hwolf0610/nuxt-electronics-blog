<template>
  <div class="lg:flex">
    <div class="time-line-contents text-xs border-r border-solid border-gray400 p-2">
      <div class="pl-10">Project Timing</div>
      <div class="flex justify-between items-center my-2 mx-2">
        <img class="avatar-timeline mr-2" src="https://randomuser.me/api/portraits/men/33.jpg">
        <div>Make iron from steal</div>
      </div>
      <div class="flex justify-between items-center my-2 mx-2">
        <img class="avatar-timeline mr-2" src="https://randomuser.me/api/portraits/men/33.jpg">
        <div>Make iron from steal</div>
      </div>
      <div class="flex justify-between items-center my-2 mx-2">
        <img class="avatar-timeline mr-2" src="https://randomuser.me/api/portraits/men/33.jpg">
        <div>Make iron from steal</div>
      </div>

    </div>

    <div class="flex-grow ml-5">
      <div class="flex justify-between">
        <div class="text-center flex-grow" v-for="(n, index) in 18" :key="n">{{n}}</div>
      </div>
      <div class="w-full task-line-container relative">
        <div class="bg-ideeza-dark drag-task relative flex justify-end w-64">
          <div v-dragged="onDragged" class="dragger bg-ideeza-dark"></div>
        </div>
      </div>

      <div class="w-full task-line-container relative">
        <div class="bg-ideeza drag-task relative flex justify-end w-56">
          <div v-dragged="onDragged" class="dragger bg-ideeza"></div>
        </div>
      </div>

      <div class="w-full task-line-container relative">
        <div class="bg-orange-500 drag-task relative flex justify-end w-32">
          <div v-dragged="onDragged" class="dragger bg-orange-500"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "task-timeline",
      data: function (){
          return {
            isDragging : false,
            xStartDragPosition : null,
            currentWidth: null,
            currentElement: null,
            maxWidth: null,
            minWidth: 15
          }
      },

      methods: {
        onDragged({ el, deltaX, deltaY, offsetX, offsetY, clientX, clientY, first, last }) {

          if (first) {
            this.isDragging = true;
            this.xStartDragPosition = clientX;
            this.currentElement = el.parentNode;
            this.currentWidth = el.parentNode.clientWidth;
            this.maxWidth = this.currentElement.parentNode.clientWidth;
            return
          }
          if (last) {
            this.isDragging = false;
            this.xStartDragPosition = null;
            this.currentElement = null;
            this.currentWidth = null;
            return
          }
          if(this.isDragging){

            let dragNumber = clientX - this.xStartDragPosition;
            let width = this.currentWidth + dragNumber;
            if(width > this.minWidth && width < this.maxWidth)
              this.currentElement.style.width = width+'px';

          }

        }
      }
    }
</script>

<style scoped>
  .avatar{
    @apply w-8 rounded-full -ml-5 shadow inline cursor-pointer;
  }
  .avatar:hover{
    @apply shadow-md;
  }
  .avatar:first-child{
    @apply ml-0;
  }
  .avatar-timeline{
    @apply w-6 rounded-full shadow inline cursor-pointer;
  }
  .time-line-contents{
    width: 220px;
  }
  .timeline-days-container div{

  }
  .timeline-line{
    width: 5.6%;
  }
  .drag-task{
    height: 15px;
  }
  .dragger{
    transition: all 0.3s ease-in;
    height: 15px;
    width: 15px;
    cursor: pointer;
  }
  .dragger:hover{
    transform: scale(1.2);
  }
  .task-line-container{
    margin-top: 15px;
    transition: all 0.05s;
  }
</style>
