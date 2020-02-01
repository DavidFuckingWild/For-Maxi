/*
    I advise you to use the so called 'lambda-expressions' instead of the normal function-keyword.
    Why?
    The Thing is that the this-keyword can be used in diffrent contextes (especially in functions) and that can easely lead to 
    unintended bugs or ugly programming patterns. Especially beginners make mistakes because of that.
    The advantage of 'lambda-expressions' is that they are exactly like functions, but the this-keyword
    will there always behave the same. 
    Also you can use normal functions like classes(see last chapter). Thats not possible with lambda-expressions. 
*/

/*--------------------------------------------------------*/

const lambda = (arg) => { console.log(arg) }
// this on the right side of the assigment-operator(=) is an example for a lambda expressions
// It has a parameter at the beginnig with one argument: (arg)
// which is followed by an arrow: =>
// and then comes the function-body: { console.log(arg) }
// lambdas dont have a function-name. So if you want to use them you have to assign them to a variable: const lambda =

lambda('Hej världen!')
// once assigned, you can use a lambda like every other function

const lambdaClon = lambda
// also you can assign your lambda-function to an other variable
// ATTENTION! if you use brackets you execute the function, 
// you dont want to do that by an assigment.

lambdaClon('Hoila Maxi, wie geahtsn?')

/*--------------------------------------------------------*/
// Some example how you can rewrite a function as lambda expression

function functionName() {
    //do something
}

//equal to 

const funcName = () => {
    //do something
}

/*--------------------------------------------------------*/

function functionName1(arg1, arg2) {
    //do something
}

//equal to 

const funcName1 = (arg1, arg2) => {
    //do something
}

/*---------------------------------------------------------*/

function functionName2(arg) {
    //do something
    let something = arg
    //return something
    return something
}

//equal to

const funcName2 = (arg) => {
    //do something
    let something = arg
    //return something
    return something
}

//can also be written without brackets because there is only one argument in the parameter

const funcName2 = arg => {
    //do something
    let something = arg
    //return something
    return something
}
