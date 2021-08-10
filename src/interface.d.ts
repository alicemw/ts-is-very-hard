interface Person {
    firstName: string;
    lastName: string;
}
declare function printName(person: Person): void;
declare let lily: Person;
interface Person2 {
    firstName?: string;
    lastName?: string;
}
declare let lucy: Person2;
declare function printName2(person: Person2): void;
interface Person3 {
    readonly firstName: string;
    readonly lastName: string;
}
declare let tom: Person3;
interface Person4 {
    firstName: string;
    lastName: string;
    [propName: string]: any;
}
declare let jery: Person4;
interface Say {
    (name: string, info: string): void;
}
declare let iSay: Say;
declare class god implements Person4 {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string);
}
declare let myGod: god;
interface Person5 extends Person4 {
    color: string;
}
declare let ximing: Person5;
interface height {
    height: number;
}
interface width {
    width: number;
}
interface size extends height, width {
    size: number;
}
declare class Square implements size {
    width: number;
    height: number;
    size: number;
    constructor(w: number, h: number, size: number);
}
declare let square: Square;
declare class Food {
    state: any;
}
interface Vegetable extends Food {
    color: string;
}
declare let radish: Vegetable;
declare class baicai extends Food implements Vegetable {
    color: string;
    constructor(color: string);
}
declare let ss: baicai;
