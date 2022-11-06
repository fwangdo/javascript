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

// function 
var add = function add (param1, param2) {
    return param1 + param2;
}

//arguments
function f() { return arguments }
var args = f('a', 'b', 'c');
args.length
args[0]

function f(x,y) {
    console.log(x, y);
    return toArray(arguments);
}

//a pattern for initializing 
function pair(x, y) {
    x = x || 0;
    y = y || 0;
    return [x, y];
}

//forcing the number args.
function pair(x, y) {
    if (arguments.length !== 2) {
        throw new Error('Need exactly 2 arguments');
    }
}

//from args to array
function toArray(arrayLikeObject) {
    return Array.prototype.slice.call(arrayLikeObject);
}

//exception 
function getPerson(id) {
    if (id < 0) {
        throw new Error('ID must noe be negative.')
    }
    return {id : id};
}

function getPersons(ids) {
    var result = [];
    ids.forEach(function (id) {
        try {
            var person = getPerson(id);
            result.push(person);
        } catch (exception) {
            console.log(exception);
        }
    });
    return result;
}

//applying strict mode.
function functionInStrictMode() {
    'use strict';
}
// in strict mode, you should declare vars before using them.
//like,
var x = 1, y = 2, z =3;
//but it would be better,
var x = 1;
var y = 2;
var z = 3;

// scope would be dicided based on function, not block.
// example is as below.
function foo () {
    var x = -512;
    if (x<0) {
        var tmp = -x;
        ///
    }
console.log(tmp); //512
}

//closure.
//var "start" is connected after createInc function left from the context where it was created.
function createIncrementor(strat) {
    return function () {
        start++;
        return start;
    }
}

//introducing new scope.
(function () {
    var tmp = 1; // this variable is not global.
}());

//application.
for (var i = 0; i < 5; i++) {
    (function () {
        var i2 = i;
        result.push(function () {return i2 });
    }());
}

//generating object.
//object is a set of perperties.
'use strict';
var jane = {
    name: 'Jane',

    describe: function () {
        return ' Person name ' + this.name;
    }
};

//if you wanna get and set, you can do that! like ..
jane.name
jane.name = 'john';
jane.newProperty = 'abc'; // that is new property :)

// 'in' is checking whether the property exists or not in the object.
// if not so, 'undefined' will return.

// if you wanna delete property,
delete jane.newProperty

// ...
var obj = { 'not an identifier': 123};
obj['not an identifier']

var obj = {hello : 'world'};
var x = 'hello';