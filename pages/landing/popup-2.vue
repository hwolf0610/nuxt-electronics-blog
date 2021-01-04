<template>
   <div class="border-white shadow-lg rounded-lg p-5 w-full md:w-6/12 m-auto border form-border-color my-5">
    <div class="w-full">
      <div class="text-center">
        <div class="inline-block">
          <div class="w-10 h-10 rounded-full bg-gray-400 inline-block mx-3"></div>
          <p class="text-gray-400">Step 1</p>
        </div>
        <div class="inline-block">
          <div class="w-10 h-10 rounded-full bg-indigo-900 inline-block mx-3"></div>
          <p class="text-indigo-900">Step 2</p>
        </div> 
      </div>
       
      <h2 class="text-4xl font-bold text-gray-800 py-5">Manufacturer information  </h2>
        <form class="bg-white rounded pt-6 pb-8 mb-4">
          <div class="w-full">
            <div class="mb-4">
               
              <input class="border form-border-color appearance-none border rounded w-full h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Company name">
            </div>

            <div class="mb-4">
              <input class="border form-border-color appearance-none border rounded w-full h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Email address ">
            </div>

            <div class="mb-4">
              <input class="border form-border-color appearance-none border rounded w-full h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Phone number ">
            </div>

            <div class="mb-4">
              <input class="border form-border-color appearance-none border rounded w-full h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Website">
            </div>

            <div class="flex-1 mb-4">
              <div class="relative">
                <select class="block text-lg appearance-none w-full bg-white border border-gray-400 rounded px-4 py-3 pr-8 leading-tight focus:outline-none ">
                <option>Preferred language </option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div> 
            </div>

            <div class="mb-4">
              <textarea class="border form-border-color appearance-none border rounded w-full h-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Describe your company "></textarea>
            </div>


            <div class="mb-4">
               
              <input class="border form-border-color appearance-none border rounded w-full h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Number of employees  ">
            </div>
          </div>
          <h2 class="text-4xl font-bold text-gray-700">Business information </h2>
            
            <div class="flex-1 mb-4">
              <div class="relative">
                <select class="block text-lg appearance-none w-full bg-white border border-gray-400 rounded px-4 py-3 pr-8 leading-tight focus:outline-none ">
                <option>Line of business  </option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div> 
            </div>

            <div class="flex-1 mb-4">
              <div class="relative">
                <select class="block text-lg appearance-none w-full bg-white border border-gray-400 rounded px-4 py-3 pr-8 leading-tight focus:outline-none ">
                <option>Expertise  </option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div> 
            </div>

            <p class="py-5 text-gray-800">
              I'd like to receive marketing promotions, special offers, inspiration and policy updates from Ideeza. You can opt out any time.
            </p>
            <button class="bg-pink-CM  text-white font-bold py-4 px-12 rounded-lg shadow-lg mt-5 w-full">Register</button> 

             

      </form>
    </div>

</div>
 
</template>
<style>
  select{
      max-width: none;
}
</style>