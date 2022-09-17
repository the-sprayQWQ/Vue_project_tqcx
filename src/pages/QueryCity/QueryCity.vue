<template>
  <div>
    家庭住址：
    <el-input
      v-model="input"
      placeholder="请输入家庭住址"
      style="height: 100px; width: 200px"
    ></el-input>
    <el-button @click="getCityAcode">提交</el-button>
    &nbsp;
    <br/>
        <h3>相关城市信息如下</h3>
          <el-table
        style="width: 100%"
        height="250"
        :data="CityInfo"
        align="center"
      >
        <el-table-column label="国家" prop="country" width="120">
        </el-table-column>
        <el-table-column label="地址所在的省份名" prop="province" width="160">
        </el-table-column>
        <el-table-column label="地址所在的城市名" prop="city" width="160">
        </el-table-column>
        <el-table-column label="城市编码" prop="citycode" width="120">
        </el-table-column>
        <el-table-column label="地址所在的区" prop="district" width="120">
        </el-table-column>
        <el-table-column label="街道" prop="street" width="120">
        </el-table-column>
        <el-table-column label="门牌" prop="number" width="120">
        </el-table-column>
        <el-table-column label="区域编码" prop="adcode" width="120">
        </el-table-column>
        <el-table-column label="坐标点" prop="location" width="120">
        </el-table-column>
        <el-table-column label="匹配级别" prop="level" width="120">
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
export default {
    data() {
        return {
            input:'',
            key:'',//申请的web端服务的Key
            CityInfo:[],
        }
    },
    methods: {
        //根据地址获取相关城市信息
        async getCityAcode(){
           let {input,key} = this
         let result =  await this.$API.reqGetCityAcode(key,input)
         console.log(result);
         if(result.infocode == 10000){
             this.CityInfo = result.geocodes
         }
        }
    },
}
</script>

<style>
    h3{
        text-align: center;
    }
</style>