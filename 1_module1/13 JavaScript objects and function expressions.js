
var John = {
  name: "John Smith",
  age: 20,
  location: "San Francisco"
}

John.sex = "male";

// Function declaration

callPerson(person);

function callPerson (person) {
  console.log("Hello there, " + person.name ); 
}

// Function expression
var ageOneYear = function(person) {
  person.age += 1;
  console.log(person.name + " has turned a year older to " + person.age);
}

ageOneYear(John);
