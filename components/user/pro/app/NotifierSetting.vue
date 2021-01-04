<template>
    <div class="p-5">
        <h5 class="font-semibold text-lg text-center mt-10">Notifier</h5>
        
        <div class="mt-5 mx-3">
            <div>Text color</div>
            <div class="rounded p-4 text-white bg-green-300 mt-1">#FFFFFF
            </div>
        </div>
        <check-box class="mx-3 mt-3">Enabled</check-box>
      <ul class="mx-3 mt-5 text-lg">
        <li class="mb-3">
          <div class="mt-3 text-sm">
              Notifier Length
          </div>
          <div class="mt-1">
            <select class="w-full border p-2 rounded mr-2">
                <option value="1" selected>Long</option>
            </select>
          </div>
         <div class="mt-3">
            <div>Text color</div>
            <div class="rounded p-4 text-white bg-black mt-1">#FFFFFF
            </div>
        </div>
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