import router from './index';
router.beforeEach(async (to, from, next) => {
	let token = localStorage.getItem('token123');
	if (token) { 
		console.log("5678");
		next();
	} else {
		console.log("huibu")
		if (to.path === '/login') {
			next();
		} else {
			next('/login');
		}
	}

	// if (to.fullPath === '/') {
	// 	next({
	// 		path: '/login'
	// 	});
	// } else {
	// 	next();
	// }
	// if (to.fullPath === '/login') {
	// 	next()
	// } else {
	// 	if(to.fullPath !== '/login'){
	// 		next()
	// 	}else{
	// 		next()
	// 	}

	// }
})
router.afterEach(() => {
	console.log('全局路由守卫', "路由离开");
});
