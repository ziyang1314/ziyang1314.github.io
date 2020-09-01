console.log('js基础学习'); 

// 获取属性和设置属性
let myImage = document.getElementById('setattr');
myImage.onclick = function () {
    let attrSrc = myImage.getAttribute('src');
    console.log(attrSrc);
    if(attrSrc === './image/img1.png') {
       myImage.setAttribute('src','./image/img2.jpeg'); 
    }else {
       myImage.setAttribute('src','./image/img1.png'); 
    }
}


// 练习内容；

let btn = document.querySelector('button');
let ht = document.querySelector('h1');

function setUserName(){
   let myName = prompt('enter your name !');
   localStorage.setItem('name',myName);
   ht.textContent = '通过prompt，输入名字存储到storage中，用textcontent做内容插入' 
}

btn.onclick = function () {
    setUserName();
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
   let content = localStorage.getItem('name');
   ht.textContent = '获取到的数据：'+ content;
}
