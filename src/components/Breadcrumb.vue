<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in router" :key="item.name">{{item.name}}</el-breadcrumb-item>
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
      this.$route.matched[0].name = "首页";
      this.router = this.$route.matched;
      console.log(this.$route);
    }
  },
  mounted() {
    this.$route.matched[0].name = "首页";
    this.router = this.$route.matched;
  }
};
</script>
