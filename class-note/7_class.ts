class Human {
    // 변수의 접근 범위
    // private : class내부에서만 사용
    // public : 전체 사용가능
    // readonly : 읽기만 가능 / 수정불가
    private name: string;
    public age: number;
    readonly log: string;

    constructor(name: string, age:number) {
        this.name = name
        this.age = age
    }
}

// 리액트 예전 문법
// class App extends ReadableStream.Component {

// }

// 리액트 최신 문법 - 훅 기반 함수형 코드
// function App() {
//     return <div>Hello World</div>
// }

// composition API
// new Vue({
//     el: '',
//     setup() {

//     }
// })