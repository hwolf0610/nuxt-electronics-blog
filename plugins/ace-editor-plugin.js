import Vue from 'vue'
import AceEditor from 'vue2-ace-editor'


require('brace/ext/beautify')
require('brace/ext/language_tools')


require('brace/mode/sh')
require('brace/mode/c_cpp')
require('brace/mode/clojure')
require('brace/mode/cobol')
require('brace/mode/coffee')
require('brace/mode/d')
require('brace/mode/elixir')
require('brace/mode/erlang')
require('brace/mode/golang')
require('brace/mode/haskell')
require('brace/mode/java')
require('brace/mode/kotlin')
require('brace/mode/mysql')
require('brace/mode/javascript')
require('brace/mode/perl')
require('brace/mode/php')
require('brace/mode/python')
require('brace/mode/r')
require('brace/mode/ruby')
require('brace/mode/rust')
require('brace/mode/scala')
require('brace/mode/scheme')
require('brace/mode/swift')
require('brace/mode/vbscript')

require('brace/theme/monokai')

require('brace/snippets/javascript')

Vue.use('ace-editor',AceEditor);
