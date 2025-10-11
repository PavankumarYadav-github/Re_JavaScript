//To Check With String

console.log("To Check With String");
let score1 = "33";
console.log(typeof score1); //String
console.log(typeof score1); //String

let valueNumber1 = Number(score1);
console.log(typeof valueNumber1); //Number
console.log(typeof valueNumber1); //Number
console.log(valueNumber1); //String convert to number

//To check with String but not a pure number
console.log("To Check With String but not a pure number");
let score2 = "33abc";
console.log(typeof score2); //String
console.log(typeof score2); //String

let valueNumber2 = Number(score2);
console.log(typeof valueNumber2); //Number
console.log(typeof valueNumber2); //Number
console.log(valueNumber2); //NaN as Score is not a pure number but still it get convert but return NaN(Not a Number)

//To Check with null
console.log("To check with null");
let score3 = null;
console.log(typeof score3); //String
console.log(typeof score3); //String

let valueNumber3 = Number(score3);
console.log(typeof valueNumber3); //Number
console.log(typeof valueNumber3); //Number
console.log(valueNumber3);

//To check with undefine
console.log("To check with undefine");
let score4;
console.log(typeof score4); //String
console.log(typeof score4); //String

let valueNumber4 = Number(score4);
console.log(typeof valueNumber4); //Number
console.log(typeof valueNumber4); //Number
console.log(valueNumber4);

//To check with boolean
console.log("To check with boolean");
let score5 = true;
console.log(typeof score5); //String
console.log(typeof score5); //String

let valueNumber5 = Number(score5);
console.log(typeof valueNumber5); //Number
console.log(typeof valueNumber5); //Number
console.log(valueNumber5);

/*
| **Scenario**                                   | **Value**                            | **Initial Type**     | **Converted Value** | **Converted Type** | **Explanation**                                                                                |
| ---------------------------------------------- | ------------------------------------ | -------------------- | ------------------- | ------------------ | ---------------------------------------------------------------------------------------------- |
| **To Check With String**                       | `let score1 = "33";`                 | `String`             | `33`                | `Number`           | String `"33"` is successfully converted to the number `33`.                                    |
| **To Check With String**                       | `console.log(typeof score1);`        | `String`             |                     |                    | `typeof score1` returns `string`.                                                              |
| **To Check With String**                       | `let valueNumber1 = Number(score1);` |                      | `33`                | `Number`           | `Number(score1)` converts `"33"` to `33`.                                                      |
| **To Check With String but not a pure number** | `let score2 = "33abc";`              | `String`             | `NaN`               | `Number`           | The string `"33abc"` cannot be fully converted to a number, resulting in `NaN` (Not a Number). |
| **To Check With String but not a pure number** | `console.log(valueNumber2);`         |                      | `NaN`               | `Number`           | `NaN` is the result of trying to convert `"33abc"` to a number.                                |
| **To Check with Null**                         | `let score3 = null;`                 | `Object` (bug in JS) | `0`                 | `Number`           | `null` is converted to `0` when treated as a number.                                           |
| **To Check with Null**                         | `console.log(typeof score3);`        | `Object`             |                     |                    | `typeof null` mistakenly returns `object` due to a JS bug.                                     |
| **To Check with Undefined**                    | `let score4;`                        | `Undefined`          | `NaN`               | `Number`           | `undefined` cannot be converted to a number, so it becomes `NaN`.                              |
| **To Check with Undefined**                    | `console.log(typeof score4);`        | `Undefined`          |                     |                    | `typeof score4` returns `undefined` because it has not been assigned a value.                  |
| **To Check with Boolean**                      | `let score5 = true;`                 | `Boolean`            | `1`                 | `Number`           | `true` converts to `1` when treated as a number. `false` would convert to `0`.                 |
| **To Check with Boolean**                      | `console.log(valueNumber5);`         | `1`                  |                     |                    | `true` becomes `1` when converted to a number.                                                 |


Key Observations:

String Conversion: A pure number in a string (like "33") converts successfully to the number 33.
Non-Numeric String: A string containing non-numeric characters (like "33abc") results in NaN (Not a Number) when converted.
Null Conversion: null is treated as 0 in numeric conversions.
Undefined Conversion: undefined becomes NaN when converted to a number.\
Boolean Conversion: true converts to 1, and false converts to 0.



*/

//******************************************************  String  *******************************************************************/

let val=3;
let negval=-val;
console.log(negval);


console.log(2+2);//4
console.log(2-2);//0
console.log(2*2);//4
console.log(2**3);//8 //Raises the first number to the power of the second number (in this case, 2²).
console.log(2/3);//0.6666666666
console.log(2%3);//2



let str1="Hello";
let str2=" World";
console.log(str1+str2);


console.log("1" + 2);
console.log(1 + "2");
console.log("1"+"2");
console.log("1"+ 2 + 2 );
console.log( 1+ 2 + "2" );
console.log("1"+ 2 + 2 );


console.log(true);      // true
console.log(+true);     // 1
//console.log(true+);     // SyntaxError
console.log(+"");       // 0


let counter = 100;
counter++;
console.log(counter);



let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
//https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

/*

Explanation:

Addition (+): Adds two numbers.
Subtraction (-): Subtracts the second number from the first.
Multiplication (*): Multiplies two numbers.
Exponentiation (**): Raises the first number to the power of the second number (in this case, 2²).
Division (/): Divides the first number by the second number (gives a floating-point result).
Modulo (%): Returns the remainder when the first number is divided by the second number (in this case, 2 ÷ 3 gives a remainder of 2).

Explanation:

"1" + 2:
The "1" is a string, and 2 is a number.
JavaScript sees the + operator and, since one of the operands is a string, it performs string concatenation (instead of addition).
The number 2 is converted to a string ("2") and then concatenated with "1", giving the result "12".

1 + "2":
Here, 1 is a number, and "2" is a string.
Again, JavaScript applies string concatenation because one of the operands is a string.
The number 1 is converted to a string ("1") and concatenated with "2", resulting in "12".

"1" + "2":
Both operands are already strings ("1" and "2").
JavaScript simply concatenates the two strings: "1" + "2" gives "12".
Key Concept: String Coercion
When you use the + operator and one of the operands is a string, JavaScript will
convert the other operand to a string (if it's not already) and perform string
concatenation. This is why we get "12" instead of performing numerical addition.


"1" + 2 + 2:
Step-by-step breakdown:
First, "1" is a string, and 2 is a number.
JavaScript sees the + operator and converts 2 to a string ("2") because one of the operands is already a string.
Now we have "1" + "2", which results in the string "12".
Next, it encounters another + with "12" (string) and 2 (number).
Again, JavaScript converts 2 into the string "2", and it concatenates it to "12", giving the final result "122".

2. 1 + 2 + "2":
Step-by-step breakdown:
The first 1 + 2 is treated as numeric addition because both operands are numbers.
1 + 2 results in 3.
Then, the next operation is 3 + "2". Here, 3 is a number and "2" is a string.
JavaScript converts 3 to the string "3" (since one operand is already a
string), and then it concatenates "3" with "2", resulting in "32".

3. "1" + 2 + 2:
This is exactly the same as the first one ("1" + 2 + 2).
The result is "122" for the same reasons as above.

Summary:

The key takeaway here is that JavaScript evaluates from left to right and
applies type coercion:
When you start with a string (like "1"), everything after it tends to get
converted to a string and concatenated.
When the addition starts with numbers (like 1 + 2), it performs numeric addition
first before switching to string concatenation if a string is involved.


1. console.log(true);
This simply logs the value true, which is a boolean. So the output is:

2. console.log(+true);
The + operator before true is the unary plus operator, which is used to convert a value into a number.
In JavaScript, true gets coerced into the number 1 when using the unary + operator.

3. console.log(true+);
This is a syntax error.
The + is not followed by a valid operand. It needs to be applied to a value to
convert it (like +true or +""), but here it stands alone, causing a syntax
issue.

4. console.log(+"");
The + operator before an empty string "" is again the unary plus operator.
The empty string "" is coerced into the number 0.

Summary:
The unary + operator is used for type coercion. It tries to convert the value into a number.
+true converts true into 1.
+"" converts an empty string into 0.
true+; causes a syntax error because + is not followed by a valid operand.




let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

Post-increment (x++): The value of x is used first, then it's incremented.
y = x++ means y gets the current value of x (which is 3), and then x is
incremented after the assignment. So, x becomes 4, and y remains 3.


let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);

Pre-increment (++a): The value of a is incremented first, and then the new value
is used.
b = ++a means a is incremented to 4, and then that new value of a is assigned to
b. So both a and b end up being 4.


Recap:
x++: Returns the value before incrementing.
++a: Increments first and then returns the incremented value.

*/

