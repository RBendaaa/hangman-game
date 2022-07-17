let wordBeingGuessed = chooseWord()
document.getElementById("word").textContent = hideWord(wordBeingGuessed)
loadButtons(wordBeingGuessed)