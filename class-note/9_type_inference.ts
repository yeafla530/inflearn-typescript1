// Duck Typing : 타입 체크는 값의 형태에 기반하여 이루어져야 한다


////// 1. 타입 추론 기본
// 타입이 무엇인지 알려주는 "타입추론"
let abbbb = 10;

// 기본값 10 설정
// function getB(b?: number): string
function getB(b = 10) {
    let c = 'hi';
    return b + c
}


10 + '10' // 1010


//////// 2. 타입 추론 기본2
// interface Dropdown<T> {
//     value: T;
//     title: string;
// }

// let shoppingItem: Dropdown<string> = {
//     value: "123",
//     title: 'hi'
// }



///////////// 3. 타입 추론 기본 3
interface Dropdown<T> {
    value: T;
    title: string;
}

// Dropdown에도 K type이 적용됨
interface DetailDropdown<K> extends Dropdown<K>{
    description: string;
    tag: K;
    // 암묵적으로 Dropdown에 있는 값이 들어감
    // value,
    // title
}

// value와 tag값이 string이 됨
let detailedItem: DetailDropdown<string> = {
    description: 'abc',
    title: 'abc',
    value: "560",
    tag: '123'
}

////// 4. 가장 적절한 타입 (Best Common Type)
// 가장 근접한 타입을 추론

// let arr: (string | number | boolean)[]
let arr = [1, 2, true, true, 'a']


/////// 5. 문맥상 타이핑

// mouseEvent 인자에 button 속성은 있지만 kangaroo 속성은 없다고 결론냄
window.onmousedown = function(mouseEvent) {
    console.log(mouseEvent.button);   //<- OK
    console.log(mouseEvent.kangaroo); //<- Error!
};

