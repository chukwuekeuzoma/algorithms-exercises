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

function findNonReapt(inputString) {
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
const result = findNonReapt(input);
console.log(result);

// to get all the reapting element

function findNoRepeat(input) {
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
  const arr = typeof input === "string" ? input.split("") : input;

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
const input1 = "aabbcddeffg"; // string input
const input2 = ["a", "b", "c", "a", "d", "e", "b"]; // array input

console.log(listNonRepeatingChars(input1)); // Output: ['c', 'g']
console.log(listNonRepeatingChars(input2)); // Output: ['c', 'd', 'e']

//finding the maximum number in an subarray
function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

function maxSubArray(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];

  let start = 0; // Final subarray start
  let end = 0; // Final subarray end
  let tempStart = 0; // Where a new subarray might start

  for (let i = 1; i < nums.length; i++) {
    // Decide whether to start fresh or continue
    if (nums[i] > currentSum + nums[i]) {
      currentSum = nums[i];
      tempStart = i; // Start new subarray
    } else {
      currentSum += nums[i];
    }

    // If we found a new max, store its range
    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = tempStart;
      end = i;
    }
  }

  const subarray = nums.slice(start, end + 1);
  return {
    maxSum,
    subarray,
  };
}

// Example usage
const resultCheck = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log("Max Sum:", resultCheck.maxSum); // 6
console.log("Subarray:", resultCheck.subarray); // [4, -1, 2, 1]

// given a string S, return the 'reverse' string where all characters that are not letters stay in the same place and all letters reverse there positions

// example
// input "a-bC-dEf=ghIj!!"
// output "j-Ih-gfE=dCba!!"

function reversedArray(s) {
  let lettersToArray = s.split("");
  let fliteredonlyLetters = lettersToArray.filter((l) => /[a-zA-Z]/.test(l));
  let reversedLettersArray = fliteredonlyLetters.reverse();

  let letterIndex = 0;
  for (let i = 0; i < lettersToArray.length; i++) {
    if (/[a-zA-Z]/.test(lettersToArray[i])) {
      lettersToArray[i] = reversedLettersArray[letterIndex];
      letterIndex++;
    }
  }

  return lettersToArray.join("");
}

let inputReverse = "a-bC-dEf=ghIj!!";
let resultReverse = reversedArray(input);
console.log(result);
