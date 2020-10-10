<template>
<div class="page-box">
    <h4 class="inner-title">-- HTML 和静态资源</h4>
    <div class="global-title1">
        内容:
    </div>
    <div class="global-content1">
        设置public文件夹下，index.html(它是打包生成的dist文件中项目入口文件的模板，有关在网页上的时候的logo、标题这些资源是在这里设置的)、设置资源的路径
    </div>

    <div class="global-title2">
        使用方式：
    </div>
    <div class="global-content2">
       插值：lodash template 语法；
	   Preload 用来预加载用到的资源；Prefetch 用来提前获取用户未来可能用到的资源；
	   public下文件和绝对路径引用进来的文件，是直接拷贝进打包生成的文件中，不经过webpack的处理；
	   绝对路径的情况下：
	   <code>
		   // vue.config.js
		   module.exports = {
		     chainWebpack: config => {
		       config.module
		         .rule('images')
		           .use('url-loader')
		             .loader('url-loader')
		             .tap(options => Object.assign(options, { limit: 10240 }))
		     }
		   }
	   </code>
	</div>
    <div class="global-title3">
        自己的理解：
    </div>
    <div class="global-content3">
       这部分是对public文件中的静态资源进行的相关配置，配置插值，插入变量，图标logo，和一些资源的加载方式的设置和资源的引入路径的设置；
    </div>
	<div class="global-title4">
	    拓展：
	</div>
	<div class="global-content4">
		 放置在 public 目录下或通过绝对路径被引用。这类资源将会直接被拷贝，而不会经过 webpack 的处理。
		 url转换规则；绝对路径会保持不变（/开头这种），相对路径（.开头这种），以当前路径为基准，查找资源，若（~开头）那么其后的资源会在所有模块中查找，
		 以（@开头），其指向的是src目录为基准查找；
    </div> 
    <back-up-page></back-up-page>
</div>
</template>

<script>
export default {
    name: "",
    props: {},
    //存放 数据
    data: function () {
        return {};
    },
    //存放 方法
    methods: {
	},
};
</script>

<style lang="scss" scoped>
.page-box {
    padding:0 24px 24px 24px;

    .inner-title {
        text-align: right;
    }
}
</style>
