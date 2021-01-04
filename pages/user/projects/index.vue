<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="flex-grow">
      <div class="main-contents">
        <div class="projects-container">
          <div class="lg:flex justify-between items-center pb-3">
            <h1 class="text-xl text-gray-800 font-semibold">My projects</h1>
          </div>

          <div class="lg:flex flex-wrap">
            <template v-for="(info,index) in articleArray">
            <div v-if="index==1" :key="index" class="w-32p project-item-container w-full shadow border border-solid border-light-gray mt-12 relative">
              <carousel per-page="1">
                <slide v-for="n in info.products.length+1 " :key="'d'+n">
                  <nuxt-link :to="{ path: '/user/projects/detail', query: { id: info.project_id}}">
                  <div class="image-container">
                    <img class="project-item-container--image" :src="project_img_url + info.products[0].product_image" alt />asdf
                  </div>
                  <div class="flex justify-between items-center text-xs text-ideeza-black mt-5">
                    <div class="flex items-center">
                      <font-awesome-icon class="mr-2 h-4 text-ideeza-gold" :icon="['fas', 'star']" />
                      <span>{{info.products[0].rating}}</span>
                    </div>
                    <span
                      class="font-semibold"
                    >{{info.products[0].like}} &nbsp; likes &nbsp; {{info.products[0].dislike}}&nbsp; dislikes </span>
                  </div>
                </nuxt-link>
                </slide>
              </carousel><br/>
              <div
                class="absolute p-5 rounded-lg border-light-gray border-solid border shadow-md z-50 hidden pop-over"
                
              >
                <div class="flex justify-between items-center">
                  <div class="flex items-center">
                    <h1 class="font-semibold text-lg">{{info.products[0].product_title}}</h1>
                    <span class="text-sm text-gray-600 ml-3">{{info.title}}</span>
                  </div>
                  <div class="font-semibold text-ideeza-black">{{info.products[0].cost}}</div>
                </div>
                <div class="text-sm mt-5">{{info.products[0].product_description}}</div>
              </div>
            </div>
            <div :key="index" v-else
              class="w-32p project-item-container w-full shadow border border-solid border-light-gray mt-12 relative"
            >
             <!-- v-if="Project.flag == 1" -->
              <nuxt-link :to="{ path: '/user/projects/detail', query: { id: info.project_id}}">
                <div class="image-container">
                  <img class="project-item-container--image" :src="project_img_url + info.products[0].product_image" alt />asdf
                </div>
                <div class="flex justify-between items-center text-xs text-ideeza-black mt-5">
                  <div class="flex items-center">
                    <font-awesome-icon class="mr-2 h-4 text-ideeza-gold" :icon="['fas', 'star']" />
                    <span>{{info.products[0].rating}}</span>
                  </div>
                  <span
                    class="font-semibold"
                  >{{info.products[0].like}} &nbsp; likes &nbsp; {{info.products[0].dislike}}&nbsp; dislikes </span>
                </div>
              </nuxt-link>

              <div
                class="absolute p-5 rounded-lg border-light-gray border-solid border shadow-md z-50 hidden pop-over"
              >
                <div class="flex justify-between items-center">
                  <div class="flex items-center">
                    <h1 class="font-semibold text-lg">{{info.products[0].product_title}}</h1>
                    <span class="text-sm text-gray-600 ml-3">{{info.title}}</span>
                  </div>
                  <div class="font-semibold text-ideeza-black">{{info.products[0].cost}}</div>
                </div>

                <div class="text-sm mt-5">{{info.products[0].product_description}}</div>
              </div>
            </div>
            </template>

            <!-- <div
              v-else
              class="w-64p double flex justify-between project-item-container w-full shadow border border-solid border-light-gray mt-12 relative"
            >
              <nuxt-link :to="{ path: '/user/projects/detail', query: { id: Project.id}}">
                <div class="image-container">
                  <img class="project-item-container--image" src="~/static/images/car-big.png" alt />
                </div>
                <div class="flex justify-between items-center text-xs text-ideeza-black mt-5">
                  <div class="flex items-center">
                    <font-awesome-icon class="mr-2 h-4 text-ideeza-gold" :icon="['fas', 'star']" />
                    <span>{{Project.mark.first}}</span>
                  </div>
                  <span
                    class="font-semibold"
                  >{{Project.commitmember1.first}} &nbsp; {{Project.commitkind1}}&nbsp; {{Project.commitmember2.first}}&nbsp; {{Project.commitkind2}}</span>
                </div>
              </nuxt-link>
              <nuxt-link
                :to="{ path: '/user/projects/detail', query: { id: Project.id}}"
                class="ml-5"
              >
                <div class="image-container">
                  <img class="project-item-container--image" src="~/static/images/car-big.png" alt />
                </div>
                <div class="flex justify-between items-center text-xs text-ideeza-black mt-5">
                  <div class="flex items-center">
                    <font-awesome-icon class="mr-2 h-4 text-ideeza-gold" :icon="['fas', 'star']" />
                    <span>{{Project.mark.second}}</span>
                  </div>
                  <span
                    class="font-semibold"
                  >{{Project.commitmember1.second}} &nbsp; {{Project.commitkind1}}&nbsp; {{Project.commitmember2.second}}&nbsp; {{Project.commitkind2}}</span>
                </div>
              </nuxt-link>

              <div
                class="absolute p-5 rounded-lg border-light-gray border-solid border hidden shadow-md z-50 bg-white pop-over"
              >
                <div class="flex justify-between items-center">
                  <div class="flex items-center">
                    <h1 class="font-semibold text-lg">{{Project.projectName.first}}</h1>
                    <span class="text-sm text-gray-600 ml-3">{{Project.projecttitle.first}}</span>
                  </div>
                  <div class="font-semibold text-ideeza-black">{{Project.Cost.first}}</div>
                </div>

                <div class="text-sm mt-5">{{Project.ShortDescription.first}}</div>

                <div class="flex justify-between items-center mt-10">
                  <div class="flex items-center">
                    <h1 class="font-semibold text-lg">{{Project.projectName.second}}</h1>
                    <span class="text-sm text-gray-600 ml-3">{{Project.projecttitle.first}}</span>
                  </div>
                  <div class="font-semibold text-ideeza-black">{{Project.Cost.second}}</div>
                </div>

                <div class="text-sm mt-5">{{Project.ShortDescription.second}}</div>
              </div>
            </div>-->
          </div>
        </div>
      </div>
    </div>

    <ul>
      <!-- <button @click="getRandomFromBackend" >asd</button>  -->
       <li v-for="(info,index) in articleArray">
        <!-- --{{info.products[0].product_image}}-{{info}}---{{info.products.length}}<br> -->
       <!-- {{iinfo.products.length}} -->
       <!-- {{info.products}} -->
        <span v-for="innf in info.products">
            {{innf.cost}}__<br/>

        </span>
        <br />
      
      </li>
      <!-- {{articleArray}}-------- -->
      <!-- {{pagerlength}} -->
    </ul>
  </div>
</template>

<script>
import LeftMenu from "~/components/user/common-left-side-menu.vue";
import Projects from "~/data/UserProjectApi.json";
import apiService from "~/apiService/have_token.js";

export default {
  middleware: "auth",
  layout: "user",
  name: "projects-index",
  data: function() {
    return {
      longview: true,
      Projects: Projects.firstproject,
      geturl: "/api/project/get_all",
      articleArray: [],
      randomNumber: {},
      project_img_url:process.env.project_image_url,     

    };
  },
  created: function() {
    
    // let authToken = window.$nuxt.$cookies.get("authToken");
    // let sendData = {
    //   method: "get",
    //   url: this.geturl,
    //   data: null,
    //   authToken: authToken
    // };
    // apiService(sendData, response => {
    //   console.log(response.data);
    //   this.randomNumber = response.data;
    //   this.articleArray = Object.values(response.data.data);
    // });
    // axios.get("http://127.0.0.1:5000/api/getblog").then(response => {
    //   // console.log("response :", response.data)
    //   this.randomNumber = response.data;
    //   console.log(this.randomNumber);
    // });
    // console.log(this.randomNumber);
  },
  components: {
    LeftMenu
  },
  computed: {
    leftMenu() {
      return this.$store.state.usermenu.openLeftMenu;
    }
  },
  mounted() {
    let sendData = {
      method: "get",
      url: this.geturl,
      data: null
    };

    apiService(sendData, response => {
      console.log(response.data);
      this.randomNumber = response.data;
      this.articleArray = Object.values(response.data.data);
      // this.articleArray.map(item=>{
      //   this.pagerlength=item.products.length
      // })
      
    });
  },
  methods: {}
};
</script>

<style scoped>
.projects-container {
  width: 100%;
}
.project-item-container {
  width: 100%;
}
.project-item-image {
  width: 100%;
  min-width: auto;
}
.w-45 {
  width: auto;
}
@screen lg {
  .projects-container {
    padding: 60px 50px;
  }
  .project-item-container {
    padding: 10px;
    max-width: 500px;
    margin-right: 10px;
  }

  .project-item-container.double {
    max-width: 1000px;
  }

  .double:before {
    @apply border border-solid border-ideeza;
    content: "";
    position: absolute;
    top: -4px;
    left: -4px;
    width: 101%;
    height: 102%;
  }

  .project-item-container--image {
    @apply object-center object-cover;
    height: 370px;
  }
  .pop-over {
    width: 500px;
    top: 70%;
    left: 20%;
    background: #f2eef6;
  }
  .project-item-container:hover .pop-over {
    @apply block;
  }
  .w-32p {
    width: 32%;
  }
  .w-64p {
    width: 64%;
    margin-left: 10px;
  }
}
.carousel-open:checked + .carousel-item {
				position: static;
				opacity: 100;
			}
			.carousel-item {
				-webkit-transition: opacity 0.6s ease-out;
				transition: opacity 0.6s ease-out;
			}
			#carousel-1:checked ~ .control-1,
			#carousel-2:checked ~ .control-2,
			#carousel-3:checked ~ .control-3 {
				display: block;
			}
			.carousel-indicators {
				list-style: none;
				margin: 0;
				padding: 0;
				position: absolute;
				bottom: 2%;
				left: 0;
				right: 0;
				text-align: center;
				z-index: 10;
			}
			#carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
			#carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
			#carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet {
				color: #2b6cb0;  /*Set to match the Tailwind colour you want the active one to be */
			}
</style>
