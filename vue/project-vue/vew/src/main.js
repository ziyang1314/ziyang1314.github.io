// 全局性内容的配置；
import 'babel-polyfill' // vuetify 相关，为了支持veutify支持ie11和safara9

import Vue from 'vue';
import router from './router/index'; // 引入路由；
import './router/Permission'; // 引入路由守卫

import store from './store/index.js';
// 1.样式重置 normalize 比 reset 要更好一些；安装其需要对应安装css-loader和style-loader；
import 'normalize.css';

// 引入element-ui 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@/style/index.scss'; // 引入项目全局样式；
import theme from './utils/Theme.js';
import App from './App.vue';
// 另外一个ui库
import vuetify from './plugins/vuetify';
Vue.config.productionTip = false // 阻止启动生产消息

// 全部使用,并且全局配置有关element-ui组件的设置内容；elementui中拥有 size 属性的组件的默认尺寸均为 'small'，弹框的初始 z-index 为 3000。

Vue.use(ElementUI, {
	size: 'small',
	zIndex: 3000
});

new Vue({
	router,
	vuetify,
	store,
	theme,
	render: h => h(App)
}).$mount('#app')
