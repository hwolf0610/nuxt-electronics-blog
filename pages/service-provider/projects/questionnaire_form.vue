<template>
	<div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
     
     <LeftMenu/>

  <div class="w-full px-4 bg-white shadow">
    <div class="py-4 mt-10">
      <nuxt-link to="" class="float-left px-5 py-3 border text-pink-800 border-pink-800 rounded">Go Back</nuxt-link>

      <nuxt-link to="" class="float-right  text-white px-10 py-4 bg-ideeza rounded">
         Massege lowyer
      </nuxt-link>

    </div>
    <div class="w-full flex  mx-auto mt-5 mb-10">
       
      <div class="w-6/12">
      <!--Form Container-->
      
      <div class="mb-6 px-3">
        <!--Form Fields-->
        <h2 class="text-2xl  text-ideeza py-4">Questionnaire</h2>
        <div class="py-2">
          <input type="checkbox" class="border border-gray-400 h-8 px-2 inline-block align-middle"/>
          Use the same information from profile
        </div>

        <div class="py-2">
          <label class="mb-3 block  font-bold text-gray-800">Owner of mark</label>
          <input class="border border-gray-400 rounded w-full h-12 px-2" type="text" placeholder=""/>
        </div>

        <div class="py-2">
          <label class="mb-3 block  font-bold text-gray-800">Entity Type</label>
          <input type="radio" name="entitytype" value="male"> Individual<br>
          <input type="radio" name="entitytype" value="female"> Corporation<br>
          <input type="radio" name="entitytype" value="other"> Limited liability company <br>
          <input type="radio" name="entitytype" value="other"> Partnership<br>
          <input type="radio" name="entitytype" value="other"> Limited partnership<br>
          <input type="radio" name="entitytype" value="other"> Sole propietorship<br>
          <input type="radio" name="entitytype" value="other"> Trust<br>
          <input type="radio" name="entitytype" value="other"> Estate<br>
          <input type="radio" name="entitytype" value="other"> Other<br>
           
        </div>
         
        <div class="py-2">
          <label class="mb-3 block  font-bold text-gray-800">Street address</label>
          <input class="border border-gray-400 rounded w-full h-12 px-2" type="text" placeholder=""/>
        </div>

        <div class="py-2">
          <label class="mb-3 block  font-bold text-gray-800">State</label>
          <div class="relative">
            <select class="block text-lg appearance-none w-full bg-white border border-gray-400 rounded px-4 py-3 pr-8 leading-tight focus:outline-none ">
            <option>State</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>

        <div class="py-2">
          <label class="mb-3 block  font-bold text-gray-800">Country for US territory</label>
          <div class="relative">
            <select class="block text-lg appearance-none w-full bg-white border border-gray-400 rounded px-4 py-3 pr-8 leading-tight focus:outline-none ">
            <option>Country</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div> 

        <div class="py-2">
          <label class="mb-3 block  font-bold text-gray-800">Zip/postal code</label>
          <input class="border border-gray-400 rounded w-full h-12 px-2" type="text" placeholder=""/>
        </div>

        <div class="py-2">
          <label class="mb-3 block  font-bold text-gray-800">Phone number</label>
          <input class="border border-gray-400 rounded w-full h-12 px-2" type="text" placeholder=""/>
        </div>

        <div class="py-2">
          <label class="mb-3 block  font-bold text-gray-800">Fax number</label>
          <input class="border border-gray-400 rounded w-full h-12 px-2" type="text" placeholder=""/>
        </div>

        

        <h2 class="text-2xl  text-ideeza py-4">Applicant / Owner information</h2>
        <div class="py-2">
          <input type="checkbox" class="border border-gray-400 h-8 px-2 inline-block align-middle"/>
          Use the same information from profile
        </div>

        <div class="py-2">
          <label class="mb-3 block  font-bold text-gray-800">Name</label>
          <input class="border border-gray-400 rounded w-full h-12 px-2" type="text" placeholder=""/>
        </div>

        <div class="py-2">
          <label class="mb-3 block  font-bold text-gray-800">Designation</label>
          <input class="border border-gray-400 rounded w-full h-12 px-2" type="text" placeholder=""/>
        </div>
  
         
      </div>
    </div>
    <div class="w-6/12 px-4 pt-6">
        <div class="py-2">
          <label class="mb-3 block  font-bold text-gray-800">Email Address</label>
          <input class="border border-gray-400 rounded w-full h-12 px-2" type="text" placeholder=""/>
        </div>
        
        <div class="py-2">
          <input type="checkbox" class="border border-gray-400 h-8 px-2 inline-block align-middle"/>
          Use the same information from profile
        </div>

        <div class="py-2">
          <label class="mb-3 block  font-bold text-gray-800">Website address</label>          
          <input class="border border-gray-400 rounded w-full h-12 px-2" type="text" placeholder=""/>
        </div>

        <h2 class="text-2xl  text-ideeza py-4">Mark information</h2>
 

        <div class="py-2">
          <label class="mb-3 block font-bold text-gray-800">Mark</label>          
          <input class="border border-gray-400 rounded w-full h-12 px-2" type="text" placeholder=""/>
        </div>

        <div class="py-2">
          <label class="mb-3 block font-bold text-gray-800">Logo (if any)</label> 
           <input type="file" name="myFile" value="Upload" class="border border-gray-400 rounded  custom-file-input w-full pl-3">
        </div>

        <div class="py-2">
          <div class="">
            <div class="flex"><span class="inline-block font-bold">Googs & Services</span>
              <div class="relative inline-block mx-3 ToolTipIcon align-middle">
                <img src="~/static/images/questionnaire-tip-icon.png" class=" ">
                <div class="absolute bg-white shadow rounded p-5 ToolTip right-0 botton-0">
                  <p class="text-ideeza">Please provide date of first use of mark in commerce and first use anywhere. If you are intended to use the mark in future. Then you don’t need to provide above dates. </p>
                </div>
              </div>
            </div>
            <textarea class="border border-gray-400 rounded w-full h-32 px-2 mt-6" type="text" placeholder="Write here..."  />
          </div>
        </div>

        <div class="py-2">
          <label class="mb-3 block font-bold text-gray-800">First use in ecommerce</label> 
           <textarea class="border border-gray-400 rounded w-full h-32 px-2 mt-6" type="text" placeholder="Write here..."  />
        </div>
         

        <div class="py-2">
          <div class="">
            <div class="flex"><span class="inline-block font-bold">First use in anywhere</span>
              <div class="relative inline-block mx-3 ToolTipIcon align-middle">
                <img src="~/static/images/questionnaire-tip-icon.png" class=" ">
                <div class="absolute bg-white shadow rounded p-5 ToolTip right-0 botton-0">
                  <p class="text-ideeza">Please provide date of first use of mark in commerce and first use anywhere. If you are intended to use the mark in future. Then you don’t need to provide above dates. </p>
                </div>
              </div>
            </div>
            <textarea class="border border-gray-400 rounded w-full h-32 px-2 mt-6" type="text" placeholder="Write here..."  />
          </div>
        </div>

        <div class="py-2">
          <div class="">
            <div class="flex"><span class="inline-block font-bold">First use in anywhere</span>
              <div class="relative inline-block mx-3 ToolTipIcon align-middle">
                <img src="~/static/images/questionnaire-tip-icon.png" class=" ">
                <div class="absolute bg-white shadow rounded p-5 ToolTip right-0 botton-0">
                  <p class="text-ideeza">Please provide date of first use of mark in commerce and first use anywhere. If you are intended to use the mark in future. Then you don’t need to provide above dates. </p>
                </div>
              </div>
            </div>
            <textarea class="border border-gray-400 rounded w-full h-32 px-2 mt-6" type="text" placeholder="Write here..."  />
          </div>
        </div>

    </div>

    

    </div>
    <div class="text-right py-6">
      
      <nuxt-link to="" class="mx-3 text-gray-800 px-10 py-4 bg-white border rounded mt-5">
         Cancle
      </nuxt-link>
      <nuxt-link to="" class="mx-3 text-white px-10 py-4 bg-ideeza rounded mt-5">
         Send
      </nuxt-link>
    </div>

    </div>
  
  </div>
  </div>
</template>
  <script>

    import LeftMenu from '~/components/technician/common-left-side-menu.vue'
    import AddCode from '~/components/technician/add-code.vue'

    export default {
        layout: 'technician',
        name: "code-index",
        components: {
            LeftMenu,
            AddCode
        },

        computed: {
            leftMenu() {
                return this.$store.state.usermenu.openLeftMenu;
            }
        },
        mounted() {

        },

    }
</script>
<style scoped>
select{
      max-width: none;
}
.ToolTip{
  display:none;
  width:450px;
}
.ToolTipIcon:hover .ToolTip{ 
  display:block;
}

.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}
.custom-file-input::before {
  content: 'upload';
  display: inline-block;
  color: #fff;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  margin-top: 0px;
  background: #fc00c5;
  padding: 10px 15px;
  border-radius: 3px;
  float: right;
}
.custom-file-input:hover::before {
  border-color: black;
}
.custom-file-input:active::before {
  background: #fff;
}
</style>
