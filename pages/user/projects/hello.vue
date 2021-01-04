<template>
    <h1>hello</h1>
</template>

<script>
import LeftMenu from "~/components/user/common-left-side-menu.vue";
import Projects from "../../../data/UserProjectApi.json";

export default {
  middleware: "auth",
  layout: "user",
  name: "projects-hello"
}
</script>
