//API进行统一管理
import request from './request'
//用户获取实时天气的API
export const reqGetRealTimeWeather = (key,city) => {
    return request({url:`https://restapi.amap.com/v3/weather/weatherInfo?key=${key}&city=${city}&extensions=base`,method:'get'})
}
//用户获取预报天气
export const reqGetForecastWeather = (key,city) => {
    return request({url:`https://restapi.amap.com/v3/weather/weatherInfo?key=${key}&city=${city}&extensions=all`,method:'get'})
}

//60秒读懂世界接口
export const reqGetReadingWorld = () => {
    return request({url:'https://api.qqsuu.cn/api/60s',method:'get',responseType:'blob'})
}

//用户获取城市代码
export const reqGetCityAcode = (key,address) => {
    return request({url:`https://restapi.amap.com/v3/geocode/geo?key=${key}&address=${address}`,method:'get'})
}

//用户用来视频解析接口
export const reqGetVideo = (url) => {
    return request({url:`/api/jx?url=${url}`,method:'get'})
}