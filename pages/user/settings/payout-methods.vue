<template>
  <div class="settings-payout-methods mx-auto">
    <!---->
    <!--Payout Methods-->
    <!---->
    <div
      class="md:flex justify-between items-center pb-3 border-b border-solid border-gray-400 p-5 lg:p-0"
    >
      <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Payout Methods</h1>
    </div>

    <!--Container-->
    <div class="my-5 p-5 bg-white shadow-md">
      <div class="text-gray-500 mb-10">
        When you receive a payment for a product, we call that payment to you a “payout”. Our secure payment system
        <br class="hidden lg:block" />supports several payout methods, which can be setup and edited here. Your available payout
        <br class="hidden lg:block" />options and currencies differ by country.
      </div>

      <table>
        <thead>
          <tr class="text-gray-800 h16">
            <th class="text-left">Methods</th>
            <th class="text-left">Details</th>
            <th class="text-left">Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr class>
            <td class="font-semibold">
              International wire
              <span class="text-ideeza font-normal">Default</span>
            </td>
            <td>IBAN ******789</td>
            <td>Ready</td>
            <td class="lg:text-right">
              <font-awesome-icon
                class="ml-1 h-4 cursor-pointer text-gray-400"
                :icon="['fas', 'times']"
              />
            </td>
          </tr>
          <tr class>
            <td class="font-semibold">Paypal</td>
            <td>example@gmail.com</td>
            <td>Ready</td>
            <td class="lg:text-right">
              <font-awesome-icon
                class="ml-1 h-4 cursor-pointer text-gray-400"
                :icon="['fas', 'times']"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <div class="text-center pt-5">
        <button class="btn pill-button pill-button--ideeza w-full lg:w-auto px-20">Add payout method</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: "auth",
  name: "payout-methods"
};
</script>

<style scoped>
.settings-payout-methods {
  max-width: 1100px;
}
@screen lg {
  table {
    @apply mb-5 w-full table-auto border-collapse text-gray-600;
  }
  tbody td {
    @apply border-t border-solid border-gray-400 py-3 my-3;
  }
  tbody tr:last-child td {
    @apply border-b border-solid border-gray-400 py-3 my-3;
  }
}

@media only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px) {
  /* Force table to not be like tables anymore */
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  /* Hide table headers (but not display: none;, for accessibility) */
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    border: 1px solid #ccc;
    margin-bottom: 10px;
  }

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
  }

  /*
      Label the data
      */
  td:nth-of-type(1):before {
    content: "Method";
  }
  td:nth-of-type(2):before {
    content: "Detail";
  }
  td:nth-of-type(3):before {
    content: "Status";
  }
  td:nth-of-type(4):before {
    content: " ";
  }
}
</style>
