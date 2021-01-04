<template>
  <div>
    <div class="flex justify-between">
      <h1 class="font-semibold mt-10 ">Select the type of product</h1>

    </div>


    <div class="bg-white shadow-md mt-2">
      <table class="">
        <thead>
        <tr class="text-gray-800 h10">
          <th class="text-left w-64">Name</th>
          <th class="text-left">Description</th>
          <th class="text-left">Included Package</th>
          <th class="text-left">Action</th>
        </tr>
        </thead>
        <tbody>
        <tr class="bg-gray-200">
          <td class="">
            ATMEGA32M1-AU-ND

          </td>
          <td>Some description</td>
          <td>BGBPA</td>
          <td>
            <button @click="$emit('selectType')" class="btn pill-button px-4 py-0">select</button>
          </td>

        </tr>
        <tr class="">
          <td class="">
            ATMEGA32M1-AU-ND

          </td>
          <td>Some description</td>
          <td>BGBPA</td>
          <td>
            <button @click="$emit('selectType')" class="btn pill-button px-4 py-0">select</button>
          </td>

        </tr>
        <tr class="bg-gray-200">
          <td class="">
            ATMEGA32M1-AU-ND

          </td>
          <td>Some description</td>
          <td>BGBPA</td>
          <td>
            <button @click="$emit('selectType')" class="btn pill-button px-4 py-0">select</button>
          </td>

        </tr>
        <tr class="">
          <td class="">
            ATMEGA32M1-AU-ND

          </td>
          <td>Some description</td>
          <td>BGBPA</td>
          <td>
            <button @click="$emit('selectType')" class="btn pill-button px-4 py-0">select</button>
          </td>

        </tr>
        <tr class="bg-gray-200">
          <td class="">
            ATMEGA32M1-AU-ND

          </td>
          <td>Some description</td>
          <td>BGBPA</td>
          <td>
            <button @click="$emit('selectType')" class="btn pill-button px-4 py-0">select</button>
          </td>

        </tr>

        </tbody>
      </table>

      <!--Table Stats-->
      <div class="mt-5 lg:flex justify-end">
        <div class="lg:w-3/5 p-3 lg:flex justify-between">
          <!--Paging-->
          <div class="flex items-center">
            <font-awesome-icon class="mr-2 h-4 cursor-pointer" :icon="['fas', 'angle-double-left']"/>
            page 1 0f 9
            <font-awesome-icon class="ml-2 h-4 cursor-pointer" :icon="['fas', 'angle-double-right']"/>
          </div>

          <div class="flex items-center">


            <span class="inline-block ml-32">Show</span>
            <select class="field field--border-none ml-2 h-10">
              <option>1-3</option>
            </select>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "addSelectType"
    }
</script>

<style scoped>
  @screen lg{

    table{
      @apply mb-5 w-full table-fixed border-collapse text-gray-600;
    }
    thead tr{
      @apply bg-white px-6 pl-16;
    }
    thead th{
      @apply p-6;
    }

    tbody td{
      @apply p-6;
    }
    tbody tr:even{
      @apply bg-white;
    }


  }



  @media
  only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px)  {

    /* Force table to not be like tables anymore */
    table, thead, tbody, th, td, tr {
      display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr { border: 1px solid #ccc; margin-bottom: 10px; }

    td {
      /* Behave  like a "row" */
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 50%;
    }

    td:before {
      /* Now like a table header */
      position: absolute;
      /* Top/left values mimic padding */
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
      font-weight: 600;
    }

    /*
      Label the data
      */
    td:nth-of-type(1):before { content: "Products"; }
    td:nth-of-type(2):before { content: "Color"; }
    td:nth-of-type(3):before { content: "Price"; }
    td:nth-of-type(4):before { content: "Quantity"; }
    td:nth-of-type(5):before { content: "Cost"; }
    td:nth-of-type(6):before { content: "Action"; }
  }
</style>
