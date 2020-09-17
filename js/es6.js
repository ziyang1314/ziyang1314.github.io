let functionArray = {
	// 阶乘---给定整数字逐级的乘积
	factorial(num) {
		var x = num;
		while (x > 1) {
			num *= x - 1;
			x--;
		}
		return num;
	},
	// 对象相关---创建对象的几种方式；
	creatObject() {

		let objectExmple = {
			lily: {
				name: "lily",
				age: 28,
				sex: 'female'
			}
		}
		let keyone = new Object(objectExmple);
		let keyTwo = Object.create(objectExmple);
		let keyThree = Object.assign(objectExmple);
		// 上面的无论哪种都是对创建的对象的引用，都会具有引用传递的特征；
	},
	// 对象---对象原型、原型链
	objectProperty() {
		// 面向对象是对面向过程的抽象，比较：https://www.cnblogs.com/nanqiang/p/9934063.html
		// 原型链：每个对象都有一个原型，_proto_，即使是new的新对象，对象以其原型为模板，从原型继承方法和属性，原型也可以有自己的原型，因此我们使用一个对象方法或者属性的时候就会，
		//        如果找不到就会在该对象的原型上找，如果原型还有原型，那么就会一直找下去，这就想一个链条一样，找不到机会报undefined,只有函数才有prototype，类似vue。我们可以再起
		//        上面添加方法，在vue中直接进行使用；
		// 学习到继承；
	},
	// 声明---变量声明相关
	statement() {
		//   六种声明变量的方法；let、const、var、import、class、function(要知道function也是一种类var声明也是存在变量提升的，f例子)
		// let 声明类似var ，但是没有变量提升，且是在花括号内有效，即其声明的是一个局部作用于内的变量；同时具有绑定块级作用域的特点，外界声明的同名变量，在会计作用于
		// 同时声明，但是被使用的情况，块级作用域的有效，不受外界影响，但是因为let没有变量提升，所以没声明就使用会报reference error
		// const 一般声明常量，常量的key全大写，若是object类型的，和var，let声明的也类似，可以修改其object中属性，但是不能整体替换，const声明后的地址是不能够
		// 进行变更的；
		// example：
		// const 一般类型
		// const TIME = 24;
		// TIME = 45;
		// console.log(TIME,'const声明常量之后是不能够进行变更的，无论常量还是符合对象，他们声明的内容保存的地址
		// 是不可变更的，如果试图修改就会报错,所以对象整体替换也是不能进行的,报错--TypeError: Assignment to constant variable.');
		// const obj = new Object({
		//     time: 24
		// });
		// obj.time = 15;
		// console.log("修改属性是可以进行的=》", obj);
		// obj = {
		//     time: 14
		// };
		// console.log('但是对obj整体内容替换就不可以，', obj);
		let s = 'hello'
		for (var i = 0; i < s.length; i++) {
			console.log(s[i], i);
		} // i  为全局的

		for (let i = 0; i < s.length; i++) {
			console.log(s[i], i)
		} // i  为局部的，每一次就像绑定一个新的代码块
		console.log(i, 90909090)
	},

	// 变量的结构赋值
	destructuring() {
		// 结构类型左右同类型
		// 数组对顺序、对象对键值，符合展开符之类的对象会是剩余的变量，数组是剩余的数组内容
		// 特殊例子；
		var x;
		({
			x
		} = {
			x: 1
		}); // 不加（）会报SyntaxError: syntax error

	},
	unicode() {
		let strings = 'hello world！'
		// es5判定字符串中是否含有某个字符;indexOf
		let result1 = strings.indexOf('o');
		// es6-includes()-startsWith-endsWith()
		//第一个参数是检索的字符串，第二个指定从哪里开始进行查询；
		let result2 = strings.includes('o'); // 整体
		let result3 = strings.startsWith('o'); // 开始
		let result4 = strings.endsWith('o'); // 查结尾
		console.log(result1, result2, result3, result4);
	},
	number() {
		// 总的思想是逐步取消掉全局的属性，限定在（number.方法）借以模块化的方式去替代；
		Number.isFinite(); // 检查数字是否有限；
		Number.isNaN() // 是否是nan；
		Number.parseInt() // 取整；
		Number.parseFloat() // 获得数字；
		Number.isInteger() // 判断一个值是不是整数
		Number.EPSILON; // 极小常量用于浮点数计算时候的一个数值区间判断；
		Number.isSafeInteger() // 安全整数；
		Number.MAX_SAFE_INTEGER // 安全数字的上限
		Number.MIN_SAFE_INTEGER // 安全数字的下限
		Math.trunc() //取整
		Math.sign() //Math.sign方法用来判断一个数到底是正数、负数、还是零。
		Math.cbrt() //计算立方根
		Math.hypot() //返回所有参数的平方和的平方根
	},
	arr() {
		let exampleArr = [{
			test: 1
		}, {
			test: 2
		}, {
			test: 3
		}, {
			test: 4
		}];
		let exampleArr2 = [
			1, 2, 3, 4, 5
		];

		let arr1 = Array.from(exampleArr, value => typeof value);
		console.log('Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）', arr1);
		let arr2 = Array.of(1, 2, 3);
		console.log('Array.of用于将一组值转化为数组', arr2);
		let arr3 = exampleArr2.copyWithin(0, 3, 4);
		console.log(
			'Array.copyWithin,用于将数组中元素的替换，覆盖，参数1--开始位置，参数2--要截取的数字开始位置，参数3,-要截取的数字结束为止，意思是将参数2到参数3的内容放到参数1的位置上去类似 replace',
			arr3);
		let arr4 = exampleArr2.find((n) => n >= 4);
		let arr5 = exampleArr.findIndex((n) => n.test > 3);
		console.log(
			'Array.find和findIndex类似，find是找到符合条件的元素，findeIndex是找到在数组中的下标注,返回的都是第一个找到的元素，find找不到返回undefined，findeIndex则是-1',
			arr4, arr5);
		let arr6 = exampleArr2.fill(7, 1, 2);
		console.log('Array.fill(),给数组填充数据，三个参数，1，填充内容，指定起始位置，结束位置', arr6)
		let arr7 = exampleArr2.entries(); // 拿到这个数组单项键值对；
		let arr8 = exampleArr2.values(); // 拿到键值组成的数组；
		let arr9 = exampleArr2.keys(); // 拿到键值对的key组成的数组；
		console.log(arr9, arr8, arr7);
		let arr10 = exampleArr2.includes(4); //判定是否含有这个值，boolean，补足indexof不能判断nan的情况；
		let arr11 = exampleArr2.some((item) => {
			return item > 3
		}) //全部为假才为假
		let arr12 = exampleArr2.every((item) => {
			return item > 3
		}) //全部为真才为真
	},
	hanshu() {
		// 这里是函数；参数可以设置默认值，也可以通过结构赋值或者扩展运算符进行展开；
		let fnArry = function fnArry() {}
		fnArry.prototype.defaultParameters = (y = 10) => {
			console.log(y);
		}

		function Timer() {
			this.s1 = 0;
			this.s2 = 0;
			// 箭头函数
			setInterval(() => this.s1++, 1000);
			// 普通函数
			setInterval(function() {
				console.log(this.s2)
				this.s2++;
			}, 1000);
		}
		let timer = new Timer();
		// setTimeout(()=>{console.log('timer=>',timer.s1)},3100)
		// setTimeout(()=>{console.log('timer=>',timer.s2)},3100)
		// return new fnArry();
	},
	obj() {
		let objExample = {
			time: 1992,
			age: 28
		};
		//Object.assign();// 对象合并
		//Object.create(); //以某个对象为基础，创建一个对象；
		//Object.freeze(); //冻结某个对象
		//Object.is(); // 判断连个对象是否是相等的，绝对相等；等值即为相等；
		//Object.name; 
		// 几种遍历对象的方法
		// for in
		for (item in objExample) {
			console.log(item);
		}
		// object.keys -- Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含Symbol属性）。
		console.log('keys', Object.keys(objExample));
		// Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含Symbol属性，但是包括不可枚举属性）。
		console.log('getOwnPropertyNames', Object.getOwnPropertyNames(objExample));
		// Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有Symbol属性。
		console.log('getOwnPropertySymbols', Object.getOwnPropertySymbols(objExample));
		// Reflect.ownKeys返回一个数组，包含对象自身的所有属性，不管是属性名是Symbol或字符串，也不管是否可枚举。
		console.log('ownKeys', Reflect.ownKeys(objExample));
		// 自定义对原型的，_proto_属性是用来设置当前对象的prototype属性的；
		console.log(Object(this)) //输出的是当前this的属性；
		function isObject(value) {
			return Object(value) === value;
		}
		Object.defineProperty(Object.prototype, '_proto_', {
			get() {
				let _thisObj = Object(this);
				console.log("diaoyongle")
				return Object.getPrototypeOf(_thisObj);
			},
			set(proto) {
				// 对undefined和null是无法进行属性设定的
				if (this === undefined || this === null) {
					throw new TypeError();
				}
				// 非对象也无法进行属性设定
				if (!isObject(this)) {
					return undefined;
				}
				// 要设定的属性若是undefined 也是不能沟进行设定的；
				if (!isObject(proto)) {
					return undefined;
				}
				// 设定属性
				let status = Reflect.setPrototypeOf(this, proto);
				if (!status) {
					return undefined;
				}
			}
		})
		console.log(Object.getPrototypeOf(objExample));
		console.log(objExample._proto_);
	},
	_symbol() {
		// 新的变量本声明方式；声明一个独一无二的变量名称，symbol类型
	},
	executionOrder() {
		// 代码块和settimeout setinterval 这些是宏任务，promise\process.nextTick是微任务；
		// js是单线程,先执行整体代码块的主线程,也就是宏任务,当执行过程中遇到宏任务,就会将其排列到宏任务队列（会在接下来的一层循环中执行）,
		// 然后其会处理当前层的微任务,(理解为层级),第一层代码块本身是一个宏任务,
		// 宏任务执行完毕,就会执行第一层的微任务,然后再次循环；
		async function async1() {
			console.log('2--async1 start')
			await async2();
			console.log('5--async1 end')
		}

		async function async2() {
			console.log('3--async2')
		}

		console.log('1--script start')

		setTimeout(function() {
			console.log('7--setTimeout')
		}, 0)

		async1();

		new Promise(function(resolve) {
			console.log('4--promise1')
			resolve();
		}).then(function() {
			console.log('6--promise2')
		})
	},
	setAndMap() {
		let newArr = [1, 2, 3, 4, 5, 6, 7, 1, 2, 4, 5, 6];
		// Set 数组去重
		console.log(new Set(newArr)); // 或者for循环之后set.add(item),同样可以达到先达到相同的结果；
		// 实现并集交集和差集的方法
		let a = new Set([1, 2, 3]);
		let b = new Set([4, 3, 2,5,6,1]);

		// 并集
		let union = new Set([...a, ...b]);
		console.log(union);

		// 交集
		let intersect = new Set([...a].filter(x => b.has(x)));
		console.log(intersect);

		// 差集
		let difference = new Set([...b].filter(x => !a.has(x)));
		console.log(difference);
		console.log(newArr.map(x=>x*2))
	},
    proxy(){
        // Proxy 主要用来进行进行对象的属性拦截
        // 用法：var proxy = new Proxy(target, handler);
        var handler = {


            
			get: function(target, name) {
				if (name === 'prototype') {
				return Object.prototype;
				}
				return 'Hello, ' + name;
			},

			apply: function(target, thisBinding, args) {
				return args[0];
			},

			construct: function(target, args) {
				return {value: args[1]};
			}
		};
    }
}

functionArray.setAndMap();
