//jispe event aayega agar uspar listener nahi hai to humara event uske parent par listener dhundhega aur aisa karte karte uper ki taraf move karega

// let nav= document.querySelector("#nav");
// nav.addEventListener("click",function(){
//   alert("nav clicked");
// });
// let ul= document.querySelector("ul");
// ul.addEventListener("click",function(val){
// val.target.style.textDecoration = "line-through";
// });
let button=document.querySelector("#d");
button.addEventListener("click",function(val){
console.log("button clicked");
});
let c=document.querySelector("#c");
c.addEventListener("click",function(val){
console.log("c clicked");
});
let b=document.querySelector("#b");
b.addEventListener("click",function(val){
console.log("b clicked");
});
let a=document.querySelector("#a");
a.addEventListener("click",function(val){
console.log("a clicked");
});
