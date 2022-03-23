//  Function
//  -   fundamental building block in teh program
//  -   subprogram can be used multiple times 여러번 재사용 가능
//  -   performs a task or calculates a value

//  1.  Function declaration
//  function name(param1, param2) {body... return; }
//  one function === one thing 하나의 함수는 한가지 일만 하도록 지정
//  naming: doSomething, command, verb
//  e.g. createCardAndPoint -> createCard, createPoint
//  function is object in JS
function printHello() {
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello@');
log(1234);

//  2.  Parameters
//  premitive parameters: passed by value
//  object parameters: passed by reference
function changName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changName(ellie);
console.log(ellie);

//  3.  Default parameters (added in ES6)
function showMessage(message, from = 'unknown') { //  from='unknown' <- 디폴트 값 지정
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');
showMessage('Hi!','aa');

//  4.  Rest parameters (added in ES6)
function printAll(...args) {
    // 방법1
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    // 방법2
    for (const arg of args) {
        console.log(arg);
    }

    // 방법3
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

//  5.  Local scope
//  *밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다*
let globalMessage = 'global';   //  global variable
function printMessage() {
    let message = 'hello';
    console.log(message);   //  local variable  hello
    console.log(globalMessage); //  global

    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage);   // error
}
printMessage();

//  6.  Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);   //  3
console.log(`sum: ${sum(1, 2)}`);

//  7.  Early return, early exit
//  bad
function upgradeuser(user) {
    if (user.point > 10) {
        //  long upgrade logic...
    }
}

// good
function upgradeuser(user) {
    if (user.point <= 10) {
        return;
    }
    //  long upgrade logic...
}

//  First-class function
//  functions are treated like any other variable
//  can be assigned as a value to variable
//  can be passed as an argument to other functions;
//  can be returned by another function

//  1.  Function expression
//  a function declaration can be called earlier than it is defiend. (hoisted)
//  a function expression is created when the exevution reaches it;
const print = function() {  //  anonymous function
    console.log('print');
}
print();    //  print
const printAgain = print;
printAgain();   // print
const sumAgain = sum;   //  sum : line74에서 선언
console.log(sumAgain(1, 3));    // 4

//  2.  Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
//  anonymous function
const printYes = function() {
    console.log('yes!');
};

//  named function
//  better debuging in debugger's stack traces
//  recursions
const printNo = function() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//  Arrow function
//  always anonymous
// const simplePrint = function() {
//     console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!'); //   => : arrow
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    //  do something more
    return a * b;
};

//  IIFE: Immediately Invoked Function Expression 함수 바로 실행
(function hello() {
    console.log('IIFE');
})();

//  Fun quiz time
//  function calculate(command, a, b)
//  command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply' : 
            return a * b;
        case 'remainder' :
            return a % b;
        default :
            throw Error('unknown command');
    }
}
console.log(calculate('divide', 10, 2));



console.log(caculate('add', 1 , 3));

