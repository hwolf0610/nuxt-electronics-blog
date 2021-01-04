<template>
    <div>
        <div :style="{'background-image':'url('+backgroundUrl+');'}" class="bg-pricing"></div>
        <nuxt />
    </div>
</template>
<script>
export default {
    data() {
        return{
             backgroundUrl:require('~/static/images/curve-bg-1.png')
        }
    }
}
</script>
