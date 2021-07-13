// typescript 原始类型 string number boolean null undefined Symbol BigInt
var str = 'ab';
console.log(str, 333);
var num = 5;
console.log(num, 333333333);
var bool = false;
console.log(bool, 333);
var a = null;
console.log(a, 33);
var b = undefined;
console.log(b, 33);
var c = Symbol(3);
console.log(c, 33);
var d = 4n;
console.log(d, 34);
// 任意值类型 any  可以转换
var f = 444;
f = false;
// 元组 tuple
var g = ['ss', 3];
// 数组 array T[] and Arrye<T>
var h = [1, 2, 3, 4];
var h1 = ['red', 'blue'];
console.log(h, h1, 3333333333);
// 函数 function 参数注释 和返回类型注释
function func(param) {
    return param;
}
function func2(param) {
    console.log(222);
}
// 枚举类型 enum //编号默认是从0开始 
var Color;
(function (Color) {
    Color[Color["red"] = -7] = "red";
    Color[Color["yellow"] = -6] = "yellow";
    Color[Color["blue"] = -5] = "blue";
})(Color || (Color = {}));
var i = Color.yellow;
console.log(i, 33); // -6
var page;
(function (page) {
    page["a"] = "string";
    page[page["b"] = 12] = "b";
    page[page["c"] = 13] = "c";
})(page || (page = {})); // 如果枚举类型第一个属性赋值不能作为索引，那么后面需要有一个赋值索引的数字赋值，或者全部手动赋值
var i1 = page.a;
console.log(i1, 44); // string
var paeg1;
(function (paeg1) {
    paeg1[paeg1["a"] = 2] = "a";
    paeg1[paeg1["b"] = 4] = "b";
    paeg1[paeg1["c"] = 5] = "c";
})(paeg1 || (paeg1 = {}));
var i2 = paeg1.c;
console.log(i2, 333);
// object 
var j = { a: 1, b: 2 };
console.log(j, 33);
