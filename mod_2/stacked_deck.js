var neat_cards_array = []
var card_values = [2,3,4,5,6,7,8,9,10,'A','J','Q','K']
var card_suits = ['d', 'h','c', 's']
for (var i = 0; i < card_values.length; i++) {
	for (var j = 0; j < card_suits.length; j++) {
		var newCardValue = "'" + card_values[i] + card_suits[j] + "'"
		neat_cards_array.push(newCardValue)
	}
}

console.log(neat_cards_array)

var StackedDeck = function(cheatCode) {
    
    this.shuffledDeck = [];

    if (cheatCode) {
    	// Not randomized
    } else {
    	// totally randomized
    }
}

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

shuffle(neat_cards_array)
