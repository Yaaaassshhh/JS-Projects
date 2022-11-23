let play=document.querySelector(".play");
let video=document.querySelector(".video");
let skip=document.querySelector(".skip");
let progress=document.querySelector("progress");
let backIcon=document.querySelector(".back-icon");
let forwardIcon=document.querySelector(".forward-icon");
let vol=document.querySelector(".vol");



play.addEventListener("click",function(){
    
    if(video.paused){
        video.play()
        play.classList.add("active");
    }
    else{
        video.pause();
        play.classList.remove("active");
    }    
})


video.addEventListener("timeupdate",function(){

    progress.value=video.currentTime;
    // console.log(video.currentTime);
})

skip.addEventListener("input",function(){

    console.log(skip.value);
    video.currentTime=skip.value;
})

backIcon.addEventListener("click",function(){

    video.currentTime=video.currentTime-5;
})

forwardIcon.addEventListener("click",function(){

    video.currentTime=video.currentTime+5;
})

vol.addEventListener("input",function(e){
    video.volume=vol.value/100;
    console.log(vol.value);
})


skip.max=Number(video.duration);

    

