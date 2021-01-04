<template>
  <div class="lg:px-20">
    <h1 class="text-lg font-semibold heading-border border-b pb-3">Projects</h1>

    <div class="cart-scroll-area">
      <!-- <smooth-scrollbar :options="{alwaysShowTracks: true}"> -->
      <div style="overflow: scroll; height: 480px">
        <div v-for="project in projects" :key="project.project_id">
          <div
            class="p-3 my-3 gradient-bg text-white flex justify-between gradient-bg items-center"
          >
            <div class="text-sm mb-1 lg:mb-0 lg:text-xl">{{project.title}}</div>
            <!-- <font-awesome-icon class="mr-1 h-4 cursor-pointer text-white" :icon="['fas', 'trash']" /> -->
          </div>
          <v-client-table
            :ref="project.project_id"
            :data="project.products"
            :columns="columns"
            :options="options"
          >
            <!-- <CheckBox slot="id" slot-scope="props" /> -->
            <div class="flex items-center" slot="detail" slot-scope="props">
              <div class="mr-2">
                <img :src="project_image_url + props.row.product_image" />
              </div>
              <div class="my-auto">
                <span class="block font-semibold">{{props.row.product_title}}</span>
                <span class="block text-sm text-gray-500">{{props.row.product_description}}</span>
              </div>
            </div>
            <div class="flex items-center" slot="color" slot-scope="props">
              <div class="my-auto">
                <span class="block font-semibold">{{props.row.color}}</span>
              </div>
            </div>
            <div class="flex items-center" slot="price" slot-scope="props">
              <div class="mx-auto">
                <span class="block font-semibold">${{props.row.cost}}</span>
              </div>
            </div>

            <div class="flex items-center" slot="quantity" slot-scope="props">
              <div class="mx-auto flex">
                <font-awesome-icon
                  @click="count--"
                  v-if="count >= 1"
                  class="mr-2 h-3 cursor-pointer my-auto"
                  :icon="['fas', 'minus']"
                />
                <div class="w-5">{{count}}</div>
                <font-awesome-icon
                  @click="count++"
                  class="mr-2 h-3 cursor-pointer my-auto"
                  :icon="['fas', 'plus']"
                />
              </div>
            </div>
            <div class="flex items-center" slot="cost" slot-scope="props">
              <div class="mx-auto">
                <span class="block font-semibold">${{props.row.cost}}</span>
              </div>
            </div>
            <div class="flex items-center justify-end" slot="actions" slot-scope="props">
              <font-awesome-icon
                @click="toggleChildRow(project.project_id, props.row.product_id)"
                class="mr-2 h-4 cursor-pointer text-ideeza"
                :icon="['fas', 'pen']"
              />
              <font-awesome-icon
                class="mr-2 h-4 cursor-pointer text-ideeza"
                :icon="['fas', 'trash']"
                @click="onRemove(project.project_id)"
              />
            </div>

            <div slot="child_row" slot-scope="props" class="pb-10 pr-32">
              <div class="text-center font-semibold mb-3 flex justify-end px-5">
                <h1 class="text-center font-semibold w-32">Category</h1>
                <h1 class="text-center font-semibold w-48">Manufacturers</h1>
                <h1 class="text-center font-semibold w-32">Price</h1>
              </div>
              <div v-for="manufacturer in manufacturers" class="flex justify-end px-5">
                <div class="w-32 text-center">{{manufacturer.type}}</div>
                <div class="w-48 text-center">
                  <nuxt-link to="/user/add-manufacturer">
                    <span>{{manufacturer.name}}</span>
                    <font-awesome-icon
                      class="ml-2 h-4 cursor-pointer text-ideeza"
                      :icon="['fas', 'pen']"
                    />
                  </nuxt-link>
                </div>
                <div class="w-32 text-center">{{manufacturer.cost | currency}}</div>
              </div>
            </div>
          </v-client-table>
          <div class="py-5 pr-5 text-right">
            Total:
            <span class="ml-3">{{project.total | currency}}</span>
          </div>
        </div>
      </div>
      <!-- </smooth-scrollbar> -->
    </div>

    <div
      class="py-10 lg:px-20 flex flex-col lg:flex-row justify-between relative"
    >
      <nuxt-link
        to="/user/dashboard"
        class="order-1 lg:order-2 my-4 lg:my-0 btn pill-button px-8 py-1"
      >Continue shopping</nuxt-link>
      <button
        @click="moveNext"
        class="order-3 btn pill-button pill-button--ideeza px-8 py-1"
      >
        Next Step
        <font-awesome-icon class="ml-2 h-4 cursor-pointer" :icon="['fas', 'long-arrow-alt-right']" />
      </button>
    </div>
  </div>
</template>

<script>
import CheckBox from "~/components/form/checkbox-dark.vue";
import apiServiceWithToken from "~/apiService/have_token.js";
import products from "~/json/products.json";
export default {
  middleware: "auth",
  name: "overview",
  components: { CheckBox },
  data: function() {
    return {
      count: 0,
      columns: [
        "id",
        "detail",
        "color",
        "price",
        "quantity",
        "cost",
        "actions"
      ],
      projects: [],
      manufacturers: [],
      allmanufacturers: [],
      manufs: [],

      options: {
        headings: {
          id: "",
          detail: "Products",
          quantity: "Quantity",
          actions: ""
        },
        sortable: [],
        filterable: false,
        childRowTogglerFirst: false
      },
      project_image_url: process.env.project_image_url
    };
  },
  mounted() {
    this.$store.commit("cartstepper/set", { position: 0 });

    let getallprojectsurl = "/api/project/get_all";
    let getallprojectsData = {
      method: "get",
      url: getallprojectsurl,
      data: null
    };

    apiServiceWithToken(getallprojectsData, response => {
      if (response.data["success"] == true) {
        this.projects = response.data["data"];
        console.log("projects: ", response.data["data"]);
      }
    });

    let getallmanufacturersurl = "/api/project/get_all_manufacturers";
    let getallmanufacturersData = {
      method: "get",
      url: getallmanufacturersurl,
      data: null
    };

    apiServiceWithToken(getallmanufacturersData, response => {
      if (response.data["success"] == true) {
        this.allmanufacturers = response.data["data"];
        console.log("all manufactures: ", response.data["data"]);
      }
    });
  },
  methods: {
    toggleChildRow(ref, product_id) {
      window.$nuxt.$cookies.set("productid", product_id);
      this.allmanufacturers.map(element => {
        if (element.product_id == product_id) {
          this.manufs.push(element.manufacturer);
          console.log("element: ", this.manufacturers);
        }
      });

      this.manufacturers = this.manufs;
      this.manufs = [];

      console.log("product_id: ", product_id);
      this.$refs[ref][0].toggleChildRow();
    },
    onRemove(project_id) {
      var d = confirm("Do you really want to remove?");
      if (d == true) {
      }
    },
    moveNext() {
      this.$router.push("/user/cart/options");
    }
  }
};
</script>

<style scoped>
/deep/ .smooth-scrollbar {
  padding-right: 20px;
  margin-top: 15px;
}

/*Table*/

/deep/ table {
  @apply mb-5 w-full table-auto border-collapse text-gray-600 mx-auto;
}
/deep/ thead tr th {
  @apply text-ideeza-black border-b-2 border-solid border-ideeza;
}
/deep/ thead tr th:first-child {
  @apply border-b-0;
}
/deep/ thead tr th:nth-child(2) {
  text-align: left;
}
/deep/ tr td:first-child {
  width: 50px;
  text-align: left;
}
/deep/ tr td:nth-child(2) {
  width: 450px;
  text-align: left;
}
/deep/ tr td img {
  width: 180px;
}
/deep/ tbody td {
  @apply py-3 my-3 text-center;
}
/deep/ tbody td:last-child {
  @apply text-right;
}
/deep/ tbody tr:last-child td {
  @apply py-3 my-3;
}

/deep/ .VuePagination {
  @apply hidden;
}

/*    */
</style>
