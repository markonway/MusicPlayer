let audio = document.getElementById("audio") // take the audio
let title = document.getElementById("title") // take the music title
let background = document.getElementById("album-background") // take the album background

// path way
let path = "assets/"
// track count
var trackCount = 0

// Playlist
var Estelle = {
    name: "Estelle ft.Kanye West - American Boy",
    track1: "audio/audio1.mp3",
    background: "images/220px-American_Boy_UK_Cover.jpg"
}

var metallica = {
    name: "Metallica - I Am Evil",
    track1: "audio/audio3.mp3",
    background: "images/master_cover.jpg"
}

var rageAgainstMachine = {
    name: "Rage Against Machine - Killing in...",
    track1: "audio/audio2.mp3",
    background: "images/RageAgainsttheMachineRageAgainsttheMachine.jpg"   
}

// all songs are stored in this array
let playlist = []
playlist.push(Estelle, metallica, rageAgainstMachine)

// function to change the songs
function changeMusic (){

    if (trackCount < 0){
        trackCount = 0

        title.innerText = playlist[0].name
        audio.src = path + playlist[0].track1
        background.src = path + playlist[0].background

    } else if(trackCount < playlist.length || 0) {
        
        title.innerText = playlist[trackCount].name
        audio.src = path + playlist[trackCount].track1
        background.src = path + playlist[trackCount].background

    } else if(trackCount > playlist.length - 1){
        trackCount = 0

        title.innerText = playlist[0].name
        audio.src = path + playlist[0].track1
        background.src = path + playlist[0].background

    }
}

changeMusic()
