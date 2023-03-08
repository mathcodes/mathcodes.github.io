Here is a list of JavaScript methods in alphabetical order with example code:


Array.prototype.concat() - Concatenates two or more arrays.

```js
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = array1.concat(array2);
console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]
```
Array.prototype.every() - Tests whether all elements in the array pass the test implemented by the provided function.

```js
const array1 = [1, 2, 3, 4, 5];
const result = array1.every(element => element > 0);
console.log(result); // Output: true
```
Array.prototype.filter() - Creates a new array with all elements that pass the test implemented by the provided function.

```js
const array1 = [1, 2, 3, 4, 5];
const newArray = array1.filter(element => element > 2);
console.log(newArray); // Output: [3, 4, 5]
```
Array.prototype.forEach() - Executes a provided function once for each array element.

```js
const array1 = [1, 2, 3];
array1.forEach(element => console.log(element));
// Output: 1
//         2
//         3
```
Array.prototype.includes() - Determines whether an array includes a certain element, returning true or false as appropriate.

```js
const array1 = [1, 2, 3];
const result = array1.includes(2);
console.log(result); // Output: true
```
Array.prototype.indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present.

```js
const array1 = [1, 2, 3];
const index = array1.indexOf(2);
console.log(index); // Output: 1
```
Array.prototype.join() - Joins all elements of an array into a string.

```js
const array1 = ['Hello', 'World'];
const string = array1.join(' ');
console.log(string); // Output: 'Hello World'
```
Array.prototype.lastIndexOf() - Returns the last index at which a given element can be found in the array, or -1 if it is not present.

```js
const array1 = [1, 2, 3];
const index = array1.lastIndexOf(2);
console.log(index); // Output: 1
```
Array.prototype.map() - Creates a new array with the results of calling a provided function on every element in the calling array.

```js
const array1 = [1, 2, 3];
const newArray = array1.map(element => element * 2);
console.log(newArray); // Output: [2, 4, 6]
```
Array.prototype.pop() - Removes the last element from an array and returns that element.

```js
const array1 = [1, 2, 3];
const lastElement = array1.pop();
console.log(lastElement); // Output: 3
```
Array.prototype.push() - Adds one or more elements to the end of an array and returns the new length of the array.

```js
const array1 = [1, 2, 3];
const newLength = array1.push(4, 5);
console.log(array1); // Output: [1, 2, 3,



Jon Christie
continue until you've covered all js methods
Sure! Here are more JavaScript methods in alphabetical order with example code:

```
Array.prototype.reduce() - Executes a provided function for each value of the array and returns a single value.

```js
const array1 = [1, 2, 3];
const sum = array1.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // Output: 6
```
Array.prototype.reduceRight() - Executes a provided function for each value of the array (from right-to-left) and returns a single value.

```js
const array1 = [1, 2, 3];
const sum = array1.reduceRight((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // Output: 6
```
Array.prototype.reverse() - Reverses the order of the elements in an array.

```js
const array1 = [1, 2, 3];
array1.reverse();
console.log(array1); // Output: [3, 2, 1]
```
Array.prototype.shift() - Removes the first element from an array and returns that element.

```js
const array1 = [1, 2, 3];
const firstElement = array1.shift();
console.log(firstElement); // Output: 1
```
Array.prototype.slice() - Returns a shallow copy of a portion of an array.

```js
const array1 = [1, 2, 3, 4, 5];
const newArray = array1.slice(1, 3);
console.log(newArray); // Output: [2, 3]
```
Array.prototype.some() - Tests whether at least one element in the array passes the test implemented by the provided function.

```js
const array1 = [1, 2, 3, 4, 5];
const result = array1.some(element => element > 3);
console.log(result); // Output: true
```
Array.prototype.sort() - Sorts the elements of an array in place and returns the sorted array.

```js
const array1 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
array1.sort();
console.log(array1); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
```
Array.prototype.splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements.

```js
const array1 = [1, 2, 3, 4, 5];
const removedElements = array1.splice(1, 2, 6, 7);
console.log(array1); // Output: [1, 6, 7, 4, 5]
console.log(removedElements); // Output: [2, 3]
```
Array.prototype.toLocaleString() - Returns a string representing the elements of an array in a localized format.

```js
const array1 = [1, 2, 3];
const string = array1.toLocaleString();
console.log(string); // Output: '1,2,3'
```
Array.prototype.toString() - Returns a string representing the specified array and its elements.

```js
const array1 = [1, 2, 3];
const string = array1.toString();
console.log(string); // Output: '1,2,3'
Array.prototype.unshift() - Adds one or more elements to



Jon Christie
continue until you've covered all js methods
Sure, here are more JavaScript methods in alphabetical order with example code:

```
Array.prototype.values() - Returns a new array iterator object that contains the values for each index in the array.

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



Jon Christie
continue until you've covered all js methods, finish 22
Oops, it seems like there was a mistake in my last message. Here are the next few JavaScript methods in alphabetical order with example code:


Array.prototype.values() - Returns a new array iterator object that contains the values for each index in the array.

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
Array.from() - Creates a new array instance from an array-like or iterable object.

```js
const string = 'hello';
const array1 = Array.from(string);
console.log(array1); // Output: ['h', 'e', 'l', 'l', 'o']
```
Array.isArray() - Determines whether the passed value is an Array.

```js
const array1 = [1, 2, 3];
const result = Array.isArray(array1);
console.log(result); // Output: true
```
Array.of() - Creates a new array instance with a variable number of arguments, regardless of number or type of the arguments.

```js
const array1 = Array.of(1, 'two', true);
console.log(array1); // Output: [1, 'two', true]
```
Boolean() - Returns the Boolean value of a specified expression.

```js
const result = Boolean(0);
console.log(result); // Output: false
```
Date.prototype.getDate() - Returns the day of the month for a specified date according to local time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const day = date1.getDate();
console.log(day); // Output: 8
```
Date.prototype.getDay() - Returns the day of the week for a specified date according to local time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const dayOfWeek = date1.getDay();
console.log(dayOfWeek); // Output: 3 (Wednesday)
```
Date.prototype.getFullYear() - Returns the year for a specified date according to local time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const year = date1.getFullYear();
console.log(year); // Output: 2023
```
Date.prototype.getHours() - Returns the hour for a specified date according to local time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const hour = date1.getHours();
console.log(hour); // Output: 12
```
Date.prototype.getMilliseconds() - Returns the milliseconds for a specified date according to local time.

```js
const date1 = new Date('March 8, 2023 12:00:00.123');
const milliseconds = date1.getMilliseconds();
console.log(milliseconds); // Output: 123
```
Date.prototype.getMinutes() - Returns the minutes for a specified date according to local time.

```js
const date1 = new Date('March 8, 2023 12:15:00');
const minutes = date1.getMinutes();
console.log(minutes); // Output: 15
```
Date.prototype.getMonth() - Returns the month for a specified date according to local time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const month = date1.getMonth();
console.log(month



Jon Christie
continue until you've covered all js methods
Sure, here are more JavaScript methods in alphabetical order with example code:

```
Date.prototype.getSeconds() - Returns the seconds for a specified date according to local time.

```js
const date1 = new Date('March 8, 2023 12:00:30');
const seconds = date1.getSeconds();
console.log(seconds); // Output: 30
```
Date.prototype.getTime() - Returns the numeric value corresponding to the time for a specified date according to universal time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const time = date1.getTime();
console.log(time); // Output: 1675605600000
```
Date.prototype.getTimezoneOffset() - Returns the time-zone offset in minutes for the current locale.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const offset = date1.getTimezoneOffset();
console.log(offset); // Output: -300 (5 hours behind UTC)
```
Date.prototype.getUTCDate() - Returns the day (date) of the month in the specified date according to universal time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const day = date1.getUTCDate();
console.log(day); // Output: 8
```
Date.prototype.getUTCDay() - Returns the day of the week in the specified date according to universal time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const dayOfWeek = date1.getUTCDay();
console.log(dayOfWeek); // Output: 3 (Wednesday)
```
Date.prototype.getUTCFullYear() - Returns the year in the specified date according to universal time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const year = date1.getUTCFullYear();
console.log(year); // Output: 2023
```
Date.prototype.getUTCHours() - Returns the hour in the specified date according to universal time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const hour = date1.getUTCHours();
console.log(hour); // Output: 17 (12pm UTC is 5 hours ahead of EST)
```
Date.prototype.getUTCMilliseconds() - Returns the milliseconds in the specified date according to universal time.

```js
const date1 = new Date('March 8, 2023 12:00:00.123');
const milliseconds = date1.getUTCMilliseconds();
console.log(milliseconds); // Output: 123
```
Date.prototype.getUTCMinutes() - Returns the minutes in the specified date according to universal time.

```js
const date1 = new Date('March 8, 2023 12:15:00');
const minutes = date1.getUTCMinutes();
console.log(minutes); // Output: 15
```
Date.prototype.getUTCMonth() - Returns the month in the specified date according to universal time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const month = date1.getUTCMonth();
console.log(month); // Output: 2 (March is the 3rd month, but 0-based indexing)
```
Date.prototype.getUTCSeconds() - Returns the seconds in the specified date according to universal time.

```js
const date1



Jon Christie
continue until you've covered all js methods starting with the beginning of the one where you left off
Sure, here are the next few JavaScript methods in alphabetical order with example code:

```
Date.prototype.setDate() - Sets the day of the month for a specified date according to local time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
date1.setDate(10);
console.log(date1); // Output: 'Sat Mar 10 2023 12:00:00 GMT-0500 (Eastern Standard Time)'
```
Date.prototype.setFullYear() - Sets the year for a specified date according to local time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
date1.setFullYear(2024);
console.log(date1); // Output: 'Tue Mar 08 2024 12:00:00 GMT-0500 (Eastern Standard Time)'
```
Date.prototype.setHours() - Sets the hour for a specified date according to local time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
date1.setHours(13);
console.log(date1); // Output: 'Wed Mar 08 2023 13:00:00 GMT-0500 (Eastern Standard Time)'
```
Date.prototype.setMilliseconds() - Sets the milliseconds for a specified date according to local time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
date1.setMilliseconds(500);
console.log(date1); // Output: 'Wed Mar 08 2023 12:00:00.500 GMT-0500 (Eastern Standard Time)'
```
Date.prototype.setMinutes() - Sets the minutes for a specified date according to local time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
date1.setMinutes(30);
console.log(date1); // Output: 'Wed Mar 08 2023 12:30:00 GMT-0500 (Eastern Standard Time)'
```
Date.prototype.setMonth() - Sets the month for a specified date according to local time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
date1.setMonth(4);
console.log(date1); // Output: 'Fri May 08 2023 12:00:00 GMT-0400 (Eastern Daylight Time)'
```
Date.prototype.setSeconds() - Sets the seconds for a specified date according to local time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
date1.setSeconds(45);
console.log(date1); // Output: 'Wed Mar 08 2023 12:00:45 GMT-0500 (Eastern Standard Time)'
```
Date.prototype.setTime() - Sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC.

```js
const date1 = new Date('March 8, 2023 12:00:00');
date1.setTime(1675606000000);
console.log(date1); // Output: 'Wed Mar 08 2023 12:20:00 GMT-0500 (Eastern Standard Time)'
```
Date.prototype.setUTCDate() - Sets the day of the month for a specified date according to universal time.

```js
const date1 = new Date('March 8, 2023 12:00



Jon Christie
continue until you've covered all js methods
Sure, here are more JavaScript methods in alphabetical order with example code:

```
Date.prototype.setUTCFullYear() - Sets the year for a specified date according to universal time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
date1.setUTCFullYear(2024);
console.log(date1); // Output: 'Fri Mar 08 2024 12:00:00 GMT-0500 (Eastern Standard Time)'
```
Date.prototype.setUTCHours() - Sets the hour for a specified date according to universal time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
date1.setUTCHours(18);
console.log(date1); // Output: 'Wed Mar 08 2023 13:00:00 GMT-0500 (Eastern Standard Time)'
```
Date.prototype.setUTCMilliseconds() - Sets the milliseconds for a specified date according to universal time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
date1.setUTCMilliseconds(500);
console.log(date1); // Output: 'Wed Mar 08 2023 12:00:00.500 GMT-0500 (Eastern Standard Time)'
```
Date.prototype.setUTCMinutes() - Sets the minutes for a specified date according to universal time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
date1.setUTCMinutes(30);
console.log(date1); // Output: 'Wed Mar 08 2023 12:30:00 GMT-0500 (Eastern Standard Time)'
```
Date.prototype.setUTCMonth() - Sets the month for a specified date according to universal time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
date1.setUTCMonth(4);
console.log(date1); // Output: 'Tue May 08 2023 08:00:00 GMT-0400 (Eastern Daylight Time)'
```
Date.prototype.setUTCSeconds() - Sets the seconds for a specified date according to universal time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
date1.setUTCSeconds(45);
console.log(date1); // Output: 'Wed Mar 08 2023 12:00:45 GMT-0500 (Eastern Standard Time)'
```
Date.prototype.toDateString() - Returns the date portion of a Date object as a readable string.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const dateString = date1.toDateString();
console.log(dateString); // Output: 'Wed Mar 08 2023'
```
Date.prototype.toISOString() - Returns a string representing the Date object in ISO format (YYYY-MM-DDTHH:mm:ss.sssZ).

```js
const date1 = new Date('March 8, 2023 12:00:00');
const isoString = date1.toISOString();
console.log(isoString); // Output: '2023-03-08T17:00:00.000Z'
```
Date.prototype.toJSON() - Returns a string representing the Date object in JSON format.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const jsonString = JSON.stringify(date1);
console.log(jsonString);



Jon Christie
continue until you've covered all js methods
Sure, here are more JavaScript methods in alphabetical order with example code:

```
Date.prototype.toLocaleDateString() - Returns a string representing the date portion of a Date object in a locale-specific format.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const dateString = date1.toLocaleDateString('en-US', options);
console.log(dateString); // Output: 'Wednesday, March 8, 2023'
```
Date.prototype.toLocaleString() - Returns a string representing the Date object in a locale-specific format.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
const dateString = date1.toLocaleString('en-US', options);
console.log(dateString); // Output: 'Wednesday, March 8, 2023, 12:00 PM'
```
Date.prototype.toLocaleTimeString() - Returns a string representing the time portion of a Date object in a locale-specific format.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
const timeString = date1.toLocaleTimeString('en-US', options);
console.log(timeString); // Output: '12:00:00 PM'
```
Date.prototype.toString() - Returns a string representing the Date object.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const string = date1.toString();
console.log(string); // Output: 'Wed Mar 08 2023 12:00:00 GMT-0500 (Eastern Standard Time)'
```
Date.prototype.toTimeString() - Returns a string representing the time portion of a Date object.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const timeString = date1.toTimeString();
console.log(timeString); // Output: '12:00:00 GMT-0500 (Eastern Standard Time)'
```
Date.prototype.toUTCString() - Converts a Date object to a string, according to universal time.

```js
const date1 = new Date('March 8, 2023 12:00:00');
const utcString = date1.toUTCString();
console.log(utcString); // Output: 'Wed, 08 Mar 2023 17:00:00 GMT'
```
Date.now() - Returns the numeric value corresponding to the current time - the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC.

```js
const now = Date.now();
console.log(now); // Output: 1646761609555
```
decodeURI() - Decodes a Uniform Resource Identifier (URI) previously created by encodeURI() or by a similar routine.

```js
const uri = 'https://en.wikipedia.org/wiki/Uniform_Resource_Identifier#URI_syntax';
const decoded = decodeURI(uri);
console.log(decoded); // Output: 'https://en.wikipedia.org/wiki/Uniform_Resource_Identifier#URI_syntax'
```
decodeURIComponent() - Decodes a URI component previously created by encodeURIComponent() or by a similar routine.

```js
const uriComponent = 'The



Jon Christie
continue until you've covered all js methods
Sure, here are more JavaScript methods in alphabetical order with example code:

```
encodeURI() - Encodes a Uniform Resource Identifier (URI) by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character.

```js
const uri = 'https://en.wikipedia.org/wiki/Uniform_Resource_Identifier#URI_syntax';
const encoded = encodeURI(uri);
console.log(encoded); // Output: 'https://en.wikipedia.org/wiki/Uniform_Resource_Identifier#URI_syntax'
```
encodeURIComponent() - Encodes a URI component by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character.

```js
const uriComponent = 'The Quick Brown Fox';
const encoded = encodeURIComponent(uriComponent);
console.log(encoded); // Output: 'The%20Quick%20Brown%20Fox'
```
Error() - Creates an error object that contains an error message.

```js
const message = 'Something went wrong.';
const error = new Error(message);
console.log(error.message); // Output: 'Something went wrong.'
```
eval() - Evaluates JavaScript code represented as a string.

```js
const code = '2 + 2';
const result = eval(code);
console.log(result); // Output: 4
```
Event() - Creates a new Event object.

```js
const event = new Event('click');
console.log(event.type); // Output: 'click'
```
EventTarget.addEventListener() - Registers an event handler function for the specified event on the EventTarget.

```js
const button = document.getElementById('myButton');
button.addEventListener('click', function() {
  console.log('Button clicked!');
});
```
EventTarget.dispatchEvent() - Dispatches an event to this EventTarget.

```js
const button = document.getElementById('myButton');
const event = new Event('click');
button.dispatchEvent(event);
```
Float32Array() - Creates a new Float32Array object.

```js
const array = new Float32Array([1.0, 2.0, 3.0]);
console.log(array); // Output: Float32Array [1, 2, 3]
```
Float32Array.from() - Creates a new Float32Array object from an array-like or iterable object.

```js
const arrayLike = { 0: 1.0, 1: 2.0, 2: 3.0, length: 3 };
const array = Float32Array.from(arrayLike);
console.log(array); // Output: Float32Array [1, 2, 3]
```
Float32Array.of() - Creates a new Float32Array object with a variable number of arguments.

```js
const array = Float32Array.of(1.0, 2.0, 3.0);
console.log(array); // Output: Float32Array [1, 2, 3]
```
Float64Array() - Creates a new Float64Array object.

```js
const array = new Float64Array([1.0, 2.0, 3.0]);
console.log(array); // Output: Float64Array [1, 2, 3]
```
Float64Array.from() - Creates a new Float64Array object from an array-like or iterable object.

```js
const arrayLike = { 0: 1.0, 1: 2.0, 2: 3.0, length: 3 };
const array = Float



Jon Christie
continue until you've covered all js methods
Sure, here are more JavaScript methods in alphabetical order with example code:

```
Float64Array.of() - Creates a new Float64Array object with a variable number of arguments.

```js
const array = Float64Array.of(1.0, 2.0, 3.0);
console.log(array); // Output: Float64Array [1, 2, 3]
```
for...in statement - Iterates over the enumerable properties of an object, in arbitrary order.

```js
const person = { firstName: 'John', lastName: 'Doe', age: 30 };
for (const property in person) {
  console.log(`${property}: ${person[property]}`);
}
// Output:
// firstName: John
// lastName: Doe
// age: 30
```
for...of statement - Iterates over iterable objects (including arrays, strings, maps, sets, etc.) and invokes a custom function for each iteration.

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
Function() - Creates a new Function object.

```js
const add = new Function('x', 'y', 'return x + y');
console.log(add(2, 3)); // Output: 5
```
Function.prototype.apply() - Calls a function with a given this value and arguments provided as an array (or an array-like object).

```js
function greet(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}
const person = { name: 'John' };
greet.apply(person, ['Hello']);
// Output: 'Hello, John!'
```
Function.prototype.bind() - Creates a new function that, when called, has its this keyword set to the provided value and arguments provided beforehand.

```js
function greet(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}
const person = { name: 'John' };
const boundGreet = greet.bind(person, 'Hello');
boundGreet(); // Output: 'Hello, John!'
```
Function.prototype.call() - Calls a function with a given this value and arguments provided individually.

```js
function greet(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}
const person = { name: 'John' };
greet.call(person, 'Hello');
// Output: 'Hello, John!'
```
Generator() - Creates a new Generator object.

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
Generator.prototype.next() - Advances the Generator object to the next yielded value.

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
Generator.prototype.return() - Ends the Generator object and returns a given value.

```js
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}
const iterator = generator();
console.log(iterator.next().value); //



Jon Christie
continue until you've covered all js methods
Sure, here are more JavaScript methods in alphabetical order with example code:

```
Generator.prototype.throw() - Throws an exception at the location where the Generator function is paused, and returns the result of the next yield expression (or the end of the generator function, if there is no such expression).

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
get keyword - Defines a getter method for an object property.

```js
const person = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};
console.log(person.fullName); // Output: 'John Doe'
```
hasOwnProperty() - Returns a Boolean indicating whether the object has the specified property as a direct property of that object and not inherited through the prototype chain.

```js
const person = { firstName: 'John', lastName: 'Doe', age: 30 };
console.log(person.hasOwnProperty('firstName')); // Output: true
console.log(person.hasOwnProperty('toString')); // Output: false
```
if...else statement - Executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed.

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
includes() - Determines whether an array includes a certain value among its entries, returning true or false as appropriate.

```js
const array = ['apple', 'banana', 'cherry'];
console.log(array.includes('banana')); // Output: true
console.log(array.includes('orange')); // Output: false
```
indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present.

```js
const array = ['apple', 'banana', 'cherry'];
console.log(array.indexOf('banana')); // Output: 1
console.log(array.indexOf('orange')); // Output: -1
```
Int16Array() - Creates a new Int16Array object.

```js
const array = new Int16Array([1, 2, 3]);
console.log(array); // Output: Int16Array [1, 2, 3]
```
Int16Array.from() - Creates a new Int16Array object from an array-like or iterable object.

```js
const arrayLike = { 0: 1, 1: 2, 2: 3, length: 3 };
const array = Int16Array.from(arrayLike);
console.log(array); // Output: Int16Array [1, 2, 3]
```
Int16Array.of() - Creates a new Int16Array object with a variable number of arguments.

```js
const array = Int16Array.of(1, 2, 3);
console.log(array); // Output: Int16Array [1, 2,



Jon Christie
continue until you've covered all js methods
Sure, here are more JavaScript methods in alphabetical order with example code:

```
Int32Array() - Creates a new Int32Array object.

```js
const array = new Int32Array([1, 2, 3]);
console.log(array); // Output: Int32Array [1, 2, 3]
```
Int32Array.from() - Creates a new Int32Array object from an array-like or iterable object.

```js
const arrayLike = { 0: 1, 1: 2, 2: 3, length: 3 };
const array = Int32Array.from(arrayLike);
console.log(array); // Output: Int32Array [1, 2, 3]
```
Int32Array.of() - Creates a new Int32Array object with a variable number of arguments.

```js
const array = Int32Array.of(1, 2, 3);
console.log(array); // Output: Int32Array [1, 2, 3]
```
Int8Array() - Creates a new Int8Array object.

```js
const array = new Int8Array([1, 2, 3]);
console.log(array); // Output: Int8Array [1, 2, 3]
```
Int8Array.from() - Creates a new Int8Array object from an array-like or iterable object.

```js
const arrayLike = { 0: 1, 1: 2, 2: 3, length: 3 };
const array = Int8Array.from(arrayLike);
console.log(array); // Output: Int8Array [1, 2, 3]
```
Int8Array.of() - Creates a new Int8Array object with a variable number of arguments.

```js
const array = Int8Array.of(1, 2, 3);
console.log(array); // Output: Int8Array [1, 2, 3]
```
isArray() - Determines whether the passed value is an Array.

```js
console.log(Array.isArray([1, 2, 3])); // Output: true
console.log(Array.isArray({ 0: 1, 1: 2, 2: 3, length: 3 })); // Output: false
```
isFinite() - Determines whether a value is a finite number.

```js
console.log(isFinite(1)); // Output: true
console.log(isFinite(Infinity)); // Output: false
```
isNaN() - Determines whether a value is NaN (not a number).

```js
console.log(isNaN(NaN)); // Output: true
console.log(isNaN(123)); // Output: false
```
JSON.parse() - Parses a JSON string and returns the parsed value.

```js
const json = '{"name":"John","age":30,"city":"New York"}';
const object = JSON.parse(json);
console.log(object.name); // Output: 'John'
```
JSON.stringify() - Converts a JavaScript object or value to a JSON string.

```js
const object = { name: 'John', age: 30, city: 'New York' };
const json = JSON.stringify(object);
console.log(json); // Output: '{"name":"John","age":30,"city":"New York"}'
```
keys() - Returns an array containing the names of all of the given object's own enumerable string properties.

```js
const person = { firstName: 'John', lastName: 'Doe', age: 30 };
const keys



Jon Christie
continue until you've covered all js methods
Sure, here are more JavaScript methods in alphabetical order with example code:

```
lastIndexOf() - Returns the last index at which a given element can be found in the array, or -1 if it is not present.

```js
const array = ['apple', 'banana', 'cherry', 'banana'];
console.log(array.lastIndexOf('banana')); // Output: 3
console.log(array.lastIndexOf('orange')); // Output: -1
```
length property - Sets or returns the number of elements in an array or the length of a string.

```js
const array = ['apple', 'banana', 'cherry'];
console.log(array.length); // Output: 3
const string = 'Hello, world!';
console.log(string.length); // Output: 13
```
localeCompare() - Compares two strings in the current locale.

```js
console.log('ä'.localeCompare('z')); // Output: -1
console.log('ä'.localeCompare('a')); // Output: 1
console.log('ä'.localeCompare('ä')); // Output: 0
```
map() - Creates a new array with the results of calling a provided function on every element in the calling array.

```js
const array = [1, 2, 3];
const mappedArray = array.map(element => element * 2);
console.log(mappedArray); // Output: [2, 4, 6]
```
match() - Searches a string for a match against a regular expression, and returns the matches.

```js
const string = 'The quick brown fox jumps over the lazy dog.';
const regex = /[A-Z]/g;
const matches = string.match(regex);
console.log(matches); // Output: ['T', 'J']
```
Math.abs() - Returns the absolute value of a number.

```js
console.log(Math.abs(-1)); // Output: 1
console.log(Math.abs(2)); // Output: 2
```
Math.acos() - Returns the arccosine (in radians) of a number.

```js
console.log(Math.acos(0.5)); // Output: 1.0471975511965979
console.log(Math.acos(1)); // Output: 0
```
Math.acosh() - Returns the hyperbolic arccosine of a number.

```js
console.log(Math.acosh(1)); // Output: 0
console.log(Math.acosh(2)); // Output: 1.3169578969248166
```
Math.asin() - Returns the arcsine (in radians) of a number.

```js
console.log(Math.asin(0.5)); // Output: 0.5235987755982989
console.log(Math.asin(1)); // Output: 1.5707963267948966
```
Math.asinh() - Returns the hyperbolic arcsine of a number.

```js
console.log(Math.asinh(1)); // Output: 0.881373587019543
console.log(Math.asinh(2)); // Output: 1.4436354751788103
```
Math.atan() - Returns the arctangent (in radians) of a number.

```js
console.log(Math.atan(1)); // Output: 0.7853981633974483
console.log(Math.atan(0)); // Output: 0
Math.atan2() - Returns the angle (in radians) from the X axis to a point specified by two coordinate values



Jon Christie
 continue until you've covered all js methods
Sure, here are more JavaScript methods in alphabetical order with example code:

```
Math.atanh() - Returns the hyperbolic arctangent of a number.

```js
console.log(Math.atanh(0.5)); // Output: 0.5493061443340549
console.log(Math.atanh(0.9)); // Output: 1.4722194895832204
```
Math.cbrt() - Returns the cube root of a number.

```js
console.log(Math.cbrt(8)); // Output: 2
console.log(Math.cbrt(27)); // Output: 3
```
Math.ceil() - Returns the smallest integer greater than or equal to a given number.

```js
console.log(Math.ceil(1.2)); // Output: 2
console.log(Math.ceil(-1.2)); // Output: -1
```
Math.clz32() - Returns the number of leading zeros in the 32-bit binary representation of a number.

```js
console.log(Math.clz32(1)); // Output: 31
console.log(Math.clz32(1000)); // Output: 22
```
Math.cos() - Returns the cosine of a number (in radians).

```js
console.log(Math.cos(0)); // Output: 1
console.log(Math.cos(Math.PI)); // Output: -1
```
Math.cosh() - Returns the hyperbolic cosine of a number.

```js
console.log(Math.cosh(0)); // Output: 1
console.log(Math.cosh(1)); // Output: 1.5430806348152437
```
Math.E - Returns Euler's number (approximately 2.718).

```js
console.log(Math.E); // Output: 2.718281828459045
```
Math.exp() - Returns the value of Euler's number raised to the power of a number.

```js
console.log(Math.exp(1)); // Output: 2.718281828459045
console.log(Math.exp(2)); // Output: 7.38905609893065
```
Math.floor() - Returns the largest integer less than or equal to a given number.

```js
console.log(Math.floor(1.2)); // Output: 1
console.log(Math.floor(-1.2)); // Output: -2
```
Math.fround() - Returns the nearest single precision float representation of a number.

```js
console.log(Math.fround(1.2345)); // Output: 1.2345000505447388
console.log(Math.fround(1.5)); // Output: 1.5
```
Math.hypot() - Returns the square root of the sum of squares of its arguments.

```js
console.log(Math.hypot(3, 4)); // Output: 5
console.log(Math.hypot(1, 2, 3)); // Output: 3.7416573867739413
```
Math.imul() - Returns the result of a 32-bit integer multiplication.

```js
console.log(Math.imul(2, 3)); // Output: 6
console.log(Math.imul(-1, 8)); // Output: -8
```
Math.LN10 - Returns the natural logarithm of 10 (approximately 2.303).

```js
console.log(Math.LN10); // Output: 2.302585092994046



Jon Christie
continue until you've covered all js methods