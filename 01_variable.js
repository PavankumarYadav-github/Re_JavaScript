const accountId = 144553;
let accountEmail = "cscsd@1121312";
var accountPassword = "Password@123";
accountCity = "New York";

//accountId=2;//Assignment to constant variable
accountEmail = "hello@123";
accountPassword = "Password@3698";
accountCity = "Dubai";

//To Print on console
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

//To Print in table form
console.table([accountId, accountEmail, accountPassword, accountCity]);

//************************************************************************************************NOTES***********************************************************************************
/*
To declare constant in javascript we use const keyword
To declare variable in javascript we use var or let keyword
But we wan't use var keyword as there is issue in block scope and function scope
we can declare variable without using var,let,const in javascript which is not good practice
if we declare variable without declaring value that output will be undefine
*/

/*

✅ JavaScript Notes Based on Code Example
📌 1. Variable Declarations in JavaScript

🔹 const
Used to declare constants (values that cannot be reassigned).
Must be initialized when declared.
Example:
const accountId = 144553;
// accountId = 2; ❌ Error: Assignment to constant variable

🔹 let
Used to declare variables with block scope.
Can be updated but not re-declared in the same scope.
Preferred over var for modern JavaScript.
Example:
let accountEmail = "cscsd@1121312";
accountEmail = "hello@123"; // ✅ Allowed

🔹 var (Not Recommended)
Used in older JavaScript versions.
Has function scope, not block scope — which can lead to bugs.
Can be re-declared and updated.
Example:
var accountPassword = "Password@123";
accountPassword = "Password@3698"; // ✅ Allowed

🔹 Undeclared Variables (❌ Bad Practice)
If you assign a value without let, const, or var, it becomes a global variable (not recommended).
Example:
accountCity = "New York"; // ❌ Implicit global variable


📌 2. Updating Variables

Variables declared with let or var can be reassigned:
accountEmail = "hello@123";
accountPassword = "Password@3698";
accountCity = "Dubai";


But variables declared with const cannot be reassigned:
accountId = 2; // ❌ Error


📌 3. Console Output
🔹 Print Individual Values:
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

🔹 Print All Values in Table Format:
console.table([accountId, accountEmail, accountPassword, accountCity]);
Outputs values in a clean, tabular format — useful for debugging.


📌 4. Additional Notes
/*
To declare constants → use `const`
To declare variables → use `let` (prefer over `var`)

Avoid using:
- `var` → because of function vs block scoping issues
- undeclared variables (without var/let/const) → creates global variables (bad practice)

If you declare a variable without assigning a value → it will be `undefined`
Example:
  let name;
  console.log(name); // undefined
*/

/*
console.log(a); // undefined
var a = 5;

console.log(b); // ❌ ReferenceError
let b = 10;


/*

✅ Best Practices Summary
    Rule	                Reason
    ✅      Use const by default	For values that don't change
    ✅      Use let when value changes	For block-scoped variables
    ❌      Avoid var	Has confusing scoping rules
    ❌      Don’t use undeclared variables	Pollutes global scope
    ✅      Use console.table()	For cleaner debugging of multiple values



| **Feature**            | `var`                                | `let`                          | `const`                           |
| ---------------------- | ------------------------------------ | ------------------------------ | --------------------------------- |
| **Can be declared?**   | ✅ Yes                                | ✅ Yes                          | ✅ Yes *(must be initialized)*     |
| **Can be reassigned?** | ✅ Yes                                | ✅ Yes                          | ❌ No *(value can't change)*       |
| **Can be redeclared?** | ✅ Yes *(in the same scope)*          | ❌ No *(in the same scope)*     | ❌ No *(in the same scope)*        |
| **Scope Type**         | Function Scope                       | Block Scope                    | Block Scope                       |
| **Hoisting**           | ✅ Yes *(initialized as `undefined`)* | ✅ Yes *(but not initialized)*  | ✅ Yes *(but not initialized)*     |
| **Best Practice**      | ❌ Avoid using `var`                  | ✅ Preferred for mutable values | ✅ Use when value shouldn't change |



| Feature            | **Function Scope**                                                           | **Block Scope**                                                                         |
| ------------------ | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| **Definition**     | Variables are only accessible inside a **function** where they are declared. | Variables are only accessible inside a **block** (like `{}`) where they are declared.   |
| **Keywords**       | `var`                                                                        | `let`, `const`                                                                          |
| **Applies to**     | Functions only                                                               | Any block: `if`, `for`, `while`, `{}` etc.                                              |
| **Common Mistake** | Thinking `var` is block-scoped — it’s not!                                   | Assuming all JS variables are function-scoped — they’re not if you use `let` or `const` |


if(condition){
 //Block Scope
}

function example() {
 //Function Scope
}


🟢 Function Scope Example (var)
function example() {
  var x = 10;
  console.log(x); // ✅ 10
}
console.log(x); // ❌ Error: x is not defined (outside the function)

🔴 var ignores block scope:
if (true) {
  var y = 20;
}
console.log(y); // ✅ 20 — var is NOT block scoped


✅ Block Scope Example (let / const)
if (true) {
  let a = 30;
  const b = 40;
  console.log(a); // ✅ 30
  console.log(b); // ✅ 40
}
console.log(a); // ❌ Error: a is not defined
console.log(b); // ❌ Error: b is not defined





*/
