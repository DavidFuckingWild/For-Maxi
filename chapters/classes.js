/*----------------------------------------------------------------*/
/*
Lets assume we want to represent a person in the programm,
this could be a way to do it.
*/

let david = {
    name: 'David',
    age: 17,
    greet: () => {
        console.log(`Hello, my name is ${this.name}`)
        // here references this to the object david
    }
}

david.greet()

/* 
If we now want to have multiple persons we must define each one new,
even if they have a lot in common and only poor values to change.
*/

let Marximillian = {}
let MariosoFurioso = {}

// Thats a bad programming practice, because we repeat a lot of code.

/*----------------------------------------------------------------*/
/*
Classes are the solution for our problem.
They are like a blueprint, so they describe everything your object must have (attributes, methods).
Note: an attribute is a variable of a class or object and a method is a function of a a class or object.
*/

// An example
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
        // in the constructor you initialize your attributes
        // Lets say for simplicity that this is here used similar like the last time.
    }

    greet(otherPerson) {
        console.log(`Hey ${otherPerson.name}, how are you?`)
    }
    // Note that you can let away the function-keyword in classes.
}

//Here we create an instance of a class.
// class -> abstract ; instance -> concrete  
// class -> Autoheit ; instance -> Auto     // insider for Maxi
let david = new Person('David Fucking Wild')
let maxi = new Person('Marximillian Komar')
david.greet(maxi)
// you can access attributes and methods by instanceName.AttrName and instanceName.MethodName()

/*----------------------------------------------------------------*/
/*
This reduces a lot of code okay, but classes are much more powerful than this.
One example of that we just have seen before. The constructor enables us the chance to execute some code
at the initialization of a new instance.
Another example is too look if a variable is an instance from a specific class.
*/

if (david instanceof Person) {
    //true
    //...
}

if (david instanceof File) {
    //false
}