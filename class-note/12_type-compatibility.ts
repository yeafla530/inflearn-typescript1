interface De {
    name: string;
    skill: string;
}

interface Person10 {
    name: string;
}

class Person11 {
    name: string
    skill: string;
}



let developer10: De;
let person10: Person10;
let person11: Person11;
// developer가 더 많은 속성을 가지고 있기 때문에 error
// developer10 = person10
// 동일하다면 class이든 interface든 error안남
developer10 = new Person11()

// 오른쪽에 있는 타입이 왼쪽에 있는 타입을 포괄하고 있는 경우엔 호환가능
person10 = developer10;



// 함수
// add보다 sum이 크다
let add = function(a: number) {
    // ...
}

let sum5 = function(a: number, b: number) {
    // ...
} 

// add = sum // error
sum5 = add


// 제너릭
interface Empty<T> {
    //..
}
var empty2: Empty<number> = 1;
var empty3: Empty<string> = '5';
empty3 = empty2

interface NotEmpty<T> {
    data: T
}

var notempty1: NotEmpty<string> = {
    data: '1'
}
var notempty2: NotEmpty<number> = {
    data: 55
}

// 내부 타입이 정의되어있기 때문에 같지않음
notempty1 = notempty2

