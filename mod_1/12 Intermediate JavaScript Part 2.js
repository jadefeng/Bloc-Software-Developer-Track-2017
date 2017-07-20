
// Declare the variables we intend to use later.
var cats,
    noms;

// Next, create the function we'll use. This is what you'll modify to make the
// code work.

function nameBeginsWithM (name) {
  return name.charAt(0) == 'M';
}

/**
 * Determines which animals get a treat.
 * @param  {array} animals The animals to feed.
 * @return {array}         A list of who was given a treat.
 */
function treatDispenser(animals) {
  
  // This array will hold all of the messages we'll return from the function.
  var results = [];

  // Hint: Put your super awesome loop here. :)

  for(var i = 0; i < cats.length; i++) {
      if (nameBeginsWithM(cats[i])) {
        // console.log('No treat for '+ cats[i] + '.');
        results.push('No treat for '+ cats[i] + '.');
      } else {
        // console.log(cats[i] + ' loved their treat!');
        results.push(cats[i] + ' loved their treat!');
      }
  }
  
  
  return results;
}

cats = [
  'Jayne',
  'Kaylee',
  'Malcolm',
  'Monty',
  'River',
  'Simon',
  'Zoë'
];

noms = treatDispenser(cats);

console.log(noms);

// This should output:
//   [
//     "Jayne loved their treat!",
//     "Kaylee loved their treat!",
//     "No treat for Malcolm",
//     "No treat for Monty",
//     "River loved their treat!",
//     "Simon loved their treat!",
//     "Zoë loved their treat!"
//   ]
