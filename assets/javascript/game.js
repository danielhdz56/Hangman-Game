var countryList = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
var lCaseCountryList = countryList.map(function(country) {
	return country.toLowerCase();
});
console.log(lCaseCountryList);
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var currentCountry = [];
var guessesRemaining = 12;
var lettersGuessed = [];

//Hangman Country Generator
var randomNumber = Math.floor(Math.random() * 208);
console.log(randomNumber);
var randomCountry = lCaseCountryList[randomNumber];
console.log(randomCountry);
var hangmanWord = randomCountry.split("");
console.log(hangmanWord);
var numLettersHangmanWord = hangmanWord.length;
console.log(numLettersHangmanWord);
document.getElementById("currentCountry").innerHTML = numLettersHangmanWord;
//Creating the Spaces for the HangmanWord
for (var i = numLettersHangmanWord; i > 0; i--) {
	currentCountry.push("_");
}
//Makes the array into a string
var blankSpacesCommas = currentCountry.toString();
console.log(blankSpacesCommas);
//This replaces commas globally, in other words every comma
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
	document.getElementById("letter").innerHTML = "Letter You Chose:" + " " + letter;
});

