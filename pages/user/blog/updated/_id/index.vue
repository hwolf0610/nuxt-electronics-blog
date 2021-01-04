<template>
    <div class="main-contents">
        <div class="bg-white rounded border-ideeza border shadow p-4">
            <nuxt-link to="/user/blog/updated" class="float-right py-1 px-2 border border-ideeza rounded text-ideeza text-sm">Go Back</nuxt-link>
            <div class="text-ideeza font-bold text-sm mb-5">Article Preview</div>
            <div class="md:flex">
                <div class="flex-1 mr-4">
                    <img src="~/static/images/blog-image.png" alt="blog-image" class="w-full mb-3">
                    <div class="text-gray-700">Jul 19, 2019 <span class="cirlce"></span> 5 mins read</div>
                </div>
                <div class="flex-1 ml-4">
                    <div class="text-2xl my-1 text-black font-bold">
                        Making electro cup
                    </div>
                    <div class="ratings">
                        <font-awesome-icon class="mr-1 text-ideeza-gold" :icon="['fas', 'star']" />
                        <font-awesome-icon class="mr-1 text-ideeza-gold" :icon="['fas', 'star']" />
                        <font-awesome-icon class="mr-1 text-ideeza-gold" :icon="['fas', 'star']" />
                        <font-awesome-icon class="mr-1 text-black" :icon="['fas', 'star']" />
                        <font-awesome-icon class="mr-1 text-black" :icon="['fas', 'star']" />
                        Comments (3)
                    </div>
                    <nuxt-link to="/user/profile" class="flex items-center my-2">
                        <img class="h-10 w-10 rounded-full mr-2 " src="https://randomuser.me/api/portraits/men/17.jpg">
                        <span class="text-black inline-block">John Doe</span>
                    </nuxt-link>
                    <p class="leading-loose text-black">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis unde placeat reprehenderit odit culpa explicabo deleniti incidunt nisi esse? Molestiae maxime porro facere distinctio harum exercitationem eos ut eveniet tempora! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam quisquam ipsa facilis, architecto, necessitatibus sint iusto nostrum odit excepturi laborum quam dignissimos officia adipisci ullam alias, quod laudantium neque dolorum.</p>
                </div>
            </div>
        </div>
        <MyIdeeza v-click-outside="onClickOutside" v-if="showMyIdeeza" />
    </div>
</template>
<script>
import MyIdeeza from '~/components/user/my-ideeza/new-ideeza.vue'
export default {
    middleware: "auth",
    layout: 'user',
    components: {
        MyIdeeza
    },
    data() {
        return {
            showMyIdeeza: false
        }
    }
}
</script>
<style>
.cirlce{
    background: gray;
    width: 4px;
    height: 4px;
    border-radius: 9999px;
    display: inline-block;
    vertical-align: middle;
    margin: 0 3px;
}
</style>