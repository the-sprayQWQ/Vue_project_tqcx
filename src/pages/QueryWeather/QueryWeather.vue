<template>
  <div>
    城市代码：
    <el-input
      v-model="input"
      placeholder="请输入城市代码,例如北京:110000"
      style="height: 100px; width: 200px"
    ></el-input>
    <el-button @click="getCityRealTimeWeather">提交</el-button>
    &nbsp;
    <br />
    <h3>实时天气情况</h3>
    <el-table style="width: 100%" height="250" :data="tableData" align="center">
      <el-table-column label="省份名" width="150" prop="province">
      </el-table-column>
      <el-table-column label="城市名" prop="city" width="120">
      </el-table-column>
      <el-table-column label="区域编码" prop="adcode" width="120">
      </el-table-column>
      <el-table-column label="天气情况" prop="weather" width="120">
      </el-table-column>
      <el-table-column label="实时温度" prop="temperature" width="120">
      </el-table-column>
      <el-table-column label="风向描述" prop="winddirection" width="120">
      </el-table-column>
      <el-table-column label="风力级别" prop="windpower" width="120">
      </el-table-column>
      <el-table-column label="风力湿度" prop="humidity" width="120">
      </el-table-column>
      <el-table-column label="报告时间" prop="reporttime" width="120">
      </el-table-column>
    </el-table>
    <br />
    城市代码：
    <el-input
      v-model="input"
      placeholder="请输入城市代码,例如北京:110000"
      style="height: 100px; width: 200px"
    ></el-input>
    <el-button @click="getCityForecastWeather">提交</el-button>
    <h3>未来三天天气预报</h3>
    <div class="future" style="text-align: center">
      <el-table
        style="width: 100%"
        height="250"
        :data="tableData1"
        align="center"
      >
        <el-table-column label="日期" prop="date" width="120">
        </el-table-column>
        <el-table-column label="星期几" prop="week" width="120">
        </el-table-column>
        <el-table-column label="白天天气" prop="dayweather" width="120">
        </el-table-column>
        <el-table-column label="夜晚天气" prop="nightweather" width="120">
        </el-table-column>
        <el-table-column label="白天温度" prop="daytemp" width="120">
        </el-table-column>
        <el-table-column label="夜晚温度" prop="nighttemp" width="120">
        </el-table-column>
        <el-table-column label="白天风力" prop="daypower" width="120">
        </el-table-column>
        <el-table-column label="夜晚风力" prop="nightpower" width="120">
        </el-table-column>
        <el-table-column label="白天风向" prop="daywind" width="120">
        </el-table-column>
        <el-table-column label="夜晚风向" prop="nightwind" width="120">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "QueryWeather",
  data() {
    return {
      input: "",
      key: "",//一样也是web端服务Key
      tableData: [],
      tableData1: [],
    };
  },
  methods: {
    //获取该地天气情况
    async getCityRealTimeWeather() {
      let { input, key } = this;
      let result = await this.$API.reqGetRealTimeWeather(key, input);
      console.log(result);
      if (result.infocode == 10000) {
        this.tableData = result.lives;
      }
    },
    async getCityForecastWeather() {
      let { input, key } = this;
      let result = await this.$API.reqGetForecastWeather(key, input);
      if (result.infocode == 10000) {
        this.tableData1 = result.forecasts[0].casts;
      }
    },
  },
};
</script>

<style>
h3 {
  text-align: center;
}
</style>