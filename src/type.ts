// typescript 原始类型 string number boolean null undefined Symbol BigInt
let str:string = 'ab'
console.log(str, 333)
let num:number = 5
console.log(num, 333333333)
let bool:boolean = false
console.log(bool, 333)
let a:null = null
console.log(a, 33)
let b:undefined = undefined
console.log(b, 33)
let c:Symbol = Symbol(3)
console.log(c, 33)
let d:bigint = 4n
console.log(d, 34)

// 任意值类型 any  可以转换
let f: any = 444
f = false 
// 元组 tuple
let g: [string, number] = ['ss', 3] 
// 数组 array T[] and Arrye<T>
let h: number[] = [1,2,3,4]
let h1: Array<string> = ['red', 'blue']
console.log(h,h1, 3333333333)
// 函数 function 参数注释 和返回类型注释
function func(param:string): string {
    return param
}
function func2(param:number): void { // 没有返回值
    console.log(222)
}
// 枚举类型 enum //编号默认是从0开始 
enum Color {red=-7, yellow, blue}
let i:Color = Color.yellow
console.log(i, 33) // -6
enum page {a = 'string', b = 12, c } // 如果枚举类型第一个属性赋值不能作为索引，那么后面需要有一个赋值索引的数字赋值，或者全部手动赋值
let i1:page = page.a
console.log(i1, 44) // string
enum paeg1 { a = 2, b =4, c}
let i2:paeg1 = paeg1.c
console.log(i2, 333)
// object 
let j:object = {a: 1,b: 2}
console.log(j, 33)