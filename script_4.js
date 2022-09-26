const monTableau=["Red","Rgba(133,122,200)","Green","#F15025",];
const mySpan=document.querySelector(".miniBox span");
const monBoutton=document.querySelector("button");
const monBack=document.querySelector("main");

function myNumber(){
    let myValue=Math.floor(Math.random()*4);
    return myValue;
}

monBoutton.addEventListener("click",(e)=>{

let i=myNumber();
monBack.style.backgroundColor=monTableau[i];
mySpan.textContent=monTableau[i];

})