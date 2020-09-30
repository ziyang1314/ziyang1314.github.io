<template>
<div class="back" @click="goBack" id="back">
    <div class="btn"></div>
</div>
</template>

<script>
import {
    rippleEffect
} from "../../utils/animation/water";
export default {
    name: "",
    props: {},
    data: function () {
        return {};
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
    },
    mounted() {},
};
</script>

<style lang="scss" scoped>
.back {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    position: fixed;
    bottom: 30px;
    right: 30px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.7);
    border: 1px solid whitesmoke;

    .btn {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.9);
    }
}
</style>
