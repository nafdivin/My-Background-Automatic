const mySpan=document.querySelector(".miniBox span");
const monBoutton=document.querySelector("button");
const monBack=document.querySelector("main");

const myGeneratorFunction=function(){
    let ColorAlea=Math.floor(Math.random()*0xFFFFFF).toString(16);
    return ColorAlea;
}

monBoutton.addEventListener("click",(e)=>{
    monBack.style.backgroundColor="#"+myGeneratorFunction();
    mySpan.textContent="#"+myGeneratorFunction();
})
