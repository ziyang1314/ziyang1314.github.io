var MyPlugin = {
    install(Vue,options){
    
     Vue.minxin({
      created: function () {
        if (!this.NOTICE)
          console.log("组件开始加载")
      },
      methods: {
        test: function () {
          console.log("mixin test");
        }
      }
    }) 
    }
}

export default MyPlugin;