import Vue from "vue";
import Router from 'vue-router'; 
Vue.use(Router); //router 挂在到vue实例
import Login from '../view/login/index.vue';
// 开发环境开启懒加载比较耗时，所以选择开发环境不使用懒加载，生产环境使用懒加载的方式；

const _import = require('./_import_' + process.env.NODE_ENV)
console.log(process.env.NODE_ENV);

//1. 引入路由组件，定义路由规则
console.log(Login);
console.log( _import('login/index'));
export const constantRouterMap = [{
    path: '/login',
    name:'login',
    component:Login,
    // component: _import('login/index'),
    beforeEnter: (to, from, next) => {
        console.log('路由独享的守卫', "进入")
        console.log(to, from);
        next();
    },
    beforeLeave: (to, from) => {
        console.log('路由独享的守卫', "离开")
        console.log(to, from);
    }
}]
//2. 创建路由实例
let router = new Router({
    mode:'history',
    scrollBehavior: () => ({
        y: 0,
    }),
    routes: constantRouterMap
})

//3. 导出，然后挂载到vue根实例上

export default router;