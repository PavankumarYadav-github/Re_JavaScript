
console.log(2 > 1);   // true
console.log(2 >= 1);  // true
console.log(2 < 1);   // false
console.log(2 == 1);  // false
console.log(2 != 1);  // true

console.log("2" > 1);    // true (string "2" is coerced to number 2, so 2 > 1)
console.log("02" > 1);   // true (string "02" is coerced to number 2, so 2 > 1)
console.log(null > 0);    // false (null is coerced to 0, so 0 > 0 is false)
console.log(null == 0);   // false (null is not equal to 0)
console.log(null >= 0);   // true (null is coerced to 0, so 0 >= 0 is true)

console.log(2 == "2");    // true (loose equality, string "2" is coerced to number 2)
console.log(2 === "2");   // false (strict equality, number 2 is not equal to string "2")

console.log(undefined == 0);  // false (undefined is not equal to 0)
console.log(undefined > 0);   // false (undefined is coerced to NaN, and NaN is not greater than 0)
console.log(undefined < 0);   // false (undefined is coerced to NaN, and NaN is not less than 0)




/*
1. Coercion
Coercion is automatic type conversion that happens implicitly by JavaScript when
you perform operations between different types. In other words, JavaScript
coerces values into the correct type for that operation without you needing to
explicitly change them.

2. Conversion
Conversion refers to explicitly changing one type to another. This usually
involves using functions or operators that allow you to specify how the
conversion should happen.


The reason is that an equality check == and comparisons > <>=
<= work differently.
Comparisons convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false.


"2" > 1:
JavaScript will try to compare the string "2" with the number 1. When comparing
a string with a number, JavaScript converts the string into a number (if
possible).
"2" becomes 2 and the comparison becomes 2 > 1, which is true.

"02" > 1:
Here, the string "02" is also converted to the number 2 (leading zeros are
ignored).
The comparison becomes 2 > 1, which is true.

null > 0:
In this comparison, null is coerced to 0 (as per JavaScript’s coercion rules).
So, the comparison becomes 0 > 0, which is false.

null == 0:
== performs type coercion, but null only loosely equals undefined. In
JavaScript, null and undefined are considered equal but null == 0 is false.
So, null == 0 is false.

null >= 0:
The >= operator checks for greater-than-or-equal. JavaScript will coerce null to
0 here.
This comparison becomes 0 >= 0, which is true.


Important Notes on Type Coercion and Comparisons
String and Number Comparison: When comparing a string to a number (like "2" > 1), 
JavaScript tries to convert the string to a number before doing the comparison.
•Strings that represent valid numbers are converted to those numbers.
•If the string cannot be converted to a number, the comparison results in NaN
(not a number), which is always false when compared to any other value.
null and Comparisons:

null is a special value in JavaScript. When compared with a number using >, <,
or >=, null is coerced to 0.
However, null == 0 is false, as null is not considered equal to 0 (it is only
loosely equal to undefined).
The behavior of null is somewhat quirky and inconsistent when it comes to
comparison operators.


Summary of Outputs:

console.log("2" > 1); → true (string "2" becomes 2 and 2 > 1).
console.log("02" > 1); → true (string "02" becomes 2 and 2 > 1).
console.log(null > 0); → false (null coerces to 0, so 0 > 0 is false).
console.log(null == 0); → false (null is not equal to 0).
console.log(null >= 0); → true (null coerces to 0, so 0 >= 0 is true).


"2" > 1 → true (string "2" is converted to number 2)
"02" > 1 → true (string "02" is converted to number 2)
null > 0 → false (null is coerced to 0)
null == 0 → false (null is not equal to 0)
null >= 0 → true (null is coerced to 0 and 0 >= 0 is true)


Coercion: JavaScript does it automatically (like "2" > 1).
Conversion: You do it explicitly (like Number("2")).



1. == (Loose Equality)

The == operator checks if two values are equal but does not consider their type.
It performs type coercion if the types of the two values are different, trying
to convert them into a common type before comparing them.

Example: console.log(2 == "2");  // true
The number 2 is compared to the string "2".
JavaScript coerces the string "2" to a number 2 before making the comparison.
Since both are now 2, the result is true.

2. === (Strict Equality)

The === operator checks if two values are equal and of the same type. It does
not perform type coercion. If the types are different, the comparison will
return false.
Example: console.log(2 === "2");  // false
The number 2 is compared to the string "2".
Since the types are different (one is a number, the other is a string), the
comparison fails, and the result is false.

Summary:
==: Loosely equal – compares values after coercing types (if necessary).
===: Strictly equal – compares both value and type without coercion.


| **Comparison**   | **Code**                       | **Expected Output** | **Explanation**                                                                                                                                                                                                                                                                               |
| ---------------- | ------------------------------ | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `undefined == 0` | `console.log(undefined == 0);` | **false**           | The `==` (loose equality) operator checks for equality with type coercion. `undefined` is not equal to `0`, even after coercion, because `undefined` is a distinct and special value in JavaScript. It does not coerce to numbers and never equals `0` or `null` (except in strict equality). |
| `undefined > 0`  | `console.log(undefined > 0);`  | **false**           | The `>` (greater than) operator compares `undefined` to `0`. When comparing `undefined` with a number using relational operators (`>`, `<`, `>=`, `<=`), `undefined` is coerced to `NaN` (Not-a-Number), and `NaN` is not greater than any number.                                            |
| `undefined < 0`  | `console.log(undefined < 0);`  | **false**           | The `<` (less than) operator compares `undefined` to `0`. Similar to the `>` operator, `undefined` is coerced to `NaN`, and `NaN` is not less than any number, so the comparison results in `false`.                                                                                          |




*/






