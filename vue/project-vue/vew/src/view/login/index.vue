<template>
<div class="page-box">
    <div v-if="time" class="page-logo">
        <img src="../../assets/index.jpg" alt="" srcset="" />
    </div>
</div>
</template>

<script>
export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            testData: "21311",
            time: true,
        };
    },
    created() {
        if (localStorage.getItem("token123")) {
            console.log("走了这里")
            this.$router.push({
                name: 'index'
            })
        } else {
            setTimeout(() => {
                this.time = false;
                this.$router.push({
                    name: 'index'
                })
            }, 3000)
            localStorage.setItem("token123", "3456789");

        }
    },
};
</script>

<style lang="scss" scoped>
.page-box {
    width: 100vw;
    height: 100vh;

    .page-logo {
        width: 100%;
        height: 100%;

        img {
            width: 100vw;
            height: 100vh;
        }
    }
}
</style>
