let arr =  [
    {gender: 'male', name: 'john'},
    {gender: 'female', name: 'mary'},
    {gender: 'female', name: 'yeafla'}
]

let filtered = arr.filter(function(item) {
    if(item.gender === 'female') {
        return item;
    }
})

console.log(filtered)