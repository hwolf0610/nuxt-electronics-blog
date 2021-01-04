<template>
    <div class="bg-white shadow-md p-5">
        <div class="form-field md:flex items-center">
            <div class="field-label md:w-1/3 font-semibold" >Materials</div>
            <div class="field-input flex-grow">
                <input class="field h-10"  />
            </div>
        </div>
        <hr class="my-2">
        <div class="form-field md:flex items-center">
            <div class="field-label md:w-1/3 font-semibold" >Max Dimensions</div>
            <div class="flex-1 flex">
                <div class="field-input flex-grow mr-2">
                    <input class="field h-10"  />
                </div>
                <div class="field-input flex-grow mr-2">
                    <input class="field h-10"  />
                </div>
                <div class="field-input flex-grow mr-2">
                    <input class="field h-10"  />
                </div>
                <div class="field-input flex-grow mr-2">
                    <input class="field h-10"  />
                </div>
            </div>
        </div>
        <hr class="my-2">
        <div class="form-field md:flex items-center">
            <div class="field-label md:w-1/3 font-semibold" >Quantity Ability</div>
            <div class="flex-1 flex">
                <div class="field-input flex-grow mr-2">
                    <input class="field h-10"  />
                </div>
                <div class="field-input flex-grow mr-2">
                    <input class="field h-10"  />
                </div>
            </div>
        </div>
        <hr class="my-2">
        <div class="form-field md:flex items-center">
            <div class="field-label md:w-1/3 font-semibold" >Suitable for Prototyping</div>
            <div class="field-input mr-2">
                <toggle value="true"/>
            </div>
        </div>
        <hr class="my-2">
        <div class="form-field md:flex items-center">
            <div class="field-label md:w-1/3 font-semibold" >Design file type</div>
            <div class="field-input flex-grow">
              <select class="field h-10 w-full"  v-model="preferredlanguage" >
                <option value="male">English</option>
              </select>
            </div>
        </div>
        <hr class="my-2">
        <div class="form-field md:flex items-center">
            <div class="field-label md:w-1/3 font-semibold" >Manufacturing time</div>
            <div class="field-input flex-grow">
                <input class="field h-10"  />
            </div>
        </div>
        <hr class="my-2">
        <div>
            <button class="bg-gray-200 rounded-full w-full py-3 border border-gray-500 text-gray-700 font-semibold">+ Add New Field 
                <span class="text-xs font-normal">(NEED TO BE APPROVED BY OUR TECHNICIAN)</span></button>
        </div>
    </div>
</template>
<script>
import Toggle from "~/components/form/switch";
export default {
    components: {
        Toggle
    }
}
</script>
<style scoped>
select.field {
    min-width: 100%;
    max-width: 100%;
}
</style>