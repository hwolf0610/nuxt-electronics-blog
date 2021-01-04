<template>
   <div class="border-white shadow-lg rounded-lg p-5 w-full md:w-9/12 m-auto border form-border-color my-5">
    <div class="w-full">
      <div class="text-right">
        <button class="text-3xl text-ideeza">X</button>
      </div>
        <form class="bg-white rounded px-8 pt-6 pb-8 mb-4">
          <div class="md:w-2/4 w-full">
            <div class="mb-4">
              <label class="block form-text-color text-sm font-bold mb-2" for="username">
                Your Name
              </label>
              <input class="border form-border-color appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="name">
            </div>

            <div class="mb-4">
              <label class="block form-text-color text-sm font-bold mb-2" for="username">
                Your Email
              </label>
              <input class="border form-border-color appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="email">
            </div>

            <div class="mb-4">
              <label class="block form-text-color text-sm font-bold mb-2" for="username">
                Your phone number
              </label>
              <input class="border form-border-color appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="phone">
            </div>
          </div>
          <div class="mb-4 w-full">
              <label class="block form-text-color text-sm font-bold mb-2" for="username">
                Message
              </label>
              <textarea class="border form-border-color appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="8" placeholder="Description"></textarea>
            </div>
            <button class="bg-pink-CM hover:bg-pink-400 text-white font-bold py-4 px-12 rounded-lg shadow-lg mt-5">Send</button> 
      </form>
    </div>

</div>


</div>
</template>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.js"></script>
<script>


import headercomponent from '~/layouts/headercomponent/';

export default {
   components:{
    headercomponent
   }
}
</script>