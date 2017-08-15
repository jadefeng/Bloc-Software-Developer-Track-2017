
// Jaden Casing Strings
// Method 1 (CodeWars structure)
String.prototype.toJadenCase = function () {
  var string = this; 

  if (string.length == 0)
  	return null

  string = string.toLowerCase().split(" ");
  // console.log(string)

  for (var i = 0; i < string.length; i++) {
  	string[i] = string[i].split('');
	string[i][0] = string[i][0].toUpperCase();
	string[i] = string[i].join('');
  }

  return string.join(' ')
};


var str = "How can mirrors be real if our eyes aren't real";
str.toJadenCase();

// Method 2 (declarational variable)


var toJadenCase = function (string) {
  if (string.length == 0)
  	return null

  string = string.toLowerCase().split(" ");
  // console.log(string)

  for (var i = 0; i < string.length; i++) {
  	string[i] = string[i].split('');
	string[i][0] = string[i][0].toUpperCase();
	string[i] = string[i].join('');
  }

  return string.join(' ')
};

var str = "How can mirrors be real if our eyes aren't real";
toJadenCase(str)