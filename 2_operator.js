//  1.  String concatenation
console.log('my' + ' cat'); //  my cat
console.log('1' + 2);   //  12
console.log(`string literals: 1 + 2 = ${1 + 2}`);   //  string literals: 1 + 2 = 3 / 줄 바꿈, 싱글코트 사용 시 값 나옴

console.log("ellie's \nbook");  //  \n 줄 바꿈, \t tab

//  2.  Numeric operators
console.log(1 + 1); //  add
console.log(1 - 1); //  substract
console.log(1 / 1); //  divide
console.log(1 * 1); //  multiply
console.log(5 % 2); //  remainder
console.log(2 ** 3);    //  exponentiation

//  3.  Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
//  counter = counter + 1;
//  preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
console.log(`postIncrement: ${preIncrement}, counter: ${counter}`);
//  postIncrement = counter;
//  counter = counter + 1;

//  4.  Assignment operators
let x = 3;
let y = 6;
let xy = x += y; //  x = x + y;
x -= y;
x *= y;
x /= y;
console.log(xy);    //  9

//  5.  Comparison operators
console.log(10 < 6);    //  less than
console.log(10 <= 6);   //  less than or equal
console.log(10 > 6);    //  greater than
console.log(10 >= 6);   //  greater than or equal

//  6.  Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

//  || (or), finds the first truthy value 처음이 ture면 멈춰 -> value가 앞에 가야 해(함수 호출이 가장 뒤로 가)
console.log(`or: ${value1 || value2 || check()}`);  //  false false true -> or: true

function check() {
    for (let i = 0; i < 10; i++) {
        //  wasting time
        console.log('으악');
    }
    return true;
}

//  && (and), find the first falsy value 다 ture여야 ture를 리턴하는 값 -> value가 앞에 가야 해(함수 호출이 가장 뒤로 가)
console.log(`and: ${value1 && value2 && check()}`); //  and: false
//  often used to compress long if-statement
//  nullableObject && nullableObject.something
// if (nullableObject != null) {
//     nullableObject.something;
// }

//  ! (not)
console.log(!value1);   //  false

//  7.  Equality
const stringFive = '5';
const numberFive = 5;

//  == loose equality, with type conversion
console.log(stringFive == numberFive);  //  true
console.log(stringFive != numberFive);  //  false

//  === strict equality, no type conversion 타입이 다르면 달라
console.log(stringFive === numberFive); //  false
console.log(stringFive != numberFive);  //  false

//  object equality by reference 오브젝트는 레퍼런스 형태로 저장 된다
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);  //  false
console.log(ellie1 === ellie2); //  false
console.log(ellie1 === ellie3); //  true

//  equality - puzler
console.log(0 == false);    //  true
console.log(0 === false);   //  false
console.log('' == false);   //  true
console.log('' === false);  //  false
console.log(null == undefined); //  true
console.log(null === undefined);    //  false

//  8.  Conditional operators: if
//  if, else if, else
const name = 'ellie';
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unkwnon');
}
//  Welcome, Ellie!

//  9.  Ternary operator: ?
//  condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');   //  yes

//  10. Switch statement
//  use for multiple if checks
//  use for enum-like value check
//  use for multiple type checks in TS
const brower = 'IE';
switch (brower) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'FireFox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

//  11. Loops
//  while loop, while the condtion is truthy,
//  body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

//  do while loop, body code is executed first, 블록을 먼저 실행
//  then check the condition;
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

//  for loop, for(begin; condition; step) 비긴은 단 한 번만
for (i = 3; i > 0; i++) {
    console.log(`for: ${i}`);
}

for (let i =3; i > 0; i++) {
    //  inline variable dexlaration
    console.log(`inline variable for: ${i}`);
}

//  nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

