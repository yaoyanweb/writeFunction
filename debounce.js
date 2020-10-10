/*
 * @Author: your name
 * @Date: 2020-10-09 08:54:29
 * @LastEditTime: 2020-10-10 11:45:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /writeFunction/debounce-throttle.js
 */

// 防抖
function debounce(fn,time=1000){
    let _time = null;
    return function(...arg){
        clearTimeout(_time);
        _time = setTimeout(()=>{
            fn.call(this,...arg)
        },time)
    }
}