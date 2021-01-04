<template>
  <div class="bg-white h-full shadow relative side-bar relative">
      <div class="p-5 relative w-full mb-20 border-b border-gray-500">
            <div class="sider-bar left-main-menu ">
                <template v-for="(item) in menuItems">
                    <nuxt-link :to="item.link">
                        <template v-if="item.iconComponent">
                            <component :is="item.iconComponent" class="fill-current mr-5" />
                        </template>
                        <template v-else-if="item.icon">
                            <font-awesome-icon class="text-gray-500 mr-5 text-2xl" :icon="['fa', item.icon]" />
                        </template>
                        {{item.name}}
                    </nuxt-link>
                    <template v-if="item.childs">
                        <template v-for="(item) in item.childs">
                            <nuxt-link :to="item.link" class="ml-10">
                                <span class="ml-1">{{item.name}}</span>
                            </nuxt-link>
                        </template>
                    </template>
                </template>
          </div> 
      </div>
      <div>
        <div class="sider-bar left-main-menu flex-shrink sticky bottom-0 p-10 self-end w-full">
                <template v-for="(item) in botMenuItems">
                    <nuxt-link :to="item.link">
                        <template v-if="item.iconComponent">
                            <component :is="item.iconComponent" class="fill-current mr-5" />
                        </template>
                        <template v-else-if="item.icon">
                            <font-awesome-icon class="text-gray-500 mr-5 text-2xl" :icon="['fa', item.icon]" />
                        </template>
                        {{item.name}}
                    </nuxt-link>
                    <template v-if="item.childs">
                        <template v-for="(item) in item.childs">
                            <nuxt-link :to="item.link" class="ml-10">
                                <span class="ml-1">{{item.name}}</span>
                            </nuxt-link>
                        </template>
                    </template>
                </template>
          </div> 
      </div>
  </div>
</template>
<script>
  import DashBoardIcon from '~/components/partials/icons/dashboard-icon.vue'
  import ProjectsIcon from '~/components/partials/icons/bars-icon.vue'
  import TaskIcon from '~/components/partials/icons/list-icon.vue'
    export default {
        props: {
            menuItems: {
                type: Array,
                default: () => {
                    return []
                }
            },
            botMenuItems: {
                type: Array,
                default: () => {
                    return []
                }
            },
        },
        components: {
            DashBoardIcon,
            ProjectsIcon,
            TaskIcon
        }
    }
</script>
<style scoped>
.side-bar{
    width: 270px;
    min-width: 270px;
  }
  .left-main-menu{

  }
  .menu-item{
    @apply flex mb-8 content-center items-center mt-2 text-gray-700 text-base font-semibold cursor-pointer;
  }

  .menu-item:hover{
    @apply text-ideeza;
  }
  .left-main-menu svg{
    @apply text-gray-500;
  }
  .menu-item:hover svg{
    @apply text-ideeza;
  }
  .active-link,
  .active-link svg{
    @apply text-ideeza;
  }
  .sider-bar a:visited,.sider-bar a{
    @apply block p-5;
  }
</style>