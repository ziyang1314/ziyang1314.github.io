<template>
  <div>
    <div>
      <!--使用draggable组件-->
      <el-row class="itxst">
        <div class="col">
          <div class="title">A列</div>
          <draggable
            v-model="arr1"
            group="site"
            animation="300"
            dragClass="dragClass"
            ghostClass="ghostClass"
            chosenClass="chosenClass"
            @start="onStart"
            @end="onEnd"
          >
            <transition-group>
              <div class="item" v-for="item in arr1" :key="item.id">
                {{ item.name }}
              </div>
            </transition-group>
          </draggable>
        </div>
        <div class="col">
          <div class="title">B列</div>
          <draggable
            v-model="arr2"
            group="site"
            animation="300"
            dragClass="dragClass"
            ghostClass="ghostClass"
            chosenClass="chosenClass"
            @start="onStart"
            @end="onEnd"
          >
            <transition-group>
              <div class="item" v-for="item in arr2" :key="item.id">
                {{ item.name }}
              </div>
            </transition-group>
          </draggable>
        </div>
        <div class="col">
          <div class="title">C列</div>
          <draggable
            v-model="arr3"
            group="site"
            animation="300"
            :scroll="false"
            filter=".inmove"
            handle=".mover"
            dragClass="dragClass"
            ghostClass="ghostClass"
            chosenClass="chosenClass"
            @start="onStart"
            @end="onEnd"
          >
            <transition-group>
              <div
                :class="index == 0 ? 'item inmove' : 'item'"
                v-for="(item, index) in arr3"
                :key="item.id"
              >
                <span class="mover">+</span>{{ item.name }}
              </div>
            </transition-group>
          </draggable>
        </div>
      </el-row>
    </div>
    <ol style="width: 100vw" class="attention">
        <li><a href="http://www.itxst.com/vue-draggable/jirneq6b.html">参考网址</a></li>
      <li>
        group='name'
        name相同的组之间是可以相互拖动的，但是当他们的v-model指向的是同一个组的时候，会出现拖动之后数据丢失的情况
      </li>
      <li>
        delay="time"
        time如1000毫秒，表示当按住拖动元素1000毫秒才可以进行拖动，主要是为了防止误操作
      </li>
      <li>disabled="boolean" boolean是布尔值，此值决定是否开启拖动</li>
      <li>
        :scroll="boolean"
        boolean是布尔值，代表父容器有滚动条时是否允许滚动也即是是否允许将元素拖动到隐藏区域,设置为false的时候只能在可见区域进行拖动
      </li>
      <li>
        animation='time'
        time如1000，是在拖动到指定位置后，动画完成元素位置交换的过渡动画时间
      </li>
      <li>
        handle=".classname"
        .classname用来指定拖动需要按住那个元素才可以进行拖拽，.classname对应的元素需要自己去定义
      </li>
      <li>
        filter=".classname"
        在遍历的元素上添加这个classname，此项内容将无法拖动,但是可以拖动其他元素进行切换，也可以通过onmove拦截拖动的元素，根据id获取其他条件判断是否可以拖动元素
      </li>
      <li>chosenClass="classname" 定义选中拖动元素的样式classname</li>
      <li>
        ghost-class="classname" classname 是不允许其他元素占用自己位置的元素的样式

        <code>
          元素禁止被拖动，和元素禁止被停靠，主要都是通过事件进行处理的；
          onMove(e) { //不允许停靠 if (e.relatedContext.element.id == 1) return
          false; //不允许拖拽 if (e.draggedContext.element.id == 4) return
          false; return true; },
        </code>
      </li>
      <li>:options="{group:{name: 'itxst',pull:'clone'},sort: true}" clone，很强大，用来自定义菜单之类的，move监听移动 end监听移动完成 这些不同的拖动节点触发的事件可以实现自定义移动元素的拷贝和是否可以移动</li>
      <li><h4>相关事件：以及其用法</h4> 
      <div><img src="./assets/draggable.png" alt="" srcset=""></div></li>
    </ol>
    <back-up-page></back-up-page>
  </div>
</template>
<style lang="scss" scoped>
/*定义要拖拽元素的样式*/
.ghostClass {
  background-color: blue !important;
}
.chosenClass {
  background-color: red !important;
  opacity: 1 !important;
}
.dragClass {
  background-color: blueviolet !important;
  opacity: 1 !important;
  box-shadow: none !important;
  outline: none !important;
  background-image: none !important;
}
.title {
  padding: 6px 12px;
}

.itxst {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .col {
    max-width: 50%;
    .mover {
      background: orange;
      padding: 0px 15px;
      margin-right: 10px;
      color: white;
    }
  }
}

.item {
  padding: 6px 12px;
  margin: 0px 10px 0px 10px;
  border: solid 1px #eee;
  background-color: #f1f1f1;
}
.item:hover {
  background-color: #fdfdfd;
  cursor: move;
}
.item + .item {
  border-top: none;
  margin-top: 6px;
}
.attention {
  width: 100vw;
  padding: 50px;
  li {
    background: white;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 10px;
    color: #666;
    border-radius: 10px;
    box-shadow: 0px 2px 5px whitesmoke;
    line-height: 1.5;
    img{
        width: 100%;
    }
  }
}
</style>
<script>
//导入draggable组件
import draggable from "vuedraggable";
export default {
  //注册draggable组件
  components: {
    draggable,
  },
  data() {
    return {
      drag: false,
      //定义要被拖拽对象的数组
      arr1: [
        { id: 1, name: "www.itxst.com" },
        { id: 2, name: "www.jd.com" },
        { id: 3, name: "www.baidu.com" },
        { id: 4, name: "www.taobao.com" },
      ],
      arr2: [
        { id: 1, name: "www.google.com" },
        { id: 2, name: "www.msn.com" },
        { id: 3, name: "www.ebay.com" },
        { id: 4, name: "www.yahoo.com" },
      ],
      arr3: [
        { id: 1, name: "item 1" },
        { id: 2, name: "item 2" },
        { id: 3, name: "item 3" },
        { id: 4, name: "item 4" },
      ],
    };
  },
  methods: {
    //开始拖拽事件
    onStart() {
      this.drag = true;
    },
    //拖拽结束事件
    onEnd() {
      this.drag = false;
    },
  },
};
</script>