<template>
  <div>
    <div class="px-5 md:flex sm:block py-4">
    <div class="md:w-1/4 sm:w-full logo">
      <nuxt-link to="" class="inline-block">
        <img src="~assets/images/logo.png">
      </nuxt-link>

      <div class="md:hidden float-right">
        <button @click="isOpen = !isOpen" type="button" class="block text-white hover:text-white focus:text-white focus:outline-none">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div>

    </div>
    <div class="md:w-2/3 sm:w-full">
      <nav :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 md:flex sm:p-0 justify-end">
        <ul class="text-white text-right block">
            <li class="md:inline-block sm:block text-left border-b md:border-0 py-4 md:py-0 border-gray-400 px-5">                       
              <nuxt-link to="" class="">About Us</nuxt-link>
            </li>
            <li class="md:inline-block sm:block text-left border-b md:border-0 py-4 md:py-0 border-gray-400 px-5">
              <nuxt-link to="" class="">Pricing</nuxt-link>
            </li>
            <li class="md:inline-block sm:block text-left border-b md:border-0 py-4 md:py-0 border-gray-400 px-5 ">
              <nuxt-link to="" class="">Contact Us</nuxt-link>
            </li>

            <li class="md:inline-block sm:block text-left border-b md:border-0 py-4 md:py-0 border-gray-400 px-5 social-link">
              <nuxt-link to="" class="">
                <i class="fa fa-linkedin-square"></i></nuxt-link>
              <nuxt-link to="" class="">
                <i class="fa fa-twitter-square"></i></nuxt-link>
              <nuxt-link to="" class="">
                <i class="fa fa-instagram"></i></nuxt-link>
              <nuxt-link to="" class="">
                <i class="fa fa-facebook-square" ></i></nuxt-link>
            </li> 
            <li class="md:inline-block sm:block text-left border-b md:border-0 py-4 md:py-0 border-gray-400 px-5 ">
              <nuxt-link to="" class="">Sign Up</nuxt-link>
            </li>

            <li class="md:inline-block sm:block text-left border-b md:border-0 py-4 md:py-0 border-gray-400 px-5 ">
              <nuxt-link to="" class="">Log In</nuxt-link>
            </li>
          </ul>   
      </nav>           
  </div>

   
</div>
</div>
 </template>
<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>