<template>
    <div class="md:m-8 lg:m-8 m-2 xl:max-w-4xl">
        <h1 class="text-gray-800 text-xl font-semibold">
            Upgrade Your Pricing Plan
        </h1>
        <hr class="mt-2 mb-5">
        <div class="md:flex">
            <div class="p-5 bg-white shadow-md md:mr-4 mb-3 md:mb-0 md:w-1/3 rounded">
                <div class="text-center py-5 px-8">
                    <img src="~/static/images/rockit-blue.png" class="mx-auto h-16 mb-5" alt="" srcset="">
                    <h3 class="font-bold text-2xl">ESSENTIAL</h3>
                    <div class="text-center font-extrabold text-3xl price-text">$ <span class="">29</span>/mo</div>
                    <div class="text-base text-gray-800 text-center mt-3 mb-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </div>
                    <div class="text-center">
                        <button class="w-full py-2 px-4 bg-gray-300 text-black rounded-full" @click="selectplan('ESSENTIAL')">Currently Activated</button>
                    </div>
                </div>
                <ul>
                    <li class="border-t border-gray-400 py-2 flex items-center">
                        <div class="w-8 h-8 rounded-full gradient-bg mr-4 flex justify-center items-center">
                            <font-awesome-icon class="text-white font-light" :icon="['fas', 'check']" />
                        </div>
                        <div class="text-base text-ideeza-black">3 Different Products</div>
                    </li>
                    <li class="border-t border-gray-400 py-2 flex items-center">
                        <div class="w-8 h-8 rounded-full gradient-bg mr-4 flex justify-center items-center">
                            <font-awesome-icon class="text-white font-light" :icon="['fas', 'check']" />
                        </div>
                        <div class="text-base text-ideeza-black">1 Agent</div>
                    </li>
                    <li class="border-t border-gray-400 py-2 flex items-center">
                        <div class="w-8 h-8 rounded-full gradient-bg mr-4 flex justify-center items-center">
                            <font-awesome-icon class="text-white font-light" :icon="['fas', 'check']" />
                        </div>
                        <div class="text-base text-ideeza-black">100MB File Upload</div>
                    </li>
                    <li class="border-t border-gray-400 py-2 flex items-center">
                        <div class="w-8 h-8 rounded-full gradient-bg mr-4 flex justify-center items-center">
                            <font-awesome-icon class="text-white font-light" :icon="['fas', 'check']" />
                        </div>
                        <div class="text-base text-ideeza-black">1 Month Free Trial</div>
                    </li>
                </ul>
            </div>
            <div class="p-5 bg-white shadow-md md:mr-4 mb-3 md:mb-0 md:w-1/3 rounded">
                <div class="text-center py-5 px-8">
                    <img src="~/static/images/win.png" class="mx-auto h-16 mb-5" alt="" srcset="">
                    <h3 class="font-bold text-2xl">PREMIUM</h3>
                    <div class="text-center font-extrabold text-3xl price-text gradient">$ <span class="">59</span>/mo</div>
                    <div class="text-base text-gray-800 text-center mt-3 mb-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div class="text-center">
                        <button class="w-full py-2 px-4 bg-ideeza text-white rounded-full" @click="selectplan('PREMIUM')">Subscribe</button>
                    </div>
                </div>
                <ul>
                    <li class="border-t border-gray-400 py-2 flex items-center">
                        <div class="w-8 h-8 rounded-full gradient-bg mr-4 flex justify-center items-center">
                            <font-awesome-icon class="text-white font-light" :icon="['fas', 'check']" />
                        </div>
                        <div class="text-base text-ideeza-black">15 Different Products</div>
                    </li>
                    <li class="border-t border-gray-400 py-2 flex items-center">
                        <div class="w-8 h-8 rounded-full gradient-bg mr-4 flex justify-center items-center">
                            <font-awesome-icon class="text-white font-light" :icon="['fas', 'check']" />
                        </div>
                        <div class="text-base text-ideeza-black">5 Agents</div>
                    </li>
                    <li class="border-t border-gray-400 py-2 flex items-center">
                        <div class="w-8 h-8 rounded-full gradient-bg mr-4 flex justify-center items-center">
                            <font-awesome-icon class="text-white font-light" :icon="['fas', 'check']" />
                        </div>
                        <div class="text-base text-ideeza-black">Unlimited File Upload</div>
                    </li>
                    <li class="border-t border-gray-400 py-2 flex items-center">
                        <div class="w-8 h-8 rounded-full gradient-bg mr-4 flex justify-center items-center">
                            <font-awesome-icon class="text-white font-light" :icon="['fas', 'check']" />
                        </div>
                        <div class="text-base text-ideeza-black">1 Month Free Trial</div>
                    </li>
                </ul>
            </div>
            <div class="p-5 bg-white shadow-md md:mr-4 mb-3 md:mb-0 md:w-1/3 rounded">
                <div class="text-center py-5 px-8">
                    <img src="~/static/images/enperprise.png" class="mx-auto h-18 mb-3" alt="" srcset="">
                    <h3 class="font-bold text-2xl">ENTERPRISE</h3>
                    <div class="text-center font-extrabold text-3xl price-text">$ <span class="">199</span>/mo</div>
                    <div class="text-base text-gray-800 text-center mt-3 mb-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div class="text-center">
                        <button class="w-full py-2 px-4 bg-ideeza-dark text-white rounded-full" @click="selectplan('ENTERPRISE')">Subscribe</button>
                    </div>
                </div>
                <ul>
                    <li class="border-t border-gray-400 py-2 flex items-center">
                        <div class="w-8 h-8 rounded-full gradient-bg mr-4 flex justify-center items-center">
                            <font-awesome-icon class="text-white font-light" :icon="['fas', 'check']" />
                        </div>
                        <div class="text-base text-ideeza-black">Unlimited Projects</div>
                    </li>
                    <li class="border-t border-gray-400 py-2 flex items-center">
                        <div class="w-8 h-8 rounded-full gradient-bg mr-4 flex justify-center items-center">
                            <font-awesome-icon class="text-white font-light" :icon="['fas', 'check']" />
                        </div>
                        <div class="text-base text-ideeza-black">20 Agents</div>
                    </li>
                    <li class="border-t border-gray-400 py-2 flex items-center">
                        <div class="w-8 h-8 rounded-full gradient-bg mr-4 flex justify-center items-center">
                            <font-awesome-icon class="text-white font-light" :icon="['fas', 'check']" />
                        </div>
                        <div class="text-base text-ideeza-black">Enterprise Direct Support</div>
                    </li>
                    <li class="border-t border-gray-400 py-2 flex items-center">
                        <div class="w-8 h-8 rounded-full gradient-bg mr-4 flex justify-center items-center">
                            <font-awesome-icon class="text-white font-light" :icon="['fas', 'check']" />
                        </div>
                        <div class="text-base text-ideeza-black">View Competitor Prices</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: 'service-provider-setting',
    methods:{
        selectplan(str){
            alert("you select "+ str + " pricing plan")
        }
    },
}
</script>
<style scoped>
.price-text.gradient {
  background: -webkit-linear-gradient(45deg,#fe00c7, #461185);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.price-text {
    color: #5C17AE;
}
.price-text span{
    @apply text-5xl;
}
</style>