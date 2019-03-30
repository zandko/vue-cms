<template>
  <div>
    <!-- 后台logo -->
    <div class="app-side-logo">
      <img src="@/assets/logo.png" :width="collapse ? '60' : '230'" height="60">
    </div>
    <!-- 左侧菜单开始 -->
    <el-menu
      :default-active="defaultActive"
      router
      class="el-menu-vertical-demo"
      @open="handleOpen"
      :collapse="collapse"
    >
      <SidebarItem
        v-for="(item, index) in routes"
        :key="index"
        :subroute="item"
        :fatherpath="fatherPath"
        :barIdx="index"
      />
    </el-menu>
    <!-- 左侧结束结束 -->
  </div>
</template>

<script>
import SidebarItem from "./item";
export default {
  components: {
    SidebarItem
  },
  props: {
    collapse: {
      type: Boolean
    },
    routes: {
      type: Array
    }
  },
  computed: {
    // 默认激活的路由, 用来激活菜单选中状态
    defaultActive() {
      return this.$route.path;
    },
    fatherPath() {
      return this.$router.options.routes[1].path;
    }
  },
  methods: {
    handleOpen() {
        // console.log(key, keyPath);
    },
    handleClose() {
        // console.log(key, keyPath);
    }
  }
};
</script>

