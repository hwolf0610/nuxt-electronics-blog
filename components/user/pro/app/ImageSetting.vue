<template>
    <div class="p-5">
        <h5 class="font-semibold text-lg text-center mt-10">Image</h5>
      <ul class="mx-3 mt-5 text-lg">
        <li class="mb-3">
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
              Picture
          </div>
          <div class="mt-1">
              <input type="text" class="w-full border p-2" placeholder="No file choosen">
          </div>
          <div class="mt-3 text-sm">
              Rotation angle
          </div>
          <div class="mt-1">
              <input type="text" class="w-full border p-2" placeholder="0.0">
          </div>
          <check-box class="mt-3">Visible</check-box>
          <check-box class="mt-3">Scalepicturetofit</check-box>
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