<template>
    <div>
      <!--Menu Items-->
      <div v-if="MenuItems">

          <div class="cursor-pointer  mb-3 flex relative content-center " @click="mainDropDownActive=!mainDropDownActive">
            <div class="relative block w-5" ><img :class="{'active': mainDropDownActive}" class="absolute-center-v main-arrow" src="https://img.icons8.com/ios-glyphs/11/ff00c7/chevron-right.png"></div>
            <div :class="{'text-ideeza': mainDropDownActive}" class="text-lg font-semibold">{{MenuItems.name}}</div>
          </div>
        <!--Sub Menu Items-->

          <div v-if="MenuItems.children" :class="{'border-b': mainDropDownActive}" class="pb-3 pt-3 border-t border-solid border-gray-300">
            <transition-group name="left-dropdown">
              <ul v-if="mainDropDownActive" :class="{active: mainDropDownActive}" v-for="(childItem, index) in MenuItems.children" :key="childItem.id"  class="sub-menu ml-3 text-gray-600 hover:text-black">
            <li class="cursor-pointer pb-3 flex relative content-center" @click="childItem.name = !childItem.isActive">
              <div v-if="childItem.children" class="relative block w-5" ><img v-bind:class="{'active': childItem.isActive}" class="absolute-center-v main-arrow" src="https://img.icons8.com/ios-glyphs/11/718096/chevron-right.png"></div>
              <div class="text-lg ">{{childItem.name}}</div>
            </li>
            <!--Sub Sub Menu Items-->
            <li v-if="childItem.children">
              <ul v-for="subChildItem in childItem.children" :key="subChildItem.id" class="sub-menu ml-3 text-gray-600">
                <li class="cursor-pointer pb-3 flex relative content-center">
                  <div v-if="subChildItem.children" class="relative block w-5" ><img class="absolute-center-v" src="https://img.icons8.com/ios-glyphs/11/718096/chevron-right.png"></div>
                  <div class="text-lg ">{{subChildItem.name}}</div>
                </li>
                <!--Sub Sub Sub Menu Items-->
                <li v-if="subChildItem.children">
                  <ul v-for="subSubChildItem in subChildItem.children" :key="subSubChildItem.id" class="sub-menu ml-3 text-gray-600">
                    <li class="cursor-pointer pb-3 flex relative content-center">
                      <div v-if="subSubChildItem.children" class="relative block w-5" ><img class="absolute-center-v" src="https://img.icons8.com/ios-glyphs/11/718096/chevron-right.png"></div>
                      <div class="text-lg ">{{subSubChildItem.name}}</div>
                    </li>
                    <!--Sub Sub Sub Sub Menu Items-->
                    <li v-if="subSubChildItem.children" class="cursor-pointer pb-3 flex relative content-center">
                      <ul v-for="subSubSubChildItem in subSubChildItem.children" :key="subSubSubChildItem.id" class="sub-menu ml-3 text-gray-600">
                        <li class="cursor-pointer pb-3 flex relative content-center">
                          <div v-if="subSubSubChildItem.children" class="relative block w-5" ><img class="absolute-center-v" src="https://img.icons8.com/ios-glyphs/11/718096/chevron-right.png"></div>
                          <div class="text-lg ">{{subSubSubChildItem.name}}</div>
                        </li>


                        <li v-if="subSubSubChildItem.children" class="cursor-pointer pb-3 flex relative content-center">
                          <ul v-for="lastItem in subSubSubChildItem.children" :key="lastItem.id" class="sub-menu ml-3 text-gray-600">
                            <li class="cursor-pointer pb-3 flex relative content-center">
                              <div class="text-lg ">{{lastItem.name}}</div>
                            </li>


                          </ul>


                        </li>

                      </ul>


                    </li>

                  </ul>
                </li>

              </ul>
            </li>
          </ul>
            </transition-group>
          </div>




      </div>
    </div>
</template>

<script>
  import _ from 'lodash';
    export default {
      name: "left-menu",
      props: ['MenuItems'],
      data: function () {
        return {
          mainDropDownActive: false,
          menuData: {},
          tempData: {}
        }
      },
      watch: {
        MenuItems: function(newVal, oldVal) { // watch it
          if(newVal !== oldVal) {
            this.mainDropDownActive = false;
          }
        }
      },
      methods: {
        changeState(item) {
          _.find(this.menuData.children, (obj) => {
            if(obj.id === item.id) {
              this.$set(obj, 'active', !obj.active);
              console.log(obj)
            }
          });
        },

        search(val) {
          this.tempData = this.MenuItems;

        }
      }
    }
</script>

<style scoped>
  .main-arrow{
    transition: all 0.4s;
  }
  .main-arrow.active{
    transform: rotate(90deg);
    margin-top: -5px;
  }
  .left-dropdown-enter-active,
  .left-dropdown-leave-active {
    transition: all 0.3s;
  }
  .left-dropdown-enter,
  .left-dropdown-leave-to {
    opacity: 0;
    transform: translateY(10px);
  }
</style>
