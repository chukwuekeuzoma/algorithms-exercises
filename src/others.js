// Cross Add funtion this takes the beginning and
// and the end of an index in an array and add them
// and add them together

const crossAdd = (array) => {
  let answer = [];
  for (let i = 0; i < array.length; i++) {
    let goingUP = array[i];
    let goingDown = array[array.length - 1 - i];
    answer.push(goingUP + goingDown);
  }
  return answer;
};

let mart = ["Tunde", "Martins", "Mum", "Jenny", "Ogechi"];
console.log("The cross add function", crossAdd(mart));

// looking for a particular number in an array then when you
// this is done it willn return true

function find(needle, numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === needle) {
      return console.log("found it at index", i);
    } else {
      console.log("this is not in the array");
    }
  }
}
const needle = 5;
const numbers = [1, 15, 3, 4, 12, 6, 7, 8, 9, 10, 11, 55, 13, 14, 5];

console.log(find(needle, numbers));

// To find repeated items on a string

function FindnonReapt(inputString) {
  let chartCount = {};

  for (let char of inputString) {
    if (chartCount[char] === undefined) {
      chartCount[char] = 1;
    } else {
      chartCount[char] += 1;
    }
  }

  for (let char of inputString) {
    if (chartCount[char] === 1) {
      return char;
    }
  }

  return null;
}

const input = "aabbcddeffg";
const result = FindnonReapt(input);
console.log(result);

// to get all the reapting element

function FindNoRepeat(input) {
  let chartCount = {};

  for (let char of input) {
    chartCount[char] = (chartCount[char] || 0) + 1;
  }

  let allNoRepeat = [];
  for (let char of input) {
    if (chartCount[char] === 1) {
      allNoRepeat.push(char);
    }
  }

  return allNoRepeat;
}

// Function to list all non-repeating characters in a string or array
function listNonRepeatingChars(input) {
  // Convert to array if it's a string
  const arr = typeof input === 'string' ? input.split('') : input;

  const charCount = {};

  // Count each character
  for (let char of arr) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Collect characters that appear only once
  const result = [];
  for (let char of arr) {
    if (charCount[char] === 1) {
      result.push(char);
    }
  }

  return result;
}

// Example usage:
const input1 = "aabbcddeffg";      // string input
const input2 = ['a', 'b', 'c', 'a', 'd', 'e', 'b'];  // array input

console.log(listNonRepeatingChars(input1)); // Output: ['c', 'g']
console.log(listNonRepeatingChars(input2)); // Output: ['c', 'd', 'e']
