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
      <div class="flex timeline-days-container">
        <div class="timeline-line flex flex-col w-full">
          <div class="my-2 w-full text-center">29</div>
          <div class="w-full h-4 bg-ideeza-dark"></div>
        </div>
        <div class="timeline-line flex flex-col w-full">
          <div class="my-2 w-full text-center">30</div>
          <div class="w-full h-4 bg-ideeza-dark"></div>
        </div>
        <div class="timeline-line flex flex-col w-full">
          <div class="my-2 w-full text-center">1</div>
          <div class="w-full h-4 bg-ideeza-dark"></div>
        </div>
        <div class="timeline-line flex flex-col w-full">
          <div class="my-2 w-full text-center">2</div>
          <div class="h-4 bg-ideeza-dark"></div>
        </div>

        <div class="timeline-line flex flex-col w-full">
          <div class="my-2 w-full text-center">3</div>
          <div class="w-full h-5"></div>
          <div class="w-full h-4 bg-ideeza"></div>
        </div>
        <div class="timeline-line flex flex-col w-full">
          <div class="my-2 w-full text-center">4</div>
          <div class="w-full h-5"></div>
          <div class="h-4 bg-ideeza"></div>
        </div>
        <div class="timeline-line flex flex-col w-full">
          <div class="my-2 w-full text-center">5</div>
          <div class="w-full h-5"></div>
          <div class="w-full h-5"></div>
          <div class="h-4 bg-ideeza"></div>
        </div>
        <div class="timeline-line flex flex-col w-full">
          <div class="my-2 w-full text-center">6</div>
          <div class="w-full h-5"></div>
          <div class="w-full h-5"></div>
          <div class="h-4 bg-ideeza"></div>
        </div>
        <div class="timeline-line flex flex-col w-full">
          <div class="my-2 w-full text-center">7</div>
          <div class="w-full h-5"></div>
          <div class="w-full h-5"></div>
          <div class="h-4 bg-ideeza"></div>
        </div>
        <div class="timeline-line flex flex-col w-full">
          <div class="my-2 w-full text-center">8</div>
          <div class="w-full h-5"></div>
          <div class="w-full h-5"></div>
          <div class="h-4 bg-ideeza"></div>
        </div>
        <div class="timeline-line flex flex-col w-full">
          <div class="my-2 w-full text-center">9</div>
          <div class="w-full h-5"></div>
          <div class="w-full h-5"></div>
          <div class="h-4 bg-ideeza"></div>
        </div>
        <div class="timeline-line flex flex-col w-full">
          <div class="my-2 w-full text-center">10</div>
          <div class="w-full h-5"></div>
          <div class="w-full h-5"></div>
          <div class="h-4 bg-ideeza"></div>
        </div>
        <div class="timeline-line flex flex-col w-full">
          <div class="my-2 w-full text-center">11</div>
          <div class="w-full h-5"></div>
          <div class="w-full h-5"></div>
          <div class="h-4 bg-ideeza"></div>
        </div>
        <div class="timeline-line flex flex-col w-full">
          <div class="my-2 w-full text-center">12</div>
          <div class="w-full h-5"></div>
          <div class="w-full h-5"></div>
          <div class="h-4 bg-ideeza"></div>
        </div>


        <div class="timeline-line flex flex-col w-full">
          <div class="my-2 w-full text-center">13</div>
          <div class="w-full h-5"></div>
          <div class="w-full h-5"></div>
          <div class="w-full h-5"></div>
          <div class="h-4 bg-ideeza"></div>
        </div>
        <div class="timeline-line flex flex-col w-full">
          <div class="my-2 w-full text-center">14</div>
          <div class="w-full h-5"></div>
          <div class="w-full h-5"></div>
          <div class="w-full h-5"></div>
          <div class="h-4 bg-ideeza"></div>
        </div>
        <div class="timeline-line flex flex-col w-full">
          <div class="my-2 w-full text-center">15</div>
          <div class="w-full h-5"></div>
          <div class="w-full h-5"></div>
          <div class="w-full h-5"></div>
          <div class="h-4 bg-ideeza"></div>
        </div>
        <div class="timeline-line flex flex-col w-full">
          <div class="my-2 w-full text-center">16</div>
          <div class="w-full h-5"></div>
          <div class="w-full h-5"></div>
          <div class="w-full h-5"></div>
          <div class="h-4 bg-ideeza"></div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "task-timeline"
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
</style>
