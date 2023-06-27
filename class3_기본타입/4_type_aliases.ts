interface Person1 {
    name: string,
    age: number
}

type Person2 = {
    name: string,
    age: number
}

// interface Person1
let eseho: Person1 = {
    name: '세호',
    age: 30
}

// type Person2 = {
    // name: string, 
    // age: number
// }
let kimseho: Person2 = {
    name: '세호',
    age: 30
}

type MyString = string;
var str: MyString = 'hello'

type Todo = {id: string, title: string, done: boolean};
function getTodo(todo: Todo) {
    
}