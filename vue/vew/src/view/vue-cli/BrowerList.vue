<template>
<div class="page-box">
    <h4 class="inner-title">-- browerList（浏览器兼容性）</h4>
    <div class="global-title1">
        作用:
    </div>
    <div class="global-content1">
         解决javascript和css在不同浏览器的解析差异，使其在解析效果上能够表现一致；
    </div>

    <div class="global-title2">
        使用方式：
    </div>
    <div class="global-content2">
        在package.json的browserslist字段(或者.browserslistrc文件中)，定义需要兼容到的浏览器的范围，这个值会被 @babel/preset-env 和 Autoprefixer用来确定需要转译的javascript特性和需要添加的css浏览器前缀；
    </div>
    <div class="global-title3">
        自己的理解：
    </div>
    <div class="global-content3">
       vue-cli的此配置解决了浏览器兼容性问题，同时带来包的大小发生变化，通过最新的vue-cli-service build --modern，我们可以打包之后生成两个包，
	   一个是对es-module的新浏览器，另外一个面向需要兼容的旧版浏览器，因此包的大小会减小，加载速度加快，用户体验会更好一些；
    </div>
	<div class="global-title4">
	    拓展：
	</div>
	<div class="global-content4">
		Polyfill 是一块代码（通常是 Web 上的 JavaScript），用来为旧浏览器提供它没有原生支持的较新的功能。
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
    methods: {},
};
</script>

<style lang="scss" scoped>
.page-box {
    padding: 0 24px;

    .inner-title {
        text-align: right;
    }
}
</style>
