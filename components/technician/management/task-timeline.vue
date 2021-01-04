<template>
  <div class="lg:flex">
    <div class="time-line-contents text-xs border-r border-solid border-gray400 p-2">
      <div class="pl-10">Project Timing</div>
      <div class="flex justify-between items-center my-2 mx-2" v-for="task in articleArray">
        <img
          class="avatar-timeline mr-2"
          v-for="image in task.assigned_user"
          :src="avata_img_url + image.avatar"
        />
        <div>
          <span style="text-align: left;">{{task.name}}</span>
        </div>
      </div>
    </div>

    <div class="flex-grow ml-5">
      <div class="flex justify-between">
        <div class="text-center flex-grow" v-for="(n, index) in 12" :key="n">{{n}}</div>
      </div>
      <div class="w-full task-line-container relative" v-for="task in articleArray">
        <div class="bg-ideeza-dark drag-task relative flex justify-end w-64" :style="{width:(task.start/10000000000)+'px'}" style="height:17px;">
          <!-- <div  class="dragger bg-ideeza-dark"></div> -->
        </div>
      </div>


    </div>
    <!-- {{articleArray}} -->
  </div>
</template>

<script>
import apiService from "~/apiService/have_token.js";
export default {
  name: "task-timeline",
  data: function() {
    return {
      isDragging: false,
      xStartDragPosition: null,
      currentWidth: null,
      currentElement: null,
      maxWidth: null,
      minWidth: 15,
      projectidd: null,
      ts: new Date(),
      geturl: "/api/project/get_tasks",
      articleArray: [],
      articleArrayrout: [],
      articleArrayaxios: [],
      avata_img_url: process.env.avatar_base_url,
      scale:null,
    };
  },
  mounted() {
    this.projectidd = this.$route.query.id;
    const formData = new FormData();
    formData.set("projectid", this.projectidd);
    let sendData2 = {
      method: "post",
      url: this.geturl,
      data: formData
    };

    apiService(sendData2, response => {
      console.log(response.data);
      this.randomNumber = response.data;
      this.articleArrayaxios = Object.values(response.data.tasks);

      this.articleArrayaxios.map(item => {
        this.articleArrayrout.push(item);
        this.articleArray.push(item);
      });
    });
  },
  methods: {
    onDragged({
      el,
      deltaX,
      deltaY,
      offsetX,
      offsetY,
      clientX,
      clientY,
      first,
      last
    }) {
      if (first) {
        this.isDragging = true;
        this.xStartDragPosition = clientX;
        this.currentElement = el.parentNode;
        this.currentWidth = el.parentNode.clientWidth;
        this.maxWidth = this.currentElement.parentNode.clientWidth;
        return;
      }
      if (last) {
        this.isDragging = false;
        this.xStartDragPosition = null;
        this.currentElement = null;
        this.currentWidth = null;
        return;
      }
      if (this.isDragging) {
        let dragNumber = clientX - this.xStartDragPosition;
        let width = this.currentWidth + dragNumber;
        if (width > this.minWidth && width < this.maxWidth)
          this.currentElement.style.width = width + "px";
      }
    }
  }
};
</script>

<style scoped>
.avatar {
  @apply w-8 rounded-full -ml-5 shadow inline cursor-pointer;
}
.avatar:hover {
  @apply shadow-md;
}
.avatar:first-child {
  @apply ml-0;
}
.avatar-timeline {
  @apply w-6 rounded-full shadow inline cursor-pointer;
}
.time-line-contents {
  width: 220px;
}
.timeline-days-container div {
}
.timeline-line {
  width: 5.6%;
}
.drag-task {
  height: 15px;
}
.dragger {
  transition: all 0.3s ease-in;
  height: 15px;
  width: 15px;
  cursor: pointer;
}
.dragger:hover {
  transform: scale(1.2);
}
.task-line-container {
  margin-top: 15px;
  transition: all 0.05s;
}
</style>
