let translateInput = document.querySelector("#translate-input")
let translateButton = document.querySelector("#translate-button")
let translateOutput = document.querySelector("#translate-output")

const SERVER_URL = "https://api.funtranslations.com/translate/yoda.json";

translateButton.addEventListener("click", fetchTranslated)

function fetchTranslated() {
    let inputText = translateInput.value
    if (inputText == "") {
        alert("Please enter some text");
        return;
    }

    const url =  SERVER_URL + "?" + "text=" + inputText
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            var translatedText = data.contents.translated
            translateOutput.innerText = translatedText
        })
        .catch(err => {
            console.log(err)
            alert("Not respond, server did")
        })
}

