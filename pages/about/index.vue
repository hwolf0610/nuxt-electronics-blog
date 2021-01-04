<template>
  <div class="">
    <div class="curve-bg-gradient clearfix">
    <div class="curve-bg-top-img clearfix pb-24">
      <top-header />
      <nuxt />
  
      <div class="container lg m-auto text-white">
          <div class="pb-5 mb-5 px-5">
            <h2 class="md:text-6xl sm:text-4xl mt-5 font-bold text-white">IoT for Everyone’s Idea 
              
            </h2>
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
      <nuxt-link to="" class="text-pink-600 px-3">Company</nuxt-link>
      <nuxt-link to="" class="text-gray-900 px-3">Team</nuxt-link>
      <nuxt-link to="" class="text-gray-900 px-3">Career</nuxt-link>
    </div>
    
    <div class="mt-5 md:w-3/5 sm:w-full m-auto text-center">
      <h2 class="text-gray-900 text-3xl font-bold border-b border-gray-300 py-5">We believe in Makers so much, we built our own</h2>

      <p class="text-gray-700 text-lg py-5">Digital? We got that one almost right. Innovation’s next frontier is physical, and the Internet of Things is the bridge that will get us there. </p>
    </div>

    <div class="md:flex sm:block">
      <div class="md:w-2/5 sm:w-full">
        <img src="~static/images/chain-icon.png">
      </div>
      <div class="md:w-3/5 sm:w-full px-3">
        <p class="text-gray-700 text-lg py-5 ">Millions of makers worldwide are bursting with ideas on how to build that bridge, but those ideas too often never see the light of day. That’s because building a simple connected prototype can take months, thousands of dollars and familiarity with an ever-changing tech stack.</p>

        <p class="text-gray-700 text-2xl font-bold py-5">IoT is hard. But it doesn’t have to be</p>
      </div>
    </div>

    <div class="w-full mt-5 py-5 shadow-inner">
      <div class="mt-5 w-3/4  m-auto">
        <p class="text-gray-700 text-lg py-5">What if we removed the heavy lifting from these hurdles and brought them all under one roof? What if we could make an “aggregate maker” with scale, knowledge and resources rivalling the largest companies?</p>
        <h3 class="text-gray-700 text-2xl font-bold py-5 border-b border-gray-300">We did this by:</h3>
        
        <ul class="list-disc mt-5 pl-5 mt-5 text-gray-700 text-lg">
          <li>Making design & development automated and self-correcting with machine learning</li>
          <li>Sourcing best practices from the community</li>
          <li>Promising manufacturers a steady stream of industry-standard designs to build in their unused capacity</li>
        </ul>

        <h3 class="text-black text-2xl font-bold py-5 text-center">The result is Ideeza, a smarter maker, powered by the knowledge and drive of thousands of makers’ ideas, successes, mistakes.</h3>
        <p class="my-5 py-5 text-center"> 
          <button class="bg-pink-CM hover:bg-pink-400 text-white font-bold py-2 px-4 btn-lg rounded-full">Join Now</button>
        </p>
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


import TopHeader from '~/components/reusables/Header';
export default {
   components:{
    TopHeader
   }
}
</script>
 