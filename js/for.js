// for 循环 的多种形式

let arryExample = [1, 2, 3, 4];
let objectExmple = { time: "2020", name: "zhuzhiyang" };

// for in
console.log("for in =-=-=-==-=-=-=-")

for(let key in arryExample){
    console.log(key); // 得到索引，序号 0,1这样的字符串
}

for(let key in objectExmple){
    console.log(key); // 得到key
}

// for of
console.log("for of =-=-=-==-=-=-=-")

for(let key of arryExample){
    console.log(typeof key);  // 得到的是序号 0,1,2 但是是数字；
}

// for(let key of objectExmple){
//     console.log(key); // for of 不可遍历对象 errorObject is not iterable
// }

// foreach map each every some index findindex 

arryExample.forEach((item,index,arry)=>{
    console.log(item,index,arry);// 返回值是undefined 并且循环不能够被终止；
});
console.log(arryExample);
let result2 = arryExample.map((item,index,arry)=>{
    console.log(item,index,arry); // 返回值是一个新的数组，如果不是为了得到新数组，是不该使用这个方法的，不影响原来的数组
    return item>1
})

console.log(result2);

let result = arryExample.filter((item,index,arry)=>{
    console.log(item,index,arry);
    return item > 1; // 有返回值，是得到新的数组；不影响原来的数组
})
console.log(result);
console.log(arryExample);