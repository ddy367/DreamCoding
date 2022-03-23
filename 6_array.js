'use strict';

//  Array

//  1.  Edclaration
const arr1 = new Array();
const arr2 = [1, 2];

//  2.  Index position
const fruits = ['🍗', '🍔'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); //  🍗
console.log(fruits[1]); //  🍔
console.log(fruits[2]); //  undefinded
console.log(fruits[fruits.length - 1]); //  2-1=1  -> 🍔

console.clear();
//  3.  Looping over an array
//  print all fruits
//  a.  for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//  b.  for of
for (let fruit of fruits) {
    console.log(fruit);
}

//  c.  forEach
fruits.forEach(function (fruit, index, array) {
    console.log(fruit, index, array);
}); //  🍗 0 (2) ['🍗', '🍔']   //  🍔 1 (2) ['🍗', '🍔']
//  annonymous function에서는 arrow 사용 가능
fruits.forEach((fruits, index) => console.log(fruits, index));

//  4.  Addtion, deletion, copy
//  push: add an item to the end
fruits.push('🥗', '🥙');
console.log(fruits);    //  (4) ['🍗', '🍔', '🥗', '🥙']

//  pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);    //  (2) ['🍗', '🍔']

//  unshift: add an item to the benigging
fruits.unshift('🧇', '🥞');
console.log(fruits);    //  (4) ['🧇', '🥞', '🍗', '🍔']

//  shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);    //  (2) ['🍗', '🍔'] 

//  note!! shift, unshift ar slower than pop, push
//  splice: remoce an item by index position
fruits.push('🍱', '🍛', '🍣');
console.log(fruits);    //  (5) ['🍗', '🍔', '🍱', '🍛', '🍣']
// fruits.splice(1);
// console.log(fruits);    //  ['🍗']  몇 개 지울지 정하지 않으면 다 지워버려
fruits.splice(1,1);
console.log(fruits);    //  (4) ['🍗', '🍱', '🍛', '🍣']    //🍔 지워져

fruits.splice(1, 1, '🍩', '🍪');
console.log(fruits);    //  (5) ['🍗', '🍩', '🍪', '🍛', '🍣']

//  combine two arrays
const fruits2 = ['🍬', '🍭'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); //  (7) ['🍗', '🍩', '🍪', '🍛', '🍣', '🍬', '🍭']

//  5.  Searching
//  indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍛'));  //  3
console.log(fruits.indexOf('🍈'));  //  -1

//  includes
console.log(fruits.includes('🍛'));  //  true
console.log(fruits.includes('🍈'));  //  false

//  lastIndexOf
console.clear();
fruits.pu



sh('🍗');
console.log(fruits);    //  (6) ['🍗', '🍩', '🍪', '🍛', '🍣', '🍗']
console.log(fruits.indexOf('🍗'));  //  0
console.log(fruits.lastIndexOf('🍗'));  //  5
