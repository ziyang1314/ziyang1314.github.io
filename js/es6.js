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
        Math.trunc()//取整
        Math.sign()//Math.sign方法用来判断一个数到底是正数、负数、还是零。
        Math.cbrt()//计算立方根
        Math.hypot()//返回所有参数的平方和的平方根
    },
    arr(){
        let exampleArr = [
            {test:1},{test:2},{test:3},{test:4}
        ];
        let exampleArr2 = [
            1,2,3,4,5
        ];

        let arr1 = Array.from(exampleArr,value=>typeof value);
        console.log('Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）',arr1);
        let arr2 = Array.of(1,2,3); 
        console.log('Array.of用于将一组值转化为数组',arr2);
        let arr3 = exampleArr2.copyWithin(0,3,4);
        console.log('Array.copyWithin,用于将数组中元素的替换，覆盖，参数1--开始位置，参数2--要截取的数字开始位置，参数3,-要截取的数字结束为止，意思是将参数2到参数3的内容放到参数1的位置上去类似 replace',arr3);
        let arr4 = exampleArr2.find((n)=>n>=4);
        let arr5 = exampleArr.findIndex((n)=>n.test>3);
        console.log('Array.find和findIndex类似，find是找到符合条件的元素，findeIndex是找到在数组中的下标注,返回的都是第一个找到的元素，find找不到返回undefined，findeIndex则是-1',arr4,arr5);
        let arr6 = exampleArr2.fill(7,1,2);
        console.log('Array.fill(),给数组填充数据，三个参数，1，填充内容，指定起始位置，结束位置',arr6)
        let arr7 = exampleArr2.entries(); // 拿到这个数组单项键值对；
        let arr8 = exampleArr2.values(); // 拿到键值组成的数组；
        let arr9 = exampleArr2.keys(); // 拿到键值对的key组成的数组；
        console.log(arr9,arr8,arr7);
        let arr10 = exampleArr2.includes(4);//判定是否含有这个值，boolean，补足indexof不能判断nan的情况；
        let arr11 = exampleArr2.some((item)=>{
            return item > 3
        })//全部为假才为假
        let arr12 = exampleArr2.every((item)=>{
            return item > 3
        })//全部为真才为真
    },
    hanshu(){
    // 这里是函数
    }
    

}

functionArray.arr();