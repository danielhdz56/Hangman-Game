//STEP1: CREATE VARIABLES
var numberOfGuessesRemaining = 12;
var lettersAlreadyGuessed = [];
//STEP2: Creating Array with Country List
//Got this online
var countryList = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
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
var hangmanWord = randomCountry.replace(/./gi, "_ ");
console.log(randomCountry);
console.log(hangmanWord);
//////////////////////////////////////////////////////////////
//STEP5: RECOGNIZE KEY INPUT FROM USER
//You can addEventListener directly to the document, you don't have to getElementById first!
//I am detecting for a keypress event 
//I am going to run a function with a parameter of userInput
//The user input "stores" the key that was pressed by the user
document.addEventListener("keypress", function(userInput) {
	//INSPECTING THIS IN THE CONSOLE HELPS TO UNDERSTAND WHAT THE PARAMETER IS: console.log(userInput);
	//The String.fromCharCode method returns a string based on the value associated with the key that was pressed
	//Note: This works if the user's browser supports keyCode or which
	console.log(String.fromCharCode(userInput.keyCode||userInput.which));

});