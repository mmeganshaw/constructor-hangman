var Letter = function(character, check) {
	//store value 
	this.character=character,
	this.guessed=false
	// need to check if the character passed into the function 
}

console.log(Letter);

Letter.prototype.getLetter = function () {
	if (this.guessed) {
		return this.character
	} else {
		return "_"
	}
} 

Letter.prototype.checkGuess = function (character) {
	if (character.toLowerCase() === this.charcter.toLowerCase()){
		this.guessed = true;
		return true
	} else {
		return false
	}
}

module.exports = Letter; 