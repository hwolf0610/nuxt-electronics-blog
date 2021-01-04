<template>
  <div class="bg-white rounded border shadow" :class="border">
    <template v-if="header==true">
    <div class="flex justify-between pt-5 pl-5 pr-5 mb-3 flex-wrap md:flex-no-wrap items-end md:items-center">
      <h6 class="text-ideeza font-bold text-sm flex-1 mb-2 md:mb-0">{{title}}</h6>
      <div class="flex justify-end flex-1 flex-wrap-reverse md:flex-no-wrap md:items-center items-end">
        <div v-if="searchbox"
          class="flex w-fit-content bg-white border border-ideeza rounded items-center mr-2 content-center mb-2 md:mb-0">
          <div class="h-12 relative w-10">
            <font-awesome-icon class="ml-1 h-4 text-gray-400 absolute-center-h-v" :icon="['fas', 'search']" />
          </div>
          <input placeholder="Search" class="bg-white outline-none h-12 text-gray-800 pr-3 w-2/3 md:w-full">
        </div>
        <button v-if="add" class="bg-white border border-ideeza rounded px-3 py-1 text-ideeza mb-2 md:mb-0 h-12" @click="$emit('add')">
          Add New
          <font-awesome-icon class="text-sm" :icon="['fa', 'plus']" />
        </button>
        <font-awesome-icon class="text-xl mt-2 ml-4 text-gray-500" :icon="['fas', 'cog']" />
      </div>
    </div>
    <div class="pl-5 pb-2">
      <slot name="header">
        <button class="font-bold text-sm mr-3 text-ideeza-dark">Delete</button>
        <button class="font-bold text-sm mr-3 text-ideeza-dark">Print</button>
        <button class="font-bold text-sm mr-3 text-ideeza-dark">Export</button>
        <button class="font-bold text-sm mr-3 text-ideeza-dark">Make Manager</button>
      </slot>
    </div>
    </template>
    <div class="overflow-x-auto max-96-vw">
      <table class="text-left w-full simple-table">
        <thead class="bg-white flex text-ideeza-dark w-full">
          <tr class="flex w-full mb-4">
            <slot name="th">
              <th class="p-4 border-t border-b border-blue-300" :class="'w-1/'+fields.length"
                v-for="(field,index) in fields">
                <template v-if="index==0">
                  <input type="checkbox" id="ad" v-model="selected" @change="$emit('selectall',selected)" />
                  <label for="ad">{{field}}</label>
                  <font-awesome-icon class="text-sm mt-2 ml-1 text-green-300" :icon="['fas', 'arrow-down']" />
                </template>
                <template v-else>
                  {{field}}
                  <font-awesome-icon class="text-sm mt-2 ml-1 text-green-300" :icon="['fas', 'arrow-down']" />
                </template>
              </th>
            </slot>
          </tr>
        </thead>
        <tbody class="bg-grey-light flex flex-col items-center justify-between overflow-y-auto w-full text-ideeza-dark"
          style="max-height:400px;">
          <!-- table rows !-->
          <slot>
          </slot>
        </tbody>
      </table>
      <slot name="footer">
      </slot>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      header: {
        default: true,
        type: Boolean
      },
      fields: {
        type: Array,
        default: () => {
          return []
        }
      },
      searchbox: {
        type: Boolean,
        default: false
      },
      title: {
          type: String,
          default: 'Table'
      },
      border: {
        type: String,
        default: 'border-ideeza'
      },
      add: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        selected: false
      }
    }
  }

</script>
<style>
  .simple-table tbody td {
    padding: 0.75rem;
  }

  .simple-table [type="checkbox"]:not(:checked),
  .simple-table [type="checkbox"]:checked {
    position: absolute;
    left: -9999px;
  }

  .simple-table [type="checkbox"]:not(:checked)+label,
  .simple-table [type="checkbox"]:checked+label {
    position: relative;
    padding-left: 1.95em;
    cursor: pointer;
  }

  /* checkbox aspect */
  .simple-table [type="checkbox"]:not(:checked)+label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 1.25em;
    height: 1.25em;
    border: 2px solid #A5C9FF;
    background: #FFF;
    border-radius: 4px;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, .1);
  }

  @media (max-width: 767px) {
    .max-96-vw {
      max-width: 96vw;
    }
  }

  .simple-table [type="checkbox"]:checked+label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 1.25em;
    height: 1.25em;
    border: 2px solid #A5C9FF;
    background: #A5C9FF;
    border-radius: 4px;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, .1);
  }

  /* checked mark aspect */
  .simple-table [type="checkbox"]:not(:checked)+label:after,
  [type="checkbox"]:checked+label:after {
    content: '\2713\0020';
    position: absolute;
    top: .22em;
    left: .23em;
    font-size: 1.0em;
    line-height: 0.8;
    color: #fff;
    transition: all .2s;
    font-family: 'Lucida Sans Unicode', 'Arial Unicode MS', Arial;
  }

  /* checked mark aspect changes */
  .simple-table [type="checkbox"]:not(:checked)+label:after {
    opacity: 0;
    transform: scale(0);
  }

  .simple-table [type="checkbox"]:checked+label:after {
    opacity: 1;
    transform: scale(1);
  }

  /* disabled checkbox */
  .simple-table [type="checkbox"]:disabled:not(:checked)+label:before,
  [type="checkbox"]:disabled:checked+label:before {
    box-shadow: none;
    border-color: #bbb;
    background-color: #ddd;
  }

  .simple-table [type="checkbox"]:disabled:checked+label:after {
    color: #999;
  }

  .simple-table [type="checkbox"]:disabled+label {
    color: #aaa;
  }

  /* accessibility */
  .simple-table [type="checkbox"]:checked:focus+label:before,
  .simple-table [type="checkbox"]:not(:checked):focus+label:before {
    border: 2px solid #A5C9FF;
  }

</style>
<style>
  /* Base for label styling */
  .simple-table tr{
    min-width: 775px;
  }
</style>
