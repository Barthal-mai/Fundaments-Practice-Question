//Questions https://github.com/JahanzaibTayyab/Batch-57/tree/main/learn-typescript/assignment/27-april
//leve 1 Easy
console.log("1: Write a script to log 'Hello, World!' to the console.");
console.log("Hello, World!");
console.log("/////////////////////////////////////////////////");
console.log("2: Create a variable temperature and assign it a value. Then log It's cold! if the temperature is below 20 degrees Celsius.");
var temperature = 20;
if (temperature <= 20) {
    console.log("It's Cold!");
}
else {
    console.log("It's Hot!");
}
console.log("/////////////////////////////////////////////////");
console.log("3: Use arithmetic operators to solve the problem: If you have 10 apples and you give away 3, how many do you have left? Log the result.");
var totalApples = 10;
var giveAway = 3;
var remaingApple = totalApples - giveAway;
console.log("Total remaing Apples are :", remaingApple);
console.log("/////////////////////////////////////////////////");
console.log("4: Declare two variables, firstName and lastName, then create a third variable fullName that combines them. Log the result.");
var firstName = "BM";
var lastName = "JUDAH";
var fullName = firstName + lastName;
console.log("The fullname is ", fullName);
console.log("/////////////////////////////////////////////////");
console.log("5: Write a TypeScript code that uses a comparison operator to check if the number 5 is greater than 3. Log 'Yes' if true, otherwise log 'No'.");
var numberOne = 5;
var numberTwo = 3;
if (numberTwo < numberOne) {
    console.log("Yes");
}
else if (numberOne < numberTwo) {
    console.log("No");
}
//leve 2 Medium
console.log("/////////////////////////////////////////////////");
console.log("6: Create a function calculateArea that takes the radius of a circle as an input and returns the area of the circle.");
var phi = 3.14;
function calculateArea(radius) {
    var area = phi * Math.pow(radius, 2);
    return area;
}
var area = calculateArea(2);
console.log("the area of the circle is", area);
console.log("/////////////////////////////////////////////////");
console.log("7: Write a loop that logs numbers from 1 to 50. For multiples of 3, log 'Fizz' instead of the number, and for multiples of 5, log 'Buzz'.");
for (var x = 1; x <= 50; x++) {
    if (x % 3 == 0) {
        console.log("Fizz", x);
    }
    else if (x % 3 != 0) {
        console.log("Buzz", x);
    }
}
console.log("/////////////////////////////////////////////////");
console.log("8: Define an array temperatures with at least five different temperatures (numbers). Write a script to find and log the highest temperature.");
//let temperatures: number[];
var temperatures = [12, 25, 46, 26, 76];
var highestTemperature = 0;
for (var x = 0; x <= temperatures.length; x++) {
    if (temperatures[x] > highestTemperature) {
        highestTemperature = temperatures[x];
    }
}
console.log("highest Temperature is :", highestTemperature);
console.log("/////////////////////////////////////////////////");
console.log("9: Create a script that prompts the user to enter their age and then logs whether they are a minor (under 18) or an adult.");
var userAges = [12, 33, 21, 18, 10];
function userAgesFun(userAges) {
    for (var x = 0; x <= userAges.length; x++) {
        if (userAges[x] == 18) {
            console.log("adult", userAges[x]);
        }
        else if (userAges[x] != 18) {
            console.log("minor (under 18)", userAges[x]);
        }
    }
}
userAgesFun(userAges);
console.log("/////////////////////////////////////////////////");
console.log("10: Write a function that takes an array of numbers and returns the count of positive numbers in the array.");
var numberArray = [11, 45, -6, 77, 0, 11, -22, 333, -45, 44];
var count = 0;
function countPostiveNmuber(numberArray) {
    for (var x = 0; x <= numberArray.length; x++) {
        if (numberArray[x] > 0) {
            count++;
        }
    }
    return count;
}
countPostiveNmuber(numberArray);
console.log("The count of positive numbers in the array are", count);
/*
console.log("/////////////////////////////////////////////////");
console.log("11: Write a function that takes an array of words and returns a new array containing only the words that start with the letter 'a'.");

function stringsStartingWithLetter(strings: string[], letter: string): string[] {
    // Initialize an array to store strings starting with the given letter
    const matchingStrings: string[] = [];
  
    // Iterate through the array of strings
    for (let i = 0; i < strings.length; i++) {
      // Check if the current string starts with the given letter (case insensitive)
      if (strings[i].toLowerCase().startsWith(letter.toLowerCase())) {
        // Add the string to the array if it starts with the given letter
        matchingStrings.push(strings[i]);
      }
    }
  
    // Return the array containing strings starting with the given letter
    return matchingStrings;
  }
  
  // Example usage:
  const stringArray: string[] = ["apple", "banana", "apricot", "orange", "grape"];
  const letterToCheck: string = "a";
  const stringsStartingWithA: string[] = stringsStartingWithLetter(stringArray, letterToCheck);
  console.log(`Strings starting with '${letterToCheck}':`, stringsStartingWithA);
  */
console.log("/////////////////////////////////////////////////");
console.log("12: Create a script that logs the second to last element of an array named fruits.");
var fruits = ["apple", "banana", "orange", "grape", "kiwi"];
if (fruits.length >= 2) {
    var secondToLast = fruits[fruits.length - 2];
    console.log("The second to last fruit is:", secondToLast);
}
else {
    console.log("There are not enough elements in the array to find the second to last fruit.");
}
console.log("/////////////////////////////////////////////////");
console.log("13: Create a script that logs the second to last element of an array named fruits.");
function squareNumbers(numbers) {
    var squaredNumbers = [];
    for (var i = 0; i < numbers.length; i++) {
        squaredNumbers.push(numbers[i] * numbers[i]);
    }
    return squaredNumbers;
}
var numbers = [1, 2, 3, 4, 5];
var squaredNumbers = squareNumbers(numbers);
console.log("Squared numbers:", squaredNumbers);
console.log("/////////////////////////////////////////////////");
console.log("14: Write a JavaScript function that accepts an array and reverses its elements without using the .reverse() method. Log the result.");
function reverseArray(numbers) {
    var reversedArray = [];
    for (var i = numbers.length - 1; i >= 0; i--) {
        reversedArray.push(numbers[i]);
    }
    return reversedArray;
}
// Example usage:
var originalArray = [1, 2, 3, 4, 5];
var reversedArray = reverseArray(originalArray);
console.log("Original Array:", originalArray);
console.log("Reversed Array:", reversedArray);
console.log("/////////////////////////////////////////////////");
console.log("15: Given an array scores [10, 5, 20, 20, 4, 5, 2, 25, 1], write a function that logs the number of times the score exceeded the maximum score and the number of times it fell below the minimum score.");
function countExceedsAndFalls(scores) {
    var maxScore = scores[0];
    var minScore = scores[0];
    var exceedCount = 0;
    var fallCount = 0;
    for (var i = 1; i < scores.length; i++) {
        if (scores[i] > maxScore) {
            maxScore = scores[i];
            exceedCount++;
        }
        else if (scores[i] < minScore) {
            minScore = scores[i];
            fallCount++;
        }
    }
    console.log("Number of times score exceeded the maximum score:", exceedCount);
    console.log("Number of times score fell below the minimum score:", fallCount);
}
var scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
countExceedsAndFalls(scores);
console.log("/////////////////////////////////////////////////");
console.log("16: Create a function that removes all falsey values from an array. Falsey values include false, null, 0, undefined, and NaN.");
function removeFalsyValues(array) {
    return array.filter(function (value) {
        return !!value;
    });
}
var originalArray1 = [false, null, 0, "", undefined, NaN, 42, "hello", true];
var filteredArray = removeFalsyValues(originalArray1);
console.log("Original Array:", originalArray1);
console.log("Filtered Array:", filteredArray);
console.log("/////////////////////////////////////////////////");
console.log("17: Write a script that concatenates two arrays [1, 2, 3] and [4, 5, 6] into a single array.");
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var concatenatedArray = array1.concat(array2);
console.log("Concatenated Array:", concatenatedArray);
console.log("/////////////////////////////////////////////////");
console.log("18: Develop a function called sumOfElements that calculates the sum of all elements in an array that are either even or odd, based on a parameter.");
function sumOfElements(array, isEven) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if ((isEven && array[i] % 2 === 0) || (!isEven && array[i] % 2 !== 0)) {
            sum += array[i];
        }
    }
    return sum;
}
var numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Sum of even elements:", sumOfElements(numbers1, true));
console.log("Sum of odd elements:", sumOfElements(numbers1, false));
console.log("/////////////////////////////////////////////////");
console.log("19: Create a function that checks whether an element exists in an array. If it exists, return the index, otherwise return -1.");
function findElementIndex(array, element) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return i;
        }
    }
    return -1;
}
var numbersele = [1, 2, 3, 4, 5];
var index1 = findElementIndex(numbersele, 3);
console.log("Index of 3:", index1);
var fruitsele = ["apple", "banana", "orange", "grape"];
var index2 = findElementIndex(fruitsele, "orange");
console.log("Index of 'orange':", index2);
var colors = ["red", "green", "blue"];
var index3 = findElementIndex(colors, "yellow");
console.log("Index of 'yellow':", index3);
console.log("/////////////////////////////////////////////////");
console.log("20: Write a function to find and return the smallest number in an array of integers.");
function findSmallestNumber(numbers) {
    var smallest = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }
    return smallest;
}
// Example usage:
var numbersarray = [10, 5, 20, 3, 8, 15];
var smallestNumber = findSmallestNumber(numbersarray);
console.log("Smallest number:", smallestNumber);
