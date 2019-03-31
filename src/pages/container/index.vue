<template>
  <div class="app">
    <el-container>
      <!--左侧导航开始-->
      <el-aside
        class="app-side app-side-left"
        :class="isCollapse ? 'app-side-collapsed' : 'app-side-expanded'"
      >
        <!-- 菜单栏 -->
        <Sidebar :collapse="isCollapse" :routes="$router.options.routes[1].children"/>
      </el-aside>
      <!--左侧导航结束-->
      <el-container>
        <!--头部导航开始-->
        <el-header class="app-header">
          <div style="width: 60px; cursor: pointer;" @click.prevent="toggleSideBar">
            <i v-show="!isCollapse" class="el-icon-d-arrow-left"></i>
            <i v-show="isCollapse" class="el-icon-d-arrow-right"></i>
          </div>
          <!-- 面包屑 -->
          <Breadcrumb/>
          <!--用户菜单开始-->
          <div class="app-header-userinfo">
            <el-dropdown trigger="hover" :hide-on-click="false">
              <img width="40" style="display: inline-block; vertical-align: middle;border-radius: 50%" src="../../assets/logo.png" alt="">
              <span class="el-dropdown-link">
                {{ username }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>我的消息</el-dropdown-item>
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <!--用户菜单结束-->
        </el-header>
        <!--头部导航结束-->
        <!--内容区域开始-->
        <el-main class="app-body">
          <template>
            <!--            <Tags />-->
            <router-view/>
          </template>
        </el-main>
        <!--内容区域结束-->
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Breadcrumb from "@/components/Breadcrumb";
// import Tags from "@/components/Tags";

export default {
  data() {
    return {
      username: "",
      isCollapse: false
    };
  },
  methods: {
    // 左侧导航的状态
    toggleSideBar() {
      this.isCollapse = !this.isCollapse;
    },
    // 退出登录
    logout: function() {
      this.$confirm("确认退出?", "提示", {})
        .then(() => {
          sessionStorage.removeItem("user");
          this.$router.push("/login");
        })
        .catch(() => {});
    },
    // handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    // }
  },
  mounted: function() {
    let user = sessionStorage.getItem("user");
    if (user) {
      this.username = user;
    }
  },
  components: {
    Sidebar,
    Breadcrumb,
    // Tags
  }
};
</script>

<style>
</style>