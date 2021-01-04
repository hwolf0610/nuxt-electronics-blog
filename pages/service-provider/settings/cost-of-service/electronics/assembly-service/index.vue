<template>
  <div>
    <div class="p-5 mt-2 bg-white shadow-md">
      <div class="md:flex items-center text-gray-600">
        <div class="md:w-1/4 mb-2 md:mb-0 font-semibold">Price for Quantity</div>
        <div class="flex-1">
          <div class="flex items-center text-ideeza-gray">
            <div class="flex-1 text-center text-lg mr-2">1</div>
            <div class="flex-1 text-center text-lg mr-2">100</div>
            <div class="flex-1">
              <div class="field-input flex-grow">
                <input class="field h-10 px-4 text-sm" value="+ Add Value" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-2">
      <div class="md:flex items-center text-gray-600">
        <div class="md:w-1/4 text-gray-700 mb-2 md:mb-0 font-semibold">Smt Parts</div>
        <div class="flex-1">
          <div class="flex items-center text-ideeza-gray">
            <div class="flex-1 mr-2">
              <div class="field-input flex-grow">
                <input class="field h-10 px-2 text-sm" placeholder="Amount" />
              </div>
            </div>
            <div class="flex-1 mr-2">
              <div class="field-input flex-grow">
                <input class="field h-10 px-2 text-sm" placeholder="Amount" />
              </div>
            </div>
            <div class="flex-1">
              <div class="field-input flex-grow">
                <input class="field h-10 px-2 text-sm" placeholder="Amount" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-2">
      <div class="md:flex items-center text-gray-600">
        <div class="md:w-1/4 text-gray-700 mb-2 md:mb-0 font-semibold">Through hole</div>
        <div class="flex-1">
          <div class="flex items-center text-ideeza-gray">
            <div class="flex-1 mr-2">
              <div class="field-input flex-grow">
                <input class="field h-10 px-2 text-sm" placeholder="Amount" />
              </div>
            </div>
            <div class="flex-1 mr-2">
              <div class="field-input flex-grow">
                <input class="field h-10 px-2 text-sm" placeholder="Amount" />
              </div>
            </div>
            <div class="flex-1">
              <div class="field-input flex-grow">
                <input class="field h-10 px-2 text-sm" placeholder="Amount" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-2">
      <div class="md:flex items-center text-gray-600">
        <div class="md:w-1/4 text-gray-700 mb-2 md:mb-0 font-semibold">Unique</div>
        <div class="flex-1">
          <div class="flex items-center text-ideeza-gray">
            <div class="flex-1 mr-2">
              <div class="field-input flex-grow">
                <input class="field h-10 px-2 text-sm" placeholder="Amount" />
              </div>
            </div>
            <div class="flex-1 mr-2">
              <div class="field-input flex-grow">
                <input class="field h-10 px-2 text-sm" placeholder="Amount" />
              </div>
            </div>
            <div class="flex-1">
              <div class="field-input flex-grow">
                <input class="field h-10 px-2 text-sm" placeholder="Amount" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-2">
      <div class="md:flex items-center text-gray-600">
        <div class="md:w-1/4 text-gray-700 mb-2 md:mb-0 font-semibold">Special Request</div>
        <div class="field-input flex-grow flex-1">
          <input class="field h-10 px-2 text-sm"
            placeholder="Fill in the detailed technical info about the PCB assembly" />
        </div>
      </div>
    </div>
    <div class="text-center mt-5">
      <button class="bg-ideeza text-white text-base px-10 py-2 rounded-full">Save</button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    }
  }

</script>
