function transposeTwoStrings(arr){
	var transposed_string = [];

	var stringOne = arr[0];
	var stringTwo = arr[1];

	var max_length = Math.max(stringOne.length, stringTwo.length)
	console.log(stringOne, stringTwo, max_length)

	for (var i = 0; i < max_length; i++){
		transposed_string.push((stringOne[i] || " ") + " " + (stringTwo[i] || " ") + "\n")
	}
	// Join array into a string and take off last two characters '\n'
	var returned_string = transposed_string.join("").slice(0, -1);

	return returned_string
}

transposeTwoStrings(['Hello','World']);

