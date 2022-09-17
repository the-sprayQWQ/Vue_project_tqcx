<template>
<div class="block">
    <el-carousel trigger="click" height="860px">
      <el-carousel-item v-for="img in imgInfo" :key="img.src">
        <img :src="img" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>

</template>

<script>
export default {
  data() {
    return {
      imgInfo:[
        require('./images/background.png'),
        require('./images/background1.png'),
        require('./images/background3.png'),
        require('./images/background4.png'),
        require('./images/background5.png')
      ],
    }
  },
};
</script>

<style scoped>
.el-carousel__item h3 {
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

</style>