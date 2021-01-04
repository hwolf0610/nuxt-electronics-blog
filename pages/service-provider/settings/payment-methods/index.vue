<template>
<div class="md:m-8 lg:m-8 m-2">
  <div>
    <div class="max-w-3xl font-semibold">
      <h1 class="text-gray-800 text-xl font-semibold">Payment Methods</h1>
      <hr class="mt-2 mb-5">
    </div>
    <div class="lg:flex md:flex bg-white p-5 shadow-lg max-w-3xl">
      <div class="md:mr-4 border border-black flex-1 mb-4 md:mb-0">
      <div class="p-3 flex flex-col">
          <div>
            <p class="font-semibold text-ideeza-black text-sm">VISA xxxxxxxxxxxx682909/19</p>
          </div>
          <div class="flex mt-10 relative">
            <div>
              <button class="block">Default</button>
              <button class="text-ideeza">Remove</button>
            </div>
            <div class="absolute right-0 bottom-0">
              <img class="mt-4" src="~static/images/visa_logo.png" height="70px" width="70px">
            </div>
          </div>
        </div>
      </div>
      <div class="md:mr-4 border border-black flex-1 mb-4 md:mb-0">
      <div class="p-3 flex flex-col">
          <div>
            <p class="font-semibold text-ideeza-black text-sm">VISA xxxxxxxxxxxx682909/19</p>
          </div>
          <div class="flex mt-10 relative">
            <div>
              <button class="block">Set Default</button>
              <button class="text-ideeza">Remove</button>
            </div>
            <div class="absolute right-0 bottom-0">
              <img class="mt-4" src="~static/images/visa_logo.png" width="70px" height="70px">
            </div>
          </div>
        </div>
      </div>
      <div class="border border-black flex-1">

        <div class="p-5">
          <div class="text-center"><font-awesome-icon class="mr-1 text-5xl cursor-pointer" :icon="['fas', 'plus']" /></div>
          <div class="flex justify-center">
          <div class="mt-5"><h1>Add Payment Method</h1></div>
          </div>
        </div>


      </div>
    </div>
    <br><br>
    <div class="font-semibold max-w-3xl">
      <h1 class="text-gray-800 text-xl font-semibold">Ideeza Coupons</h1>
      <hr class="mt-2 mb-5">
    </div>
    <div class="lg:flex md:flex bg-white shadow-lg max-w-3xl">
      <div class="p-5">
        <div>
          <h1 class="text-ideeza-gray-400">Ideeza Coupon Balance:<span class="font-semibold ml-2">$0</span></h1>
          <p class="text-xs mt-1 mb-5">The credit balance from coupons will be automatically applied when you buy a product </p>
        <hr class="mb-5">
        </div>
          <label class="text-ideeza-gray-400">Enter ideeza coupon code</label>
          <div class="md:flex mt-2">

            <div>
              <input class="bg-gray-200 rounded-full py-1 px-5 lg:mr-8 md:mr-10" type="text">
            </div>
            <div class="block md:hidden flex justify-center">
              <div>
                <button class="mt-5 text-white bg-ideeza rounded-full py-1 px-5">Apply to Account</button>
              </div>
            </div>
            <div class="hidden md:block flex justify-center">
              <div>
                <button class="text-white bg-ideeza rounded-full py-1 px-5">Apply to Account</button>
              </div>
            </div>
          </div>
        <div>

        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  layout:'service-provider-setting'
}
</script>

