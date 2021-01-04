<template>
    <div class="p-5">
        <h5 class="font-semibold text-lg text-center mt-10">Webviewer</h5>
        
      <ul class="mx-3 mt-5 text-lg">
        <li class="mb-3">
          <div>
            <check-box class="ml-2">Follow links</check-box>
          </div>
          <div class="mt-3 text-sm">
              width
          </div>
          <div class="mt-1">
              <select class="w-full border py-2">
                  <option value="0" selected>Automatic</option>
              </select>
          </div>
          <div class="mt-3 text-sm">
              height
          </div>
          <div class="mt-1">
              <select class="w-full border py-2">
                  <option value="0" selected>Automatic</option>
              </select>
          </div>
          <div class="mt-3 text-sm">
              Home url
          </div>
          <div class="mt-1">
              <input type="text" class="w-full border p-2">
          </div>
          <check-box class="mt-3">Ignore SSL errors</check-box>
          <check-box class="mt-2">Prompt for Permission</check-box>
          <check-box class="mt-2">UseLocation</check-box>
          <check-box class="mt-2">Visible</check-box>
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