<template>
  <div >
    <div>
        <div class="hidden xl:flex justify-between">
          <div class="flex">
            <button class="bg-gray px-2 py-1 border border-gray mr-1 text-ideeza">+ Add new Part</button>
            <select class="field field--border-light mr-1 h-12">
              <option>Category</option>
            </select>
            <select class="field field--border-light mr-1 h-12">
              <option>Subcategory</option>
            </select>
          </div>
          <div>
            <div
              class="flex w-fit-content bg-white justify-center border-light-gray items-center content-center"
            >
              <div class="h-12 relative w-10">
                <font-awesome-icon
                  class="ml-1 h-4 text-gray-400 absolute-center-h-v"
                  :icon="['fas', 'search']"
                />
              </div>
              <input
              placeholder="Search..."
              class="bg-white outline-none h-8 text-gray-800 pr-3 border-gray"
              v-model="searchTerm"
              v-on:input="search"
            />
              <!-- <input
                placeholder="search users"
                class="bg-white outline-none h-12 text-gray-800 pr-3"
              /> -->
            </div>
          </div>
        </div>
        <div
          class="xl:hidden cursor-pointer border-light-gray w-10 h-8 relative mt-2 ml-2 bg-white"
        >
          <font-awesome-icon
            class="ml-1 h-6 text-gray-600 absolute-center-h-v"
            :icon="['fas', 'sliders-h']"
          />
        </div>
      </div>
      <!-- <table class="mt-10 shadow-md">
        <thead>
          <tr class="text-gray-800 h16">
            <th class="text-left">Name</th>
            <th class="text-left">2D</th>
            <th class="text-left">3D</th>
            <th class="text-left">Manufacturer</th>
            <th class="text-left">Unit in stock</th>
            <th class="text-left">Price</th>
            <th class="text-left">Package</th>
            <th class="text-left">Product</th>
            <th class="text-left">Availability</th>
            <th class="text-left">ROHS?</th>
            <th class="text-left">Category</th>
            <th class="text-left">Subcategory</th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <td>
              Test1
            </td>
            <td>2D File</td>
            <td>3D File</td>
            <td>PCBWay</td>
            <td>
              <div class="field-input flex-grow">
                <input class="field h-10 px-2 text-sm" value="10" />
              </div>
            </td>
            <td>
              <div class="field-input flex-grow">
                <input class="field h-10 px-2 text-sm" value="10" />
              </div>
            </td>
            <td>
              <div class="field-input flex-grow">
                <input class="field h-10 px-2 text-sm" value="10" />
              </div>
            </td>
            <td>2018</td>
            <td>
              <div class="field-input flex-grow">
                <input class="field h-10 px-2 text-sm" value="Yes" />
              </div>
            </td>
            <td>Yes</td>
            <td>Category</td>
            <td>Subcategory</td>\
          </tr>
        </tbody>
      </table> -->
      <simple-table title="" :header="false" border="border-0 shadow-md" class="mt-4">
          <template v-slot:header>
          </template>
          <template v-slot:th>
            <th class="text-left w-24 p-1">Name</th>
            <th class="text-left w-16 p-1">2D</th>
            <th class="text-left w-16 p-1">3D</th>
            <th class="text-left w-32 p-1">Manufacturer</th>
            <th class="text-left w-32 p-1">Unit in stock</th>
            <th class="text-left w-32 p-1">Price</th>
            <th class="text-left w-32 p-1">Package</th>
            <th class="text-left w-24 p-1">Product</th>
            <th class="text-left w-32 p-1">Availability</th>
            <th class="text-left w-24 p-1">ROHS?</th>
            <th class="text-left w-32 p-1">Category</th>
            <th class="text-left w-32 p-1">Subcategory</th>
            <!-- <th class="p-4 border-t border-b border-blue-300" :class="'w-1/'+fields.length" v-for="(field,index) in fields">
                    <template v-if="index==0">
                        <input  type="checkbox" id="ad" v-model="selected" @change="$emit('selectall',selected)"/>
                        <label for="ad">{{field}}</label>
                        <font-awesome-icon class="text-sm mt-2 ml-1 text-green-300" :icon="['fas', 'arrow-down']"/>
                    </template>
                    <template v-else>
                        {{field}}
                        <font-awesome-icon class="text-sm mt-2 ml-1 text-green-300" :icon="['fas', 'arrow-down']"/>    
                    </template>
                </th> -->
          </template>
          <tr class="flex w-full" >
            <td class="text-left w-24 p-1 border-b border-gray-400">Name</td>
            <td class="text-left w-16 p-1 border-b border-gray-400">2D</td>
            <td class="text-left w-16 p-1 border-b border-gray-400">3D</td>
            <td class="text-left w-32 p-1 border-b border-gray-400">Manufacturer</td>
            <td class="text-left w-32 p-1 border-b border-gray-400">
              <div class="field-input flex-grow">
                <input class="field h-10"  />
              </div>
            </td>
            <td class="text-left w-32 p-1 border-b border-gray-400">
              <div class="field-input flex-grow">
                <input class="field h-10"  />
              </div>
            </td>
            <td class="text-left w-32 p-1 border-b border-gray-400">
              <div class="field-input flex-grow">
                <input class="field h-10"  />
              </div>
            </td>
            <td class="text-left w-24 p-1 border-b border-gray-400">Product</td>
            <td class="text-left w-32 p-1 border-b border-gray-400">
              <div class="field-input flex-grow">
                <input class="field h-10"  />
              </div>
            </td>
            <td class="text-left w-24 p-1 border-b border-gray-400">ROHS?</td>
            <td class="text-left w-32 p-1 border-b border-gray-400">Category</td>
            <td class="text-left w-32 p-1 border-b border-gray-400">Subcategory</td>
          </tr>
          <tr class="flex w-full" >
            <td class="text-left w-24 p-1 border-b border-gray-400">Name</td>
            <td class="text-left w-16 p-1 border-b border-gray-400">2D</td>
            <td class="text-left w-16 p-1 border-b border-gray-400">3D</td>
            <td class="text-left w-32 p-1 border-b border-gray-400">Manufacturer</td>
            <td class="text-left w-32 p-1 border-b border-gray-400">
              <div class="field-input flex-grow">
                <input class="field h-10"  />
              </div>
            </td>
            <td class="text-left w-32 p-1 border-b border-gray-400">
              <div class="field-input flex-grow">
                <input class="field h-10"  />
              </div>
            </td>
            <td class="text-left w-32 p-1 border-b border-gray-400">
              <div class="field-input flex-grow">
                <input class="field h-10"  />
              </div>
            </td>
            <td class="text-left w-24 p-1 border-b border-gray-400">Product</td>
            <td class="text-left w-32 p-1 border-b border-gray-400">
              <div class="field-input flex-grow">
                <input class="field h-10"  />
              </div>
            </td>
            <td class="text-left w-24 p-1 border-b border-gray-400">ROHS?</td>
            <td class="text-left w-32 p-1 border-b border-gray-400">Category</td>
            <td class="text-left w-32 p-1 border-b border-gray-400">Subcategory</td>
          </tr>
        </simple-table>
  </div>

</template>
<script>
import SimpleTable from '~/components/reusables/Table.vue'
export default {
  layout:'user',
  components: {
    SimpleTable
  }
}
</script>
