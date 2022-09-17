<template>
  <div>
    <div id="container"></div>
    <div>
      经纬度：
      <input type="text" v-model="positions">
      天气情况：
      <input type="text" v-model="theWeather">
      <br />
      详细地址：
      <input type="text" v-model="address">
      实时温度:
      <input type="text" v-model="temperature">
    </div>
  </div>
</template>

<script>
window._AMapSecurityConfig = {
  securityJsCode: "",//高德申请的私钥
};
import AMapLoader from "@amap/amap-jsapi-loader";
export default {
  name: "Map",
  data() {
    return {
      //此处不声明 map 对象，可以直接使用 this.map赋值或者采用非响应式的普通对象来存储。
      //map:null,
      address: "",
      positions: 0,
      addressInfo:[],
      city:'',
      temperature:'',
      theWeather:'',
      weather:{},
    };
  },
  methods: {
    //初始化地图
    initMap() {
      AMapLoader.load({
        key: "", // 申请好的Web端开发者Key，首次调用 load 时必填（JSAPI的Key）
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ["AMap.Scale", "AMap.Geocoder","AMap.HawkEye","AMap.Weather"], // 需要使用的的插件列表，如比例尺'AMap.Scale'
      })
        .then((AMap) => {
          this.map = new AMap.Map("container", {
            //设置地图容器id
            viewMode: "3D", //是否为3D地图模式
            zoom: 5, //初始化地图级别
            center: [105.602725, 37.076636], //初始化地图中心点位置
          });
          this.map.addControl(new AMap.Scale());
          this.map.addControl(new AMap.HawkEye({isOpen:true}));
          this.map.on("click",(e) => {
              console.log(e)
              let lat = e.lnglat.lat
              let lng = e.lnglat.lng
              this.getLngLatService(lat,lng)
              this.getMapWeather()
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
    //逆向地理编码
    getLngLatService(lat,lng) {
      // console.log(lat,lng);
      let that=this
      let geocoder = new AMap.Geocoder({
        // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
        city: "全国",
      });
      let lnglat = [lng,lat]
      this.positions = lnglat
      geocoder.getAddress(lnglat, function(status, result) {
        // console.log(status,result);
      if (status === 'complete' && result.info === 'OK') {
        // result为对应的地理位置详细信息
        console.log(result)
        that.address = result.regeocode.formattedAddress
        that.city = result.regeocode.addressComponent.adcode

      }
    })
    },
    getMapWeather(){
      let that = this
      let weather = new AMap.Weather();
      let mapPosition = this.city;
      // console.log(mapPosition)
      weather.getLive(mapPosition, function(err, data) {
        console.log(err)
        console.log(data);
        that.theWeather = data.weather;
        that.temperature = data.temperature;
      });
    },
  },
  mounted() {
    //DOM初始化完成进行地图初始化
    this.initMap();
  },
};
</script>

<style>
#container {
  padding: 0px;
  margin-top: 40px;
  width: 100%;
  height: 600px;
}
</style>