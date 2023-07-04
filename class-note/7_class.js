// ES2015 (ES6)
// 아래 class와 같다

// 생성자함수 : class를 이용하지 않고도 사용가능하다
function Person(name, age) {
    this.name = name
    this.age = age

}

let ab = new Person('캡틴', 100)

// 생성자 함수로 변환가능
class Person {
    // 클래스 로직
    // 1. 초기화 
    constructor(name, age) {
        console.log('생성되었습니다')
        this.name = name
        this.age = age
    }
}


let seho = new Person('세호', 30); // 생성 되었습니다.
console.log(seho);

// 생성되었습니다
// Person { name: '세호', age: 30 }

let user = {name: 'capt', age: 100};

// let admin = {name: 'capt', age: 100, role: 'admin'}
let admin = {}
// 상속
// __proto__ : prototype에 user를 내려받는다
admin.__proto__ = user;
console.log(admin.name) // capt
console.log(admin.age) // 100

admin.role = 'admin'
console.log(admin) // { role: 'admin' }
// [[Prototype]] : Object
// age: 100
// name: 'capt'


//Object MDN : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object
// 내장 객체
// Built-in Javascript API
let obj = {a : 10}

Object.keys(obj) // ["a"]
obj.toString();


let user2 = {name: 'yerm', age: 100}
let arr = []
// array의 프로토타입 (__proto__)이 Array라 되어있기 때문에 내장객체 사용가능했다
arr.push(1) 