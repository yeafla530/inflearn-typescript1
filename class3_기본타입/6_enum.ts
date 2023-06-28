// 숫자형 이넘
enum Shoes {
    Nike,
    Addidas
}

let myShoes = Shoes.Nike; // 0
let myShoes2 = Shoes.Addidas; // 1

console.log(myShoes) // 0

// 문자형 이넘
enum Shoes2 {
    Nike = '나이키',
    Addidas = '아디다스'
}


let myShoes3 = Shoes2.Nike; // '나이키'
let myShoes4 = Shoes2.Addidas; // '아디다스'

// "use strict";
// var Shoes2;
// (function (Shoes2) {
//     Shoes2["Nike"] = "\uB098\uC774\uD0A4";
//     Shoes2["Addidas"] = "\uC544\uB514\uB2E4\uC2A4";
// })(Shoes2 || (Shoes2 = {}));
// let myShoes3 = Shoes2.Nike; // '나이키'
// let myShoes4 = Shoes2.Addidas; // '아디다스'


// 이넘 활용
enum Answer {
    Yes = 'Y',
    No = 'N'
}


function askQustion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log('정답')
    }
    if (answer === Answer.No) {
        console.log('오답')
    }
}

// 다양한 형태의 문자를 넣을 수 있음
// askQustion('예쓰')
// askQustion('y')
// askQustion('Yes')

// enum에서 넘기는 값만 넘길 수 있다
askQustion(Answer.Yes)
// askQustion('Y')


