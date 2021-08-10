"use strict";
let str = 'ab';
console.log(str, 333);
let num = 5;
console.log(num, 333333333);
let bool = false;
console.log(bool, 333);
let a = null;
console.log(a, 33);
let b = undefined;
console.log(b, 33);
let c = Symbol(3);
console.log(c, 33);
let d = 4n;
console.log(d, 34);
let f = 444;
f = false;
let g = ['ss', 3];
let h = [1, 2, 3, 4];
let h1 = ['red', 'blue'];
console.log(h, h1, 3333333333);
function func(param) {
    return param;
}
function func2(param) {
    console.log(222);
}
var Color;
(function (Color) {
    Color[Color["red"] = -7] = "red";
    Color[Color["yellow"] = -6] = "yellow";
    Color[Color["blue"] = -5] = "blue";
})(Color || (Color = {}));
let i = Color.yellow;
console.log(i, 33);
var page;
(function (page) {
    page["a"] = "string";
    page[page["b"] = 12] = "b";
    page[page["c"] = 13] = "c";
})(page || (page = {}));
let i1 = page.a;
console.log(i1, 44);
var paeg1;
(function (paeg1) {
    paeg1[paeg1["a"] = 2] = "a";
    paeg1[paeg1["b"] = 4] = "b";
    paeg1[paeg1["c"] = 5] = "c";
})(paeg1 || (paeg1 = {}));
let i2 = paeg1.c;
console.log(i2, 333);
let j = { a: 1, b: 2 };
console.log(j, 33);
//# sourceMappingURL=type.js.map