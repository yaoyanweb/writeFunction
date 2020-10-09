/*
 * @Author: your name
 * @Date: 2020-10-09 08:55:59
 * @LastEditTime: 2020-10-09 10:12:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /writeFunction/publishSubscription.js
 */
const e = {
    valueList:[],
    callBackList:[],
    on(callBakk){
        this.callBackList.push(callBakk)
    },
    emit(val){
        this.valueList.push(val);
        this.callBackList.forEach((fn)=>{
            fn(this.valueList);
        })
    }
}

function test(val){
    console.log(val,'打印')
};

e.on(test);

e.emit('全栈三火');
e.emit('全栈三火');