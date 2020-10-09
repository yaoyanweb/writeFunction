/*
 * @Author: your name
 * @Date: 2020-10-09 08:56:35
 * @LastEditTime: 2020-10-09 15:13:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /writeFunction/observer.js
 */
class Subject  {
    constructor(name){
        this.state = '默认状态';
        this.name = name;
        this.observerList = [];
    }
    setState(state){
        this.state = state;
        this.observerList.forEach((observer)=>{
            observer.updated(this);
        })
    }

    attach(observer){
        this.observerList.push(observer);
    }
}

class Observer {
    constructor(name){
        this.name = name;
    }
    updated(subject){
        console.log(`观察者${this.name}，被观察者：${subject.name}，状态：${subject.state}`)
    }
}

const body = new Subject('我是被观察者');
const parent = new Observer('我是被观察者全栈三火');
const parent1 = new Observer('我是被观察者全栈三火22222');

body.attach(parent);
body.attach(parent1);
body.setState('开心啊哈哈哈哈')