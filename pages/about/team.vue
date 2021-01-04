<template>
  <div class="">
    <div class="curve-bg-gradient clearfix">
    <div class="curve-bg-top-img clearfix pb-24">
      <headercomponent>
      </headercomponent>
      <nuxt />
  
      <div class="container lg m-auto text-white">
          <div class="pb-5 mb-5 px-5">
            <h2 class="md:text-6xl sm:text-4xl mt-5 font-bold text-white">IoT for Everyone’s Idea</h2>
            <div class="lg:w-4/5 sm:w-full"><p class="text-lg py-4 pr-5">Ideeza is an end-to-end platform for the design, development and manufacturing of smart, connected products. Machine learning, design libraries and partner manufacturers enables makers to ideate and build IoT prototypes or finished products at a fraction of the time & cost normally required.</p></div>
            <div class="border-t border-pink-CM lg:flex sm:block mt-5 pt-5 text-center lg:text-left">
              <div class="lg:w-1/3 sm:w-full py-5 px-3 lg:flex sm:block">
                <div class="lg:w-1/4 sm:w-full"><img src="~static/images/brain.png" class="inline-block"></div>
                <div class="lg:w-2/3 sm:w-full text-white">
                  <h3 class="text-3xl text-white">AI-Assisted</h3>
                  <p class="text-lg">Ideeza’s intuitive user experience and machine learning algorithms seamlessly translate ideas into functional 3D models, circuit boards and code</p>
                </div>
              </div>
              <div class="lg:w-1/3 sm:w-full py-5 px-3 lg:flex sm:block">
                <div class="lg:w-1/4 sm:w-full"><img src="~static/images/intelligence.png" class="inline-block"></div>
                <div class="lg:w-2/3 sm:w-full text-white">
                  <h3 class="text-3xl text-white">Maker Community</h3>
                  <p class="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit,  eiusmod tempor incididunt ut labore et dolore magna </p>
                </div>
              </div>

              <div class="lg:w-1/3 sm:w-full py-5 px-3 lg:flex sm:block">
                <div class="lg:w-1/4 sm:w-full"><img src="~static/images/brain.png" class="inline-block"></div>
                <div class="lg:w-2/3 sm:w-full text-white">
                  <h3 class="text-3xl text-white">Manufacturer Network</h3>
                  <p class="text-lg">Our partners worldwide lend their IoT-ready facilities to the Ideeza community at competitive prices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <div class="container lg m-auto shadow-lg mt-20">
    <div class="text-2xl pt-5 mt-12">           
      <nuxt-link to="" class="text-gray-900 px-3">Company</nuxt-link>
      <nuxt-link to="" class="text-pink-600 px-3">Team</nuxt-link>
      <nuxt-link to="" class="text-gray-900 px-3">Career</nuxt-link>
    </div>
    
    <div class="mt-5 md:w-3/5 sm:w-full m-auto text-center">
      <h2 class="text-gray-900 text-3xl font-bold border-b border-gray-300 py-5">Team</h2>

      <p class="text-gray-700 text-lg py-5">Ideeza is the result of years of doctoral research and shipped products in PCB design, automated manufacturing and smart devices. We’re scientists, engineers, creatives, and we’re makers to the bone.</p>

       <div class="lg:inline-block flex border border-gray-600 rounded-full my-16">
        <button class="bg-pink-CM flex-1 hover:bg-pink-400 text-white font-bold py-2 px-10  py-2 md:px-20 rounded-full shadow-lg">Executives</button>
        <button class="bg-white flex-1 hover:bg-wiit text-gray-900 font-bold py-2 px-10 py-2  md:px-20 rounded-full shadow-lg">All Contributors</button>
       </div>
    </div>

    <div class="md:flex sm:block mb-32">
      <div class="md:w-6/12  sm:w-full">
        <div class="w-40 m-auto">
          <img src="~static/images/team-mem-1.png">
        </div>
        <h3 class="ext-gray-800 text-2xl py-5 text-center">David Mermelstein</h3>
        <div class="md:px-32 px-20 mb-10">
            <p class="text-gray-700 text-lg py-5">Spent last 7+ years designing electro-optics systems for civil & military applications. With Moran, co-founded gas sensor IoT company and IoT optics startup. PhD in Electrical Engineering, specialization in electro-optics, Ariel University.</p>
        </div>
      </div>
      <div class="md:w-6/12  sm:w-full">
        <div class="w-40 m-auto">
          <img src="~static/images/team-mem-2.png">
        </div>
        <h3 class="ext-gray-800 text-2xl py-5 text-center">Moran Biton</h3>
        <div class="md:px-32 px-20 mb-10">
            <p class="text-gray-700 text-lg py-5">Nearly 6 years leading scientific development at Ariel University. PhD in Electrical Engineering, three-dimensional cameras and optics. Co-founded two companies with David.</p>
        </div>
      </div>
    </div>

     
  </div>

  <div class="curve-bg-gradient clearfix">
    <div class="curve-bg-footer-bg-img pt-32 clearfix">
    <div class="container lg m-auto text-white"> 
      <div class="mt-5 w-4/5  m-auto">
        <h2 class="text-white md:text-6xl sm:text-5xl font-bold py-5">Create something amazing</h2>
        <p class="text-white text-lg">Join free, launch project and start building your smart prototype.</p>
        <button class="bg-pink-CM hover:bg-pink-400 text-white font-bold py-2 px-4 btn-lg rounded-full shadow-lg mt-5">Launch your Ideeza</button>
      </div>
    </div>  
      <div class="float-right"><img src="~static/images/bot-hand.png"></div>
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
 