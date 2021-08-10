let unusable: void = undefined
let u:undefined = undefined
let n:null = null
let b3: string | number
function getLength(param: string | number): string {
    return param.toString()
}
console.log(getLength('sf'))
interface ss {
    name: string,
    age: number,
    [propName: string]: any
}
const lu3cy: ss = {
    name: 'lily',
    age: 10,
    d: '5',
    g: '4'
}
let sum:(x:number, y:number) => number = function(x: number, y: number) {
    return x + y
}

function reverse(x: number | string): number | string {
    if(typeof x === "number") {
        return Number(x.toString().split('').reverse().join(''))
    }else{
        return x.toString().split('').reverse().join('')
    }
}
console.log(reverse('abcd'))

function reverse1(x: string): string
function reverse1(x: number): number
function reverse1(x: number | string): string | number | void {
    if(typeof x === "number") {
        return Number(x.toString().split('').reverse().join(''))
    }else{
        return x.toString().split('').reverse().join('')
    }
}
let str1: string = 'sss'
interface Cat {
    name: string,
    run(): void
}
interface Fish {
    name:string,
    swim():void
}
function swim(animal: Cat | Fish) {
   ( animal as Fish).swim()
}
let sd: Fish = {
    name: 'tom',
    swim(){ console.log(4444444444)}
}
swim(sd)
interface Alarm {
    alert(): void
}
interface Light {
    lightOn(): void,
    lightOff(): void
}
interface AlarmLight extends Alarm, Light {

}
var a1: AlarmLight = {
    alert(){},
    lightOff(){},
    lightOn(){}
}
class Point {
    x: number
    y: number
    constructor(x:number, y:number){
        this.x = x
        this.y = y
    }
}
interface Point3D extends Point {
    z: number
}
var b2: Point3D = {
    x:1,
    y:1,
    z:1
}

interface Main {
    name: string
}
interface Main {

    guess(): string
}

const sl: Main = {
    name: '1',
    guess(): string{
        return '3'
    }
}
console.log(sl, 5423)
interface ball {
    size: string
}
interface ball2 {
    weight: number
}
type jie = ball & ball2

const a4: jie = {
    size: 'big',
    weight: 100
}

















































































