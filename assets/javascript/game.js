//STEP0: SETUP HTML
//0A: FadeIn Transition
var elem = document.getElementById("appearSlow");
//The timer variable in this case represents the opacity
var timerOpacity = 0;
function moreVisible() {
	//We set this condition to make sure that the highest value for the opacity is 1
	//Note if the condition is never true than this will go on forever! 
	if (timerOpacity >= 1) {
		//The clearInterval method clears a timer that is set by the setInteval method
		//In essence, it ends the setInterval method from calling
		//The ID value returned by setInteval is used as the parameter for clearInterval
		//This is why we set t as the returned value of setInterval
		//and then write that t as the parameter for clearInterval
		clearInterval(t);
	}
	//This is the rate at which the timerOpacity is changing
	timerOpacity += 0.05;
	//I am focusing on the elem object (which in this case is the appearSlow id) and setting it to the value of the timer
	elem.style.opacity = timerOpacity;
	//This is the same thing as before, it is just support for I8 and lower browsers
	elem.style.filter="alpha(opacity=" + (timerOpacity*100)+")";
}
//The setInterval is constantly calling the moreVisible function at specified intervals (in milliseconds) in this case 25
var t = setInterval(moreVisible, 25);
//OB: Right Transition
var elem2 = document.getElementById("transitionRight");
var timerPosition = 700;
function bringRight() {
	if (timerPosition <= 10) {
		clearInterval(t2);
	}
	timerPosition -= 10;
	elem2.style.right = timerPosition + "px";
}
var t2 = setInterval(bringRight, 25);
//0C: Down Transition
var elem3 = document.getElementById("transitionDown");
//Started this timer higher than my 62px
var timerPosition2 = 300;
function bringDown() {
	if (timerPosition2 == 2) {
		clearInterval(t3);
	}
	//Have to make sure that timerPosition%change is equal to zero or else it will go down forever
	timerPosition2 -= 2;
	//had to add "px" because it won't understand at what position. 
	//Note did not have to do it above for the opacity because we don't specify a unit 
	elem3.style.bottom = timerPosition2 + "px";
}
var t3 = setInterval(bringDown, 25);
//STEP1: CREATE VARIABLES
var numberOfGuessesRemaining = 5;
var lettersAlreadyGuessed = [];
var wins = 0;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//STEP2: Creating Array with Country List
//Got this online
var countryList = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre and Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts and Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
//making the array lowercase by using the map method
//inside of the map method I run a function with a parameter of country
//every element inside of my array is being fed into the "country" parameter
//in other words the map array creates a new array with the results of calling a provided
//function on every element in the calling array
var lCaseCountryList = countryList.map(function(country){
	//it is returning every index value in lowercase form
	return country.toLowerCase();
});
//STEP3: GENERATING A RANDOM COUNTRY FROM ARRAY
//3A: CREATE A RANDOM NUMBER THAT IS ONE LESS THAN THE LENGTH OF THE ARRAY (for indexing purposes)
var randomNumber = Math.floor(Math.random() * lCaseCountryList.length);
//3B: MATCH IT WITH THE INDEX VERSION
var randomCountry = lCaseCountryList[randomNumber];
//STEP4: TURN INTO HANGMAN FORM
//The /./ matches everything
//Future reference, If I want to use the literal . I have to escape it  /\./
var hangmanWord = randomCountry.replace(/./gi, "_");
//This creates a space between every underscore
//This takes into acount every match because of the .
//After the 1 position it will copy the original value because of the $
//After what you replaced it will add a space
//////////////////////////////////////////////////////////////
//STEP5: CREATE A REPLACE AT FUNCTION THAT WILL BE USED LATER 
String.prototype.replaceAt = function(indexMatched, guess) {
	//this refers to the string that I use the replaceAt function on
	//For Example: hangmanWord.replaceAt(i, guess);
	//this will refer to hangmanWord
	//substr(0, indexMatched) will return a substring of "this" starting from 0 to indexMatched
	//this.substr(indexMatched + guess.length) doesn't specify an end, so it is going to stop until the end of "this"
	return this.substr(0, indexMatched) + guess + this.substr(indexMatched + guess.length);
}
//////////////////////////////////////////////////////////////
//Made Hangman not take into consideration spaces, or punctuation in name to affect game
for (i = 0; i < randomCountry.length; i++) {
	if (" " === randomCountry[i]) {
		//If you just use " " instead of "\xa0" it will not write two spaces when using innerHTML 
		var hangmanWord = hangmanWord.replaceAt(i, "\xa0");
	}
	if ("." === randomCountry[i]) {
		var hangmanWord = hangmanWord.replaceAt(i, "\.");
	}
	if ("'" === randomCountry[i]) {
		var hangmanWord = hangmanWord.replaceAt(i, "\'");
	}
	//Accounts for Virgin Islands (US)
	if("(" === randomCountry[i]) {
		var hangmanWord = hangmanWord.replaceAt(i, "\(");
	}
	if(")" === randomCountry[i]) {
		var hangmanWord = hangmanWord.replaceAt(i, "\)");
	}
}
var hangmanLetters = hangmanWord.replace(/(.{1})/g, "$1 ");
console.log(hangmanLetters);
document.getElementById("currentCountry").innerHTML = hangmanLetters;
console.log(randomCountry);
//////////////////////////////////////////////////////////////
//STEP6: RECOGNIZE KEY INPUT FROM USER
//You can addEventListener directly to the document, you don't have to getElementById first!
//I am detecting for a keypress event 
//I am going to run a function with a parameter of event
//The event "stores" the key that was pressed by the user
document.addEventListener("keypress", function(event) {
	//INSPECTING THIS IN THE CONSOLE HELPS TO UNDERSTAND WHAT THE PARAMETER IS: console.log(event);
	//The String.fromCharCode method returns a string based on the value associated with the key that was pressed
	//Note: This works if the user's browser supports keyCode or which
	var guess = String.fromCharCode(event.keyCode||event.which);
	guess = guess.toLowerCase();
	//The code will only run if the user hasn't guessed that letter yet
	//and if that letter hasn't already been successful
	if ((lettersAlreadyGuessed.indexOf(" " + guess) === -1) && (hangmanWord.indexOf(guess) === -1) && (alphabet.indexOf(guess) !== -1)) {
		//Will only run if the guess is correct, true
		if (randomCountry.includes(guess)) {
			//Creating a for loop that iterates every index of the randomCountry string
			for (i = 0; i < randomCountry.length; i++) {
				//At every iteration i am going to check if there is a match
				if (guess === randomCountry[i]) {
					//if there is a match and its the first letter I am going to uppercase that letter
					if (i === 0) {
						hangmanWord = hangmanWord.replaceAt(i, guess.toUpperCase());
					}
					//so long as the first letter of the word is not and i will evaluate this statement
					//if there is a match and its preceded by a space in the name I am going to uppercase that letter
					else if (" and " !== (randomCountry[i-1] + randomCountry[i] + randomCountry[i+1] + randomCountry[i+2] + randomCountry[i+3])) {
						if (" of " === (randomCountry[i-1] + randomCountry[i] + randomCountry[i+1] + randomCountry[i+2])) {
							hangmanWord = hangmanWord.replaceAt(i, guess);		
						}
						else if (" " === randomCountry[i-1]) {
							hangmanWord = hangmanWord.replaceAt(i, guess.toUpperCase());
						}
						else {
							//if there is a match I am going to update my hangmanWord
							hangmanWord = hangmanWord.replaceAt(i, guess);
							console.log("first letter first letter");
						}
						console.log("and and and and");
					}
					else {
						hangmanWord = hangmanWord.replaceAt(i, guess);
					}
				}
			}
			//updates the user of correct guess
			hangmanLetters = hangmanWord.replace(/(.{1})/g, "$1 ");
			document.getElementById("currentCountry").innerHTML = hangmanLetters;
			//This checks if we have guessed all the correct words
			if (hangmanWord.indexOf("_") === -1) {
				wins++;
				document.getElementById("wins").innerHTML = wins;
			}
		}
		//if the guess is not correct this will run
		else {
			//this adds our guesses to our array
			lettersAlreadyGuessed.push(" " + guess);
			document.getElementById("lettersGuessed").innerHTML = lettersAlreadyGuessed;
			numberOfGuessesRemaining--;
			document.getElementById("guessesRemaining").innerHTML = numberOfGuessesRemaining;
			//This will slowly appear the words loser. Note you can concatinate everywhere
			document.getElementById("loser" + (numberOfGuessesRemaining+1)).style.visibility = "visible";
		}
		//This will reset the word if the user wins or runs out of guesses
		if ((hangmanWord.indexOf("_") === -1) || (numberOfGuessesRemaining === 0)) {
			setTimeout(function() {
				alert("Keep Playing!");
				randomNumber = Math.floor(Math.random() * lCaseCountryList.length);
				randomCountry = lCaseCountryList[randomNumber];
				hangmanWord = randomCountry.replace(/./gi, "_");
				for (i = 0; i < randomCountry.length; i++) {
					if (" " === randomCountry[i]) {
						hangmanWord = hangmanWord.replaceAt(i, "\xa0");
					}
					if ("." === randomCountry[i]) {
						hangmanWord = hangmanWord.replaceAt(i, "\.");
					}
					if ("'" === randomCountry[i]) {
						hangmanWord = hangmanWord.replaceAt(i, "\'");
					}
					if ("(" === randomCountry[i]) {
						hangmanWord = hangmanWord.replaceAt(i, "\(");
					}
					if(")" === randomCountry[i]) {
						hangmanWord = hangmanWord.replaceAt(i, "\)");
					}
				}
				hangmanLetters = hangmanWord.replace(/_/gi, "_ ");
				document.getElementById("currentCountry").innerHTML = hangmanLetters;
				numberOfGuessesRemaining = 5;
				document.getElementById("guessesRemaining").innerHTML = numberOfGuessesRemaining;
				//This resets the visibility of loser
				for (j = 5; j >= 1; j--) {
					document.getElementById("loser" + j).style.visibility = "hidden";
				}
				lettersAlreadyGuessed = [];
				document.getElementById("lettersGuessed").innerHTML = lettersAlreadyGuessed;
				console.log(randomCountry);
			}, 1000);
		}	
	}
	else if (alphabet.indexOf(guess) === -1) {
		console.log("INVALID ENTRY");
	}
	else {
		console.log("You already guessed this letter");
	}
});