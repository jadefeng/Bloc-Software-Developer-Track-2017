var neat_cards_array = []
var card_values = [2,3,4,5,6,7,8,9,10,'A','J','Q','K']
var card_suits = ['d', 'h','c', 's']
for (var i = 0; i < card_values.length; i++) {
	for (var j = 0; j < card_suits.length; j++) {
		var newCardValue =  card_values[i] + card_suits[j] 
		neat_cards_array.push(newCardValue)
	}
}

// Object storing all the cheat codes and cards 
var cheat_codes_and_cards = { } 

// Completely Randomized Shuffle
// StackedDeck.prototype.shuffle = function () {
var shuffle = function (array) {
    var j, x, i;
    var a = array
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    // console.log(a)
    return a

}

var StackedDeck = function(cheatCode) {
    
    // this.shuffledDeck = [];
    var shuffledDeck = [];
    var deck_to_shuffle = neat_cards_array.slice() // clone the neat_cards_array

    if ( cheatCode !== undefined ) {
        console.log("The cheat code is " + cheatCode);

    	// Not randomized
        if (cheat_codes_and_cards.hasOwnProperty(cheatCode)) {
            console.log("The cheat code HAS been used before")
            // If cheatCode has already been used before, then pull it out of the storage object
            shuffledDeck = cheat_codes_and_cards[cheatCode];
        } else {
            console.log("The cheat code has not been used before")
            shuffledDeck = shuffle(deck_to_shuffle); // shuffle the deck
            cheat_codes_and_cards[cheatCode] = shuffledDeck // add to the cheat_codes cards
        }
    } else {
    	// totally randomized
        shuffledDeck = shuffle(deck_to_shuffle); // shuffle the deck
    }

    // console.log(shuffledDeck);
    return shuffledDeck;
}


cheat_codes_and_cards
// How to test:
StackedDeck()
StackedDeck(1)
StackedDeck(2)
StackedDeck(1)
