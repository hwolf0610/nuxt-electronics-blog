<template>
  <div class="main-contents">
    <h1 class="text-xl text-gray-800 font-semibold border-b heading-border pb-3">View</h1>
    <!-- {{$route.query.id}} -->
    <div class="p-0 lg:py-10 lg:pl-10">
      <div class="lg:flex justify-between items-center lg:mb-10">
        <nuxt-link
          to="/technician/management/blogs"
          class="btn btn-normal btn--ideeza-dark px-10 py-4 block lg:inline-block"
        >Back</nuxt-link>
      </div>
      <!--Blog Preview-->
      <div class="lg:flex" v-for="descrition in articleArray">
      <div   v-if="descrition.id == $route.query.id">
        <div class="lg:flex">
          <div class="blog-image-container mt-5 lg:mt-0 lg:mr-10">
            <img class="w-full" :src=" blog_img_url + descrition.postimage" />
          </div>
          <div>
            <div class="lg:flex flex-wrap items-center mt-5 lg:mt-0">
              <h1
                class="lg:text-5xl font-semibold text-gray-800 lg:mr-2 leading-none"
              >{{descrition.category}}  </h1>
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
              <span class="text-gray-800 font-semibold text-xl">{{descrition.article}}  </span>
            </div>

            <p class="text-base lg:text-lg">
              {{descrition.description}}  
              <!-- -{{$route.query.id }} -->
            </p>
          </div>
          </div>
        </div>
      </div>

      <!-- <p>{{$route.query.id }}</p>
        <p>{{this.$store.state.userBlogStore.ArticlesName }}</p>
        <p>{{this.$store.state.userBlogStore.CategoryName }}</p>
        <p>{{this.$store.state.userBlogStore.DescriptionName }}</p>
        <p>{{this.$store.state.userBlogStore.Imagename }}</p>
        <p>
          <img :src="this.$store.state.userBlogStore.Imageurl" />
      </p>-->

    </div>
  </div>
</template>

<script>
import axios from "axios";
import apiService from "~/apiService";

// import articles from "~/data/BlogApi.json";
export default {
  middleware: "auth",
  name: "blog-view",
  data: function() {
    return {
      // articles: articles,
            geturl: "/api/get_blogs",
      articleArray: [],
      randomNumber: {},
      blog_img_url:process.env.blog_post_url,

    };
  },
  created: function() {
    
    let sendData = {
      method: "get",
      url: this.geturl,
      data: null
    };

    apiService(sendData, response => {
      console.log(response.data);
        this.randomNumber = response.data;
        this.articleArray = Object.values(response.data.data);
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
