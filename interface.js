let currentTime = document.getElementById("currentTime") // take the Current Time
let totalTime = document.getElementById("totalTime") // take the total time of the song
let volume = document.getElementById("volume-input") // take the volume input
var progressId = document.getElementById("progress") // take the progress input


let play = document.getElementById("play") // take the play button

let repeat = document.getElementById("repeat") // take the reply/repeat button
let back = document.getElementById("back") // take the button to back
let next = document.getElementById("next") // take the button to pass the song

let check = 1 // variable to check the actual state of the song

// code block to play / pause the audio
play.addEventListener("click", () => {
    if(check == 1){
        console.log("Play")
        audio.play()

        play.src = path + "images/icons/pause.svg"
        check = 2
    } else if(check == 2){
        audio.pause()
        console.log("Pause")

        play.src = path + "images/icons/caret.svg"
        check = 1
    }
})

// code block to back the song
back.addEventListener('click', () => {
    trackCount--;
    check = 1

    play.src = path + "images/icons/pause.svg"
    changeMusic()
    audio.play()
    console.log("back")
})

// code block to pass the song
next.addEventListener('click', () => {
    trackCount++;
    check = 2

    play.src = path + "images/icons/pause.svg"
    changeMusic()
    audio.play()
    console.log("next")
})

// Repeat the song
repeat.addEventListener('click', () => {
    audio.currentTime = 0
})


audio.onloadedmetadata = () => {
    progressId.max = audio.duration
}

audio.ontimeupdate = function(){
    setInterval(duration, 1000) // Audio duration
    exactTime() // Current Time

    audio.volume = volume.value / 100
    progressId.value = audio.currentTime // value of input progress
}

// Function to take the song duration
function duration(){
    let minutes = parseInt(audio.duration / 60, 10);
    let seconds = parseInt(audio.duration % 60);

    var totalDuration = ""

    if(minutes < 10){
        minutes = "0" + minutes
    }

    if(seconds < 10){
        seconds = "0" + seconds
    }
    
    totalDuration = minutes + ":" + seconds
    totalTime.innerText = totalDuration
}

// Function to take the current time of the song
function exactTime(){
    let minutes = parseInt(audio.currentTime / 60)
    let seconds = parseInt(audio.currentTime % 60)

    let time = ""

    if(minutes < 10){
        minutes = "0" + minutes
    }
    
    if(seconds < 10){
        seconds = "0" + seconds
    }

    time = minutes + ":" + seconds
    currentTime.innerText = time

}

// Code block to when you click on the progress input, change the current time
progressId.addEventListener('change', () => {
    audio.currentTime = progressId.value 
})
