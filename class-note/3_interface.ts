// 인터페이스 : 특정 형식
interface User {
    age: number,
    name: string
}

// 변수에 인터페이스 활용
let seho: User = {
    age: 33,
    name: '세호'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user)
}

const capt = {
    age: 30,
    name: '캡틴'
}
getUser(capt)

// 함수의 스펙(구조)에 인터페이스 활용
interface SumFunction {
    // 인자와 return값 type정의
    (a : number, b:number):number;
}

let sum_a: SumFunction;

sum_a = function(a:number, b:number):number {
    return a + b
}

// function sum(a, b) {
//     return a + b
// }


// 인덱싱
interface StringArray {
    [index: number]: string;
}

let arr: StringArray = ['a', 'b', 'c']
arr[0] // 'a'
// 안되는 이유는 인덱싱했을 때 값이 string이어야 하기 떄문
// arr[0] = 10 


// 인터페이스 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp;
}

let obj:StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/
}

// Regex가 아니기 때문에 오류가 남
// obj['cssFile'] = 'a'
// 추론 가능
Object.keys(obj).forEach(function(value){

})

// 인터페이스 확장
interface Person {
    name: String,
    age: number
}

// Person의 인터페이스 상속
interface Developer extends Person{
    language: string
}

let yerm: Developer = {
    language: 'python',
    name: 'yerm',
    age: 28
}