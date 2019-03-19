<template>
  <div>
    <!-- 后台logo -->
    <div class="app-side-logo">
      <img src="@/assets/logo.png" :width="isCollapse ? '60' : '60'" height="60">
    </div>
    <!-- 左侧菜单开始 -->
    <el-menu
      :default-active="defaultActive"
      router
      class="el-menu-vertical-demo"
      @open="handleOpen"
      :collapse="isCollapse"
    >
      <!-- <template v-for="route in $router.options.routes">
        <template v-for="item in route.children">
          <el-menu-item :key="route.path + '/' + item.path" :index="item.path">
            <i class="el-icon-menu"></i>
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template> -->
    </el-menu>
    <!-- 左侧结束结束 -->
  </div>
</template>

<script>
export default {
    
}
</script>

