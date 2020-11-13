<!--  -->
<template>
  <div ref="myChart" style="width: 100vw; height: 100vh"></div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
require("../../plugins/macarons.js");
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      // 图表的参数集合；
      options: {
        backgroundColor: "#2c343c",
        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1],
          },
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            data: [
              { value: 235, name: "视频广告" },
              { value: 274, name: "联盟广告" },
              { value: 310, name: "邮件营销" },
              { value: 335, name: "直接访问" },
              { value: 400, name: "搜索引擎" },
            ],
            roseType: "angle",
            label: {
              normal: {
                textStyle: {
                  color: "rgba(255, 255, 255, 0.3)",
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: "rgba(255, 255, 255, 0.3)",
                },
              },
            },
            itemStyle: {
              normal: {
                color: "#c23531",
                shadowBlur: 200,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
      theme: "dark", // light dark 两种类型的；
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    initEcharts() {
      // 视觉处理和动画，复杂交互--重点强调的是对视觉冲击比较大的元素
      // 目标是能够完全掌握和熟练进行自定义图表、复杂图表，完成数据可视化的目标；
      let { options, theme } = this;
      // 一个页面可以创建多个echarts，一个echarts对应一个dom元素，可以创建多个多种类型的图表和坐标系；
      // components 是对echarts中用到的所有内容的分类抽象，对不同的功能进行组件化，系列就是这些功能组件其中之一，它的作用就是用来进行图表绘制的；
      // series 对应的是这个echarts 有几种类型的图，每一个图都是一个系列，每一个系列都包含了设置这个图所需的参数；起到的是数据到视图的映射；
      let myChart = this.$echarts.init(this.$refs.myChart);
      myChart.setOption(options, theme);
      myChart.showLoading();
      setTimeout(() => {
        myChart.hideLoading();
      }, 2000);
      // 主题设置；
      // dataset 数据集映射为表，通过行列对应到具体的series默认是column，就是以数据的第一行的数据项作为x轴的坐标项，如果是row则是以第二行开始的每一行的第一个数据作为坐标轴的坐标项；
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.initEcharts();
    this.theme = "macarons";
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>