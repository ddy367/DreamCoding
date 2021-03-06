'use strict';

//  Array

//  1.  Edclaration
const arr1 = new Array();
const arr2 = [1, 2];

//  2.  Index position
const fruits = ['π', 'π'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); //  π
console.log(fruits[1]); //  π
console.log(fruits[2]); //  undefinded
console.log(fruits[fruits.length - 1]); //  2-1=1  -> π

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
}); //  π 0 (2)Β ['π', 'π']   //  π 1 (2)Β ['π', 'π']
//  annonymous functionμμλ arrow μ¬μ© κ°λ₯
fruits.forEach((fruits, index) => console.log(fruits, index));

//  4.  Addtion, deletion, copy
//  push: add an item to the end
fruits.push('π₯', 'π₯');
console.log(fruits);    //  (4)Β ['π', 'π', 'π₯', 'π₯']

//  pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);    //  (2)Β ['π', 'π']

//  unshift: add an item to the benigging
fruits.unshift('π§', 'π₯');
console.log(fruits);    //  (4)Β ['π§', 'π₯', 'π', 'π']

//  shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);    //  (2)Β ['π', 'π'] 

//  note!! shift, unshift ar slower than pop, push
//  splice: remoce an item by index position
fruits.push('π±', 'π', 'π£');
console.log(fruits);    //  (5)Β ['π', 'π', 'π±', 'π', 'π£']
// fruits.splice(1);
// console.log(fruits);    //  ['π']  λͺ κ° μ§μΈμ§ μ νμ§ μμΌλ©΄ λ€ μ§μλ²λ €
fruits.splice(1,1);
console.log(fruits);    //  (4)Β ['π', 'π±', 'π', 'π£']    //π μ§μμ Έ

fruits.splice(1, 1, 'π©', 'πͺ');
console.log(fruits);    //  (5)Β ['π', 'π©', 'πͺ', 'π', 'π£']

//  combine two arrays
const fruits2 = ['π¬', 'π­'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); //  (7)Β ['π', 'π©', 'πͺ', 'π', 'π£', 'π¬', 'π­']

//  5.  Searching
//  indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('π'));  //  3
console.log(fruits.indexOf('π'));  //  -1

//  includes
console.log(fruits.includes('π'));  //  true
console.log(fruits.includes('π'));  //  false

//  lastIndexOf
console.clear();
fruits.pu



sh('π');
console.log(fruits);    //  (6)Β ['π', 'π©', 'πͺ', 'π', 'π£', 'π']
console.log(fruits.indexOf('π'));  //  0
console.log(fruits.lastIndexOf('π'));  //  5
