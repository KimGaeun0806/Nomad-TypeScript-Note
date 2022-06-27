const OverLoading = () => {
    // 1
    // 오버로딩은 서로 다른 여러 개의 Call Signatures를 가지고 있는 함수 
    type Add = {
        (a: number, b: number): number
        (a: number, b: string): number
    }

    const add: Add = (a, b) => {
        if (typeof b === "string") return a
        return a + b // return a + b만 한다면, b가 string일 수도 있고 number일 수도 있기 때문에 에러가 남
    } // 좋은 예시는 아님


    // 2
    // NextJS에서 사용할 만한 예시
    // Router.push({
    //     path: "/home",
    //     state: 1
    // })
    // .push("/home")

    type Config = {
        path: string,
        state: object
    }
    type Push = {
        (path: string): void
        (config: Config): void
    }
    const push: Push = (config) => {
        if (typeof config === "string") console.log(config) // 여기서 config는 string
        else console.log(config.path, config.state)         // 여기서 config는 Config 타입 객체 
    }


    // 3
    // Call Signatures마다 파라미터의 개수가 다를 때 
    type Add2 = {
        (a: number, b: number): number
        (a: number, b: number, c: number): number
    }
    
    const add2: Add2 = (a, b, c?: number) => { // c 파라미터는 옵션. c 파라미터가 선택사항이라는 것을 알려줌. 
        if (c) return a + b + c
        return a + b
    }

    add2(1, 2)
    add2(1, 2, 3)
}