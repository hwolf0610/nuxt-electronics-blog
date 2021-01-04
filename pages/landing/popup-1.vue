<template>
   <div class="border-white shadow-lg rounded-lg p-5 w-full md:w-6/12 m-auto border form-border-color my-5">
    <div class="w-full">
      <div class="text-center">
        <div class="inline-block">
          <div class="w-10 h-10 rounded-full bg-indigo-900 inline-block mx-3"></div>
          <p class="text-indigo-900">Step 1</p>
        </div>
        <div class="inline-block">
          <div class="w-10 h-10 rounded-full bg-gray-400 inline-block mx-3"></div>
          <p class="text-gray-400">Step 2</p>
        </div> 
      </div>
      <div class="text-center py-5 text-xl">
        <p>Sign up with 
          <nuxt-link to="" class="text-ideeza">Facebook</nuxt-link>
         or<nuxt-link to="" class="text-ideeza"> Google</nuxt-link> </p>
      </div>
      <h2 class="text-4xl font-bold text-gray-800 py-5">Contact information </h2>
        <form class="bg-white rounded pt-6 pb-8 mb-4">
          <div class="w-full">
            <div class="mb-4">
               
              <input class="border form-border-color appearance-none border rounded h-12 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Email address ">
            </div>

            <div class="mb-4">
              <input class="border form-border-color appearance-none border rounded h-12 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="First name">
            </div>

            <div class="mb-4">
              <input class="border form-border-color appearance-none border rounded h-12 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Last name">
            </div>

            <div class="mb-4">
               
              <input class="border form-border-color appearance-none border rounded h-12 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Choose a password ">
            </div>
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
            <button class="bg-pink-CM  text-white font-bold py-4 px-12 rounded-lg shadow-lg mt-5 w-full">Next</button> 

            <p class="mt-5 text-center">Already have an account?   
          <nuxt-link to="" class="text-ideeza">Log in</nuxt-link></p>

      </form>
    </div>

</div>
 
</template>
 