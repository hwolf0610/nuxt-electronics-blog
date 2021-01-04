<template>
  <div class="left-main-menu">
    <div class="menu-item">
      <nuxt-link to="/technician/dashboard">
        <DashBoardIcon class="fill-current mr-5" />Dashboard
      </nuxt-link>
    </div>

    <div class="menu-item">
      <nuxt-link to="/technician/management/user-service-providers">
        <ProjectsIcon class="fill-current mr-5" />Management
      </nuxt-link>
    </div>

    <div class="menu-item">
      <nuxt-link to="/technician/electronics/add-part">
        <font-awesome-icon class="mr-5 h-6 inline text-xl" :icon="['fas', 'bolt']" />Electronics
      </nuxt-link>
    </div>

    <div class="menu-item">
      <nuxt-link to="/technician/code">
        <font-awesome-icon class="mr-5 h-6 inline text-xl" :icon="['fas', 'code']" />Code
      </nuxt-link>
    </div>

    <div class="menu-item">
      <nuxt-link to="/technician/cover">
        <font-awesome-icon class="mr-5 h-6 inline text-xl" :icon="['fas', 'cube']" />Cover
      </nuxt-link>
    </div>

    <div class="menu-item">
      <nuxt-link to="/technician/projects">
        <font-awesome-icon class="mr-5 h-6 inline text-xl" :icon="['fas', 'project-diagram']" />Projects
      </nuxt-link>
    </div>

    <div class="menu-item">
      <nuxt-link to="/technician/tracking">
        <font-awesome-icon class="mr-5 h-6 inline text-xl" :icon="['fas', 'chalkboard']" />Tracking
      </nuxt-link>
    </div>

    <div class="menu-item">
      <nuxt-link to="/technician/messages">
        <font-awesome-icon class="mr-5 h-6 inline text-xl" :icon="['fas', 'comments']" />Messages
      </nuxt-link>
    </div>

    <div class="menu-item">
      <nuxt-link to="/technician/tasklist">
        <TaskIcon class="fill-current mr-5" />Task List
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
