<template>
    <div class="relative w-full code-container bg-black py-5">
      <div id="editor"></div>
    </div>
</template>

<script>

    export default {
        name: "add-code-2",
      data: () => {
        return {
          content: '<h1>hello</h1>',
          editor: null
        }
      },

      mounted() {
        this.editor = ace.edit("editor", {
          mode: "ace/mode/javascript",
          selectionStyle: "text"
        });
      },
      methods: {

      }
    }
</script>

<style scoped>



</style>
