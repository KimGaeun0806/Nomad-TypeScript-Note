const CallSignatures = () => {
    // 1
    // 함수의 타입을 만들 수 있음 
    // 함수 위에 마우스를 올렸을 때 뜨는 것이 Call Signatures임
    // 인자의 타입과 함수의 반환 타입을 알려줌
    const add = (a: number, b: number) => a + b // (a: number, b: number) => number 가 Call Signatures임 


    // 2
    type Add = (a: number, b: number) => number  // 함수의 Call Signatures 타입을 만든 것
    const add2: Add = (a, b) => a + b 
}