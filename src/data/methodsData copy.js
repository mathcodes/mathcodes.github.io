export const arrayMethods = [
  {
    title: "Array.prototype.concat() - Concatenates two or more arrays.",
    desc:`
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = array1.concat(array2);
console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]
`},
{
  title: "Array.prototype.every() - Tests whether all elements in the array pass the test implemented by the provided function.",
    desc: `
const array1 = [1, 2, 3, 4, 5];
const result = array1.every(element => element > 0);
console.log(result); // Output: true
`},
{
  title: "Array.prototype.filter() - Creates a new array with all elements that pass the test implemented by the provided function.",
    desc: `
const array1 = [1, 2, 3, 4, 5];
const newArray = array1.filter(element => element > 2);
console.log(newArray); // Output: [3, 4, 5]
`},
{
  title: "Array.prototype.forEach() - Executes a provided function once for each array element.",
    desc: `
const array1 = [1, 2, 3];
array1.forEach(element => console.log(element));
// Output: 1
//         2
//         3
`},
{
  title: "Array.prototype.includes() - Determines whether an array includes a certain element, returning true or false as appropriate.",
    desc: `
const array1 = [1, 2, 3];
const result = array1.includes(2);
console.log(result); // Output: true
`},
{
  title: "Array.prototype.indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present.",
  desc:

  `
const array1 = [1, 2, 3];
const index = array1.indexOf(2);
console.log(index); // Output: 1
`},
{
  title: "Array.prototype.join() - Joins all elements of an array into a string.",
    desc: `
const array1 = ['Hello', 'World'];
const string = array1.join(' ');
console.log(string); // Output: 'Hello World'
`},
{
  title: "Array.prototype.lastIndexOf() - Returns the last index at which a given element can be found in the array, or -1 if it is not present.",
  desc:

  `
const array1 = [1, 2, 3];
const index = array1.lastIndexOf(2);
console.log(index); // Output: 1
`},
{
  title: "Array.prototype.map() - Creates a new array with the results of calling a provided function on every element in the calling array.",
  desc:

  `
const array1 = [1, 2, 3];
const newArray = array1.map(element => element * 2);
console.log(newArray); // Output: [2, 4, 6]
`},
{
  title: "Array.prototype.pop() - Removes the last element from an array and returns that element.",
    desc: `
const array1 = [1, 2, 3];
const lastElement = array1.pop();
console.log(lastElement); // Output: 3
`},
{
  title: "Array.prototype.push() - Adds one or more elements to the end of an array and returns the new length of the array.",
    desc: `
const array1 = [1, 2, 3];
const newLength = array1.push(4, 5);
console.log(array1); // Output: [1, 2, 3,


`},
{
  title: "Array.prototype.reduce() - Executes a provided function for each value of the array and returns a single value.",
    desc: `
const array1 = [1, 2, 3];
const sum = array1.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // Output: 6
`},
{
  title: "Array.prototype.reduceRight() - Executes a provided function for each value of the array (from right-to-left) and returns a single value",
  desc:

  `
const array1 = [1, 2, 3];
const sum = array1.reduceRight((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // Output: 6
`},
{
  title: "Array.prototype.reverse() - Reverses the order of the elements in an array.",
    desc: `
const array1 = [1, 2, 3];
array1.reverse();
console.log(array1); // Output: [3, 2, 1]
`},
{
  title: "Array.prototype.shift() - Removes the first element from an array and returns that element.",
    desc: `
const array1 = [1, 2, 3];
const firstElement = array1.shift();
console.log(firstElement); // Output: 1
`},
{
  title: "Array.prototype.slice() - Returns a shallow copy of a portion of an array.",
    desc: `
const array1 = [1, 2, 3, 4, 5];
const newArray = array1.slice(1, 3);
console.log(newArray); // Output: [2, 3]
`},
{
  title: "Array.prototype.some() - Tests whether at least one element in the array passes the test implemented by the provided function.",
    desc: `
const array1 = [1, 2, 3, 4, 5];
const result = array1.some(element => element > 3);
console.log(result); // Output: true
`},
{
  title: "Array.prototype.sort() - Sorts the elements of an array in place and returns the sorted array.",
    desc: `
const array1 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
array1.sort();
console.log(array1); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
`},
{
  title: "Array.prototype.splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.",
  desc:

  `
const array1 = [1, 2, 3, 4, 5];
const removedElements = array1.splice(1, 2, 6, 7);
console.log(array1); // Output: [1, 6, 7, 4, 5]
console.log(removedElements); // Output: [2, 3]
`},
{
  title: "Array.prototype.toLocaleString() - Returns a string representing the elements of an array in a localized format.",
    desc: `
const array1 = [1, 2, 3];
const string = array1.toLocaleString();
console.log(string); // Output: '1,2,3'
`},
{
  title: "Array.prototype.toString() - Returns a string representing the specified array and its elements.",
    desc: `
const array1 = [1, 2, 3];
const string = array1.toString();
console.log(string); // Output: '1,2,3'
Array.prototype.unshift() - Adds one or more elements to


`},
{
  title: "Array.prototype.values() - Returns a new array iterator object that contains the values for each index in the array.",
    desc: `
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

`},
{
  title: "Array.prototype.values() - Returns a new array iterator object that contains the values for each index in the array.",
    desc: `
const array1 = ['a', 'b', 'c'];
const iterator = array1.values();
for (const value of iterator) {
  console.log(value);
}
// Output: 'a'
//         'b'
//         'c'
`},
{
  title: "Array.from() - Creates a new array instance from an array-like or iterable object.",
    desc: `
const string = 'hello';
const array1 = Array.from(string);
console.log(array1); // Output: ['h', 'e', 'l', 'l', 'o']
`},
{
  title: "Array.isArray() - Determines whether the passed value is an Array.",
    desc: `
const array1 = [1, 2, 3];
const result = Array.isArray(array1);
console.log(result); // Output: true
`},
{
  title: "Array.of() - Creates a new array instance with a variable number of arguments, regardless of number or type of the arguments.",
    desc: `
const array1 = Array.of(1, 'two', true);
console.log(array1); // Output: [1, 'two', true]
`},
{
}]

// export const stringMethods = [{
//   title: "String.prototype.charAt() - Returns the character at the specified index in a string.",
//   desc: `
// const string = 'hello';
// const char = string.charAt(1);
// console.log(char); // Output: 'e'
// `},
// {
//   title: "String.prototype.charCodeAt() - Returns the Unicode of the character at the specified index in a string.",
//   desc: `
// const string = 'hello';
// const charCode = string.charCodeAt(1);
// console.log(charCode); // Output: 101
// `},
// {
//   title: "String.prototype.concat() - Joins two or more strings, and returns a new joined strings.",
//   desc: `
// const string1 = 'hello';
// const string2 = 'world';
// const string3 = string1.concat(' ', string2);
// console.log(string3); // Output: 'hello world'
// `},
// {
//   title: "String.prototype.endsWith() - Determines whether a string ends with the characters of a specified string, returning true or false as appropriate.",
//   desc: `
// const string = 'hello world';

// console.log(string.endsWith('world')); // Output: true
// console.log(string.endsWith('hello')); // Output: false
// `},
// {
//   title: "String.prototype.includes() - Determines whether one string may be found within another string, returning true or false as appropriate.",
//   desc: `
// const string = 'hello world';

// console.log(string.includes('hello')); // Output: true
// console.log(string.includes('world')); // Output: true
// console.log(string.includes('foo')); // Output: false
// `},
// {
//   title: "String.prototype.indexOf() - Returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex.",
//   desc: `
// const string = 'hello world';

// console.log(string.indexOf('hello')); // Output: 0
// console.log(string.indexOf('world')); // Output: 6
// console.log(string.indexOf('foo')); // Output: -1
// `},
// {
//   title: "String.prototype.lastIndexOf() - Returns the index within the calling String object of the last occurrence of the specified value, or -1 if not found.",
//   desc: `
// const string = 'hello world';

// console.log(string.lastIndexOf('hello')); // Output: 0
// console.log(string.lastIndexOf('world')); // Output: 6
// console.log(string.lastIndexOf('foo')); // Output: -1
// `},
// {
//   title: "String.prototype.localeCompare() - Returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.",
//   desc: `
// const string1 = 'hello';
// const string2 = 'world';

// console.log(string1.localeCompare(string2)); // Output: -1
// console.log(string2.localeCompare(string1)); // Output: 1
// console.log(string1.localeCompare(string1)); // Output: 0
// `},
// {
//   title: "String.prototype.match() - Used to retrieve the matches when matching a string against a regular expression.",
//   desc: `
// const string = 'hello world';

// console.log(string.match(/hello/)); // Output: ['hello']
// console.log(string.match(/world/)); // Output: ['world']
// console.log(string.match(/foo/)); // Output: null
// `},
// {
//   title: "String.prototype.normalize() - Returns the Unicode Normalization Form of a given string.",
//   desc: `
// const string = 'hello world';

// console.log(string.normalize()); // Output: 'hello world'
// `},
// {
//   title: "String.prototype.padEnd() - Pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length.",
//   desc: `
// const string = 'hello world';

// console.log(string.padEnd(15, 'foo')); // Output: 'hello worldfoof'
// `},
// {
//   title: "String.prototype.padStart() - Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.",
//   desc: `
// const string = 'hello world';

// console.log(string.padStart(15, 'foo')); // Output: 'foofoofoohello world'
// `},
// {
//   title: "String.prototype.repeat() - Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.",
//   desc: `
// const string = 'hello world';

// console.log(string.repeat(3)); // Output: 'hello worldhello worldhello world'
// `},
// {
//   title: "String.prototype.replace() - Returns a new string with some or all matches of a pattern replaced by a replacement.",
//   desc: `
// const string = 'hello world';

// console.log(string.replace('hello', 'foo')); // Output: 'foo world'
// `},
// {
//   title: "String.prototype.search() - Executes the search for a match between a regular expression and this String object.",
//   desc: `
// const string = 'hello world';

// console.log(string.search(/hello/)); // Output: 0
// console.log(string.search(/world/)); // Output: 6
// console.log(string.search(/foo/)); // Output: -1
// `},
// {
//   title: "String.prototype.slice() - Extracts a section of a string and returns it as a new string, without modifying the original string.",
//   desc: `
// const string = 'hello world';

// console.log(string.slice(0, 5)); // Output: 'hello'
// `},
// {
//   title: "String.prototype.split() - Splits a String object into an array of strings by separating the string into substrings.",
//   desc: `
// const string = 'hello world';

// console.log(string.split(' ')); // Output: ['hello', 'world']
// `},
// {
//   title: "String.prototype.startsWith() - Determines whether a string begins with the characters of a specified string, returning true or false as appropriate.",
//   desc: `
// const string = 'hello world';

// console.log(string.startsWith('hello')); // Output: true
// console.log(string.startsWith('world')); // Output: false
// `},
// {
//   title: "String.prototype.substr() - Returns the characters in a string beginning at the specified location through the specified number of characters.",
//   desc: `
// const string = 'hello world';

// console.log(string.substr(0, 5)); // Output: 'hello'
// `},
// {
//   title: "String.prototype.substring() - Returns the characters in a string between two indexes into the string.",
//   desc: `
// const string = 'hello world';

// console.log(string.substring(0, 5)); // Output: 'hello'
// `},
// {
//   title: "String.prototype.toLocaleLowerCase() - Returns the calling string value converted to lower case, according to any locale-specific case mappings.",
//   desc: `
// const string = 'HELLO WORLD';

// console.log(string.toLocaleLowerCase()); // Output: 'hello world'
// `},
// {
//   title: "String.prototype.toLocaleUpperCase() - Returns the calling string value converted to upper case, according to any locale-specific case mappings.",
//   desc: `
// const string = 'hello world';

// console.log(string.toLocaleUpperCase()); // Output: 'HELLO WORLD'
// `},
// {
//   title: "String.prototype.toLowerCase() - Returns the calling string value converted to lower case.",
//   desc: `
// const string = 'HELLO WORLD';

// console.log(string.toLowerCase()); // Output: 'hello world'
// `},
// {
//   title: "String.prototype.toString() - Returns a string representing the specified object.",
//   desc: `
// const string = 'hello world';

// console.log(string.toString()); // Output: 'hello world'
// `},
// {
//   title: "String.prototype.toUpperCase() - Returns the calling string value converted to upper case.",
//   desc: `
// const string = 'hello world';

// console.log(string.toUpperCase()); // Output: 'HELLO WORLD'
// `},
// {
//   title: "String.prototype.trim() - Removes whitespace from both ends of a string.",
//   desc: `
// const string = ' hello world ';

// console.log(string.trim()); // Output: 'hello world'
// `},
// {
//   title: "String.prototype.trimEnd() - Removes whitespace from the end of a string.",
//   desc: `
// const string = ' hello world ';

// console.log(string.trimEnd()); // Output: ' hello world'
// `},
// {
//   title: "String.prototype.trimStart() - Removes whitespace from the beginning of a string.",
//   desc: `
// const string = ' hello world ';

// console.log(string.trimStart()); // Output: 'hello world '
// `},
// {
//   title: "String.prototype.valueOf() - Returns the primitive value of a String object.",
//   desc: `
// const string = 'hello world';

// console.log(string.valueOf()); // Output: 'hello world'
// `},
// {
//   title: "String.prototype[@@iterator]() - Returns a new Iterator object that iterates over the code points of a String value, returning each code point as a String value.",
//   desc: `
// const string = 'hello world';

// console.log(string[Symbol.iterator]()); // Output: String Iterator {}
// `},
// {
//   title: "String.raw() - Returns a raw string.",
//   desc: `
// console.log(String.raw({ raw: 'test' }, 0, 1, 2)); // Output: 't0e1s2t'
// `},
// {
//   title: "String.fromCharCode() - Returns a string created from the specified sequence of UTF-16 code units.",
//   desc: `
// console.log(String.fromCharCode(104, 101, 108, 108, 111)); // Output: 'hello'
// `},
// {
//   title: "String.fromCodePoint() - Returns a string created by using the specified sequence of code points.",
//   desc: `
// console.log(String.fromCodePoint(104, 101, 108, 108, 111)); // Output: 'hello'
// `},
// {
// }]

// export const dateMethods = [{

//   title: "Date.prototype.getDate() - Returns the day of the month for a specified date according to local time.",
//   desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
// const day = date1.getDate();
// console.log(day); // Output: 8
// `},
// {
//   title: "Date.prototype.getDay() - Returns the day of the week for a specified date according to local time.",
//   desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
// const dayOfWeek = date1.getDay();
// console.log(dayOfWeek); // Output: 3 (Wednesday)
// `},
// {
//   title: "Date.prototype.getFullYear() - Returns the year for a specified date according to local time.",
//   desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
// const year = date1.getFullYear();
// console.log(year); // Output: 2023
// `},
// {
//   title: "Date.prototype.getHours() - Returns the hour for a specified date according to local time.",
//   desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
// const hour = date1.getHours();
// console.log(hour); // Output: 12
// `},
// {
//   title: "Date.prototype.getMilliseconds() - Returns the milliseconds for a specified date according to local time.",
//   desc: `
// const date1 = new Date('March 8, 2023 12:00:00.123');
// const milliseconds = date1.getMilliseconds();
// console.log(milliseconds); // Output: 123
// `},
// {
//   title: "Date.prototype.getMinutes() - Returns the minutes for a specified date according to local time.",
//   desc: `
// const date1 = new Date('March 8, 2023 12:15:00');
// const minutes = date1.getMinutes();
// console.log(minutes); // Output: 15
// `},
// {
//   title: "Date.prototype.getMonth() - Returns the month for a specified date according to local time.",
//   desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
// const month = date1.getMonth();
// console.log(month
// `},
// {
//   title: "Date.prototype.getSeconds() - Returns the seconds for a specified date according to local time.",
//   desc: `
// const date1 = new Date('March 8, 2023 12:00:30');
// const seconds = date1.getSeconds();
// console.log(seconds); // Output: 30
// `},
// {
//   title: "Date.prototype.getTime() - Returns the numeric value corresponding to the time for a specified date according to universal time.",
//   desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
// const time = date1.getTime();
// console.log(time); // Output: 1675605600000
// `},
// {
//   title: "Date.prototype.getTimezoneOffset() - Returns the time-zone offset in minutes for the current locale.",
//   desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
// const offset = date1.getTimezoneOffset();
// console.log(offset); // Output: -300 (5 hours behind UTC)
// `},
// {
//   title: "Date.prototype.getUTCDate() - Returns the day (date) of the month in the specified date according to universal time.",
//   desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
// const day = date1.getUTCDate();
// console.log(day); // Output: 8
// `},
// {
//   title: "Date.prototype.getUTCDay() - Returns the day of the week in the specified date according to universal time.",
//   desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
// const dayOfWeek = date1.getUTCDay();
// console.log(dayOfWeek); // Output: 3 (Wednesday)
// `},
// {
//   title: "Date.prototype.getUTCFullYear() - Returns the year in the specified date according to universal time.",
//   desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
// const year = date1.getUTCFullYear();
// console.log(year); // Output: 2023
// `},
// {
//   title: "Date.prototype.getUTCHours() - Returns the hour in the specified date according to universal time.",
//   desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
// const hour = date1.getUTCHours();
// console.log(hour); // Output: 17 (12pm UTC is 5 hours ahead of EST)
// `},
// {
//   title: "Date.prototype.getUTCMilliseconds() - Returns the milliseconds in the specified date according to universal time.",
//   desc: `
// const date1 = new Date('March 8, 2023 12:00:00.123');
// const milliseconds = date1.getUTCMilliseconds();
// console.log(milliseconds); // Output: 123
// `},
// {
//   title: "Date.prototype.getUTCMinutes() - Returns the minutes in the specified date according to universal time.",
//   desc: `
// const date1 = new Date('March 8, 2023 12:15:00');
// const minutes = date1.getUTCMinutes();
// console.log(minutes); // Output: 15
// `},
// {
//   title: "Date.prototype.getUTCMonth() - Returns the month in the specified date according to universal time.",
//   desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
// const month = date1.getUTCMonth();
// console.log(month); // Output: 2 (March is the 3rd month, but 0-based indexing)
// `},
// {
//   title: "Date.prototype.setDate() - Sets the day of the month for a specified date according to local time.",
//   desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
// date1.setDate(10);
// console.log(date1); // Output: 'Sat Mar 10 2023 12:00:00 GMT-0500 (Eastern Standard Time)'
// `},
// {
//   title: "Date.prototype.setFullYear() - Sets the year for a specified date according to local time.",
//   desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
// date1.setFullYear(2024);
// console.log(date1); // Output: 'Tue Mar 08 2024 12:00:00 GMT-0500 (Eastern Standard Time)'
// `},
// {
//   title: "Date.prototype.setHours() - Sets the hour for a specified date according to local time.",
//   desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
// date1.setHours(13);
// console.log(date1); // Output: 'Wed Mar 08 2023 13:00:00 GMT-0500 (Eastern Standard Time)'
// `},
// {
//   title: "Date.prototype.setMilliseconds() - Sets the milliseconds for a specified date according to local time.",
//   desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
// date1.setMilliseconds(500);
// console.log(date1); // Output: 'Wed Mar 08 2023 12:00:00.500 GMT-0500 (Eastern Standard Time)'
// `},
// {
//   title: "Date.prototype.setMinutes() - Sets the minutes for a specified date according to local time.",
//   desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
// date1.setMinutes(30);
// console.log(date1); // Output: 'Wed Mar 08 2023 12:30:00 GMT-0500 (Eastern Standard Time)'
// `},
// {
//   title: "Date.prototype.setMonth() - Sets the month for a specified date according to local time.",
//   desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
// date1.setMonth(4);
// console.log(date1); // Output: 'Fri May 08 2023 12:00:00 GMT-0400 (Eastern Daylight Time)'
// `},
// {
//   title: "Date.prototype.setSeconds() - Sets the seconds for a specified date according to local time.",
//   desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
// date1.setSeconds(45);
// console.log(date1); // Output: 'Wed Mar 08 2023 12:00:45 GMT-0500 (Eastern Standard Time)`},
// {

//   title: "Date.prototype.setTime() - Sets the Date object to the time represented by a number of milliseconds since January 1, 1970,00:00:00 UTC.",
// desc:
// `const date1 = new Date('March 8, 2023 12:00:00');
// date1.setTime(1675606000000);
// console.log(date1); // Output: 'Wed Mar 08 2023 12:20:00 GMT-0500 (Eastern Standard Time)'
// `},
// {

//   title: "Date.prototype.setUTCFullYear() - Sets the year for a specified date according to universal time.",
//     desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
// date1.setUTCFullYear(2024);
// console.log(date1); // Output: 'Fri Mar 08 2024 12:00:00 GMT-0500 (Eastern Standard Time)'
// `},
// {
//   title: "Date.prototype.setUTCHours() - Sets the hour for a specified date according to universal time.",
//     desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
// date1.setUTCHours(18);
// console.log(date1); // Output: 'Wed Mar 08 2023 13:00:00 GMT-0500 (Eastern Standard Time)'
// `},
// {
//   title: "Date.prototype.setUTCMilliseconds() - Sets the milliseconds for a specified date according to universal time.",
//     desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
// date1.setUTCMilliseconds(500);
// console.log(date1); // Output: 'Wed Mar 08 2023 12:00:00.500 GMT-0500 (Eastern Standard Time)'
// `},
// {
//   title: "Date.prototype.setUTCMinutes() - Sets the minutes for a specified date according to universal time.",
//     desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
// date1.setUTCMinutes(30);
// console.log(date1); // Output: 'Wed Mar 08 2023 12:30:00 GMT-0500 (Eastern Standard Time)'
// `},
// {
//   title: "Date.prototype.setUTCMonth() - Sets the month for a specified date according to universal time.",
//     desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
// date1.setUTCMonth(4);
// console.log(date1); // Output: 'Tue May 08 2023 08:00:00 GMT-0400 (Eastern Daylight Time)'
// `},
// {
//   title: "Date.prototype.setUTCSeconds() - Sets the seconds for a specified date according to universal time.",
//     desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
// date1.setUTCSeconds(45);
// console.log(date1); // Output: 'Wed Mar 08 2023 12:00:45 GMT-0500 (Eastern Standard Time)'
// `},
// {
//   title: "Date.prototype.toDateString() - Returns the date portion of a Date object as a readable string.",
//     desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
// const dateString = date1.toDateString();
// console.log(dateString); // Output: 'Wed Mar 08 2023'
// `},
// {
//   title: "Date.prototype.toISOString() - Returns a string representing the Date object in ISO format (YYYY-MM-DDTHH:mm:ss.sssZ).",
//     desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
// const isoString = date1.toISOString();
// console.log(isoString); // Output: '2023-03-08T17:00:00.000Z'
// `},
// {
//   title: "Date.prototype.toJSON() - Returns a string representing the Date object in JSON format.",
//     desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
// const jsonString = JSON.stringify(date1);
// console.log(jsonString);`},
// {


//   title: "Date.prototype.toLocaleDateString() - Returns a string representing the date portion of a Date object in a locale-specific format.": `const date1 = new Date('March 8, 2023 12:00:00',
// desc:;
// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// const dateString = date1.toLocaleDateString('en-US', options);
// console.log(dateString); // Output: 'Wednesday, March 8, 2023'`},
// {
//   title: "Date.prototype.toLocaleString() - Returns a string representing the Date object in a locale-specific format.",
//     desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
// const dateString = date1.toLocaleString('en-US', options);
// console.log(dateString); // Output: 'Wednesday, March 8, 2023, 12:00 PM`},
// {
//   title: "Date.prototype.toLocaleTimeString() - Returns a string representing the time portion of a Date object in a locale-specific format.",
//     desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
// const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
// const timeString = date1.toLocaleTimeString('en-US', options);
// console.log(timeString); // Output: '12:00:00 PM'
// `},
// {
//   title: "Date.prototype.toString() - Returns a string representing the Date object.",
//     desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
// const string = date1.toString();
// console.log(string); // Output: 'Wed Mar 08 2023 12:00:00 GMT-0500 (Eastern Standard Time)'
// `},
// {
//   title: "Date.prototype.toTimeString() - Returns a string representing the time portion of a Date object.",
//     desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
// const timeString = date1.toTimeString();
// console.log(timeString); // Output: '12:00:00 GMT-0500 (Eastern Standard Time)'
// `},
// {
//   title: "Date.prototype.toUTCString() - Converts a Date object to a string, according to universal time.",
//     desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
// const utcString = date1.toUTCString();
// console.log(utcString); // Output: 'Wed, 08 Mar 2023 17:00:00 GMT`},
// {
//   title: "Date.now() - Returns the numeric value corresponding to the current time - the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC.": `const now = Date.now(,
//   desc:;
// console.log(now); // Output: 1646761609555
// `},
// {
// }]



// title: // "decodeURI() - Decodes a Uniform Resource Identifier (URI) previously created by encodeURI() or by a similar routine.",
// desc: `
// // const uri = 'https://en.wikipedia.org/wiki/Uniform_Resource_Identifier#URI_syntax';
// // const decoded = decodeURI(uri);
// // console.log(decoded); // Output: 'https://en.wikipedia.org/wiki/Uniform_Resource_Identifier#URI_syntax'
// // `},
// {
//   title: // "encodeURI() - Encodes a Uniform Resource Identifier (URI) by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the characteres:",
//   desc:

//   // `
//   // const uri = 'https://en.wikipedia.org/wiki/Uniform_Resource_Identifier#URI_syntax';
//   // const encoded = encodeURI(uri);
//   // console.log(encoded); // Output: 'https://en.wikipedia.org/wiki/Uniform_Resource_Identifier#URI_syntax'
//   // `},{
//   title: // "encodeURIComponent() - Encodes a URI component by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the characters",
//   desc:

//   // `
//   // const uriComponent = 'The Quick Brown Fox';
//   // const encoded = encodeURIComponent(uriComponent);
//   // console.log(encoded); // Output: 'The%20Quick%20Brown%20Fox'
//   // `},{
//   title: // "Error() - Creates an error object that contains an error message.",
//   desc: `
// // const message = 'Something went wrong.';
// // const error = new Error(message);
// // console.log(error.message); // Output: 'Something went wrong.'
// // `},
// {
//   title: // "eval() - Evaluates JavaScript code represented as a string.",
//   desc: `
// // const code = '2 + 2';
// // const result = eval(code);
// // console.log(result); // Output: 4
// // `},
// {
//   title: // "Event() - Creates a new Event object.",
//   desc: `
// // const event = new Event('click');
// // console.log(event.type); // Output: 'click'
// // `},
// {
//   title: // "EventTarget.addEventListener() - Registers an event handler function for the specified event on the EventTarget.",
//   desc: `
// // const button = document.getElementById('myButton');
// // button.addEventListener('click', function() {
// //   console.log('Button clicked!');
// // });
// // `},
// {
//   title: // "EventTarget.dispatchEvent() - Dispatches an event to this EventTarget.",
//   desc: `
// // const button = document.getElementById('myButton');
// // const event = new Event('click');
// // button.dispatchEvent(event);
// // `},
// {
//   title: // "Float32Array() - Creates a new Float32Array object.",
//   desc: `
// // const array = new Float32Array([1.0, 2.0, 3.0]);
// // console.log(array); // Output: Float32Array [1, 2, 3]
// // `},
// {
//   title: // "Float32Array.from() - Creates a new Float32Array object from an array-like or iterable object.",
//   desc: `
// // const arrayLike = { 0: 1.0, 1: 2.0, 2: 3.0, length: 3 };
// // const array = Float32Array.from(arrayLike);
// // console.log(array); // Output: Float32Array [1, 2, 3]
// // `},
// {
//   title: // "Float32Array.of() - Creates a new Float32Array object with a variable number of arguments.",
//   desc: `
// // const array = Float32Array.of(1.0, 2.0, 3.0);
// // console.log(array); // Output: Float32Array [1, 2, 3]
// // `},
// {
//   title: // "Float64Array() - Creates a new Float64Array object.",
//   desc: `
// // const array = new Float64Array([1.0, 2.0, 3.0]);
// // console.log(array); // Output: Float64Array [1, 2, 3]
// // `},
// {
//   title: // "Float64Array.from() - Creates a new Float64Array object from an array-like or iterable object.",
//   desc: `
// // const arrayLike = { 0: 1.0, 1: 2.0, 2: 3.0, length: 3 };
// // const array = Float


// // `},
// {
//   title: // "Float64Array.of() - Creates a new Float64Array object with a variable number of arguments.",
//   desc: `
// // const array = Float64Array.of(1.0, 2.0, 3.0);
// // console.log(array); // Output: Float64Array [1, 2, 3]
// // `},
// {
//   title: // "for...in statement - Iterates over the enumerable properties of an object, in arbitrary order.",
//   desc: `
// // const person = { firstName: 'John', lastName: 'Doe', age: 30 };
// // for (const property in person) {
// //   console.log(`${ property }: ${ person[property] } `);
// // }
// // // Output:
// // // firstName: John
// // // lastName: Doe
// // // age: 30
// // `},
// {
//   for...of statement - Iterates over iterable objects(including arrays, strings, maps, sets, etc.) and invokes a custom function
//     // for each iteration.`
//     // const array = [1, 2, 3];
//     // for (const element of array) {
//     //   console.log(element);
//     // }
//     // // Output:
//     // // 1
//     // // 2
//     // // 3
//     // `},{
//     title: // "Function() - Creates a new Function object.",
//     desc: `
// // const add = new Function('x', 'y', 'return x + y');
// // console.log(add(2, 3)); // Output: 5
// // `},
// {
//   Function.prototype.apply() - Calls a function with a given this value and arguments provided as an array(or an array - like
// // object).`
// // function greet(greeting) {
// //   console.log(`${greeting}, ${this.name}!`);
// // }
// // const person = { name: 'John' };
// // greet.apply(person, ['Hello']);
// // // Output: 'Hello, John!'
// // `},{Function.prototype.bind() - Creates a new function that, when called, has its this keyword set to the provided value and
// // arguments provided beforehand.`
// // function greet(greeting) {
// //   console.log(`${greeting}, ${this.name}!`);
// // }
// // const person = { name: 'John' };
// // const boundGreet = greet.bind(person, 'Hello');
// // boundGreet(); // Output: 'Hello, John!'
// // `},{
// title: // "Function.prototype.call() - Calls a function with a given this value and arguments provided individually.",
//     desc: `
// // function greet(greeting) {
// //   console.log(`${ greeting }, ${ this.name }!`);
// // }
// // const person = { name: 'John' };
// // greet.call(person, 'Hello');
// // // Output: 'Hello, John!'
// // `},
// {
//   title: // "Generator() - Creates a new Generator object.",
//   desc: `
// // function* generator() {
// //   yield 1;
// //   yield 2;
// //   yield 3;
// // }
// // const iterator = generator();
// // console.log(iterator.next().value); // Output: 1
// // console.log(iterator.next().value); // Output: 2
// // console.log(iterator.next().value); // Output: 3
// // `},
// {
//   title: // "Generator.prototype.next() - Advances the Generator object to the next yielded value.",
//   desc: `
// // function* generator() {
// //   yield 1;
// //   yield 2;
// //   yield 3;
// // }
// // const iterator = generator();
// // console.log(iterator.next().value); // Output: 1
// // console.log(iterator.next().value); // Output: 2
// // console.log(iterator.next().value); // Output: 3
// // `},
// {
//   title: // "Generator.prototype.return() - Ends the Generator object and returns a given value.",
//   desc: `
// // function* generator() {
// //   yield 1;
// //   yield 2;
// //   yield 3;
// // }
// // const iterator = generator();
// // console.log(iterator.next().value); //


// // `},
// {
//   Generator.prototype.throw() - Throws an exception at the location where the Generator function is paused, and returns the
//   // result of the next yield expression (or the end of the generator function, if there is no such expression).`
//   // function* generator() {
//   //   try {
//   //     yield 1;
//   //     yield 2;
//   //     throw new Error('Something went wrong.');
//   //     yield 3;
//   //   } catch (e) {
//   //     console.log(e.message);
//   //   }
//   // }
//   // const iterator = generator();
//   // console.log(iterator.next().value); // Output: 1
//   // console.log(iterator.next().value); // Output: 2
//   // console.log(iterator.throw(new Error('Error thrown.'))); // Output: 'Error thrown.'
//   // `},{
//   title: // "get keyword - Defines a getter method for an object property.",
//   desc: `
// // const person = {
// //   firstName: 'John',
// //   lastName: 'Doe',
// //   get fullName() {
// //     return `${ this.firstName } ${ this.lastName } `;
// //   }
// // };
// // console.log(person.fullName); // Output: 'John Doe'
// // `},
// {
//   hasOwnProperty() - Returns a Boolean indicating whether the object has the specified property as a direct property of that
//   // object and not inherited through the prototype chain.`
//   // const person = { firstName: 'John', lastName: 'Doe', age: 30 };
//   // console.log(person.hasOwnProperty('firstName')); // Output: true
//   // console.log(person.hasOwnProperty('toString')); // Output: false
//   // `},{if...else statement - Executes a block of code if a specified condition is true. If the condition is false, another block of
//   // code can be executed.`
//   // const a = 5;
//   // const b = 10;
//   // if (a > b) {
//   //   console.log('a is greater than b.');
//   // } else if (a < b) {
//   //   console.log('a is less than b.');
//   // } else {
//   //   console.log('a and b are equal.');
//   // }
//   // // Output: 'a is less than b.'
//   // `},{
//   title: // "includes() - Determines whether an array includes a certain value among its entries, returning true or false as appropriate.",
//   desc: `
// // const array = ['apple', 'banana', 'cherry'];
// // console.log(array.includes('banana')); // Output: true
// // console.log(array.includes('orange')); // Output: false
// // `},
// {
//   title: // "indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present.",
//   desc: `
// // const array = ['apple', 'banana', 'cherry'];
// // console.log(array.indexOf('banana')); // Output: 1
// // console.log(array.indexOf('orange')); // Output: -1
// // `},
// {
//   title: // "Int16Array() - Creates a new Int16Array object.",
//   desc: `
// // const array = new Int16Array([1, 2, 3]);
// // console.log(array); // Output: Int16Array [1, 2, 3]
// // `},
// {
//   title: // "Int16Array.from() - Creates a new Int16Array object from an array-like or iterable object.",
//   desc: `
// // const arrayLike = { 0: 1, 1: 2, 2: 3, length: 3 };
// // const array = Int16Array.from(arrayLike);
// // console.log(array); // Output: Int16Array [1, 2, 3]
// // `},
// {
//   title: // "Int16Array.of() - Creates a new Int16Array object with a variable number of arguments.",
//   desc: `
// // const array = Int16Array.of(1, 2, 3);
// // console.log(array); // Output: Int16Array [1, 2,


// // `},
// {
//   title: // "Int32Array() - Creates a new Int32Array object.",
//   desc: `
// // const array = new Int32Array([1, 2, 3]);
// // console.log(array); // Output: Int32Array [1, 2, 3]
// // `},
// {
//   title: // "Int32Array.from() - Creates a new Int32Array object from an array-like or iterable object.",
//   desc: `
// // const arrayLike = { 0: 1, 1: 2, 2: 3, length: 3 };
// // const array = Int32Array.from(arrayLike);
// // console.log(array); // Output: Int32Array [1, 2, 3]
// // `},
// {
//   title: // "Int32Array.of() - Creates a new Int32Array object with a variable number of arguments.",
//   desc: `
// // const array = Int32Array.of(1, 2, 3);
// // console.log(array); // Output: Int32Array [1, 2, 3]
// // `},
// {
//   title: // "Int8Array() - Creates a new Int8Array object.",
//   desc: `
// // const array = new Int8Array([1, 2, 3]);
// // console.log(array); // Output: Int8Array [1, 2, 3]
// // `},
// {
//   title: // "Int8Array.from() - Creates a new Int8Array object from an array-like or iterable object.",
//   desc: `
// // const arrayLike = { 0: 1, 1: 2, 2: 3, length: 3 };
// // const array = Int8Array.from(arrayLike);
// // console.log(array); // Output: Int8Array [1, 2, 3]
// // `},
// {
//   title: // "Int8Array.of() - Creates a new Int8Array object with a variable number of arguments.",
//   desc: `
// // const array = Int8Array.of(1, 2, 3);
// // console.log(array); // Output: Int8Array [1, 2, 3]
// // `},
// {
//   title: // "isArray() - Determines whether the passed value is an Array.",
//   desc: `
// // console.log(Array.isArray([1, 2, 3])); // Output: true
// // console.log(Array.isArray({ 0: 1, 1: 2, 2: 3, length: 3 })); // Output: false
// // `},
// {
//   title: // "isFinite() - Determines whether a value is a finite number.",
//   desc: `
// // console.log(isFinite(1)); // Output: true
// // console.log(isFinite(Infinity)); // Output: false
// // `},
// {
//   title: // "isNaN() - Determines whether a value is NaN (not a number).",
//   desc: `
// // console.log(isNaN(NaN)); // Output: true
// // console.log(isNaN(123)); // Output: false
// // `},
// {
//   title: // "JSON.parse() - Parses a JSON string and returns the parsed value.",
//   desc: `
// title: // const json = '{"name":"John","age":30,"city":"New York"},
// desc:;
// // const object = JSON.parse(json);
// // console.log(object.name); // Output: 'John'
// // `},
// {
//   title: // "JSON.stringify() - Converts a JavaScript object or value to a JSON string.",
//   desc: `
// // const object = { name: 'John', age: 30, city: 'New York' };
// // const json = JSON.stringify(object);
// title: // console.log(json); // Output: '{"name":"John","age":30,"city":"New York",
// desc:'
// // `},
// {
//   title: // "keys() - Returns an array containing the names of all of the given object's own enumerable string properties.",
//   desc: `
// // const person = { firstName: 'John', lastName: 'Doe', age: 30 };
// // const keys


// // `},
// {
//   title: // "lastIndexOf() - Returns the last index at which a given element can be found in the array, or -1 if it is not present.",
//   desc: `
// // const array = ['apple', 'banana', 'cherry', 'banana'];
// // console.log(array.lastIndexOf('banana')); // Output: 3
// // console.log(array.lastIndexOf('orange')); // Output: -1
// // `},
// {
//   title: // "length property - Sets or returns the number of elements in an array or the length of a string.",
//   desc: `
// // const array = ['apple', 'banana', 'cherry'];
// // console.log(array.length); // Output: 3
// // const string = 'Hello, world!';
// // console.log(string.length); // Output: 13
// // `},
// {
//   title: // "localeCompare() - Compares two strings in the current locale.",
//   desc: `
// // console.log('ä'.localeCompare('z')); // Output: -1
// // console.log('ä'.localeCompare('a')); // Output: 1
// // console.log('ä'.localeCompare('ä')); // Output: 0
// // `},
// {
//   title: // "map() - Creates a new array with the results of calling a provided function on every element in the calling array.",
//   desc: `
// // const array = [1, 2, 3];
// // const mappedArray = array.map(element => element * 2);
// // console.log(mappedArray); // Output: [2, 4, 6]
// // `},
// {
//   title: // "match() - Searches a string for a match against a regular expression, and returns the matches.",
//   desc: `
// // const string = 'The quick brown fox jumps over the lazy dog.';
// // const regex = /[A-Z]/g;
// // const matches = string.match(regex);
// // console.log(matches); // Output: ['T', 'J']
// // `},
// {
//   title: // "Math.abs() - Returns the absolute value of a number.",
//   desc: `
// // console.log(Math.abs(-1)); // Output: 1
// // console.log(Math.abs(2)); // Output: 2
// // `},
// {
//   title: // "Math.acos() - Returns the arccosine (in radians) of a number.",
//   desc: `
// // console.log(Math.acos(0.5)); // Output: 1.0471975511965979
// // console.log(Math.acos(1)); // Output: 0
// // `},
// {
//   title: // "Math.acosh() - Returns the hyperbolic arccosine of a number.",
//   desc: `
// // console.log(Math.acosh(1)); // Output: 0
// // console.log(Math.acosh(2)); // Output: 1.3169578969248166
// // `},
// {
//   title: // "Math.asin() - Returns the arcsine (in radians) of a number.",
//   desc: `
// // console.log(Math.asin(0.5)); // Output: 0.5235987755982989
// // console.log(Math.asin(1)); // Output: 1.5707963267948966
// // `},
// {
//   title: // "Math.asinh() - Returns the hyperbolic arcsine of a number.",
//   desc: `
// // console.log(Math.asinh(1)); // Output: 0.881373587019543
// // console.log(Math.asinh(2)); // Output: 1.4436354751788103
// // `},
// {
//   title: // "Math.atan() - Returns the arctangent (in radians) of a number.",
//   desc: `
// // console.log(Math.atan(1)); // Output: 0.7853981633974483
// // console.log(Math.atan(0)); // Output: 0
// // Math.atan2() - Returns the angle (in radians) from the X axis to a point specified by two coordinate values


// // `},
// {
//   title: // "Math.atanh() - Returns the hyperbolic arctangent of a number.",
//   desc: `
// // console.log(Math.atanh(0.5)); // Output: 0.5493061443340549
// // console.log(Math.atanh(0.9)); // Output: 1.4722194895832204
// // `},
// {
//   title: // "Math.cbrt() - Returns the cube root of a number.",
//   desc: `
// // console.log(Math.cbrt(8)); // Output: 2
// // console.log(Math.cbrt(27)); // Output: 3
// // `},
// {
//   title: // "Math.ceil() - Returns the smallest integer greater than or equal to a given number.",
//   desc: `
// // console.log(Math.ceil(1.2)); // Output: 2
// // console.log(Math.ceil(-1.2)); // Output: -1
// // `},
// {
//   title: // "Math.clz32() - Returns the number of leading zeros in the 32-bit binary representation of a number.",
//   desc: `
// // console.log(Math.clz32(1)); // Output: 31
// // console.log(Math.clz32(1000)); // Output: 22
// // `},
// {
//   title: // "Math.cos() - Returns the cosine of a number (in radians).",
//   desc: `
// // console.log(Math.cos(0)); // Output: 1
// // console.log(Math.cos(Math.PI)); // Output: -1
// // `},
// {
//   title: // "Math.cosh() - Returns the hyperbolic cosine of a number.",
//   desc: `
// // console.log(Math.cosh(0)); // Output: 1
// // console.log(Math.cosh(1)); // Output: 1.5430806348152437
// // `},
// {
//   title: // "Math.E - Returns Euler's number (approximately 2.718).",
//   desc: `
// // console.log(Math.E); // Output: 2.718281828459045
// // `},
// {
//   title: // "Math.exp() - Returns the value of Euler's number raised to the power of a number.",
//   desc: `
// // console.log(Math.exp(1)); // Output: 2.718281828459045
// // console.log(Math.exp(2)); // Output: 7.38905609893065
// // `},
// {
//   title: // "Math.floor() - Returns the largest integer less than or equal to a given number.",
//   desc: `
// // console.log(Math.floor(1.2)); // Output: 1
// // console.log(Math.floor(-1.2)); // Output: -2
// // `},
// {
//   title: // "Math.fround() - Returns the nearest single precision float representation of a number.",
//   desc: `
// // console.log(Math.fround(1.2345)); // Output: 1.2345000505447388
// // console.log(Math.fround(1.5)); // Output: 1.5
// // `},
// {
//   title: // "Math.hypot() - Returns the square root of the sum of squares of its arguments.",
//   desc: `
// // console.log(Math.hypot(3, 4)); // Output: 5
// // console.log(Math.hypot(1, 2, 3)); // Output: 3.7416573867739413
// // `},
// {
//   title: // "Math.imul() - Returns the result of a 32-bit integer multiplication.",
//   desc: `
// // console.log(Math.imul(2, 3)); // Output: 6
// // console.log(Math.imul(-1, 8)); // Output: -8
// // `},
// {
//   title: // "Math.LN10 - Returns the natural logarithm of 10 (approximately 2.303).",
//   desc: `
// // console.log(Math.LN10); // Output: 2.302585092994046


// // `},
// {
//   title: // "Math.LN2 - Returns the natural logarithm of 2 (approximately 0.693).",
//   desc: `
// // console.log(Math.LN2); // Output: 0.6931471805599453
// // `},
// {
//   title: // "Math.log() - Returns the natural logarithm of a number.",
//   desc: `
// // console.log(Math.log(Math.E)); // Output: 1
// // console.log(Math.log(10)); // Output: 2.302585092994046
// // `},
// {
//   title: // "Math.log10() - Returns the base 10 logarithm of a number.",
//   desc: `
// // console.log(Math.log10(100)); // Output: 2
// // console.log(Math.log10(1000)); // Output: 3
// // `},
// {
//   title: // "Math.log2() - Returns the base 2 logarithm of a number.",
//   desc: `
// // console.log(Math.log2(8)); // Output: 3
// // console.log(Math.log2(16)); // Output: 4
// // `},
// {
//   title: // "Math.max() - Returns the largest of zero or more numbers.",
//   desc: `
// // console.log(Math.max(1, 2, 3)); // Output: 3
// // console.log(Math.max(-1, -2, -3)); // Output: -1
// // `},
// {
//   title: // "Math.min() - Returns the smallest of zero or more numbers.",
//   desc: `
// // console.log(Math.min(1, 2, 3)); // Output: 1
// // console.log(Math.min(-1, -2, -3)); // Output: -3
// // `},
// {
//   title: // "Math.PI - Returns the value of pi (approximately 3.14159).",
//   desc: `
// // console.log(Math.PI); // Output: 3.141592653589793
// // `},
// {
//   title: // "Math.pow() - Returns the base to the exponent power.",
//   desc: `
// // console.log(Math.pow(2, 3)); // Output: 8
// // console.log(Math.pow(3, 2)); // Output: 9
// // `},
// {
//   title: // "Math.random() - Returns a random number between 0 (inclusive) and 1 (exclusive).",
//   desc: `
// // console.log(Math.random()); // Output: a random number between 0 and 1
// // `},
// {
//   title: // "Math.round() - Returns the value of a number rounded to the nearest integer.",
//   desc: `
// // console.log(Math.round(1.2)); // Output: 1
// // console.log(Math.round(1.5)); // Output: 2
// // `},
// {
//   title: // "Math.sin() - Returns the sine of a number (in radians).",
//   desc: `
// // console.log(Math.sin(0)); // Output: 0
// // console.log(Math.sin(Math.PI)); // Output: 1.2246467991473532e-16
// // `},
// {
//   title: // "Math.sinh() - Returns the hyperbolic sine of a number.",
//   desc: `
// // console.log(Math.sinh(0)); // Output: 0
// // console.log(Math.sinh(1)); // Output: 1.1752011936438014
// // `},
// {
//   title: // "Math.sqrt() - Returns the positive square root of a number.",
//   desc: `
// // console.log(Math.sqrt(4)); // Output: 2
// // console.log(Math.sqrt(9)); // Output: 3
// // `},
// {
//   title: // "Math.tan() - Returns the tangent of a number (in radians).",
//   desc: `
// // console.log(Math.tan(0)); // Output: 0
// // console.log(Math.tan(Math.PI / 4)); // Output: 0.9999999999999999
// // Math.tanh() - Returns the


// // `},
// {
//   title: // "Math.tanh() - Returns the hyperbolic tangent of a number.",
//   desc: `
// // console.log(Math.tanh(0)); // Output: 0
// // console.log(Math.tanh(1)); // Output: 0.7615941559557649
// // `},
// {
//   title: // "Math.trunc() - Returns the integer part of a number by removing any fractional digits.",
//   desc: `
// // console.log(Math.trunc(1.2)); // Output: 1
// // console.log(Math.trunc(-1.2)); // Output: -1
// // `},
// {
//   title: // "Number() - Converts an object's value to a number.",
//   desc: `
// // console.log(Number(true)); // Output: 1
// // console.log(Number('42')); // Output: 42
// // `},
// {
//   title: // "Number.EPSILON - Represents the difference between 1 and the smallest value greater than 1 that can be represented as a number.",
//   desc: `
// // console.log(Number.EPSILON); // Output: 2.220446049250313e-16
// // `},
// {
//   title: // "Number.isFinite() - Determines whether the passed value is a finite number.",
//   desc: `
// // console.log(Number.isFinite(1)); // Output: true
// // console.log(Number.isFinite('42')); // Output: false
// // `},
// {
//   title: // "Number.isInteger() - Determines whether the passed value is an integer.",
//   desc: `
// // console.log(Number.isInteger(1)); // Output: true
// // console.log(Number.isInteger(1.2)); // Output: false
// // `},
// {
//   title: // "Number.isNaN() - Determines whether the passed value is NaN.",
//   desc: `
// // console.log(Number.isNaN(1)); // Output: false
// // console.log(Number.isNaN(NaN)); // Output: true
// // `},
// {
//   title: // "Number.isSafeInteger() - Determines whether the passed value is a safe integer.",
//   desc: `
// // console.log(Number.isSafeInteger(1)); // Output: true
// // console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)); // Output: false
// // `},
// {
//   title: // "Number.MAX_SAFE_INTEGER - Represents the maximum safe integer in JavaScript (2^53 - 1).",
//   desc: `
// // console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991
// // `},
// {
//   title: // "Number.MAX_VALUE - Represents the maximum numeric value representable in JavaScript.",
//   desc: `
// // console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308
// // `},
// {
//   title: // "Number.MIN_SAFE_INTEGER - Represents the minimum safe integer in JavaScript (-2^53 + 1).",
//   desc: `
// // console.log(Number.MIN_SAFE_INTEGER); // Output: -9007199254740991
// // `},
// {
//   title: // "Number.MIN_VALUE - Represents the smallest positive numeric value representable in JavaScript.",
//   desc: `
// // console.log(Number.MIN_VALUE); // Output: 5e-324
// // `},
// {
//   title: // "Number.parseFloat() - Parses a string argument and returns a floating point number.",
//   desc: `
// // console.log(Number.parseFloat('3.14')); // Output: 3.14
// // console.log(Number.parseFloat('2e2')); // Output: 200
// // `},
// {
//   title: // "Number.parseInt() - Parses a string argument and returns an integer.",
//   desc: `
// // console.log(Number.parseInt('42')); // Output: 42
// // console.log(Number.parseInt('1010', 2)); // Output: 10
// // `},
// {
//   title: // "Object.assign() - Copies the values of all enumerable properties from one or more source objects to a target object.",
//   desc: `
// // const target = { a: 1, b: 2 };
// // const source = { b:


// // `},
// {
//   title: // "Object.assign() - Copies the values of all enumerable properties from one or more source objects to a target object.",
//   desc: `
// // const target = { a: 1, b: 2 };
// // const source = { b: 3, c: 4 };
// // Object.assign(target, source);
// // console.log(target); // Output: {a: 1, b: 3, c: 4}
// // `},
// {
//   title: // "Object.create() - Creates a new object with the specified prototype object and properties.",
//   desc: `
// // const person = {
// //   sayHello() {
// //     console.log(`Hello, my name is ${ this.name }.`);
// //   }
// // };
// // const john = Object.create(person);
// // john.name = 'John';
// // john.sayHello(); // Output: "Hello, my name is John."
// // `},
// {
//   title: // "Object.defineProperties() - Defines new or modifies existing properties directly on an object, returning the object.",
//   desc: `
// // const obj = {};
// // Object.defineProperties(obj, {
// //   property1: {
// //     value: 42,
// //     writable: false
// //   },
// //   property2: {}
// // });
// // console.log(obj.property1); // Output: 42
// // `},
// {
//   Object.defineProperty() - Defines a new property directly on an object, or modifies an existing property on an object, and
//   // returns the object.`
//   // const obj = {};
//   // Object.defineProperty(obj, 'property1', {
//   //   value: 42,
//   //   writable: false
//   // });
//   // console.log(obj.property1); // Output: 42
//   // `},{
//   title: // "Object.entries() - Returns an array of a given object's own enumerable property [key, value] pairs.",
//   desc: `
// // const obj = { a: 1, b: 2, c: 3 };
// // console.log(Object.entries(obj)); // Output: [['a', 1], ['b', 2], ['c', 3]]
// // `},
// {
//   Object.freeze() - Freezes an object, preventing new properties from being added to it and preventing existing properties from
//   // being removed or changed.`
//   // const obj = { a: 1 };
//   // Object.freeze(obj);
//   // obj.a = 2;
//   // console.log(obj.a); // Output: 1
//   // `},{Object.fromEntries() - Returns a new object from an iterable of [key, value] pairs (such as an array), where each pair is used
//   // to create an own enumerable property of the object.`
//   // const arr = [['a', 1], ['b', 2], ['c', 3]];
//   // console.log(Object.fromEntries(arr)); // Output: {a: 1, b: 2, c: 3}
//   // `},{
//   title: // "Object.getOwnPropertyDescriptor() - Returns an object describing the configuration of a specific property on an object.",
//   desc: `
// // const obj = { a: 1 };
// // const descriptor = Object.getOwnPropertyDescriptor(obj, 'a');
// // console.log(descriptor.value); // Output: 1
// // console.log(descriptor.writable); // Output: true
// // `},
// {
//   title: // "Object.getOwnPropertyDescriptors() - Returns an object containing all own property descriptors for an object.",
//   desc: `
// // const obj = { a: 1 };
// // const descriptors = Object.getOwnPropertyDescriptors(obj);
// // console.log(descriptors.a.value); // Output: 1
// // console.log(descriptors.a.writable); // Output: true
// // `},
// {
//   title: // "Object.getOwnPropertyNames() - Returns an array of all property names (including non-enumerable properties) of a given object.",
//   desc: `
// // const obj = { a: 1, b: 2 };
// // console.log(Object.getOwnPropertyNames(obj)); // Output: ['a', 'b']
// // `Object.getOwnPropertySymbols


//   // `},{Object.getOwnPropertySymbols() - Returns an array of all symbol properties (including non-enumerable properties) of a given
//   // object.`
//   // const obj = {
//   //   [Symbol('a')]: 1,
//   //   [Symbol.for('b')]: 2
//   // };
//   // console.log(Object.getOwnPropertySymbols(obj)); // Output: [Symbol(a), Symbol(b)]
//   // `},{
//   title: // "Object.getPrototypeOf() - Returns the prototype (i.e., the value of the internal [[Prototype]] property) of a specified object.",
//   desc: `
// // const obj = {};
// // console.log(Object.getPrototypeOf(obj) === Object.prototype); // Output: true
// // `},
// {
//   title: // "Object.is() - Determines whether two values are the same value.",
//   desc: `
// // console.log(Object.is(1, 1)); // Output: true
// // console.log(Object.is(NaN, NaN)); // Output: true
// // console.log(Object.is(0, -0)); // Output: false
// // `},
// {
//   title: // "Object.isExtensible() - Determines if an object is extensible (i.e., whether new properties can be added to it).",
//   desc: `
// // const obj = {};
// // console.log(Object.isExtensible(obj)); // Output: true
// // Object.preventExtensions(obj);
// // console.log(Object.isExtensible(obj)); // Output: false
// // `},
// {
//   Object.isFrozen() - Determines if an object is frozen(i.e., whether new properties can be added to it and existing properties
// // can be removed or changed).`
// // const obj = { a: 1 };
// // console.log(Object.isFrozen(obj)); // Output: false
// // Object.freeze(obj);
// // console.log(Object.isFrozen(obj)); // Output: true
// // `},{Object.isSealed() - Determines if an object is sealed (i.e., whether new properties can be added to it and existing properties
// // can be removed).`
// // const obj = { a: 1 };
// // console.log(Object.isSealed(obj)); // Output: false
// // Object.seal(obj);
// // console.log(Object.isSealed(obj)); // Output: true
// // `},{
// title: // "Object.keys() - Returns an array of a given object's own enumerable property names.",
//     desc: `
// // const obj = { a: 1, b: 2 };
// // console.log(Object.keys(obj)); // Output: ['a', 'b']
// // `},
// {
//   title: // "Object.preventExtensions() - Prevents new properties from being added to an object.",
//   desc: `
// // const obj = { a: 1 };
// // Object.preventExtensions(obj);
// // obj.b = 2;
// // console.log(obj.b); // Output: undefined
// // `},
// {
//   title: // "Object.seal() - Prevents new properties from being added to an object and marks all existing properties as non-configurable.",
//   desc: `
// // const obj = { a: 1 };
// // Object.seal(obj);
// // delete obj.a;
// // console.log(obj.a); // Output: 1
// // `},
// {
//   Object.setPrototypeOf() - Sets the prototype(i.e., the value of the internal[[Prototype]] property) of a specified object to
//   // another object or null.`
//   // const obj1 = {};
//   // const obj2 = { a: 1 };
//   // Object.setPrototypeOf(obj1, obj2);
//   // console.log(obj1.a); // Output: 1
//   // `},{
//   title: // "Promise() - Creates a new Promise object.",
//   desc: `
// // const promise = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     resolve('done');
// //   }, 1000);
// // });
// // promise.then((value) => {
// //   console.log(value); // Output: "done"
// // });
// // Promise.all() - Returns a promise that resolves when all of the


// // `},
// {
//   Promise.all() - Returns a promise that resolves when all of the promises in the iterable argument have resolved or rejects with
// // the reason of the first promise that rejects.`
// // const promise1 = Promise.resolve(1);
// // const promise2 = Promise.resolve(2);
// // const promise3 = Promise.reject('Error');
// // Promise.all([promise1, promise2, promise3]).then((values) => {
// //   console.log(values); // Output: Uncaught (in promise) Error
// // }).catch((reason) => {
// //   console.log(reason); // Output: "Error"
// // });
// // `},{Promise.allSettled() - Returns a promise that resolves with an array of objects that each represent the outcome of each promise
// // in the iterable argument, whether fulfilled or rejected.`
// // const promise1 = Promise.resolve(1);
// // const promise2 = Promise.reject('Error');
// // Promise.allSettled([promise1, promise2]).then((results) => {
// //   console.log(results); // Output: [{status: "fulfilled", value: 1},
// {status: "rejected", reason: "Error"}]
// // });
// // `},{Promise.any() - Returns a promise that resolves with the value of the first promise in the iterable argument to fulfill, or
// // rejects with an AggregateError object if all of the promises reject.`
// // const promise1 = Promise.reject('Error 1');
// // const promise2 = Promise.resolve('done');
// // const promise3 = Promise.reject('Error 2');
// // Promise.any([promise1, promise2, promise3]).then((value) => {
// //   console.log(value); // Output: "done"
// // }).catch((error) => {
// //   console.log(error); // Output: AggregateError: All promises were rejected
// // });
// // `},{Promise.prototype.catch() - Appends a rejection handler to the promise, returning a new promise that is resolved with the
// // handler's return value (or the original rejected value if the handler returns nothing).`
// // const promise = Promise.reject('Error');
// // promise.catch((reason) => {
// //   console.log(reason); // Output: "Error"
// // });
// // `},{Promise.prototype.finally() - Appends a handler to the promise that is called regardless of whether the promise is resolved or
// // rejected, returning a new promise with the same settled value as the original promise.`
// // const promise = Promise.resolve('done');
// // promise.finally(() => {
// //   console.log('finally'); // Output: "finally"
// // }).then((value) => {
// //   console.log(value); // Output: "done"
// // });
// // `},{
// title: // "RegExp() - Creates a new regular expression object.",
//     desc: `
// // const regex = new RegExp('abc');
// // console.log(regex.test('abc')); // Output: true
// // `},
// {
//   RegExp.prototype.exec() - Executes a search for a match in a string and returns an array of information about the match, or
//   // null if no match was found.`
//   // const regex = /(\d+)/g;
//   // const str = '1 apples, 2 bananas, and 3 oranges';
//   // let match;
//   // while ((match = regex.exec(str)) !== null) {
//   //   console.log(match[1]); // Output: "1", "2", "3"
//   // }
//   // `},{
//   title: // "RegExp.prototype.test() - Tests for a match in a string and returns true or false.",
//   desc: `
// // const regex = /apple/;
// // console.log(regex.test('I like apples')); // Output: true
// // console.log(regex.test('I like bananas')); // Output: false
// // `},
// {
//   title: // "Set() - Creates a new Set object.",
//   desc: `
// // const set =


// // `},
// {
//   title: // "Set() - Creates a new Set object.",
//   desc: `
// // const set = new Set([1, 2, 3]);
// // set.add(4);
// // console.log(set); // Output: Set(4) {1, 2, 3, 4}
// // `},
// {
//   title: // "Set.prototype.add() - Appends a new element with a specified value to the end of a Set object, returning the Set object.",
//   desc: `
// // const set = new Set([1, 2, 3]);
// // set.add(4);
// // console.log(set); // Output: Set(4) {1, 2, 3, 4}
// // `},
// {
//   title: // "Set.prototype.clear() - Removes all elements from a Set object.",
//   desc: `
// // const set = new Set([1, 2, 3]);
// // set.clear();
// // console.log(set); // Output: Set(0) {}
// // `},
// {
//   title: // "Set.prototype.delete() - Removes the specified element from a Set object, returning true if the element was removed",
//   desc:
//   // successfully, otherwise fals

//   // `
//   // const set = new Set([1, 2, 3]);
//   // set.delete(2);
//   // console.log(set); // Output: Set(2) {1, 3}
//   // `},{
//   title: // "Set.prototype.entries() - Returns a new iterator object that contains an array of [value, value] for each element in a Set",
//   desc:
//   // object, in insertion orde

//   // `
//   // const set = new Set([1, 2, 3]);
//   // for (const [key, value] of set.entries()) {
//   //   console.log(key, value); // Output: 1 1, 2 2, 3 3
//   // }
//   // `},{
//   title: // "Set.prototype.forEach() - Calls a provided function once for each element in a Set object, in insertion order.",
//   desc: `
// // const set = new Set([1, 2, 3]);
// // set.forEach((value) => {
// //   console.log(value); // Output: 1, 2, 3
// // });
// // `},
// {
//   title: // "Set.prototype.has() - Returns a boolean indicating whether an element with the specified value exists in a Set object or not.",
//   desc: `
// // const set = new Set([1, 2, 3]);
// // console.log(set.has(2)); // Output: true
// // console.log(set.has(4)); // Output: false
// // `},
// {
//   title: // "Set.prototype.keys() - Returns a new iterator object that contains the values for each element in a Set object, in insertion",
//   desc:
//   // orde

//   // `
//   // const set = new Set([1, 2, 3]);
//   // for (const key of set.keys()) {
//   //   console.log(key); // Output: 1, 2, 3
//   // }
//   // `},{
//   title: // "Set.prototype.values() - Returns a new iterator object that contains the values for each element in a Set object, in insertion",
//   desc:
//   // orde

//   // `
//   // const set = new Set([1, 2, 3]);
//   // for (const value of set.values()) {
//   //   console.log(value); // Output: 1, 2, 3
//   // }
//   // `},{
//   title: // "String() - Converts a value to a string.",
//   desc: `
// // const str = String(123);
// // console.log(typeof str); // Output: "string"
// // `},
// {
//   title: // "String.fromCharCode() - Returns a string created by using the specified sequence of Unicode values.",
//   desc: `
// // const str = String.fromCharCode(97, 98, 99);
// // console.log(str); // Output: "abc"
// // `String.prototype.charAt


//   // `},{
//   title: // "String.prototype.charAt() - Returns the character at the specified index in a string.",
//   desc: `
// // const str = 'hello';
// // console.log(str.charAt(1)); // Output: "e"
// // `},
// {
//   title: // "String.prototype.charCodeAt() - Returns the Unicode value of the character at the specified index in a string.",
//   desc: `
// // const str = 'hello';
// // console.log(str.charCodeAt(1)); // Output: 101
// // `},
// {
//   title: // "String.prototype.codePointAt() - Returns a non-negative integer that is the Unicode code point value of the character at the",
//   desc:
//   // specified position in a strin

//   // `
//   // const str = '𠮷';
//   // console.log(str.codePointAt(0)); // Output: 134071
//   // `},{
//   title: // "String.prototype.concat() - Concatenates two or more strings and returns a new string.",
//   desc: `
// // const str1 = 'hello';
// // const str2 = 'world';
// // console.log(str1.concat(' ', str2)); // Output: "hello world"
// // `},
// {
//   title: // "String.prototype.endsWith() - Determines whether a string ends with the characters of another string.",
//   desc: `
// // const str = 'hello world';
// // console.log(str.endsWith('world')); // Output: true
// // `},
// {
//   title: // "String.prototype.includes() - Determines whether one string may be found within another string.",
//   desc: `
// // const str = 'hello world';
// // console.log(str.includes('world')); // Output: true
// // `},
// {
//   title: // "String.prototype.indexOf() - Returns the index within a string of the first occurrence of a specified value, or -1 if not found.",
//   desc: `
// // const str = 'hello world';
// // console.log(str.indexOf('world')); // Output: 6
// // `},
// {
//   title: // "String.prototype.lastIndexOf() - Returns the index within a string of the last occurrence of a specified value, or -1 if not",
//   desc:
//   // foun

//   // `
//   // const str = 'hello world';
//   // console.log(str.lastIndexOf('o')); // Output: 7
//   // `},{
//   title: // "String.prototype.localeCompare() - Compares two strings in the current locale.",
//   desc: `
// // const str1 = 'apple';
// // const str2 = 'banana';
// // console.log(str1.localeCompare(str2)); // Output: -1
// // `},
// {
//   title: // "String.prototype.match() - Searches a string for a match against a regular expression and returns an array of information about",
//   desc:
//   // the match, or null if no match was foun

//   // `
//   // const str = 'The quick brown fox jumps over the lazy dog';
//   // const regex = /[A-Z]/g;
//   // console.log(str.match(regex)); // Output: ["T", "T"]
//   // `},{
//   title: // "String.prototype.matchAll() - Returns an iterator of all matches of a regular expression in a string.",
//   desc: `
// // const str = 'The quick brown fox jumps over the lazy dog';
// // const regex = /[A-Z]/g;
// // const matches = str.matchAll(regex);
// // for (const match of matches) {
// //   console.log(match[0]); // Output: "T", "T"
// // }
// // `},
// {
//   title: // "String.prototype.normalize() - Returns a Unicode Normalization Form of a given string.",
//   desc: `
// // const str = '\u1E9B\u0323';
// // console.log(str.normalize()); // Output: "ẛ̣"
// // `},
// {
//   title: // "String.prototype.padEnd() - Pads the end of a string with a specified string until the resulting string reaches a specified",
//   desc:
//   // lengt

//   // `
//   // const str = 'hello';
//   // console.log(str.padEnd(10, '.')); // Output: "hello....."
//   // String.prototype.padStart() - Pads the beginning of a string with a specified


//   // `},{
//   title: // "String.prototype.padStart() - Pads the beginning of a string with a specified string until the resulting string reaches a",
//   desc:
//   // specified lengt

//   // `
//   // const str = 'hello';
//   // console.log(str.padStart(10, '.')); // Output: ".....hello"
//   // `},{
//   title: // "String.prototype.repeat() - Returns a new string with a specified number of copies of an existing string.",
//   desc: `
// // const str = 'hello';
// // console.log(str.repeat(3)); // Output: "hellohellohello"
// // `},
// {
//   title: // "String.prototype.replace() - Searches a string for a specified value or regular expression and returns a new string where the",
//   desc:
//   // specified values are replace

//   // `
//   // const str = 'Hello, World!';
//   // console.log(str.replace('Hello', 'Hi')); // Output: "Hi, World!"
//   // `},{
//   title: // "String.prototype.replaceAll() - Replaces all occurrences of a specified value or regular expression with a new string.",
//   desc: `
// // const str = 'Hello, World!';
// // console.log(str.replaceAll('l', 'z')); // Output: "Hezzo, Worzd!"
// // `},
// {
//   title: // "String.prototype.search() - Searches a string for a specified value or regular expression and returns the position of the",
//   desc:
//   // match, or -1 if not foun

//   // `
//   // const str = 'The quick brown fox jumps over the lazy dog';
//   // console.log(str.search('fox')); // Output: 16
//   // `},{
//   title: // "String.prototype.slice() - Extracts a section of a string and returns a new string.",
//   desc: `
// // const str = 'The quick brown fox';
// // console.log(str.slice(4, 9)); // Output: "quick"
// // `},
// {
//   title: // "String.prototype.split() - Splits a string into an array of substrings based on a specified separator.",
//   desc: `
// // const str = 'The quick brown fox';
// // console.log(str.split(' ')); // Output: ["The", "quick", "brown", "fox"]
// // `},
// {
//   title: // "String.prototype.startsWith() - Determines whether a string starts with the characters of another string.",
//   desc: `
// // const str = 'hello world';
// // console.log(str.startsWith('hello')); // Output: true
// // `},
// {
//   title: // "String.prototype.substring() - Returns the part of a string between two indexes, or to the end of the string.",
//   desc: `
// // const str = 'The quick brown fox';
// // console.log(str.substring(4, 9)); // Output: "quick"
// // `},
// {
//   title: // "String.prototype.toLocaleLowerCase() - Returns a string converted to lowercase according to the current locale.",
//   desc: `
// // const str = 'HELLO WORLD';
// // console.log(str.toLocaleLowerCase()); // Output: "hello world"
// // `},
// {
//   title: // "String.prototype.toLocaleUpperCase() - Returns a string converted to uppercase according to the current locale.",
//   desc: `
// // const str = 'hello world';
// // console.log(str.toLocaleUpperCase()); // Output: "HELLO WORLD"
// // `},
// {
//   title: // "String.prototype.toLowerCase() - Returns a string converted to lowercase.",
//   desc: `
// // const str = 'HELLO WORLD';
// // console.log(str.toLowerCase()); // Output: "hello world"
// // `},
// {
//   title: // "String.prototype.toString() - Returns a string representing the specified object.",
//   desc: `
// // const obj = {x: 1, y: 2};
// // console.log(obj.toString()); // Output: "[object Object]"
// // `},
// {
//   title: // "String.prototype.toUpperCase() - Returns a string converted to uppercase.",
//   desc: `
// // const str = 'hello world';
// // console.log(str.toUpperCase()); // Output: "HELLO WORLD"
// // `},
// {
//   title: // "String.prototype.trim() - Removes whitespace from both ends of a string.",
//   desc: `
// // const str = '   hello world   ';
// // console.log


// // `},
// {
//   title: // "String.prototype.trim() - Removes whitespace from both ends of a string.",
//   desc: `
// // const str = '   hello world   ';
// // console.log(str.trim()); // Output: "hello world"
// // `},
// {
//   title: // "String.prototype.trimEnd() - Removes whitespace from the end of a string.",
//   desc: `
// // const str = '   hello world   ';
// // console.log(str.trimEnd()); // Output: "   hello world"
// // `},
// {
//   title: // "String.prototype.trimStart() - Removes whitespace from the beginning of a string.",
//   desc: `
// // const str = '   hello world   ';
// // console.log(str.trimStart()); // Output: "hello world   "
// // `},
// {
//   title: // "String.prototype.valueOf() - Returns the primitive value of a String object.",
//   desc: `
// // const str = new String('hello world');
// // console.log(str.valueOf()); // Output: "hello world"
// // `},
// {
//   title: // "Symbol() - Creates a new unique symbol value.",
//   desc: `
// // const sym1 = Symbol('foo');
// // const sym2 = Symbol('foo');
// // console.log(sym1 === sym2); // Output: false
// // `},
// {
//   title: // "Symbol.for() - Returns a symbol key from the global symbol registry if it exists, otherwise creates a new symbol and returns it.",
//   desc: `
// // const sym1 = Symbol.for('foo');
// // const sym2 = Symbol.for('foo');
// // console.log(sym1 === sym2); // Output: true
// // `},
// {
//   title: // "Symbol.prototype.description - Returns a string representing the description of a symbol.",
//   desc: `
// // const sym = Symbol('foo');
// // console.log(sym.description); // Output: "foo"
// // `},
// {
//   title: // "Symbol.prototype.toString() - Returns a string representing the Symbol object.",
//   desc: `
// // const sym = Symbol('foo');
// // console.log(sym.toString()); // Output: "Symbol(foo)"
// // `},
// {
//   title: // "TypedArray.from() - Creates a new typed array from an array-like or iterable object.",
//   desc: `
// // const arr = [1, 2, 3];
// // const typedArr = Uint8Array.from(arr);
// // console.log(typedArr); // Output: Uint8Array(3) [1, 2, 3]
// // `},
// {
//   title: // "TypedArray.of() - Creates a new typed array with a variable number of arguments.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2, 3);
// // console.log(typedArr); // Output: Uint8Array(3) [1, 2, 3]
// // `},
// {
//   title: // "TypedArray.prototype.copyWithin() - Copies a sequence of array elements within the typed array.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2, 3, 4, 5);
// // typedArr.copyWithin(2, 0, 2);
// // console.log(typedArr); // Output: Uint8Array(5) [1, 2, 1, 2, 5]
// // `},
// {
//   title: // "TypedArray.prototype.entries() - Returns a new iterator object that contains the key/value pairs for each index in the typed",
//   desc:
//   // arra

//   // `
//   // const typedArr = Uint8Array.of(1, 2, 3);
//   // for (const [index, value] of typedArr.entries()) {
//   //   console.log(index, value); // Output: 0 1, 1 2, 2 3
//   // }
//   // `},{
//   title: // "TypedArray.prototype.every() - Determines whether all elements in a typed array satisfy a provided function.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2, 3);
// // console.log(typedArr.every((value) => value > 0)); //


// // `},
// {
//   title: // "TypedArray.prototype.every() - Determines whether all elements in a typed array satisfy a provided function.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2, 3);
// // console.log(typedArr.every((value) => value > 0)); // Output: true
// // `},
// {
//   title: // "TypedArray.prototype.fill() - Fills all the elements of a typed array with a static value.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2, 3);
// // typedArr.fill(0);
// // console.log(typedArr); // Output: Uint8Array(3) [0, 0, 0]
// // `},
// {
//   title: // "TypedArray.prototype.filter() - Creates a new typed array with all elements that pass the test implemented by the provided",
//   desc:
//   // functio

//   // `
//   // const typedArr = Uint8Array.of(1, 2, 3);
//   // const filteredArr = typedArr.filter((value) => value > 1);
//   // console.log(filteredArr); // Output: Uint8Array(2) [2, 3]
//   // `},{
//   title: // "TypedArray.prototype.find() - Returns the value of the first element in a typed array that satisfies the provided testing",
//   desc:
//   // functio

//   // `
//   // const typedArr = Uint8Array.of(1, 2, 3);
//   // console.log(typedArr.find((value) => value > 1)); // Output: 2
//   // `},{
//   title: // "TypedArray.prototype.findIndex() - Returns the index of the first element in a typed array that satisfies the provided testing",
//   desc:
//   // function, or -1 if not foun

//   // `
//   // const typedArr = Uint8Array.of(1, 2, 3);
//   // console.log(typedArr.findIndex((value) => value > 1)); // Output: 1
//   // `},{
//   title: // "TypedArray.prototype.forEach() - Calls a function for each element in a typed array.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2, 3);
// // typedArr.forEach((value) => console.log(value)); // Output: 1, 2, 3
// // `},
// {
//   title: // "TypedArray.prototype.includes() - Determines whether a typed array includes a certain value.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2, 3);
// // console.log(typedArr.includes(2)); // Output: true
// // `},
// {
//   title: // "TypedArray.prototype.indexOf() - Returns the index of the first occurrence of a value in a typed array, or -1 if not found.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2, 3);
// // console.log(typedArr.indexOf(2)); // Output: 1
// // `},
// {
//   title: // "TypedArray.prototype.join() - Converts all elements in a typed array to a string, separated by a specified separator string.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2, 3);
// // console.log(typedArr.join('-')); // Output: "1-2-3"
// // `},
// {
//   title: // "TypedArray.prototype.keys() - Returns a new iterator object that contains the keys for each index in the typed array.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2, 3);
// // for (const index of typedArr.keys()) {
// //   console.log(index); // Output: 0, 1, 2
// // }
// // `},
// {
//   title: // "TypedArray.prototype.lastIndexOf() - Returns the index of the last occurrence of a value in a typed array, or -1 if not found.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2,


// // `},
// {
//   title: // "TypedArray.prototype.lastIndexOf() - Returns the index of the last occurrence of a value in a typed array, or -1 if not found.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2, 3);
// // console.log(typedArr.lastIndexOf(2)); // Output: 1
// // `},
// {
//   title: // "TypedArray.prototype.map() - Creates a new typed array with the results of calling a provided function on every element in the",
//   desc:
//   // typed arra

//   // `
//   // const typedArr = Uint8Array.of(1, 2, 3);
//   // const mappedArr = typedArr.map((value) => value * 2);
//   // console.log(mappedArr); // Output: Uint8Array(3) [2, 4, 6]
//   // `},{
//   title: // "TypedArray.prototype.reduce() - Applies a function against an accumulator and each value in the typed array to reduce it to a",
//   desc:
//   // single valu

//   // `
//   // const typedArr = Uint8Array.of(1, 2, 3);
//   // const sum = typedArr.reduce((accumulator, value) => accumulator + value, 0);
//   // console.log(sum); // Output: 6
//   // `},{
//   title: // "TypedArray.prototype.reduceRight() - Applies a function against an accumulator and each value in the typed array from right to",
//   desc:
//   // left to reduce it to a single valu

//   // `
//   // const typedArr = Uint8Array.of(1, 2, 3);
//   // const sum = typedArr.reduceRight((accumulator, value) => accumulator + value, 0);
//   // console.log(sum); // Output: 6
//   // `},{
//   title: // "TypedArray.prototype.reverse() - Reverses the order of the elements in a typed array.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2, 3);
// // typedArr.reverse();
// // console.log(typedArr); // Output: Uint8Array(3) [3, 2, 1]
// // `},
// {
//   title: // "TypedArray.prototype.set() - Sets a portion of a typed array to another typed array, array-like object, or iterable object.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2, 3);
// // const otherTypedArr = Uint8Array.of(4, 5, 6);
// // typedArr.set(otherTypedArr, 1);
// // console.log(typedArr); // Output: Uint8Array(3) [1, 4, 5]
// // `},
// {
//   title: // "TypedArray.prototype.slice() - Extracts a section of a typed array and returns a new typed array.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2, 3);
// // const slicedArr = typedArr.slice(1, 2);
// // console.log(slicedArr); // Output: Uint8Array(1) [2]
// // `},
// {
//   title: // "TypedArray.prototype.some() - Determines whether at least one element in a typed array satisfies a provided function.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2, 3);
// // console.log(typedArr.some((value) => value > 1)); // Output: true
// // `},
// {
//   title: // "TypedArray.prototype.sort() - Sorts the elements in a typed array in place.",
//   desc: `
// // const typedArr = Uint8Array.of(3, 1, 2);
// // typedArr.sort();
// // console.log(typedArr); // Output: Uint8Array(3) [1, 2, 3]
// // `},
// {
//   title: // "TypedArray.prototype.subarray() - Returns a new typed array that consists of a section of another typed array.",
//   desc: `
// // const typedArr = Uint8Array.of(


// // `},
// {
//   title: // "TypedArray.prototype.subarray() - Returns a new typed array that consists of a section of another typed array.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2, 3);
// // const subArr = typedArr.subarray(1, 2);
// // console.log(subArr); // Output: Uint8Array(1) [2]
// // `},
// {
//   title: // "TypedArray.prototype.values() - Returns a new iterator object that contains the values for each index in the typed array.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2, 3);
// // for (const value of typedArr.values()) {
// //   console.log(value); // Output: 1, 2, 3
// // }
// // `},
// {
//   title: // "Uint16Array() - Creates a new unsigned 16-bit integer array with the specified length or array-like object.",
//   desc: `
// // const typedArr = new Uint16Array(3);
// // console.log(typedArr); // Output: Uint16Array(3) [0, 0, 0]
// // `},
// {
//   title: // "Uint16Array.BYTES_PER_ELEMENT - Returns the number of bytes per element in a Uint16Array (2).",
//   desc: `
// // console.log(Uint16Array.BYTES_PER_ELEMENT); // Output: 2
// // `},
// {
//   title: // "Uint16Array.from() - Creates a new Uint16Array from an array-like or iterable object.",
//   desc: `
// // const arr = [1, 2, 3];
// // const typedArr = Uint16Array.from(arr);
// // console.log(typedArr); // Output: Uint16Array(3) [1, 2, 3]
// // `},
// {
//   title: // "Uint16Array.of() - Creates a new Uint16Array with a variable number of arguments.",
//   desc: `
// // const typedArr = Uint16Array.of(1, 2, 3);
// // console.log(typedArr); // Output: Uint16Array(3) [1, 2, 3]
// // `},
// {
//   title: // "Uint16Array.prototype.BYTES_PER_ELEMENT - Returns the number of bytes per element in a Uint16Array instance.",
//   desc: `
// // const typedArr = new Uint16Array(3);
// // console.log(typedArr.BYTES_PER_ELEMENT); // Output: 2
// // `},
// {
//   title: // "Uint16Array.prototype.buffer - Returns the ArrayBuffer that the Uint16Array instance is a view of.",
//   desc: `
// // const buffer = new ArrayBuffer(6);
// // const typedArr = new Uint16Array(buffer);
// // console.log(typedArr.buffer === buffer); // Output: true
// // `},
// {
//   title: // "Uint16Array.prototype.copyWithin() - Copies a sequence of array elements within the Uint16Array.",
//   desc: `
// // const typedArr = Uint16Array.of(1, 2, 3, 4, 5);
// // typedArr.copyWithin(2, 0, 2);
// // console.log(typedArr); // Output: Uint16Array(5) [1, 2, 1, 2, 5]
// // `},
// {
//   title: // "Uint16Array.prototype.entries() - Returns a new iterator object that contains the key/value pairs for each index in the",
//   desc:
//   // Uint16Arra

//   // `
//   // const typedArr = Uint16Array.of(1, 2, 3);
//   // for (const [index, value] of typedArr.entries()) {
//   //   console.log(index, value); // Output: 0 1, 1 2, 2 3
//   // }
//   // Uint16Array.prototype.every() - Determines whether all elements in a `Uint16Array


//   // `},{
//   title: // "Uint16Array.prototype.every() - Determines whether all elements in a Uint16Array satisfy a provided function.",
//   desc: `
// // const typedArr = Uint16Array.of(1, 2, 3);
// // console.log(typedArr.every((value) => value > 0)); // Output: true
// // `},
// {
//   title: // "Uint16Array.prototype.fill() - Fills all the elements of a Uint16Array with a static value.",
//   desc: `
// // const typedArr = Uint16Array.of(1, 2, 3);
// // typedArr.fill(0);
// // console.log(typedArr); // Output: Uint16Array(3) [0, 0, 0]
// // `},
// {
//   title: // "Uint16Array.prototype.filter() - Creates a new Uint16Array with all elements that pass the test implemented by the provided",
//   desc:
//   // functio

//   // `
//   // const typedArr = Uint16Array.of(1, 2, 3);
//   // const filteredArr = typedArr.filter((value) => value > 1);
//   // console.log(filteredArr); // Output: Uint16Array(2) [2, 3]
//   // `},{
//   title: // "Uint16Array.prototype.find() - Returns the value of the first element in a Uint16Array that satisfies the provided testing",
//   desc:
//   // functio

//   // `
//   // const typedArr = Uint16Array.of(1, 2, 3);
//   // console.log(typedArr.find((value) => value > 1)); // Output: 2
//   // `},{
//   title: // "Uint16Array.prototype.findIndex() - Returns the index of the first element in a Uint16Array that satisfies the provided testing",
//   desc:
//   // function, or -1 if not foun

//   // `
//   // const typedArr = Uint16Array.of(1, 2, 3);
//   // console.log(typedArr.findIndex((value) => value > 1)); // Output: 1
//   // `},{
//   title: // "Uint16Array.prototype.forEach() - Calls a function for each element in a Uint16Array.",
//   desc: `
// // const typedArr = Uint16Array.of(1, 2, 3);
// // typedArr.forEach((value) => console.log(value)); // Output: 1, 2, 3
// // `},
// {
//   title: // "Uint16Array.prototype.includes() - Determines whether a Uint16Array includes a certain value.",
//   desc: `
// // const typedArr = Uint16Array.of(1, 2, 3);
// // console.log(typedArr.includes(2)); // Output: true
// // `},
// {
//   title: // "Uint16Array.prototype.indexOf() - Returns the index of the first occurrence of a value in a Uint16Array, or -1 if not found.",
//   desc: `
// // const typedArr = Uint16Array.of(1, 2, 3);
// // console.log(typedArr.indexOf(2)); // Output: 1
// // `},
// {
//   title: // "Uint16Array.prototype.join() - Converts all elements in a Uint16Array to a string, separated by a specified separator string.",
//   desc: `
// // const typedArr = Uint16Array.of(1, 2, 3);
// // console.log(typedArr.join('-')); // Output: "1-2-3"
// // `},
// {
//   title: // "Uint16Array.prototype.keys() - Returns a new iterator object that contains the keys for each index in the Uint16Array.",
//   desc: `
// // const typedArr = Uint16Array.of(1, 2, 3);
// // for (const index of typedArr.keys()) {
// //   console.log(index); // Output: 0, 1, 2
// // }
// // Uint16Array.prototype.lastIndexOf() - Returns the


// // `},
// {
//   title: // "Uint16Array.prototype.lastIndexOf() - Returns the index of the last occurrence of a value in a Uint16Array, or -1 if not found.",
//   desc: `
// // const typedArr = Uint16Array.of(1, 2, 3, 2);
// // console.log(typedArr.lastIndexOf(2)); // Output: 3
// // `},
// {
//   title: // "Uint16Array.prototype.map() - Creates a new Uint16Array with the results of calling a provided function on every element in the",
//   desc:
//   // Uint16Arra

//   // `
//   // const typedArr = Uint16Array.of(1, 2, 3);
//   // const mappedArr = typedArr.map((value) => value * 2);
//   // console.log(mappedArr); // Output: Uint16Array(3) [2, 4, 6]
//   // `},{
//   title: // "Uint16Array.prototype.reduce() - Applies a function against an accumulator and each value in the Uint16Array to reduce it to a",
//   desc:
//   // single valu

//   // `
//   // const typedArr = Uint16Array.of(1, 2, 3);
//   // const sum = typedArr.reduce((accumulator, value) => accumulator + value, 0);
//   // console.log(sum); // Output: 6
//   // `},{
//   title: // "Uint16Array.prototype.reduceRight() - Applies a function against an accumulator and each value in the Uint16Array from right to",
//   desc:
//   // left to reduce it to a single valu

//   // `
//   // const typedArr = Uint16Array.of(1, 2, 3);
//   // const sum = typedArr.reduceRight((accumulator, value) => accumulator + value, 0);
//   // console.log(sum); // Output: 6
//   // `},{
//   title: // "Uint16Array.prototype.reverse() - Reverses the order of the elements in a Uint16Array.",
//   desc: `
// // const typedArr = Uint16Array.of(1, 2, 3);
// // typedArr.reverse();
// // console.log(typedArr); // Output: Uint16Array(3) [3, 2, 1]
// // `},
// {
//   // ##
//   // Uint16Array.prototype.set() - Sets a portion of a Uint16Array to another Uint16Array, array-like object, or iterable objec

//   // `
//   // const typedArr = Uint16Array.of(1, 2, 3);
//   // const otherTypedArr = Uint16Array.of(4, 5, 6);
//   // typedArr.set(otherTypedArr, 1);
//   // console.log(typedArr); // Output: Uint16Array(3) [1, 4, 5]
//   // `},{
//   title: // "Uint16Array.prototype.slice() - Extracts a section of a Uint16Array and returns a new Uint16Array.",
//   desc: `
// // const typedArr = Uint16Array.of(1, 2, 3);
// // const slicedArr = typedArr.slice(1, 2);
// // console.log(slicedArr); // Output: Uint16Array(1) [2]
// // `},
// {
//   title: // "Uint16Array.prototype.some() - Determines whether at least one element in a Uint16Array satisfies a provided function.",
//   desc: `
// // const typedArr = Uint16Array.of(1, 2, 3);
// // console.log(typedArr.some((value) => value > 1)); // Output: true
// // `},
// {
//   title: // "Uint16Array.prototype.sort() - Sorts the elements in a Uint16Array in place.",
//   desc: `
// // const typedArr = Uint16Array.of(3, 1, 2);
// // typedArr.sort();
// // console.log(typedArr); // Output: Uint16Array(3) [1, 2


// // `},
// {
//   title: // "Uint16Array.prototype.sort() - Sorts the elements in a Uint16Array in place.",
//   desc: `
// // const typedArr = Uint16Array.of(3, 1, 2);
// // typedArr.sort();
// // console.log(typedArr); // Output: Uint16Array(3) [1, 2, 3]
// // `},
// {
//   title: // "Uint16Array.prototype.subarray() - Returns a new Uint16Array that consists of a section of another Uint16Array.",
//   desc: `
// // const typedArr = Uint16Array.of(1, 2, 3);
// // const subArr = typedArr.subarray(1, 2);
// // console.log(subArr); // Output: Uint16Array(1) [2]
// // `},
// {
//   title: // "Uint16Array.prototype.values() - Returns a new iterator object that contains the values for each index in the Uint16Array.",
//   desc: `
// // const typedArr = Uint16Array.of(1, 2, 3);
// // for (const value of typedArr.values()) {
// //   console.log(value); // Output: 1, 2, 3
// // }
// // `},
// {
//   title: // "Uint32Array() - Creates a new unsigned 32-bit integer array with the specified length or array-like object.",
//   desc: `
// // const typedArr = new Uint32Array(3);
// // console.log(typedArr); // Output: Uint32Array(3) [0, 0, 0]
// // `},
// {
//   title: // "Uint32Array.BYTES_PER_ELEMENT - Returns the number of bytes per element in a Uint32Array (4).",
//   desc: `
// // console.log(Uint32Array.BYTES_PER_ELEMENT); // Output: 4
// // `},
// {
//   title: // "Uint32Array.from() - Creates a new Uint32Array from an array-like or iterable object.",
//   desc: `
// // const arr = [1, 2, 3];
// // const typedArr = Uint32Array.from(arr);
// // console.log(typedArr); // Output: Uint32Array(3) [1, 2, 3]
// // `},
// {
//   title: // "Uint32Array.of() - Creates a new Uint32Array with a variable number of arguments.",
//   desc: `
// // const typedArr = Uint32Array.of(1, 2, 3);
// // console.log(typedArr); // Output: Uint32Array(3) [1, 2, 3]
// // `},
// {
//   title: // "Uint32Array.prototype.BYTES_PER_ELEMENT - Returns the number of bytes per element in a Uint32Array instance.",
//   desc: `
// // const typedArr = new Uint32Array(3);
// // console.log(typedArr.BYTES_PER_ELEMENT); // Output: 4
// // `},
// {
//   title: // "Uint32Array.prototype.buffer - Returns the ArrayBuffer that the Uint32Array instance is a view of.",
//   desc: `
// // const buffer = new ArrayBuffer(12);
// // const typedArr = new Uint32Array(buffer);
// // console.log(typedArr.buffer === buffer); // Output: true
// // `},
// {
//   title: // "Uint32Array.prototype.copyWithin() - Copies a sequence of array elements within the Uint32Array.",
//   desc: `
// // const typedArr = Uint32Array.of(1, 2, 3, 4, 5);
// // typedArr.copyWithin(2, 0, 2);
// // console.log(typedArr); // Output: Uint32Array(5) [1, 2, 1, 2, 5]
// // Uint32Array.prototype.entries() - Returns a new iterator object that contains the key/value pairs for each index in the `Uint32Array


//   // `},{
//   title: // "Uint32Array.prototype.entries() - Returns a new iterator object that contains the key/value pairs for each index in the",
//   desc:
//   // Uint32Arra

//   // `
//   // const typedArr = Uint32Array.of(1, 2, 3);
//   // for (const entry of typedArr.entries()) {
//   //   console.log(entry); // Output: [0, 1], [1, 2], [2, 3]
//   // }
//   // `},{
//   title: // "Uint32Array.prototype.every() - Determines whether all elements in a Uint32Array satisfy a provided function.",
//   desc: `
// // const typedArr = Uint32Array.of(1, 2, 3);
// // console.log(typedArr.every((value) => value > 0)); // Output: true
// // `},
// {
//   title: // "Uint32Array.prototype.fill() - Fills all the elements of a Uint32Array with a static value.",
//   desc: `
// // const typedArr = Uint32Array.of(1, 2, 3);
// // typedArr.fill(0);
// // console.log(typedArr); // Output: Uint32Array(3) [0, 0, 0]
// // `},
// {
//   title: // "Uint32Array.prototype.filter() - Creates a new Uint32Array with all elements that pass the test implemented by the provided",
//   desc:
//   // functio

//   // `
//   // const typedArr = Uint32Array.of(1, 2, 3);
//   // const filteredArr = typedArr.filter((value) => value > 1);
//   // console.log(filteredArr); // Output: Uint32Array(2) [2, 3]
//   // `},{
//   // ##
//   // Uint32Array.prototype.find() - Returns the value of the first element in a Uint32Array that satisfies the provided testingunction.

//   // `
//   // const typedArr = Uint32Array.of(1, 2, 3);
//   // console.log(typedArr.find((value) => value > 1)); // Output: 2
//   // `},{
//   title: // "Uint32Array.prototype.findIndex() - Returns the index of the first element in a Uint32Array that satisfies the provided testing",
//   desc:
//   // function, or -1 if not foun

//   // `
//   // const typedArr = Uint32Array.of(1, 2, 3);
//   // console.log(typedArr.findIndex((value) => value > 1)); // Output: 1
//   // `},{
//   title: // "Uint32Array.prototype.forEach() - Calls a function for each element in a Uint32Array.",
//   desc: `
// // const typedArr = Uint32Array.of(1, 2, 3);
// // typedArr.forEach((value) => console.log(value)); // Output: 1, 2, 3
// // `},
// {
//   title: // "Uint32Array.prototype.includes() - Determines whether a Uint32Array includes a certain value.",
//   desc: `
// // const typedArr = Uint32Array.of(1, 2, 3);
// // console.log(typedArr.includes(2)); // Output: true
// // `},
// {
//   title: // "Uint32Array.prototype.indexOf() - Returns the index of the first occurrence of a value in a Uint32Array, or -1 if not found.",
//   desc: `
// // const typedArr = Uint32Array.of(1, 2, 3);
// // console.log(typedArr.indexOf(2)); // Output: 1
// // `},
// {
//   title: // "Uint32Array.prototype.join() - Converts all elements in a Uint32Array to a string, separated by a specified separator string.",
//   desc: `
// // const typedArr = Uint32Array.of(1, 2, 3);
// // console.log(typedArr.join('-')); // Output: "1-2-3"
// // `},
// {
//   title: // "Uint32Array.prototype.keys() - Returns a new iterator object that contains the keys for each index in the Uint32Array.",
//   desc: `
// // const typedArr = Uint32Array.of(1, 2, 3);
// // for (const key of typedArr.keys()) {
// //   console.log(key); // Output: 0, 1, 2
// // }
// // `},
// {
//   title: // "Uint32Array.prototype.lastIndexOf() - Returns the index of the last occurrence of a value in a Uint32Array, or -1 if not found.",
//   desc: `
// // const typedArr = Uint32Array.of(1, 2, 3, 2);
// // console.log(typedArr.lastIndexOf(2)); // Output: 3
// // `},
// {
//   title: // "Uint32Array.prototype.map() - Creates a new Uint32Array with the results of calling a provided function on every element in the",
//   desc:
//   // Uint32Arra

//   // `
//   // const typedArr = Uint32Array.of(1, 2, 3);
//   // const mappedArr = typedArr.map((value) => value * 2);
//   // console.log(mappedArr); // Output: Uint32Array(3) [2, 4, 6]
//   // `},{
//   title: // "Uint32Array.prototype.reduce() - Applies a function against an accumulator and each value in the Uint32Array to reduce it to a",
//   desc:
//   // single valu

//   // `
//   // const typedArr = Uint32Array.of(1, 2, 3);
//   // const sum = typedArr.reduce((accumulator, value) => accumulator + value, 0);
//   // console.log(sum); // Output: 6
//   // `},{
//   title: // "Uint32Array.prototype.reduceRight() - Applies a function against an accumulator and each value in the Uint32Array from right to",
//   desc:
//   // left to reduce it to a single valu

//   // `
//   // const typedArr = Uint32Array.of(1, 2, 3);
//   // const sum = typedArr.reduceRight((accumulator, value) => accumulator + value, 0);
//   // console.log(sum); // Output: 6
//   // `},{
//   title: // "Uint32Array.prototype.reverse() - Reverses the order of the elements in a Uint32Array.",
//   desc: `
// // const typedArr = Uint32Array.of(1, 2, 3);
// // typedArr.reverse();
// // console.log(typedArr); // Output: Uint32Array(3) [3, 2, 1]
// // `},
// {
//   title: // "Uint32Array.prototype.set() - Sets a portion of a Uint32Array to another Uint32Array, array-like object, or iterable object.",
//   desc: `
// // const typedArr = Uint32Array.of(1, 2, 3);
// // const otherTypedArr = Uint32Array.of(4, 5, 6);
// // typedArr.set(otherTypedArr, 1);
// // console.log(typedArr); // Output: Uint32Array(3) [1, 4, 5]
// // `},
// {
//   title: // "Uint32Array.prototype.slice() - Extracts a section of a Uint32Array and returns a new Uint32Array.",
//   desc: `
// // const typedArr = Uint32Array.of(1, 2, 3);
// // const slicedArr = typedArr.slice(1, 2);
// // console.log(slicedArr); // Output: Uint32Array(1) [2]
// // `},
// {
//   title: // "Uint32Array.prototype.some() - Determines whether at least one element in a Uint32Array satisfies a provided function.",
//   desc: `
// // const typedArr = Uint32Array.of(1, 2, 3);
// // console.log(typedArr.some((value) => value


// // `},
// {
//   title: // "Uint32Array.prototype.some() - Determines whether at least one element in a Uint32Array satisfies a provided function.",
//   desc: `
// // const typedArr = Uint32Array.of(1, 2, 3);
// // console.log(typedArr.some((value) => value > 2)); // Output: true
// // `},
// {
//   title: // "Uint32Array.prototype.sort() - Sorts the elements in a Uint32Array in place.",
//   desc: `
// // const typedArr = Uint32Array.of(3, 1, 2);
// // typedArr.sort();
// // console.log(typedArr); // Output: Uint32Array(3) [1, 2, 3]
// // `},
// {
//   title: // "Uint32Array.prototype.subarray() - Returns a new Uint32Array that consists of a section of another Uint32Array.",
//   desc: `
// // const typedArr = Uint32Array.of(1, 2, 3);
// // const subArr = typedArr.subarray(1, 2);
// // console.log(subArr); // Output: Uint32Array(1) [2]
// // `},
// {
//   title: // "Uint32Array.prototype.values() - Returns a new iterator object that contains the values for each index in the Uint32Array.",
//   desc: `
// // const typedArr = Uint32Array.of(1, 2, 3);
// // for (const value of typedArr.values()) {
// //   console.log(value); // Output: 1, 2, 3
// // }
// // `},
// {
//   title: // "Uint8Array() - Creates a new unsigned 8-bit integer array with the specified length or array-like object.",
//   desc: `
// // const typedArr = new Uint8Array(3);
// // console.log(typedArr); // Output: Uint8Array(3) [0, 0, 0]
// // `},
// {
//   title: // "Uint8Array.BYTES_PER_ELEMENT - Returns the number of bytes per element in a Uint8Array (1).",
//   desc: `
// // console.log(Uint8Array.BYTES_PER_ELEMENT); // Output: 1
// // `},
// {
//   title: // "Uint8Array.from() - Creates a new Uint8Array from an array-like or iterable object.",
//   desc: `
// // const arr = [1, 2, 3];
// // const typedArr = Uint8Array.from(arr);
// // console.log(typedArr); // Output: Uint8Array(3) [1, 2, 3]
// // `},
// {
//   title: // "Uint8Array.of() - Creates a new Uint8Array with a variable number of arguments.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2, 3);
// // console.log(typedArr); // Output: Uint8Array(3) [1, 2, 3]
// // `},
// {
//   title: // "Uint8Array.prototype.BYTES_PER_ELEMENT - Returns the number of bytes per element in a Uint8Array instance.",
//   desc: `
// // const typedArr = new Uint8Array(3);
// // console.log(typedArr.BYTES_PER_ELEMENT); // Output: 1
// // `},
// {
//   title: // "Uint8Array.prototype.buffer - Returns the ArrayBuffer that the Uint8Array instance is a view of.",
//   desc: `
// // const buffer = new ArrayBuffer(12);
// // const typedArr = new Uint8Array(buffer);
// // console.log(typedArr.buffer === buffer); // Output: true
// // `},
// {
//   title: // "Uint8Array.prototype.copyWithin() - Copies a sequence of array elements within the Uint8Array.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2, 3, 4, 5);
// // typedArr.copyWithin(


// // `},
// {
//   title: // "Uint8Array.prototype.copyWithin() - Copies a sequence of array elements within the Uint8Array.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2, 3, 4, 5);
// // typedArr.copyWithin(0, 3, 4);
// // console.log(typedArr); // Output: Uint8Array(5) [4, 2, 3, 4, 5]
// // `},
// {
//   title: // "Uint8Array.prototype.entries() - Returns a new iterator object that contains the key/value pairs for each index in the",
//   desc:
//   // Uint8Arra

//   // `
//   // const typedArr = Uint8Array.of(1, 2, 3);
//   // for (const entry of typedArr.entries()) {
//   //   console.log(entry); // Output: [0, 1], [1, 2], [2, 3]
//   // }
//   // `},{
//   title: // "Uint8Array.prototype.every() - Determines whether all elements in a Uint8Array satisfy a provided function.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2, 3);
// // console.log(typedArr.every((value) => value > 0)); // Output: true
// // `},
// {
//   title: // "Uint8Array.prototype.fill() - Fills all the elements of a Uint8Array with a static value.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2, 3);
// // typedArr.fill(0);
// // console.log(typedArr); // Output: Uint8Array(3) [0, 0, 0]
// // `},
// {
//   title: // "Uint8Array.prototype.filter() - Creates a new Uint8Array with all elements that pass the test implemented by the provided",
//   desc:
//   // functio

//   // `
//   // const typedArr = Uint8Array.of(1, 2, 3);
//   // const filteredArr = typedArr.filter((value) => value > 1);
//   // console.log(filteredArr); // Output: Uint8Array(2) [2, 3]
//   // `},{
//   title: // "Uint8Array.prototype.find() - Returns the value of the first element in a Uint8Array that satisfies the provided testing",
//   desc:
//   // functio

//   // `
//   // const typedArr = Uint8Array.of(1, 2, 3);
//   // console.log(typedArr.find((value) => value > 1)); // Output: 2
//   // `},{
//   title: // "Uint8Array.prototype.findIndex() - Returns the index of the first element in a Uint8Array that satisfies the provided testing",
//   desc:
//   // function, or -1 if not foun

//   // `
//   // const typedArr = Uint8Array.of(1, 2, 3);
//   // console.log(typedArr.findIndex((value) => value > 1)); // Output: 1
//   // `},{
//   title: // "Uint8Array.prototype.forEach() - Calls a function for each element in a Uint8Array.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2, 3);
// // typedArr.forEach((value) => console.log(value)); // Output: 1, 2, 3
// // `},
// {
//   title: // "Uint8Array.prototype.includes() - Determines whether a Uint8Array includes a certain value.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2, 3);
// // console.log(typedArr.includes(2)); // Output: true
// // `},
// {
//   title: // "Uint8Array.prototype.indexOf() - Returns the index of the first occurrence of a value in a Uint8Array, or -1 if not found.",
//   desc: `
// // const typedArr = Uint8Array.of(1,


// // `},
// {
//   title: // "Uint8Array.prototype.indexOf() - Returns the index of the first occurrence of a value in a Uint8Array, or -1 if not found.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2, 3, 2);
// // console.log(typedArr.indexOf(2)); // Output: 1
// // `},
// {
//   title: // "Uint8Array.prototype.join() - Joins all elements in a Uint8Array into a string.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2, 3);
// // console.log(typedArr.join()); // Output: "1,2,3"
// // `},
// {
//   title: // "Uint8Array.prototype.keys() - Returns a new iterator object that contains the keys for each index in the Uint8Array.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2, 3);
// // for (const key of typedArr.keys()) {
// //   console.log(key); // Output: 0, 1, 2
// // }
// // `},
// {
//   title: // "Uint8Array.prototype.lastIndexOf() - Returns the index of the last occurrence of a value in a Uint8Array, or -1 if not found.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2, 3, 2);
// // console.log(typedArr.lastIndexOf(2)); // Output: 3
// // `},
// {
//   title: // "Uint8Array.prototype.map() - Creates a new Uint8Array with the results of calling a provided function on every element in the",
//   desc:
//   // Uint8Arra

//   // `
//   // const typedArr = Uint8Array.of(1, 2, 3);
//   // const mappedArr = typedArr.map((value) => value * 2);
//   // console.log(mappedArr); // Output: Uint8Array(3) [2, 4, 6]
//   // `},{
//   title: // "Uint8Array.prototype.reduce() - Applies a function against an accumulator and each value in the Uint8Array to reduce it to a",
//   desc:
//   // single valu

//   // `
//   // const typedArr = Uint8Array.of(1, 2, 3);
//   // const sum = typedArr.reduce((accumulator, value) => accumulator + value, 0);
//   // console.log(sum); // Output: 6
//   // `},{
//   title: // "Uint8Array.prototype.reduceRight() - Applies a function against an accumulator and each value in the Uint8Array from right to",
//   desc:
//   // left to reduce it to a single valu

//   // `
//   // const typedArr = Uint8Array.of(1, 2, 3);
//   // const sum = typedArr.reduceRight((accumulator, value) => accumulator + value, 0);
//   // console.log(sum); // Output: 6
//   // `},{
//   title: // "Uint8Array.prototype.reverse() - Reverses the order of the elements in a Uint8Array.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2, 3);
// // typedArr.reverse();
// // console.log(typedArr); // Output: Uint8Array(3) [3, 2, 1]
// // `},
// {
//   title: // "Uint8Array.prototype.set() - Sets a portion of a Uint8Array to another Uint8Array, array-like object, or iterable object.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2, 3);
// // const otherTypedArr = Uint8Array.of(4, 5, 6);
// // typedArr.set(otherTypedArr, 1);
// // console.log(typedArr); // Output: Uint8Array(3) [1, 4, 5]
// // `},
// {
//   title: // "Uint8Array.prototype.slice() - Returns a new Uint8Array that consists of a section of another Uint8Array.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2, 3);
// // const slicedArr = typedArr.slice(1, 2);
// // console.log(slicedArr); // Output: Uint8Array(1) [2]
// // `},
// {
//   title: // "Uint8Array.prototype.some() - Determines whether at least one element in a Uint8Array satisfies a provided function.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2, 3);
// // console.log(typedArr.some((value) => value > 2)); // Output: true
// // `},
// {
//   title: // "Uint8Array.prototype.sort() - Sorts the elements in a Uint8Array in place.",
//   desc: `
// // const typedArr = Uint8Array.of(3, 1, 2);
// // typedArr.sort();
// // console.log(typedArr); // Output: Uint8Array(3) [1, 2, 3]
// // `},
// {
//   title: // "Uint8Array.prototype.subarray() - Returns a new Uint8Array that consists of a section of another Uint8Array.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2, 3);
// // const subArr = typedArr.subarray(1, 2);
// // console.log(subArr); // Output: Uint8Array(1) [2]
// // `},
// {
//   title: // "Uint8Array.prototype.toLocaleString() - Returns a string representing the elements of a Uint8Array. The elements are converted",
//   desc:
//   // to strings using the specified local

//   // `
//   // const typedArr = Uint8Array.of(1, 2, 3);
//   // console.log(typedArr.toLocaleString("en-US")); // Output: "1,2,3"
//   // `},{
//   title: // "Uint8Array.prototype.toString() - Returns a string representing the elements of a Uint8Array.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2, 3);
// // console.log(typedArr.toString()); // Output: "1,2,3"
// // `},
// {
//   title: // "Uint8Array.prototype.values() - Returns a new iterator object that contains the values for each index in the Uint8Array.",
//   desc: `
// // const typedArr = Uint8Array.of(1, 2, 3);
// // for (const value of typedArr.values()) {
// //   console.log(value); // Output: 1, 2, 3
// // }
// // `},
// {
//   title: // "Uint8ClampedArray() - Creates a new unsigned 8-bit integer array with clamped values with the specified length or array-like",
//   desc:
//   // objec

//   // `
//   // const typedArr = new Uint8ClampedArray(3);
//   // console.log(typedArr); // Output: Uint8ClampedArray(3) [0, 0, 0]
//   // `},{
//   title: // "Uint8ClampedArray.BYTES_PER_ELEMENT - Returns the number of bytes per element in a Uint8ClampedArray (1).",
//   desc: `
// // console.log(Uint8ClampedArray.BYTES_PER_ELEMENT); // Output: 1
// // `},
// {
//   title: // "Uint8ClampedArray.from() - Creates a new Uint8ClampedArray from an array-like or iterable object.",
//   desc: `
// // const arr = [1, 2, 3];
// // const typedArr = Uint8ClampedArray.from(arr);
// // console.log(typedArr); // Output: Uint8ClampedArray(3) [1, 2, 3]
// // `},
// {
//   title: // "Uint8ClampedArray.of() - Creates a new Uint8ClampedArray with a variable number of arguments.",
//   desc: `
// // const typedArr = Uint8ClampedArray.of(1, 2, 3);
// // console.log(typedArr); // Output: Uint8ClampedArray(3) [1, 2, 3]
// // `},
// {
//   title: // "Uint8ClampedArray.prototype.BYTES_PER_ELEMENT - Returns the number of bytes per element in a Uint8ClampedArray instance (1).",
//   desc: `
// // const typedArr = new Uint8ClampedArray(3);
// // console.log(typedArr.BYTES_PER_ELEMENT); // Output: 1
// // `},
// {
//   title: // "Uint8ClampedArray.prototype.buffer - Returns the ArrayBuffer that the Uint8ClampedArray instance is a view of.",
//   desc: `
// // const buffer = new ArrayBuffer(8);
// // const typedArr = new Uint8ClampedArray(buffer);
// // console.log(typedArr.buffer); // Output: ArrayBuffer(8) {}
// // `},
// {
//   title: // "Uint8ClampedArray.prototype.byteLength - Returns the length of a Uint8ClampedArray in bytes.",
//   desc: `
// // const typedArr = new Uint8ClampedArray(3);
// // console.log(typedArr.byteLength); // Output: 3
// // `},
// {
//   title: // "Uint8ClampedArray.prototype.byteOffset - Returns the offset of a Uint8ClampedArray from the start of its ArrayBuffer.",
//   desc: `
// // const buffer = new ArrayBuffer(8);
// // const typedArr = new Uint8ClampedArray(buffer, 3);
// // console.log(typedArr.byteOffset); // Output: 3
// // `},
// {
//   title: // "Uint8ClampedArray.prototype.copyWithin() - Copies a sequence of array elements within the Uint8ClampedArray.",
//   desc: `
// // const typedArr = Uint8ClampedArray.of(1, 2, 3, 4, 5);
// // typedArr.copyWithin(0, 3, 4);
// // console.log(typedArr); // Output: Uint8ClampedArray(5) [4, 2, 3, 4, 5]
// // `},
// {
//   title: // "Uint8ClampedArray.prototype.entries() - Returns a new iterator object that contains the key/value pairs for each index in the",
//   desc:
//   // Uint8ClampedArra

//   // `
//   // const typedArr = Uint8ClampedArray.of(1, 2, 3);
//   // for (const entry of typedArr.entries()) {
//   //   console.log(entry); // Output: [0, 1], [1, 2], [2, 3]
//   // }
//   // `},{
//   title: // "Uint8ClampedArray.prototype.every() - Determines whether all elements in a Uint8ClampedArray satisfy a provided function.",
//   desc: `
// // const typedArr = Uint8ClampedArray.of(1, 2, 3);
// // console.log(typedArr.every((value) => value > 0)); // Output: true
// // `},
// {
//   title: // "Uint8ClampedArray.prototype.fill() - Fills all the elements of a Uint8ClampedArray with a static value.",
//   desc: `
// // const typedArr = Uint8ClampedArray.of(1, 2, 3);
// // typedArr.fill(0);
// // console.log(typedArr); // Output: Uint8ClampedArray(3) [0, 0, 0]
// // `},
// {
//   title: // "Uint8ClampedArray.prototype.filter() - Creates a new Uint8ClampedArray with all elements that pass the test implemented by the",
//   desc:
//   // provided functio

//   // `


//   // `},{
//   title: // "Uint8ClampedArray.prototype.filter() - Creates a new Uint8ClampedArray with all elements that pass the test implemented by the",
//   desc:
//   // provided functio

//   // `
//   // const typedArr = Uint8ClampedArray.of(1, 2, 3);
//   // const filteredArr = typedArr.filter((value) => value > 1);
//   // console.log(filteredArr); // Output: Uint8ClampedArray(2) [2, 3]
//   // `},{
//   title: // "Uint8ClampedArray.prototype.find() - Returns the value of the first element in a Uint8ClampedArray that satisfies a provided",
//   desc:
//   // function, or undefined if not foun

//   // `
//   // const typedArr = Uint8ClampedArray.of(1, 2, 3);
//   // console.log(typedArr.find((value) => value > 1)); // Output: 2
//   // `},{
//   title: // "Uint8ClampedArray.prototype.findIndex() - Returns the index of the first element in a Uint8ClampedArray that satisfies a",
//   desc:
//   // provided function, or -1 if not foun

//   // `
//   // const typedArr = Uint8ClampedArray.of(1, 2, 3);
//   // console.log(typedArr.findIndex((value) => value > 1)); // Output: 1
//   // `},{
//   title: // "Uint8ClampedArray.prototype.forEach() - Calls a provided function for each element in a Uint8ClampedArray.",
//   desc: `
// // const typedArr = Uint8ClampedArray.of(1, 2, 3);
// // typedArr.forEach((value) => console.log(value)); // Output: 1, 2, 3
// // `},
// {
//   title: // "Uint8ClampedArray.prototype.includes() - Determines whether a Uint8ClampedArray includes a certain value, returning true or",
//   desc:
//   // false as appropriat

//   // `
//   // const typedArr = Uint8ClampedArray.of(1, 2, 3);
//   // console.log(typedArr.includes(2)); // Output: true
//   // `},{
//   title: // "Uint8ClampedArray.prototype.indexOf() - Returns the index of the first occurrence of a value in a Uint8ClampedArray, or -1 if",
//   desc:
//   // not foun

//   // `
//   // const typedArr = Uint8ClampedArray.of(1, 2, 3, 2);
//   // console.log(typedArr.indexOf(2)); // Output: 1
//   // `},{
//   title: // "Uint8ClampedArray.prototype.join() - Joins all elements in a Uint8ClampedArray into a string.",
//   desc: `
// // const typedArr = Uint8ClampedArray.of(1, 2, 3);
// // console.log(typedArr.join()); // Output: "1,2,3"
// // `},
// {
//   title: // "Uint8ClampedArray.prototype.keys() - Returns a new iterator object that contains the keys for each index in the",
//   desc:
//   // Uint8ClampedArra

//   // `
//   // const typedArr = Uint8ClampedArray.of(1, 2, 3);
//   // for (const key of typedArr.keys()) {
//   //   console.log(key); // Output: 0, 1, 2
//   // }
//   // `},{
//   title: // "Uint8ClampedArray.prototype.lastIndexOf() - Returns the index of the last occurrence of a value in a Uint8ClampedArray, or -1",
//   desc:
//   // if not foun

//   // `
//   // const typedArr = Uint8ClampedArray.of(1, 2, 3, 2);
//   // console.log(typedArr.lastIndexOf(2)); // Output: 3
//   // Uint8ClampedArray.prototype.map() - Creates a


//   // `},{
//   title: // "Uint8ClampedArray.prototype.map() - Creates a new Uint8ClampedArray with the results of calling a provided function on every",
//   desc:
//   // element in the calling Uint8ClampedArra

//   // `
//   // const typedArr = Uint8ClampedArray.of(1, 2, 3);
//   // const mappedArr = typedArr.map((value) => value * 2);
//   // console.log(mappedArr); // Output: Uint8ClampedArray(3) [2, 4, 6]
//   // `},{
//   title: // "Uint8ClampedArray.prototype.reduce() - Applies a function against an accumulator and each element in a Uint8ClampedArray to",
//   desc:
//   // reduce it to a single valu

//   // `
//   // const typedArr = Uint8ClampedArray.of(1, 2, 3);
//   // const sum = typedArr.reduce((accumulator, currentValue) => accumulator + currentValue);
//   // console.log(sum); // Output: 6
//   // `},{
//   title: // "Uint8ClampedArray.prototype.reduceRight() - Applies a function against an accumulator and each value of the Uint8ClampedArray",
//   desc:
//   // (from right-to-left) to reduce it to a single valu

//   // `
//   // const typedArr = Uint8ClampedArray.of(1, 2, 3);
//   // const sum = typedArr.reduceRight((accumulator, currentValue) => accumulator + currentValue);
//   // console.log(sum); // Output: 6
//   // `},{
//   title: // "Uint8ClampedArray.prototype.reverse() - Reverses the order of elements in a Uint8ClampedArray.",
//   desc: `
// // const typedArr = Uint8ClampedArray.of(1, 2, 3);
// // typedArr.reverse();
// // console.log(typedArr); // Output: Uint8ClampedArray(3) [3, 2, 1]
// // `},
// {
//   title: // "Uint8ClampedArray.prototype.set() - Sets a sequence of values in a Uint8ClampedArray, overwriting existing values.",
//   desc: `
// // const typedArr = Uint8ClampedArray.of(1, 2, 3);
// // typedArr.set(Uint8ClampedArray.of(4, 5), 1);
// // console.log(typedArr); // Output: Uint8ClampedArray(3) [1, 4, 5]
// // `},
// {
//   title: // "Uint8ClampedArray.prototype.slice() - Returns a new Uint8ClampedArray that consists of a section of another Uint8ClampedArray.",
//   desc: `
// // const typedArr = Uint8ClampedArray.of(1, 2, 3);
// // const slicedArr = typedArr.slice(1, 2);
// // console.log(slicedArr); // Output: Uint8ClampedArray(1) [2]
// // `},
// {
//   title: // "Uint8ClampedArray.prototype.some() - Determines whether at least one element in a Uint8ClampedArray satisfies a provided",
//   desc:
//   // functio

//   // `
//   // const typedArr = Uint8ClampedArray.of(1, 2, 3);
//   // console.log(typedArr.some((value) => value > 2)); // Output: true
//   // `},{
//   title: // "Uint8ClampedArray.prototype.sort() - Sorts the elements in a Uint8ClampedArray in place.",
//   desc: `
// // const typedArr = Uint8ClampedArray.of(3, 1, 2);
// // typedArr.sort();
// // console.log(typedArr); // Output: Uint8ClampedArray(3) [1, 2, 3]
// // Uint8ClampedArray.prototype.subarray() - Returns a new Uint8ClampedArray that consists of a section


// // `},
// {
//   title: // "Uint8ClampedArray.prototype.subarray() - Returns a new Uint8ClampedArray that consists of a section of another",
//   desc:
//   // Uint8ClampedArra

//   // `
//   // const typedArr = Uint8ClampedArray.of(1, 2, 3);
//   // const subArr = typedArr.subarray(1, 2);
//   // console.log(subArr); // Output: Uint8ClampedArray(1) [2]
//   // `},{
//   title: // "Uint8ClampedArray.prototype.toLocaleString() - Returns a string representing the elements of a Uint8ClampedArray. The elements",
//   desc:
//   // are converted to strings using their toLocaleString methods and these strings are then concatenate

//   // `
//   // const typedArr = Uint8ClampedArray.of(1, 2, 3);
//   // console.log(typedArr.toLocaleString()); // Output: "1,2,3"
//   // `},{
//   title: // "Uint8ClampedArray.prototype.toString() - Returns a string representing the elements of a Uint8ClampedArray. The elements are",
//   desc:
//   // converted to strings using their toString methods and these strings are then concatenate

//   // `
//   // const typedArr = Uint8ClampedArray.of(1, 2, 3);
//   // console.log(typedArr.toString()); // Output: "1,2,3"
//   // `},{
//   title: // "Uint8ClampedArray.prototype.values() - Returns a new iterator object that contains the values for each index in the",
//   desc:
//   // Uint8ClampedArra

//   // `
//   // const typedArr = Uint8ClampedArray.of(1, 2, 3);
//   // for (const value of typedArr.values()) {
//   //   console.log(value); // Output: 1, 2, 3
//   // }
//   // `},{
//   title: // "WeakMap.prototype.clear() - Removes all key-value pairs from a WeakMap object.",
//   desc: `
// // const wm = new WeakMap();
// // const key = {};
// // const value = "value";
// // wm.set(key, value);
// // wm.clear();
// // console.log(wm.has(key)); // Output: false
// // `},
// {
//   title: // "WeakMap.prototype.delete() - Removes the specified key-value pair from a WeakMap object.",
//   desc: `
// // const wm = new WeakMap();
// // const key = {};
// // const value = "value";
// // wm.set(key, value);
// // wm.delete(key);
// // console.log(wm.has(key)); // Output: false
// // `},
// {
//   title: // "WeakMap.prototype.get() - Returns the value associated with a specified key in a WeakMap object, or undefined if not found.",
//   desc: `
// // const wm = new WeakMap();
// // const key = {};
// // const value = "value";
// // wm.set(key, value);
// // console.log(wm.get(key)); // Output: "value"
// // `},
// {
//   title: // "WeakMap.prototype.has() - Returns a Boolean indicating whether a WeakMap object contains a specified key.",
//   desc: `
// // const wm = new WeakMap();
// // const key = {};
// // const value = "value";
// // wm.set(key, value);
// // console.log(wm.has(key)); // Output: true
// // `},
// {
//   title: // "WeakMap.prototype.set() - Sets a key-value pair in a WeakMap object.",
//   desc: `
// // const wm = new WeakMap();
// // const key = {};
// // const value = "value";
// // wm.set(key, value);
// // console.log(wm.get(key)); // Output: "value"
// // `},
// {
//   title: // "WeakSet.prototype.add() - Adds a new object to a WeakSet object.",
//   desc: `
// // const ws = new WeakSet();
// // const obj = {};
// // ws.add(obj);
// // console.log(ws.has(obj)); // Output: true
// // WeakSet.prototype.delete() - Removes an object from a


// // `},
// {
//   title: // "WeakSet.prototype.delete() - Removes an object from a WeakSet object.",
//   desc: `
// // const ws = new WeakSet();
// // const obj = {};
// // ws.add(obj);
// // ws.delete(obj);
// // console.log(ws.has(obj)); // Output: false
// // `},
// {
//   title: // "WeakSet.prototype.has() - Returns a Boolean indicating whether a WeakSet object contains a specified object.",
//   desc: `
// // const ws = new WeakSet();
// // const obj = {};
// // ws.add(obj);
// // console.log(ws.has(obj)); // Output: true
// // `},
// {
//   title: // "WebAssembly.compile() - Compiles a WebAssembly.Module from WebAssembly binary code.",
//   desc: `
// // const code = new Uint8Array([0,97,115,109,1,0,0,0]);
// // WebAssembly.compile(code)
// //   .then((module) => console.log(module));
// // `},
// {
//   title: // "WebAssembly.compileStreaming() - Compiles a WebAssembly.Module from a stream of WebAssembly binary code.",
//   desc: `
// // fetch('module.wasm')
// //   .then((response) => WebAssembly.compileStreaming(response))
// //   .then((module) => console.log(module));
// // `},
// {
//   title: // "WebAssembly.instantiate() - Instantiates a WebAssembly.Module with a given set of imports.",
//   desc: `
// // const code = new Uint8Array([0,97,115,109,1,0,0,0]);
// // const imports = { env: { memory: new WebAssembly.Memory({ initial: 256 }) } };
// // WebAssembly.compile(code)
// //   .then((module) => WebAssembly.instantiate(module, imports))
// //   .then((instance) => console.log(instance));
// // `},
// {
//   title: // "WebAssembly.instantiateStreaming() - Instantiates a WebAssembly.Module from a stream of WebAssembly binary code with a given",
//   desc:
//   // set of import

//   // `
//   // const imports = { env: { memory: new WebAssembly.Memory({ initial: 256 }) } };
//   // fetch('module.wasm')
//   //   .then((response) => WebAssembly.instantiateStreaming(response, imports))
//   //   .then((instance) => console.log(instance));
//   // `},{
//   title: // "WebAssembly.Memory - Represents a resizable byte-wise memory buffer.",
//   desc: `
// // const memory = new WebAssembly.Memory({ initial: 256 });
// // const arr = new Uint8Array(memory.buffer, 0, 256);
// // console.log(arr); // Output: Uint8Array(256) [0, 0, 0, ..., 0, 0, 0]
// // WebAssembly.Module - Represents a compiled WebAssembly module.

// // WebAssembly.Table - Represents a resizable table of function references.

// // WebAssembly.validate() - Validates the syntax of a stream of WebAssembly binary code.
// // `},
// {
//   // ##
//   // `onst code = new Uint8Array([0,97,115,109,1,0,0,0]);
//   // console.log(WebAssembly.validate(code)); // Output: true
//   // XMLHttpRequest.abort() - Aborts an ongoing XMLHttpRequest.

//   // XMLHttpRequest.getAllResponseHeaders() - Returns all the response headers, separated by CRLF pairs, as a string.
//   // `},{
//   // ##
//   // `onst xhr = new XMLHttpRequest();
//   // xhr.open('GET', 'https://example.com');
//   // xhr.send();
//   // xhr.onload = function() {
//   //   console.log(xhr.getAllResponseHeaders()); // Output: "content-type: text/html\r\n"
//   // };
//   // `},{
//   title: // "XMLHttpRequest.getResponseHeader() - Returns the value of a specified response header, or null if not found.",
//   desc: `
// // const xhr = new XMLHttpRequest();
// // xhr.open('GET', 'https://example.com');
// // xhr.send();


// // `},
// {
//   title: // "XMLHttpRequest.getResponseHeader() - Returns the value of a specified response header, or null if not found.",
//   desc: `
// // const xhr = new XMLHttpRequest();
// // xhr.open('GET', 'https://example.com');
// // xhr.send();
// // xhr.onload = function() {
// //   console.log(xhr.getResponseHeader('content-type')); // Output: "text/html"
// // };
// // `},
// {
//   title: // "XMLHttpRequest.open() - Initializes an XMLHttpRequest.",
//   desc: `
// // const xhr = new XMLHttpRequest();
// // xhr.open('GET', 'https://example.com');
// // `},
// {
//   title: // "XMLHttpRequest.overrideMimeType() - Overrides the MIME type returned by the server.",
//   desc: `
// // const xhr = new XMLHttpRequest();
// // xhr.open('GET', 'https://example.com');
// // xhr.overrideMimeType('text/xml');
// // `},
// {
//   title: // "XMLHttpRequest.send() - Sends an XMLHttpRequest.",
//   desc: `
// // const xhr = new XMLHttpRequest();
// // xhr.open('GET', 'https://example.com');
// // xhr.send();
// // `},
// {
//   title: // "XMLHttpRequest.setRequestHeader() - Sets the value of a request header.",
//   desc: `
// // const xhr = new XMLHttpRequest();
// // xhr.open('GET', 'https://example.com');
// // xhr.setRequestHeader('content-type', 'text/xml');
// // xhr.send();
// // `},
// {
//   title: // "XMLSerializer.serializeToString() - Converts an XML Document or Element to a string.",
//   desc: `
// // const parser = new DOMParser();
// // const xml = parser.parseFromString('<book><title>The Adventures of Huckleberry Finn</title></book>', 'application/xml');
// // const serializer = new XMLSerializer();
// // console.log(serializer.serializeToString(xml)); // Output: "<book><title>The Adventures of Huckleberry Finn</title></book>"
// // `},
// {
//   title: // "XPathEvaluator.createExpression() - Creates an XPathExpression object from a string representing an XPath expression.",
//   desc: `
// // const parser = new DOMParser();
// // const xml = parser.parseFromString('<book><title>The Adventures of Huckleberry Finn</title></book>', 'application/xml');
// // const xpath = new XPathEvaluator();
// // const expression = xpath.createExpression('//title');
// // const result = expression.evaluate(xml, XPathResult.ORDERED_NODE_ITERATOR_TYPE);
// // let node = result.iterateNext();
// // while (node) {
// //   console.log(node.textContent); // Output: "The Adventures of Huckleberry Finn"
// //   node = result.iterateNext();
// // }
// // `},
// {
//   title: // "XPathEvaluator.createNSResolver() - Creates an XPathNSResolver object that resolves namespace prefixes to namespace URIs.",
//   desc: `
// // const parser = new DOMParser();
// // const xml = parser.parseFromString('<book xmlns:foo="http://example.com"><foo:title>The Adventures of Huckleberry Finn</foo:title></book>', 'application/xml');
// // const xpath = new XPathEvaluator();
// // const resolver = xpath.createNSResolver(xml.documentElement);
// // const expression = xpath.createExpression('//foo:title');
// // const result = expression.evaluate(xml, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
// // let node = result.iterateNext();
// // while (node) {
// //   console.log(node.textContent); // Output: "The Adventures of Huckleberry Finn"
// //   node = result.iterateNext();
// // }
// // `},
// {
//   title: // "XPathEvaluator.evaluate() - Evaluates an XPath expression on a given Node and returns a result of a specified type.",
//   desc: `
// // const parser = new DOMParser();
// // const xml = parser.parseFromString('<book><title>The Adventures of Huckleberry Finn</title></book>', 'application/xml');
// // const xpath = new XPathEvaluator();
// // const result = xpath.evaluate('//title', xml, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
// // let node = result.iterateNext();
// // while (node) {
// //   console.log(node.textContent); // Output: "


// // `},
// {
//   title: // "XPathEvaluator.evaluate() - Evaluates an XPath expression on a given Node and returns a result of a specified type.",
//   desc: `
// // const parser = new DOMParser();
// // const xml = parser.parseFromString('<book><title>The Adventures of Huckleberry Finn</title></book>', 'application/xml');
// // const xpath = new XPathEvaluator();
// // const result = xpath.evaluate('//title', xml, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
// // let node = result.iterateNext();
// // while (node) {
// //   console.log(node.textContent); // Output: "The Adventures of Huckleberry Finn"
// //   node = result.iterateNext();
// // }
// // `},
// {
//   title: // "XPathExpression.evaluate() - Evaluates an XPath expression on a given Node and returns a result of a specified type.",
//   desc: `
// // const parser = new DOMParser();
// // const xml = parser.parseFromString('<book><title>The Adventures of Huckleberry Finn</title></book>', 'application/xml');
// // const xpath = new XPathEvaluator();
// // const expression = xpath.createExpression('//title');
// // const result = expression.evaluate(xml, XPathResult.ORDERED_NODE_ITERATOR_TYPE);
// // let node = result.iterateNext();
// // while (node) {
// //   console.log(node.textContent); // Output: "The Adventures of Huckleberry Finn"
// //   node = result.iterateNext();
// // }
// // `},
// {
//   title: // "XPathNSResolver.lookupNamespaceURI() - Returns the namespace URI associated with a given namespace prefix.",
//   desc: `
// // const parser = new DOMParser();
// // const xml = parser.parseFromString('<book xmlns:foo="http://example.com"><foo:title>The Adventures of Huckleberry Finn</foo:title></book>', 'application/xml');
// // const xpath = new XPathEvaluator();
// // const resolver = xpath.createNSResolver(xml.documentElement);
// // console.log(resolver.lookupNamespaceURI('foo')); // Output: "http://example.com"
// // XPathResult - Represents the result of an XPath evaluation.

// // yield - Used to pause and resume a generator function.
// // `},
// {
//   // ##
//   // `unction* myGenerator() {
//   //   yield 'one';
//   //   yield 'two';
//   //   yield 'three';
//   // }

//   // const generator = myGenerator();
//   // console.log(generator.next()); // Output: { value: "one", done: false }
//   // console.log(generator.next()); // Output: { value: "two", done: false }
//   // console.log(generator.next()); // Output: { value: "three", done: false }
//   // console.log(generator.next()); // Output: { value: undefined, done: true }
//   // `},{
//   title: // "yield* - Delegates to another generator function or iterable object.",
//   desc: `
// // function* myGenerator() {
// //   yield 'one';
// //   yield* ['two', 'three'];
// // }

// // const generator = myGenerator();
// // console.log(generator.next()); // Output: { value: "one", done: false }
// // console.log(generator.next()); // Output: { value: "two", done: false }
// // console.log(generator.next()); // Output: { value: "three", done: false }
// // console.log(generator.next()); // Output: { value: undefined, done: true }

