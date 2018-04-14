var Letter = function(character) {
	//store value 
	this.character=character,
	this.check=false
	// need to check if the character passed into the function 
}

console.log(Letter);

Letter.prototype.getLetter = function () {
	if (this.check) {
		return this.character
	} else {
		return "_"
	}
} 

Letter.prototype.checkGuess = function (character) {
	if (character.toLowerCase() === this.charcter.toLowerCase()){
		this.check = true;
		return true
	} else {
		return false
	}
}

module.exports = Letter; 