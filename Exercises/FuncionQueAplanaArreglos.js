const arr = [[1,2], [[3,4]], [1,[]]]
const flatten = arr => arr.reduce((acc,el) => acc.concat(el), [])
const d = flatten(arr)
console.log(d)