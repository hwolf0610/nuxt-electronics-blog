<template>
  <div class="shadow-md">
    <div class="w-full ">
      <div class="bg-white p-5 flex items-center" >
        <div class="flex items-center mr-5">
          <span class="mr-2">File name </span>
          <input placeholder="e.g filename.js" class="w-40 bg-white border border-solid border-gray-300 text-sm p-1 ">
        </div>
        <div class="flex items-center mr-5">
          <span class="mr-2">Language </span>
          <select v-model="selectedLanguage" @change="languageChange"  class="language-select">
            <option  value="sh" >
            Bash
          </option><option selected  value="c_cpp" >
            C
          </option><option  value="c_cpp" >
            C++
          </option><option  value="clojure" >
            Clojure
          </option><option  value="cobol" >
            Cobol
          </option><option  value="coffee" >
            CoffeeScript
          </option><option  value="d" >
            D
          </option><option  value="elixir" >
            Elixir
          </option><option  value="erlang" >
            Erlang
          </option><option  value="fsharp" >
            F#
          </option><option  value="golang" >
            Go
          </option><option  value="haskell" >
            Haskell
          </option><option  value="java" >
            Java
          </option><option  value="javascript" >
            Javascript
          </option><option  value="kotlin" >
            Kotlin
          </option><option  value="mysql" >
            MySQL
          </option><option  value="perl" >
            Perl
          </option><option  value="php" >
            PHP
          </option>
            <option  value="python" >
              Python
            </option>
            <option  value="r" >
            R
          </option><option  value="ruby" >
            Ruby
          </option><option  value="rust" >
            Rust
          </option><option  value="scala" >
            Scala
          </option><option  value="scheme" >
            Scheme
          </option><option  value="swift" >
            Swift
          </option><option  value="vbscript" >
            VB
          </option>
          </select>
        </div>
        <button class="btn pill-button px-5 mr-5">Upload Code</button>
        <button class="btn pill-button px-5 mr-5">Upload Image</button>
        <button class="btn pill-button px-5">Run</button>
      </div>
    </div>
    <div>
      <div class="code-container relative w-full bg-black py-5">
        <div id="editor"></div>
      </div>


    </div>


  </div>
</template>

<script>
    import  DropDownField from '~/components/form/dropdown-field.vue'
    export default {
        name: "add-code",
        components: {
            DropDownField
        },
        data: function () {
            return {
              editor: null,
              contents: null,
              selectedLanguage: 'c_cpp'
            }
        },
      mounted() {
        this.editor = ace.edit("editor", {
          selectionStyle: "text"
        });
        this.languageChange();
        this.setEditorTheme();
      },
        methods: {
          languageChange() {
              this.editor.session.setMode('ace/mode/'+this.selectedLanguage);
          },
          setEditorTheme() {
            this.editor.setTheme('ace/theme/monokai');
          },
          getEditorContents(){
            return this.editor.getValue();
          },
          setEditorContents(contents) {
            this.editor.getValue(contents);
          }
        }
    }
</script>

<style>
  .code-container{
    height: 300px;
  }
  #editor {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    word-spacing: normal;
    font-size: 14px;
  }


</style>
