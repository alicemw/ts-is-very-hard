// 接口 interface  1. 类型限制
interface Person {
    firstName: string,
    lastName: string
}

function printName(person: Person): void {
    console.log(person.firstName + person.lastName, 333)
}
let lily:Person = {
    firstName: 'li',
    lastName: 'ly'
}
printName(lily)
lily.firstName = 'wang'
printName(lily)
// 可选属性
interface Person2 {
    firstName?: string,
    lastName?: string
}
let lucy: Person2 = {
    firstName: 'lu'
}
function printName2(person: Person2): void {
    if(person.firstName && person.lastName){
        console.log(person.firstName + person.lastName, 333)
    }else{
        console.log(person.firstName || person.lastName)
    }
}
printName2(lucy)
// 只读属性 不能修改

interface Person3 {
    readonly firstName: string,
    readonly lastName: string
}
let tom: Person3 = {
    firstName: 't',
    lastName: 'om'
}
// 任意其他属性
interface Person4 {
    firstName: string,
    lastName: string,
    [propName: string]: any
}

let jery: Person4 = {
    firstName: 'je',
    lastName: 'ry',
    weight: 80
}
console.log(jery, 3333)
// 函数 类型

interface Say {
    (name: string, info: string) : void
}
let iSay: Say = function(person, info) {
    console.log(person + info, 333)
}
iSay('i', 'feel good')
// 实现接口 implements

class god implements Person4 {
    firstName: string
    lastName: string
    constructor(firstName: string, lastName: string){
        this.firstName = firstName,
        this.lastName = lastName
    }
}
let myGod:god = {
    firstName: 'yehehua',
    lastName: 'jidu'
}
console.log(myGod, 33333)
// 继承接口 extends

interface Person5 extends Person4 {
    color: string
}
let ximing: Person5 = {
    firstName: 'xi',
    lastName: 'ming',
    color: 'red',
    good: true
}
// 继承多接口 

interface height {
    height: number
}
interface width {
    width: number
}
interface size extends height, width {
    size: number
}
class Square implements size {
    width: number
    height:number
    size: number
    constructor(w:number,h:number,size:number){
        this.width = w
        this.height = h
        this.size = size
    }
}
let square:Square = {
    width: 10,
    height: 10,
    size: 100
}
console.log(square, 333)
// 接口继承类

class Food {
  state: any;
}
interface Vegetable extends Food {
    color: string
}

let radish: Vegetable = {
    color: 'red',
    state: false
}
class baicai extends Food implements Vegetable {
    color: string
    constructor(color: string) {
        super()
        this.color =color
    }
}
let ss: baicai = {
    color: 'white',
    state: false
}
