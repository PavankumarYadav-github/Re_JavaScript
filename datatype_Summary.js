
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


//Statck (Prminitive Type)
let a1=10;
let b1=a1;
b1=20;

console.log(`a1:${a1} , b1:${b1}`);


//Heap (NON-Prminitive Type)

let object1={
    name:"Alex",
}

let object2=object1;

console.log(`Object before changing name from object 2 Object1 ${JSON.stringify(object1)} ,Object2 ${JSON.stringify(object2)}`);
object2.name="Sara";
console.log(`Object after changing name from object 2 Object1 ${JSON.stringify(object1)} ,Object2 ${JSON.stringify(object2)}`);

/*

🧠 What is JSON.stringify()?

JSON.stringify() is a built-in JavaScript method that converts a JavaScript
object or value to a JSON string (i.e., a text-based format). The resulting
string is a serialized version of the object, which can be easily stored,
transmitted, or logged.

Syntax: JSON.stringify(value, replacer, space);

value: The JavaScript object or value you want to convert to a JSON string.

replacer (optional): A function or array that can be used to modify the object's
properties or filter what gets included in the resulting JSON string.

space (optional): A number or string to control the spacing for pretty-printing
(making the output more readable).
*/

console.log("//If we want to copy an object instead of referencing it:");


//If we want to copy an object instead of referencing it:

let object3={
    name:"Alex",
}
// let object4=Object.assign({},object3);
let object4={...object3}

console.log(`Object before changing name from object4 without using spread operator Object1 ${JSON.stringify(object3)} ,Object2 ${JSON.stringify(object4)}`);
object4.name="Harry";
console.log(`Object after changing name from object4 with using pread operator Object1 ${JSON.stringify(object3)} ,Object2 ${JSON.stringify(object4)}`);



/*
🧠 What is Object.assign()?

Object.assign() is a built-in JavaScript method that copies the values of all
enumerable properties from one or more source objects to a target object.

Syntax:
Object.assign(target, ...sources);

target: The object that will receive the copied properties.
...sources: One or more source objects whose properties will be copied to the target object.


*/


//------------------------------------STACK and HEAP---------------------------------------
//Statck (Prminitive Type) , Heap (NON-Prminitive Type)

/*

🧠 1. Stack (Primitive Types)
In JavaScript, primitive types are:
String,Number,Boolean,Undefined,Null,Symbol,BigInt,Primitive values are stored directly in the stack memory.

•Stack memory is:
 Fast
 Simple structure (LIFO: Last In First Out)
 Stores actual values

✅ Example:

let x = 10;
let y = x;
y = 20;

console.log(x); // 10
console.log(y); // 20

Explanation:
x stores 10 directly in the stack.
When you assign y = x, JavaScript copies the value (10) to y.
Changing y doesn’t affect x because they are two independent copies in the stack.

🧰 2. Heap (Non-Primitive Types)
Non-primitive (reference) types are:Object,Array,Function (Anything created with new keyword like Date, custom objects, etc.)
These are stored in the heap memory

•heap memory is:
 Larger and more flexible than stack
 Used for dynamic or complex data
 Stores references (pointers to the actual data)

✅ Example:

let obj1 = { name: "Ali" };
let obj2 = obj1;

obj2.name = "Sara";

console.log(obj1.name); // "Sara"
console.log(obj2.name); // "Sara"

Explanation:
obj1 holds a reference (address) to the object in heap memory.
When obj2 = obj1, both point to the same object in heap.
Changing obj2 also affects obj1 because they reference the same data.


✨Tip:
If you want to copy an object instead of referencing it: Use the spread operator
{ ...obj } Or Object.assign({}, obj)


✅ Example:

let a = { name: "Ali" };
let b = { ...a }; // new copy in heap

b.name = "Sara";

console.log(a.name); // "Ali"
console.log(b.name); // "Sara"


*/


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//MORE ABOUT JSON.stringify(object2) METHOD
/*

🛠️ Basic Example:

Here’s the basic usage of JSON.stringify():

let object2 = { name: "Sara", age: 25, profession: "Engineer" }; let jsonString
= JSON.stringify(object2);

console.log(jsonString);

Output: {"name":"Sara","age":25,"profession":"Engineer"}


The entire object is turned into a JSON string.

The property names and values are surrounded by double quotes, as is the
standard in JSON.

📋 Understanding the Parameters:

value (required): The value you want to convert to a JSON string (e.g., an
object, array, number, or string).

replacer (optional): The replacer can be a function or an array that filters the
properties of the object, or even transforms them during stringification.

Replacer as a function: The function will be called for each key-value pair, and
you can decide what to do with them.

Example with a replacer function:

let object2 = { name: "Sara", age: 25, profession: "Engineer" }; let jsonString
= JSON.stringify(object2, (key, value) => { if (key === 'age') { return
undefined; // Remove the age property
    }
    return value; // Keep other properties
});

console.log(jsonString); // {"name":"Sara","profession":"Engineer"}


The age property is removed in the final string.

Replacer as an array: The array specifies which properties should be included in
the string.

Example with a replacer array:

let object2 = { name: "Sara", age: 25, profession: "Engineer" }; let jsonString
= JSON.stringify(object2, ["name", "profession"]);

console.log(jsonString); // {"name":"Sara","profession":"Engineer"}


Only the name and profession properties are included in the final JSON string.

space (optional): The space parameter can be used to format the output with
indentation (for better readability). You can provide a number (for spaces) or a
string (for custom indentation, like tabs).

Example with space:

let object2 = { name: "Sara", age: 25, profession: "Engineer" }; let jsonString
= JSON.stringify(object2, null, 2); // Indent with 2 spaces

console.log(jsonString);

Formatted Output:
{
  "name": "Sara", "age": 25, "profession": "Engineer"
}


This makes the JSON string much easier to read, especially when dealing with
large objects.

🛑 Things to Know About JSON.stringify():

Functions and undefined are omitted:

If an object has a function or an undefined value, they are ignored in the
resulting JSON string.

let obj = { name: "Sara", greet: function() { return "Hello"; }, age: undefined
};

console.log(JSON.stringify(obj)); // Output: {"name":"Sara"} (greet and age are
omitted)


Circular References:

JSON.stringify() will throw an error if it encounters a circular reference (when
an object references itself).

let obj = {}; obj.self = obj;

console.log(JSON.stringify(obj)); // Throws TypeError: Converting circular
structure to JSON


You would need to handle circular references manually if needed, often with a
replacer function that detects and excludes circular references.

Non-enumerable Properties:

Non-enumerable properties (those that are not listed in a for...in loop) will be
excluded from the stringified result.

Special Object Types:

Some objects, like Date, RegExp, and Map/Set, get stringified differently.

For example, a Date object will be converted to an ISO string:

let date = new Date(); console.log(JSON.stringify(date)); //
"2025-10-19T00:00:00.000Z"

📍 Practical Use Cases for JSON.stringify():

Logging: For better readability when logging complex objects.

Storing Data: You can store data in a string format (e.g., in local storage or
cookies).

Sending Data Over Network: JSON is a common format for data exchange in APIs.

Example: Storing in Local Storage: let user = { name: "Sara", age: 25 };
localStorage.setItem("user", JSON.stringify(user));

// Later, you can retrieve and parse the data: let storedUser =
JSON.parse(localStorage.getItem("user")); console.log(storedUser.name); //
"Sara"

💡 Summary:

JSON.stringify() converts an object into a JSON string.

You can customize the output with the replacer and space parameters.

It omits functions, undefined, and non-enumerable properties.

Useful for logging, storage, and network communication.

*/



//MORE ABOUT Object.assign({}, obj) METHOD

/*

🛠️ Basic Example: let obj1 = { name: "Alice", age: 25 }; let obj2 = {
profession: "Engineer", city: "New York" };

let result = Object.assign({}, obj1, obj2);

console.log(result);

Output:
{
  name: "Alice", age: 25, profession: "Engineer", city: "New York"
}


Explanation:

Here, Object.assign() copies all properties from obj1 and obj2 to a new empty
object ({}).

The resulting object combines the properties from both objects.

🧠 How It Works:

Target Object: The target object is the first argument, and it is where
properties from the source objects will be copied.

Source Objects: The source objects (additional arguments) provide the properties
that will be copied into the target.

Shallow Copy: Object.assign() does a shallow copy, which means it only copies
the first level of properties. If any properties are objects themselves, only
their references (not the actual data) are copied.

🧠 Shallow Copy: let obj1 = { name: "Bob", details: { age: 30, city: "London" }
};

let newObj = Object.assign({}, obj1);

console.log(newObj); // { name: "Bob", details: { age: 30, city: "London" } }

newObj.details.age = 35; // Modify the nested object

console.log(obj1.details.age); // 35 (Both obj1 and newObj share the same
reference to `details`)


Explanation:

Object.assign() creates a shallow copy, so newObj.details and obj1.details refer
to the same object in memory.

Changing newObj.details.age also changes obj1.details.age.

🛠️ How to Make a Deep Copy Using Object.assign()

To make a deep copy (i.e., copying nested objects or arrays) rather than a
shallow one, you need to implement a custom deep cloning mechanism or use a
library like Lodash.

A simple deep copy could look like this:

function deepCopy(obj) { return JSON.parse(JSON.stringify(obj));
}

let obj1 = { name: "Alice", details: { age: 25, city: "Paris" } }; let obj2 =
deepCopy(obj1);

obj2.details.age = 30;

console.log(obj1.details.age); // 25 (obj1 remains unchanged)
console.log(obj2.details.age); // 30 (obj2 is modified)

🧠 Use Cases of Object.assign()

Copying an Object: It is often used to copy an object into a new one to prevent
direct mutation of the original object.

let original = { name: "Alice", age: 25 }; let copy = Object.assign({},
original);

console.log(copy); // { name: "Alice", age: 25 }


Merging Objects: If you have multiple objects and you want to combine their
properties into one object, you can use Object.assign().

let person = { name: "Bob" }; let job = { profession: "Developer" }; let
location = { city: "Berlin" };

let result = Object.assign({}, person, job, location);

console.log(result); // { name: "Bob", profession: "Developer", city: "Berlin" }


Adding Properties: You can add new properties to an object by combining it with
another object.

let original = { name: "Sam" }; let updated = Object.assign({}, original, { age:
30 });

console.log(updated); // { name: "Sam", age: 30 }


Default Values (e.g., setting fallback properties): It's also commonly used for
setting default values. If a property doesn't exist in the target object,
Object.assign() will add it.

let defaults = { language: "English", theme: "light" }; let userSettings = {
theme: "dark" };

let settings = Object.assign({}, defaults, userSettings);

console.log(settings); // { language: "English", theme: "dark" }

🧠 Important Notes:

Does not copy getter/setter methods: Object.assign() copies only data
properties. If the object has getter or setter methods, those are not copied.

let obj1 = { _age: 25, get age() { return this._age;
  }
};

let copy = Object.assign({}, obj1);

console.log(copy.age); // `undefined`, as getters are not copied


Prototype chain is not copied: Object.assign() only copies own properties. It
does not copy the properties or methods from the object's prototype chain.

function Person(name) { this.name = name;
}

Person.prototype.sayHello = function() { return `Hello, ${this.name}!`;
};

let person1 = new Person("Alice"); let person2 = Object.assign({}, person1);

console.log(person2.sayHello()); // TypeError: person2.sayHello is not a
function

💡 Summary:

Object.assign() copies properties from one or more source objects to a target
object.

It performs a shallow copy, meaning nested objects or arrays are not deeply
copied.

It’s often used for object merging, copying objects, and setting default
properties.

*/