var x; //declaration of variable.

x = 3 + y;

function baz(a, b) {
    return a + b;
}

// condition 
if ( x === 0 ) {
    x = 123;
}

var y = 0 
var x = y >= 0 ? y : -y;

myFunction(y >= 0 ? y : -y)
foo(7,1)

// in javascript, var should be declared before being used.
var obj = {}
obj.foo = 123;
obj.fool

'hello'.toUpperCase()

// comparison in object. it should be "the one" object when it would be evaulated as the same.
var obj1 = {};
var obj2 = {};
obj === obj2 // false

// comparison for primitive types(e.g. boolean, string, number, null, undefined.)
var prim1 = 123;
var prim2 = 123;
prim1 = prim2 

// property definition
test = {
    a : 1 
    b : 2 
}

// checking fo not undefined and null.
if (x === undefined || x === null){ 
    skip;
}
//or
if (!x) { // null and undefined would be evaludate as false in boolean condition.
    ...
}

//typeof and instanceof.
typeof true
typeof 'abc' 
typeof {}
typeof []

value instanceof Constr //it would be true when value was created by Constr.

//switch
switch (fruit) {
    case 'banana':
        //..
    default:
        //...
}

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

var i = 0
while ( i < arr.length ) {
    console.log(arr[i]);
    i++;
}