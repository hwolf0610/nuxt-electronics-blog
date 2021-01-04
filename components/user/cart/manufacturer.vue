<template>
  <div class="fixed top-0 left-0 w-full h-full" >
    <div v-click-outside="onClickOutside" class="absolute-center-h-v w-11/12 h-11/12 bg-white shadow-lg border-solid border-gray-400 overflow-y-auto p-10">
      <div class="flex items-center justify-between pb-3 border-b-2 border-solid border-ideeza-dark">
        <span class="font-semibold text-xl">Manufacturers</span>
        <Search placeholder="search manufacturers" />
      </div>

      <div class="my-3 lg:flex justify-end">
        <button class="btn btn-normal btn--ideeza px-10 py-3">Optimize</button>
      </div>

      <!--Results-->
      <div class="my-3 font-semibold">Results (58)</div>

      <div class="mb-32 lg:mb-10 lg:flex">
        <div class="lg:flex lg:mr-20">
          <div class="mb-5 lg:mb-0 lg:mr-5">
            <img class="avatar rounded-full mx-auto"
                 src="https://picsum.photos/id/870/150/150?grayscale&blur=2">
          </div>
          <div>
            <div>
              <span class="text-xl font-semibold inline-block mr-5">He Someone</span>
              <button class="btn btn-normal btn--ideeza px-5 py-2">Available</button>
            </div>
            <div class="my-5 flex items-center">
              <span class="inline-block mr-5 font-semibold text-xl">Code</span>
              <span>
              <font-awesome-icon class="mr-1 h-5  text-yellow-600" :icon="['fas', 'star']"/>
              <font-awesome-icon class="mr-1 h-5   text-yellow-600" :icon="['fas', 'star']"/>
              <font-awesome-icon class="mr-1 h-5  text-yellow-600" :icon="['fas', 'star']"/>
              <font-awesome-icon class="mr-1 h-5  text-yellow-600" :icon="['fas', 'star']"/>
              <font-awesome-icon class="mr-1 h-5  text-yellow-600" :icon="['fas', 'star']"/>
            </span>
              <span class="ml-3">(5.0)</span>
            </div>
            <div class="font-semibold text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat orci magna, vel mollis purus consequat et. Proin consectetur odio nec varius placerat.
            </div>

          </div>
        </div>

        <div class="reviews-container">
          <div class=" flex justify-between">
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
                <img class="rounded-full"
                     src="https://randomuser.me/api/portraits/men/18.jpg">
              </div>
              <div class="">
                <div class="flex justify-between">
                  <div class="text-lg font-semibold">Someone <font-awesome-icon class="lg:ml-5 lg:mr-2 h-4  text-yellow-600" :icon="['fas', 'star']"/> 5.0</div>
                  <div class="text-lg font-semibold text-gray-500">
                    3d ago
                  </div>
                </div>

                <div class="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat orci magna, vel mollis
                </div>
              </div>

            </div>

          </div>
          <div class="mt-3 flex justify-between">
            <div class="flex">
              <div class="reviews-avatar mr-3">
                <img class="rounded-full"
                     src="https://randomuser.me/api/portraits/men/18.jpg">
              </div>
              <div class="">
                <div class="flex justify-between">
                  <div class="text-lg font-semibold">Someone <font-awesome-icon class="lg:ml-5 lg:mr-2 h-4  text-yellow-600" :icon="['fas', 'star']"/> 5.0</div>
                  <div class="text-lg font-semibold text-gray-500">
                    3d ago
                  </div>
                </div>

                <div class="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat orci magna, vel mollis
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      <div class="mb-10 lg:flex">
        <div class="lg:flex lg:mr-20">
          <div class="mr-5">
            <img class="avatar rounded-full"
                 src="https://picsum.photos/id/870/150/150?grayscale&blur=2">
          </div>
          <div>
            <div>
              <span class="text-xl font-semibold inline-block mr-5">He Someone</span>
              <button class="btn btn-normal btn--ideeza px-5 py-2">Available</button>
            </div>
            <div class="my-5 flex items-center">
              <span class="inline-block mr-5 font-semibold text-xl">Electric</span>
              <span>
              <font-awesome-icon class="mr-1 h-5  text-yellow-600" :icon="['fas', 'star']"/>
              <font-awesome-icon class="mr-1 h-5   text-yellow-600" :icon="['fas', 'star']"/>
              <font-awesome-icon class="mr-1 h-5  text-yellow-600" :icon="['fas', 'star']"/>
              <font-awesome-icon class="mr-1 h-5  text-yellow-600" :icon="['fas', 'star']"/>
              <font-awesome-icon class="mr-1 h-5  text-yellow-600" :icon="['fas', 'star']"/>
            </span>
              <span class="ml-3">(5.0)</span>
            </div>
            <div class="font-semibold text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat orci magna, vel mollis purus consequat et. Proin consectetur odio nec varius placerat.
            </div>

          </div>
        </div>

        <div class="reviews-container">
          <div class=" flex justify-between">
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
                <img class="rounded-full"
                     src="https://randomuser.me/api/portraits/men/18.jpg">
              </div>
              <div class="">
                <div class="flex justify-between">
                  <div class="text-lg font-semibold">Someone <font-awesome-icon class="lg:ml-5 lg:mr-2 h-4  text-yellow-600" :icon="['fas', 'star']"/> 5.0</div>
                  <div class="text-lg font-semibold text-gray-500">
                    3d ago
                  </div>
                </div>

                <div class="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat orci magna, vel mollis
                </div>
              </div>

            </div>

          </div>
          <div class="mt-3 flex justify-between">
            <div class="flex">
              <div class="reviews-avatar mr-3">
                <img class="rounded-full"
                     src="https://randomuser.me/api/portraits/men/18.jpg">
              </div>
              <div class="">
                <div class="flex justify-between">
                  <div class="text-lg font-semibold">Someone <font-awesome-icon class="lg:ml-5 lg:mr-2 h-4  text-yellow-600" :icon="['fas', 'star']"/> 5.0</div>
                  <div class="text-lg font-semibold text-gray-500">
                    3d ago
                  </div>
                </div>

                <div class="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat orci magna, vel mollis
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>


    </div>
  </div>

</template>

<script>
  import Search from '~/components/form/search.vue'
    export default {
        name: "cart-manufacturer",
      components: {Search},
      methods: {
        onClickOutside (event, el) {
          this.$emit('close');
        },
      }
    }
</script>

<style scoped>

</style>
