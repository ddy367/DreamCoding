//  1.  Use strict
//  added in ES 5
//  use this for Valina Javascript
'use strict';

//  2.  Variable, rw(read/write)
//  let (added in ES6)
let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
}
console.log(name);
console.log(globalName);

//  var 쓰지마!!
//  var hoisting (어디에 선언했는가에 상관 없이 항상 제일 위로 선언을 끌어올려주는 것, move declaration from bottom to top)
//  has no block scope(var는 블록을 무시해)
age = 4;
var age;

//  3.  Contant, r(read only)
//  use const whenever possible.
//  only use let if variable needs to change;

const daysInWeek = 7;
const maxNumber = 5;

//  Note!
//  Immutable data types: premitive types, frozen objects (i.e. object.freezon) 절대 변경 불가
//  Mutable data types: all objects by default are mutable in JS
//  favor immutable data type always for a few reasons:
//  -security
//  -thread safety
//  -reduce human mistakes

//  4.  Variable types
//  primitive, single item: number, string, boolean, null, undefinedn, symbol 값 자체가 메모리에 저장
//  object, box container 너무 커서 한 번에 저장이 안 됨/오브젝트를 가리키는 레퍼런스가 메모리에 저장
//  function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//  number - special numerix values: infinit, -infinity, NaN
const infinity = 1 / 0;
const negaticeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negaticeInfinity);
console.log(nAn);

//  bigInt (fairly new, don't use it yet)
const bigInt = 123456789012345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

//  string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' +  brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `h1 ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ', type: ' + typeof helloBob);

//  boolean
//  false: 0, null, undefined, Nan, ``
//  true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//  null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//  undefine
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//  symbol, creat unique identifiers for objects(고유 식별자를 만들 때 사용)
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2); // false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 == gSymbol2);  //true
console.log(`vlaue: ${symbol1.description}, type: ${typeof gSymbol1}`);
//  symbol은 항상 .description을 통해 String으로 만들어줘야 해

//  object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;

//  5.  Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);    //  value: hello, type: string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);    //  value: 1, type: number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);    //  value: 75, type: string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);    //  value: 4, type: number
