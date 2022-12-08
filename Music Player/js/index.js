let play=document.querySelector(".play");
let head=document.querySelector(".head");
let subHead=document.querySelector(".sub-head");
let end=document.querySelector(".end");
let start=document.querySelector(".start");
let nextBtn=document.querySelector(".next-btn");
let prevBtn=document.querySelector(".prev-btn");
let progressBar=document.querySelector(".progress-bar");
let imgBox=document.querySelector(".img-box");
let img=document.querySelector(".img");
let progressFill=document.querySelector(".progress-fill");
let audioEl=document.querySelector("audio");


let isPlaying=false;

function playMusic(){
    isPlaying=true;
    audioEl.play();
    play.classList.add("active");
    imgBox.classList.add("rotate");
}


function pauseMusic(){
    isPlaying=false;
    audioEl.pause();
    play.classList.remove("active");
    imgBox.classList.remove("rotate");
}

play.addEventListener("click",function(){
    isPlaying?pauseMusic():playMusic();
})




const songs=[
    {
        name:1,
        head:"Lose Yourself",
        subHead:"Eminem"
        
    },
    {
        name:2,
        head:"Moonlight Sonata",
        subHead:"Beethoven"
    }
]

function tracks(songs){
    head.textContent=songs.head;
    subHead.textContent=songs.subHead; 
    audioEl.src=`img/${songs.name}.mp3`;
    img.src=`img/${songs.name}.jpg`;
}

let songsIndex=0;
tracks(songs[songsIndex]);

function nextSong(){
    pauseMusic();
    progressFill.style.width=0;
    songsIndex=(songsIndex+1)%songs.length;
    tracks(songs[songsIndex]);    
}

function prevSong(){
    pauseMusic();
    progressFill.style.width=0;
    songsIndex=(songsIndex-1 + songs.length)%songs.length;
    tracks(songs[songsIndex]);    
}

nextBtn.addEventListener("click",nextSong);
prevBtn.addEventListener("click",prevSong);




audioEl.addEventListener("timeupdate",function(e){
    let currentTime=audioEl.currentTime;
    let duration=audioEl.duration;
    let playerWidth=(currentTime / duration)*100;
    progressFill.style.width=`${playerWidth}%`;


    let minDuration=(Math.floor(duration/60));
    let secDuration=(Math.floor(duration%60));

    if(duration){
        if(secDuration<10){
            secDuration=`0${secDuration}`
        }
    end.textContent=`${minDuration}:${secDuration}`;
    }
    let minCurrentTime=(Math.floor(currentTime/60));
    let secCurrentTime=(Math.floor(currentTime%60));

    console.log(minCurrentTime);
    console.log(secCurrentTime);

    if(secCurrentTime<10){
        secCurrentTime=`0${secCurrentTime}`
    }
    start.textContent=`${minCurrentTime}:${secCurrentTime}`;

})

audioEl.addEventListener("ended",function(){
    pauseMusic();
    nextSong();
})
