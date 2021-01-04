<template>
  <div @click.self="$emit('close')" class="popup-overlay">
    <div class="popup-overlay--contents add-new-container">
      <div class="flex items-center mb-5">
        <font-awesome-icon class="share-icon" @click="title='facebook'" :class="{'active': title==='facebook'}" :icon="['fab', 'facebook-square']"/>
        <font-awesome-icon class="share-icon" @click="title='linkedin'" :class="{'active': title==='linkedin'}" :icon="['fab', 'linkedin']"/>
        <font-awesome-icon class="share-icon" @click="title='instagram'" :class="{'active': title==='instagram'}" :icon="['fab', 'instagram']"/>
        <font-awesome-icon class="share-icon" @click="title='twitter'" :class="{'active': title==='twitter'}" :icon="['fab', 'twitter-square']"/>
        <font-awesome-icon class="share-icon" @click="title='whatsapp'" :class="{'active': title==='whatsapp'}" :icon="['fab', 'whatsapp-square']"/>
        <TiktokIcon class="share-icon fill-current w-5" @click="title='tiktok'" :class="{'active': title==='tiktok'}"  />
      </div>
      <h1 class="font-semibold">Share on {{title}}</h1>
      <textarea name="" id="" cols="30" rows="10" class="w-full border border-solid border-light-gray my-5"></textarea>
      <div class="flex items-center">
        <div><font-awesome-icon class="mr-1 h-8 text-gray-500 hover:text-gray-600 cursor-pointer text-4xl" :icon="['fas', 'laugh']"/></div>
        <div class="flex-grow"><input class="w-full p-2 border-0 outline-none"> </div>
        <div><button class="btn pill-button--ideeza px-4 py-1">Share</button></div>
      </div>
    </div>
  </div>
</template>

<script>
  import TikTokIcon from '~/components/partials/icons/tiktok-icon.vue'
  import TiktokIcon from "../partials/icons/tiktok-icon";
    export default {
        name: "share-internal",
      components: {TiktokIcon},
      data: function () {
          return {
            title: 'facebook'
          }
        },
      comments: [
        TikTokIcon
      ]
    }
</script>

<style scoped>
  .add-new-container{
    @apply w-full p-5 shadow-lg;
    max-width: 600px;
  }
  .share-icon{
    @apply mr-2 h-8 cursor-pointer text-4xl text-gray-700;
  }
  .share-icon.active{
    @apply text-ideeza-dark;
  }
</style>
