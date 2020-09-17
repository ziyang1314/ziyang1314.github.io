// （非主要）：

// 我想得到的结果是：能够自定义一个js插件，用于处理工作中常用的例如时间过滤、正则校验，请求封装之类的；
// 1.理解插件：
// 外层结构就是一个自执行函数；决定了其拥有外界访问不到内的变量，但是内部却可以访问外部变量的特点；
// 优点是可以防止其他代码冲突和污染全局环境；
// global是全局变量 ,factory是函数
// 参考 较之jqery的复杂，这个是比较合适入手的一个插件，https://www.jianshu.com/p/e65c246beac1
;
(function(global, factory) {
	"use strict";
	// commonjs 规范 模块化；
	// 下面做的就是判断是不是commonjs的执行环境；如果是的话，就把jquery挂载到global全局变量上；
	if (typeof module === "object" && typeof modules.exports === "object") {
		module.exports = global.document ? factory(global, true) :
			function(w) {
				if (!w.document) {
					// 在node 环境运行的时候：处理办法
					// https://stackoverflow.com/questions/21358015/error-jquery-requires-a-window-with-a-document
					throw new Error('jQuery需要带有文档的窗口');
				} else {
					return factory(w)
				}
			}
	} else if (typeof define === 'function' && define.amd) {
		// amd 全局环境变量
		define(function() {
			return plugin;
		})
		
	} else {
		return
	}

})(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
	// 判断是不是浏览器环境，是浏览器环境就挂载到window，不是的话就挂载到用到的地方的实例对象上；
	// jquery 自身添加了一系列的方法和属性,可以方便我们对元素的操作，是对原生的js操作方法一层封装；

	var version = "3.4.1";
	var jQuery = function(selector, context) {
		return new jQuery.FN.init(selector, context); // define a local copy of jquery；
	}
	jQuery.fn = jQuery.prototype = {
		jquery: version,
		constructor: jQuery,
		length: 0,
		// ...
	}
	// noGlobal -- 用来判断是不是浏览器环境；
	if (!noGlobal) {
		window.jQuery = window.$ = jQuery;
	}
})
