<template>
  <div>
    <h5 class="font-semibold text-lg text-center mt-10">Layers</h5>
    <ul class="mx-6 mt-5 text-lg">
      <li class="mb-3">
        <div class="flex justify-between">
          <div>
            <font-awesome-icon class="text-lg mr-2" :icon="['far', 'square']" />
            Button
          </div>
          <div>+</div>
        </div>
        <ul class="ml-8">
          <li class="my-2">
            <div class="flex justify-between">
              <div>Properties</div>
              <div>+</div>
            </div>
            <ul>
              <li class="my-2 flex items-center">
                <div class="green-btn rounded w-4 h-4 mr-8"></div>
                <div>Color</div>
              </li>
              <li class="my-2 flex items-center">
                <div class="mr-8 w-4">10</div>
                <div>Border radius</div>
              </li>
              <li class="my-2 flex items-center">
                <div class="mr-8 w-4">120</div>
                <div>Width(px)</div>
              </li>
              <li class="my-2 flex items-center">
                <div class="mr-8 w-4">110</div>
                <div>Height(px)</div>
              </li>
            </ul>
          </li>
          <li class="my-2">
            <div class="flex justify-between">
              <div>Inside layers</div>
              <div>+</div>
            </div>
          </li>
        </ul>
      </li>
      <li class="mb-2 flex justify-between">
        <div>
          <font-awesome-icon class="text-lg mr-2" :icon="['far', 'file-alt']" />
          Textbox
        </div>
        <div>+</div>
      </li>
      <li class="mb-2 flex justify-between">
        <div>
          <font-awesome-icon class="text-lg mr-2" :icon="['far', 'image']" />
          Image
        </div>
        <div>+</div>
      </li>
    </ul>
  </div>
</template>
