<template>
  <div>
    <el-menu :default-active="this.$route.path" class="el-menu-demo" mode="horizontal" router>
      <el-menu-item index="/home">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">数据中心</template>
        <el-menu-item index="/mapcontainer">世界地图</el-menu-item>
        <el-menu-item index="/queryweather">天气查询</el-menu-item>
        <el-menu-item index="/queryCity">城市代码查询</el-menu-item>
        <el-menu-item index="/news">每日新闻</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">娱乐小工具</template>
        <el-menu-item index="/video">全网视频解析</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
    name:'Header',
    data() {
      return {

      }
    },
};
</script>

<style>
</style>