<template>
  <div class="left-main-menu">
    <div class="menu-item">
      <nuxt-link to="/user/dashboard">
        <DashBoardIcon class="fill-current mr-5" />Dashboard
      </nuxt-link>
    </div>
    <div class="menu-item">
      <nuxt-link to="/user/projects">
        <ProjectsIcon class="fill-current mr-5" />My Projects
      </nuxt-link>
    </div>
 <div class="menu-item">
      <nuxt-link to="/user/products/product">
        <ProjectsIcon class="fill-current mr-5" />My Products
      </nuxt-link>
    </div>
    <div class="menu-item">
      <nuxt-link to="/user/tasklist">
        <TaskIcon class="fill-current mr-5" />Task list
      </nuxt-link>
    </div>
    <div class="menu-item">
      <nuxt-link to="/user/news">
        <font-awesome-icon
          class="mr-5 w-8 h-8 text-2xl align-text-top"
          :icon="['far', 'newspaper']"
        />News Feed
      </nuxt-link>
    </div>
    <div class="menu-item">
      <nuxt-link to="/user/messages">
        <font-awesome-icon
          class="mr-5 w-8 h-8 text-2xl align-text-top"
          :icon="['fas', 'comments']"
        />Messages
      </nuxt-link>
    </div>
    <div class="menu-item">
      <nuxt-link to="/user/blog">
        <font-awesome-icon class="mr-5 w-8 h-8 text-2xl align-text-top" :icon="['fas', 'bold']" /> Blog
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import DashBoardIcon from "~/components/partials/icons/dashboard-icon.vue";
import ProjectsIcon from "~/components/partials/icons/bars-icon.vue";
import TaskIcon from "~/components/partials/icons/list-icon.vue";
export default {
  name: "user-menu-items",
  components: {
    DashBoardIcon,
    ProjectsIcon,
    TaskIcon
  }
};
</script>

<style scoped>
.menu-item {
  @apply flex mb-8 content-center items-center mt-2 text-gray-700 text-xl font-semibold cursor-pointer;
}

.menu-item:hover {
  @apply text-ideeza;
}
.left-main-menu svg {
  @apply text-gray-500;
}
.menu-item:hover svg {
  @apply text-ideeza;
}
.active-link,
.active-link svg {
  @apply text-ideeza;
}
</style>
