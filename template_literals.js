//Template literals are strings with embedded code and variables inside.
//Template literals allow concatenation and interpolation is much more comprehensive and clear in comparison with prior versions of ECMAScript
//In ES6 concatenation and interpolation are done with backtick " in a single line.
//To interpolate a variable simple put in to {} braces forwarded by $ sign

let a = "hello";
let b = "John";
let c = `${a} ${b}`;

console.log(c)