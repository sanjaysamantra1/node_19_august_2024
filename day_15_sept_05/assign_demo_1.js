// Object.assign(target , source1,source2,source-n)

let obj1 = { a: 10, b: 20 };
let obj2 = { b: 25, c: 30 };
let obj3 = { d: 40, e: 50 };

Object.assign(obj1, obj2, obj3);
console.log(obj1)
console.log(obj2)
console.log(obj3)