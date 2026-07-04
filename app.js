const speech = new SpeechSynthesisUtterance();

const btn = document.querySelector("button");
const textArea = document.querySelector("textarea");
const sel = document.querySelector("select");

let voices = [];


speechSynthesis.onvoiceschanged = () => {

    voices = speechSynthesis.getVoices();

    voices.forEach((voice) => {

        let option = document.createElement("option");

        option.innerText = voice.name;
        option.value = voice.name;

        sel.append(option);

    });

};

btn.addEventListener("click", () => {

    speech.text = textArea.value;

    const selectedVoice = voices.find((voice) => {
        return voice.name === sel.value;
    });

    speech.voice = selectedVoice;

    speechSynthesis.speak(speech);

});