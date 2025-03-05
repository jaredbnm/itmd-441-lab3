// J Benman
// ITMD 441-01 Undergrad Student

// Excercise #1
function minMaxAverage(arr) {
  let total = arr.length;
  let min = arr[0];
  let max = arr[0];
  let avg = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    avg += arr[i];
  }
  avg /= arr.length;

  console.log("Total = " + total + " Min = " + min + " Max = " + max + " Avg = " + avg);
}

// ex1 test cases
console.log("Excercise #1")
minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
minMaxAverage([1, 4, 29, 6, 10, 12]);
minMaxAverage([4, 8, 2, 64, 26, 15, 30, 44, 127, 5, 7, 12]);

// Exercise #2
function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  console.log(str + ": " + count + " vowels");
}

// ex2 test cases
console.log("Exercie #2");
countVowels("Winter");
countVowels("Halcyon");
countVowels("Butterflies");

// Exercise #3
function sortNumbers(arr) {
  let sorted = arr.sort(function (a, b) { return a - b; });
  console.log("Sorted Array: " + sorted)
}

// ex3 test cases
console.log("Exercise #3")
sortNumbers([10, 5, 3, 17, 9]);
sortNumbers([14, 23, 4, 1, 43, 2, 21]);
sortNumbers([7, 5, 1, 12, 14, 39, 22, 65]);

// Exercise #4
function celciusToFahrenheit(celcius) {
  let fahrenheit = (celcius * 9/5) + 32;
  console.log(celcius.toFixed(1) + " Celcius = " + fahrenheit.toFixed(1) + " Fahrenheit")
}

// ex4 test cases
console.log("Exercise #4")
celciusToFahrenheit(30)
celciusToFahrenheit(25)
celciusToFahrenheit(12)