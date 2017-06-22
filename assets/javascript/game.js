//Copied this Array
var countryList = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
//Made the Array LowerCase so key press will account for the first letter of the country
var lCaseCountryList = countryList.map(function(country) {
	return country.toLowerCase();
});
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var currentCountry = [];
var guessesRemaining = 12;
var lettersGuessed = [];
//This is a function called get All indexes
//It has two parameters
//arr meaning the name of the array
//val meaning the value we want to check for in our array
function getAllIndexes(arr, val) {
	//This makes an empty array called indexes
	var indexes = [];
	//This sets a variable i to 0
	//This is a for loop it starts at 0.
	//It will keep going until i is smaller than the length of the array is false
	//This will increment i by 1 at the end of the loop
	for(i = 0; i < arr.length; i++) {
		//The array will only run if the referenced index number of the array is equal to the value we specified in our function
		if (arr[i] === val)
			//This adds that value to our index array 
			indexes.push(i);
	}
	return indexes;
};








//Hangman Country Generator
var randomNumber = Math.floor(Math.random() * 208);
//This uses the the random number to reference the country by acting as the index number
var randomCountry = lCaseCountryList[randomNumber];
console.log(randomCountry);
//This splits the name of the country into letters
var hangmanWord = randomCountry.split("");
console.log(hangmanWord);
//This calculates the length of the word
var numLettersHangmanWord = hangmanWord.length;
document.getElementById("currentCountry").innerHTML = numLettersHangmanWord;
//Creating the Spaces for the HangmanWord
for (var i = numLettersHangmanWord; i > 0; i--) {
	//This appends to the array an underscore based on the length of the word
	currentCountry.push("_");
}
//Makes the array into a string
//_,_,_,_,_
var blankSpacesCommas = currentCountry.toString();
//This replaces commas globally, in other words every comma
//_ _ _ _ _
var blankSpacesNoCommas = blankSpacesCommas.replace(/,/g, " ");
console.log(blankSpacesNoCommas);
document.getElementById("currentCountry").innerHTML = blankSpacesNoCommas;

//User Input Letter Generator
document.getElementById("hangman").addEventListener("keypress", function(event) {
	console.log("I am listening");
	var htmlCode = event.which || event.keyCode;
	document.getElementById("htmlCode").innerHTML = "HTML Code:" + " " + htmlCode;
	var alphabetNumber = htmlCode - 97;
	document.getElementById("alphabetNumber").innerHTML = "Alphabet Number in Index:" + " " + alphabetNumber;
	var letter = alphabet[alphabetNumber];
	console.log(letter);
	document.getElementById("letter").innerHTML = "Letter You Chose:" + " " + letter;
	if (randomCountry.match(letter)) {
		console.log("Success");
		var successfulAttempts = getAllIndexes(hangmanWord, letter);
		console.log(successfulAttempts);
		
	}
	else {
		console.log("Fail");
	}
});








