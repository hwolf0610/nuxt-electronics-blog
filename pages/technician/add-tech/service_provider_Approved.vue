<template>
	<div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
     
     <LeftMenu/>

  <div class="w-full px-4">

    <div class="py-4">
      <nuxt-link to="" class="text-gray-600 px-5 py-3 bg-white inline-block mb-2">
        <img src="~/static/images/ico_ref2123.png" class="inline-block mr-2">User & Service Providers and technicans
      </nuxt-link>
      <nuxt-link to="" class="text-gray-600 px-5 py-3 bg-white inline-block mb-2">
        <img src="~/static/images/SP-ref0234.png" class="inline-block mr-2">Added Parts 
      </nuxt-link>
      <nuxt-link to="" class="text-gray-600 px-5 py-3 bg-white inline-block mb-2">
        <img src="~/static/images/SP-ref0235.png" class="inline-block mr-2">Categories
      </nuxt-link>
      <nuxt-link to="" class="text-gray-600 px-5 py-3 bg-white inline-block mb-2">
        <img src="~/static/images/SP-ref0234.png" class="inline-block mr-2">Projects
      </nuxt-link>
      <nuxt-link to="" class="text-gray-600 px-5 py-3 bg-white inline-block mb-2">
        <img src="~/static/images/SP-ref0235.png" class="inline-block mr-2">Blogs
      </nuxt-link>
      <nuxt-link to="" class="text-white px-5 py-3 bg-indigo-800 inline-block mb-2">
         Add new technican
      </nuxt-link>
    </div>

    <h2 class="text-3xl  text-gray-700 py-6 border-b">Add new technican</h2>
    <div class="w-full flex bg-white shadow mx-auto mt-5 pb-10">
       
      <div class="w-6/12">
      <!--Form Container-->
      <div class="my-5 p-5">
        <!--Form Fields-->
        <div class="py-2">
          <input class="border border-gray-400 rounded w-full h-12 px-2" type="text" placeholder="Email address"/>
        </div>

        <div class="py-2">
          <input class="border border-gray-400 rounded w-full h-12 px-2" type="text" placeholder="First name"/>
        </div>
         
        <div class="py-2">
          <input class="border border-gray-400 rounded w-full h-12 px-2" type="text" placeholder="Last name"/>
        </div>

         
        <div class="py-2">
          <input class="border border-gray-400 rounded w-full h-12 px-2" type="password" placeholder="Choose a password"/>
        </div>

        

        <h2 class="text-4xl font-bold text-gray-700">Birthday</h2>
        <p class="text-gray-700 py-3">Other people won't see your birthday.</p>

        <div class="flex py-2">
            <div class="flex-1 px-2">
              <input class="border border-gray-400 rounded w-full h-12 px-2" type="text" placeholder="Month"/>
            </div>
            <div class="flex-1 px-2">
              <input class="border border-gray-400 rounded w-full h-12 px-2" type="text" placeholder="Day"/>
            </div>
            <div class="flex-1 px-2">
              <input class="border border-gray-400 rounded w-full h-12 px-2" type="text" placeholder="Year"/>
            </div>
        </div>
 

        <div class="mt-8 mb-3 text-center">
          <button class="px-16 bg-green-CM rounded py-4 text-white text-xl">Approved</button>
        </div>
      </div>
    </div>
    <div class="w-6/12 px-4 pt-6">
        <h2 class="text-2xl text-gray-700 py-4 border-b">Additional Information</h2>
        <p class="text-gray-600 py-2">Please feel out this for additional info about you</p>
        
        <div class="py-2">
          <input class="border border-gray-400 rounded w-full h-12 px-2" type="text" placeholder="Comany Name"/>
        </div>

        <div class="py-2">
          <input class="border border-gray-400 rounded w-full h-12 px-2" type="text" placeholder="Email Address"/>
        </div>
         
        <div class="py-2">
          <input class="border border-gray-400 rounded w-full h-12 px-2" type="text" placeholder="Phone number"/>
        </div>

        <div class="py-2">
          <input class="border border-gray-400 rounded w-full h-12 px-2" type="text" placeholder="Address"/>
        </div>

        <div class="py-2">
          <input class="border border-gray-400 rounded w-full h-12 px-2" type="text" placeholder="Website"/>
        </div>

        <div class="py-2">
          <div class="relative">
            <select class="block text-lg appearance-none w-full bg-white border border-gray-400 rounded px-4 py-3 pr-8 leading-tight focus:outline-none ">
            <option>Preferred language</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>

        <div class="py-2">
          <textarea class="border border-gray-400 rounded w-full h-32 px-2" type="text" placeholder="Discribe your company"  />
        </div>
        <h2 class="text-2xl text-gray-700 py-4 border-b">business Information</h2>
        <div class="py-2">
          <div class="relative">
            <select class="block text-lg appearance-none w-full bg-white border border-gray-400 rounded px-4 py-3 pr-8 leading-tight focus:outline-none ">
            <option>Line of business</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>

        <div class="py-2">
          <div class="relative">
            <select class="block text-lg appearance-none w-full bg-white border border-gray-400 rounded px-4 py-3 pr-8 leading-tight focus:outline-none ">
            <option>Expertise</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>

    </div>



    </div>
    </div>
  
  </div>
  </div>
</template>
 <script>

    import LeftMenu from '~/components/technician/common-left-side-menu.vue'
    import AddCode from '~/components/technician/add-code.vue'

    export default {
        layout: 'technician',
        name: "code-index",
        components: {
            LeftMenu,
            AddCode
        },

        computed: {
            leftMenu() {
                return this.$store.state.usermenu.openLeftMenu;
            }
        },
        mounted() {

        },

    }
</script>
<style scoped>
select{
      max-width: none;
}
.bg-green-CM{
  background:#44bc00;
}
</style>
