let input=document.querySelector("input");
let span=document.querySelector("span");
input.addEventListener("input",function(){
span.textContent=20-input.value.length;})