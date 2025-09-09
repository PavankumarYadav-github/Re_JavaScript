let num = 1;
let str = "Hello";
let flag = true;
let empty = null;
let undef;
let bigNumber = 1234567890123456789012345678901234567890n;

console.log(typeof num);
console.log(typeof str);
console.log(typeof flag);
console.log(typeof empty);
console.log(typeof undef);
console.log(typeof bigNumber);

let user = {
  name: "Alice",
  age: 30,
  isAdmin: true,
};

let numbers = [1, 2, 3, 4];
let names = ["Alice", "Bob", "Charlie"];

function greet() {
  console.log("Hello!");
}

console.log(typeof user);
console.log(typeof numbers);
console.log(Array.isArray(numbers));
console.log(typeof names);
console.log(Array.isArray(names));
console.log(typeof greet);

//************************************************************************************************NOTES***********************************************************************************
/*

Breakdown of typeof Results:

typeof user: object
Even though user is an object (a plain JavaScript object), typeof returns
"object" for any non-primitive reference type, including arrays, functions, and
regular objects.

typeof numbers: object
Arrays in JavaScript are a type of object, so typeof will return "object" for
arrays. However, to specifically check if something is an array, you can use
Array.isArray(), which will return true for arrays.

typeof names: object
Similar to numbers, names is an array, so the typeof operator gives "object" as
the result.

typeof greet: function
Functions are a special type of object in JavaScript, but typeof specifically
returns "function" for them.

*/

/*

JavaScript Data Types & typeof Operator Primitive Data Types:

Number:
Example: let num = 1;
Represents both integers and floating-point numbers.
typeof num will return "number".

String:
Example: let str = "Hello";
Represents a sequence of characters.
typeof str will return "string".

Boolean:
Example: let flag = true;
Represents true or false.
typeof flag will return "boolean".

Null:
Example: let empty = null;
Represents the intentional absence of any object value.
typeof empty will return "object". (This is a historical bug in JavaScript, so
be cautious!)

Undefined:
Example: let undef;
Represents a variable that has been declared but not assigned a value.
typeof undef will return "undefined".

BigInt:
Example: let bigNumber = 1234567890123456789012345678901234567890n;
Used for representing integers too large to be handled by the Number type.
typeof bigNumber will return "bigint".
Reference (Non-Primitive) Data Types:

Object:
Example:
let user = { name: "Alice", age: 30, isAdmin: true,
};
A collection of key-value pairs.
typeof user will return "object".

Array:
Example:
let numbers = [1, 2, 3, 4]; let names = ["Alice", "Bob", "Charlie"];
Arrays are a special type of object.
typeof numbers and typeof names will return "object", but to specifically check
for arrays:
console.log(Array.isArray(numbers)); // true console.log(Array.isArray(names));
// true


Function:
Example:
function greet() { console.log("Hello!");
}
Functions are a special type of object, and typeof specifically returns
"function" for them.
typeof greet will return "function".



Breakdown of typeof Results: console.log(typeof num);      // "number"
console.log(typeof str);      // "string" console.log(typeof flag);     //
"boolean" console.log(typeof empty);    // "object" (a known bug)
console.log(typeof undef);    // "undefined" console.log(typeof bigNumber);//
"bigint"

console.log(typeof user);     // "object" console.log(typeof numbers);  //
"object" console.log(Array.isArray(numbers)); // true console.log(typeof names);
// "object" console.log(Array.isArray(names));   // true console.log(typeof
greet);    // "function"

Key Takeaways:
typeof returns the type of a variable, but it has some quirks:
For arrays, objects, and null, it returns "object".
For functions, it returns "function".
To check if something is an array, use Array.isArray(), which returns true for
arrays and false for other types.


| **Data Type** | **Example**                               | **`typeof` Result** | **Notes**                                                             |
| ------------- | ----------------------------------------- | ------------------- | --------------------------------------------------------------------- |
| **Number**    | `let num = 1;`                            | `"number"`          | Represents both integer and floating-point numbers.                   |
| **String**    | `let str = "Hello";`                      | `"string"`          | Represents a sequence of characters.                                  |
| **Boolean**   | `let flag = true;`                        | `"boolean"`         | Represents `true` or `false`.                                         |
| **Null**      | `let empty = null;`                       | `"object"`          | Special case (historical bug) returns `"object"`.                     |
| **Undefined** | `let undef;`                              | `"undefined"`       | Variable declared but not assigned any value.                         |
| **BigInt**    | `let bigNumber = 1234567890n;`            | `"bigint"`          | Used for large integers beyond the `Number` type's range.             |
| **Object**    | `let user = { name: "Alice" };`           | `"object"`          | General collection of key-value pairs.                                |
| **Array**     | `let numbers = [1, 2, 3];`                | `"object"`          | Arrays are a special type of object (use `Array.isArray()` to check). |
| **Function**  | `function greet() { console.log("Hi"); }` | `"function"`        | Functions are objects but `typeof` specifically returns `"function"`. |


Notes on Special Cases:

Arrays: typeof returns "object", but to specifically check if something is an array, use Array.isArray().
Null: typeof null returns "object", which is a historical bug in JavaScript.

Functions: typeof returns "function" for functions, even though they are technically objects in JavaScript

*/