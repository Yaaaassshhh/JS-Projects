
let panel=document.querySelectorAll(".panel");
let panel3=document.querySelector(".panel3");

panel.forEach(function(pan){
    pan.addEventListener("click",function(){
        pan.classList.toggle("addFlex");
        pan.classList.toggle("active")
        
    })
})