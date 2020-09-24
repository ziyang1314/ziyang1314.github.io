<!--  -->
<template>
  <div class="box">
    <div class="card-page">
      <li class="card-item" @click="navigate('water')">水纹</li>
      <li class="card-item" @click="navigate('shadow')">阴影</li>
      <li class="card-item" @click="navigate(' ')">卡片</li>
      <li class="card-item" @click="navigate(' ')">渐变</li>
      <li class="card-item" @click="navigate(' ')">旋转</li>
      <li class="card-item" @click="navigate(' ')">过渡</li>
    </div>
    <div @click="$router.back()" class="back">back</div>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';

  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
      //这里存放数据
      return {};
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        navigate(pageName){
            this.$router.push({
                name:pageName
            })
        }
    }, 
  };
</script>
<style lang="scss" scoped>
  //@import url(); 引入公共css类
  .box {
    .card-page {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      .card-item {
        width: 26vw;
        height: 16.068vw;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 15px 0;
        background: white;
        border-radius: 5px 0 5px 0;
        box-shadow: 1px 1px 20px whitesmoke;
      }
    }
    .back {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 1px 1px 50px slategrey;
      font-weight: bold;
      position: fixed;
      bottom: 25px;
      right: 25px;
    }
  }
</style>
