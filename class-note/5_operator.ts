// 타입의 장점이 없어짐
function logMessage(value: any) {
    console.log(value)
}

logMessage('hello');
logMessage(100);



// | : 유니온 타입 - 하나 이상의 타입을 쓸 수 있도록 함 
// 실무에서 더 많이 쓰임

let minji: string | number | boolean;

// 타입가드 : 특정 타입으로 타입의 범위를 좁혀나가는(필터링하는) 과정
function logMessage2(value: string | number) {
    // console.log(value)
    if (typeof value === 'number') {
        // value를 number로 추론해줌
        // number에 대한 api속성 확인가능
        value.toLocaleString()
    }
    if (typeof value === 'string') {
        value.includes('a')
    }

    throw new TypeError('value must be string or number')
}

logMessage2('hello')
logMessage2(100)


// 유니온 타입의 특징
interface Developer2 {
    name: string,
    skill: string,
}

interface Person3 {
    name: string,
    age: number
}

function askSomone(someone: Developer2 | Person3) {
    // 공통속성인 name만 적용가능
    someone.name
    // Error
    // someone.age
    // someone.skiill
}

askSomone({name: 'Deveoper', skill: '웹개발'})
askSomone({name: 'yerm', age: 27})


// & : 인터섹션
let seol: string | number | boolean;
let ye: string & number & boolean;

// 유니온타입과 달리 에러가 나지 않음
function askSomone2(someone: Developer2 & Person3) {
    // 공통속성인 name만 적용가능
    someone.name
    someone.age
    someone.skill
}

// 두 타입의 합집합
// 세가지 조건이 다 들어가야함
askSomone2({name: 'yeam', skill: '웹개발', age: 28})