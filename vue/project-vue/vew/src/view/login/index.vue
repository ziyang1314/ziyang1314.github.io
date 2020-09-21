<template>
	<div class="box">
		<div v-if="time">
			<img src="../../assets/index.jpg" alt="" srcset="">
		</div>
		<div v-else>
			<hello-world  ></hello-world>
		</div>
	</div>
</template>

<script>
	import HelloWorld from '@/components/HelloWorld'
	export default {
		//import引入的组件需要注入到对象中才能使用
		components: {
			HelloWorld
		},
		data() {
			//这里存放数据
			return {
				testData: '21311',
				time: true,
			};
		},
		created() {
			setTimeout(() => {
				this.time = false;
			}, 3000)
			localStorage.setItem('token123','3456789')
		}, 
		// beforeRouteEnter: (to, from, next) => {
		// 	console.log("组件内路由守卫", "进入");
		// 	console.log(to, from);
		// 	next();
		// },
		// beforeRouteLeave: (to, from) => {
		// 	console.log("组件内路由守卫", "离开");
		// 	console.log(to, from);
		// },
	};
</script>
<style lang="scss" scoped>
	.box {
		width: 100vw;
		height: 100vh;

		img {
			width: 100vw;
			height: 100vh;
		}
	}
</style>
