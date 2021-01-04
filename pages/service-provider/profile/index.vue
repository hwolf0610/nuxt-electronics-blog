<template>
      <div class="">
        <div class="md:flex md:py-10">
          <div class="md:w-3/5 lg:w-2/3">
            <div class="bg-white shadow-md p-5 md:mx-2 mb-10">
              <div class="flex mb-10">
                <img src="~/static/images/Business-Profile.png" class="w-24 mr-5" alt="profile-image">
                <div>
                  <h1 class="font-bold text-xl text-black mb-1">PCBix LLC</h1>
                  <div class="mb-2">Electronics</div>
                  <div>
                    <font-awesome-icon class="text-gray-500" :icon="['fas', 'map-marker-alt']" />
                    New York, USA
                  </div>
                </div>
              </div>
              <hr class="mb-3">
              <h1 class="font-bold text-base text-black mb-3">Agency Description</h1>
              <p class="text-sm mb-10">
                <span v-if="!readMoreActivated">{{longText.slice(0, 1000)}}... </span>
                <a class="text-ideeza" v-if="!readMoreActivated" @click="readMoreActivated=!readMoreActivated" href="#">
                  Read more
                </a>
                <span v-if="readMoreActivated" v-html="longText"></span>
                <a class="text-ideeza" v-if="readMoreActivated" @click="readMoreActivated=!readMoreActivated" href="#">
                  Read less
                </a>
              </p>
              <hr class="mb-3">
              <div class="flex">
                <div class="w-1/4">
                  <h3 class="font-bold text-xl">8</h3>
                  <p class="text-base">Products</p>
                </div>
                <div class="w-1/4">
                  <h3 class="font-bold text-xl">5</h3>
                  <p class="text-base">Members</p>
                </div>
                <div class="w-1/4">
                  <h3 class="font-bold text-xl">8</h3>
                  <p class="text-base">Reviews</p>
                </div>
                <div class="w-1/4">
                  <h3 class="font-bold text-xl">Nov 17, 2018</h3>
                  <p class="text-base">Member Since</p>
                </div>
              </div>
            </div>
            <h3 class="font-bold text-black mb-5 ml-5">Product & Feedback</h3>
            <div class="bg-white shadow-md p-5 mx-2 mb-10">
              <hr class="my-3">
              <div class="md:flex justify-between">
                <div class="flex mb-10 w-64">
                  <img src="~/static/images/Business-Profile.png" class="w-24 mr-5" alt="profile-image">
                  <div>
                    <h1 class="font-bold text-xl text-black mb-1">1-14 layers PCB Fab</h1>
                    <div class="mb-2">Electronics</div>
                  </div>
                </div>
                <div>
                  <div>Feedback</div>
                  <div class="text-black text-xl font-bold mb-5">
                    5.0
                    <font-awesome-icon class="text-ideeza-dark" :icon="['fas', 'star']" />
                    <font-awesome-icon class="text-ideeza-dark" :icon="['fas', 'star']" />
                    <font-awesome-icon class="text-ideeza-dark" :icon="['fas', 'star']" />
                    <font-awesome-icon class="text-ideeza-dark" :icon="['fas', 'star']" />
                    <font-awesome-icon class="text-ideeza-dark" :icon="['fas', 'star']" />
                  </div>
                  <div class="text-right">September 2018</div>
                </div>
              </div>
              <hr class="my-3">
              <div class="md:flex justify-between">
                <div class="flex mb-10 w-64">
                  <img src="~/static/images/Business-Profile.png" class="w-24 mr-5" alt="profile-image">
                  <div>
                    <h1 class="font-bold text-xl text-black mb-1">Aluminium PCB</h1>
                    <div class="mb-2">Electronics</div>
                  </div>
                </div>
                <div>
                  <div>Feedback</div>
                  <div class="text-black text-xl font-bold mb-5">
                    4.0
                    <font-awesome-icon class="text-ideeza-dark" :icon="['fas', 'star']" />
                    <font-awesome-icon class="text-ideeza-dark" :icon="['fas', 'star']" />
                    <font-awesome-icon class="text-ideeza-dark" :icon="['fas', 'star']" />
                    <font-awesome-icon class="text-ideeza-dark" :icon="['fas', 'star']" />
                    <font-awesome-icon class="text-ideeza-gray-500" :icon="['fas', 'star']" />
                  </div>
                  <div class="text-right">September 2018</div>
                </div>
              </div>
              <hr class="my-3">
              <div class="text-center font-bold">Load more +</div>
            </div>
          </div>
          <div class="flex-1">
            <div class="bg-white shadow-md p-5 mx-2 mb-3">
              <div class="font-bold text-black">Admin</div>
              <hr class="my-5">
              <div class="flex justify-between">
                <div class="flex items-start">
                  <img class="h-12 w-12 rounded-full mr-4 " src="https://randomuser.me/api/portraits/men/24.jpg">
                  <div class="">
                    <div class="font-bold text-black">Lucas Joena</div>
                    <div class="text-sm">Admin</div>
                  </div>
                </div>
                <div>
                <div class="border border-gray px-4 py-2">
                  <font-awesome-icon :icon="['fas', 'envelope']" />
                  Message</div>
              </div>
              </div>
            </div>
            <div class="bg-white shadow-md p-5 mx-2 mb-3">
              <div class="font-bold text-black">Agents</div>
              <hr class="my-5">
              <div class="flex justify-between mb-5">
                <div class="flex items-start">
                  <img class="h-12 w-12 rounded-full mr-4 " src="https://randomuser.me/api/portraits/men/23.jpg">
                  <div class="">
                    <div class="font-bold text-black">Jon Cochran</div>
                    <div class="text-sm">Editor</div>
                  </div>
                </div>
                <div>
                <div class="border border-gray px-4 py-2">
                  <font-awesome-icon :icon="['fas', 'envelope']" />
                  Message</div>
              </div>
              </div>
              <div class="flex justify-between mb-5">
                <div class="flex items-start">
                  <img class="h-12 w-12 rounded-full mr-4 " src="https://randomuser.me/api/portraits/men/22.jpg">
                  <div class="">
                    <div class="font-bold text-black">Alex Pilania</div>
                    <div class="text-sm">Editor</div>
                  </div>
                </div>
                <div>
                <div class="border border-gray px-4 py-2">
                  <font-awesome-icon :icon="['fas', 'envelope']" />
                  Message</div>
              </div>
              </div>
              <div class="flex justify-between mb-5">
                <div class="flex items-start">
                  <img class="h-12 w-12 rounded-full mr-4 " src="https://randomuser.me/api/portraits/men/21.jpg">
                  <div class="">
                    <div class="font-bold text-black">Hana Lalardo</div>
                    <div class="text-sm">Editor</div>
                  </div>
                </div>
                <div>
                <div class="border border-gray px-4 py-2">
                  <font-awesome-icon :icon="['fas', 'envelope']" />
                  Message</div>
              </div>
              </div>
              <div class="flex justify-between mb-5">
                <div class="flex items-start">
                  <img class="h-12 w-12 rounded-full mr-4 " src="https://randomuser.me/api/portraits/men/20.jpg">
                  <div class="">
                    <div class="font-bold text-black">Omar Latori</div>
                    <div class="text-sm">Editor</div>
                  </div>
                </div>
                <div>
                  <div>
                    <div class="border border-gray px-4 py-2">
                      <font-awesome-icon :icon="['fas', 'envelope']" />
                      Message
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-white shadow-md p-5 mx-2 mb-3">
                <div class="font-bold text-black">Expertise</div>
                <hr class="my-5">
                <div class="text-black text-xl">Fabrication</div>
                <div class="text-black text-xl">Assembly</div>
                <div class="text-black text-xl">Dealer</div>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
  export default {
    layout: 'service-provider',
    data() {
      return {
        readMoreActivated: false,
        longText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, quos. Soluta nobis, inventore mollitia reiciendis a facere deserunt voluptates, debitis reprehenderit deleniti porro quidem nam commodi magnam eveniet minus. Consequatur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi praesentium inventore at facilis? Modi placeat ad porro a nostrum, repudiandae totam eos temporibus dolores illum asperiores dolore magnam obcaecati officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptates, ipsam consectetur alias nam dolorum totam dolores corrupti pariatur itaque cupiditate! Eius, velit consectetur laboriosam ad adipisci itaque est neque! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, quos. Soluta nobis, inventore mollitia reiciendis a facere deserunt voluptates, debitis reprehenderit deleniti porro quidem nam commodi magnam eveniet minus. Consequatur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi praesentium inventore at facilis? Modi placeat ad porro a nostrum, repudiandae totam eos temporibus dolores illum asperiores dolore magnam obcaecati officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptates, ipsam consectetur alias nam dolorum totam dolores corrupti pariatur itaque cupiditate! Eius, velit consectetur laboriosam ad adipisci itaque est neque! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, quos. Soluta nobis, inventore mollitia reiciendis a facere deserunt voluptates, debitis reprehenderit deleniti porro quidem nam commodi magnam eveniet minus. Consequatur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi praesentium inventore at facilis? Modi placeat ad porro a nostrum, repudiandae totam eos temporibus dolores illum asperiores dolore magnam obcaecati officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptates, ipsam consectetur alias nam dolorum totam dolores corrupti pariatur itaque cupiditate! Eius, velit consectetur laboriosam ad adipisci itaque est neque! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, quos. Soluta nobis, inventore mollitia reiciendis a facere deserunt voluptates, debitis reprehenderit deleniti porro quidem nam commodi magnam eveniet minus. Consequatur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi praesentium inventore at facilis? Modi placeat ad porro a nostrum, repudiandae totam eos temporibus dolores illum asperiores dolore magnam obcaecati officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptates, ipsam consectetur alias nam dolorum totam dolores corrupti pariatur itaque cupiditate! Eius, velit consectetur laboriosam ad adipisci itaque est neque! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, quos. Soluta nobis, inventore mollitia reiciendis a facere deserunt voluptates, debitis reprehenderit deleniti porro quidem nam commodi magnam eveniet minus. Consequatur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi praesentium inventore at facilis? Modi placeat ad porro a nostrum, repudiandae totam eos temporibus dolores illum asperiores dolore magnam obcaecati officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptates, ipsam consectetur alias nam dolorum totam dolores corrupti pariatur itaque cupiditate! Eius, velit consectetur laboriosam ad adipisci itaque est neque! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, quos. Soluta nobis, inventore mollitia reiciendis a facere deserunt voluptates, debitis reprehenderit deleniti porro quidem nam commodi magnam eveniet minus. Consequatur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi praesentium inventore at facilis? Modi placeat ad porro a nostrum, repudiandae totam eos temporibus dolores illum asperiores dolore magnam obcaecati officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptates, ipsam consectetur alias nam dolorum totam dolores corrupti pariatur itaque cupiditate! Eius, velit consectetur laboriosam ad adipisci itaque est neque!'
      }
    },
  }

</script>
