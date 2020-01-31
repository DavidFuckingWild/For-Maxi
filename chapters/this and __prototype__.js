class Person{
    constructor (name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`)
    }
}

const david = new Person('David', 17)
david.greet()


/*-----------------------------------------------------*/

function Person(name, age) {
    this.name = name
    this.age = age
    this.greet = () => {
        console.log(`Hello, my name is ${this.name}`)
    }
    greet()
}

const david = new Person('David', 17)
david.greet()

/*
So, maybe you found functions that behave like classes.
This is possible because every function in Javascript has a prototype, exactly like every class.
*/

/*-----------------------------------------------------*/
/*
What is Prototype?
Prototype is an object {}. It is bounded to the class/function. 
It is the blueprint that creates the __proto__.property of the instances
The __proto__.property is responsible for the property-lookups.
Why you need to lookup this kind of things?
Maybe you hear the first-time of Polymorphism or Inheritance. You will learn it later. 
However to keep it short, you can extend your classes in subclasses. 
Than the subclass has it own properties and the one of the class it was derived from.
And if you now want to access some properties in the subclass you need to lookup if they are defined there
or in the 'inherited class' or if they arent defined at all.
*/

console.log(Person.prototype)
// Holds all the properties from Person in it and the one from the Object-class,
// because every class or function inherits from it.

david = new Person('David Fucking Wild', 17) // now prototype creates a __proto__.property
console.log(david.__proto__)
console.log(david.prototype) //Note: instances doesnt have a prototype property
console.log(david.__proto__.prototype) //But you can find it at __proto__

// There is a lot more about __proto__ and prototype, that would be a look worth.

/*-----------------------------------------------------*/
/*
The this keyword can be very confusing in Javascript, because it can reference so many diffrent things.
It completely depends on the context.
*/

const window = this
// if you use this in the global scope it references to the window-object

function func(){
    console.log(this)
}
// inside a function it references to the context outside the function.

function Person(name, age) {
    this.name = name
    this.age = age
}

// Note: if you use a class like an prototype-constructor 
//it references somehow to the __proto__.property that will be created.

function Person(name, age) {
    this.name = name
    this.age = age
    this.greet = function() {
        console.log(`Hello, my name is ${this.name}`)
    }
}
// If you use a function like a method, this refers to __proto__

//So use classes and lambdas instead, to make things more clear.

const lambda = () => console.log(this)
// inside lambdas this refers to the context outside. 
// In this case to the global context. So this refers to window

class Person{
    constructor (name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`)
    }
}

let david = new Person('David', 17)
david.greet()
// inside a class it refers to __proto__.

let david = {
    name: 'David',
    age: 17,
    greet: () => {
        console.log(`Hello, my name is ${this.name}`)
    }
}
// inside objects, this refers to the object itself

/*
There are also more cases where this is... just complicated.
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/this

However if you use classes and lambdas you will reduce your confusion to a minimum. So go with it.
*/