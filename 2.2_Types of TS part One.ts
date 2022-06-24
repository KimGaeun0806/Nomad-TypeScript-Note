const TypesOfTSPartOne = () => {
    // 1
    let a: number[] = [1, 2]               // number 타입의 array
    let b: string[] = ['zico', 'onew']     // string 타입의 array
    let c: boolean[] = [true]              // boolean 타입의 array


    // 2 
    const player: object = {
        name: 'nico'
    } 
    // 이 경우 player.name을 쓸 수 없음
    // object에는 name이라는 요소가 없기 떼문


    // 3
    const playerNico: {
        name: string,
        age?: number // 물음표를 붙여서 age를 선택적 변수(Optional Parameter)로 만듦 
    } = {
        name: 'nico'
    }

    if (playerNico.age && playerNico.age < 10) {
        // playerNico.age < 10만 쓰게 되면 Object is possibly 'undefined' 라는 경고가 뜨게 됨. playerNico.age가 존재하는지 확인을 거쳐야 함.
    }


    // 4
    type Player = { // 첫글자 대문자로 
        name: string,
        age?: number
    }
    // 별칭 타입(Alias Type)
    // 똑같은 코드를 계속 반복하는 것을 방지하기 위해 사용. 코드를 재사용할 수 있음. 

    const lynn: Player = {
        name: "lynn",
        age: 22
    }


    // 5
    function playerMaker(name: string): Player { // : Player을 붙임 -> 함수가 Player 타입을 return한다는 뜻 
        return {
            name // name: name과 같은 의미
        }
    }

    const nico = playerMaker("nico")
    nico.age = 12 // playerMaker가 Player 타입을 return한다는 것을 알려주지 않으면 오류가 생김


    // 6
    const playerMaker2 = (name: string): Player => ({name})
    // 화살표 함수에서 함수의 타입을 지정하는 방법 
}



