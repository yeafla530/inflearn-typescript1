// // 매번 타입정의를 인터페이스로 정의 => 제너릭으로 변환
// interface Email {
//   value: string;
//   selected: boolean;
// }
// interface ProductNumber {
//   value: number;
//   selected: boolean;
// }

// interface TrueFalse {
//   value: boolean;
//   selected: boolean;
// }


// 제너릭 장점 : 타입 코드를 줄일 수 있다
interface DropdownItem<T> {
  value: T
  selected: boolean
}

const emails: DropdownItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];


const numberOfProducts: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

// 배열의 값을 받아서 select > option값 만들어줌
// {value: number or string; selected: boolean} value는 두가지를 받을 수 있음

interface FunctionType {
  toString(): string
}


// interface를 이용해 타입 정의 (유니온 타입)
function createDropdownItem<T extends FunctionType>(item: DropdownItem<T>): HTMLOptionElement {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem<string>(email);
  console.log(item)
  const selectTag = document.querySelector('#email-dropdown');
  // selectTag.appendChild(item);
});

numberOfProducts.forEach(function (product) {
  const item = createDropdownItem<number>(product)
})


// 정상
// let i = 0 
// let j = '1d'
// i.toString()
// j.toString()


