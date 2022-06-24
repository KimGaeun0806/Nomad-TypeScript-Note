const ImplicitTypesVsExplicitTypes = () => {
    // 1
    let a = "hello" 
    // 타입 추론. a가 string이라고 추론함.
    // 데이터와 변수의 타입을 명시적으로 정의하지 x 
    // a = "bye" -> string에서 string으로 변경은 ok
    // a = 1 -> string에서 number로 바꾸는 것은 x


    // 2
    let b: boolean = false 
    // b가 boolean이라는 것을 명시
    // 데이터와 변수의 타입을 명시적으로 정의


    // 3
    // 명시적 표현은 최소한으로 사용하는 것이 좋음 
    // let c: number[] = []과 같이 빈 배열을 정의할 때는 명시적 표현이 필요함 
}

