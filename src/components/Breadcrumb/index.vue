<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in router" :key="item.meta.title">{{item.meta.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      router: []
    };
  },
  watch: {
    $route(to, from) {
      this.$route.matched[0].meta.title = "首页";
      this.router = this.$route.matched;
    }
  },
  mounted() {
    this.$route.matched[0].meta.title = "首页";
    this.router = this.$route.matched;
  }
};
</script>
