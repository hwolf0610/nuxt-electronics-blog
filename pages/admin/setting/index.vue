<template>
	<div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <div class="text-lg">
    	<div class=" my-10 pl-5">
    		<nuxt-link to="" class="bg-ideeza text-white px-12 py-3 inline-blockss rounded">Setting</nuxt-link>
	    	<nuxt-link to="" class="border text-gray-700 px-12 py-3 inline-blockss rounded">Menu</nuxt-link>
    	</div>
		<nuxt-link to="" class="text-ideeza px-4 py-4 block">General</nuxt-link>
	    <nuxt-link to="" class="text-gray-600 px-4 py-4 block">Notifications</nuxt-link>
	    <nuxt-link to="" class="text-gray-600 px-4 py-4 block">Privacy</nuxt-link>
	    <nuxt-link to="" class="text-gray-600 px-4 py-4 block">Security</nuxt-link>
	    <nuxt-link to="" class="text-gray-900 px-4 py-4 block">Add new executive</nuxt-link>
	     
    </div>
  <div class="settings-security mx-auto">
    <!---->
    <!--Profile Information-->
    <!---->
    <div class="security-form w-full bg-white shadow mx-auto">
       

      <!--Form Container-->
      <div class="my-5 p-5 bg-white shadow-md">
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

        <div class="flex-1 px-2">
          <div class="relative">
            <select class="block text-lg appearance-none w-full bg-white border border-gray-400 rounded px-4 py-3 pr-8 leading-tight focus:outline-none ">
            <option>Permission type</option>
            <option>Full</option>
            <option>Part admin</option>
            <option>Super technican</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div> 
        </div>


        <div class="mt-8 mb-3 text-center">
          <button class="px-16 bg-ideeza rounded py-4 text-white text-xl">Sign up</button>
        </div>


      </div>
    </div>
  
  </div>
  </div>
</template>
 <script>
  import LeftMenu from '~/components/admin/common-left-side-menu.vue'
  import MyIdeeza from '~/components/user/my-ideeza/new-ideeza.vue'
  import SimpleTable from '~/components/reusables/Table.vue'

  export default {
    layout: 'admin',
    components: {
      LeftMenu,
      MyIdeeza,
      SimpleTable,
    },
    data: function () {
      return {
        showMyIdeeza: false,
        users: [{
            id: 1,
            name: 'Michael Scott',
            email: 'marchas@gmail.com',
            type: 1,
            date_modified: '07/04/1927',
            role: 1
          },
          {
            id: 2,
            name: 'Michael Scott',
            email: 'marchas@gmail.com',
            type: 2,
            date_modified: '07/04/1927',
            role: 2
          },
          {
            id: 3,
            name: 'Michael Scott',
            email: 'marchas@gmail.com',
            type: 1,
            date_modified: '07/04/1927',
            role: 2
          },
          {
            id: 4,
            name: 'Michael Scott',
            email: 'marchas@gmail.com',
            type: 3,
            date_modified: '07/04/1927',
            role: 1
          },
          {
            id: 5,
            name: 'Michael Scott',
            email: 'marchas@gmail.com',
            type: 3,
            date_modified: '07/04/1927',
            role: 1
          },
          {
            id: 6,
            name: 'Michael Scott',
            email: 'marchas@gmail.com',
            type: 3,
            date_modified: '07/04/1927',
            role: 1
          },
        ],
      }
    },
    methods: {
      selectall(value) {
        if (value == true) {
          this.users.forEach(element => {
            element.selected = true
          });
        } else {
          this.users.forEach(element => {
            element.selected = false
          });
        }
        this.$forceUpdate()
      }
    },
    computed: {
      leftMenu() {
        return this.$store.state.usermenu.openLeftMenu;
      }
    },
  }

</script>
<style scoped>
select{
      max-width: none;
}
</style>
