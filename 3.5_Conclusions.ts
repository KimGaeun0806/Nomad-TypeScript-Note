const Conclusions = () => {
    // 1
    function superPrint<T>(a: T[]) {
        return a[0]
    }
    // type SuperPrint = <T>(a: T[]) => T
    // const superPrint: SuperPrint = (arr) => arr[0]
    // 와 똑같지만 다른 방법으로 선언한 것 


    // 2
    type Player<E> = {
        name: string
        extraInfo: E
    } // 타입을 재사용할 수 있음 

    const nico: Player<{favFood: string}> = {
        name: "nico",
        extraInfo: {
            favFood: "kimchi"
        }
    }

    const lynn: Player<null> = {
        name: "lynn",
        extraInfo: null
    }


    // 3
    type A = Array<number> // number로 된 Array
    let a: A = [1, 2, 3, 4]


    // 4
    function printAllNumbers(arr: number[]) {}
    function printAllNumbers2(arr: Array<number>) {} // 위의 방법과 똑같음


    // 5
    // react에서는 'useState<number>()' 처럼 작성할 수 있음 -> UseState의 Call Signatures가 number 타입의 useState가 됨 
}