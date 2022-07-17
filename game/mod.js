let wordP = document.getElementById("word")
let imageState = 0
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let lettersOnButtons = []
function chooseWord(){
    let jsonWords = '{"words" : [{"word": "jason"},'+
    '{"word":"carpet"}, '+
    '{"word":"pool"}, '+
    '{"word":"ear"}]}'
    let words = JSON.parse(jsonWords)
    return words.words[Math.floor(Math.random() * (words.words.length))].word
}

function hideWord(word){
    let hiddenWord = ""
    for (let i = 0; i < word.length; i++){
        hiddenWord += "- "
    }
    return hiddenWord.trim()
}

function loadButtons(word){
    let btn
    let randInd
    let enabledLetters = []
    for (l in alphabet){
        if (word.includes(alphabet[l])){
            enabledLetters.push(alphabet[l])
            alphabet.splice(l, 1)
        }
    }
    while (enabledLetters.length < 20){
        randInd = Math.floor(Math.random() * (alphabet.length))
        enabledLetters.push(alphabet[randInd])
        alphabet.splice(randInd, 1)
    }
    for (let i = 0; i < 20; i++){
        btn = document.createElement("button")
        document.getElementById("input").appendChild(btn)
        randInd = Math.floor(Math.random() * (enabledLetters.length))
        btn.textContent = enabledLetters[randInd].toUpperCase()
        btn.id = "btn" + i
        btn.onclick = function checkLetter(){
            let currBtn = document.getElementById(this.id)
            let letter = currBtn.textContent.toLowerCase()
            currBtn.disabled = true
            if(wordBeingGuessed.includes(letter)){
                for (n in wordBeingGuessed){
                    if(wordBeingGuessed[n] == letter){
                        wordP.textContent = wordP.textContent.substr(0, n*2) + letter.toUpperCase() + wordP.textContent.substr((n*2)+1, wordP.textContent.length)
                    }
                }
                if (!(wordP.textContent.includes("-"))){
                    document.getElementById("image").src = "images/iYW.jpg"
                    for(let n = 0; n < 20; n++){
                        document.getElementById("btn" + n).disabled = true
                    }
                }
            }
            else{
                if(imageState < 10){
                    document.getElementById("image").src = "images/i" + imageState + ".jpg"
                    imageState++
                }
                else{
                    document.getElementById("image").src = "images/iGO.jpg"
                    for(let n = 0; n < 20; n++){
                        document.getElementById("btn" + n).disabled = true
                    }
                }
            }
        }
        lettersOnButtons.push(enabledLetters[randInd].toUpperCase())
        enabledLetters.splice(randInd, 1)
    }
}