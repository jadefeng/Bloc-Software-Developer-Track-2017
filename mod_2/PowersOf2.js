var powersOfTwo = function(n) {
	var array = []
	for (var i = 0; i <= n; i++ ) {
		array.push( Math.pow(2, i));
	}
	return array;
}

var mostFrequentItemCount = function(array) {
	if (array.length == 0) 
		return 0; // return null if the array is empty
	var countObject = {}; // The object has a key : value, where key is the item and value is the count

	for (var i = 0; i < array.length; i++ ) { 
		var item = array[i];
		if (countObject.hasOwnProperty(item)) { // if the item already sits as a key in the countObject object, increase the count in value
			countObject[item]++;
		} else { //if the item does not exist, then add it to the key:value pair with a count of 1
			countObject[item] = 1;
		}	
	}
	
	var maxKey = Object.keys(countObject).reduce(function(a, b){ // Find the key with the highest value
		return (countObject[a] > countObject[b] ? a : b); // deciding on the higher between a and b in the array. 
	});
	return countObject[maxKey];

}

	// Object.keys(countObject) returns list of unique objects in countObject
	// .reduce takes a list and and applies a function to each pair of items and replacing the return value of that function in place of the pair
	// Could replace with: return Math.max(Object.values(countObject)); 


function createPhoneNumber(numbers){
  if (numbers.length != 10)
  	return null;

  numbers.splice(0, 0, "(");
  numbers.splice(4, 0, ") ");
  numbers.splice(8,0,"-");
  console.log(numbers);
  return numbers.join("");
}

// * Powers of 2: For some reason, my code is not submitting. Please see attached commit. 
// * Frequent arrays: https://www.codewars.com/kata/reviews/565855365c9ceebb90000053/groups/5982c6a2eda935126a001c15
// * Phone number: https://www.codewars.com/kata/reviews/525f50e3b73515a6db000b86/groups/5982c5f90634afa48e000774 