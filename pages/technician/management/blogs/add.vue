<template>
  <div class="main-contents">
    <h1 class="text-xl text-gray-800 font-semibold border-b heading-border pb-3">Add new article</h1>
    <div class="field-container mt-10">
      <div class="text-lg text-gray-800 mb-2">Article name</div>
      <!-- <text-field /> -->
      <input
        @change="articlename"
        placeholder
        class="w-full bg-white border border-solid border-gray-300 text-lg"
      />
    </div>
    <div class="field-container mt-10">
      <div class="text-lg text-gray-800 mb-2">Category</div>
      <!-- <category-field placeholder="category" /> -->
      <input
        @change="categoryname"
        placeholder="category"
        class="w-full bg-white border border-solid border-gray-300 text-lg"
      />
    </div>
    <div class="textarea mt-10">
      <div class="text-lg text-gray-800 mb-2">Description</div>
      <!-- <text-area placeholder="description" rows="7" /> -->
      <textarea
        placeholder="description"
        @change="descriptionNameChange"
        v-model="descriptionName"
        rows="10"
      ></textarea>
    </div>
    <div class="field-container mt-10">
      <div class="text-lg text-gray-800 mb-2">Image</div>
      <img id="image" />
      <!-- <input type="file" ref="file_preview" id="files" @change="previewimage" style="display:none"/> -->
      <form enctype="multipart/form-data">
        <!-- <file-field v-model="files" ref="file" id="file" @change="fileseleted"/> -->

        <input
          type="file"
          @change="fileseleted"
          ref="file_upload"
          class="btn btn-normal btn--ideeza px-10 py-4 block lg: iinline-block"
          style="display:none"
        />
        <!-- <button
       class="btn btn-normal btn--ideeza px-10 py-4 block lg: iinline-block"
        @click="$refs.file_upload.click()"
        >select</button>-->

        <!-- 
        <label class="file-select" :class="borderClass">
    <div class="flex items-center">
      <div class="btn px-3 py-2 text-xs mr-5" :class="btn">Choose</div>
      <div class="text-sm">
        <span class="text-gray-800" v-if="files">{{files}}</span>
        <span class="text-gray-400" v-else>No file choosen</span>
      </div>
    </div>
    <input type="file" @change="handleFileChange" />
        </label>-->
      </form>
    </div>

    <div class="mt-12 text-center lg:text-left">
      <button
        class="btn btn-normal btn--ideeza-dark py-4 px-10 text-lg"
        @click="$refs.file_upload.click()"
      >SelectImage</button>

      <button
        class="btn btn-normal btn--ideeza px-10 py-4 lg: iinline-block"
        @click="uploadUserBlog"
      >Publish</button>

      <!-- <nuxt-link :to="{ path: '/user/blog/view', query: { id: counter, name:ArticlesName}}"></nuxt-link>  -->

      <!-- {{this.$store.state.userBlogStore.viewflag }} -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import apiService from "~/apiService/have_token.js";

import articles from "~/data/BlogApi.json";
import TextField from "~/components/form/text-field.vue";
import TextArea from "~/components/form/text-area.vue";
import CategoryField from "~/components/form/category-field.vue";
import FileField from "~/components/form/file-field.vue";

export default {
  middleware: "auth",
  name: "add-blog",
  components: {
    "text-field": TextField,
    "text-area": TextArea,
    "category-field": CategoryField,
    "file-field": FileField
  },
  data: function() {
    return {
      articles: articles,
      counter: articles.length + 1,
      geturl: "/api/add_blog",
      file: null,
      articlena: "",
      categoryna: "",
      descripttionname2: "",
      selectedFile: null,
      images: [],
      image_fields: ["id", "name"],
      total_images: 1
    };
  },
  methods: {
    previewimage(evt) {
      var reader = new FileReader();
      reader.onload = function(e) {
        // get loaded data and render thumbnail.
        document.getElementById("image").src = e.target.result;
      };
      // read the image file as a data URL.
      reader.readAsDataURL(evt.target.files[0]);
    },
    fileseleted(evt) {
      var reader = new FileReader();
      reader.onload = function(e) {
        // get loaded data and render thumbnail.
        document.getElementById("image").src = e.target.result;
      };
      // read the image file as a data URL.
      reader.readAsDataURL(evt.target.files[0]);

      // this.file = this.$refs.file.files[0];
      console.log("file_upload:", evt);
      this.file = evt.target.files[0];
    },
    articlename(event) {
      this.articlena = event.target.value;
    },
    categoryname(event) {
      this.categoryna = event.target.value;
    },
    descriptionNameChange(event) {
      this.descripttionname2 = event.target.value;
    },
    // previewclick() {
    //   window.$nuxt.$cookies.set("blogarticlename", this.articlena);
    //   window.$nuxt.$cookies.set("blogcategoryna", this.articlena);
    //   window.$nuxt.$cookies.set("blogdescriptionNameChange", this.articlena);
    //   this.$router.push("/user/blog/preview?" + this.foobar);
    // },
    uploadUserBlog() {
      const formData = new FormData();
      formData.set("article", this.articlena);
      formData.set("category", this.categoryna);
      formData.set("description", this.descripttionname2);
      formData.append("image", this.file);
      let sendData = {
        method: "post",
        url: this.geturl,
        data: formData,
      };

      apiService(sendData, response => {
        console.log(response);
      });

      // // this.file = this.$refs.file.files[0];

      // var url = this.base_url + "/api/add_blog";
      // console.log("upload data", formData);
      // let tokenStr =
      //   "eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjI0NDI3NjgxMjYsImlhdCI6MTU3ODc2ODEyNiwianRpIjoiZm5NeFB2NlR3cVJPa2RlZVhFalRFQSIsIm5iZiI6MTU3ODc2ODEyNiwidXNlcmlkIjoiZmU1MDVhNjEtNzQ3ZS00MzJhLWE5ODQtNjdhNTc2NDQxYzFjIn0.TfJiSeX1deYBM_Cvf6wJSZQDG2vgitJ2DI8NwYKLn9gTvxMAKPjuyWmGWu_ZsxqgI1DgfkUZs5Ix8MQMRLh8ZKTc2IpLhH4icmsVdUdIGruLkvrNMFmdtXW_lpQuvIFi0Ge9TnLOra3akPv4RbjB9n6aFyTsFr7jvxL4S_CZJ1pwtknAVfaj3zkw32318HgOPfonuj62jBvujesp46uTHTyCnOrscTrBkbEFvdA_zlk563pGbudgqd3BhW2f64gZSnyhMGdp4ggdAvPDAk2fq1TYBLQ4aMtpqz4DbiIZD3_0XTyp6n_nzdhxdoy2k8Ve5ja-87zXI8YnxBH77Qgtjw";
      // axios({
      //   method: "post",
      //   url: url,
      //   data: formData,
      //   headers: { Authorization: `Bearer ${tokenStr}` }
      // })
      //   .then(function(response) {
      //     //handle success
      //     console.log(response);
      //   })
      //   .catch(error => {
      //     //handle error
      //     console.log(error);
      //   });

      // // alert(this.files);alert(articles.length + 1);
      // let articlesId = articles.length + 1;
      // let articlesName = this.$store.state.userBlogStore.ArticlesName;
      // let articlesCategory = this.$store.state.userBlogStore.CategoryName;
      // let articlesDescription = this.$store.state.userBlogStore.DescriptionName;
      // let articlesImageFile = this.files;
      // let body = {
      //   userid: articlesId,
      //   article: articlesName,
      //   category: articlesCategory,
      //   description: articlesDescription,
      //   image: articlesImageFile
      // };
      // console.log(body);
      // try {
      //   var url=this.base_url+"/api/add_blog"
      //   // await axios.post(url, body);

      //   await axios.post(this.base_url+"/api/add_blog", {headers: {"token": "Brearer user_login_token", "Content-Type": "application/json"},
      //               data: {
      //                 userid: articlesId,
      //   article: articlesName,
      //   category: articlesCategory,
      //   description: articlesDescription,
      //   image: articlesImageFile
      //               }}).then(response => {
      //                   // If request is good...
      //                   console.log(response.data);
      //                 })
      //                 .catch((error) => {
      //                   console.log('error 3 ' + error);
      //                 });

      //   console.log("Upload", body);
      // } catch (err) {
      //   console.log(err);
      //    console.log("Something went wrong!!!");
      // }

      //  alert(body);
      // axios.post('http://192.168.1.190:3003/todos/addplan', body)
    }
  }
};
</script>

<style scoped>
.blog-container {
  width: 100%;
  max-width: 1530px;
  padding: 20px 5px;
}
.field-container {
  width: 100%;
  max-width: 375px;
}
.textarea {
  width: 100%;
  max-width: 700px;
}

@screen lg {
  .blog-container {
    padding: 60px 50px;
  }
}

input {
  padding: 12px 24px;
}
.file-select {
  @apply block w-full bg-white border border-solid border-gray-300 text-lg p-2;
}
.file-select > .select-button {
  padding: 1rem;

  color: white;
  background-color: #2ea169;

  border-radius: 0.3rem;

  text-align: center;
  font-weight: bold;
}

.file-select > input[type="file"] {
  display: none;
}
</style>
