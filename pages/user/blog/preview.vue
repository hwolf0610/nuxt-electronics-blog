<template>
  <div class="main-contents">
    <h1 class="text-xl text-gray-800 font-semibold border-b heading-border pb-3">Preview</h1>
{{$route.query.id}}
    <div class="p-0 lg:py-10 lg:pl-10">
      <div class="lg:flex justify-between items-center lg:mb-10">
        <nuxt-link
          to="/user/blog/list"
          class="btn btn-normal btn--ideeza-dark px-10 py-4 block lg:inline-block"
        >Back</nuxt-link>
      </div>
      
      <!-- Add preview -->

      <div class="lg:flex" v-if="this.$store.state.userBlogStore.viewflag == 1 ">&nbsp;
       
        <!--Blog Preview-->
      <div class="lg:flex" v-for="descrition in articleArray" >
        <div class="lg:flex" >
          <div class="blog-image-container mt-5 lg:mt-0 lg:mr-10">
            <img class="w-full" :src="descrition.postimage" />
          </div>
          <div>
            <div class="lg:flex flex-wrap items-center mt-5 lg:mt-0">
              <h1
                class="lg:text-5xl font-semibold text-gray-800 lg:mr-2 leading-none"
              >{{descrition.category}}</h1>
            </div>
            <div class="lg:my-10 my-3 flex items-center">
              <div v-for="index in  descrition.rating" :key="index">
                <font-awesome-icon
                  class="mr-1 h-10 lg:text-2xl cursor-pointer text-yellow-600"
                  :icon="['fas', 'star']"
                />
              </div>
              Comment({{descrition.rating}})
            </div>
            <div class="lg:my-10 my-3 flex items-center">
              <!-- <img class="h-12 w-12 mr-5 rounded-full" :src="descrition.profileimage" /> -->
              <span class="text-gray-800 font-semibold text-xl">{{descrition.article}}</span>
            </div>

            <p class="text-base lg:text-lg">
              {{descrition.description}}
              <!-- -{{$route.query.id }} -->
            </p>
          </div>
        </div>
      </div>

      </div>
      <div v-else-if="this.$store.state.userBlogStore.viewflag == 2" class="lg:flex">
        <div class="blog-image-container mt-5 lg:mt-0 lg:mr-10">
          <img class="w-full" src="~/static/images/blog-image.png" />
        </div>
        <div>
          <div class="lg:flex flex-wrap items-center mt-5 lg:mt-0">
            <h1
              class="lg:text-5xl font-semibold text-gray-800 lg:mr-2 leading-none"
            > {{window.$nuxt.$cookies.get("blogcategoryna")}}</h1>
            <!-- {{this.$store.state.userBlogStore.viewflag}} -->
          </div>

          <div class="lg:my-10 my-3 flex items-center">
            <img
              class="h-12 w-12 mr-5 rounded-full"
              src="https://randomuser.me/api/portraits/women/14.jpg"
            />
            <span
              class="text-gray-800 font-semibold text-xl"
            > {{window.$nuxt.$cookies.get("blogarticlename")}}</span>
          </div>

          <p class="text-base lg:text-lg">
             {{window.$nuxt.$cookies.get("blogdescriptionNameChange")}}
            <!-- -{{$route.query.id }} -->
          </p>
        </div>

        <!-- <p>{{$route.query.id }}</p>
        <p>{{this.$store.state.userBlogStore.ArticlesName }}</p>
        <p>{{this.$store.state.userBlogStore.CategoryName }}</p>
        <p>{{this.$store.state.userBlogStore.DescriptionName }}</p>
        <p>{{this.$store.state.userBlogStore.Imagename }}</p>
        <p>
          <img :src="this.$store.state.userBlogStore.Imageurl" />
        </p> -->

         <ul>
      <li v-for="info in articleArray">
        --{{info.article}}--{{info.category}}--{{info.description}}--{{info.postimage}}--{{info.rating}} 
        <br />
      </li>
      {{base_url}}
      {{articleArray}}
    </ul>
sdf

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import articles from "~/data/BlogApi.json";
export default {
  middleware: "auth",
  name: "blog-preview",
  data: function() {
    return {
      articles: articles,
      size: "1"
    };
  },
  created:function(){
    let geturl = this.base_url + "/api/view_blog";
    var bodyFormData = new FormData();
    bodyFormData.set('id', this.$route.query.id);
    axios({
      method: "get",
      headers: {'Content-Type': 'multipart/form-data', 'Authorization':'eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjI0NDI3MTk4MzQsImlhdCI6MTU3ODcxOTgzNCwianRpIjoibzVmOThvZGwtU2UwQXZWR0pJSXVMQSIsIm5iZiI6MTU3ODcxOTgzNCwidXNlcmlkIjoiZmU1MDVhNjEtNzQ3ZS00MzJhLWE5ODQtNjdhNTc2NDQxYzFjIn0.LjQq_-Ckl92HCfKo5_e7UfPOEr7sCQiKTp8Vgr02qgx2sfRCnE46de8WoVtrZkOPc60if0QH5ruF5PeyhS1aiaWgXfXHcj7xOkIFm4G1pyHTrgqDBS1p2yUgCRIHNWKgRBQGW1BR-K_C9kx6iYvdwQxAqXIZdSoQhlvfs4d2eQSbOfno4FnGfx4L6QbC_VfK2vAVlhiaFmnwmjwRVf2UUqLwtJB14ITzmWg4fm9AiclJ0FYffX0v9CCz_dpLfbiYZmfLyFzRrDQNidFiMKQKDozRg3KA17hbB-9gcavIEoGnWoUks7yZw8ncGGfwD6Cx7Zwie-GIB5r39IBRPgQXyg' },
      data :bodyFormData,
      url: geturl
    })
      .then(response => {
        //handle success
        console.log(response.data);
        this.randomNumber = response.data;

        this.articleArray = Object.values(response.data.data);
        // this.articleArray = onlyarticleArray[0];
 
      })
      .catch(error => {
        //handle error
        console.log(error);
      });
  }
};

// export default {
//     name: "blog-view"
// }
</script>

<style scoped>
.blog-container {
  width: 100%;
  max-width: 1530px;
  padding: 20px 5px;
}
.blog-image-container {
  width: 100%;
  max-width: 520px;
}

@screen lg {
  .blog-container {
    padding: 60px 50px;
  }
}
</style>
