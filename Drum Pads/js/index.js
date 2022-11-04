let kitsCol=document.querySelectorAll(".kitsCol");
let kitsRow=document.querySelector(".kitsRow");
const kits=["clap","hihat","kick","snare"];


kits.forEach(function(kit){
    
    const buttonEl=document.createElement("button");
    const audioEl=document.createElement("audio");
    const sourceEl=document.createElement("source");

    sourceEl.src=`sound/${kit}.mp3`;
    audioEl.appendChild(sourceEl);

    buttonEl.classList.add("music");
    
    buttonEl.innerHTML=kit;

    

    kitsRow.appendChild(buttonEl);
    kitsRow.appendChild(audioEl);
    
    buttonEl.addEventListener("click",function(){
        
        audioEl.play();
        buttonEl.classList.add("active");
        setTimeout(()=>{
            buttonEl.classList.remove("active");
            
        },200)
    })
    
    window.addEventListener("keydown",function(e){
        
        
        if(e.key==kit.slice(0,1)){
            audioEl.play();
            buttonEl.classList.add("active");
            setTimeout(()=>{
                buttonEl.classList.remove("active");
                
            },200)
            
        }
        
    })
    
})


