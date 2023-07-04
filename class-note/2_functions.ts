// 함수의 파라미터에 타입을 정의하는 방식
function sum_ts(a: number, b: number) {
    return a + b
}

sum_ts(10, 20);



// 함수의 반환값에 타입을 정의하는 방식
// 숫자가 반환이 되어야함
function add() : number {
    return 10
}

// 함수에 타입을 정의하는 방식
function sum2(a: number, b : number):number {
    return a + b
}
// sum2(10, 20, 30, 40) // 30, 2개 초과의 인자를 받지 않는다 
sum2(10, 20)


// 함수의 옵셔널 파라미터
// ?: => 옵셔널 파라미터, 넣어도 되고 안넣어도 됨
function log(a: string, b?: string) {
    console.log(a)
}
log('hello world')
// log('hello ts', new Person());
