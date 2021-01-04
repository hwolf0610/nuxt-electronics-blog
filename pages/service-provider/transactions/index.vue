<template>
  <div>
    <div class="mt-10 border-b-2 border-gray-400 py-2">
        <h3 class="font-semi-bold text-2xl">Transaction History</h3>
    </div>
    <div class="mt-3 border-b-2 border-gray-400 py-2 md:flex justify-between">
        <div class="flex">
            <button class="font-semibold text-base text-ideeza mr-10">Completed Payouts</button>
            <button class="font-semibold text-base text-gray-700 hover:text-ideeza">Upcoming Payouts</button>
        </div>
        <div>
            <h6 class="font-semibold text-ideeza-black">Paid Out: 150$</h6>
        </div>
    </div>
    <div class="mt-10">
      <div>
        <div class="hidden xl:flex justify-between">
          <div class="flex">
            <select class="field field--border-light mr-1 h-12">
              <option>All payout methods</option>
            </select>
            <select class="field field--border-light mr-1 h-12">
              <option>All products</option>
            </select>
            <select class="field field--border-light mr-1 h-12">
              <option>2018</option>
            </select>
            <select class="field field--border-light mr-1 h-12">
              <option>Type</option>
            </select>
          </div>
          <div>
            <div class="flex w-fit-content bg-white justify-center border-light-gray items-center content-center">
              <div class="h-12 relative w-10">
                <font-awesome-icon class="ml-1 h-4 text-gray-400 absolute-center-h-v" :icon="['fas', 'search']" />
              </div>
              <input placeholder="Find transaction by detail..." class="bg-white outline-none h-8 text-gray-800 pr-3"
                v-model="searchTerm" v-on:input="search" />
              <!-- <input
                placeholder="search users"
                class="bg-white outline-none h-12 text-gray-800 pr-3"
              /> -->
            </div>
          </div>
        </div>
        <div class="xl:hidden cursor-pointer border-light-gray w-10 h-8 relative mt-2 ml-2 bg-white">
          <font-awesome-icon class="ml-1 h-6 text-gray-600 absolute-center-h-v" :icon="['fas', 'sliders-h']" />
        </div>
      </div>
      <div class="px-3 bg-white shadow-lg">
      <table class="mt-10 ">
        <thead>
          <tr class="text-gray-800 h16 border-b border-gray-500">
            <th class="text-left" colspan="2">Title</th>
            <th class="text-left">ID</th>
            <th class="text-left">Type</th>
            <th class="text-left">Quantity</th>
            <th class="text-left" colspan="2">Date</th>
            <th class="text-left" colspan="2">Payout Method</th>
            <th class="text-left">Price</th>
            <th class="text-left">Invoice</th>
          </tr>
        </thead>
        <tbody v-for="(transaction, index) in transactions">
          <tr class="font-semibold border-b border-gray-500">
            <td colspan="2">
              <div>{{transaction.title}}</div>
              <div class="font-light">{{transaction.type}}</div>
            </td>
            <td>{{transaction.id}}</td>
            <td>{{transaction.type_2}}</td>
            <td>{{transaction.quantity}}</td>
            <td colspan="2">{{transaction.date}}</td>
            <td colspan="2">{{transaction.payout_method}}</td>
            <td>{{transaction.price}}</td>
            <td><img src="~/static/images/invoice.png" class="w-12 object-center object-right mr-5" alt=""></td>
          </tr>
        </tbody>
      </table>
      </div>
      <!--Table Stats-->
      <!-- <div class="mt-5 lg:flex justify-end">
        <div class="lg:w-3/5 p-3 lg:flex justify-between"> -->
      <!--Paging-->
      <!-- <div class="flex items-center">
            <font-awesome-icon
              class="mr-2 h-4 cursor-pointer"
              :icon="['fas', 'angle-double-left']"
            />page 1 0f 9
            <font-awesome-icon
              class="ml-2 h-4 cursor-pointer"
              :icon="['fas', 'angle-double-right']"
            />
          </div> -->

      <!--Paging-->
      <div class="mx-auto bg-white text-center py-2 shadow-lg">
        <span class="inline-block mr-4 cursor-pointer" @click="decreasekey">
          <font-awesome-icon class="mr-1 h-4" :icon="['fas', 'angle-double-left']" />Previous
        </span>

        <span v-for="inde in counterarray " :key="inde">
          <span v-if="1" class="text-lg text-ideeza">
            <button style="width:35px;" @click="selectedkey(inde)">{{inde}}</button>
          </span>
          <span v-else>
            <button style="width:35px;" @click="selectedkey(inde)">{{inde}}</button>
          </span>
        </span>

        <span class="inline-block ml-4 cursor-pointer" @click="increasekey">
          Next
          <font-awesome-icon class="ml-2 h-4" :icon="['fas', 'angle-double-right']" />
        </span>
      </div>

      <div class="flex items-center">
        <!-- <span class="inline-block ml-32">Show</span>
            <select class="field field--border-none ml-2 h-10">
              <option>1-3</option>
            </select> -->
      </div>
    </div>
  </div>
</template>
<script>
import transactionsdata from "~/data/transactions.json"
export default {
    layout: 'service-provider',
    data() {
        return {
            transactions: [],
            searchTerm: "",
            counterarray: []
        }
    },
    created: function() {
        Object.assign(this.transactions,transactionsdata);
        let endd =
        this.transactions.length / 5 + 1;
        //  alert( this.Services.length);
        for (let i = 1; i <= endd; i++) {
            this.counterarray.push(i);
        }
    },
    methods: {
        search(e) {
            this.transactions = [];

            let article_list = transactionsdata;
            article_list.map(element => {
                const a_text = element.title.toLowerCase() + "";
                const b_text = e.target.value.toLowerCase() + "";
                // const b_text = "master"

                let s_index = a_text.indexOf(b_text) + 1;
                // console.log("search ", a_text, b_text, s_index);

                if (s_index > 0 || e.target.value == "") {
                this.transactions.push(element);
                }
            });

            console.log("search array :", this.transactions, e.target.value);
            this.$forceUpdate();
        },
        decreasekey() {

        },
        increasekey() {

        }
    }
}
</script>
<style scoped>
@screen lg {
  table {
    @apply w-full table-fixed border-collapse text-gray-600;
  }
  thead tr {
    @apply bg-white px-6 pl-16;
  }
  thead th {
    @apply p-6;
  }
  /* thead th:first-child {
    @apply pl-0;
  } */
  tbody td {
    @apply p-6;
  }
  tbody tr:even {
    @apply bg-white;
  }
  /* tbody td:first-child {
    @apply pl-0;
  } */
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
    font-weight: 600;
  }

  /*
      Label the data
      */
  td:nth-of-type(1):before {
    content: "Title";
  }
  td:nth-of-type(2):before {
    content: "ID";
  }
  td:nth-of-type(3):before {
    content: "Type";
  }
  td:nth-of-type(4):before {
    content: "Quantity";
  }
  td:nth-of-type(5):before {
    content: "Date";
  }
  td:nth-of-type(6):before {
    content: "Payout Methods";
  }
  td:nth-of-type(7):before {
    content: "Price";
  }
  td:nth-of-type(8):before {
    content: "Invoice";
  }
}
</style>