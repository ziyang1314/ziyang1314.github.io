import router from './index';
router.beforeEach(async (to, from, next) => {
    console.log('全局路由守卫', "路由进入");
    console.log(to,from)
    if (to.fullPath === '/login') {
        console.log(to)
        console.log(123);
        next()
    } else {
        console.log('进入登录界面') 
            next(to.path === '/login'?'':{
                path: '/login',
            })
    }
})
router.afterEach(() => {
    console.log('全局路由守卫', "路由离开");
});