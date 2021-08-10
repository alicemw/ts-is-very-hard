interface EG1 {
    name: string;
    readonly age: number;
}
declare type T1 = keyof EG1;
declare class EG2 {
    private name;
    readonly age: number;
    protected home: string;
}
