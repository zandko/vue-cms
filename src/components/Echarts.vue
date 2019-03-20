<template>

  <schart
    :canvasId="canvasId"
    :type="type"
    :data="data"
    :options="options"
    style="width:1000px;height:500px"
  ></schart>
</template>
<script>
import Schart from "vue-schart";
export default {
  data() {
    return {
      canvasId: "myCanvas",
      type: "bar",
      width: '1000px',
      height: '500px',
      data: [
        { name: "2014", value: 1342 },
        { name: "2015", value: 2123 },
        { name: "2016", value: 1654 },
        { name: "2017", value: 1795 },
        { name: "2018", value: 1342 },
        { name: "2019", value: 2123 },
        { name: "2020", value: 1654 },
        { name: "2021", value: 1795 }
      ],
      options: {
        padding: 50, // canvas 内边距
        bgColor: "#FFFFFF", // 默认背景颜色
        title: "cms后台管理系统", // 图表标题
        titleColor: "#000000", // 图表标题颜色
        titlePosition: "top", // 图表标题位置: top / bottom
        yEqual: 5, // y轴分成5等分
        fillColor: "#1E9FFF", // 默认填充颜色
        contentColor: "#eeeeee", // 内容横线颜色
        axisColor: "#666666" // 坐标轴颜色
      }
    };
  },
  components: {
    Schart
  }
};
</script>

<style>
.wrapper {
  width: 7rem;
  height: 5rem;
}
</style>