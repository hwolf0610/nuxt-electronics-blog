<template>
<div class="md:m-8 lg:m-8 m-2">
  <div>
    <div class="max-w-2xl">
      <div>
        <h1 class="text-gray-800 text-xl font-semibold">Agents & Permissions</h1>
        <hr class="mt-2 mb-5">
        <div class="bg-white">
          <div class="p-5">
            <h1 class="font-semibold">Assign a New Agent</h1>
            <div class="flex mt-5 flex-wrap">
              <input class="border border-gray-400 md:flex-1 px-2" type="text" placeholder="Type Email">
              <select class="border border-gray-400">
                <option>Editor</option>
              </select>
              <button class="mt-4 md:my-0 md:mx-4 bg-ideeza text-white rounded-full px-5 py-1">Add</button>
            </div>
            <div>
              <p class="text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium eaque architecto porro? Quibusdam eveniet quae harum quod aperiam, laudantium provident. Praesentium, libero animi atque dolorum soluta laboriosam distinctio dolore. Eius!</p>
            </div>
            <hr class="my-5">
            <h1 class="font-semibold text-ideeza-gray-500">Existing Agents</h1>
            <h1 class="my-2 font-semibold text-sm">Admin</h1>
            <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique asperiores, aliquid placeat, velit consequatur rerum, odit voluptatum tempore perferendis alias commodi odio quisquam ipsam consequuntur eaque quidem ex corrupti quaerat?</p>
            <hr class="my-5">
            <div class="flex justify-between items-center">

             <div class="flex">
                <div>
                <img src="~static/images/sponsor.png" class="rounded-full h-12 w-12">
              </div>
              <div class="mx-2">
                <h1 class="font-semibold">John Cochran</h1>
                <h1 class="text-sm text-ideeza-gray-500">Admin</h1>
              </div>
             </div>
              <div>
                <font-awesome-icon class="ml-2 text-sm" :icon="['fas', 'times']" />
              </div>

            </div>
            <hr class="my-5">
            <div class="flex justify-between items-center">

              <div class="flex">
                <div>
                <img src="~static/images/sponsor.png" class="rounded-full h-12 w-12">
              </div>
              <div class="mx-2">
                <h1 class="font-semibold">John Cochran</h1>
                <h1 class="text-sm text-ideeza-gray-500">Admin</h1>
              </div>
              </div>
              <div>
                <font-awesome-icon class="ml-2 text-sm" :icon="['fas', 'times']" />
              </div>

            </div>
            <hr class="my-5">
            <h1 class="font-semibold">Editor</h1>
            <p class="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus nostrum aperiam sint harum, odio deserunt id officiis aliquam libero, sed illo esse soluta quas. Dicta dolorem sint magni corporis.</p>
            <hr class="my-5">
            <div class="flex justify-between items-center mb-5">
              <div class="flex">

              <div>
                <img src="~static/images/sponsor.png" class="rounded-full h-12 w-12">
              </div>
              <div class="mx-2">
                <h1 class="font-semibold">John Cochran</h1>
                <h1 class="text-sm text-ideeza-gray-500">Admin</h1>
              </div>
              </div>
              <div>
                <font-awesome-icon class="ml-2 text-sm" :icon="['fas', 'times']" />
              </div>

            </div>
            </div>
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
