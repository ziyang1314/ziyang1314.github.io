import Vue from "vue";
import Router from 'vue-router';
Vue.use(Router); //router 挂在到vue实例 
// 开发环境开启懒加载比较耗时，所以选择开发环境不使用懒加载，生产环境使用懒加载的方式；

const _import = require('./_import_' + process.env.NODE_ENV)
console.log(process.env.NODE_ENV);
//1. 引入路由组件，定义路由规则   
export const constantRouterMap = [{
		path: '/login',
		name: 'login',
		component: _import('login/index'),
		// beforeEnter: (to, from, next) => {
		// 	console.log('路由独享的守卫', "进入")
		// 	console.log(to, from);
		// 	next();
		// },
		// beforeLeave: (to, from) => {
		// 	console.log('路由独享的守卫', "离开")
		// 	console.log(to, from);
		// }
	}, {
		path: '/scss',
		name: "scss",
		component: _import("scss/index"),
	}, {
		path: '/',
		name: "index",
		component: _import("index/index"),
	}, {
		path: "/dataInputOutPut",
		name: "dataInputOutPut",
		component: _import("data-input-out-put/index"),
	},
	{
		path: "/animation",
		name: "animation",
		component: _import("animation/index"),
		redirect:'/animation/nav',
		children: [{
			path: "nav",
			name: "nav",
			component: _import("animation/nav"),
		},{
			path: "water",
			name: "water",
			component: _import("animation/water"),
		}]
	}
]
//2. 创建路由实例
let router = new Router({
	mode: 'history',
	scrollBehavior: () => ({
		y: 0,
	}),
	routes: constantRouterMap
})

//3. 导出，然后挂载到vue根实例上

export default router;