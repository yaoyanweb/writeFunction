/*
 * @Author: your name
 * @Date: 2020-10-09 08:55:17
 * @LastEditTime: 2020-10-09 19:04:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /writeFunction/call.js
 */

Function.prototype.myCall = function(thisObj,...arg){
    thisObj = thisObj == undefined ? window:thisObj;
    const fn = Symbol('fn');
    const type = typeof thisObj;
    if(!['function','object'].includes(type)){
        if(['bigint','symbol'].includes(type)){
            thisObj = Object(thisObj);
        }else {
            thisObj = new thisObj.constructor(thisObj)
        }
    }
    thisObj[fn] = this;
    const result = thisObj[fn](...arg);
    delete thisObj[fn];
    return result;
}

let obj = {
    name:555
}
var name = 100;

function test() {
    console.log(this.name);
}

test.myCall(obj,'哈哈哈哈');