<template>
    <div class="p-5">
        <h5 class="font-semibold text-lg text-center mt-10">List View</h5>
        
        <div class="mt-5 mx-3">
            <div>Background Color</div>
            <div class="rounded p-4 text-white bg-green-300 mt-1">#FFFFFF
            </div>
        </div>
        <check-box class="mx-3 mt-3">Enabled</check-box>
      <ul class="mx-3 mt-5 text-lg">
        <li class="mb-3">
          <div class="mt-3 text-sm">
              Font 
          </div>
          <div class="mt-1">
              <select class="w-full mb-2 border p-2 rounded">
                  <option value="1" selected>22px</option>
              </select>
              <div class="flex items-center">
                <select class="w-2/3  border p-2 rounded mr-2">
                    <option value="1" selected>Open sans</option>
                </select>
                <div class="flex flex-1 justify-between text-xl">
                    <div class="flex-1"><u>U</u></div>
                    <div class="flex-1"><b>B</b></div>
                    <div class="flex-1"><i>I</i></div>
                </div>
              </div>
          </div>
          <div class="mt-3 text-sm">
              Width
          </div>
          <div class="mt-1">
            <select class="w-full border p-2 rounded mr-2">
                <option value="1" selected>Automatic</option>
            </select>
          </div>
          <div class="mt-3 text-sm">
              Height
          </div>
          <div class="mt-1">
            <select class="w-full border p-2 rounded mr-2">
                <option value="1" selected>Automatic</option>
            </select>
          </div>
          <div class="mt-3 text-sm">
              Selection
          </div>
          <div class="mt-1">
              <input type="text" class="w-full border p-2">
          </div>
          <check-box class="mt-2">Show Filter bar</check-box>
          <div class="mt-3">
            <div>Selection color</div>
            <div class="rounded p-4 text-white bg-green-300 mt-1">#FFFFFF
            </div>
          </div>
          <div class="mt-3 text-sm">
              Text
          </div>
          <div class="mt-1">
              <input type="text" class="w-full border p-2">
          </div>
          <div class="mt-3 text-sm">
              Text Alignment
          </div>
          <div class="mt-1">
            <select class="w-full border p-2 rounded mr-2">
                <option value="1" selected>Center</option>
            </select>
          </div>
          <div class="mt-3 text-sm">
              Text color
          </div>
          <div class="mt-1">
              <div class="rounded p-4 text-white bg-black mt-1">#FFFFFF
              </div>
          </div>
          <check-box class="mt-3">Visible</check-box>
        </li>
      </ul>
    </div>
</template>
<script>
import CheckBox from '~/components/form/checkbox-light.vue'
export default {
    components: {
        CheckBox
    }
}
</script>
<style scoped>
select.w-full {
    min-width: 100% !important;
    max-width: 100% !important;
}
</style>