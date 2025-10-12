
/*
JavaScript is a dynamic language because it doesn’t require you to define the
type of a variable at the time of declaration, and the type can change during
runtime.
*/

//  Primitive (Call By Value) we get copy
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
/*
Primitive types are immutable values and are copied when passed to functions or assigned to another variable.
•Characteristics of Primitive Types:

Immutability: Once a primitive value is assigned, it cannot be modified
directly.
Call by Value: When passing a primitive type to a function, the function gets a
copy of the value, and changes to the copy do not affect the original value.
*/

const score=100;
const scoreValue=100.3;

const isLoggedIn=false;
const outsideTemp=null;//Null: Represents the intentional absence of any object value.

let useEmail;//Undefined: Represents a variable that has been declared but not assigned a value.

const bigNumber=3456543576654356754n
console.log(typeof bigNumber);


const id=Symbol("123");//Symbol: Represents a unique and immutable value used mainly for object property keys.
const id2=Symbol("123");

console.log(id," ",id2);
console.log(id === id2);


//They are immutable (cannot be changed directly).
let a = 10;
let b = a;  // b is a copy of a
b = 20;     // Changing b doesn't affect a
console.log(a);  // Output: 10





// Reference (Non primitive) (They directly alocate memory refference from memory)
// Array, Objects, Functions
/*
Reference types are objects, which can be arrays, objects, or functions. When a
reference type is passed to a function or assigned to another variable, the
reference to the original object is copied, not the actual value. Changes to the
new variable affect the original object.

•Characteristics of Reference Types:

Mutable: Objects (Arrays, Objects, Functions) can be modified directly.
Call by Reference: When passing a reference type to a function or assigning it
to another variable, the reference (memory address) is copied, meaning both
variables point to the same memory location. Changes in one affect the other.

*/


const heros=["Captain America","HULK","IronMan"];


const obj1={
    name:"Alex",
    age:25,
}


const fun1=function () {
    console.log("Hello World From Fun1");
    
}

console.log("Arrays ",typeof heros);
console.log("Object ",typeof obj1);
console.log("Function ",typeof fun1);

/*

| **Concept**                | **Details**                                                                                                                                                    | **Examples**                                                                                                                                                                 |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Language Type**          | **Dynamic Language**                                                                                                                                           | JavaScript is dynamic because variable types are determined at runtime and can change.                                                                                       |
| **Primitive Data Types**   | Immutable, passed by value (copy).                                                                                                                             | **String**: `"Alex"`, **Number**: `100`, **Boolean**: `false`, **null**: `null`, **undefined**: `undefined`, **Symbol**: `Symbol("123")`, **BigInt**: `3456543576654356754n` |
| **Reference Data Types**   | Mutable, passed by reference (memory reference).                                                                                                               | **Array**: `["Captain America", "Hulk", "IronMan"]`, **Object**: `{ name: "Alex", age: 25 }`, **Function**: `function() {}`                                                  |
| **Passing by Value**       | **Primitive types** are passed by value (copy). Modifying the copy doesn’t affect the original.                                                                | `javascript<br>let a = 10;<br>let b = a;<br>b = 20;<br>console.log(a); // Output: 10`                                                                                        |
| **Passing by Reference**   | **Reference types** are passed by reference. Modifying the reference affects the original value.                                                               | `javascript<br>let obj = { name: "Alex" };<br>let obj2 = obj;<br>obj2.name = "John";<br>console.log(obj.name); // Output: "John"`                                            |
| **Primitive Type Example** | **String**: Sequence of characters, **Number**: Integer or floating point, **Boolean**: `true` or `false`.                                                     | `javascript<br>let name = "Alex";<br>let score = 100;<br>let isLoggedIn = true;<br>let outsideTemp = null;`                                                                  |
| **Symbol**                 | A unique and immutable primitive value, mainly used for object property keys.                                                                                  | `javascript<br>let id = Symbol("123");<br>let id2 = Symbol("123");<br>console.log(id === id2); // false`                                                                     |
| **BigInt**                 | A large integer type for values beyond the limit of the `Number` type.                                                                                         | `javascript<br>let bigNumber = 3456543576654356754n;<br>console.log(typeof bigNumber); // "bigint"`                                                                          |
| **Reference Type Example** | **Array**: Ordered list of values (can be of any type), **Object**: Collection of key-value pairs, **Function**: Executable code.                              | `javascript<br>let heroes = ["Captain America", "Hulk", "IronMan"];<br>let obj1 = { name: "Alex", age: 25 };<br>let fun1 = function() { console.log("Hello World"); };`      |
| **Type Checking (typeof)** | Returns a string indicating the type of the operand. **`typeof`** for primitives and reference types.                                                          | `javascript<br>typeof "Alex"; // "string"<br>typeof 100; // "number"<br>typeof ["A", "B"]; // "object"<br>typeof function() {}; // "function"`                               |
| **Memory Storage**         | **Primitive types**: Stored by value (each variable has its own copy). **Reference types**: Stored by reference (multiple variables point to the same object). | **Primitive**: `let x = 10; let y = x;`<br>**Reference**: `let obj = {}; let obj2 = obj;`                                                                                    |


*/