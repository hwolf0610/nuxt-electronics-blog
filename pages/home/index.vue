<template>
  <div class>
    <div class="curve-bg-gradient clearfix">
      <div class="curve-bg-top-img clearfix">
        <top-header />
        <nuxt />
        <div class="homeBanner-bg w-full pb-32">
          <div class="container lg m-auto text-white px-5">
            <div class="pb-5 mb-5 px-5 md:w-8/12 w-full">
              <h2 class="md:text-6xl sm:text-4xl mt-5 font-bold text-white">
                Ideas in your drawer?
                <br />Ideezas in your hand.
              </h2>
              <div class="lg:w-4/5 sm:w-full">
                <p
                  class="text-lg py-4 pr-5"
                >Imagine being able to create your own technology product for free and within minutes - exactly the way you want, even without specific knowledge.</p>
              </div>
            </div>
            <div class="bg-white rounded-sm overflow-hidden md:w-6/12 w-full m-auto flex shadow">
              <input
                type="text"
                class="text-gray-700 py-3 px-3 flex-1"
                placeholder="Search ideas, products, makers..."
              />
              <button class="px-5 text-center">
                <img src="~static/images/search-purple.png" class="inline-block w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container lg m-auto mt-20">
      <div class="mt-5 w-full m-auto text-center">
        <h2 class="text-gray-900 text-5xl font-extrabold pt-5">AI Maker for Connected Devices</h2>

        <p
          class="text-gray-700 text-lg py-5"
        >Building IoT prototypes used to need months, engineers, hair-ripping budgets and dev tools creep. Good times.</p>

        <div class="text-center py-6">
          <img src="~static/images/paly.png" class="inline-block" />
          <p class="text-ideeza text-lg">Play Movie</p>
        </div>
      </div>
    </div>
    <div class="w-full home-section-bg1">
      <div class="container lg m-auto mt-20">
        <div class="md:flex sm:block">
          <div class="md:w-6/12 sm:w-full px-3">
            <h2 class="text-gray-900 text-5xl font-bold">Talk to Ideeza</h2>
            <p
              class="text-gray-700 text-lg py-5"
            >Use our Natural Language interface to describe what you would like to build. Let IDEEZAs engine to choose the most appropriate technologies building blocks of your project while using BOT for unclear points.</p>

            <p class="text-gray-700 text-2xl font-bold py-5 bg-i">
              <nuxt-link
                to
                class="text-white py-3 btn-md bg-ideeza inline-block text-center text-lg rounded-full"
              >Try Free</nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full home-section-bg2 relative">
      <img src="~static/images/LandingPageBotIcon.png" class="absolute LandingPageBotIcon" />
      <div class="container lg m-auto mt-20">
        <div class="md:flex sm:block justify-end">
          <div class="md:w-6/12 sm:w-full px-3">
            <h2 class="text-gray-900 text-5xl font-bold">Let our AI engine fulfill your invent</h2>
            <p
              class="text-gray-700 text-lg py-5"
            >Our unique algorithms (that operates at the crossroads of Generative Design, Artificial Intelligence and Digital manufacturing) computes scenarios with all the building blocks from the first step, assembles and proposes your project, include all layers: Electronics, Code and 3D Cover.</p>
            <p
              class="text-gray-700 text-lg py-5"
            >You can simply add or edit any aspect of your project, more features, change specs, components, materials, sizes, App, cloud and more and a new scenario is automatically re-computed back for you. Finally you can share your invent in your social media.</p>

            <p class="text-gray-700 text-2xl font-bold py-5 bg-i">
              <nuxt-link
                to
                class="text-white py-3 btn-lg bg-ideeza inline-block text-center text-lg rounded-full"
              >Download sample folder</nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full home-section-bg1">
      <div class="container lg m-auto mt-20">
        <div class="md:flex sm:block">
          <div class="md:w-6/12 sm:w-full px-3">
            <h2 class="text-gray-900 text-5xl font-bold">GO COMMERCIAL</h2>
            <p
              class="text-gray-700 text-lg py-5"
            >Share your blueprint with a manufacturer (production line illustration, PCB assembly, CNC & case molding), patent attorney, cloud company and more through marketplace.Our algorithm will recommend those from our network that have the required capability to bring your product to life. Now you can get quotations and manage the order process through the platform.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full home-section-bg2 relative">
      <div class="container lg m-auto mt-20">
        <div class="md:flex sm:block justify-end">
          <div class="md:w-6/12 sm:w-full px-3">
            <h2 class="text-gray-900 text-5xl font-bold">Receive it on your doorsteps</h2>
            <p
              class="text-gray-700 text-lg py-5"
            >Your project is delivered on your doorstep. Be it a first prototype or a final production run. Finally you can enjoy your creation at a fraction of the costs it was previously paid. Show your friends, test all the features.Think of all the possibilities.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container lg m-auto mt-20">
      <div class="flex flex-wrap">
        <div class="md:w-4/12 w-full p-6 text-center">
          <h2 class="text-2xl text-gray-900 py-4 font-bold">Tech student?</h2>
          <div class="py-2">
            <img src="~static/images/tech-coin.png" class="inline-block" />
          </div>

          <p
            class="text-lg text-gray-700 py-2"
          >Feeling stuck in endless lectures? Join the international student innovation competition and show your skills to the world</p>
          <div class="py-5">
            <nuxt-link
              to
              class="text-gray-600 border border-gray-600 py-3 px-16 inline-block text-center text-lg rounded-full"
            >See pricing</nuxt-link>
          </div>
        </div>
        <div class="md:w-4/12 w-full p-6 text-center">
          <h2 class="text-2xl text-gray-900 py-4 font-bold">Inventor\ Entrepreneur?</h2>
          <div class="py-2">
            <img src="~static/images/tech-inp.png" class="inline-block" />
          </div>

          <p class="text-lg text-gray-700 py-2">
            You got another quote for the development of your ingenious and revolutionary idea..
            Investors even told you that when they will see a working prototype, they would invest money.
            But once again it wasn't realistic.. the quote is too expensive and will take to much time before you see something..
          </p>
          <div class="py-5">
            <nuxt-link
              to
              class="text-gray-600 border border-gray-600 py-3 px-16 inline-block text-center text-lg rounded-full"
            >The whole story</nuxt-link>
          </div>
        </div>
        <div class="md:w-4/12 w-full p-6 text-center">
          <h2 class="text-2xl text-gray-900 py-4 font-bold">DIY Maker?</h2>
          <div class="py-2">
            <img src="~static/images/tech-time.png" class="inline-block" />
          </div>

          <p class="text-lg text-gray-700 py-2">
            Your mind is exploding with ideas you are already waiting to share with your followers.
            But these modules you need run out of inventory, and learning the new type will take you months.
          </p>
          <div class="py-5">
            <nuxt-link
              to
              class="text-gray-600 border border-gray-600 py-3 px-16 inline-block text-center text-lg rounded-full"
            >See tech specs</nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div class="curve-bg-gradient clearfix">
      <div class="curve-bg-footer-bg-img pt-32 clearfix">
        <div class="container lg m-auto text-white">
          <div class="mt-5 w-4/5 m-auto">
            <h2 class="text-white md:text-6xl sm:text-5xl font-bold py-5">Create something amazing</h2>
            <p
              class="text-white text-lg"
            >Join free, launch project and start building your smart prototype.</p>
            <button
              class="bg-pink-CM hover:bg-pink-400 text-white font-bold py-2 px-4 btn-lg rounded-full shadow-lg mt-5"
            >
              <img src="~static/images/launch-btn-icon.png" class="inline-block w-8 mr-3" />Launch your Ideeza
            </button>
          </div>
        </div>
        <div class="float-right">
          <img src="~static/images/bot-hand.png" />
        </div>
      </div>
    </div>

    <div class="container lg m-auto mt-20">
      <div class="mt-5 w-8/12 m-auto text-left">
        <h2 class="text-gray-900 text-5xl font-extrabold pt-5">These Entrepreneurs Made It</h2>

        <p class="text-purple-900 text-lg py-5">Success Stories from Ideeza’s growing comunity</p>
      </div>

      <div class="md:flex sm:block mt-20">
        <div class="md:w-6/12 sm:w-full px-3">
          <img src="~static/images/silder-placeholder.png" class="inline-block" />
        </div>
        <div class="md:w-6/12 sm:w-full px-3">
          <h2 class="text-purple-900 text-5xl font-bold">John Doe’s Dream</h2>
          <p
            class="text-gray-700 text-lg py-5"
          >If you're on the fence on whether you need a big company behind you to succeed, these individuals prove that having vision and the drive is more than enough.</p>

          <p class="text-gray-700 text-2xl font-bold py-5 bg-i">
            <nuxt-link
              to
              class="text-white py-3 btn-md bg-ideeza inline-block text-center text-lg rounded-full"
            >View Story</nuxt-link>
          </p>
        </div>
      </div>
    </div>
    <div class="curve-bg-gradient clearfix">
      <div class="curve-bg-footer-bg-img2 pt-32 clearfix">
        <div class="container lg m-auto text-white">
          <div class="mt-5 w-4/5 m-auto text-center">
            <h2
              class="text-white md:text-3xl sm:text-3xl font-bold py-5"
            >Join a growing maker community</h2>

            <button
              class="bg-pink-CM hover:bg-pink-400 text-white font-bold py-2 px-4 btn-lg rounded-full shadow-lg mt-5"
            >Join Now</button>
          </div>

          <div class="w-full md:flex flex-wrap border-t-2 pb-10 mt-10 border-pink-600">
            <div class="flex-1 text-center md:text-left pt-5 w-full">
              <img src="~static/images/logo.png" class="inline-block" />
            </div>
            <div
              class="flex-1 text-center md:text-center w-full text-white pt-10"
            >© 2016 Ideeza All rights reserved</div>
            <div class="flex-1 text-center md:text-right w-full text-white pt-10">
              <nuxt-link to class="text-white px-3">Privacy Policy</nuxt-link>|
              <nuxt-link to class="text-white px-3">Term & Condition</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TopHeader from "~/components/reusables/Header";
export default {
  components: {
    TopHeader
  },
  data() {
    return {
      
    }
  },
  mounted() {

  },
  methods: {

  }
};
</script>
