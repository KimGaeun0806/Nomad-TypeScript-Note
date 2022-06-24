const TypesOfTSPartTwo = () => {
    // 1
    type Player = {
        readonly name: string, // 요소들을 읽기전용으로 만들 수 있는 readonly 타입을 추가할 수 있음
        age?: number
    }
    const playerMaker = (name: string): Player => ({name})
    const zico = playerMaker("zico")
    // zico.name = 'onew' -> 이렇게 zico.name을 변경하려고 하면 에러 발생 


    // 2
    const numbers: readonly number[] = [1, 2, 3, 4]
    // numbers.push(1) -> readonly가 있기 때문에 작동하지 x
    // map이나 filter는 할 수 있음 


    // 3
    // Tuple -> 최소한의 길이를 가져야 하고, 특정 위치에 특정 타입이 있어야 함 
    const player: [string, number, boolean] = ["nico", 1, true] 
    // player는 3개의 요소를 가져야 하고, string number boolean 순서대로 요소가 있어야 함
    // player[0] = 1 -> 첫 번째 인덱스는 string이어야 하기 때문에 에러 발생



    // 4
    let a: undefined = undefined
    let b: null = null

    // 선택적 타입은 undefined가 될 수 있음
    type Player2 = {
        age?: number
    }
    // 의 경우 
    // type Player2 = {
    //     age?: number | undefined;
    // } 
    // 처럼 동작함 


    // 5
    let c = [] 
    // let c: any[] 로 취급됨
    // any는 아무 타입이나 될 수 있음
    // 사용하는 것을 권장하지 않음. js를 쓰는 것처럼 동작함.
}






