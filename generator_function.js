//Generator are functions that can be exited and later re-entered
//Their context (variable bindings) will be saved across re-entrances.
//A function keyword followed by an asterisk defines a generator function, which returns a genetator object. 

function* generator(i){
    yield i;
    yield i+10;
}

var gen = generator(10);

console.log(gen.next().value);