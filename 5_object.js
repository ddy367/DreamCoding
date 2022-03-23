//  Object
//  one of the JavaScript's data types; 
//  a collection of related date and/or functionality.
//  Nearly all objects in JavaScript are instances of Object
//  object = { key : value };

//  1.  Literals and properties
// const name = 'ellie';
// const age = 4;
// print(name, age);
const obj1 = {};    //  'object literal' syntax
const obj2 = new Object();  //  'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name: 'ellie', age: 4};
print(ellie);   //  ellie   //  4

//  width JavaScript magic (dynamically typed language)
//  can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);  //  true

//  can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);  //  undefined

//  2.  Computed properties
//  kdy should be always string 키는 항상 스트링 타입이어야 해
console.log(ellie.name);    //  ellie
console.log(ellie['name']); //  ellie

ellie['hasJob'] = true;
console.log(ellie.hasJob);  //  true

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name');  //  ellie

//  3.  Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = makePerson('ellie', 30);
console.log(person4);   //  {name: 'ellie', age: 30}

function makePerson(name, age) {
    return {
        name : name,
        age,    // key와 value값이 같으면 생략 가능
    };
}

//  4.  Constructor Function
const person5 = new Person('eellee', 20);
console.log(person5);   //  Person {name: 'eellee', age: 20}
function Person(name, age) {
    //  this = {};
    this.name = name;
    this.age = age;
    //  return this;
}

//  5.  in operator: property existence check (key in obj)
console.log('name' in ellie);   //  true
console.log('age' in ellie);    //  true
console.log('random' in ellie); //  false
console.log(ellie.random);  //  undefined

//  6.  for..in vs for..of
//  for (key in obj)
console.clear();
for (key in ellie) {
    console.log(key);
}

//  for (value of iterable)
const array = [1, 2, 4, 5];
for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

for (value of array) {
    console.log(value);
}

//  7.  Fun cloning
//  Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
console.log(user2); //  {name: 'ellie', age: '20'}

user.name = 'coder';
console.log(user);  //  {name: 'coder', age: '20'}

//  old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3); //  {name: 'coder', age: '20'}

const user4 = {};
Object.assign(user4, user);
console.log(user4); //  {name: 'coder', age: '20'}
//const user4 = Object.assign({}, user);
//console.log(user4);

//  another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);    //  뒤에나온 값이 덮어씌워
console.log(mixed.color);   //  blue
console.log(mixed.size);    //  big
