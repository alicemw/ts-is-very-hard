interface EG1 {
    name: string,
    readonly age: number
}
type T1 = keyof EG1 // T1 name | age


type v1 = EG1['name']
type v2 = EG1['name' | 'age']
type v3 = EG1['name'|'age2222']