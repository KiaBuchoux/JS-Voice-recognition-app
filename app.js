const btn = document.querySelector("button");
const content = document.querySelector(".content");
const answer = document.querySelector(".answer");

//add speech recognition 
const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();
const hi = ["hi", "hello", "hi there", "hi you", "hiya"]
const greetings = ["I'm fine thank you and you", "I'm doing alrigh ish", "still alive", "can't complaine"]

recognition.onstart = ()=>{
    console.log("voice is activated, speak")
}

recognition.onresult = (event) => {
    console.log(event)
    const transcript = event.results[event.resultIndex][0].transcript
    console.log(transcript)
    content.textContent = "👧: "+ transcript
    speakOut(transcript)
}

btn.addEventListener("click", ()=>{
    recognition.start();
})

function speakOut(message){
    const speech = new SpeechSynthesisUtterance()
    speech.text = " I don't know what you said"

    if (message.includes("hello")||message.includes("hi")){
        speech.text = hi[Math.floor(Math.random()*hi.length)]
    }

    if (message.includes("how are you")){
        const finalText = Math.floor(Math.random()*greetings.length)
        speech.text = greetings[finalText]
    }
    
    speech.volume = 1 
    window.speechSynthesis.speak(speech)
    answer.textContent = "👾: " + speech.text
}
