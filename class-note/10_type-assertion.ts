// 타입 단언
let ab;
ab = 20;
ab = 'a'

// let ba: any
// 맨 처음에 정의된 타입을 기준으로 추론됨
let ba = ab;
// as를 통해 타입을 정의해줌
let bc = ab as string;

// DOM API 조작
// <div id="app">hi</div>


let div = document.querySelector('div');
if (div) {
    div.innerText
}

// let div: HTMLDivElement => null값이 사라짐
// 개발자인 내가 type을 더 잘 알고있다 
// 타입을 내가 정의한대로 실행
let div2 = document.querySelector('.container') as HTMLDivElement;
div2.innerText