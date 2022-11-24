let nums1=document.querySelectorAll(".num1");
let nums2=document.querySelectorAll(".num2");
let home=document.querySelector(".home");
let guest=document.querySelector(".guest");


nums1.forEach(function(num1){

    num1.addEventListener("click",function(){
        let numArr=Number(num1.textContent.slice(1));
        let text=Number(home.textContent);
        home.textContent=text + numArr;
    });
})

nums2.forEach(function(num2){

    num2.addEventListener("click",function(){
        let numArr=Number(num2.textContent.slice(1));
        let text=Number(guest.textContent);
        guest.textContent=text + numArr;
    });
})