<template>
<div id="app">
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: "App",
    components: {},

    data: () => ({}),
};
</script>

<style lang="scss">
body {
    margin: 0;

    #app {
        width: 100vw;
        min-height: 100vh;
        box-sizing: border-box;
        background: rgba(248, 248, 248, 1);
    }
}
</style>
