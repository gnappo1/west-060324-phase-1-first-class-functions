// 'use strict'

function receivesAFunction(cb) {
    const name = "Matteo"
    cb(name)
}

// receivesAFunction is a higher order function because it receives another fn as an argument
// cb is the callback: a function that is passed in as an argument top another function and later invoked

// function sayMyName(name) {
//     console.log(name)
// }
// function sayHi() {
//     console.log("Hello")
// }

// receivesAFunction(sayHi)

// ==============================

// RECURSION - invoking a function inside itself
returnsANamedFunction()()
function returnsANamedFunction() {
    // return returnsANamedFunction
    return function returnsANewlyNamedFunction() { console.log("Ciao!") } //! RangeError: Maximum call stack size exceeded
}
// function x() {
//     console.log(12)
//     x()
// }

// we used a arrow function expression
// we gave the indicated name to the variable and no name to the function after the = sign.
// why? because the first name is sufficient
// at the right of the arrow => we did create ANOTHER ANONYMOUS ARROW FUNCTION
// the new inner function doesn't do anything
const returnsAnAnonymousFunction = () => (() => {});
// console.log(returnsAnAnonymousFunction()())


// function ancestor() {
//     return function granpa() {
//         return function parent() {
//             return function child() {
//                 console.log("TEST!")
//             }
//         }
//     }
// }

// ancestor()()()()

// HOISTING
// accessing something before the line where it has been declared
// console.log(x, z)

var test = 2 // HOISTING? YES BUT the value will be undefined
let x = "3" // HOISTING? YES but you get an error due to the Temporal Dead Zone -> ReferenceError: Cannot access 'x' before initialization
const z = false // HOISTING? YES but you get an error due to the Temporal Dead Zone -> ReferenceError: Cannot access 'z' before initialization


// JS ENGINE READS THE FILE TWICE
// CREATION PHASE -> where hoisting happens and declarations are lifted to the top of the scope WITHOUT ASSIGNING VALUES
// EXECUTION PHASE -> it goes line by line and executes code