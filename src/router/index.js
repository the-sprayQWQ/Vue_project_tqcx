import VueRouter from 'vue-router'
import routes from '@/router/routes'

let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
//二次封装push方法
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
//二次封装replace方法
VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve && reject){
        originReplace.call(this,location,resolve,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}

let router = new VueRouter({
    routes,
    })


export default router;