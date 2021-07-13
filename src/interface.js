var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function printName(person) {
    console.log(person.firstName + person.lastName, 333);
}
var lily = {
    firstName: 'li',
    lastName: 'ly'
};
printName(lily);
lily.firstName = 'wang';
printName(lily);
var lucy = {
    firstName: 'lu'
};
function printName2(person) {
    if (person.firstName && person.lastName) {
        console.log(person.firstName + person.lastName, 333);
    }
    else {
        console.log(person.firstName || person.lastName);
    }
}
printName2(lucy);
var tom = {
    firstName: 't',
    lastName: 'om'
};
var jery = {
    firstName: 'je',
    lastName: 'ry',
    weight: 80
};
console.log(jery, 3333);
var iSay = function (person, info) {
    console.log(person + info, 333);
};
iSay('i', 'feel good');
// 实现接口 implements
var god = /** @class */ (function () {
    function god(firstName, lastName) {
        this.firstName = firstName,
            this.lastName = lastName;
    }
    return god;
}());
var myGod = {
    firstName: 'yehehua',
    lastName: 'jidu'
};
console.log(myGod, 33333);
var ximing = {
    firstName: 'xi',
    lastName: 'ming',
    color: 'red',
    good: true
};
var Square = /** @class */ (function () {
    function Square(w, h, size) {
        this.width = w;
        this.height = h;
        this.size = size;
    }
    return Square;
}());
var square = {
    width: 10,
    height: 10,
    size: 100
};
console.log(square, 333);
// 接口继承类
var Food = /** @class */ (function () {
    function Food() {
    }
    return Food;
}());
var radish = {
    color: 'red',
    state: false
};
var baicai = /** @class */ (function (_super) {
    __extends(baicai, _super);
    function baicai(color) {
        var _this = _super.call(this) || this;
        _this.color = color;
        return _this;
    }
    return baicai;
}(Food));
var ss = {
    color: 'white',
    state: false
};
