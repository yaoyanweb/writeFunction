/*
 * @Author: your name
 * @Date: 2020-10-09 08:55:27
 * @LastEditTime: 2020-10-09 08:55:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /writeFunction/new.js
 */

function _new(fn,...res) {
    const obj = Object.create(fn.prototype);
    const result = fn.call(obj,...res);
    if(result !== null && ['function','object'].includes(result)){
        return result;
    }
    return obj; 
}


function Dog(name) {
    this.name = name;
}
Dog.prototype.bark = function () {
    console.log('wangwang');
}
Dog.prototype.sayName = function () {
    console.log('my name is ' + this.name);
}


let sanmao = _new(Dog, '三毛');
sanmao.bark(); //=>"wangwang"
sanmao.sayName(); //=>"my name is 三毛"
console.log(sanmao instanceof Dog); //=>true 
