let num = [10,20,300];

let iter = num[Symbol.iterator]();

console.log(iter.next());

// print value console.log(iter.next().value);
// if end of element the retur true console.log(iter.next().done);

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

