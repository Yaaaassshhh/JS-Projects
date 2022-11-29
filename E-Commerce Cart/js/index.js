// LIKE BUTTON

let hearts=document.querySelectorAll(".wishlist ion-icon");

hearts.forEach(function(heart){
    heart.addEventListener("click",function(){
        
        if(!heart.dataset.id){
            heart.setAttribute("data-id","true");
            heart.setAttribute("name","heart");
        }
        
        else{
            heart.removeAttribute("data-id");
            heart.setAttribute("name","heart-outline");
        }
    })
})

// LIKE BUTTON


// MENU BUTTONS

let chargesPrice=document.querySelector("#charges-price");
let checkPrice=document.querySelector("#checkout-price");


function increase(item,price){
    let itemNum=document.getElementById(item);
    let priceNum=document.getElementById(price);
    if(itemNum.textContent<5){
        itemNum.textContent=Number(itemNum.textContent)+1;
        priceNum.textContent=Number(priceNum.textContent)+40;
        chargesPrice.textContent=Number(chargesPrice.textContent)+40;
        checkPrice.textContent=Number(chargesPrice.textContent)+50;
    }
    
    
}

function decrease(item,price){
    let itemNum=document.getElementById(item);
    let priceNum=document.getElementById(price);
    // console.log(itemNum.textContent);
    if(itemNum.textContent>1){
        itemNum.textContent=Number(itemNum.textContent)-1;
        priceNum.textContent=Number(priceNum.textContent)-40;
        chargesPrice.textContent=Number(chargesPrice.textContent)-40;
        checkPrice.textContent=Number(chargesPrice.textContent)+50;

    }
}

    
// MENU BUTTONS



// ARROW BUTTONS

let btnArrow=document.querySelector(".btn-arrow");
let hideCode=document.querySelector(".hide-code");



btnArrow.addEventListener("click",function(){

    hideCode.classList.toggle("active");    
    btnArrow.classList.toggle("rotate")
})

// ARROW BUTTONS




// COUPON CODE


let btnApply=document.querySelector(".btn-apply");
let codeMsg=document.querySelector(".code-msg");
let codeText=document.querySelector("#code-text");


btnApply.addEventListener("click",function(e){
    e.preventDefault();

    console.log(codeText.value);
    if(codeText.value=="215"){
        codeMsg.textContent="Hurray! Code is valid";
        checkPrice.textContent=Number(checkPrice.textContent)-20;
    }
    else{
        codeMsg.textContent="Code Expired";
    }


})













// COUPON CODE