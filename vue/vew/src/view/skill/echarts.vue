<!--  -->
<template>
  <div class="box">
    <div class="input-arry">
      <div class="title">
        <div class="trend-text">
          {{ currentPriceType == 0 ? "上涨" : "下跌" }}
        </div>
        <div class="trend-button" @click="trendChange">change</div>
      </div>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form label-width="80px" label-position="left" :model="priceForm">
            <el-form-item label="价格1">
              <el-input v-model="priceForm.value1"></el-input>
            </el-form-item>
            <el-form-item label="价格2">
              <el-input v-model="priceForm.value2"></el-input>
            </el-form-item>
            <el-form-item label="价格3">
              <el-input v-model="priceForm.value3"></el-input>
            </el-form-item>
          </el-form>
        </el-col>

        <el-col :span="12">
          <el-form label-width="80px" label-position="left" :model="cangForm">
            <el-form-item label="仓1">
              <el-input v-model="cangForm.value1"></el-input>
            </el-form-item>
            <el-form-item label="仓2">
              <el-input v-model="cangForm.value2"></el-input>
            </el-form-item>
            <el-form-item label="仓3">
              <el-input v-model="cangForm.value3"></el-input>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
    <div
      ref="myChart"
      style="width: 95vw;height: 50vh;margin: 5vh 2.5vw 0px;"
    ></div>
  </div>
</template>

<script>
// 搞清楚 仓位 股价 和 盈亏占比 之间的关系；
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
            rosetype: "angle",
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
      option1: {
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["股价", "买价", "仓位", "均价", "收益率"],
          top: 0,
          left: 0,
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["第一次", "第二次", "第三次"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "股价",
            type: "line",
            data: [120, 132, 101, 134],
          },
          {
            name: "买价",
            type: "line",
            data: [220, 182, 191, 234],
          },
          {
            name: "仓位",
            type: "line",
            data: [150, 232, 201, 154],
          },
          {
            name: "均价",
            type: "line",
            data: [320, 332, 301, 334],
          },
          {
            name: "收益率",
            type: "line",
            data: [380, 270, 501, 734],
          },
        ],
      },
      theme: "dark", // light dark 两种类型的；
      // 数据：
      priceForm: {
        value1: 0,
        value2: 0,
        value3: 0,
      },
      cangForm: {
        value1: 0,
        value2: 0,
        value3: 0,
      },
      // 股价变化
      price: [
        [1, 2, 3, 4],
        [4, 3, 2, 1],
      ],
      // 当前的股价变化类型
      currentPriceType: 0,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    priceForm: {
      handler(newVal) {
        this.changeData("price", newVal);
      },
      deep: true,
      immediate: false,
    },
    cangForm: {
      handler(newVal) {
        this.changeData("cang", newVal);
      },
      deep: true,
      immediate: false,
    },
  },
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
    trendChange() {
      let { options, priceForm, cangForm, price, currentPriceType } = this;
      this.currentPriceType = currentPriceType ? 0 : 1;
      this.createEchartsData();
    },
    changeData(type, form) {
      if (type == "price") {
        // 其实这里更改了之后，vue中的数据已经进行过修改了，我们这里可以做个数据的过滤，然后调用绘图去绘制用户的数据；
        this.priceForm = form;
      } else {
        this.cangForm = form;
      }
      this.createEchartsData();
    },

    createEchartsData() {
      let {
        option1,
        priceForm,
        cangForm,
        price,
        currentPriceType,
        theme,
      } = this;
      // 股价 买价 仓位 均价 获利比例
      let data1 = price[currentPriceType];
      let data2 = [];
      let data3 = [];
      let data4 = [];
      let data5 = [];
      for (var i = 0; i < 3; i++) {
        console.log(i);
        // 仓位
        let key = `value${i + 1}`;
        data2.push(Number(priceForm[key]));
        data3.push(this.cangwei(i));
        data4.push(this.average(i));
        data5.push(this.profitRatio(i));
      }
      console.log(data1, data2, data3, data4, data5);
      option1.series[0].data = data1;
      option1.series[1].data = data2;
      option1.series[2].data = data3;
      option1.series[3].data = data4;
      option1.series[4].data = data5;
      let myChart = this.$echarts.init(this.$refs.myChart);
      myChart.setOption(option1, theme);
      myChart.showLoading();
      setTimeout(() => {
        myChart.hideLoading();
      }, 2000);
    },
    // cangwei
    cangwei(i) {
      //  计算均价
      let { priceForm, cangForm, currentPriceType, theme } = this;
      let allCang = 0;
      for (var j = 0; j < 3; j++) {
        if (j <= i) {
          let key = `value${j + 1}`;
          console.log(Number(cangForm[key]));
          allCang += Number(cangForm[key]);
        }
      }
      return allCang;
    },
    average(i) {
      //  计算均价
      let { priceForm, cangForm, currentPriceType, theme } = this;
      let allPrice = 0;
      let allCang = 0;
      for (var j = 0; j < 3; j++) {
        if (j <= i) {
          let key = `value${j + 1}`;
          allPrice += Number(priceForm[key]) * Number(cangForm[key]);
          allCang += Number(cangForm[key]);
        }
      }
      let result = (allPrice / allCang).toFixed(2);
      return result;
    },
    profitRatio(i) {
      // 计算收益率
      let { price, priceForm, cangForm, currentPriceType, theme } = this;
      let allPrice = 0;
      let allCang = 0;
      for (var j = 0; j < 3; j++) {
        if (j <= i) {
          let key = `value${j + 1}`;
          allPrice += Number(priceForm[key]) * Number(cangForm[key]);
          allCang += Number(cangForm[key]);
        }
      }
      let result = (
        (allCang * price[currentPriceType][i] - allPrice) /
        allPrice
      ).toFixed(2);
      return result;
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.theme = "macarons";
    // this.initEcharts();
  },
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.box {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .input-arry {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 50;
    width: 100vw;
    height: 100%;
    padding: 0 3.333333vw 150px;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column-reverse;

    .title {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 25px 0;
      color: yellow;
      .trend-button {
        padding: 5px 15px;
        display: inline-block;
        background: darkslategrey;
        border-radius: 5px;
      }
    }
  }
}
</style>
