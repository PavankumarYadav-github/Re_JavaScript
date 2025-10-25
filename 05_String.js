

const name="Alex";
const age=20;

//OLD
console.log(name+age+"value");
//NEW
console.log(`Hello ${name} my age is ${age}`);
console.log(`Hello ${name.toUpperCase()} my age is ${age}`);


const games=new String("Alex-GTA5");
console.log(games);
console.log(games[0]);
console.log(games.__proto__);
console.log(games.toUpperCase());
console.log(games.length);
console.log(games.charAt(2));
console.log(games.indexOf('e'));
console.log(games.slice(0,4));//last value will be exclude
console.log(games.substring(0,4));



//slice
const newGame=new String(games.slice(5,games.length));
console.log(newGame);

//Trim 
const string1=new String("           Username123             ");
console.log(`Without Trim :->${string1} With Trim :->${string1.trim()}`);

//Replace
const stringurl=new String("alex%20%123");
console.log(`Without Replace :->${stringurl}  With Replace :->${stringurl.replace('%20%','')}`);
console.log(stringurl.includes("%20%"));

//String to array
const string2=new String("GTA5-CSGO-PUBG");
console.log(string2.split("-"));





/*

const name = "Alex";
const age = 20;

const → Used for variables that shouldn’t be reassigned.
name → string primitive.
age → number primitive.

🔹 2. String Concatenation (Old vs New)

console.log(name + age + " value");//Alex20value
Strings can be concatenated using +.
JavaScript automatically converts numbers to strings when concatenated.


✅ New Method – Template Literals ( )
console.log(`Hello ${name} my age is ${age}`);//Hello Alex my age is 20
console.log(`Hello ${name.toUpperCase()} my age is ${age}`);//Hello ALEX my age is 20

Template literals are enclosed in backticks (`).
${} is used for variable interpolation or expressions.
Supports string methods inside the expression.


🔹 3. String Object (Using Constructor)
const games = new String("Alex-GTA5");

Creates a String Object, not a primitive string.
Stored in the heap (object reference stored in stack).
Contains built-in methods and properties.

✅ Accessing the String
console.log(games);
console.log(games[0]);

games → String {"Alex-GTA5"}
games[0] → "A" (index-based access, 0-based indexing)

✅ Prototype and Methods
console.log(games.__proto__);
Shows the prototype object of String which contains all default string methods (toUpperCase(), slice(), substring(), etc.)

✅ Common String Methods
| Method           | Description                            | Example                   | Output      |
| ---------------- | -------------------------------------- | ------------------------- | ----------- |
| `.toUpperCase()` | Converts all characters to uppercase   | `Alex-GTA5` → `ALEX-GTA5` | `ALEX-GTA5` |
| `.length`        | Returns number of characters           | `"Alex-GTA5"`             | `9`         |
| `.charAt(index)` | Returns character at specific index    | index `2`                 | `'e'`       |
| `.indexOf(char)` | Returns first index of given character | `'e'`                     | `2`         |


✅ Slicing / Substring
console.log(games.slice(0, 4));      // last index excluded  //Output: Alex
console.log(games.substring(0, 4));  // similar result       //Output: Alex

.slice(start, end) → Extracts part of a string.
.substring(start, end) → Similar, but doesn’t support negative indices.


🔹 4. Extracting a Portion of a String
const newGame = new String(games.slice(5, games.length));
console.log(newGame);

Extracts substring starting from index 5 to end.
Original: "Alex-GTA5"
Output: "GTA5"

🔹 5. Trimming Extra Spaces
const string1 = new String("           Username123             ");
console.log(`Without Trim :->${string1} With Trim :->${string1.trim()}`);

.trim() removes whitespace from both start and end of a string.
Does not affect internal spaces.


🔹 6. Replace Characters in a String
const stringurl = new String("alex%20%123");
console.log(`Without Replace :->${stringurl}  With Replace :->${stringurl.replace('%20%', '')}`);//Output: "alex123"

.replace(oldValue, newValue) → replaces first occurrence of substring.
Original: "alex%20%123"


✅ Checking for Substring
console.log(stringurl.includes("%20%"));
.includes(substring) → returns true if substring is found, else false.
Output: true

🔹 7. Convert String → Array
const string2 = new String("GTA5-CSGO-PUBG");
console.log(string2.split("-"));//["GTA5", "CSGO", "PUBG"]

.split(separator) → splits string into an array.
Separator "-" divides text at each hyphen.

| Operation       | Method / Concept         | Description             | Example       | Output                   |
| --------------- | ------------------------ | ----------------------- | ------------- | ------------------------ |
| Concatenation   | `+`                      | Old way to join strings | `"Alex" + 20` | `Alex20`                 |
| Template String | `` `Hello ${name}` ``    | Modern interpolation    | `${}` syntax  | `Hello Alex`             |
| Uppercase       | `.toUpperCase()`         | Converts to uppercase   | `Alex`        | `ALEX`                   |
| Length          | `.length`                | Returns string length   | `Alex-GTA5`   | `9`                      |
| Char Access     | `.charAt(index)`         | Get char at index       | index `2`     | `e`                      |
| Index           | `.indexOf('e')`          | First position of `e`   |               | `2`                      |
| Slice           | `.slice(start, end)`     | Extract substring       | `(0,4)`       | `Alex`                   |
| Substring       | `.substring(start, end)` | Similar to slice        | `(0,4)`       | `Alex`                   |
| Trim            | `.trim()`                | Removes extra spaces    | `"  abc  "`   | `abc`                    |
| Replace         | `.replace(old, new)`     | Replace part of string  | `'%20%' → ''` | `"alex123"`              |
| Includes        | `.includes(sub)`         | Check substring         | `"%20%"`      | `true`                   |
| Split           | `.split(separator)`      | Convert to array        | `"-"`         | `["GTA5","CSGO","PUBG"]` |



| Type                                     | Stored In                       | Description            |
| ---------------------------------------- | ------------------------------- | ---------------------- |
| **Primitive String** (`"Alex"`)          | Heap (value), Stack (reference) | Immutable, lightweight |
| **String Object** (`new String("Alex")`) | Heap (object + string value)    | Object wrapper, slower |

*/












