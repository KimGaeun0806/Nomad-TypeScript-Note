const GenericsRecap = () => {
    type SuperPrint = <T, M>(a: T[], b: M) => T
    // ts는 제네릭을 처음 인식했을 때와 제네릭의 순서를 기반으로 제네릭의 타입을 알게 됨 
    // any와는 다름. 우리가 요청함에 따라 Call Signatures를 생성하는 것. 

    const superPrint: SuperPrint = (arr) => arr[0]

    const a = superPrint([1, 2, 3, 4], "x") 
    const b = superPrint([true, false, true], 1)
    const c = superPrint(["a", "b", "c"], false)
    const d = superPrint([1, 2, true, false], []) 
}