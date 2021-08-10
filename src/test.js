var unusable = undefined;
var u = undefined;
var n = null;
var b3;
function getLength(param) {
    return param.toString();
}
console.log(getLength('sf'));
var lu3cy = {
    name: 'lily',
    age: 10,
    d: '5',
    g: '4'
};
var sum = function (x, y) {
    return x + y;
};
function reverse(x) {
    if (typeof x === "number") {
        return Number(x.toString().split('').reverse().join(''));
    }
    else {
        return x.toString().split('').reverse().join('');
    }
}
console.log(reverse('abcd'));
function reverse1(x) {
    if (typeof x === "number") {
        return Number(x.toString().split('').reverse().join(''));
    }
    else {
        return x.toString().split('').reverse().join('');
    }
}
var str1 = 'sss';
function swim(animal) {
    animal.swim();
}
var sd = {
    name: 'tom',
    swim: function () { console.log(4444444444); }
};
swim(sd);
var a1 = {
    alert: function () { },
    lightOff: function () { },
    lightOn: function () { }
};
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var b2 = {
    x: 1,
    y: 1,
    z: 1
};
var sl = {
    name: '1',
    guess: function () {
        return '3';
    }
};
console.log(sl, 5423);
var a4 = {
    size: 'big',
    weight: 100
};
