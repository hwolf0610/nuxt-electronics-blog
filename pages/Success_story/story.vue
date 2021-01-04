<template>
  <div class="">
    <div class="curve-bg-gradient clearfix ">
    
      <headercomponent>
      </headercomponent>
      <nuxt />
      <div class="relative">
       <img src="~static/images/story-banner.png">
       <nuxt-link to="" class="absolute m-auto  text-white px-10 mt-5 py-5 rounded-lg btn-gradient-bg inline-block nuxt-link-exact-active nuxt-link-active left-0 right-0 w-64 text-center top-0 mt-40">Try it yourself</nuxt-link>
      </div>
    </div>
  <div class="container lg m-auto shadow-lg">
     
    
    <div class="mt-5 md:w-3/5 sm:w-full m-auto text-center story_content-box bg-white relative p-5 rounded-sm">
      <h2 class="text-gray-900 text-5xl font-bold  py-5">This company makers
made it!</h2>

      <p class="text-gray-700 text-lg py-5 text-left"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget interdum urna, ac ornare risus. Vivamus finibus nisl at mauris condimentum, vitae semper tellus aliquam. In ante sapien, congue ut feugiat vel, placerat ut erat. Quisque at nulla nisl. Vivamus a egestas magna. 
      Cras condimentum est arcu, eget gravida diam congue sed. Phasellus ut fringilla magna, nec 
      sodales turpis. Aliquam in velit nunc.</p>

      <iframe width="100%" height="550" class="my-10" src="https://www.youtube.com/embed/kWH-g1F4eCw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <p class="text-gray-700 text-lg py-5 text-left">interdum nibh egestas neque faucibus, at mattis velit egestas. Mauris condimentum porta 
neque. Aliquam vulputate nisl sed pellentesque laoreet. Integer a posuere ante, ac laoreet leo. 
Donec ut eros at ipsum luctus pulvinar. Integer lorem enim, congue vitae vulputate interdum, 
iaculis sit amet est. Aenean lacinia diam nec quam gravida auctor. Aenean sed vulputate felis. </p>  
    </div>

    <div class="py-10">
      <h3 class="text-gray-900 text-5xl font-bold  py-5 text-center">Similar stories</h3>
    </div>
    
    <div class="flex flex-wrap mt-16">
      <div class="md:w-1/3 sm:w-full px-12 mb-10">
        <div class="text-center">
          <img src="~static/images/story-thum1.png">
        </div>
        <h2 class="font-bold text-4xl text-gray-900 py-5">Google was working with us</h2>
        <p class="text-lg text-gray-900 py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget interdum urna, ac ornare </p>
        <div class="flex">
          <div class="flex-1 text-gray-600 text-md">21 October, 2019</div>
          <div class="flex-1">
            <nuxt-link to="" class="text-white px-5 py-3 rounded-lg bg-pink-CM inline-block">Read More</nuxt-link>
          </div>
        </div>
      </div>


      <div class="md:w-1/3 sm:w-full px-12 mb-10">
        <div class="text-center">
          <img src="~static/images/story-thum2.png">
        </div>
        <h2 class="font-bold text-4xl text-gray-900 py-5">Google was working with us</h2>
        <p class="text-lg text-gray-900 py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget interdum urna, ac ornare </p>
        <div class="flex">
          <div class="flex-1 text-gray-600 text-md">21 October, 2019</div>
          <div class="flex-1">
            <nuxt-link to="" class="text-white px-5 py-3 rounded-lg bg-pink-CM inline-block">Read More</nuxt-link>
          </div>
        </div>
      </div>
         
       <div class="md:w-1/3 sm:w-full px-12 mb-10">
        <div class="text-center">
          <img src="~static/images/story-thum3.png">
        </div>
        <h2 class="font-bold text-4xl text-gray-900 py-5">Google was working with us</h2>
        <p class="text-lg text-gray-900 py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget interdum urna, ac ornare </p>
        <div class="flex">
          <div class="flex-1 text-gray-600 text-md">21 October, 2019</div>
          <div class="flex-1">
            <nuxt-link to="" class="text-white px-5 py-3 rounded-lg bg-pink-CM inline-block">Read More</nuxt-link>
          </div>
        </div>
      </div>
    </div>

     <div class="py-16 text-center">
      <h2 class="text-5xl font-bold">Want to work with us?</h2>
      <nuxt-link to="" class="text-white px-10 mt-10 py-4 rounded-lg btn-gradient-bg inline-block text-xl">Yes, Continue</nuxt-link>
    </div>
  </div>

<div class="curve-bg-gradient clearfix">
    <div class="curve-bg-footer-bg-img2 pt-32 clearfix">
      <div class="container lg m-auto text-white"> 
        <div class="mt-5 w-4/5  m-auto text-center">
          <h2 class="text-white md:text-3xl sm:text-3xl font-bold py-5 ">Join a growing maker community</h2>
           
          <button class="bg-pink-CM hover:bg-pink-400 text-white font-bold py-2 px-4 btn-lg rounded-full shadow-lg mt-5">Join Now</button>
        </div>
        

      <div class="w-full md:flex flex-wrap border-t-2 pb-10 mt-10 border-pink-600">
        <div class="flex-1 text-center md:text-left pt-5 w-full">
          <img src="~static/images/logo.png" class="inline-block">
        </div>
        <div class="flex-1 text-center md:text-center w-full text-white pt-10">© 2016 Ideeza All rights reserved</div>
        <div class="flex-1 text-center md:text-right w-full text-white pt-10">
          <nuxt-link to="" class="text-white px-3">Privacy Policy</nuxt-link> |
          <nuxt-link to="" class="text-white px-3">Term & Condition</nuxt-link>

        </div>
      </div>
    </div>
  </div>
</div>

  </div> 
 </template>
<script>


import headercomponent from '~/layouts/headercomponent/';
export default {
   components:{
    headercomponent
   }
}
</script>
 