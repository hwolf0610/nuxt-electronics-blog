<template>
  <div class="settings-transaction-history mx-auto">
    <!---->
    <!--Orders-->
    <!---->

    <div class="my-10">
      <div class="flex justify-end items-center text-xl">
        <h1 class="mr-5">Your balance:</h1>
        <h1 class="font-semibold">$50</h1>
      </div>

      <div class="flex justify-end items-center text-lg">
        <h1 class="mr-5">Fixed price deposits(Not included in deposits):</h1>
        <h1 class="font-semibold text-ideeza">$23</h1>
      </div>
    </div>

    <div
      class="md:flex justify-between items-center pb-3 border-b border-solid border-gray-400 p-5 lg:p-0"
    >
      <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">My Orders</h1>
    </div>

    <!--Panel Menu-->
    <div class="hidden xl:flex mt-10 justify-between items-center">
      <div class="flex">
        <select class="field field--border-light mr-1 h-12">
          <option>All payout methods</option>
        </select>
        <select class="field field--border-light mr-1 h-12">
          <option>All type products</option>
        </select>
        <select class="field field--border-light mr-1 h-12">
          <option>2018</option>
          <option>2019</option>
          <option>2020</option>
        </select>
        <select class="field field--border-light mr-1 h-12">
          <option>Order status</option>
        </select>
      </div>
      <div class="flex justify-between items-center">
        <button class="btn btn-normal btn--ideeza px-3 py-3 mr-3">Download invoices</button>
        <button class="btn btn-normal btn-hollow--ideeza px-3 py-3 mr-3">Download CSV</button>
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
            placeholder="search by details"
            class="bg-white outline-none h-12 text-gray-800 pr-3"
          />
        </div>
      </div>
    </div>
    <div class="xl:hidden cursor-pointer border-light-gray w-10 h-8 relative mt-2 ml-2 bg-white">
      <font-awesome-icon
        class="ml-1 h-6 text-gray-600 absolute-center-h-v"
        :icon="['fas', 'sliders-h']"
      />
    </div>

    <!--Container-->
    <div class="my-5 p-5 bg-white shadow-md">
      <table>
        <thead>
          <tr class="text-gray-800 h16">
            <th class="product-head">Product</th>
            <th>Product No</th>
            <th>Build Time</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Manufacturers</th>
            <th>Order Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr class v-for="Project in articleArray" >
            <td class="product">
              <div class="lg:flex">
                <div class="mr-2">
                  <img :src="project_img_url+Project.transaction.profile" />
                </div>
                <div>
                  <span class="block font-semibold">{{Project.transaction.name}}</span>
                  <span class="block text-sm text-gray-500">{{Project.transaction.title}}</span>
                  <span class="text-sm block mt-3">{{Project.transaction.order_id}}</span>
                </div>
              </div>
            </td>
            <td class="lg:text-center">{{Project.transaction.project_no}}</td>
            <td class="font-semibold">{{Project.transaction.build_tiem}}</td>
            <td class="font-semibold">{{Project.transaction.quantity}}</td>
            <td class="font-semibold">{{Project.transaction.price}}</td>
            <td class="font-semibold">
              <span class="text-sm text-gray-500 block">Manufacturers:</span>
              <span class="font-semibold block">{{Project.transaction.manufacturename}}</span>
              <span class="text-sm text-gray-500 block">Cover:</span>
              <span class="font-semibold block">{{Project.transaction.manufacturecover}}</span>
            </td>
            <td class="font-semibold">
              <span class="text-sm text-gray-500 block">Order Status:</span>
              <span class="font-semibold block">{{Project.transaction.orderstatus}}</span>
              <span class="text-sm text-gray-500 block">Order Time and Date:</span>
              <span class="font-semibold block">{{ts.toLocaleDateString(Project.transaction.timestamp)}}</span>
            </td>
            <td class="lg:text-right">
              <div
                class="text-center w-20 cursor-pointer text-semibold text-gary-600 border border-solid border-gray-500 p-2"
              >Invoice</div>
              <div
                class="text-center w-20 mt-2 cursor-pointer text-semibold text-gary-600 border border-solid border-gray-500 p-2"
              >Details</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>  
  </div>
</template>
<script>
// import Projects from "~/data/UserSettingApi.json";
import apiService from "~/apiService/have_token.js";

export default {
  middleware: "auth",
  name: "transaction-history",
  data: function() {
    return {
      longview: true,
      Projects: null,
      geturl: "/api/setting/transaction_history",
      articleArray: [],
      randomNumber: {},
       ts: new Date(),
      project_img_url:process.env.project_image_url,

    };
  },
  mounted(){

    let sendData = {
      method: "get",
      url: this.geturl,
      data: null
    };

    apiService(sendData, response => {
      console.log(response.data);
      this.randomNumber = response.data;
      this.articleArray = Object.values(response.data.data);

      this.articleArray.map(element => {
        this.Projects.push(element.transaction);
        // this.Servicesaxios.push(element.service);
      });

    });

  },
};
</script>

<style scoped>
.product-head {
  @apply text-left;
}
.settings-transaction-history {
  max-width: 1500px;
}
@screen md {
  thead td,
  tbody td {
    @apply text-center px-1;
  }
}
@screen lg {
  thead td {
    @apply text-left;
  }
  .product {
    width: 290px;
  }
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
    font-weight: 600;
  }

  /*
      Label the data
      */
  td:nth-of-type(1):before {
    content: "Product";
  }
  td:nth-of-type(2):before {
    content: "Product No";
  }
  td:nth-of-type(3):before {
    content: "Build Time";
  }
  td:nth-of-type(4):before {
    content: "Quantity";
  }
  td:nth-of-type(5):before {
    content: "Price";
  }
  td:nth-of-type(6):before {
    content: "Manufacturers";
  }
  td:nth-of-type(7):before {
    content: "Order Status";
  }
  td:nth-of-type(8):before {
    content: "Action";
  }
}
</style>
