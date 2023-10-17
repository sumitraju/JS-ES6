//Spread operator provides a new way to manipulate arrays and objects in es6.
//A spread operator is represented by ... followed by the variable name
//so spread operator spreads the contents of a variable a and concatenates it in a b

let a = [7,8,9]
let b = [1,2,3,...a,10]

console.log(b)

// passing number of parameters

function infn(...z){
    console.log(z)
}

infn("Hello"," john")