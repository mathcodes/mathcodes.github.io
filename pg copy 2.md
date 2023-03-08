Here is a list of JavaScript methods in alphabetical order with example code:


Array.prototype.concat() - Concatenates two or more arrays.

```js
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = array1.concat(array2);
console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]
```
## Array.prototype.every() - Tests whether all elements in the array pass the test implemented by the provided function.

```js
const array1 = [1, 2, 3, 4, 5];
const result = array1.every(element => element > 0);
console.log(result); // Output: true
```
## Array.prototype.filter() - Creates a new array with all elements that pass the test implemented by the provided function.

```js
const array1 = [1, 2, 3, 4, 5];
const newArray = array1.filter(element => element > 2);
console.log(newArray); // Output: [3, 4, 5]
```
## Array.prototype.forEach() - Executes a provided function once for each array element.

```js
const array1 = [1, 2, 3];
array1.forEach(element => console.log(element));
// Output: 1
//         2
//         3
```
## Array.prototype.includes() - Determines whether an array includes a certain element, returning true or false as appropriate.

```js
const array1 = [1, 2, 3];
const result = array1.includes(2);
console.log(result); // Output: true
```
## Array.prototype.indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not
present.

```js
const array1 = [1, 2, 3];
const index = array1.indexOf(2);
console.log(index); // Output: 1
```
## Array.prototype.join() - Joins all elements of an array into a string.

```js
const array1 = ['Hello', 'World'];
const string = array1.join(' ');
console.log(string); // Output: 'Hello World'
```
## Array.prototype.lastIndexOf() - Returns the last index at which a given element can be found in the array, or -1 if it is not
present.

```js
const array1 = [1, 2, 3];
const index = array1.lastIndexOf(2);
console.log(index); // Output: 1
```
## Array.prototype.map() - Creates a new array with the results of calling a provided function on every element in the calling
array.

```js
const array1 = [1, 2, 3];
const newArray = array1.map(element => element * 2);
console.log(newArray); // Output: [2, 4, 6]
```
## Array.prototype.pop() - Removes the last element from an array and returns that element.

```js
const array1 = [1, 2, 3];
const lastElement = array1.pop();
console.log(lastElement); // Output: 3
```
## Array.prototype.push() - Adds one or more elements to the end of an array and returns the new length of the array.

```js
const array1 = [1, 2, 3];
const newLength = array1.push(4, 5);
console.log(array1); // Output: [1, 2, 3,


```
## Array.prototype.reduce() - Executes a provided function for each value of the array and returns a single value.

```js
const array1 = [1, 2, 3];
const sum = array1.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // Output: 6
```
## Array.prototype.reduceRight() - Executes a provided function for each value of the array (from right-to-left) and returns a
single value.

```js
const array1 = [1, 2, 3];
const sum = array1.reduceRight((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // Output: 6
```
## Array.prototype.reverse() - Reverses the order of the elements in an array.

```js
const array1 = [1, 2, 3];
array1.reverse();
console.log(array1); // Output: [3, 2, 1]
```
## Array.prototype.shift() - Removes the first element from an array and returns that element.

```js
const array1 = [1, 2, 3];
const firstElement = array1.shift();
console.log(firstElement); // Output: 1
```
## Array.prototype.slice() - Returns a shallow copy of a portion of an array.

```js
const array1 = [1, 2, 3, 4, 5];
const newArray = array1.slice(1, 3);
console.log(newArray); // Output: [2, 3]
```
## Array.prototype.some() - Tests whether at least one element in the array passes the test implemented by the provided function.

```js
const array1 = [1, 2, 3, 4, 5];
const result = array1.some(element => element > 3);
console.log(result); // Output: true
```
## Array.prototype.sort() - Sorts the elements of an array in place and returns the sorted array.

```js
const array1 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
array1.sort();
console.log(array1); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
```
## Array.prototype.splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new
elements.

```js
const array1 = [1, 2, 3, 4, 5];
const removedElements = array1.splice(1, 2, 6, 7);
console.log(array1); // Output: [1, 6, 7, 4, 5]
console.log(removedElements); // Output: [2, 3]
```
## Array.prototype.toLocaleString() - Returns a string representing the elements of an array in a localized format.

```js
const array1 = [1, 2, 3];
const string = array1.toLocaleString();
console.log(string); // Output: '1,2,3'
```
## Array.prototype.toString() - Returns a string representing the specified array and its elements.

```js
const array1 = [1, 2, 3];
const string = array1.toString();
console.log(string); // Output: '1,2,3'
Array.prototype.unshift() - Adds one or more elements to


```
## Array.prototype.values() - Returns a new array iterator object that contains the values for each index in the array.

```js
const array1 = ['a', 'b', 'c'];
const iterator = array1.values();
for (const value of iterator) {
  console.log(value);
}
// Output: 'a'
//         'b'
//         'c'
Array.from() - Creates a new array instance from an array-like or iterable object.
Copy code
example code:

```
## Array.prototype.values() - Returns a new array iterator object that contains the values for each index in the array.

```js
const array1 = ['a', 'b', 'c'];
const iterator = array1.values();
for (const value of iterator) {
  console.log(value);
}
// Output: 'a'
//         'b'
//         'c'
```
## Array.from() - Creates a new array instance from an array-like or iterable object.

```js
const string = 'hello';
const array1 = Array.from(string);
console.log(array1); // Output: ['h', 'e', 'l', 'l', 'o']
```
## Array.isArray() - Determines whether the passed value is an Array.

```js
const array1 = [1, 2, 3];
const result = Array.isArray(array1);
console.log(result); // Output: true
```
## Array.of() - Creates a new array instance with a variable number of arguments, regardless of number or type of the arguments.

```js
const array1 = Array.of(1, 'two', true);
console.log(array1); // Output: [1, 'two', true]
```
## Boolean() - Returns the Boolean value of a specified expression.

```js
const result = Boolean(0);
console.log(result); // Output: false
```
## Date.prototype.getDate() - Returns the day of the month for a specified date according to local time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const day = date1.getDate();
console.log(day); // Output: 8
```
## Date.prototype.getDay() - Returns the day of the week for a specified date according to local time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const dayOfWeek = date1.getDay();
console.log(dayOfWeek); // Output: 3 (Wednesday)
```
## Date.prototype.getFullYear() - Returns the year for a specified date according to local time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const year = date1.getFullYear();
console.log(year); // Output: 2023
```
## Date.prototype.getHours() - Returns the hour for a specified date according to local time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const hour = date1.getHours();
console.log(hour); // Output: 12
```
## Date.prototype.getMilliseconds() - Returns the milliseconds for a specified date according to local time.

```js
const date1 = new Date('March 8, 2023 12:00:00.123');
const milliseconds = date1.getMilliseconds();
console.log(milliseconds); // Output: 123
```
## Date.prototype.getMinutes() - Returns the minutes for a specified date according to local time.

```js
const date1 = new Date('March 8, 2023 12:15:00');
const minutes = date1.getMinutes();
console.log(minutes); // Output: 15
```
## Date.prototype.getMonth() - Returns the month for a specified date according to local time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const month = date1.getMonth();
console.log(month


```
## Date.prototype.getSeconds() - Returns the seconds for a specified date according to local time.

```js
const date1 = new Date('March 8, 2023 12:00:30');
const seconds = date1.getSeconds();
console.log(seconds); // Output: 30
```
## Date.prototype.getTime() - Returns the numeric value corresponding to the time for a specified date according to universal time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const time = date1.getTime();
console.log(time); // Output: 1675605600000
```
## Date.prototype.getTimezoneOffset() - Returns the time-zone offset in minutes for the current locale.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const offset = date1.getTimezoneOffset();
console.log(offset); // Output: -300 (5 hours behind UTC)
```
## Date.prototype.getUTCDate() - Returns the day (date) of the month in the specified date according to universal time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const day = date1.getUTCDate();
console.log(day); // Output: 8
```
## Date.prototype.getUTCDay() - Returns the day of the week in the specified date according to universal time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const dayOfWeek = date1.getUTCDay();
console.log(dayOfWeek); // Output: 3 (Wednesday)
```
## Date.prototype.getUTCFullYear() - Returns the year in the specified date according to universal time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const year = date1.getUTCFullYear();
console.log(year); // Output: 2023
```
## Date.prototype.getUTCHours() - Returns the hour in the specified date according to universal time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const hour = date1.getUTCHours();
console.log(hour); // Output: 17 (12pm UTC is 5 hours ahead of EST)
```
## Date.prototype.getUTCMilliseconds() - Returns the milliseconds in the specified date according to universal time.

```js
const date1 = new Date('March 8, 2023 12:00:00.123');
const milliseconds = date1.getUTCMilliseconds();
console.log(milliseconds); // Output: 123
```
## Date.prototype.getUTCMinutes() - Returns the minutes in the specified date according to universal time.

```js
const date1 = new Date('March 8, 2023 12:15:00');
const minutes = date1.getUTCMinutes();
console.log(minutes); // Output: 15
```
## Date.prototype.getUTCMonth() - Returns the month in the specified date according to universal time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const month = date1.getUTCMonth();
console.log(month); // Output: 2 (March is the 3rd month, but 0-based indexing)
```
## Date.prototype.getUTCSeconds() - Returns the seconds in the specified date according to universal time.

```js
const date1


```
## Date.prototype.setDate() - Sets the day of the month for a specified date according to local time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
date1.setDate(10);
console.log(date1); // Output: 'Sat Mar 10 2023 12:00:00 GMT-0500 (Eastern Standard Time)'
```
## Date.prototype.setFullYear() - Sets the year for a specified date according to local time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
date1.setFullYear(2024);
console.log(date1); // Output: 'Tue Mar 08 2024 12:00:00 GMT-0500 (Eastern Standard Time)'
```
## Date.prototype.setHours() - Sets the hour for a specified date according to local time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
date1.setHours(13);
console.log(date1); // Output: 'Wed Mar 08 2023 13:00:00 GMT-0500 (Eastern Standard Time)'
```
## Date.prototype.setMilliseconds() - Sets the milliseconds for a specified date according to local time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
date1.setMilliseconds(500);
console.log(date1); // Output: 'Wed Mar 08 2023 12:00:00.500 GMT-0500 (Eastern Standard Time)'
```
## Date.prototype.setMinutes() - Sets the minutes for a specified date according to local time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
date1.setMinutes(30);
console.log(date1); // Output: 'Wed Mar 08 2023 12:30:00 GMT-0500 (Eastern Standard Time)'
```
## Date.prototype.setMonth() - Sets the month for a specified date according to local time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
date1.setMonth(4);
console.log(date1); // Output: 'Fri May 08 2023 12:00:00 GMT-0400 (Eastern Daylight Time)'
```
## Date.prototype.setSeconds() - Sets the seconds for a specified date according to local time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
date1.setSeconds(45);
console.log(date1); // Output: 'Wed Mar 08 2023 12:00:45 GMT-0500 (Eastern Standard Time)'
```Date.prototype.setTime() - Sets the Date object to the time represented by a number of milliseconds since January 1, 1970,
00:00:00 UTC.

```js
const date1 = new Date('March 8, 2023 12:00:00');
date1.setTime(1675606000000);
console.log(date1); // Output: 'Wed Mar 08 2023 12:20:00 GMT-0500 (Eastern Standard Time)'
```
## Date.prototype.setUTCDate() - Sets the day of the month for a specified date according to universal time.

```js
const date1 = new Date('March 8, 2023 12:00


```
## Date.prototype.setUTCFullYear() - Sets the year for a specified date according to universal time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
date1.setUTCFullYear(2024);
console.log(date1); // Output: 'Fri Mar 08 2024 12:00:00 GMT-0500 (Eastern Standard Time)'
```
## Date.prototype.setUTCHours() - Sets the hour for a specified date according to universal time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
date1.setUTCHours(18);
console.log(date1); // Output: 'Wed Mar 08 2023 13:00:00 GMT-0500 (Eastern Standard Time)'
```
## Date.prototype.setUTCMilliseconds() - Sets the milliseconds for a specified date according to universal time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
date1.setUTCMilliseconds(500);
console.log(date1); // Output: 'Wed Mar 08 2023 12:00:00.500 GMT-0500 (Eastern Standard Time)'
```
## Date.prototype.setUTCMinutes() - Sets the minutes for a specified date according to universal time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
date1.setUTCMinutes(30);
console.log(date1); // Output: 'Wed Mar 08 2023 12:30:00 GMT-0500 (Eastern Standard Time)'
```
## Date.prototype.setUTCMonth() - Sets the month for a specified date according to universal time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
date1.setUTCMonth(4);
console.log(date1); // Output: 'Tue May 08 2023 08:00:00 GMT-0400 (Eastern Daylight Time)'
```
## Date.prototype.setUTCSeconds() - Sets the seconds for a specified date according to universal time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
date1.setUTCSeconds(45);
console.log(date1); // Output: 'Wed Mar 08 2023 12:00:45 GMT-0500 (Eastern Standard Time)'
```
## Date.prototype.toDateString() - Returns the date portion of a Date object as a readable string.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const dateString = date1.toDateString();
console.log(dateString); // Output: 'Wed Mar 08 2023'
```
## Date.prototype.toISOString() - Returns a string representing the Date object in ISO format (YYYY-MM-DDTHH:mm:ss.sssZ).

```js
const date1 = new Date('March 8, 2023 12:00:00');
const isoString = date1.toISOString();
console.log(isoString); // Output: '2023-03-08T17:00:00.000Z'
```
## Date.prototype.toJSON() - Returns a string representing the Date object in JSON format.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const jsonString = JSON.stringify(date1);
console.log(jsonString);


```Date.prototype.toLocaleDateString() - Returns a string representing the date portion of a Date object in a locale-specific
format.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const dateString = date1.toLocaleDateString('en-US', options);
console.log(dateString); // Output: 'Wednesday, March 8, 2023'
```
## Date.prototype.toLocaleString() - Returns a string representing the Date object in a locale-specific format.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
const dateString = date1.toLocaleString('en-US', options);
console.log(dateString); // Output: 'Wednesday, March 8, 2023, 12:00 PM'
```Date.prototype.toLocaleTimeString() - Returns a string representing the time portion of a Date object in a locale-specific
format.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
const timeString = date1.toLocaleTimeString('en-US', options);
console.log(timeString); // Output: '12:00:00 PM'
```
## Date.prototype.toString() - Returns a string representing the Date object.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const string = date1.toString();
console.log(string); // Output: 'Wed Mar 08 2023 12:00:00 GMT-0500 (Eastern Standard Time)'
```
## Date.prototype.toTimeString() - Returns a string representing the time portion of a Date object.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const timeString = date1.toTimeString();
console.log(timeString); // Output: '12:00:00 GMT-0500 (Eastern Standard Time)'
```
## Date.prototype.toUTCString() - Converts a Date object to a string, according to universal time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const utcString = date1.toUTCString();
console.log(utcString); // Output: 'Wed, 08 Mar 2023 17:00:00 GMT'
```Date.now() - Returns the numeric value corresponding to the current time - the number of milliseconds elapsed since January 1,
1970, 00:00:00 UTC.

```js
const now = Date.now();
console.log(now); // Output: 1646761609555
```
## decodeURI() - Decodes a Uniform Resource Identifier (URI) previously created by encodeURI() or by a similar routine.

```js
const uri = 'https://en.wikipedia.org/wiki/Uniform_Resource_Identifier#URI_syntax';
const decoded = decodeURI(uri);
console.log(decoded); // Output: 'https://en.wikipedia.org/wiki/Uniform_Resource_Identifier#URI_syntax'
```
## decodeURIComponent() - Decodes a URI component previously created by encodeURIComponent() or by a similar routine.

```js
const uriComponent = 'The


```
## encodeURI() - Encodes a Uniform Resource Identifier (URI) by replacing each instance of certain characters by one, two, three,
or four escape sequences representing the UTF-8 encoding of the character.

```js
const uri = 'https://en.wikipedia.org/wiki/Uniform_Resource_Identifier#URI_syntax';
const encoded = encodeURI(uri);
console.log(encoded); // Output: 'https://en.wikipedia.org/wiki/Uniform_Resource_Identifier#URI_syntax'
```
## encodeURIComponent() - Encodes a URI component by replacing each instance of certain characters by one, two, three, or four
escape sequences representing the UTF-8 encoding of the character.

```js
const uriComponent = 'The Quick Brown Fox';
const encoded = encodeURIComponent(uriComponent);
console.log(encoded); // Output: 'The%20Quick%20Brown%20Fox'
```
## Error() - Creates an error object that contains an error message.

```js
const message = 'Something went wrong.';
const error = new Error(message);
console.log(error.message); // Output: 'Something went wrong.'
```
## eval() - Evaluates JavaScript code represented as a string.

```js
const code = '2 + 2';
const result = eval(code);
console.log(result); // Output: 4
```
## Event() - Creates a new Event object.

```js
const event = new Event('click');
console.log(event.type); // Output: 'click'
```
## EventTarget.addEventListener() - Registers an event handler function for the specified event on the EventTarget.

```js
const button = document.getElementById('myButton');
button.addEventListener('click', function() {
  console.log('Button clicked!');
});
```
## EventTarget.dispatchEvent() - Dispatches an event to this EventTarget.

```js
const button = document.getElementById('myButton');
const event = new Event('click');
button.dispatchEvent(event);
```
## Float32Array() - Creates a new Float32Array object.

```js
const array = new Float32Array([1.0, 2.0, 3.0]);
console.log(array); // Output: Float32Array [1, 2, 3]
```
## Float32Array.from() - Creates a new Float32Array object from an array-like or iterable object.

```js
const arrayLike = { 0: 1.0, 1: 2.0, 2: 3.0, length: 3 };
const array = Float32Array.from(arrayLike);
console.log(array); // Output: Float32Array [1, 2, 3]
```
## Float32Array.of() - Creates a new Float32Array object with a variable number of arguments.

```js
const array = Float32Array.of(1.0, 2.0, 3.0);
console.log(array); // Output: Float32Array [1, 2, 3]
```
## Float64Array() - Creates a new Float64Array object.

```js
const array = new Float64Array([1.0, 2.0, 3.0]);
console.log(array); // Output: Float64Array [1, 2, 3]
```
## Float64Array.from() - Creates a new Float64Array object from an array-like or iterable object.

```js
const arrayLike = { 0: 1.0, 1: 2.0, 2: 3.0, length: 3 };
const array = Float


```
## Float64Array.of() - Creates a new Float64Array object with a variable number of arguments.

```js
const array = Float64Array.of(1.0, 2.0, 3.0);
console.log(array); // Output: Float64Array [1, 2, 3]
```
## for...in statement - Iterates over the enumerable properties of an object, in arbitrary order.

```js
const person = { firstName: 'John', lastName: 'Doe', age: 30 };
for (const property in person) {
  console.log(`${property}: ${person[property]}`);
}
// Output:
// firstName: John
// lastName: Doe
// age: 30
```for...of statement - Iterates over iterable objects (including arrays, strings, maps, sets, etc.) and invokes a custom function
for each iteration.

```js
const array = [1, 2, 3];
for (const element of array) {
  console.log(element);
}
// Output:
// 1
// 2
// 3
```
## Function() - Creates a new Function object.

```js
const add = new Function('x', 'y', 'return x + y');
console.log(add(2, 3)); // Output: 5
```Function.prototype.apply() - Calls a function with a given this value and arguments provided as an array (or an array-like
object).

```js
function greet(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}
const person = { name: 'John' };
greet.apply(person, ['Hello']);
// Output: 'Hello, John!'
```Function.prototype.bind() - Creates a new function that, when called, has its this keyword set to the provided value and
arguments provided beforehand.

```js
function greet(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}
const person = { name: 'John' };
const boundGreet = greet.bind(person, 'Hello');
boundGreet(); // Output: 'Hello, John!'
```
## Function.prototype.call() - Calls a function with a given this value and arguments provided individually.

```js
function greet(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}
const person = { name: 'John' };
greet.call(person, 'Hello');
// Output: 'Hello, John!'
```
## Generator() - Creates a new Generator object.

```js
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}
const iterator = generator();
console.log(iterator.next().value); // Output: 1
console.log(iterator.next().value); // Output: 2
console.log(iterator.next().value); // Output: 3
```
## Generator.prototype.next() - Advances the Generator object to the next yielded value.

```js
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}
const iterator = generator();
console.log(iterator.next().value); // Output: 1
console.log(iterator.next().value); // Output: 2
console.log(iterator.next().value); // Output: 3
```
## Generator.prototype.return() - Ends the Generator object and returns a given value.

```js
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}
const iterator = generator();
console.log(iterator.next().value); //


```Generator.prototype.throw() - Throws an exception at the location where the Generator function is paused, and returns the
result of the next yield expression (or the end of the generator function, if there is no such expression).

```js
function* generator() {
  try {
    yield 1;
    yield 2;
    throw new Error('Something went wrong.');
    yield 3;
  } catch (e) {
    console.log(e.message);
  }
}
const iterator = generator();
console.log(iterator.next().value); // Output: 1
console.log(iterator.next().value); // Output: 2
console.log(iterator.throw(new Error('Error thrown.'))); // Output: 'Error thrown.'
```
## get keyword - Defines a getter method for an object property.

```js
const person = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};
console.log(person.fullName); // Output: 'John Doe'
```hasOwnProperty() - Returns a Boolean indicating whether the object has the specified property as a direct property of that
object and not inherited through the prototype chain.

```js
const person = { firstName: 'John', lastName: 'Doe', age: 30 };
console.log(person.hasOwnProperty('firstName')); // Output: true
console.log(person.hasOwnProperty('toString')); // Output: false
```if...else statement - Executes a block of code if a specified condition is true. If the condition is false, another block of
code can be executed.

```js
const a = 5;
const b = 10;
if (a > b) {
  console.log('a is greater than b.');
} else if (a < b) {
  console.log('a is less than b.');
} else {
  console.log('a and b are equal.');
}
// Output: 'a is less than b.'
```
## includes() - Determines whether an array includes a certain value among its entries, returning true or false as appropriate.

```js
const array = ['apple', 'banana', 'cherry'];
console.log(array.includes('banana')); // Output: true
console.log(array.includes('orange')); // Output: false
```
## indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present.

```js
const array = ['apple', 'banana', 'cherry'];
console.log(array.indexOf('banana')); // Output: 1
console.log(array.indexOf('orange')); // Output: -1
```
## Int16Array() - Creates a new Int16Array object.

```js
const array = new Int16Array([1, 2, 3]);
console.log(array); // Output: Int16Array [1, 2, 3]
```
## Int16Array.from() - Creates a new Int16Array object from an array-like or iterable object.

```js
const arrayLike = { 0: 1, 1: 2, 2: 3, length: 3 };
const array = Int16Array.from(arrayLike);
console.log(array); // Output: Int16Array [1, 2, 3]
```
## Int16Array.of() - Creates a new Int16Array object with a variable number of arguments.

```js
const array = Int16Array.of(1, 2, 3);
console.log(array); // Output: Int16Array [1, 2,


```
## Int32Array() - Creates a new Int32Array object.

```js
const array = new Int32Array([1, 2, 3]);
console.log(array); // Output: Int32Array [1, 2, 3]
```
## Int32Array.from() - Creates a new Int32Array object from an array-like or iterable object.

```js
const arrayLike = { 0: 1, 1: 2, 2: 3, length: 3 };
const array = Int32Array.from(arrayLike);
console.log(array); // Output: Int32Array [1, 2, 3]
```
## Int32Array.of() - Creates a new Int32Array object with a variable number of arguments.

```js
const array = Int32Array.of(1, 2, 3);
console.log(array); // Output: Int32Array [1, 2, 3]
```
## Int8Array() - Creates a new Int8Array object.

```js
const array = new Int8Array([1, 2, 3]);
console.log(array); // Output: Int8Array [1, 2, 3]
```
## Int8Array.from() - Creates a new Int8Array object from an array-like or iterable object.

```js
const arrayLike = { 0: 1, 1: 2, 2: 3, length: 3 };
const array = Int8Array.from(arrayLike);
console.log(array); // Output: Int8Array [1, 2, 3]
```
## Int8Array.of() - Creates a new Int8Array object with a variable number of arguments.

```js
const array = Int8Array.of(1, 2, 3);
console.log(array); // Output: Int8Array [1, 2, 3]
```
## isArray() - Determines whether the passed value is an Array.

```js
console.log(Array.isArray([1, 2, 3])); // Output: true
console.log(Array.isArray({ 0: 1, 1: 2, 2: 3, length: 3 })); // Output: false
```
## isFinite() - Determines whether a value is a finite number.

```js
console.log(isFinite(1)); // Output: true
console.log(isFinite(Infinity)); // Output: false
```
## isNaN() - Determines whether a value is NaN (not a number).

```js
console.log(isNaN(NaN)); // Output: true
console.log(isNaN(123)); // Output: false
```
## JSON.parse() - Parses a JSON string and returns the parsed value.

```js
const json = '{"name":"John","age":30,"city":"New York"}';
const object = JSON.parse(json);
console.log(object.name); // Output: 'John'
```
## JSON.stringify() - Converts a JavaScript object or value to a JSON string.

```js
const object = { name: 'John', age: 30, city: 'New York' };
const json = JSON.stringify(object);
console.log(json); // Output: '{"name":"John","age":30,"city":"New York"}'
```
## keys() - Returns an array containing the names of all of the given object's own enumerable string properties.

```js
const person = { firstName: 'John', lastName: 'Doe', age: 30 };
const keys


```
## lastIndexOf() - Returns the last index at which a given element can be found in the array, or -1 if it is not present.

```js
const array = ['apple', 'banana', 'cherry', 'banana'];
console.log(array.lastIndexOf('banana')); // Output: 3
console.log(array.lastIndexOf('orange')); // Output: -1
```
## length property - Sets or returns the number of elements in an array or the length of a string.

```js
const array = ['apple', 'banana', 'cherry'];
console.log(array.length); // Output: 3
const string = 'Hello, world!';
console.log(string.length); // Output: 13
```
## localeCompare() - Compares two strings in the current locale.

```js
console.log('ä'.localeCompare('z')); // Output: -1
console.log('ä'.localeCompare('a')); // Output: 1
console.log('ä'.localeCompare('ä')); // Output: 0
```
## map() - Creates a new array with the results of calling a provided function on every element in the calling array.

```js
const array = [1, 2, 3];
const mappedArray = array.map(element => element * 2);
console.log(mappedArray); // Output: [2, 4, 6]
```
## match() - Searches a string for a match against a regular expression, and returns the matches.

```js
const string = 'The quick brown fox jumps over the lazy dog.';
const regex = /[A-Z]/g;
const matches = string.match(regex);
console.log(matches); // Output: ['T', 'J']
```
## Math.abs() - Returns the absolute value of a number.

```js
console.log(Math.abs(-1)); // Output: 1
console.log(Math.abs(2)); // Output: 2
```
## Math.acos() - Returns the arccosine (in radians) of a number.

```js
console.log(Math.acos(0.5)); // Output: 1.0471975511965979
console.log(Math.acos(1)); // Output: 0
```
## Math.acosh() - Returns the hyperbolic arccosine of a number.

```js
console.log(Math.acosh(1)); // Output: 0
console.log(Math.acosh(2)); // Output: 1.3169578969248166
```
## Math.asin() - Returns the arcsine (in radians) of a number.

```js
console.log(Math.asin(0.5)); // Output: 0.5235987755982989
console.log(Math.asin(1)); // Output: 1.5707963267948966
```
## Math.asinh() - Returns the hyperbolic arcsine of a number.

```js
console.log(Math.asinh(1)); // Output: 0.881373587019543
console.log(Math.asinh(2)); // Output: 1.4436354751788103
```
## Math.atan() - Returns the arctangent (in radians) of a number.

```js
console.log(Math.atan(1)); // Output: 0.7853981633974483
console.log(Math.atan(0)); // Output: 0
Math.atan2() - Returns the angle (in radians) from the X axis to a point specified by two coordinate values


```
## Math.atanh() - Returns the hyperbolic arctangent of a number.

```js
console.log(Math.atanh(0.5)); // Output: 0.5493061443340549
console.log(Math.atanh(0.9)); // Output: 1.4722194895832204
```
## Math.cbrt() - Returns the cube root of a number.

```js
console.log(Math.cbrt(8)); // Output: 2
console.log(Math.cbrt(27)); // Output: 3
```
## Math.ceil() - Returns the smallest integer greater than or equal to a given number.

```js
console.log(Math.ceil(1.2)); // Output: 2
console.log(Math.ceil(-1.2)); // Output: -1
```
## Math.clz32() - Returns the number of leading zeros in the 32-bit binary representation of a number.

```js
console.log(Math.clz32(1)); // Output: 31
console.log(Math.clz32(1000)); // Output: 22
```
## Math.cos() - Returns the cosine of a number (in radians).

```js
console.log(Math.cos(0)); // Output: 1
console.log(Math.cos(Math.PI)); // Output: -1
```
## Math.cosh() - Returns the hyperbolic cosine of a number.

```js
console.log(Math.cosh(0)); // Output: 1
console.log(Math.cosh(1)); // Output: 1.5430806348152437
```
## Math.E - Returns Euler's number (approximately 2.718).

```js
console.log(Math.E); // Output: 2.718281828459045
```
## Math.exp() - Returns the value of Euler's number raised to the power of a number.

```js
console.log(Math.exp(1)); // Output: 2.718281828459045
console.log(Math.exp(2)); // Output: 7.38905609893065
```
## Math.floor() - Returns the largest integer less than or equal to a given number.

```js
console.log(Math.floor(1.2)); // Output: 1
console.log(Math.floor(-1.2)); // Output: -2
```
## Math.fround() - Returns the nearest single precision float representation of a number.

```js
console.log(Math.fround(1.2345)); // Output: 1.2345000505447388
console.log(Math.fround(1.5)); // Output: 1.5
```
## Math.hypot() - Returns the square root of the sum of squares of its arguments.

```js
console.log(Math.hypot(3, 4)); // Output: 5
console.log(Math.hypot(1, 2, 3)); // Output: 3.7416573867739413
```
## Math.imul() - Returns the result of a 32-bit integer multiplication.

```js
console.log(Math.imul(2, 3)); // Output: 6
console.log(Math.imul(-1, 8)); // Output: -8
```
## Math.LN10 - Returns the natural logarithm of 10 (approximately 2.303).

```js
console.log(Math.LN10); // Output: 2.302585092994046


```
## Math.LN2 - Returns the natural logarithm of 2 (approximately 0.693).

```js
console.log(Math.LN2); // Output: 0.6931471805599453
```
## Math.log() - Returns the natural logarithm of a number.

```js
console.log(Math.log(Math.E)); // Output: 1
console.log(Math.log(10)); // Output: 2.302585092994046
```
## Math.log10() - Returns the base 10 logarithm of a number.

```js
console.log(Math.log10(100)); // Output: 2
console.log(Math.log10(1000)); // Output: 3
```
## Math.log2() - Returns the base 2 logarithm of a number.

```js
console.log(Math.log2(8)); // Output: 3
console.log(Math.log2(16)); // Output: 4
```
## Math.max() - Returns the largest of zero or more numbers.

```js
console.log(Math.max(1, 2, 3)); // Output: 3
console.log(Math.max(-1, -2, -3)); // Output: -1
```
## Math.min() - Returns the smallest of zero or more numbers.

```js
console.log(Math.min(1, 2, 3)); // Output: 1
console.log(Math.min(-1, -2, -3)); // Output: -3
```
## Math.PI - Returns the value of pi (approximately 3.14159).

```js
console.log(Math.PI); // Output: 3.141592653589793
```
## Math.pow() - Returns the base to the exponent power.

```js
console.log(Math.pow(2, 3)); // Output: 8
console.log(Math.pow(3, 2)); // Output: 9
```
## Math.random() - Returns a random number between 0 (inclusive) and 1 (exclusive).

```js
console.log(Math.random()); // Output: a random number between 0 and 1
```
## Math.round() - Returns the value of a number rounded to the nearest integer.

```js
console.log(Math.round(1.2)); // Output: 1
console.log(Math.round(1.5)); // Output: 2
```
## Math.sin() - Returns the sine of a number (in radians).

```js
console.log(Math.sin(0)); // Output: 0
console.log(Math.sin(Math.PI)); // Output: 1.2246467991473532e-16
```
## Math.sinh() - Returns the hyperbolic sine of a number.

```js
console.log(Math.sinh(0)); // Output: 0
console.log(Math.sinh(1)); // Output: 1.1752011936438014
```
## Math.sqrt() - Returns the positive square root of a number.

```js
console.log(Math.sqrt(4)); // Output: 2
console.log(Math.sqrt(9)); // Output: 3
```
## Math.tan() - Returns the tangent of a number (in radians).

```js
console.log(Math.tan(0)); // Output: 0
console.log(Math.tan(Math.PI / 4)); // Output: 0.9999999999999999
Math.tanh() - Returns the


```
## Math.tanh() - Returns the hyperbolic tangent of a number.

```js
console.log(Math.tanh(0)); // Output: 0
console.log(Math.tanh(1)); // Output: 0.7615941559557649
```
## Math.trunc() - Returns the integer part of a number by removing any fractional digits.

```js
console.log(Math.trunc(1.2)); // Output: 1
console.log(Math.trunc(-1.2)); // Output: -1
```
## Number() - Converts an object's value to a number.

```js
console.log(Number(true)); // Output: 1
console.log(Number('42')); // Output: 42
```
## Number.EPSILON - Represents the difference between 1 and the smallest value greater than 1 that can be represented as a number.

```js
console.log(Number.EPSILON); // Output: 2.220446049250313e-16
```
## Number.isFinite() - Determines whether the passed value is a finite number.

```js
console.log(Number.isFinite(1)); // Output: true
console.log(Number.isFinite('42')); // Output: false
```
## Number.isInteger() - Determines whether the passed value is an integer.

```js
console.log(Number.isInteger(1)); // Output: true
console.log(Number.isInteger(1.2)); // Output: false
```
## Number.isNaN() - Determines whether the passed value is NaN.

```js
console.log(Number.isNaN(1)); // Output: false
console.log(Number.isNaN(NaN)); // Output: true
```
## Number.isSafeInteger() - Determines whether the passed value is a safe integer.

```js
console.log(Number.isSafeInteger(1)); // Output: true
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)); // Output: false
```
## Number.MAX_SAFE_INTEGER - Represents the maximum safe integer in JavaScript (2^53 - 1).

```js
console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991
```
## Number.MAX_VALUE - Represents the maximum numeric value representable in JavaScript.

```js
console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308
```
## Number.MIN_SAFE_INTEGER - Represents the minimum safe integer in JavaScript (-2^53 + 1).

```js
console.log(Number.MIN_SAFE_INTEGER); // Output: -9007199254740991
```
## Number.MIN_VALUE - Represents the smallest positive numeric value representable in JavaScript.

```js
console.log(Number.MIN_VALUE); // Output: 5e-324
```
## Number.parseFloat() - Parses a string argument and returns a floating point number.

```js
console.log(Number.parseFloat('3.14')); // Output: 3.14
console.log(Number.parseFloat('2e2')); // Output: 200
```
## Number.parseInt() - Parses a string argument and returns an integer.

```js
console.log(Number.parseInt('42')); // Output: 42
console.log(Number.parseInt('1010', 2)); // Output: 10
```
## Object.assign() - Copies the values of all enumerable properties from one or more source objects to a target object.

```js
const target = { a: 1, b: 2 };
const source = { b:


```
## Object.assign() - Copies the values of all enumerable properties from one or more source objects to a target object.

```js
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
Object.assign(target, source);
console.log(target); // Output: {a: 1, b: 3, c: 4}
```
## Object.create() - Creates a new object with the specified prototype object and properties.

```js
const person = {
  sayHello() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};
const john = Object.create(person);
john.name = 'John';
john.sayHello(); // Output: "Hello, my name is John."
```
## Object.defineProperties() - Defines new or modifies existing properties directly on an object, returning the object.

```js
const obj = {};
Object.defineProperties(obj, {
  property1: {
    value: 42,
    writable: false
  },
  property2: {}
});
console.log(obj.property1); // Output: 42
```Object.defineProperty() - Defines a new property directly on an object, or modifies an existing property on an object, and
returns the object.

```js
const obj = {};
Object.defineProperty(obj, 'property1', {
  value: 42,
  writable: false
});
console.log(obj.property1); // Output: 42
```
## Object.entries() - Returns an array of a given object's own enumerable property [key, value] pairs.

```js
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.entries(obj)); // Output: [['a', 1], ['b', 2], ['c', 3]]
```Object.freeze() - Freezes an object, preventing new properties from being added to it and preventing existing properties from
being removed or changed.

```js
const obj = { a: 1 };
Object.freeze(obj);
obj.a = 2;
console.log(obj.a); // Output: 1
```Object.fromEntries() - Returns a new object from an iterable of [key, value] pairs (such as an array), where each pair is used
to create an own enumerable property of the object.

```js
const arr = [['a', 1], ['b', 2], ['c', 3]];
console.log(Object.fromEntries(arr)); // Output: {a: 1, b: 2, c: 3}
```
## Object.getOwnPropertyDescriptor() - Returns an object describing the configuration of a specific property on an object.

```js
const obj = { a: 1 };
const descriptor = Object.getOwnPropertyDescriptor(obj, 'a');
console.log(descriptor.value); // Output: 1
console.log(descriptor.writable); // Output: true
```
## Object.getOwnPropertyDescriptors() - Returns an object containing all own property descriptors for an object.

```js
const obj = { a: 1 };
const descriptors = Object.getOwnPropertyDescriptors(obj);
console.log(descriptors.a.value); // Output: 1
console.log(descriptors.a.writable); // Output: true
```
## Object.getOwnPropertyNames() - Returns an array of all property names (including non-enumerable properties) of a given object.

```js
const obj = { a: 1, b: 2 };
console.log(Object.getOwnPropertyNames(obj)); // Output: ['a', 'b']
`Object.getOwnPropertySymbols


```Object.getOwnPropertySymbols() - Returns an array of all symbol properties (including non-enumerable properties) of a given
object.

```js
const obj = {
  [Symbol('a')]: 1,
  [Symbol.for('b')]: 2
};
console.log(Object.getOwnPropertySymbols(obj)); // Output: [Symbol(a), Symbol(b)]
```
## Object.getPrototypeOf() - Returns the prototype (i.e., the value of the internal [[Prototype]] property) of a specified object.

```js
const obj = {};
console.log(Object.getPrototypeOf(obj) === Object.prototype); // Output: true
```
## Object.is() - Determines whether two values are the same value.

```js
console.log(Object.is(1, 1)); // Output: true
console.log(Object.is(NaN, NaN)); // Output: true
console.log(Object.is(0, -0)); // Output: false
```
## Object.isExtensible() - Determines if an object is extensible (i.e., whether new properties can be added to it).

```js
const obj = {};
console.log(Object.isExtensible(obj)); // Output: true
Object.preventExtensions(obj);
console.log(Object.isExtensible(obj)); // Output: false
```Object.isFrozen() - Determines if an object is frozen (i.e., whether new properties can be added to it and existing properties
can be removed or changed).

```js
const obj = { a: 1 };
console.log(Object.isFrozen(obj)); // Output: false
Object.freeze(obj);
console.log(Object.isFrozen(obj)); // Output: true
```Object.isSealed() - Determines if an object is sealed (i.e., whether new properties can be added to it and existing properties
can be removed).

```js
const obj = { a: 1 };
console.log(Object.isSealed(obj)); // Output: false
Object.seal(obj);
console.log(Object.isSealed(obj)); // Output: true
```
## Object.keys() - Returns an array of a given object's own enumerable property names.

```js
const obj = { a: 1, b: 2 };
console.log(Object.keys(obj)); // Output: ['a', 'b']
```
## Object.preventExtensions() - Prevents new properties from being added to an object.

```js
const obj = { a: 1 };
Object.preventExtensions(obj);
obj.b = 2;
console.log(obj.b); // Output: undefined
```
## Object.seal() - Prevents new properties from being added to an object and marks all existing properties as non-configurable.

```js
const obj = { a: 1 };
Object.seal(obj);
delete obj.a;
console.log(obj.a); // Output: 1
```Object.setPrototypeOf() - Sets the prototype (i.e., the value of the internal [[Prototype]] property) of a specified object to
another object or null.

```js
const obj1 = {};
const obj2 = { a: 1 };
Object.setPrototypeOf(obj1, obj2);
console.log(obj1.a); // Output: 1
```
## Promise() - Creates a new Promise object.

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('done');
  }, 1000);
});
promise.then((value) => {
  console.log(value); // Output: "done"
});
Promise.all() - Returns a promise that resolves when all of the


```Promise.all() - Returns a promise that resolves when all of the promises in the iterable argument have resolved or rejects with
the reason of the first promise that rejects.

```js
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.reject('Error');
Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // Output: Uncaught (in promise) Error
}).catch((reason) => {
  console.log(reason); // Output: "Error"
});
```Promise.allSettled() - Returns a promise that resolves with an array of objects that each represent the outcome of each promise
in the iterable argument, whether fulfilled or rejected.

```js
const promise1 = Promise.resolve(1);
const promise2 = Promise.reject('Error');
Promise.allSettled([promise1, promise2]).then((results) => {
  console.log(results); // Output: [{status: "fulfilled", value: 1}, {status: "rejected", reason: "Error"}]
});
```Promise.any() - Returns a promise that resolves with the value of the first promise in the iterable argument to fulfill, or
rejects with an AggregateError object if all of the promises reject.

```js
const promise1 = Promise.reject('Error 1');
const promise2 = Promise.resolve('done');
const promise3 = Promise.reject('Error 2');
Promise.any([promise1, promise2, promise3]).then((value) => {
  console.log(value); // Output: "done"
}).catch((error) => {
  console.log(error); // Output: AggregateError: All promises were rejected
});
```Promise.prototype.catch() - Appends a rejection handler to the promise, returning a new promise that is resolved with the
handler's return value (or the original rejected value if the handler returns nothing).

```js
const promise = Promise.reject('Error');
promise.catch((reason) => {
  console.log(reason); // Output: "Error"
});
```Promise.prototype.finally() - Appends a handler to the promise that is called regardless of whether the promise is resolved or
rejected, returning a new promise with the same settled value as the original promise.

```js
const promise = Promise.resolve('done');
promise.finally(() => {
  console.log('finally'); // Output: "finally"
}).then((value) => {
  console.log(value); // Output: "done"
});
```
## RegExp() - Creates a new regular expression object.

```js
const regex = new RegExp('abc');
console.log(regex.test('abc')); // Output: true
```RegExp.prototype.exec() - Executes a search for a match in a string and returns an array of information about the match, or
null if no match was found.

```js
const regex = /(\d+)/g;
const str = '1 apples, 2 bananas, and 3 oranges';
let match;
while ((match = regex.exec(str)) !== null) {
  console.log(match[1]); // Output: "1", "2", "3"
}
```
## RegExp.prototype.test() - Tests for a match in a string and returns true or false.

```js
const regex = /apple/;
console.log(regex.test('I like apples')); // Output: true
console.log(regex.test('I like bananas')); // Output: false
```
## Set() - Creates a new Set object.

```js
const set =


```
## Set() - Creates a new Set object.

```js
const set = new Set([1, 2, 3]);
set.add(4);
console.log(set); // Output: Set(4) {1, 2, 3, 4}
```
## Set.prototype.add() - Appends a new element with a specified value to the end of a Set object, returning the Set object.

```js
const set = new Set([1, 2, 3]);
set.add(4);
console.log(set); // Output: Set(4) {1, 2, 3, 4}
```
## Set.prototype.clear() - Removes all elements from a Set object.

```js
const set = new Set([1, 2, 3]);
set.clear();
console.log(set); // Output: Set(0) {}
```
## Set.prototype.delete() - Removes the specified element from a Set object, returning true if the element was removed
successfully, otherwise false.

```js
const set = new Set([1, 2, 3]);
set.delete(2);
console.log(set); // Output: Set(2) {1, 3}
```
## Set.prototype.entries() - Returns a new iterator object that contains an array of [value, value] for each element in a Set
object, in insertion order.

```js
const set = new Set([1, 2, 3]);
for (const [key, value] of set.entries()) {
  console.log(key, value); // Output: 1 1, 2 2, 3 3
}
```
## Set.prototype.forEach() - Calls a provided function once for each element in a Set object, in insertion order.

```js
const set = new Set([1, 2, 3]);
set.forEach((value) => {
  console.log(value); // Output: 1, 2, 3
});
```
## Set.prototype.has() - Returns a boolean indicating whether an element with the specified value exists in a Set object or not.

```js
const set = new Set([1, 2, 3]);
console.log(set.has(2)); // Output: true
console.log(set.has(4)); // Output: false
```
## Set.prototype.keys() - Returns a new iterator object that contains the values for each element in a Set object, in insertion
order.

```js
const set = new Set([1, 2, 3]);
for (const key of set.keys()) {
  console.log(key); // Output: 1, 2, 3
}
```
## Set.prototype.values() - Returns a new iterator object that contains the values for each element in a Set object, in insertion
order.

```js
const set = new Set([1, 2, 3]);
for (const value of set.values()) {
  console.log(value); // Output: 1, 2, 3
}
```
## String() - Converts a value to a string.

```js
const str = String(123);
console.log(typeof str); // Output: "string"
```
## String.fromCharCode() - Returns a string created by using the specified sequence of Unicode values.

```js
const str = String.fromCharCode(97, 98, 99);
console.log(str); // Output: "abc"
`String.prototype.charAt


```
## String.prototype.charAt() - Returns the character at the specified index in a string.

```js
const str = 'hello';
console.log(str.charAt(1)); // Output: "e"
```
## String.prototype.charCodeAt() - Returns the Unicode value of the character at the specified index in a string.

```js
const str = 'hello';
console.log(str.charCodeAt(1)); // Output: 101
```
## String.prototype.codePointAt() - Returns a non-negative integer that is the Unicode code point value of the character at the
specified position in a string.

```js
const str = '𠮷';
console.log(str.codePointAt(0)); // Output: 134071
```
## String.prototype.concat() - Concatenates two or more strings and returns a new string.

```js
const str1 = 'hello';
const str2 = 'world';
console.log(str1.concat(' ', str2)); // Output: "hello world"
```
## String.prototype.endsWith() - Determines whether a string ends with the characters of another string.

```js
const str = 'hello world';
console.log(str.endsWith('world')); // Output: true
```
## String.prototype.includes() - Determines whether one string may be found within another string.

```js
const str = 'hello world';
console.log(str.includes('world')); // Output: true
```
## String.prototype.indexOf() - Returns the index within a string of the first occurrence of a specified value, or -1 if not found.

```js
const str = 'hello world';
console.log(str.indexOf('world')); // Output: 6
```
## String.prototype.lastIndexOf() - Returns the index within a string of the last occurrence of a specified value, or -1 if not
found.

```js
const str = 'hello world';
console.log(str.lastIndexOf('o')); // Output: 7
```
## String.prototype.localeCompare() - Compares two strings in the current locale.

```js
const str1 = 'apple';
const str2 = 'banana';
console.log(str1.localeCompare(str2)); // Output: -1
```
## String.prototype.match() - Searches a string for a match against a regular expression and returns an array of information about
the match, or null if no match was found.

```js
const str = 'The quick brown fox jumps over the lazy dog';
const regex = /[A-Z]/g;
console.log(str.match(regex)); // Output: ["T", "T"]
```
## String.prototype.matchAll() - Returns an iterator of all matches of a regular expression in a string.

```js
const str = 'The quick brown fox jumps over the lazy dog';
const regex = /[A-Z]/g;
const matches = str.matchAll(regex);
for (const match of matches) {
  console.log(match[0]); // Output: "T", "T"
}
```
## String.prototype.normalize() - Returns a Unicode Normalization Form of a given string.

```js
const str = '\u1E9B\u0323';
console.log(str.normalize()); // Output: "ẛ̣"
```
## String.prototype.padEnd() - Pads the end of a string with a specified string until the resulting string reaches a specified
length.

```js
const str = 'hello';
console.log(str.padEnd(10, '.')); // Output: "hello....."
String.prototype.padStart() - Pads the beginning of a string with a specified


```
## String.prototype.padStart() - Pads the beginning of a string with a specified string until the resulting string reaches a
specified length.

```js
const str = 'hello';
console.log(str.padStart(10, '.')); // Output: ".....hello"
```
## String.prototype.repeat() - Returns a new string with a specified number of copies of an existing string.

```js
const str = 'hello';
console.log(str.repeat(3)); // Output: "hellohellohello"
```
## String.prototype.replace() - Searches a string for a specified value or regular expression and returns a new string where the
specified values are replaced.

```js
const str = 'Hello, World!';
console.log(str.replace('Hello', 'Hi')); // Output: "Hi, World!"
```
## String.prototype.replaceAll() - Replaces all occurrences of a specified value or regular expression with a new string.

```js
const str = 'Hello, World!';
console.log(str.replaceAll('l', 'z')); // Output: "Hezzo, Worzd!"
```
## String.prototype.search() - Searches a string for a specified value or regular expression and returns the position of the
match, or -1 if not found.

```js
const str = 'The quick brown fox jumps over the lazy dog';
console.log(str.search('fox')); // Output: 16
```
## String.prototype.slice() - Extracts a section of a string and returns a new string.

```js
const str = 'The quick brown fox';
console.log(str.slice(4, 9)); // Output: "quick"
```
## String.prototype.split() - Splits a string into an array of substrings based on a specified separator.

```js
const str = 'The quick brown fox';
console.log(str.split(' ')); // Output: ["The", "quick", "brown", "fox"]
```
## String.prototype.startsWith() - Determines whether a string starts with the characters of another string.

```js
const str = 'hello world';
console.log(str.startsWith('hello')); // Output: true
```
## String.prototype.substring() - Returns the part of a string between two indexes, or to the end of the string.

```js
const str = 'The quick brown fox';
console.log(str.substring(4, 9)); // Output: "quick"
```
## String.prototype.toLocaleLowerCase() - Returns a string converted to lowercase according to the current locale.

```js
const str = 'HELLO WORLD';
console.log(str.toLocaleLowerCase()); // Output: "hello world"
```
## String.prototype.toLocaleUpperCase() - Returns a string converted to uppercase according to the current locale.

```js
const str = 'hello world';
console.log(str.toLocaleUpperCase()); // Output: "HELLO WORLD"
```
## String.prototype.toLowerCase() - Returns a string converted to lowercase.

```js
const str = 'HELLO WORLD';
console.log(str.toLowerCase()); // Output: "hello world"
```
## String.prototype.toString() - Returns a string representing the specified object.

```js
const obj = {x: 1, y: 2};
console.log(obj.toString()); // Output: "[object Object]"
```
## String.prototype.toUpperCase() - Returns a string converted to uppercase.

```js
const str = 'hello world';
console.log(str.toUpperCase()); // Output: "HELLO WORLD"
```
## String.prototype.trim() - Removes whitespace from both ends of a string.

```js
const str = '   hello world   ';
console.log


```
## String.prototype.trim() - Removes whitespace from both ends of a string.

```js
const str = '   hello world   ';
console.log(str.trim()); // Output: "hello world"
```
## String.prototype.trimEnd() - Removes whitespace from the end of a string.

```js
const str = '   hello world   ';
console.log(str.trimEnd()); // Output: "   hello world"
```
## String.prototype.trimStart() - Removes whitespace from the beginning of a string.

```js
const str = '   hello world   ';
console.log(str.trimStart()); // Output: "hello world   "
```
## String.prototype.valueOf() - Returns the primitive value of a String object.

```js
const str = new String('hello world');
console.log(str.valueOf()); // Output: "hello world"
```
## Symbol() - Creates a new unique symbol value.

```js
const sym1 = Symbol('foo');
const sym2 = Symbol('foo');
console.log(sym1 === sym2); // Output: false
```
## Symbol.for() - Returns a symbol key from the global symbol registry if it exists, otherwise creates a new symbol and returns it.

```js
const sym1 = Symbol.for('foo');
const sym2 = Symbol.for('foo');
console.log(sym1 === sym2); // Output: true
```
## Symbol.prototype.description - Returns a string representing the description of a symbol.

```js
const sym = Symbol('foo');
console.log(sym.description); // Output: "foo"
```
## Symbol.prototype.toString() - Returns a string representing the Symbol object.

```js
const sym = Symbol('foo');
console.log(sym.toString()); // Output: "Symbol(foo)"
```
## TypedArray.from() - Creates a new typed array from an array-like or iterable object.

```js
const arr = [1, 2, 3];
const typedArr = Uint8Array.from(arr);
console.log(typedArr); // Output: Uint8Array(3) [1, 2, 3]
```
## TypedArray.of() - Creates a new typed array with a variable number of arguments.

```js
const typedArr = Uint8Array.of(1, 2, 3);
console.log(typedArr); // Output: Uint8Array(3) [1, 2, 3]
```
## TypedArray.prototype.copyWithin() - Copies a sequence of array elements within the typed array.

```js
const typedArr = Uint8Array.of(1, 2, 3, 4, 5);
typedArr.copyWithin(2, 0, 2);
console.log(typedArr); // Output: Uint8Array(5) [1, 2, 1, 2, 5]
```
## TypedArray.prototype.entries() - Returns a new iterator object that contains the key/value pairs for each index in the typed
array.

```js
const typedArr = Uint8Array.of(1, 2, 3);
for (const [index, value] of typedArr.entries()) {
  console.log(index, value); // Output: 0 1, 1 2, 2 3
}
```
## TypedArray.prototype.every() - Determines whether all elements in a typed array satisfy a provided function.

```js
const typedArr = Uint8Array.of(1, 2, 3);
console.log(typedArr.every((value) => value > 0)); //


```
## TypedArray.prototype.every() - Determines whether all elements in a typed array satisfy a provided function.

```js
const typedArr = Uint8Array.of(1, 2, 3);
console.log(typedArr.every((value) => value > 0)); // Output: true
```
## TypedArray.prototype.fill() - Fills all the elements of a typed array with a static value.

```js
const typedArr = Uint8Array.of(1, 2, 3);
typedArr.fill(0);
console.log(typedArr); // Output: Uint8Array(3) [0, 0, 0]
```
## TypedArray.prototype.filter() - Creates a new typed array with all elements that pass the test implemented by the provided
function.

```js
const typedArr = Uint8Array.of(1, 2, 3);
const filteredArr = typedArr.filter((value) => value > 1);
console.log(filteredArr); // Output: Uint8Array(2) [2, 3]
```
## TypedArray.prototype.find() - Returns the value of the first element in a typed array that satisfies the provided testing
function.

```js
const typedArr = Uint8Array.of(1, 2, 3);
console.log(typedArr.find((value) => value > 1)); // Output: 2
```
## TypedArray.prototype.findIndex() - Returns the index of the first element in a typed array that satisfies the provided testing
function, or -1 if not found.

```js
const typedArr = Uint8Array.of(1, 2, 3);
console.log(typedArr.findIndex((value) => value > 1)); // Output: 1
```
## TypedArray.prototype.forEach() - Calls a function for each element in a typed array.

```js
const typedArr = Uint8Array.of(1, 2, 3);
typedArr.forEach((value) => console.log(value)); // Output: 1, 2, 3
```
## TypedArray.prototype.includes() - Determines whether a typed array includes a certain value.

```js
const typedArr = Uint8Array.of(1, 2, 3);
console.log(typedArr.includes(2)); // Output: true
```
## TypedArray.prototype.indexOf() - Returns the index of the first occurrence of a value in a typed array, or -1 if not found.

```js
const typedArr = Uint8Array.of(1, 2, 3);
console.log(typedArr.indexOf(2)); // Output: 1
```
## TypedArray.prototype.join() - Converts all elements in a typed array to a string, separated by a specified separator string.

```js
const typedArr = Uint8Array.of(1, 2, 3);
console.log(typedArr.join('-')); // Output: "1-2-3"
```
## TypedArray.prototype.keys() - Returns a new iterator object that contains the keys for each index in the typed array.

```js
const typedArr = Uint8Array.of(1, 2, 3);
for (const index of typedArr.keys()) {
  console.log(index); // Output: 0, 1, 2
}
```
## TypedArray.prototype.lastIndexOf() - Returns the index of the last occurrence of a value in a typed array, or -1 if not found.

```js
const typedArr = Uint8Array.of(1, 2,


```
## TypedArray.prototype.lastIndexOf() - Returns the index of the last occurrence of a value in a typed array, or -1 if not found.

```js
const typedArr = Uint8Array.of(1, 2, 3);
console.log(typedArr.lastIndexOf(2)); // Output: 1
```
## TypedArray.prototype.map() - Creates a new typed array with the results of calling a provided function on every element in the
typed array.

```js
const typedArr = Uint8Array.of(1, 2, 3);
const mappedArr = typedArr.map((value) => value * 2);
console.log(mappedArr); // Output: Uint8Array(3) [2, 4, 6]
```
## TypedArray.prototype.reduce() - Applies a function against an accumulator and each value in the typed array to reduce it to a
single value.

```js
const typedArr = Uint8Array.of(1, 2, 3);
const sum = typedArr.reduce((accumulator, value) => accumulator + value, 0);
console.log(sum); // Output: 6
```
## TypedArray.prototype.reduceRight() - Applies a function against an accumulator and each value in the typed array from right to
left to reduce it to a single value.

```js
const typedArr = Uint8Array.of(1, 2, 3);
const sum = typedArr.reduceRight((accumulator, value) => accumulator + value, 0);
console.log(sum); // Output: 6
```
## TypedArray.prototype.reverse() - Reverses the order of the elements in a typed array.

```js
const typedArr = Uint8Array.of(1, 2, 3);
typedArr.reverse();
console.log(typedArr); // Output: Uint8Array(3) [3, 2, 1]
```
## TypedArray.prototype.set() - Sets a portion of a typed array to another typed array, array-like object, or iterable object.

```js
const typedArr = Uint8Array.of(1, 2, 3);
const otherTypedArr = Uint8Array.of(4, 5, 6);
typedArr.set(otherTypedArr, 1);
console.log(typedArr); // Output: Uint8Array(3) [1, 4, 5]
```
## TypedArray.prototype.slice() - Extracts a section of a typed array and returns a new typed array.

```js
const typedArr = Uint8Array.of(1, 2, 3);
const slicedArr = typedArr.slice(1, 2);
console.log(slicedArr); // Output: Uint8Array(1) [2]
```
## TypedArray.prototype.some() - Determines whether at least one element in a typed array satisfies a provided function.

```js
const typedArr = Uint8Array.of(1, 2, 3);
console.log(typedArr.some((value) => value > 1)); // Output: true
```
## TypedArray.prototype.sort() - Sorts the elements in a typed array in place.

```js
const typedArr = Uint8Array.of(3, 1, 2);
typedArr.sort();
console.log(typedArr); // Output: Uint8Array(3) [1, 2, 3]
```
## TypedArray.prototype.subarray() - Returns a new typed array that consists of a section of another typed array.

```js
const typedArr = Uint8Array.of(


```
## TypedArray.prototype.subarray() - Returns a new typed array that consists of a section of another typed array.

```js
const typedArr = Uint8Array.of(1, 2, 3);
const subArr = typedArr.subarray(1, 2);
console.log(subArr); // Output: Uint8Array(1) [2]
```
## TypedArray.prototype.values() - Returns a new iterator object that contains the values for each index in the typed array.

```js
const typedArr = Uint8Array.of(1, 2, 3);
for (const value of typedArr.values()) {
  console.log(value); // Output: 1, 2, 3
}
```
## Uint16Array() - Creates a new unsigned 16-bit integer array with the specified length or array-like object.

```js
const typedArr = new Uint16Array(3);
console.log(typedArr); // Output: Uint16Array(3) [0, 0, 0]
```
## Uint16Array.BYTES_PER_ELEMENT - Returns the number of bytes per element in a Uint16Array (2).

```js
console.log(Uint16Array.BYTES_PER_ELEMENT); // Output: 2
```
## Uint16Array.from() - Creates a new Uint16Array from an array-like or iterable object.

```js
const arr = [1, 2, 3];
const typedArr = Uint16Array.from(arr);
console.log(typedArr); // Output: Uint16Array(3) [1, 2, 3]
```
## Uint16Array.of() - Creates a new Uint16Array with a variable number of arguments.

```js
const typedArr = Uint16Array.of(1, 2, 3);
console.log(typedArr); // Output: Uint16Array(3) [1, 2, 3]
```
## Uint16Array.prototype.BYTES_PER_ELEMENT - Returns the number of bytes per element in a Uint16Array instance.

```js
const typedArr = new Uint16Array(3);
console.log(typedArr.BYTES_PER_ELEMENT); // Output: 2
```
## Uint16Array.prototype.buffer - Returns the ArrayBuffer that the Uint16Array instance is a view of.

```js
const buffer = new ArrayBuffer(6);
const typedArr = new Uint16Array(buffer);
console.log(typedArr.buffer === buffer); // Output: true
```
## Uint16Array.prototype.copyWithin() - Copies a sequence of array elements within the Uint16Array.

```js
const typedArr = Uint16Array.of(1, 2, 3, 4, 5);
typedArr.copyWithin(2, 0, 2);
console.log(typedArr); // Output: Uint16Array(5) [1, 2, 1, 2, 5]
```
## Uint16Array.prototype.entries() - Returns a new iterator object that contains the key/value pairs for each index in the
Uint16Array.

```js
const typedArr = Uint16Array.of(1, 2, 3);
for (const [index, value] of typedArr.entries()) {
  console.log(index, value); // Output: 0 1, 1 2, 2 3
}
Uint16Array.prototype.every() - Determines whether all elements in a `Uint16Array


```
## Uint16Array.prototype.every() - Determines whether all elements in a Uint16Array satisfy a provided function.

```js
const typedArr = Uint16Array.of(1, 2, 3);
console.log(typedArr.every((value) => value > 0)); // Output: true
```
## Uint16Array.prototype.fill() - Fills all the elements of a Uint16Array with a static value.

```js
const typedArr = Uint16Array.of(1, 2, 3);
typedArr.fill(0);
console.log(typedArr); // Output: Uint16Array(3) [0, 0, 0]
```
## Uint16Array.prototype.filter() - Creates a new Uint16Array with all elements that pass the test implemented by the provided
function.

```js
const typedArr = Uint16Array.of(1, 2, 3);
const filteredArr = typedArr.filter((value) => value > 1);
console.log(filteredArr); // Output: Uint16Array(2) [2, 3]
```
## Uint16Array.prototype.find() - Returns the value of the first element in a Uint16Array that satisfies the provided testing
function.

```js
const typedArr = Uint16Array.of(1, 2, 3);
console.log(typedArr.find((value) => value > 1)); // Output: 2
```
## Uint16Array.prototype.findIndex() - Returns the index of the first element in a Uint16Array that satisfies the provided testing
function, or -1 if not found.

```js
const typedArr = Uint16Array.of(1, 2, 3);
console.log(typedArr.findIndex((value) => value > 1)); // Output: 1
```
## Uint16Array.prototype.forEach() - Calls a function for each element in a Uint16Array.

```js
const typedArr = Uint16Array.of(1, 2, 3);
typedArr.forEach((value) => console.log(value)); // Output: 1, 2, 3
```
## Uint16Array.prototype.includes() - Determines whether a Uint16Array includes a certain value.

```js
const typedArr = Uint16Array.of(1, 2, 3);
console.log(typedArr.includes(2)); // Output: true
```
## Uint16Array.prototype.indexOf() - Returns the index of the first occurrence of a value in a Uint16Array, or -1 if not found.

```js
const typedArr = Uint16Array.of(1, 2, 3);
console.log(typedArr.indexOf(2)); // Output: 1
```
## Uint16Array.prototype.join() - Converts all elements in a Uint16Array to a string, separated by a specified separator string.

```js
const typedArr = Uint16Array.of(1, 2, 3);
console.log(typedArr.join('-')); // Output: "1-2-3"
```
## Uint16Array.prototype.keys() - Returns a new iterator object that contains the keys for each index in the Uint16Array.

```js
const typedArr = Uint16Array.of(1, 2, 3);
for (const index of typedArr.keys()) {
  console.log(index); // Output: 0, 1, 2
}
Uint16Array.prototype.lastIndexOf() - Returns the


```
## Uint16Array.prototype.lastIndexOf() - Returns the index of the last occurrence of a value in a Uint16Array, or -1 if not found.

```js
const typedArr = Uint16Array.of(1, 2, 3, 2);
console.log(typedArr.lastIndexOf(2)); // Output: 3
```
## Uint16Array.prototype.map() - Creates a new Uint16Array with the results of calling a provided function on every element in the
Uint16Array.

```js
const typedArr = Uint16Array.of(1, 2, 3);
const mappedArr = typedArr.map((value) => value * 2);
console.log(mappedArr); // Output: Uint16Array(3) [2, 4, 6]
```
## Uint16Array.prototype.reduce() - Applies a function against an accumulator and each value in the Uint16Array to reduce it to a
single value.

```js
const typedArr = Uint16Array.of(1, 2, 3);
const sum = typedArr.reduce((accumulator, value) => accumulator + value, 0);
console.log(sum); // Output: 6
```
## Uint16Array.prototype.reduceRight() - Applies a function against an accumulator and each value in the Uint16Array from right to
left to reduce it to a single value.

```js
const typedArr = Uint16Array.of(1, 2, 3);
const sum = typedArr.reduceRight((accumulator, value) => accumulator + value, 0);
console.log(sum); // Output: 6
```
## Uint16Array.prototype.reverse() - Reverses the order of the elements in a Uint16Array.

```js
const typedArr = Uint16Array.of(1, 2, 3);
typedArr.reverse();
console.log(typedArr); // Output: Uint16Array(3) [3, 2, 1]
```
##
Uint16Array.prototype.set() - Sets a portion of a Uint16Array to another Uint16Array, array-like object, or iterable object.

```js
const typedArr = Uint16Array.of(1, 2, 3);
const otherTypedArr = Uint16Array.of(4, 5, 6);
typedArr.set(otherTypedArr, 1);
console.log(typedArr); // Output: Uint16Array(3) [1, 4, 5]
```
## Uint16Array.prototype.slice() - Extracts a section of a Uint16Array and returns a new Uint16Array.

```js
const typedArr = Uint16Array.of(1, 2, 3);
const slicedArr = typedArr.slice(1, 2);
console.log(slicedArr); // Output: Uint16Array(1) [2]
```
## Uint16Array.prototype.some() - Determines whether at least one element in a Uint16Array satisfies a provided function.

```js
const typedArr = Uint16Array.of(1, 2, 3);
console.log(typedArr.some((value) => value > 1)); // Output: true
```
## Uint16Array.prototype.sort() - Sorts the elements in a Uint16Array in place.

```js
const typedArr = Uint16Array.of(3, 1, 2);
typedArr.sort();
console.log(typedArr); // Output: Uint16Array(3) [1, 2


```
## Uint16Array.prototype.sort() - Sorts the elements in a Uint16Array in place.

```js
const typedArr = Uint16Array.of(3, 1, 2);
typedArr.sort();
console.log(typedArr); // Output: Uint16Array(3) [1, 2, 3]
```
## Uint16Array.prototype.subarray() - Returns a new Uint16Array that consists of a section of another Uint16Array.

```js
const typedArr = Uint16Array.of(1, 2, 3);
const subArr = typedArr.subarray(1, 2);
console.log(subArr); // Output: Uint16Array(1) [2]
```
## Uint16Array.prototype.values() - Returns a new iterator object that contains the values for each index in the Uint16Array.

```js
const typedArr = Uint16Array.of(1, 2, 3);
for (const value of typedArr.values()) {
  console.log(value); // Output: 1, 2, 3
}
```
## Uint32Array() - Creates a new unsigned 32-bit integer array with the specified length or array-like object.

```js
const typedArr = new Uint32Array(3);
console.log(typedArr); // Output: Uint32Array(3) [0, 0, 0]
```
## Uint32Array.BYTES_PER_ELEMENT - Returns the number of bytes per element in a Uint32Array (4).

```js
console.log(Uint32Array.BYTES_PER_ELEMENT); // Output: 4
```
## Uint32Array.from() - Creates a new Uint32Array from an array-like or iterable object.

```js
const arr = [1, 2, 3];
const typedArr = Uint32Array.from(arr);
console.log(typedArr); // Output: Uint32Array(3) [1, 2, 3]
```
## Uint32Array.of() - Creates a new Uint32Array with a variable number of arguments.

```js
const typedArr = Uint32Array.of(1, 2, 3);
console.log(typedArr); // Output: Uint32Array(3) [1, 2, 3]
```
## Uint32Array.prototype.BYTES_PER_ELEMENT - Returns the number of bytes per element in a Uint32Array instance.

```js
const typedArr = new Uint32Array(3);
console.log(typedArr.BYTES_PER_ELEMENT); // Output: 4
```
## Uint32Array.prototype.buffer - Returns the ArrayBuffer that the Uint32Array instance is a view of.

```js
const buffer = new ArrayBuffer(12);
const typedArr = new Uint32Array(buffer);
console.log(typedArr.buffer === buffer); // Output: true
```
## Uint32Array.prototype.copyWithin() - Copies a sequence of array elements within the Uint32Array.

```js
const typedArr = Uint32Array.of(1, 2, 3, 4, 5);
typedArr.copyWithin(2, 0, 2);
console.log(typedArr); // Output: Uint32Array(5) [1, 2, 1, 2, 5]
Uint32Array.prototype.entries() - Returns a new iterator object that contains the key/value pairs for each index in the `Uint32Array


```
## Uint32Array.prototype.entries() - Returns a new iterator object that contains the key/value pairs for each index in the
Uint32Array.

```js
const typedArr = Uint32Array.of(1, 2, 3);
for (const entry of typedArr.entries()) {
  console.log(entry); // Output: [0, 1], [1, 2], [2, 3]
}
```
## Uint32Array.prototype.every() - Determines whether all elements in a Uint32Array satisfy a provided function.

```js
const typedArr = Uint32Array.of(1, 2, 3);
console.log(typedArr.every((value) => value > 0)); // Output: true
```
## Uint32Array.prototype.fill() - Fills all the elements of a Uint32Array with a static value.

```js
const typedArr = Uint32Array.of(1, 2, 3);
typedArr.fill(0);
console.log(typedArr); // Output: Uint32Array(3) [0, 0, 0]
```
## Uint32Array.prototype.filter() - Creates a new Uint32Array with all elements that pass the test implemented by the provided
function.

```js
const typedArr = Uint32Array.of(1, 2, 3);
const filteredArr = typedArr.filter((value) => value > 1);
console.log(filteredArr); // Output: Uint32Array(2) [2, 3]
```
##
Uint32Array.prototype.find() - Returns the value of the first element in a Uint32Array that satisfies the provided testing
function.

```js
const typedArr = Uint32Array.of(1, 2, 3);
console.log(typedArr.find((value) => value > 1)); // Output: 2
```
## Uint32Array.prototype.findIndex() - Returns the index of the first element in a Uint32Array that satisfies the provided testing
function, or -1 if not found.

```js
const typedArr = Uint32Array.of(1, 2, 3);
console.log(typedArr.findIndex((value) => value > 1)); // Output: 1
```
## Uint32Array.prototype.forEach() - Calls a function for each element in a Uint32Array.

```js
const typedArr = Uint32Array.of(1, 2, 3);
typedArr.forEach((value) => console.log(value)); // Output: 1, 2, 3
```
## Uint32Array.prototype.includes() - Determines whether a Uint32Array includes a certain value.

```js
const typedArr = Uint32Array.of(1, 2, 3);
console.log(typedArr.includes(2)); // Output: true
```
## Uint32Array.prototype.indexOf() - Returns the index of the first occurrence of a value in a Uint32Array, or -1 if not found.

```js
const typedArr = Uint32Array.of(1, 2, 3);
console.log(typedArr.indexOf(2)); // Output: 1
```
## Uint32Array.prototype.join() - Converts all elements in a Uint32Array to a string, separated by a specified separator string.

```js
const typedArr = Uint32Array.of(1, 2, 3);
console.log(typedArr.join('-')); // Output: "1-2-3"
```
## Uint32Array.prototype.keys() - Returns a new iterator object that contains the keys for each index in the Uint32Array.

```js
const typedArr = Uint32Array.of(1, 2, 3);
for (const key of typedArr.keys()) {
  console.log(key); // Output: 0, 1, 2
}
```
## Uint32Array.prototype.lastIndexOf() - Returns the index of the last occurrence of a value in a Uint32Array, or -1 if not found.

```js
const typedArr = Uint32Array.of(1, 2, 3, 2);
console.log(typedArr.lastIndexOf(2)); // Output: 3
```
## Uint32Array.prototype.map() - Creates a new Uint32Array with the results of calling a provided function on every element in the
Uint32Array.

```js
const typedArr = Uint32Array.of(1, 2, 3);
const mappedArr = typedArr.map((value) => value * 2);
console.log(mappedArr); // Output: Uint32Array(3) [2, 4, 6]
```
## Uint32Array.prototype.reduce() - Applies a function against an accumulator and each value in the Uint32Array to reduce it to a
single value.

```js
const typedArr = Uint32Array.of(1, 2, 3);
const sum = typedArr.reduce((accumulator, value) => accumulator + value, 0);
console.log(sum); // Output: 6
```
## Uint32Array.prototype.reduceRight() - Applies a function against an accumulator and each value in the Uint32Array from right to
left to reduce it to a single value.

```js
const typedArr = Uint32Array.of(1, 2, 3);
const sum = typedArr.reduceRight((accumulator, value) => accumulator + value, 0);
console.log(sum); // Output: 6
```
## Uint32Array.prototype.reverse() - Reverses the order of the elements in a Uint32Array.

```js
const typedArr = Uint32Array.of(1, 2, 3);
typedArr.reverse();
console.log(typedArr); // Output: Uint32Array(3) [3, 2, 1]
```
## Uint32Array.prototype.set() - Sets a portion of a Uint32Array to another Uint32Array, array-like object, or iterable object.

```js
const typedArr = Uint32Array.of(1, 2, 3);
const otherTypedArr = Uint32Array.of(4, 5, 6);
typedArr.set(otherTypedArr, 1);
console.log(typedArr); // Output: Uint32Array(3) [1, 4, 5]
```
## Uint32Array.prototype.slice() - Extracts a section of a Uint32Array and returns a new Uint32Array.

```js
const typedArr = Uint32Array.of(1, 2, 3);
const slicedArr = typedArr.slice(1, 2);
console.log(slicedArr); // Output: Uint32Array(1) [2]
```
## Uint32Array.prototype.some() - Determines whether at least one element in a Uint32Array satisfies a provided function.

```js
const typedArr = Uint32Array.of(1, 2, 3);
console.log(typedArr.some((value) => value


```
## Uint32Array.prototype.some() - Determines whether at least one element in a Uint32Array satisfies a provided function.

```js
const typedArr = Uint32Array.of(1, 2, 3);
console.log(typedArr.some((value) => value > 2)); // Output: true
```
## Uint32Array.prototype.sort() - Sorts the elements in a Uint32Array in place.

```js
const typedArr = Uint32Array.of(3, 1, 2);
typedArr.sort();
console.log(typedArr); // Output: Uint32Array(3) [1, 2, 3]
```
## Uint32Array.prototype.subarray() - Returns a new Uint32Array that consists of a section of another Uint32Array.

```js
const typedArr = Uint32Array.of(1, 2, 3);
const subArr = typedArr.subarray(1, 2);
console.log(subArr); // Output: Uint32Array(1) [2]
```
## Uint32Array.prototype.values() - Returns a new iterator object that contains the values for each index in the Uint32Array.

```js
const typedArr = Uint32Array.of(1, 2, 3);
for (const value of typedArr.values()) {
  console.log(value); // Output: 1, 2, 3
}
```
## Uint8Array() - Creates a new unsigned 8-bit integer array with the specified length or array-like object.

```js
const typedArr = new Uint8Array(3);
console.log(typedArr); // Output: Uint8Array(3) [0, 0, 0]
```
## Uint8Array.BYTES_PER_ELEMENT - Returns the number of bytes per element in a Uint8Array (1).

```js
console.log(Uint8Array.BYTES_PER_ELEMENT); // Output: 1
```
## Uint8Array.from() - Creates a new Uint8Array from an array-like or iterable object.

```js
const arr = [1, 2, 3];
const typedArr = Uint8Array.from(arr);
console.log(typedArr); // Output: Uint8Array(3) [1, 2, 3]
```
## Uint8Array.of() - Creates a new Uint8Array with a variable number of arguments.

```js
const typedArr = Uint8Array.of(1, 2, 3);
console.log(typedArr); // Output: Uint8Array(3) [1, 2, 3]
```
## Uint8Array.prototype.BYTES_PER_ELEMENT - Returns the number of bytes per element in a Uint8Array instance.

```js
const typedArr = new Uint8Array(3);
console.log(typedArr.BYTES_PER_ELEMENT); // Output: 1
```
## Uint8Array.prototype.buffer - Returns the ArrayBuffer that the Uint8Array instance is a view of.

```js
const buffer = new ArrayBuffer(12);
const typedArr = new Uint8Array(buffer);
console.log(typedArr.buffer === buffer); // Output: true
```
## Uint8Array.prototype.copyWithin() - Copies a sequence of array elements within the Uint8Array.

```js
const typedArr = Uint8Array.of(1, 2, 3, 4, 5);
typedArr.copyWithin(


```
## Uint8Array.prototype.copyWithin() - Copies a sequence of array elements within the Uint8Array.

```js
const typedArr = Uint8Array.of(1, 2, 3, 4, 5);
typedArr.copyWithin(0, 3, 4);
console.log(typedArr); // Output: Uint8Array(5) [4, 2, 3, 4, 5]
```
## Uint8Array.prototype.entries() - Returns a new iterator object that contains the key/value pairs for each index in the
Uint8Array.

```js
const typedArr = Uint8Array.of(1, 2, 3);
for (const entry of typedArr.entries()) {
  console.log(entry); // Output: [0, 1], [1, 2], [2, 3]
}
```
## Uint8Array.prototype.every() - Determines whether all elements in a Uint8Array satisfy a provided function.

```js
const typedArr = Uint8Array.of(1, 2, 3);
console.log(typedArr.every((value) => value > 0)); // Output: true
```
## Uint8Array.prototype.fill() - Fills all the elements of a Uint8Array with a static value.

```js
const typedArr = Uint8Array.of(1, 2, 3);
typedArr.fill(0);
console.log(typedArr); // Output: Uint8Array(3) [0, 0, 0]
```
## Uint8Array.prototype.filter() - Creates a new Uint8Array with all elements that pass the test implemented by the provided
function.

```js
const typedArr = Uint8Array.of(1, 2, 3);
const filteredArr = typedArr.filter((value) => value > 1);
console.log(filteredArr); // Output: Uint8Array(2) [2, 3]
```
## Uint8Array.prototype.find() - Returns the value of the first element in a Uint8Array that satisfies the provided testing
function.

```js
const typedArr = Uint8Array.of(1, 2, 3);
console.log(typedArr.find((value) => value > 1)); // Output: 2
```
## Uint8Array.prototype.findIndex() - Returns the index of the first element in a Uint8Array that satisfies the provided testing
function, or -1 if not found.

```js
const typedArr = Uint8Array.of(1, 2, 3);
console.log(typedArr.findIndex((value) => value > 1)); // Output: 1
```
## Uint8Array.prototype.forEach() - Calls a function for each element in a Uint8Array.

```js
const typedArr = Uint8Array.of(1, 2, 3);
typedArr.forEach((value) => console.log(value)); // Output: 1, 2, 3
```
## Uint8Array.prototype.includes() - Determines whether a Uint8Array includes a certain value.

```js
const typedArr = Uint8Array.of(1, 2, 3);
console.log(typedArr.includes(2)); // Output: true
```
## Uint8Array.prototype.indexOf() - Returns the index of the first occurrence of a value in a Uint8Array, or -1 if not found.

```js
const typedArr = Uint8Array.of(1,


```
## Uint8Array.prototype.indexOf() - Returns the index of the first occurrence of a value in a Uint8Array, or -1 if not found.

```js
const typedArr = Uint8Array.of(1, 2, 3, 2);
console.log(typedArr.indexOf(2)); // Output: 1
```
## Uint8Array.prototype.join() - Joins all elements in a Uint8Array into a string.

```js
const typedArr = Uint8Array.of(1, 2, 3);
console.log(typedArr.join()); // Output: "1,2,3"
```
## Uint8Array.prototype.keys() - Returns a new iterator object that contains the keys for each index in the Uint8Array.

```js
const typedArr = Uint8Array.of(1, 2, 3);
for (const key of typedArr.keys()) {
  console.log(key); // Output: 0, 1, 2
}
```
## Uint8Array.prototype.lastIndexOf() - Returns the index of the last occurrence of a value in a Uint8Array, or -1 if not found.

```js
const typedArr = Uint8Array.of(1, 2, 3, 2);
console.log(typedArr.lastIndexOf(2)); // Output: 3
```
## Uint8Array.prototype.map() - Creates a new Uint8Array with the results of calling a provided function on every element in the
Uint8Array.

```js
const typedArr = Uint8Array.of(1, 2, 3);
const mappedArr = typedArr.map((value) => value * 2);
console.log(mappedArr); // Output: Uint8Array(3) [2, 4, 6]
```
## Uint8Array.prototype.reduce() - Applies a function against an accumulator and each value in the Uint8Array to reduce it to a
single value.

```js
const typedArr = Uint8Array.of(1, 2, 3);
const sum = typedArr.reduce((accumulator, value) => accumulator + value, 0);
console.log(sum); // Output: 6
```
## Uint8Array.prototype.reduceRight() - Applies a function against an accumulator and each value in the Uint8Array from right to
left to reduce it to a single value.

```js
const typedArr = Uint8Array.of(1, 2, 3);
const sum = typedArr.reduceRight((accumulator, value) => accumulator + value, 0);
console.log(sum); // Output: 6
```
## Uint8Array.prototype.reverse() - Reverses the order of the elements in a Uint8Array.

```js
const typedArr = Uint8Array.of(1, 2, 3);
typedArr.reverse();
console.log(typedArr); // Output: Uint8Array(3) [3, 2, 1]
```
## Uint8Array.prototype.set() - Sets a portion of a Uint8Array to another Uint8Array, array-like object, or iterable object.

```js
const typedArr = Uint8Array.of(1, 2, 3);
const otherTypedArr = Uint8Array.of(4, 5, 6);
typedArr.set(otherTypedArr, 1);
console.log(typedArr); // Output: Uint8Array(3) [1, 4, 5]
```
## Uint8Array.prototype.slice() - Returns a new Uint8Array that consists of a section of another Uint8Array.

```js
const typedArr = Uint8Array.of(1, 2, 3);
const slicedArr = typedArr.slice(1, 2);
console.log(slicedArr); // Output: Uint8Array(1) [2]
```
## Uint8Array.prototype.some() - Determines whether at least one element in a Uint8Array satisfies a provided function.

```js
const typedArr = Uint8Array.of(1, 2, 3);
console.log(typedArr.some((value) => value > 2)); // Output: true
```
## Uint8Array.prototype.sort() - Sorts the elements in a Uint8Array in place.

```js
const typedArr = Uint8Array.of(3, 1, 2);
typedArr.sort();
console.log(typedArr); // Output: Uint8Array(3) [1, 2, 3]
```
## Uint8Array.prototype.subarray() - Returns a new Uint8Array that consists of a section of another Uint8Array.

```js
const typedArr = Uint8Array.of(1, 2, 3);
const subArr = typedArr.subarray(1, 2);
console.log(subArr); // Output: Uint8Array(1) [2]
```
## Uint8Array.prototype.toLocaleString() - Returns a string representing the elements of a Uint8Array. The elements are converted
to strings using the specified locale.

```js
const typedArr = Uint8Array.of(1, 2, 3);
console.log(typedArr.toLocaleString("en-US")); // Output: "1,2,3"
```
## Uint8Array.prototype.toString() - Returns a string representing the elements of a Uint8Array.

```js
const typedArr = Uint8Array.of(1, 2, 3);
console.log(typedArr.toString()); // Output: "1,2,3"
```
## Uint8Array.prototype.values() - Returns a new iterator object that contains the values for each index in the Uint8Array.

```js
const typedArr = Uint8Array.of(1, 2, 3);
for (const value of typedArr.values()) {
  console.log(value); // Output: 1, 2, 3
}
```
## Uint8ClampedArray() - Creates a new unsigned 8-bit integer array with clamped values with the specified length or array-like
object.

```js
const typedArr = new Uint8ClampedArray(3);
console.log(typedArr); // Output: Uint8ClampedArray(3) [0, 0, 0]
```
## Uint8ClampedArray.BYTES_PER_ELEMENT - Returns the number of bytes per element in a Uint8ClampedArray (1).

```js
console.log(Uint8ClampedArray.BYTES_PER_ELEMENT); // Output: 1
```
## Uint8ClampedArray.from() - Creates a new Uint8ClampedArray from an array-like or iterable object.

```js
const arr = [1, 2, 3];
const typedArr = Uint8ClampedArray.from(arr);
console.log(typedArr); // Output: Uint8ClampedArray(3) [1, 2, 3]
```
## Uint8ClampedArray.of() - Creates a new Uint8ClampedArray with a variable number of arguments.

```js
const typedArr = Uint8ClampedArray.of(1, 2, 3);
console.log(typedArr); // Output: Uint8ClampedArray(3) [1, 2, 3]
```
## Uint8ClampedArray.prototype.BYTES_PER_ELEMENT - Returns the number of bytes per element in a Uint8ClampedArray instance (1).

```js
const typedArr = new Uint8ClampedArray(3);
console.log(typedArr.BYTES_PER_ELEMENT); // Output: 1
```
## Uint8ClampedArray.prototype.buffer - Returns the ArrayBuffer that the Uint8ClampedArray instance is a view of.

```js
const buffer = new ArrayBuffer(8);
const typedArr = new Uint8ClampedArray(buffer);
console.log(typedArr.buffer); // Output: ArrayBuffer(8) {}
```
## Uint8ClampedArray.prototype.byteLength - Returns the length of a Uint8ClampedArray in bytes.

```js
const typedArr = new Uint8ClampedArray(3);
console.log(typedArr.byteLength); // Output: 3
```
## Uint8ClampedArray.prototype.byteOffset - Returns the offset of a Uint8ClampedArray from the start of its ArrayBuffer.

```js
const buffer = new ArrayBuffer(8);
const typedArr = new Uint8ClampedArray(buffer, 3);
console.log(typedArr.byteOffset); // Output: 3
```
## Uint8ClampedArray.prototype.copyWithin() - Copies a sequence of array elements within the Uint8ClampedArray.

```js
const typedArr = Uint8ClampedArray.of(1, 2, 3, 4, 5);
typedArr.copyWithin(0, 3, 4);
console.log(typedArr); // Output: Uint8ClampedArray(5) [4, 2, 3, 4, 5]
```
## Uint8ClampedArray.prototype.entries() - Returns a new iterator object that contains the key/value pairs for each index in the
Uint8ClampedArray.

```js
const typedArr = Uint8ClampedArray.of(1, 2, 3);
for (const entry of typedArr.entries()) {
  console.log(entry); // Output: [0, 1], [1, 2], [2, 3]
}
```
## Uint8ClampedArray.prototype.every() - Determines whether all elements in a Uint8ClampedArray satisfy a provided function.

```js
const typedArr = Uint8ClampedArray.of(1, 2, 3);
console.log(typedArr.every((value) => value > 0)); // Output: true
```
## Uint8ClampedArray.prototype.fill() - Fills all the elements of a Uint8ClampedArray with a static value.

```js
const typedArr = Uint8ClampedArray.of(1, 2, 3);
typedArr.fill(0);
console.log(typedArr); // Output: Uint8ClampedArray(3) [0, 0, 0]
```
## Uint8ClampedArray.prototype.filter() - Creates a new Uint8ClampedArray with all elements that pass the test implemented by the
provided function.

```js


```
## Uint8ClampedArray.prototype.filter() - Creates a new Uint8ClampedArray with all elements that pass the test implemented by the
provided function.

```js
const typedArr = Uint8ClampedArray.of(1, 2, 3);
const filteredArr = typedArr.filter((value) => value > 1);
console.log(filteredArr); // Output: Uint8ClampedArray(2) [2, 3]
```
## Uint8ClampedArray.prototype.find() - Returns the value of the first element in a Uint8ClampedArray that satisfies a provided
function, or undefined if not found.

```js
const typedArr = Uint8ClampedArray.of(1, 2, 3);
console.log(typedArr.find((value) => value > 1)); // Output: 2
```
## Uint8ClampedArray.prototype.findIndex() - Returns the index of the first element in a Uint8ClampedArray that satisfies a
provided function, or -1 if not found.

```js
const typedArr = Uint8ClampedArray.of(1, 2, 3);
console.log(typedArr.findIndex((value) => value > 1)); // Output: 1
```
## Uint8ClampedArray.prototype.forEach() - Calls a provided function for each element in a Uint8ClampedArray.

```js
const typedArr = Uint8ClampedArray.of(1, 2, 3);
typedArr.forEach((value) => console.log(value)); // Output: 1, 2, 3
```
## Uint8ClampedArray.prototype.includes() - Determines whether a Uint8ClampedArray includes a certain value, returning true or
false as appropriate.

```js
const typedArr = Uint8ClampedArray.of(1, 2, 3);
console.log(typedArr.includes(2)); // Output: true
```
## Uint8ClampedArray.prototype.indexOf() - Returns the index of the first occurrence of a value in a Uint8ClampedArray, or -1 if
not found.

```js
const typedArr = Uint8ClampedArray.of(1, 2, 3, 2);
console.log(typedArr.indexOf(2)); // Output: 1
```
## Uint8ClampedArray.prototype.join() - Joins all elements in a Uint8ClampedArray into a string.

```js
const typedArr = Uint8ClampedArray.of(1, 2, 3);
console.log(typedArr.join()); // Output: "1,2,3"
```
## Uint8ClampedArray.prototype.keys() - Returns a new iterator object that contains the keys for each index in the
Uint8ClampedArray.

```js
const typedArr = Uint8ClampedArray.of(1, 2, 3);
for (const key of typedArr.keys()) {
  console.log(key); // Output: 0, 1, 2
}
```
## Uint8ClampedArray.prototype.lastIndexOf() - Returns the index of the last occurrence of a value in a Uint8ClampedArray, or -1
if not found.

```js
const typedArr = Uint8ClampedArray.of(1, 2, 3, 2);
console.log(typedArr.lastIndexOf(2)); // Output: 3
Uint8ClampedArray.prototype.map() - Creates a


```
## Uint8ClampedArray.prototype.map() - Creates a new Uint8ClampedArray with the results of calling a provided function on every
element in the calling Uint8ClampedArray.

```js
const typedArr = Uint8ClampedArray.of(1, 2, 3);
const mappedArr = typedArr.map((value) => value * 2);
console.log(mappedArr); // Output: Uint8ClampedArray(3) [2, 4, 6]
```
## Uint8ClampedArray.prototype.reduce() - Applies a function against an accumulator and each element in a Uint8ClampedArray to
reduce it to a single value.

```js
const typedArr = Uint8ClampedArray.of(1, 2, 3);
const sum = typedArr.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // Output: 6
```
## Uint8ClampedArray.prototype.reduceRight() - Applies a function against an accumulator and each value of the Uint8ClampedArray
(from right-to-left) to reduce it to a single value.

```js
const typedArr = Uint8ClampedArray.of(1, 2, 3);
const sum = typedArr.reduceRight((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // Output: 6
```
## Uint8ClampedArray.prototype.reverse() - Reverses the order of elements in a Uint8ClampedArray.

```js
const typedArr = Uint8ClampedArray.of(1, 2, 3);
typedArr.reverse();
console.log(typedArr); // Output: Uint8ClampedArray(3) [3, 2, 1]
```
## Uint8ClampedArray.prototype.set() - Sets a sequence of values in a Uint8ClampedArray, overwriting existing values.

```js
const typedArr = Uint8ClampedArray.of(1, 2, 3);
typedArr.set(Uint8ClampedArray.of(4, 5), 1);
console.log(typedArr); // Output: Uint8ClampedArray(3) [1, 4, 5]
```
## Uint8ClampedArray.prototype.slice() - Returns a new Uint8ClampedArray that consists of a section of another Uint8ClampedArray.

```js
const typedArr = Uint8ClampedArray.of(1, 2, 3);
const slicedArr = typedArr.slice(1, 2);
console.log(slicedArr); // Output: Uint8ClampedArray(1) [2]
```
## Uint8ClampedArray.prototype.some() - Determines whether at least one element in a Uint8ClampedArray satisfies a provided
function.

```js
const typedArr = Uint8ClampedArray.of(1, 2, 3);
console.log(typedArr.some((value) => value > 2)); // Output: true
```
## Uint8ClampedArray.prototype.sort() - Sorts the elements in a Uint8ClampedArray in place.

```js
const typedArr = Uint8ClampedArray.of(3, 1, 2);
typedArr.sort();
console.log(typedArr); // Output: Uint8ClampedArray(3) [1, 2, 3]
Uint8ClampedArray.prototype.subarray() - Returns a new Uint8ClampedArray that consists of a section


```
## Uint8ClampedArray.prototype.subarray() - Returns a new Uint8ClampedArray that consists of a section of another
Uint8ClampedArray.

```js
const typedArr = Uint8ClampedArray.of(1, 2, 3);
const subArr = typedArr.subarray(1, 2);
console.log(subArr); // Output: Uint8ClampedArray(1) [2]
```
## Uint8ClampedArray.prototype.toLocaleString() - Returns a string representing the elements of a Uint8ClampedArray. The elements
are converted to strings using their toLocaleString methods and these strings are then concatenated.

```js
const typedArr = Uint8ClampedArray.of(1, 2, 3);
console.log(typedArr.toLocaleString()); // Output: "1,2,3"
```
## Uint8ClampedArray.prototype.toString() - Returns a string representing the elements of a Uint8ClampedArray. The elements are
converted to strings using their toString methods and these strings are then concatenated.

```js
const typedArr = Uint8ClampedArray.of(1, 2, 3);
console.log(typedArr.toString()); // Output: "1,2,3"
```
## Uint8ClampedArray.prototype.values() - Returns a new iterator object that contains the values for each index in the
Uint8ClampedArray.

```js
const typedArr = Uint8ClampedArray.of(1, 2, 3);
for (const value of typedArr.values()) {
  console.log(value); // Output: 1, 2, 3
}
```
## WeakMap.prototype.clear() - Removes all key-value pairs from a WeakMap object.

```js
const wm = new WeakMap();
const key = {};
const value = "value";
wm.set(key, value);
wm.clear();
console.log(wm.has(key)); // Output: false
```
## WeakMap.prototype.delete() - Removes the specified key-value pair from a WeakMap object.

```js
const wm = new WeakMap();
const key = {};
const value = "value";
wm.set(key, value);
wm.delete(key);
console.log(wm.has(key)); // Output: false
```
## WeakMap.prototype.get() - Returns the value associated with a specified key in a WeakMap object, or undefined if not found.

```js
const wm = new WeakMap();
const key = {};
const value = "value";
wm.set(key, value);
console.log(wm.get(key)); // Output: "value"
```
## WeakMap.prototype.has() - Returns a Boolean indicating whether a WeakMap object contains a specified key.

```js
const wm = new WeakMap();
const key = {};
const value = "value";
wm.set(key, value);
console.log(wm.has(key)); // Output: true
```
## WeakMap.prototype.set() - Sets a key-value pair in a WeakMap object.

```js
const wm = new WeakMap();
const key = {};
const value = "value";
wm.set(key, value);
console.log(wm.get(key)); // Output: "value"
```
## WeakSet.prototype.add() - Adds a new object to a WeakSet object.

```js
const ws = new WeakSet();
const obj = {};
ws.add(obj);
console.log(ws.has(obj)); // Output: true
WeakSet.prototype.delete() - Removes an object from a


```
## WeakSet.prototype.delete() - Removes an object from a WeakSet object.

```js
const ws = new WeakSet();
const obj = {};
ws.add(obj);
ws.delete(obj);
console.log(ws.has(obj)); // Output: false
```
## WeakSet.prototype.has() - Returns a Boolean indicating whether a WeakSet object contains a specified object.

```js
const ws = new WeakSet();
const obj = {};
ws.add(obj);
console.log(ws.has(obj)); // Output: true
```
## WebAssembly.compile() - Compiles a WebAssembly.Module from WebAssembly binary code.

```js
const code = new Uint8Array([0,97,115,109,1,0,0,0]);
WebAssembly.compile(code)
  .then((module) => console.log(module));
```
## WebAssembly.compileStreaming() - Compiles a WebAssembly.Module from a stream of WebAssembly binary code.

```js
fetch('module.wasm')
  .then((response) => WebAssembly.compileStreaming(response))
  .then((module) => console.log(module));
```
## WebAssembly.instantiate() - Instantiates a WebAssembly.Module with a given set of imports.

```js
const code = new Uint8Array([0,97,115,109,1,0,0,0]);
const imports = { env: { memory: new WebAssembly.Memory({ initial: 256 }) } };
WebAssembly.compile(code)
  .then((module) => WebAssembly.instantiate(module, imports))
  .then((instance) => console.log(instance));
```
## WebAssembly.instantiateStreaming() - Instantiates a WebAssembly.Module from a stream of WebAssembly binary code with a given
set of imports.

```js
const imports = { env: { memory: new WebAssembly.Memory({ initial: 256 }) } };
fetch('module.wasm')
  .then((response) => WebAssembly.instantiateStreaming(response, imports))
  .then((instance) => console.log(instance));
```
## WebAssembly.Memory - Represents a resizable byte-wise memory buffer.

```js
const memory = new WebAssembly.Memory({ initial: 256 });
const arr = new Uint8Array(memory.buffer, 0, 256);
console.log(arr); // Output: Uint8Array(256) [0, 0, 0, ..., 0, 0, 0]
WebAssembly.Module - Represents a compiled WebAssembly module.

WebAssembly.Table - Represents a resizable table of function references.

WebAssembly.validate() - Validates the syntax of a stream of WebAssembly binary code.
```
##
```js
const code = new Uint8Array([0,97,115,109,1,0,0,0]);
console.log(WebAssembly.validate(code)); // Output: true
XMLHttpRequest.abort() - Aborts an ongoing XMLHttpRequest.

XMLHttpRequest.getAllResponseHeaders() - Returns all the response headers, separated by CRLF pairs, as a string.
```
##
```js
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://example.com');
xhr.send();
xhr.onload = function() {
  console.log(xhr.getAllResponseHeaders()); // Output: "content-type: text/html\r\n"
};
```
## XMLHttpRequest.getResponseHeader() - Returns the value of a specified response header, or null if not found.

```js
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://example.com');
xhr.send();


```
## XMLHttpRequest.getResponseHeader() - Returns the value of a specified response header, or null if not found.

```js
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://example.com');
xhr.send();
xhr.onload = function() {
  console.log(xhr.getResponseHeader('content-type')); // Output: "text/html"
};
```
## XMLHttpRequest.open() - Initializes an XMLHttpRequest.

```js
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://example.com');
```
## XMLHttpRequest.overrideMimeType() - Overrides the MIME type returned by the server.

```js
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://example.com');
xhr.overrideMimeType('text/xml');
```
## XMLHttpRequest.send() - Sends an XMLHttpRequest.

```js
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://example.com');
xhr.send();
```
## XMLHttpRequest.setRequestHeader() - Sets the value of a request header.

```js
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://example.com');
xhr.setRequestHeader('content-type', 'text/xml');
xhr.send();
```
## XMLSerializer.serializeToString() - Converts an XML Document or Element to a string.

```js
const parser = new DOMParser();
const xml = parser.parseFromString('<book><title>The Adventures of Huckleberry Finn</title></book>', 'application/xml');
const serializer = new XMLSerializer();
console.log(serializer.serializeToString(xml)); // Output: "<book><title>The Adventures of Huckleberry Finn</title></book>"
```
## XPathEvaluator.createExpression() - Creates an XPathExpression object from a string representing an XPath expression.

```js
const parser = new DOMParser();
const xml = parser.parseFromString('<book><title>The Adventures of Huckleberry Finn</title></book>', 'application/xml');
const xpath = new XPathEvaluator();
const expression = xpath.createExpression('//title');
const result = expression.evaluate(xml, XPathResult.ORDERED_NODE_ITERATOR_TYPE);
let node = result.iterateNext();
while (node) {
  console.log(node.textContent); // Output: "The Adventures of Huckleberry Finn"
  node = result.iterateNext();
}
```
## XPathEvaluator.createNSResolver() - Creates an XPathNSResolver object that resolves namespace prefixes to namespace URIs.

```js
const parser = new DOMParser();
const xml = parser.parseFromString('<book xmlns:foo="http://example.com"><foo:title>The Adventures of Huckleberry Finn</foo:title></book>', 'application/xml');
const xpath = new XPathEvaluator();
const resolver = xpath.createNSResolver(xml.documentElement);
const expression = xpath.createExpression('//foo:title');
const result = expression.evaluate(xml, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
let node = result.iterateNext();
while (node) {
  console.log(node.textContent); // Output: "The Adventures of Huckleberry Finn"
  node = result.iterateNext();
}
```
## XPathEvaluator.evaluate() - Evaluates an XPath expression on a given Node and returns a result of a specified type.

```js
const parser = new DOMParser();
const xml = parser.parseFromString('<book><title>The Adventures of Huckleberry Finn</title></book>', 'application/xml');
const xpath = new XPathEvaluator();
const result = xpath.evaluate('//title', xml, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
let node = result.iterateNext();
while (node) {
  console.log(node.textContent); // Output: "


```
## XPathEvaluator.evaluate() - Evaluates an XPath expression on a given Node and returns a result of a specified type.

```js
const parser = new DOMParser();
const xml = parser.parseFromString('<book><title>The Adventures of Huckleberry Finn</title></book>', 'application/xml');
const xpath = new XPathEvaluator();
const result = xpath.evaluate('//title', xml, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
let node = result.iterateNext();
while (node) {
  console.log(node.textContent); // Output: "The Adventures of Huckleberry Finn"
  node = result.iterateNext();
}
```
## XPathExpression.evaluate() - Evaluates an XPath expression on a given Node and returns a result of a specified type.

```js
const parser = new DOMParser();
const xml = parser.parseFromString('<book><title>The Adventures of Huckleberry Finn</title></book>', 'application/xml');
const xpath = new XPathEvaluator();
const expression = xpath.createExpression('//title');
const result = expression.evaluate(xml, XPathResult.ORDERED_NODE_ITERATOR_TYPE);
let node = result.iterateNext();
while (node) {
  console.log(node.textContent); // Output: "The Adventures of Huckleberry Finn"
  node = result.iterateNext();
}
```
## XPathNSResolver.lookupNamespaceURI() - Returns the namespace URI associated with a given namespace prefix.

```js
const parser = new DOMParser();
const xml = parser.parseFromString('<book xmlns:foo="http://example.com"><foo:title>The Adventures of Huckleberry Finn</foo:title></book>', 'application/xml');
const xpath = new XPathEvaluator();
const resolver = xpath.createNSResolver(xml.documentElement);
console.log(resolver.lookupNamespaceURI('foo')); // Output: "http://example.com"
XPathResult - Represents the result of an XPath evaluation.

yield - Used to pause and resume a generator function.
```
##
```js
function* myGenerator() {
  yield 'one';
  yield 'two';
  yield 'three';
}

const generator = myGenerator();
console.log(generator.next()); // Output: { value: "one", done: false }
console.log(generator.next()); // Output: { value: "two", done: false }
console.log(generator.next()); // Output: { value: "three", done: false }
console.log(generator.next()); // Output: { value: undefined, done: true }
```
## yield* - Delegates to another generator function or iterable object.

```js
function* myGenerator() {
  yield 'one';
  yield* ['two', 'three'];
}

const generator = myGenerator();
console.log(generator.next()); // Output: { value: "one", done: false }
console.log(generator.next()); // Output: { value: "two", done: false }
console.log(generator.next()); // Output: { value: "three", done: false }
console.log(generator.next()); // Output: { value: undefined, done: true }
```
