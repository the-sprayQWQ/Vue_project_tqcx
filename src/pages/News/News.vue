<template>
  <div>
  <el-button @click="ReadingWorld">60秒读懂世界</el-button>
  <div class="news">
    <img :src="this.Src" alt="">
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Src:''
    }
  },
  methods: {
   async ReadingWorld(){
    let result = await this.$API.reqGetReadingWorld()
    console.log(result);
     let rr =  window.URL.createObjectURL(result)
     this.Src = rr
     console.log(this.Src);
    }
  },
}
</script>

<style>
  .news{
    height: 1000px;
    text-align: center;
  }
  .news img {
    margin: auto;
  }
</style>