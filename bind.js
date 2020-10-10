/*
 * @Author: your name
 * @Date: 2020-10-09 18:05:19
 * @LastEditTime: 2020-10-09 18:05:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /writeFunction/bind.js
 */
Function.prototype.myBind = function(thisArg){
    thisArg = thisArg == undefined ? window : thisArg;
    const type = typeof thisArg;
    const fn = Symbol('fn');
    if(!['function','object'].includes(type)){
        if(['bigint','symbol'].includes(type)){
            thisArg = Object(thisArg);
        }else {
            thisArg = new thisArg.constructor(thisArg);
        }
    }
    thisArg[fn] = this;
    return  (...res)=> {
        const result = thisArg[fn](...res);
        delete thisArg[fn];
        return result
    }
}

var obj = {
    name:1111
}

function  test() {
    console.log(this.name);
}
test.myBind(obj)();
