"use strict";
function printName(person) {
    console.log(person.firstName + person.lastName, 333);
}
let lily = {
    firstName: 'li',
    lastName: 'ly'
};
printName(lily);
lily.firstName = 'wang';
printName(lily);
let lucy = {
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
let tom = {
    firstName: 't',
    lastName: 'om'
};
let jery = {
    firstName: 'je',
    lastName: 'ry',
    weight: 80
};
console.log(jery, 3333);
let iSay = function (person, info) {
    console.log(person + info, 333);
};
iSay('i', 'feel good');
class god {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName,
            this.lastName = lastName;
    }
}
let myGod = {
    firstName: 'yehehua',
    lastName: 'jidu'
};
console.log(myGod, 33333);
let ximing = {
    firstName: 'xi',
    lastName: 'ming',
    color: 'red',
    good: true
};
class Square {
    width;
    height;
    size;
    constructor(w, h, size) {
        this.width = w;
        this.height = h;
        this.size = size;
    }
}
let square = {
    width: 10,
    height: 10,
    size: 100
};
console.log(square, 333);
class Food {
    state;
}
let radish = {
    color: 'red',
    state: false
};
class baicai extends Food {
    color;
    constructor(color) {
        super();
        this.color = color;
    }
}
let ss = {
    color: 'white',
    state: false
};
//# sourceMappingURL=interface.js.map