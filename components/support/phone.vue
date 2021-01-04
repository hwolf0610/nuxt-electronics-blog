<template>
  <div class="phone-support lg:flex flex-wrap justify-center">
    
      <div class="lg:w-1/3 mt-10"  v-for="Project in Projects" :key="Project"> 
        <!-- <img :src="Project.mapimage" class="object-cover object-center w-full" alt /> -->
        <img src="~/static/images/map.png" class="object-cover object-center w-full" alt />
      </div>
      <div class="lg:w-1/3 lg:px-5 mt-10"  v-for="Project in Projects" :key="Project">
        <!-- <img :src="Project.cityimage" class="object-cover object-center w-full h-full" alt /> -->
        <img src="~/static/images/city.png" class="object-cover object-center w-full h-full" alt />
      </div>
      <div class="lg:w-1/3 mt-10"  v-for="Project in Projects" :key="Project">
        <h1 class="text-xl lg:text-4xl font-semibold">City name {{Project.Cityname}}</h1>
        <div class="my-10 text-lg text-ideeza font-semibold">{{Project.phoneNumber}}</div>
        <div class="text-gray-700 leading-loose">
          {{Project.info1}},
          <br />
          {{Project.info2}},
          <br />
          {{Project.info3}}
          <br />
          {{Project.info4}}
        </div>
        <div class="mt-20 flex items-center cursor-pointer">
          <span class="font-semibold text-2xl inline-block">Get directions</span>
          <font-awesome-icon
            class="text-ideeza ml-5 h-4 inline-block"
            :icon="['fas', 'chevron-right']"
          />
        </div>
      </div>
    
  </div>
</template>

<script>
import Projects from "~/data/UserContactSupport.json";

export default {
  name: "phone",
  data: function() {
    return {
      Projects: Projects.Admin_info
    };
  }
};
</script>

<style scoped>
.phone-support {
  width: 100%;
}
</style>
