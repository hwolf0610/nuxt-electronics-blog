<template>
  <div class="lg:px-20">
    <div
      class="lg:flex justify-between items-center heading-border heading-border--dark border-b pb-3"
    >
      <div class="flex">
        <h1 class="text-xl font-semibold mr-3">Service</h1>
        <select class="field field--border-none h-10 inline">
          <option>All</option>
          <option>Copyrighting</option>
          <option>Electronics</option>
          <option>Coding</option>
          <option>Developing</option>
          <option>Designing</option>
        </select>
      </div>
      <div>
        <SearchInput placeholder="Search Member..." />
      </div>
    </div>

    <div class="my-3 lg:flex justify-end">
      <div class="flex">
        <div class="flex items-center">
          <span class="mr-3 text-sm">Sort by</span>
          <select class="select-sort h-10 inline">
            <option class="text-ideeza">Rating</option>
            <option>Newest</option>
            <option>Oldest</option>
            <option>Relevant</option>
          </select>
        </div>
      </div>
    </div>

    <!--Results-->
    <div class="my-3 font-semibold">Results (58)</div>

    <div class="mb-32 lg:mb-10 lg:flex">
      <div class="lg:flex lg:mr-20">
        <div class="mb-5 lg:mb-0 lg:mr-5">
          <img
            class="avatar rounded-full mx-auto"
            src="https://randomuser.me/api/portraits/men/8.jpg"
          />
        </div>
        <div>
          <div>
            <span class="text-xl font-semibold inline-block mr-5">He Someone</span>
            <button class="btn btn-normal btn--ideeza px-5 py-2">Available</button>
          </div>
          <div class="my-5 flex items-center">
            <span class="inline-block mr-5 font-semibold text-xl">Coder</span>
            <span>
              <font-awesome-icon class="mr-1 h-5 text-yellow-600" :icon="['fas', 'star']" />
              <font-awesome-icon class="mr-1 h-5 text-yellow-600" :icon="['fas', 'star']" />
              <font-awesome-icon class="mr-1 h-5 text-yellow-600" :icon="['fas', 'star']" />
              <font-awesome-icon class="mr-1 h-5 text-yellow-600" :icon="['fas', 'star']" />
              <font-awesome-icon class="mr-1 h-5 text-yellow-600" :icon="['fas', 'star']" />
            </span>
            <span class="ml-3">(5.0)</span>
          </div>
          <div
            class="font-semibold text-lg"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat orci magna, vel mollis purus consequat et. Proin consectetur odio nec varius placerat.</div>
          <div class="my-10">
            <button class="btn btn-normal btn--ideeza-dark px-4 py-2">Java</button>
            <button class="btn btn-normal btn--ideeza-dark px-4 py-2">PHP</button>
            <button class="btn btn-normal btn--ideeza-dark px-4 py-2">Python</button>
          </div>
        </div>
      </div>

      <div class="reviews-container">
        <div class="flex justify-between">
          <div class="flex">
            <div class="reviews-avatar mr-3"></div>
            <div class="text-xl font-semibold">Reviews</div>
          </div>
          <div class="flex items-center">
            <span class="mr-3 text-sm">Sort by</span>
            <select class="select-sort h-10 inline">
              <option class="text-ideeza">Rating</option>
              <option>Newest</option>
              <option>Oldest</option>
              <option>Relevant</option>
            </select>
          </div>
        </div>
        <div class="mt-3 flex justify-between">
          <div class="flex">
            <div class="reviews-avatar mr-3">
              <img class="rounded-full" src="https://randomuser.me/api/portraits/men/18.jpg" />
            </div>
            <div class>
              <div class="flex justify-between">
                <div class="text-lg font-semibold">
                  Someone
                  <font-awesome-icon
                    class="lg:ml-5 lg:mr-2 h-4 text-yellow-600"
                    :icon="['fas', 'star']"
                  />5.0
                </div>
                <div class="text-lg font-semibold text-gray-500">3d ago</div>
              </div>

              <div
                class="text-sm"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat orci magna, vel mollis</div>
            </div>
          </div>
        </div>
        <div class="mt-3 flex justify-between">
          <div class="flex">
            <div class="reviews-avatar mr-3">
              <img class="rounded-full" src="https://randomuser.me/api/portraits/men/18.jpg" />
            </div>
            <div class>
              <div class="flex justify-between">
                <div class="text-lg font-semibold">
                  Someone
                  <font-awesome-icon
                    class="lg:ml-5 lg:mr-2 h-4 text-yellow-600"
                    :icon="['fas', 'star']"
                  />5.0
                </div>
                <div class="text-lg font-semibold text-gray-500">3d ago</div>
              </div>

              <div
                class="text-sm"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat orci magna, vel mollis</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-10 lg:flex">
      <div class="lg:flex lg:mr-20">
        <div class="mr-5">
          <img class="avatar rounded-full" src="https://randomuser.me/api/portraits/men/8.jpg" />
        </div>
        <div>
          <div>
            <span class="text-xl font-semibold inline-block mr-5">He Someone</span>
            <button class="btn btn-normal btn--ideeza px-5 py-2">Available</button>
          </div>
          <div class="my-5 flex items-center">
            <span class="inline-block mr-5 font-semibold text-xl">Coder</span>
            <span>
              <font-awesome-icon class="mr-1 h-5 text-yellow-600" :icon="['fas', 'star']" />
              <font-awesome-icon class="mr-1 h-5 text-yellow-600" :icon="['fas', 'star']" />
              <font-awesome-icon class="mr-1 h-5 text-yellow-600" :icon="['fas', 'star']" />
              <font-awesome-icon class="mr-1 h-5 text-yellow-600" :icon="['fas', 'star']" />
              <font-awesome-icon class="mr-1 h-5 text-yellow-600" :icon="['fas', 'star']" />
            </span>
            <span class="ml-3">(5.0)</span>
          </div>
          <div
            class="font-semibold text-lg"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat orci magna, vel mollis purus consequat et. Proin consectetur odio nec varius placerat.</div>
          <div class="my-10">
            <button class="btn btn-normal btn--ideeza-dark px-4 py-2">Java</button>
            <button class="btn btn-normal btn--ideeza-dark px-4 py-2">PHP</button>
            <button class="btn btn-normal btn--ideeza-dark px-4 py-2">Python</button>
          </div>
        </div>
      </div>

      <div class="reviews-container">
        <div class="flex justify-between">
          <div class="flex">
            <div class="reviews-avatar mr-3"></div>
            <div class="text-xl font-semibold">Reviews</div>
          </div>
          <div class="flex items-center">
            <span class="mr-3 text-sm">Sort by</span>
            <select class="select-sort h-10 inline">
              <option class="text-ideeza">Rating</option>
              <option>Newest</option>
              <option>Oldest</option>
              <option>Relevant</option>
            </select>
          </div>
        </div>
        <div class="mt-3 flex justify-between">
          <div class="flex">
            <div class="reviews-avatar mr-3">
              <img class="rounded-full" src="https://randomuser.me/api/portraits/men/18.jpg" />
            </div>
            <div class>
              <div class="flex justify-between">
                <div class="text-lg font-semibold">
                  Someone
                  <font-awesome-icon
                    class="lg:ml-5 lg:mr-2 h-4 text-yellow-600"
                    :icon="['fas', 'star']"
                  />5.0
                </div>
                <div class="text-lg font-semibold text-gray-500">3d ago</div>
              </div>

              <div
                class="text-sm"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat orci magna, vel mollis</div>
            </div>
          </div>
        </div>
        <div class="mt-3 flex justify-between">
          <div class="flex">
            <div class="reviews-avatar mr-3">
              <img class="rounded-full" src="https://randomuser.me/api/portraits/men/18.jpg" />
            </div>
            <div class>
              <div class="flex justify-between">
                <div class="text-lg font-semibold">
                  Someone
                  <font-awesome-icon
                    class="lg:ml-5 lg:mr-2 h-4 text-yellow-600"
                    :icon="['fas', 'star']"
                  />5.0
                </div>
                <div class="text-lg font-semibold text-gray-500">3d ago</div>
              </div>

              <div
                class="text-sm"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat orci magna, vel mollis</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from "~/components/form/search.vue";
export default {
  middleware: "auth",
  name: "services",
  mounted() {
    this.$store.commit("cartstepper/set", { position: 10 });
  },
  components: {
    SearchInput
  }
};
</script>

<style scoped>
.avatar {
  width: 98px;
  height: 98px;
  max-width: fit-content;
}
.reviews-container {
  width: 100%;
  max-width: 350px;
}
.reviews-avatar {
  width: 45px;
  height: 45px;
  max-width: fit-content;
}
.reviews-avatar img {
  width: 45px;
  height: 45px;
  max-width: fit-content;
}
.select-sort option {
  @apply text-gray-500 text-sm px-3 outline-none;
}
.select-sort option:checked {
  @apply text-ideeza;
}
</style>
