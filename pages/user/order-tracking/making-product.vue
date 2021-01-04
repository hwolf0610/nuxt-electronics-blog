<template>
  <!-- <div class="lg:flex justify-between"> -->
    <!-- <div class="making-container">
      <div class="track-heading">Freelancers</div>
      <div class="mt-10" v-for="Project in Projects">
        <div class="mb-10"   v-if="Project.kind == 'Freelancers' ">
          <div class="flex justify-between items-center" >
            <div class="flex items-center">
              <div class="mr-2">
                <img class="avatar" :src="Project.profileimage"  alt />
              </div>
              <div>
                <span class="block font-semibold text-sm">{{Project.name}}</span>
                <span class="block text-sm text-gray-500">{{Project.consultantKind}}</span>
              </div>
            </div>
             <nuxt-link :to="{ path: '/user/messages', query: { id: Project.id}}">
            <font-awesome-icon
              class="mr-2 h-6 text-ideeza text-xl cursor-pointer"
              :icon="['fas', 'envelope']"
            /></nuxt-link>
          </div>
          <div class="mt-3 flex justify-between">
            <div>
              He's working on:
              <span class="font-semibold">Patent</span>
            </div>
            <div class="font-semibold text-ideeza">See his work</div>
          </div>
        </div>
        
      </div>
    </div> -->
    <div>
    <h4 class="text-lg text-ideeza-black font-semibold">We have already made the cover and electronics part of your product. Now it's time to combine them</h4>
    <div class="making-container md:flex flex-wrap w-full md:mx-0 mx-auto">
      <div class="flex-1 mr-10">
      <div class="track-heading mt-6">Freelancer</div>
      <div class="mt-10">
        <div class="my-6" v-for="Project in Projects"  v-if="Project.kind == 'Eletronics' ">
          <div>
          <div class="flex justify-between items-center mb-3">
            <div class="flex items-center">
              <div class="mr-2">
                <img class="avatar" :src="Project.profileimage" alt />
              </div>
              <div>
                <span class="block font-semibold text-base text-black">{{Project.name}}</span>
                <span class="block text-sm text-gray-500">{{Project.consultantKind}}</span>
              </div>
            </div>
            <div class="flex items-center">
              <nuxt-link :to="{ path: '/user/messages', query: { id: Project.id}}">
                <font-awesome-icon
                  class="mr-2 h-6 text-ideeza text-xl cursor-pointer"
                  :icon="['far', 'envelope']"
                />
              </nuxt-link>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <div class="text-gray-400 font-semibold">He's working on: <span class="text-black">Backend</span></div>
            <a href="#" class="text-ideeza font-bold text-lg"><u>See his work</u></a>
          </div>
          </div>
        </div>

      </div>
      </div>
      <div class="flex-1 mr-10">
      <div class="track-heading mt-6">Electronics</div>
      <div class="mt-10">
        <Progress width="60" />
        <div class="my-10" v-for="Project in Projects">
          <div class="flex justify-between items-center" v-if="Project.kind == 'Eletronics' ">
            <div class="flex items-center">
              <div class="mr-2">
                <img class="avatar" :src="Project.profileimage" alt />
              </div>
              <div>
                <span class="block font-semibold text-base text-black">{{Project.name}}</span>
                <span class="block text-sm text-gray-500">{{Project.consultantKind}}</span>
              </div>
            </div>
            <div class="flex items-center">
              <div class="text-sm text-gray-500 mr-2">
                <span class="block font-semibold text-sm text-ideeza">{{Project.consultantname}}</span>
                <span class="block text-xs font-bold text-gray-500">{{Project.state}}</span>
              </div>
              <nuxt-link :to="{ path: '/user/messages', query: { id: Project.id}}">
                <font-awesome-icon
                  class="mr-2 h-6 text-ideeza text-xl cursor-pointer"
                  :icon="['far', 'envelope']"
                />
              </nuxt-link>
            </div>
          </div>
        </div>

      </div>
      </div>
      <div class="flex-1 mr-10">
      <div class="track-heading mt-6">Cover</div>
      <div class="mt-10">
        <Progress width="60" />
        <div class="my-10" v-for="Project in Projects">
          <div class="flex justify-between items-center" v-if="Project.kind == 'Eletronics' ">
            <div class="flex items-center">
              <div class="mr-2">
                <img class="avatar" :src="Project.profileimage" alt />
              </div>
              <div>
                <span class="block font-semibold text-base text-black">{{Project.name}}</span>
                <span class="block text-sm text-gray-500">{{Project.consultantKind}}</span>
              </div>
            </div>
            <div class="flex items-center">
              <div class="text-sm text-gray-500 mr-2">
                <span class="block font-semibold text-sm text-ideeza">{{Project.consultantname}}</span>
                <span class="block text-xs font-bold text-gray-500">{{Project.state}}</span>
              </div>
              <nuxt-link :to="{ path: '/user/messages', query: { id: Project.id}}">
                <font-awesome-icon
                  class="mr-2 h-6 text-ideeza text-xl cursor-pointer"
                  :icon="['far', 'envelope']"
                />
              </nuxt-link>
            </div>
          </div>
        </div>

      </div>
      </div>
    </div>
    <div class="text-right absolute right-0 bottom-0">
    <nuxt-link to="/user/order-tracking/delivery">
      <button class="btn btn-normal btn--ideeza btn-text-bold btn--rounded px-8 py-4 text-lg m-3" >Next</button>
    </nuxt-link>
    </div>
    </div>
    <!-- <div class="making-container">
      <div class="track-heading">Parts</div>
      <div class="mt-10">
        <Progress width="30" />
        <h1 class="font-semibold my-5">People working on code</h1>
        <div class="mb-10" v-for="Project in Projects">
          <div class="flex justify-between items-center" v-if="Project.kind == 'Parts' ">
            <div class="flex items-center">
              <div class="mr-2">
                <img class="avatar" :src="Project.profileimage" alt />
              </div>
              <div>
                <span class="block font-semibold text-sm">{{Project.name}}</span>
                <span class="block text-sm text-gray-500">{{Project.consultantKind}}</span>
              </div>
            </div>
            <span class="text-sm text-gray-500">{{Project.consultantname}}</span>
             <nuxt-link :to="{ path: '/user/messages', query: { id: Project.id}}">
            <font-awesome-icon
              class="mr-2 h-6 text-ideeza text-xl cursor-pointer"
              :icon="['fas', 'envelope']"
            /></nuxt-link>
          </div>
        </div>
         
      </div>
      <nuxt-link to="/user/order-tracking/delivery">
          <button class="btn btn-normal btn--ideeza btn-text-bold btn--rounded px-8 py-4 text-lg" >Next</button>
          </nuxt-link>
    </div> -->
     
  <!-- </div> -->
</template>

<script>
import Progress from "~/components/user/order-tracking/progress-bar.vue";
import Projects from "~/data/UserProjectApi.json";

export default {
  middleware: "auth",
  name: "making-product",
  components: {
    Progress
  },
  data: function() {
    return {
      Projects: Projects.myprojectconnect,
      tabNumber: 0,
      titleList: ["Electronics", "Freelancers", "Parts"]
    };
  },
  mounted() {
    this.$store.commit("trackstepper/set", { position: 0 });
  }
};
</script>

<style scoped>
.track-heading {
  @apply text-2xl font-semibold relative;
  width: fit-content;
}
.track-heading:before {
  @apply border-b-4 border-solid border-ideeza left-0;
  content: "";
  position: absolute;
  width: 80px;
  bottom: -10px;
}
.avatar {
  @apply rounded-full;
  width: 45px;
  height: 45px;
}
</style>
