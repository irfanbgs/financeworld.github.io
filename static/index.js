console.log("in the index js")

// Variable declaration
let masterPlay = document.getElementById('playPodcast');
let audioElement = new Audio('/static/1.mp3')
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    {songName: "Mere Humsafar", filePath :"/static/1.mp3"} 
    {songName: "Maiyya Mainu", filePath :"/static/2.mp3"} 
    {songName: "Socha Hai", filePath :"/static/3.mp3"} 
    {songName: "Thode Se Kam Ajnabee", filePath :"/static/4.mp3"} 
    {songName: "Jaan Ban Gaye", filePath :"/static/5.mp3"} 
]
//Listening to Events
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})


audioElement.addEventListener('timeupdate',()=>{
   progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
   myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})