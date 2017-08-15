var fizzBuzzCustom = function(stringOne, stringTwo, numOne, numTwo) {
  // Create the array
  var array = [];
  for (var i = 1; i <= 100; i++) {
     array.push(i);
  }

  var firstNumber = numOne || 3
  var secondNumber = numTwo || 5
  console.log(firstNumber, secondNumber)

  var argOne = stringOne || "Fizz"
  var argTwo = stringTwo || "Buzz"
  var argMix = stringOne + stringTwo || "FizzBuzz"
  console.log(argOne, argTwo, argMix)

    // if no arguments are passed, the value of the index of the array should be 'Fizz if divisable by 3'
  for (var i = 0; i < array.length; i++) {
    if ((array[i] % firstNumber == 0) && (array[i] % secondNumber == 0)) {
      array[i] = argMix
    } else if (array[i] % firstNumber == 0) {
      console.log(array[i], firstNumber)
      array[i] = argOne
    } else if (array[i] % secondNumber == 0 ) {
      array[i] = argTwo
    }
  }

  console.log(array)
  return array;
};


// assert(fizzBuzzCustom()[15] = 16)                        // returns 16
// assert(fizzBuzzCustom()[44] = "FizzBuzz")