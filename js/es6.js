
let functionArray = {
    // 阶乘--给定整数字逐级的乘积
    factorial(num) {
        var x = num;
        while (x > 1) {
            num *= x - 1;
            x--;
        }
        return num;
    },
    // 有关数组的操作
    arryOperation(){
        let arry = [1,2,3,4,5,6];
        console.log(arry.push(7));
        console.log(arry.pop(7));
        console.log(arry.shift(0));
        console.log(arry.unshift(0));
    }
}
functionArray.arryOperation();