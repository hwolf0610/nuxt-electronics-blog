<template>
  <div>
    <div class="float-button">
      <img @click="active = !active" class="cursor-pointer" src="~/static/icons/ideeza-float.png" />

      <!--New Project-->
      <div class="button-hide projects button-container" :class="{'active':active}">
        <div @click="showMyIdeeza=true" class="button">
          <img src="~/static/icons/layers.svg" class="absolute-center-h-v" alt />
        </div>
        <h1 class="font-semibold text-xs">Projects</h1>
      </div>

      <!--Share Project-->
      <div class="button-hide share button-container" :class="{'active':active}" @click="showShare=true">
        <div class="button">
          <img src="~/static/icons/share.svg" class="absolute-center-h-v" alt />
        </div>
        <h1 class="font-semibold text-xs">Share Project</h1>
      </div>

      <!--New Note-->
      <div class="button-hide edit button-container" :class="{'active':active}" @click="showAddTask=true">
        <div class="button">
          <img src="~/static/icons/edit.svg" class="absolute-center-h-v" alt />
        </div>
        <h1 class="font-semibold text-xs">New Note</h1>
      </div>

      <!--New Message-->
      <nuxt-link to="/user/messages" class="button-hide message button-container" :class="{'active':active}">
        <div class="button">
          <div>
            <img src="~/static/icons/envelope.svg" class="absolute-center-h-v" alt />
          </div>
        </div>
        <h1 class="font-semibold text-xs">Message</h1>
      </nuxt-link>
    </div>
    <add-note @onClose="showAddTask=false" v-if="showAddTask==true" />
    <share-project @close="showShare=false" v-if="showShare"/>
    <!--MyIdeeza Popup-->
    <MyIdeeza v-click-outside="onClickOutside" v-if="showMyIdeeza" @close="showMyIdeeza=false" />
  </div>
</template>

<script>
import MyIdeeza from "~/components/user/my-ideeza/new-ideeza.vue";
import AddNote from "~/components/user/tasklist/add-task.vue"
import ShareProject from "~/components/share/share-internal.vue"
export default {
  name: "right-bot-float-button",
  components: {
    MyIdeeza,
    AddNote,
    ShareProject
  },
  data: function() {
    return {
      showMyIdeeza: false,
      showAddTask: false,
      showShare: false,
      active: false,
    };
  },
  methods: {
    onClickOutside() {
      this.showMyIdeeza = false;
    }
  }
};
</script>

<style scoped>
.float-button {
  @apply fixed;
  z-index: 39;
  right: 100px;
  bottom: 50px;
}
.button-container {
  @apply flex flex-col justify-center items-center absolute cursor-pointer;
}
.button-hide {
  right: 17px;
  bottom: 4px;
  transform: scale(0);
  z-index: 0;
  opacity: 0;
  transition: all 0.3s;
}
.projects.active {
  right: -30px;
  bottom: 115px;
  opacity: 1;
  z-index: 100;
  transform: scale(1);
}
.share.active {
  right: 35px;
  bottom: 100px;
  opacity: 1;
  z-index: 100;
  transform: scale(1);
}
.share h1 {
  width: 80px;
}
.edit.active {
  right: 120px;
  bottom: 45px;
  opacity: 1;
  z-index: 100;
  transform: scale(1);
}
.edit h1 {
  width: 60px;
}
.message.active {
  right: 115px;
  bottom: -40px;
  opacity: 1;
  z-index: 100;
  transform: scale(1);
}
.message h1 {
  width: 50px;
}
.button {
  @apply text-white bg-ideeza-accent relative shadow rounded-full cursor-pointer;
  width: 42px;
  height: 42px;
}
</style>
