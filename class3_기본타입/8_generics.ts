// function logText(text) {
//     console.log(text)
//     return text;
// }

// logText('hi') // 문자 'hi'
// logText(8) // 숫자 8
// logText(true); // 진위값 true


///////// 제너릭
// 장점 : 함수 중복 선언 방지 (코드의 가독성, 유지보수 측면에서 좋음)
function logText<T>(text: T): T {
    console.log(text)
    return text
}

logText<string>('hi') // 문자 'hi'
logText<number>(8) // 숫자 8
logText<boolean>(true); // 진위값 true


///////// 함수 중복 선언
// 동일한 코드를 타입이 다르다는 이유로 함수를 중복 선언중
function logText2(text: string) {
    console.log(text)
    // string일때 가능
    // text.split('').reverse().join('')
    return text
} 

function logNumber(num: number) {
    console.log(num)
    return num
}


logText2('a')
const num = logNumber(10)


//////// 유니온 타입
// 단점 : string과 number 공통적으로 사용되는 속성만 사용가능
function logText3(text: string | number ) {
    console.log(text)
    return text
}

const abc = logText3('a')
// string이라고 추론하지 못함
// abc.split('')
// logText(10)



//////// 제너릭 장점
// T : 이 타입을 받을거야
// 타입에 무엇이 들어갈거다 호출한 시점에 정의하는 제너릭
function logText5<T>(text: T): T {
    console.log(text)
    return text
}

const string = logText5<string>('a')
string.split("")

const login = logText5<boolean>(true)



// 인터페이스에 제너릭 선언하는 방법
interface Dropdown1 {
    value: string;
    selected: boolean;
}

// const obj: Dropdown1 = {value: 10, selected: false};

// type이 고정값이 아닌 유동적일때 제너릭을 통해 받을 수 있다
interface DropDown2<T> {
    value: T;
    selected: boolean
}

const obj5: DropDown2<string> = {value: 'abc', selected: false}


// 제너릭 타입제한
// function logTextLength<T>(text: T[]): T[] {
//     console.log(text.length);
//     text.forEach(function (text) {
//         console.log(text) 
//     })
//     return text;
// }

// logTextLength<string>(['hi', 'abc'])
// 'abc'.length


// // 제너릭 타입제한 2 - 정의된 타입 이용하기
interface LengthType {
    // return 값이 number
    length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
    text.length;
    return text
}
logTextLength('a')
// logTextLength(10) // error
let a = logTextLength({length:10})
console.log(a) // { length: 10 }




// 제너릭 타입 제한 3 - keyof
// 3가지중 한개만 받겠다 제약
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

// 쇼핑아이템 key들중 한가지가 type이 된다
function getShoppingItemOPtion<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption
}

// getShoppingItemOPtion(10) // 3가지에 대해서 받을 수있기 때문에 
// getShoppingItemOPtion<string>('a')

// ctrl + space
console.log(getShoppingItemOPtion("name"))
console.log(getShoppingItemOPtion("price"))
console.log(getShoppingItemOPtion("stock"))

