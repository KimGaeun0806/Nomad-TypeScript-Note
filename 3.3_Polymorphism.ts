const Polymorphism = () => {
    // generic은 type의 placeholder같은 것. concrete type (number, string, boolean 타입 등) 대신 사용할 수 있음.
    // Call Signatures를 작성할 때, 들어갈 확실한 타입을 모를 때 generic을 사용함
    type SuperPrint = {
        <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder
        // <>는 Call Signatures가 제네릭을 받는다고 알려주는 것 
        // <> 안의 이름은 아무거나 해도 됨. <T>(arr: T[]): T 처럼 쓸 수도 있음.
        // (arr: number[]): void, (arr: boolean[]): void 같은 것들을 모두 적을 필요가 없어짐
    }

    const superPrint: SuperPrint = (arr) => arr[0]

    const a = superPrint([1, 2, 3, 4]) 
    // 이 라인에서 typescript는 superPrint 함수에 number 타입이 주어졌다는 것을 알게 됨 
    // const superPrint: <number>(arr: number[]) => void 처럼 placeholder는 number로 바뀜
    // const a: number

    const b = superPrint([true, false, true])
    // const b: boolean

    const c = superPrint(["a", "b", "c"])
    // const c: string

    const d = superPrint([1, 2, true, false]) 
    // const superPrint: <number | boolean>(arr: (number | boolean)[]) => void
    // const d: number | boolean
}