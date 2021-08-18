const clean = (arr) => arr.reduce((acc, el) =>{
    if(el){
        acc.push(el)
    }
    return acc
}, [])
const c= clean([1, undefined, null, 0, 2, 3])
//const clean = (array) => array.filter(Boolean);
console.log(c)