<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow">
      <div class="main-contents lg:flex">
        <div class="flex-grow">
          <div class="flex w-full bg-white shadow-md mb-10 font-semibold">
            <div
              @click="setTab('local')"
              class="w-1/2 text-center cursor-pointer text-xl text-ideeza-gray-300 border-ideeza-dark py-5"
              :class="{'border-solid  border-b-2 text-ideeza-dark': tab==='local'}"
            >Following</div>
            <div
              @click="setTab('world')"
              class="w-1/2 text-center cursor-pointer text-xl text-ideeza-gray-300 border-ideeza-dark py-5"
              :class="{'border-solid  border-b-2 text-ideeza-dark': tab==='world'}"
            >World Innovation</div>
          </div>

          <!--Feed Panel-->
          <div class="feed-panel mx-auto">
            <NewsFeed v-if="feedType === 'follow'" />
            <NewsFeed v-if="feedType === 'world'" />
            <div class="flex flex-col justify-center items-center mt-10" v-if="!feedType">
              <h1 class="text-center font-semibold w-full text-3xl">Follow list is empty</h1>
              <p
                class="mt-2 text-center"
              >Here will display the posts you and people post you are following</p>
              <button
                @click="feedType='follow'"
                class="btn btn--ideeza py-3 text-center w-48 flex justify-center items-center mt-5"
              >
                <font-awesome-icon class="mr-2 h-4" :icon="['fas', 'address-book']" />Sync contacts
              </button>
            </div>
          </div>
        </div>

        <!--Right Side Bar-->
        <div class="rigt-bar lg:ml-6 xl:ml-12">
          <!--Sponsor-->
          <div class="bg-white shadow-md">
            <div>
              <img class="w-full object-fit object-center" src="~/static/images/sponsor.png" alt />
            </div>
            <div class="p-8 text-xl uppercase text-gray-400 font-semibold">
              <font-awesome-icon class="mr-5 h-6 inline-block" :icon="['fas', 'star']" />SPONSORED
            </div>
            <div class="px-5 pb-5 text-gray-500">
              <h1 class="text-gray-800 mb-2 font-semibold">Ahmed Doe’s new way of Tech Product</h1>Lorem ipsum dolores sit, amanet dolisi isilti
              as hat why souriti lalola. That’s why he
              wanted to create something unordinary....
            </div>
            <div
              class="border-t border-solid border-gray-300 py-5 px-5 mb-5 text-gray-500"
            >Nov 12, 2018 • Electronics</div>
          </div>

          <!--Connect-->
          <div class="bg-white shadow-md px-4 py-8 mt-12">
            <div
              class="text-lg border-b font-semibold border-solid border-gray-300 pb-5 text-gray-500"
            >PEOPLE YOU SHOULD CONNECT</div>

            <div
              class="flex justify-between items-center bg-white my-5"
              v-for="connect in connects"
            >
              <div class="flex items-center">
                <img class="h-10 w-10 md:h-14 md:w-14 rounded-full mr-3" :src="connect.potrait_url" />
                <div class="text-left mr-3">
                  <h2 class="font-semibold text-gray-800">{{connect.name}}</h2>
                  <div class="text-gray-600">{{connect.occupation}}</div>
                </div>
              </div>

              <button class="btn btn-normal px-2 py-2" @click="onConnect">
                <font-awesome-icon class="mr-1 h-4" :icon="['fas', 'link']" />Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LeftMenu from "~/components/user/common-left-side-menu.vue";
import NewsFeed from "~/components/user/news/feeds.vue";
import connects from "~/json/connects.json";

export default {
  middleware: "auth",
  layout: "user",
  name: "news-index",
  components: {
    LeftMenu,
    NewsFeed
  },
  data: function() {
    return {
      feedType: null,
      tab: "local",
      connects: connects
    };
  },
  computed: {
    leftMenu() {
      return this.$store.state.usermenu.openLeftMenu;
    }
  },
  mounted() {},
  methods: {
    setTab(tab) {
      this.tab = tab;
      if (tab === "local") {
        this.feedType = "follow";
      } else {
        this.feedType = "world";
      }
      this.$forceUpdate();
    },
    onConnect() {
      alert("Do you want to disconnect?");
    }
  }
};
</script>

<style scoped>
.feed-panel {
  width: 100%;
  max-width: 850px;
}
.rigt-bar {
  width: 100%;
  max-width: 390px;
}
.feed-avatar {
  width: 80px;
  /*height: 80px;*/
}
.feed-comment-avatar {
  width: 40px;
  height: 40px;
}
</style>
