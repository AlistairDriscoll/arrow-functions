/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

const addTwoNumbers = (a, b) => {
    return a + b
}

let sum = addTwoNumbers(2, 3);

console.log(sum)

// Arrow Function With Parameters

const addTwoNumbers2 = (a, b) => a + b;

sum = addTwoNumbers2(5, 6)

console.log(sum)

// Single Line Arrow Function With Parameters

const saySomething = message => console.log(message);

saySomething("Hello, world")

// Implicit Returns

const sayHello = () => console.log('Hello');

sayHello();

// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
        This is a multi line string!
    </p>`
)
console.log(returnMultipleLines());
