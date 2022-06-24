const TypesofTSPartThree = () => {
    // 1
    let a: unknown
    // 변수의 타입을 모른다면 unknown을 사용할 수 있음
    // API로부터 응답을 받는데 그 응답의 타입을 모를 때와 같은 상황

    // 어떤 작업을 하려면 이 변수의 타입을 먼저 확인해야 함 
    if (typeof a === 'number') {
        let b = a + 1
    }
    // let b = a + 1만 작성하면 에러 발생 

    if (typeof a === 'string') {
        let b = a.toUpperCase()
    }


    // 2
    // 아무것도 return하지 않는 함수를 대상으로 사용 
    function hello() {
        console.log('x')
    }
    // function hello(): void 와 같음
    // 보통 void를 따로 지정해줄 필요는 없음


    // 3
    // 함수가 return하지 않을 때 사용

    // 함수에서 예외가 발생할 때
    function hi(): never {
        throw new Error('xxx') 
    }
    // return하지 않고 오류를 발생시킴

    // 타입이 두가지일 수 있는 상황
    function hallo(name: string | number) {
        if (typeof name === 'string') {
            // 여기서 name은 string
        }
        else if (typeof name === 'number') {
            // 여기서 name은 number
        }
        else {
            // 여기서 name은 never
            // 타입이 올바르게 들어온다면 이 코드를 실행되지 않아야 함
        }
    }
}