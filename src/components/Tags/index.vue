<template>
  <el-card class="box-card" :body-style="{ padding: '0px'}" shadow="never">
    <el-tag class="tag" v-for="tag in tags" :key="tag.name" color="#fff" closable type="danger">
      <router-link :to="tag.path" class="tag-a">{{tag.name}}</router-link>
    </el-tag>
  </el-card>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      tags: []
    };
  },
  watch: {
    $route(to, from) {
      this.router = this.$route.matched;
      if (this.tags.indexOf(this.router[this.router.length - 1]) === -1) {
        this.tags.push(this.router[this.router.length - 1]);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.box-card {
  border: none;
  margin-top: -16px;
  margin-bottom: 20px;
}

.tag {
  margin-right: 10px;
  border-radius: unset;
  border: 1px solid #d8dce5;

  &-a {
    color: #495060;
    text-decoration: none;
  }
}
</style>