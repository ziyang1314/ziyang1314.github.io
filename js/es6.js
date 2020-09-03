
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
    creatObject(){
        
        let objectExmple = {
            lily:{name:"lily",age:28,sex:'female'}
        }
        let keyone = new Object(objectExmple);
        let keyTwo = Object.create(objectExmple);
        let keyThree = Object.assign(objectExmple);
        // 上面的无论哪种都是对创建的对象的引用，都会具有引用传递的特征；
    },
    // 对象---对象原型、原型链
    objectProperty(){
    // 面向对象是对面向过程的抽象，比较：https://www.cnblogs.com/nanqiang/p/9934063.html
    // 原型链：每个对象都有一个原型，_proto_，即使是new的新对象，对象以其原型为模板，从原型继承方法和属性，原型也可以有自己的原型，因此我们使用一个对象方法或者属性的时候就会，
    //        如果找不到就会在该对象的原型上找，如果原型还有原型，那么就会一直找下去，这就想一个链条一样，找不到机会报undefined
    // 学习到继承；
   }
}