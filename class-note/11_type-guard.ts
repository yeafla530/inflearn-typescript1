interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number
}

function introduce(): Developer | Person {
    return {name: 'Tony', age: 33, skill: 'Iron making'}
}

let tony = introduce()
// console.log(tony.skill) // Error
console.log(tony.name) // 공통특성만 사용가능

// 단언을 통해 특성 사용
if ((tony as Developer).skill) {
    let skill = (tony as Developer).skill;
    console.log(skill)
} else if ((tony as Person).age) {
    let age = (tony as Person).age;
    console.log(age)

}



///// 타입가드 사용 (is)
// 해당 타입인지 구분함
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
    console.log(tony.skill)
} else {
    console.log(tony.age)
}