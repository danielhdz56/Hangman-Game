# Hangman-Game
Need to fix spacing issue of certain countries
Need to replace & symbol with "and" on country list 
Need to update point system 
Need to document.write to users.
Document.write to users for guesses has been added.
Need to document.write to users for wins, losses, letters already guessed
Need to fix bug: code should not run if the letter was already successfully guessed.
Fixed bug that was causing the code to run even if the letter was already successfull by changing the condition on the if statement from:
if (lettersAlreadyGuessed.indexOf(guess) === -1 || hangmanWord.indexOf(guess) === -1) {
to the following condition statement:
if (lettersAlreadyGuessed.indexOf(guess) === -1 && hangmanWord.indexOf(guess) === -1) {