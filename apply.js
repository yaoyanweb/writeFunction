/*
 * @Author: your name
 * @Date: 2020-10-09 08:55:22
 * @LastEditTime: 2020-10-09 19:15:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /writeFunction/apply.js
 */
Function.prototype.myApply = function (thisArg,res) {
    if(!Array.isArray(res)){
        throw('不是数组');
        return;
    }
    thisArg = thisArg == undefined ? window : thisArg;
    const fn = Symbol('fn');
    const type = typeof thisArg;
    if(!['function','object'].includes(type)){
        if(['bigint','symbol'].includes(type)){
            thisArg = Object(type);
        }else {
            thisArg = new thisArg.constructor(thisArg);
        }
    }
    thisArg[fn] = this;
    const result = thisArg[fn](thisArg,res);
    delete thisArg[fn];
    return result;
}

var obj = {
    name:1111
}

function  test() {
    console.log(this.name);
}
test.myApply(obj,[1,2,3])