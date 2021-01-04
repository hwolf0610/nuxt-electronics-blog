<template>
<div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
  <LeftMenu />
  <div class="main-contents">
    <div class="flex-grow mb-20">
      <div class="md:w-full">
        <div class="p-10 border rounded border-ideeza bg-white mb-3">

      <h1 class="text-xl text-ideeza font-semibold border-b heading-border pb-3">Adding News</h1>

      <div class="field-container mt-10">
        <div class="text-sm text-ideeza-dark font-semibold mb-2">Add Date</div>
        <vc-calendar class="mx-auto mt-5" color="pink" is-expanded :theme="theme" />
      </div>

      <div class="flex">
        <div class="mt-10 md:w-1/2 mr-5">
          <div class="text-sm text-ideeza-dark font-semibold mb-2">Description for Development</div>
          <text-area placeholder="description" class="ideeza-textarea" rows="5" />
        </div>
        <div class="field-container mt-10 md:w-1/2">
          <div class="text-lg text-gray-800 mb-2">Image</div>
          <file-field  />
        </div>
      </div>

      <div class="flex">
        <div class="mt-10 md:w-1/2 mr-5">
          <div class="text-sm text-ideeza-dark font-semibold mb-2">Description For Marketing</div>
          <text-area placeholder="description" class="ideeza-textarea" rows="5" />
        </div>
        <div class="field-container mt-10 md:w-1/2">
          <div class="text-lg text-gray-800 mb-2">Image</div>
          <file-field  />
        </div>
      </div>

      <div class="flex">
        <div class="mt-10 md:w-1/2 mr-5">
          <div class="text-sm text-ideeza-dark font-semibold mb-2">Description for Financial</div>
          <text-area placeholder="description" class="ideeza-textarea" rows="5" />
        </div>
        <div class="field-container mt-10 md:w-1/2">
          <div class="text-lg text-gray-800 mb-2">Image</div>
          <file-field  />
        </div>
      </div>

      <div class="flex">
        <div class="mt-10 md:w-1/2 mr-5">
          <div class="text-sm text-ideeza-dark font-semibold mb-2">Description for Management</div>
          <text-area placeholder="description" class="ideeza-textarea" rows="5" />
        </div>
        <div class="field-container mt-10 md:w-1/2">
          <div class="text-lg text-gray-800 mb-2">Image</div>
          <file-field  />
        </div>
      </div>

      <div class="mt-12 text-center lg:text-left">
        <button class="btn btn-normal btn--ideeza mr-5 py-4 px-10 text-lg">Publish</button>
      </div>

      </div>
      </div>
    </div>

  </div>
</div>
</template>

<script>
  import LeftMenu from '~/components/admin/common-left-side-menu.vue'
  import TextField from '~/components/form/text-field.vue'
  import TextArea from '~/components/form/text-area.vue'
  import CategoryField from '~/components/form/category-field.vue'
  import FileField from '~/components/form/file-field.vue'
    export default {
      layout: 'admin',
      name: "add-blog",
      components: {
        'LeftMenu': LeftMenu,
        'text-field': TextField,
        'text-area': TextArea,
        'category-field': CategoryField,
        'file-field': FileField
      },
      data: function () {
      return {
        showMyIdeeza: false,
      }
    },
    methods: {
      selectall(value) {
        if (value == true) {
          this.users.forEach(element => {
            element.selected = true
          });
        } else {
          this.users.forEach(element => {
            element.selected = false
          });
        }
        this.$forceUpdate()
      }
    },
    computed: {
      leftMenu() {
        return this.$store.state.usermenu.openLeftMenu;
      }
    },
    }
</script>

<style>
  .blog-container{
    width: 100%;
    max-width: 1530px;
    padding: 20px 5px;
  }
  .field-container{
    width: 100%;
    max-width: 375px;
  }
  .textarea{
    width: 100%;
    max-width: 700px;
  }
  .ideeza-textarea textarea {
    border: 1px solid #431184;
    border-radius: 0.25rem;
  }
  .file-select .btn--ideeza{
    background-color: #431184;
    color: #fff;
    border-color: #431184;
  }

  @screen lg {
    .blog-container {
      padding: 60px 50px;
    }

  }
</style>
