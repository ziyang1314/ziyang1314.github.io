
let functionArray = {
    // 阶乘--给定整数字逐级的乘积
    factorial(num) {
        var x = num;
        while (x > 1) {
            num *= x - 1;
            x--;
        }
        return num;
    }
}