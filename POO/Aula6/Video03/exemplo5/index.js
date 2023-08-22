const ns = [1,2,3,4,5];

// pura
console.log(ns.slice(0,3)); // [1,2,3]
console.log(ns.slice(0,3)); // [1,2,3]
console.log(ns.slice(0,3)); // [1,2,3]

// impura
console.log(ns.splice(0,3)); // [1,2,3]
console.log(ns.splice(0,3)); // [4,5]
console.log(ns.splice(0,3)); // []
