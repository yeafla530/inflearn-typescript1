function fetchItems(): string[] {
    let items = ['a', 'b', 'c']
    return items
}
let result = fetchItems();
console.log(result) // string[]

// Promise<반환타입>
// Promise 자체 타입이 제너릭을 받도록 되어있음
function fetchItems2(): Promise<string[]> {
    let items: string[] = ['a', 'b', 'c']
    return new Promise(function(resolve) {
        resolve(items)
    })
}
fetchItems2();