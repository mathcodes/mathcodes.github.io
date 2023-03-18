export const arrayMethods = [
  {
    title: "Array.prototype.concat()",
    def: "Concatenates two or more arrays.",
    desc: `
const array1 = [1, 2, 3]; `, descr2: `
const array2 = [4, 5, 6]; `, descr3: `
const newArray = array1.concat(array2); `, descr4: `react
console.log(newArray); // Output: [1, 2, 3, 4, 5, 6] `
  },
  {
    title: "Array.prototype.copyWithin()",
    def: "Copies a sequence of array elements within the array.",
    desc: `
const array1 = [1, 2, 3, 4, 5]; `, descr2: `
const newArray = array1.copyWithin(1, 3); `, descr3: `
console.log(newArray); // Output: [1, 4, 5, 4, 5] `
  },
  {
    title: "Array.prototype.every()",
    def: "Tests whether all elements in the array pass the test implemented by the provided function.",
    desc: `
const array1 = [1, 2, 3, 4, 5]; `, descr2: `
const result = array1.every(element => element > 0); `, descr3: `
console.log(result); // Output: true `
  },
  {
    title: "Array.prototype.filter()",
    def: "Creates a new array with all elements that pass the test implemented by the provided function.",
    desc: `
const array1 = [1, 2, 3, 4, 5]; `, descr2: `
const newArray = array1.filter(element => element > 2); `, descr3: `
console.log(newArray); // Output: [3, 4, 5] `
  },
  {
    title: "Array.prototype.forEach()",
    def: "Executes a provided function once for each array element.",
    desc: `
const array1 = [1, 2, 3];`, descr2: `
array1.forEach(element => console.log(element)); `, descr3: `
// Output: 1 `, descr4: `
//         2   `, descr5: `
//         3  `
  }, {
    title: "Array.prototype.includes()",
    def: "Determines whether an array includes a certain element, returning true or false as appropriate.",
    desc: `
      const array1 = [1, 2, 3]; `, descr3: `
const result = array1.includes(2); `, descr4: `
console.log(result); // Output: true `
  }, {
    title: "Array.prototype.indexOf()",
    def: "Returns the first index at which a given element can be found in the array, or -1 if it is not present.",
    desc: `
const array1 = [1, 2, 3]; `, descr3: `
const index = array1.indexOf(2); `, descr4: `
console.log(index); // Output: 1 `
  }, {
    title: "Array.prototype.join()",
    def: "Joins all elements of an array into a string.",
    desc: `
const array1 = ['Hello', 'World']; `, descr3: `
const string = array1.join(' ');  `, descr4: `
console.log(string); // Output: 'Hello World' `
  },
  {
    title: "Array.prototype.lastIndexOf()",
    def: "Returns the last index at which a given element can be found in the array, or -1 if it is not present.",
    desc:
      `
const array1 = [1, 2, 3]; `, descr3: `
const index = array1.lastIndexOf(2); `, descr4: `
console.log(index); // Output: 1 `
  },
  {
    title: "Array.prototype.map()",
    def: "Creates a new array with the results of calling a provided function on every element in the calling array.",
    desc: `


const array1 = [1, 2, 3]; `,
    descr2: `
    const newArray = array1.map(element => element * 2); `,
    descr3: `
    console.log(newArray); // Output: [2, 4, 6] `
  },
  {
    title: "Array.prototype.pop()",
    def: "Removes the last element from an array and returns that element.",
    desc: `
const array1 = [1, 2, 3]; `, descr2: `
const lastElement = array1.pop(); `, descr3: `
console.log(lastElement); // Output: 3 `
  },
  {
    title: "Array.prototype.push()",
    def: "Adds one or more elements to the end of an array and returns the new length of the array.",
    desc: `
const array1 = [1, 2, 3]; `, descr2: `
const newLength = array1.push(4, 5);  `, descr3: `
console.log(array1); // Output: [1, 2, 3, 4, 5] `
  },
  {
    title: "Array.prototype.reduce()",
    def: "Executes a provided function for each value of the array and returns a single value.",
    desc: `
const array1 = [1, 2, 3]; `, descr2: `
    const sum = array1.reduce((accumulator, currentValue) => accumulator + currentValue); `, descr3: `
    console.log(sum); // Output: 6 `
  },
  {
    title: "Array.prototype.reduceRight()",
    def: "Executes a provided function for each value of the array (from right-to-left) and returns a single value",
    desc: `
const array1 = [1, 2, 3]; `,
    descr2: `
    const sum = array1.reduceRight((accumulator, currentValue) => accumulator + currentValue); `,
    descr3: `
    console.log(sum); // Output: 6 `
  },
  {
    title: "Array.prototype.reverse()",
    def: "Reverses the order of the elements in an array.",
    desc: `
const array1 = [1, 2, 3];`, descr2: `
array1.reverse();`, descr3: `
console.log(array1); // Output: [3, 2, 1]`
  },
  {
    title: "Array.prototype.shift()",
    def: "Removes the first element from an array and returns that element.",
    desc: `
const array1 = [1, 2, 3];`, descr2: `
    const firstElement = array1.shift();`, descr3: `
    console.log(firstElement); // Output: 1`
  },
  {
    title: "Array.prototype.slice()",
    def: "Returns a shallow copy of a portion of an array.",
    desc: `
const array1 = [1, 2, 3, 4, 5];`, descr2: `
const newArray = array1.slice(1, 3);`, descr3: `
console.log(newArray); // Output: [2, 3]`
  },
  {
    title: "Array.prototype.some()",
    def: "Tests whether at least one element in the array passes the test implemented by the provided function.",
    desc: `
const array1 = [1, 2, 3, 4, 5];`, descr2: `
    const result = array1.some(element => element > 3);`, descr3: `
    console.log(result); // Output: true`
  },
  {
    title: "Array.prototype.sort()",
    def: "Sorts the elements of an array in place and returns the sorted array.",
    desc: `
const array1 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];`, descr2: `
array1.sort();`, descr3: `
console.log(array1); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]`
  },
  {
    title: "Array.prototype.splice()",
    def: "Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.",
    desc:
      `
const array1 = [1, 2, 3, 4, 5];
  const removedElements = array1.splice(1, 2, 6, 7);`, descr2: `
  console.log(array1); // Output: [1, 6, 7, 4, 5]`, descr3: `
  console.log(removedElements); // Output: [2, 3]`
  },
  {
    title: "Array.prototype.toLocaleString()",
    def: "Returns a string representing the elements of an array in a localized format.",
    desc: `
  const array1 = [1, 2, 3];`, descr2: `
    const string = array1.toLocaleString();`, descr3: `
    console.log(string); // Output: '1,2,3'`
  },
  {
    title: "Array.prototype.toString()",
    def: "Returns a string representing the specified array and its elements.",
    desc: `
  const array1 = [1, 2, 3];`, descr2: `
  const string = array1.toString();`, descr3: `
  console.log(string); // Output: '1,2,3'`
  },
  {
    title: "Array.prototype.unshift()",
    def: "Adds one or more elements to the beginning of an array and returns the new length of the array.",
    desc: `
  const array1 = [1, 2, 3];`, descr2: `
  const newLength = array1.unshift(4, 5);`, descr3: `
  console.log(array1); // Output: [4, 5, 1, 2, 3]`
  },

  {
    title: "Array.from()",
    def: "Creates a new array instance from an array-like or iterable object.",
    desc: `
  const string = 'hello'; `, descr2: `
    const array1 = Array.from(string); `, descr3: `
    console.log(array1); // Output: ['h', 'e', 'l', 'l', 'o'] `
  },

  {
    title: "Array.isArray()",
    def: "Determines whether the passed value is an Array.",
    desc: `
  const array1 = [1, 2, 3]; `, descr2: `
    const result = Array.isArray(array1); `, descr3: `
    console.log(result); // Output: true `
  },
  {
    title: "Array.of()",
    def: "Creates a new array instance with a variable number of arguments, regardless of number or type of the arguments.",
    desc: `
  const array1 = Array.of(1, 'two', true); `, descr3: `
    console.log(array1); // Output: [1, 'two', true] `
  },
  {
  }]

// export const stringMethods = [{
//   title: "String.prototype.charAt()",
//   def: "Returns the character at the specified index in a string.",
//   desc: `
//   const string = 'hello';
//     const char = string.charAt(1);
//     console.log(char); // Output: 'e'
//   },
//   {
//     title: "String.prototype.charCodeAt()",
//     def: "Returns the Unicode of the character at the specified index in a string.",
//     desc: `
//   const string = 'hello';
//   const charCode = string.charCodeAt(1);
//   console.log(charCode); // Output: 101
// },
// {
//   title: "String.prototype.concat()",
//   def: "Joins two or more strings, and returns a new joined strings.",
//   desc: `
//   const string1 = 'hello';
//     const string2 = 'world';
//     const string3 = string1.concat(' ', string2);
//     console.log(string3); // Output: 'hello world'
//   },
//   {
//     title: "String.prototype.endsWith()",
//     def: "Determines whether a string ends with the characters of a specified string, returning true or false as appropriate.",
//     desc: `
//   const string = 'hello world';

//   console.log(string.endsWith('world')); // Output: true
//   console.log(string.endsWith('hello')); // Output: false
// },
// {
//   title: "String.prototype.includes()",
//   def: "Determines whether one string may be found within another string, returning true or false as appropriate.",
//   desc: `
//   const string = 'hello world';

//     console.log(string.includes('hello')); // Output: true
//     console.log(string.includes('world')); // Output: true
//     console.log(string.includes('foo')); // Output: false
//   },
//   {
//     title: "String.prototype.indexOf()",
//     def: "Returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex.",
//     desc: `
//   const string = 'hello world';

//   console.log(string.indexOf('hello')); // Output: 0
//   console.log(string.indexOf('world')); // Output: 6
//   console.log(string.indexOf('foo')); // Output: -1
// },
// {
//   title: "String.prototype.lastIndexOf()",
//   def: "Returns the index within the calling String object of the last occurrence of the specified value, or -1 if not found.",
//   desc: `
//   const string = 'hello world';

//     console.log(string.lastIndexOf('hello')); // Output: 0
//     console.log(string.lastIndexOf('world')); // Output: 6
//     console.log(string.lastIndexOf('foo')); // Output: -1
//   },
//   {
//     title: "String.prototype.localeCompare()",
//     def: "Returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.",
//     desc: `
//   const string1 = 'hello';
//   const string2 = 'world';

//   console.log(string1.localeCompare(string2)); // Output: -1
//   console.log(string2.localeCompare(string1)); // Output: 1
//   console.log(string1.localeCompare(string1)); // Output: 0
// },
// {
//   title: "String.prototype.match()",
//   def: "Used to retrieve the matches when matching a string against a regular expression.",
//   desc: `
//   const string = 'hello world';

//     console.log(string.match(/hello/)); // Output: ['hello']
//     console.log(string.match(/world/)); // Output: ['world']
//     console.log(string.match(/foo/)); // Output: null
//   },
//   {
//     title: "String.prototype.normalize()",
//     def: "Returns the Unicode Normalization Form of a given string.",
//     desc: `
//   const string = 'hello world';

//   console.log(string.normalize()); // Output: 'hello world'
// },
// {
//   title: "String.prototype.padEnd()",
//   def: "Pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length.",
//   desc: `
//   const string = 'hello world';

//     console.log(string.padEnd(15, 'foo')); // Output: 'hello worldfoof'
//   },
//   {
//     title: "String.prototype.padStart()",
//     def: "Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.",
//     desc: `
//   const string = 'hello world';

//   console.log(string.padStart(15, 'foo')); // Output: 'foofoofoohello world'
// },
// {
//   title: "String.prototype.repeat()",
//   def: "Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.",
//   desc: `
//   const string = 'hello world';

//     console.log(string.repeat(3)); // Output: 'hello worldhello worldhello world'
//   },
//   {
//     title: "String.prototype.replace()",
//     def: "Returns a new string with some or all matches of a pattern replaced by a replacement.",
//     desc: `
//   const string = 'hello world';

//   console.log(string.replace('hello', 'foo')); // Output: 'foo world'
// },
// {
//   title: "String.prototype.search()",
//   def: "Executes the search for a match between a regular expression and this String object.",
//   desc: `
//   const string = 'hello world';

//     console.log(string.search(/hello/)); // Output: 0
//     console.log(string.search(/world/)); // Output: 6
//     console.log(string.search(/foo/)); // Output: -1
//   },
//   {
//     title: "String.prototype.slice()",
//     def: "Extracts a section of a string and returns it as a new string, without modifying the original string.",
//     desc: `
//   const string = 'hello world';

//   console.log(string.slice(0, 5)); // Output: 'hello'
// },
// {
//   title: "String.prototype.split()",
//   def: "Splits a String object into an array of strings by separating the string into substrings.",
//   desc: `
//   const string = 'hello world';

//     console.log(string.split(' ')); // Output: ['hello', 'world']
//   },
//   {
//     title: "String.prototype.startsWith()",
//     def: "Determines whether a string begins with the characters of a specified string, returning true or false as appropriate.",
//     desc: `
//   const string = 'hello world';

//   console.log(string.startsWith('hello')); // Output: true
//   console.log(string.startsWith('world')); // Output: false
// },
// {
//   title: "String.prototype.substr()",
//   def: "Returns the characters in a string beginning at the specified location through the specified number of characters.",
//   desc: `
//   const string = 'hello world';

//     console.log(string.substr(0, 5)); // Output: 'hello'
//   },
//   {
//     title: "String.prototype.substring()",
//     def: "Returns the characters in a string between two indexes into the string.",
//     desc: `
//   const string = 'hello world';

//   console.log(string.substring(0, 5)); // Output: 'hello'
// },
// {
//   title: "String.prototype.toLocaleLowerCase()",
//   def: "Returns the calling string value converted to lower case, according to any locale-specific case mappings.",
//   desc: `
//   const string = 'HELLO WORLD';

//     console.log(string.toLocaleLowerCase()); // Output: 'hello world'
//   },
//   {
//     title: "String.prototype.toLocaleUpperCase()",
//     def: "Returns the calling string value converted to upper case, according to any locale-specific case mappings.",
//     desc: `
//   const string = 'hello world';

//   console.log(string.toLocaleUpperCase()); // Output: 'HELLO WORLD'
// },
// {
//   title: "String.prototype.toLowerCase()",
//   def: "Returns the calling string value converted to lower case.",
//   desc: `
//   const string = 'HELLO WORLD';

//     console.log(string.toLowerCase()); // Output: 'hello world'
//   },
//   {
//     title: "String.prototype.toString()",
//     def: "Returns a string representing the specified object.",
//     desc: `
//   const string = 'hello world';

//   console.log(string.toString()); // Output: 'hello world'
// },
// {
//   title: "String.prototype.toUpperCase()",
//   def: "Returns the calling string value converted to upper case.",
//   desc: `
//   const string = 'hello world';

//     console.log(string.toUpperCase()); // Output: 'HELLO WORLD'
//   },
//   {
//     title: "String.prototype.trim()",
//     def: "Removes whitespace from both ends of a string.",
//     desc: `
//   const string = ' hello world ';

//   console.log(string.trim()); // Output: 'hello world'
// },
// {
//   title: "String.prototype.trimEnd()",
//   def: "Removes whitespace from the end of a string.",
//   desc: `
//   const string = ' hello world ';

//     console.log(string.trimEnd()); // Output: ' hello world'
//   },
//   {
//     title: "String.prototype.trimStart()",
//     def: "Removes whitespace from the beginning of a string.",
//     desc: `
//   const string = ' hello world ';

//   console.log(string.trimStart()); // Output: 'hello world '
// },
// {
//   title: "String.prototype.valueOf()",
//   def: "Returns the primitive value of a String object.",
//   desc: `
//   const string = 'hello world';

//     console.log(string.valueOf()); // Output: 'hello world'
//   },
//   {
//     title: "String.prototype[@@iterator]()",
//     def: "Returns a new Iterator object that iterates over the code points of a String value, returning each code point as a String value.",
//     desc: `
//   const string = 'hello world';

//   console.log(string[Symbol.iterator]()); // Output: String Iterator {}
// },
// {
//   title: "String.raw()",
//   def: "Returns a raw string.",
//   desc: `
//   console.log(String.raw({ raw: 'test' }, 0, 1, 2)); // Output: 't0e1s2t'
//   },
//   {
//     title: "String.fromCharCode()",
//     def: "Returns a string created from the specified sequence of UTF-16 code units.",
//     desc: `
//   console.log(String.fromCharCode(104, 101, 108, 108, 111)); // Output: 'hello'
// },
// {
//   title: "String.fromCodePoint()",
//   def: "Returns a string created by using the specified sequence of code points.",
//   desc: `
//   console.log(String.fromCodePoint(104, 101, 108, 108, 111)); // Output: 'hello'
//   },
//   {
//   }]

// export const dateMethods = [{
//   title: "Date.prototype.getDate()",
//   def: "Returns the day of the month for a specified date according to local time.",
//   desc: `
//   const date1 = new Date('March 8, 2023 12:00:00');
//   const day = date1.getDate();
//   console.log(day); // Output: 8
//   `
// },
// {
//   title: "Date.prototype.getDay()",
//   def: "Returns the day of the week for a specified date according to local time.",
//   desc: `
//   const date1 = new Date('March 8, 2023 12:00:00');
// const dayOfWeek = date1.getDay();
// console.log(dayOfWeek); // Output: 3 (Wednesday)
//   },
// {
//   title: "Date.prototype.getFullYear()",
//     def: "Returns the year for a specified date according to local time.",
//       desc: `
//   const date1 = new Date('March 8, 2023 12:00:00');
//   const year = date1.getFullYear();
//   console.log(year); // Output: 2023
// },
// {
//   title: "Date.prototype.getHours()",
//   def: "Returns the hour for a specified date according to local time.",
//   desc: `
//   const date1 = new Date('March 8, 2023 12:00:00');
//   const hour = date1.getHours();
//   console.log(hour); // Output: 12
// },
// {
//   title: "Date.prototype.getMilliseconds()",
//     def: "Returns the milliseconds for a specified date according to local time.",
//       desc: `
//   const date1 = new Date('March 8, 2023 12:00:00.123');
//   const milliseconds = date1.getMilliseconds();
//   console.log(milliseconds); // Output: 123
// },
// {
//   title: "Date.prototype.getMinutes()",
//   def: "Returns the minutes for a specified date according to local time.",
//   desc: `
//   const date1 = new Date('March 8, 2023 12:15:00');
//   const minutes = date1.getMinutes();
//   console.log(minutes); // Output: 15
// },
// {
//   title: "Date.prototype.getMonth()",
//     def: "Returns the month for a specified date according to local time.",
//       desc: `
//   const date1 = new Date('March 8, 2023 12:00:00');
//   const month = date1.getMonth();
//   console.log(month
//     },
// {
//   title: "Date.prototype.getSeconds()",
//   def: "Returns the seconds for a specified date according to local time.",
//   desc: `
// const date1 = new Date('March 8, 2023 12:00:30');
//   const seconds = date1.getSeconds();
//   console.log(seconds); // Output: 30
// },
// {
//   title: "Date.prototype.getTime()",
//     def: "Returns the numeric value corresponding to the time for a specified date according to universal time.",
//       desc: `
//   const date1 = new Date('March 8, 2023 12:00:00');
//   const time = date1.getTime();
//   console.log(time); // Output: 1675605600000
// },
// {
//   title: "Date.prototype.getTimezoneOffset()",
//   def: "Returns the time-zone offset in minutes for the current locale.",
//   desc: `
//   const date1 = new Date('March 8, 2023 12:00:00');
//   const offset = date1.getTimezoneOffset();
//   console.log(offset); // Output: -300 (5 hours behind UTC)
// },
// {
//   title: "Date.prototype.getUTCDate()",
//     def: "Returns the day (date) of the month in the specified date according to universal time.",
//       desc: `
//   const date1 = new Date('March 8, 2023 12:00:00');
//   const day = date1.getUTCDate();
//   console.log(day); // Output: 8
// },
// {
//   title: "Date.prototype.getUTCDay()",
//   def: "Returns the day of the week in the specified date according to universal time.",
//   desc: `
//   const date1 = new Date('March 8, 2023 12:00:00');
//   const dayOfWeek = date1.getUTCDay();
//   console.log(dayOfWeek); // Output: 3 (Wednesday)
// },
// {
//   title: "Date.prototype.getUTCFullYear()",
//     def: "Returns the year in the specified date according to universal time.",
//       desc: `
//   const date1 = new Date('March 8, 2023 12:00:00');
//   const year = date1.getUTCFullYear();
//   console.log(year); // Output: 2023
// },
// {
//   title: "Date.prototype.getUTCHours()",
//   def: "Returns the hour in the specified date according to universal time.",
//   desc: `
//   const date1 = new Date('March 8, 2023 12:00:00');
//   const hour = date1.getUTCHours();
//   console.log(hour); // Output: 17 (12pm UTC is 5 hours ahead of EST)
// },
// {
//   title: "Date.prototype.getUTCMilliseconds()",
//     def: "Returns the milliseconds in the specified date according to universal time.",
//       desc: `
//   const date1 = new Date('March 8, 2023 12:00:00.123');
//   const milliseconds = date1.getUTCMilliseconds();
//   console.log(milliseconds); // Output: 123
// },
// {
//   title: "Date.prototype.getUTCMinutes()",
//   def: "Returns the minutes in the specified date according to universal time.",
//   desc: `
//   const date1 = new Date('March 8, 2023 12:15:00');
//   const minutes = date1.getUTCMinutes();
//   console.log(minutes); // Output: 15
// },
// {
//   title: "Date.prototype.getUTCMonth()",
//     def: "Returns the month in the specified date according to universal time.",
//       desc: `
//   const date1 = new Date('March 8, 2023 12:00:00');
//   const month = date1.getUTCMonth();
//   console.log(month); // Output: 2 (March is the 3rd month, but 0-based indexing)
// },
// {
//   title: "Date.prototype.setDate()",
//   def: "Sets the day of the month for a specified date according to local time.",
//   desc: `
//   const date1 = new Date('March 8, 2023 12:00:00');
//   date1.setDate(10);
//   console.log(date1); // Output: 'Sat Mar 10 2023 12:00:00 GMT-0500 (Eastern Standard Time)'
// },
// {
//   title: "Date.prototype.setFullYear()",
//     def: "Sets the year for a specified date according to local time.",
//       desc: `
//   const date1 = new Date('March 8, 2023 12:00:00');
//   date1.setFullYear(2024);
//   console.log(date1); // Output: 'Tue Mar 08 2024 12:00:00 GMT-0500 (Eastern Standard Time)'
// },
// {
//   title: "Date.prototype.setHours()",
//   def: "Sets the hour for a specified date according to local time.",
//   desc: `
//   const date1 = new Date('March 8, 2023 12:00:00');
//   date1.setHours(13);
//   console.log(date1); // Output: 'Wed Mar 08 2023 13:00:00 GMT-0500 (Eastern Standard Time)'
// },
// {
//   title: "Date.prototype.setMilliseconds()",
//     def: "Sets the milliseconds for a specified date according to local time.",
//       desc: `
//   const date1 = new Date('March 8, 2023 12:00:00');
//   date1.setMilliseconds(500);
//   console.log(date1); // Output: 'Wed Mar 08 2023 12:00:00.500 GMT-0500 (Eastern Standard Time)'
// },
// {
//   title: "Date.prototype.setMinutes()",
//   def: "Sets the minutes for a specified date according to local time.",
//   desc: `
//   const date1 = new Date('March 8, 2023 12:00:00');
//   date1.setMinutes(30);
//   console.log(date1); // Output: 'Wed Mar 08 2023 12:30:00 GMT-0500 (Eastern Standard Time)'
// },
// {
//   title: "Date.prototype.setMonth()",
//     def: "Sets the month for a specified date according to local time.",
//       desc: `
//   const date1 = new Date('March 8, 2023 12:00:00');
//   date1.setMonth(4);
//   console.log(date1); // Output: 'Fri May 08 2023 12:00:00 GMT-0400 (Eastern Daylight Time)'
// },
// {
//   title: "Date.prototype.setSeconds()",
//   def: "Sets the seconds for a specified date according to local time.",
//   desc: `
//   const date1 = new Date('March 8, 2023 12:00:00'); `, descr2: `
//   date1.setSeconds(45); `, descr3: `
//   console.log(date1); // Output: 'Wed Mar 08 2023 12:00:45 GMT-0500 (Eastern Standard Time)},
//   {

//     title: "Date.prototype.setTime()",
//       def: "Sets the Date object to the time represented by a number of milliseconds since January 1, 1970,00:00:00 UTC.",
//         desc: `
//       `const date1 = new Date('March 8, 2023 12:00:00'); `, descr2: `
//     date1.setTime(1675606000000); `, descr3: `
//     console.log(date1); // Output: 'Wed Mar 08 2023 12:20:00 GMT-0500 (Eastern Standard Time)'
//   },
//   {

//     title: "Date.prototype.setUTCFullYear()",
//       def: "Sets the year for a specified date according to universal time.",
//         desc: `
//     const date1 = new Date('March 8, 2023 12:00:00');
//   date1.setUTCFullYear(2024);
//   console.log(date1); // Output: 'Fri Mar 08 2024 12:00:00 GMT-0500 (Eastern Standard Time)'
// },
// {
//   title: "Date.prototype.setUTCHours()",
//   def: "Sets the hour for a specified date according to universal time.",
//   desc: `
//     const date1 = new Date('March 8, 2023 12:00:00');
//     date1.setUTCHours(18);
//     console.log(date1); // Output: 'Wed Mar 08 2023 13:00:00 GMT-0500 (Eastern Standard Time)'
//   },
//   {
//     title: "Date.prototype.setUTCMilliseconds()",
//       def: "Sets the milliseconds for a specified date according to universal time.",
//         desc: `
//     const date1 = new Date('March 8, 2023 12:00:00');
//   date1.setUTCMilliseconds(500);
//   console.log(date1); // Output: 'Wed Mar 08 2023 12:00:00.500 GMT-0500 (Eastern Standard Time)'
// },
// {
//   title: "Date.prototype.setUTCMinutes()",
//   def: "Sets the minutes for a specified date according to universal time.",
//   desc: `
//     const date1 = new Date('March 8, 2023 12:00:00');
//     date1.setUTCMinutes(30);
//     console.log(date1); // Output: 'Wed Mar 08 2023 12:30:00 GMT-0500 (Eastern Standard Time)'
//   },
//   {
//     title: "Date.prototype.setUTCMonth()",
//       def: "Sets the month for a specified date according to universal time.",
//         desc: `
//     const date1 = new Date('March 8, 2023 12:00:00');
//   date1.setUTCMonth(4);
//   console.log(date1); // Output: 'Tue May 08 2023 08:00:00 GMT-0400 (Eastern Daylight Time)'
// },
// {
//   title: "Date.prototype.setUTCSeconds()",
//   def: "Sets the seconds for a specified date according to universal time.",
//   desc: `
//     const date1 = new Date('March 8, 2023 12:00:00');
//     date1.setUTCSeconds(45);
//     console.log(date1); // Output: 'Wed Mar 08 2023 12:00:45 GMT-0500 (Eastern Standard Time)'
//   },
//   {
//     title: "Date.prototype.toDateString()",
//       def: "Returns the date portion of a Date object as a readable string.",
//         desc: `
//     const date1 = new Date('March 8, 2023 12:00:00');
//   const dateString = date1.toDateString();
//   console.log(dateString); // Output: 'Wed Mar 08 2023'
// },
// {
//   title: "Date.prototype.toISOString()",
//   def: "Returns a string representing the Date object in ISO format (YYYY-MM-DDTHH:mm:ss.sssZ).",
//   desc: `
//     const date1 = new Date('March 8, 2023 12:00:00');
//     const isoString = date1.toISOString();
//     console.log(isoString); // Output: '2023-03-08T17:00:00.000Z'
//   },
//   {
//     title: "Date.prototype.toJSON()",
//       def: "Returns a string representing the Date object in JSON format.",
//         desc: `
//     const date1 = new Date('March 8, 2023 12:00:00');
//   const jsonString = JSON.stringify(date1);
//   console.log(jsonString);
// },
// {


//   title: "Date.prototype.toLocaleDateString()",
//   def: "Returns a string representing the date portion of a Date object in a locale-specific format.",
//   desc: `
//     const date1 = new Date('March 8, 2023 12:00:00',
// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//     const dateString = date1.toLocaleDateString('en-US', options);
//     console.log(dateString); // Output: 'Wednesday, March 8, 2023'
//   },
//   {
//     title: "Date.prototype.toLocaleString()",
//       def: "Returns a string representing the Date object in a locale-specific format.",
//         desc: `
//     const date1 = new Date('March 8, 2023 12:00:00');
//   const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
//   const dateString = date1.toLocaleString('en-US', options);
//   console.log(dateString); // Output: 'Wednesday, March 8, 2023, 12:00 PM},
//     {
//   title: "Date.prototype.toLocaleTimeString()",
//   def: "Returns a string representing the time portion of a Date object in a locale-specific format.",
//   desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
//     const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
//     const timeString = date1.toLocaleTimeString('en-US', options);
//     console.log(timeString); // Output: '12:00:00 PM'
//   },
//   {
//     title: "Date.prototype.toString()",
//       def: "Returns a string representing the Date object.",
//         desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
//   const string = date1.toString();
//   console.log(string); // Output: 'Wed Mar 08 2023 12:00:00 GMT-0500 (Eastern Standard Time)'
// },
// {
//   title: "Date.prototype.toTimeString()",
//   def: "Returns a string representing the time portion of a Date object.",
//   desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
//     const timeString = date1.toTimeString();
//     console.log(timeString); // Output: '12:00:00 GMT-0500 (Eastern Standard Time)'
//   },
//   {
//     title: "Date.prototype.toUTCString()",
//       def: "Converts a Date object to a string, according to universal time.",
//         desc: `
// const date1 = new Date('March 8, 2023 12:00:00');
//   const utcString = date1.toUTCString();
//   console.log(utcString); // Output: 'Wed, 08 Mar 2023 17:00:00 GMT},
//     {
//   title: "Date.now()",
//   def: "Returns the numeric value corresponding to the current time",
//   def: "the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC.",
//   desc: `
//           `const now = Date.now(,
//   console.log(now); // Output: 1646761609555
// },
// {
// }]


