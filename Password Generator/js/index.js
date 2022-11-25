let btn=document.querySelector(".btn");
let passwordCol=document.querySelectorAll(".password-col p");

const pass=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',1,2,3,4,5,6,7,8,9,0,'@','$','-','_','*'];

// console.log(pass[random]);


btn.addEventListener("click",function(e){

    e.preventDefault();
    let text="";
    for(i=0;i<8;i++){
        let random=Math.floor(Math.random()*pass.length);
        text=text+pass[random];
    }
    passwordCol[0].textContent=text;
    
    text="";
    for(i=0;i<8;i++){
        let random=Math.floor(Math.random()*pass.length);
        text=text+pass[random];
    }
    passwordCol[1].textContent=text;

})