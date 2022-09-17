<template>
  <div>
    视频URL：
    <el-input
      v-model="input"
      placeholder="请输入要播的URL"
      style="height: 100px; width: 200px"
    ></el-input>
    <el-button @click="getVideo">点击播放</el-button>
    <video style="width: 800px;">
      <source src="https://cache.bi-an-ling-feng.m3u8.leafone.cn/cache/d3e6b4ac505cf948b23d55ee57bc6dcc/source.m3u8" type="video/mp4">
    </video>
  </div>
</template>

<script>
export default {
    data() {
        return {
            input:'https://v.qq.com/x/cover/324olz7ilvo2j5f/s0036gmto7e.html',
          src:'',
        }
    },
    methods: {
        async getVideo(){
          let {input} = this
          let result = await this.$API.reqGetVideo(input)
          console.log(result)
          if(result.code == 200){
            this.src = result.data.url
          }
        }
    },
}
</script>

<style>

</style>