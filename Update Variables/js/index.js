let spacing=document.querySelector("#spacing");
let blurs=document.querySelector("#blurs");
let colors=document.querySelector("#colors");



spacing.addEventListener("mousemove",function(){
    
    let spaceValue=spacing.value;

    document.documentElement.style.setProperty('--space',`${spaceValue}px`);
});


blurs.addEventListener("mousemove",function(){
    
    let blursValue=blurs.value;

    document.documentElement.style.setProperty('--blur',`${blursValue}px`);
});

colors.addEventListener("input",function(){
    
    let colorsValue=colors.value;

    console.log(this.value);

    document.documentElement.style.setProperty('--color',colorsValue);
});





