'use static';
//  Object-oriendted programming
//  class: template
//  object: instance of a class
//  JavaScript classes
//  -   introduced in ES6
//  -   syntactical sugar over prototype-based inheritance

//  1.  Class declarations
class Person {
    //  constructor 생성자
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);    //  ellie
console.log(ellie.age); //  20
ellie.speak();  //  ellie: hello!
console.log(ellie.speak);   //   speak() { console.log(`${this.name}: hello!`); }

//  2.  Getter and Setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(vlaue) {
        // if (vlaue < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = vlaue < 0 ? 0 : vlaue;  //  -1값을 0이 나오게 해 줘
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

//  3.  Fields (public, private)
//  Too soon!
//  https://developer.mozilla.org/ko/docs/Web/JavaScript
class Experiment {
    publicField = 2;    //  외부에서 접근 가능
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//  4.  Static properties and methods
//  Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }
    
    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher); //  Dream Coding
Article.printPublisher();   //  Dream Coding

//  5.  Inheritance
//  a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();   //  drawing red color!
        console.log('세모');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }

    toString() {
        return `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();   //  drawing blue color!
console.log(rectangle.getArea());   //  400
const triangle = new Triangle(20, 20, 'red');
triangle.draw();    //  세모
console.log(triangle.getArea());    //  200

//  6.  Class checking: instanceOf
console.log(rectangle instanceof Rectangle);    //  true
console.log(triangle instanceof Rectangle); //  false
console.log(triangle instanceof Triangle);  //  true
console.log(triangle instanceof Shape); //  true
console.log(triangle instanceof Object);    //  true
console.log(triangle.toString());
